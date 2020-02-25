import React from 'react';
import Swiper from './Swiper'
import './App.css'

function App() {
  const dataSource = [0,1,2,3,4,5,6,7,8,9]
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
  return (
    <div className="App">
    <h3>width:25%,defaultIndex:0</h3>
      <Swiper
        wrapperClass="wrapperClass"
        itemClass="itemClass"
        itemStyle={{}}
        itemWidth="25%"
        curIdx={0}
        dataList={dataSource}
        prevClass="normal"
        activeClass="active"
        onSlide={onSlide}
        renderItem={renderItem}
      />
      <br/>
      <h3>width:50%,defaultIndex:0</h3>
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
      />
      <br/>
      <h3>width:100%,defaultIndex:1</h3>
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
        renderItem={renderItem}
      />
    </div>
  );
}
export default App;
