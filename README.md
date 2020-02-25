### Swiper component for react.


### 基本用法
1. 安装并引入react-swiper
```
import Swiper from 'react-swiper'
```
2. 设置相关参数
```
	<Swiper
        wrapperClass="wrapper"
        itemClass=""
        itemStyle={{textAlignt:"center"}}
        itemWidth="20%"
        curIdx={this.state.index}
        dataList={vehicleTypes}
        prevClass="normal"
        activeClass="active"
        onSlide={this.onSlide}
        renderItem={this.renderItem}
      />
```