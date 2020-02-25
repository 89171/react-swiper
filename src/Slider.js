import React, { Component } from 'react';
import { throttle } from 'throttle-debounce';
import './Slider.css';

export default class Slider extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedIndex: props.curIdx || 0
        };
        this.itemWidth = 0;
        this.moveXStart = 0;
        this.moveXEnd = 0;
        this.startTransformX = 0;
        this.defaultWidth = parseInt(props.itemWidth) || 50
    }
    static jumpToIndex(index){
        this.moveToIndex(index)
    }
    componentDidMount() {
        const { selectedIndex } = this.state;
        if(!this.slideWrapper || this.itemWidth){
            return;
        }
        this.itemWidth = this.slideWrapper.getBoundingClientRect().width * this.defaultWidth /100;
        //处理默认Index
        if (selectedIndex !== 0) {
            this.slideWrapper.style.transform = `translate3d(-${selectedIndex * this.itemWidth}px,0,0)`;
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.curIdx !== this.state.selectedIndex){
            this.moveToIndex(nextProps.curIdx)
        }
    }
    boundXValue(value) {
        //计算边界
        const { dataList } = this.props;
        //获取transformX 距离
        let result = value > 0 ? 0 : value;
        result =
            result < this.itemWidth * (1 - dataList.length)
                ? this.itemWidth * (1 - dataList.length)
                : result;
        return result;
    }
    getTransX() {
        const transStr = this.slideWrapper.style.transform;
        // TODO
        return parseInt(transStr && transStr.split(',')[0].split('(')[1]) || 0;
    }
    selectItem(item, index) {
        if(this.touchMoved) return;
        //点击切换到指定index
        if (index === this.state.selectedIndex) return;
        this.moveToIndex(index);
    }
    moveToIndex(index,force) {
        //force强制跳转，当拖动部分距离后松开，不满足跳转条件需要回到原有位置
        //跳转到index位置
        const { dataList } = this.props,
            {selectedIndex} = this.state;
        let tempIndex = index < 0 ? 0 : index;
        tempIndex =
            tempIndex > dataList.length - 1 ? dataList.length - 1 : tempIndex;
        if (tempIndex === selectedIndex && !force)
            return;
            this.slideWrapper.style.transform = `translate3d(-${tempIndex * this.itemWidth}px,0,0)`;
        this.setState({
            selectedIndex: tempIndex
        });
        this.props.onSlide(dataList[index],index)
    }
    handleTouchStart = e => {
        const touchPoint = e.touches[0];
        this.startTransformX = this.getTransX();
        this.moveXStart = touchPoint.clientX;
        this.slideWrapper.classList.remove('slider_transition')
    }
    handleTouchMove = throttle(10,(e) => {
        const touchPoint = e.touches[0],
        // moveXEnd = this.moveXEnd,
        moveXStart = this.moveXStart;
        this.moveXEnd = touchPoint.clientX;
        // 拖动
        let moveSpace = this.moveXEnd - moveXStart;
        if(Math.abs(moveSpace || 0) > 5){
            this.touchMoved = true;
        }
        let Xspace = parseInt(parseInt(this.startTransformX) + moveSpace)
        this.slideWrapper.style.transform = `translate3d(${this.boundXValue(Xspace)}px,0,0)`
    })
    handleTouchEnd = e => {
        this.slideWrapper.classList.add('slider_transition')
        setTimeout(()=>{
            const moveSpace = this.moveXEnd - this.moveXStart,
            itemWidth = this.itemWidth,
            selectedIndex = this.state.selectedIndex,
            moveToIndex = this.moveToIndex.bind(this);
            if (this.moveXEnd !== 0) {
                let slideIndex;
                //点击当前已选中的车型（this.moveXEnd == 0）不做处理
                switch (true) {
                    case moveSpace > itemWidth / 4:
                        // 支持滑动多个滑动，滑动判断：超出当前元素宽度四分之一  
                        slideIndex = Math.ceil((moveSpace - itemWidth/4) /itemWidth) || 1
                        moveToIndex(selectedIndex - slideIndex);
                        break;
                    case moveSpace < 0 && Math.abs(moveSpace) > itemWidth / 4:
                        slideIndex = Math.abs(Math.floor((moveSpace + itemWidth/4)/itemWidth)) || 1
                        moveToIndex(selectedIndex + slideIndex);
                        break;
                    default:
                        moveToIndex(selectedIndex,true);
                        break;
                }
            }else if(this.touchMoved){
                moveToIndex(selectedIndex + 1);
            }
            this.touchMoved = false;
            this.moveXEnd = this.moveXStart = 0;
        },30)
    }
    handleTouchCancel = e => {
        this.moveToIndex(this.state.selectedIndex,true);
    }
    render(){
        const { 
            dataList=[],
            renderItem,
            className="",
            itemStyle={},
            activeClass="",
            prevClass="" 
        } = this.props,
            { 
                selectedIndex 
            } = this.state;
        return (
            <div className="slider_wrapper"
                onTouchStart={this.handleTouchStart}
                onTouchMove={(e)=>{
                    e.persist();
                    this.handleTouchMove(e)
                }}
                onTouchEnd={this.handleTouchEnd}
                onTouchCancel={this.handleTouchCancel}
            >
                <div
                    ref={ref => (this.slideWrapper = ref)}
                    className={`slider_item_wrapper slider_transition ${className || ''}`}
                >
                    {dataList.map((item, index) => {
                        return (
                            <div
                                key={item.id}
                                onClick={() =>{
                                    selectedIndex !== index &&
                                    this.selectItem(item, index)}
                                }
                                className={ `slider_item ${selectedIndex !== index?prevClass:activeClass}` }
                                opc={`${selectedIndex !== index ? 's' : ''}`}
                                style={{
                                    marginLeft: index === 0 ? `${(100-this.defaultWidth)/2}%` : '0%',
                                    marginRight: index === dataList.length - 1 ?
                                        `${(100-this.defaultWidth)/2}%`
                                        : '0%',
                                    width: `${this.defaultWidth}%`|| '50%',
                                    ...itemStyle,
                                }}
                            >
                                {
                                    renderItem(item,index)
                                }
                            </div>
                        );
                    })}
                </div>
            </div>
        )
    }
}