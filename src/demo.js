import React, { Component } from 'react'
import BScroll from 'better-scroll'
import './style.less';

interface IProps {
  curIdx: number; // 当前第几项
  isLoop: boolean; // 是否无缝滚动
  autoPlay: number; // 是否自动轮播, 默认3s, <= 0 则表示不自动轮播
  dataList: any[]; // 图片数组
  eventPass: boolean; // better scroll的eventPassthrough, 是否放开其他方向的原生滚动
  renderItem: (item: any, idx: number) => any; // 子元素渲染函数
  onSlide: (item: any, idx: number) => any; // 轮播动作回调
  needSubIndex?: boolean // 是否需要下标
  activeClass?: string; // 当前选中卡片的样式
  prevClass?: string; // 未选中的卡片的样式
  useTap?: boolean; // 是否使用tap触发点击事件
}

// 图片轮播组件
export default class Slider extends Component<IProps> {
  public static defaultProps = {
    curIdx: 0,
    dataList: [],
    eventPass: true
  }
  public $wrapper: any
  public $scroller: React.RefObject<HTMLUListElement>
  public scroller: any
  public timer: any
  public state = {
    sliderWidth: '100%',
    itemWidth: '100%'
  }
  constructor(props: IProps) {
    super(props);
    this.$wrapper = React.createRef();
    this.$scroller = React.createRef();
    this.next = this.next.bind(this);
    this.cancelAndReplay = this.cancelAndReplay.bind(this);
    this.onScrollEnd = this.onScrollEnd.bind(this);
  }
  public render() {
    const { curIdx, activeClass, prevClass, needSubIndex = false } = this.props;
    const activeCls = activeClass ? ' ' + activeClass : '';
    const pervCls = prevClass ? ' ' + prevClass : '';
    return (
      <div className="thanos-slider__wrapper" ref={this.$wrapper}>
        <ul
          ref={this.$scroller}
          className="thanos-slider__inner"
          style={{
            width: this.state.sliderWidth
          }}
        >
          {
            this.props.dataList.map((item: any, idx: number) => {
              return (
                <li className={`thanos-slider__item${curIdx === idx ? activeCls : pervCls}`} key={idx}>
                  {
                    this.props.renderItem(item, idx)
                  }
                </li>
              )
            })
          }
        </ul>
        {
          needSubIndex ? <p className="thanos-slider__subIndex">
            {curIdx + 1}<span>/{this.props.dataList && this.props.dataList.length}</span>
          </p> : null
        }
      </div>
    )
  }
  public componentDidUpdate(prev: IProps) {
    const props = this.props;
    if (
      props.dataList != prev.dataList ||
      props.isLoop != prev.isLoop ||
      props.eventPass != prev.eventPass
    ) {
      this.scroller && this.scroller.destroy();
      this.initScroller();
    }
    if (props.curIdx >= 0) {
      this.refresh();
      this.goTo(props.curIdx);
    }
  }
  public componentDidMount() {
    this.initScroller();
  }
  public componentWillUnmount() {
    this.scroller && this.scroller.destroy();
    clearInterval(this.timer);
  }
  public initScroller() {
    const itemWidth = this.$wrapper.current.clientWidth;
    const sliderWidth = itemWidth * this.props.dataList.length;
    const { useTap = false } = this.props;

    this.setState({
      sliderWidth: this.props.isLoop ? sliderWidth + itemWidth * 2 : sliderWidth
    }, () => {

      // 修正元素宽度
      const oList = (this.$scroller.current as HTMLUListElement).children;
      Array.prototype.map.call(oList, (item: HTMLLIElement) => {
        item.style.width = `${itemWidth}px`;
        return item;
      })

      // 初始化slider
      this.scroller = new BScroll(this.$wrapper.current as Element, {
        scrollX: true,
        scrollY: false,
        click: !useTap,
        tap: useTap,
        eventPassthrough: this.props.eventPass ? 'vertical' : false,
        momentum: false, // 防止一次性拉动多个(需要配合惯性snap值)
        snap: {
          loop: this.props.isLoop,
          threshold: .3
        }
      })
      // 滚动到起始点
      this.props.curIdx && this.goTo(this.props.curIdx)
      this.scroller.on('scrollEnd', this.onScrollEnd)
      this.scroller.on('touchEnd', this.cancelAndReplay)
      // 自动轮播
      this.cancelAndReplay();

    })
  }
  public onScrollEnd() {
    const { pageX } = this.scroller.getCurrentPage();
    const item = this.props.dataList[pageX];
    this.props.onSlide && this.props.onSlide(item, pageX);
  }
  public cancelAndReplay() {
    clearInterval(this.timer);
    // 自动轮播
    if (this.props.autoPlay) {
      this.timer = setInterval(this.next, this.props.autoPlay);
    }
  }
  public prev() {
    this.scroller && this.scroller.prev();
  }
  public next() {
    this.scroller && this.scroller.next();
  }
  public goTo(page: number, time = 0) {
    this.scroller && this.scroller.goToPage(page, 0, time)
  }
  public refresh() {
    this.scroller && this.scroller.refresh();
  }
}
