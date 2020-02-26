import React from 'react';
import Swiper from './swiper'
import './App.css'

function App() {
  const dataSource = [0,1,2,3,4,5,6,7,8,9]
  const dataSource1 = [
    'https://images-cn.ssl-images-amazon.com/images/G/01/Shopbop/p/prod/products/ullaj/ullaj2115010652/ullaj2115010652_q1_2-0._SH20_QL90_UY1095_.jpg',
    'https://images-cn.ssl-images-amazon.com/images/G/01/Shopbop/p/prod/products/habit/habit2016417b7b/habit2016417b7b_q1_2-0._SH20_QL90_UY1095_.jpg',
    'https://images-cn.ssl-images-amazon.com/images/G/01/Shopbop/p/prod/products/salon/salon3050717f4a/salon3050717f4a_q1_2-0._SH20_QL90_UY1095_.jpg',
    'https://images-cn.ssl-images-amazon.com/images/G/01/Shopbop/p/prod/products/ganni/ganni3092225644/ganni3092225644_q1_2-0._SH20_QL90_UY1095_.jpg',
    'https://images-cn.ssl-images-amazon.com/images/G/01/Shopbop/p/prod/products/freya/freya30002187b8/freya30002187b8_q1_2-0._SH20_QL90_UY1095_.jpg',
    'https://images-cn.ssl-images-amazon.com/images/G/01/Shopbop/p/prod/products/kulee/kulee3018310d92/kulee3018310d92_q1_2-1._SH20_QL90_UY1095_.jpg'
  ]
  const colorSource = ['#c12e34','#e6b600','#0098d9','#2b821d','#005eaa','#339ca8','#cda819','#32a487','#c12e34','#e6b600']
  
  function onSlide(item,index){
    console.log(item,index)
  }
  function renderItem(item,index){
    return (
      <div className="package-car-img" style={{backgroundColor:colorSource[index]}}>
        {
          `${index}-${item}`
        }
      </div>
    )
  }
  function renderItem1(item,index){
    return(
      <img src={item} className="item1" />
      // <div className="package-car-img" style={{height:'auto',backgroundImage:`url(${item})`}}></div>
     )
  }
  function renderItem2(item,index){
    return(
      <div className="item2">
        <h1>{ index }</h1>
      </div>
     )
  }
  function renderFullWidthItem(item,index){
    return (
      <div className="package-car-img" style={{backgroundColor:colorSource[index],height:'160px'}}>
        {
          `${index}-${item}`
        }
      </div>
    )
  }
  function itemClick(item,index){
    alert(index)
  }
  return (
    <div className="App">
      <h4>width:100%,defaultIndex:1</h4>
      <Swiper
        wrapperClass="wrapperClass"
        itemClass="itemClass"
        itemStyle={{}}
        itemWidth="100%"
        curIdx={1}
        dataList={dataSource}
        prevClass="normal"
        activeClass="active"
        onSlide={onSlide}
        renderItem={renderFullWidthItem}
        itemClick={itemClick}
        needPagination={true}
        paginationWrapper=""
        paginationPrevClass=""
        paginationActiveClass=""
      />
      <br />
      <h4>width:79%,defaultIndex:0</h4>
      <Swiper
        wrapperClass="wrapperClass"
        itemWidth="79%"
        curIdx={0}
        dataList={dataSource}
        onSlide={onSlide}
        renderItem={renderItem2}
        itemClick={itemClick}
        needPagination={false}
      />
      <br/>
      <h4>width:50%,defaultIndex:0</h4>
      <Swiper
        wrapperClass="wrapperClass"
        itemClass="itemClass"
        itemStyle={{}}
        itemWidth="50%"
        curIdx={0}
        dataList={dataSource}
        prevClass="normal"
        activeClass="active"
        onSlide={onSlide}
        renderItem={renderItem}
        itemClick={itemClick}
        needPagination={false}
      />
      <br/>
      <h4>width:40%,defaultIndex:0,needPadding:false</h4>
      <h3 style={{textAlign:'center'}}>—— 新品上市 ——</h3>
      <Swiper
        wrapperClass="wrapperClass"
        itemWidth="40%"
        curIdx={0}
        dataList={dataSource1}
        needPadding={false}
        clickTrigger={false}
        renderItem={renderItem1}
        itemClick={(item)=>alert(item)}
      />
      <br/>
    </div>
  );
}
export default App;
