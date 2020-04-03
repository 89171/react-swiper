import React, { PureComponent } from 'react';
import { throttle } from 'throttle-debounce';
import './swiper.css';
// import PropTypes from 'prop-types'

export default class Slider extends PureComponent{
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
        this.handleTouchStart = this.handleTouchStart.bind(this);
        this.handleTouchMove = throttle(10,this.handleTouchMove.bind(this));
        this.handleTouchEnd = this.handleTouchEnd.bind(this);
        this.handleTouchCancel = this.handleTouchCancel.bind(this);
    }
    componentDidMount() {
        const { selectedIndex } = this.state;
        if(!this.slideWrapper || this.itemWidth){
            return;
        }
        this.itemWidth = this.slideWrapper.getBoundingClientRect().width * this.defaultWidth /100;
        window.addEventListener("resize", throttle(200,()=>{
            const { selectedIndex } = this.state;
            this.itemWidth = this.slideWrapper.getBoundingClientRect().width * this.defaultWidth /100;
            this.slideWrapper.style.transform = `translate3d(-${selectedIndex * this.itemWidth}px,0,0)`;
        }))
        //处理默认Index
        if (selectedIndex !== 0) {
            const { dataList=[] } = this.props;
            if(dataList.length === 0) return;
            const maxIndex = selectedIndex > (dataList.length - 1) ? dataList.length - 1 : selectedIndex
            console.log(maxIndex,this.itemWidth,this.boundXValue(maxIndex * this.itemWidth))
            this.slideWrapper.style.transform = `translate3d(${this.boundXValue(-1*maxIndex * this.itemWidth)}px,0,0)`;
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.curIdx !== this.state.selectedIndex){
            this.moveToIndex(nextProps.curIdx)
        }
    }
    boundXValue(value) {
        //计算边界
        const { dataList,needPadding=true } = this.props;
        //获取transformX 距离
        let result = value > 0 ? 0 : value;
        result =
            result < this.itemWidth * (1 - dataList.length)
                ? this.itemWidth * (1 - dataList.length)
                : result;
        if(!needPadding){
            const wrapperWidth = this.itemWidth/this.defaultWidth*100;
            const swiperWidth = dataList.length * this.itemWidth;
            const gap = 0;
            result = Math.abs(result) >= (swiperWidth - wrapperWidth) ? (wrapperWidth - swiperWidth) : result
        }
        return result;
    }
    getTransX() {
        const transStr = this.slideWrapper.style.transform;
        // TODO
        return parseInt(transStr && transStr.split(',')[0].split('(')[1]) || 0;
    }
    selectItem(item, index) {
        const { clickTrigger=true, itemClick } = this.props;
        if(this.touchMoved || !clickTrigger) return;
        itemClick && itemClick(item, index)
        //点击切换到指定index
        if (index === this.state.selectedIndex) return;
        this.moveToIndex(index);
        
    }
    getClentX(e){
        return e.clientX ? e.clientX : (e.touches && e.touches[0] && e.touches[0].clientX)
    }
    getClentY(e){
        return e.clientY ? e.clientY : (e.touches && e.touches[0] && e.touches[0].clientY)
    }
    moveToIndex(index,force) {
        //force强制跳转，当拖动部分距离后松开，不满足跳转条件需要回到原有位置
        //跳转到index位置
        const { dataList, needPadding, onSlide } = this.props,
            {selectedIndex} = this.state;
        let tempIndex = index < 0 ? 0 : index;
        tempIndex =
            tempIndex > dataList.length - 1 ? dataList.length - 1 : tempIndex;
        if (tempIndex === selectedIndex && !force) return;
        let currentTrans = -tempIndex * this.itemWidth;
        if(!needPadding){
            currentTrans = this.boundXValue(currentTrans)
        }
        this.slideWrapper.style.transform = `translate3d(${currentTrans}px,0,0)`;
        this.setState({
            selectedIndex: tempIndex
        });
        onSlide && onSlide(dataList[index],index)
    }
    handleTouchStart(e) {
        // const touchPoint = e.touches[0];
        this.startTransformX = this.getTransX();
        this.moveXStart = this.getClentX(e);
        this.moveYStart = this.getClentY(e);
        this.slideWrapper.classList.remove('slider_transition')
    }
    handleTouchMove(e) {
        if(!this.moveXStart) return;
        const moveXStart = this.moveXStart;
        const moveYStart = this.moveYStart;
        this.moveXEnd = this.getClentX(e);
        this.moveYEnd = this.getClentY(e);
        // 拖动
        let moveSpace = this.moveXEnd - moveXStart;
        let moveYSpace = this.moveYEnd - moveYStart;
        if(Math.abs(moveYSpace || 0) > Math.abs(moveSpace || 0)){ //上下滑动
            return
        }
        if(Math.abs(moveSpace || 0) > 10){
            this.touchMoved = true;
        }
        let Xspace = parseInt(parseInt(this.startTransformX) + moveSpace)
        this.slideWrapper.style.transform = `translate3d(${this.boundXValue(Xspace)}px,0,0)`
    }
    handleTouchEnd(e) {
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
    handleTouchCancel(e){
        this.moveToIndex(this.state.selectedIndex,true);
    }
    render(){
        const { 
            dataList=[],
            renderItem,
            wrapperClass="",
            itemClass="",
            needPadding=true,
            itemStyle={},
            activeClass="",
            prevClass="",
            itemClick,
            clickTrigger=true,
            paginationWrapper="",
            paginationPrevClass="",
            paginationActiveClass="",
            needPagination=false
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
                onMouseDown={this.handleTouchStart}
                onMouseMove={(e)=>{
                    e.persist();
                    this.handleTouchMove(e)
                }}
                onMouseUp={this.handleTouchEnd}
                onMouseOut={this.handleTouchEnd}
            >
                <div
                    ref={ref => (this.slideWrapper = ref)}
                    className={`slider_item_wrapper slider_transition ${wrapperClass || ''}`}
                >
                    {dataList.map((item, index) => {
                        return (
                            <div
                                key={item.id || index}
                                onClick={() =>{
                                    this.selectItem(item, index);
                                }}
                                className={ `slider_item ${itemClass} ${selectedIndex !== index?prevClass:activeClass}` }
                                style={{
                                    marginLeft: (needPadding && index === 0) ? `${(100-this.defaultWidth)/2}%` : '0%',
                                    marginRight: (needPadding && index === dataList.length - 1) ?
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
                <div className={`swiper-pagination ${paginationWrapper}`}>
                    {
                        needPagination && dataList.map((item, index) => {
                            return (
                                <span key={item.id || index} className={`swiper-pagination-bullet ${selectedIndex !== index?paginationPrevClass:(paginationActiveClass || 'paginationActive')}`}></span>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}