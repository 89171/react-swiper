(this["webpackJsonpreact-swiper-lite"]=this["webpackJsonpreact-swiper-lite"]||[]).push([[0],{11:function(e,t,a){e.exports=a(19)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(3),r=a.n(s),o=(a(16),a(8)),l=a(4),c=a(5),d=a(10),h=a(6),p=a(1),m=a(9),u=a(7),v=(a(17),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).handleTouchMove=Object(u.a)(10,(function(e){var t=e.touches[0],n=a.moveXStart;a.moveXEnd=t.clientX;var i=a.moveXEnd-n;Math.abs(i||0)>5&&(a.touchMoved=!0);var s=parseInt(parseInt(a.startTransformX)+i);a.slideWrapper.style.transform="translate3d(".concat(a.boundXValue(s),"px,0,0)")})),a.state={selectedIndex:e.curIdx||0},a.itemWidth=0,a.moveXStart=0,a.moveXEnd=0,a.startTransformX=0,a.defaultWidth=parseInt(e.itemWidth)||50,a.handleTouchStart=a.handleTouchStart.bind(Object(p.a)(a)),a.handleTouchMove=a.handleTouchMove.bind(Object(p.a)(a)),a.handleTouchEnd=a.handleTouchEnd.bind(Object(p.a)(a)),a.handleTouchCancel=a.handleTouchCancel.bind(Object(p.a)(a)),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.state.selectedIndex;this.slideWrapper&&!this.itemWidth&&(this.itemWidth=this.slideWrapper.getBoundingClientRect().width*this.defaultWidth/100,0!==e&&(this.slideWrapper.style.transform="translate3d(-".concat(e*this.itemWidth,"px,0,0)")))}},{key:"componentWillReceiveProps",value:function(e){e.curIdx!==this.state.selectedIndex&&this.moveToIndex(e.curIdx)}},{key:"boundXValue",value:function(e){var t=this.props,a=t.dataList,n=t.needPadding,i=void 0===n||n,s=e>0?0:e;if(s=s<this.itemWidth*(1-a.length)?this.itemWidth*(1-a.length):s,!i){var r=this.itemWidth/this.defaultWidth*100,o=a.length*this.itemWidth;s=Math.abs(s)>=o-r?r-o:s}return s}},{key:"getTransX",value:function(){var e=this.slideWrapper.style.transform;return parseInt(e&&e.split(",")[0].split("(")[1])||0}},{key:"selectItem",value:function(e,t){this.touchMoved||t!==this.state.selectedIndex&&this.moveToIndex(t)}},{key:"moveToIndex",value:function(e,t){var a=this.props,n=a.dataList,i=a.needPadding,s=a.onSlide,r=this.state.selectedIndex,o=e<0?0:e;if((o=o>n.length-1?n.length-1:o)!==r||t){var l=-o*this.itemWidth;i||(l=this.boundXValue(l)),this.slideWrapper.style.transform="translate3d(".concat(l,"px,0,0)"),this.setState({selectedIndex:o}),s&&s(n[e],e)}}},{key:"handleTouchStart",value:function(e){var t=e.touches[0];this.startTransformX=this.getTransX(),this.moveXStart=t.clientX,this.slideWrapper.classList.remove("slider_transition")}},{key:"handleTouchEnd",value:function(e){var t=this;this.slideWrapper.classList.add("slider_transition"),setTimeout((function(){var e=t.moveXEnd-t.moveXStart,a=t.itemWidth,n=t.state.selectedIndex,i=t.moveToIndex.bind(t);if(0!==t.moveXEnd)switch(!0){case e>a/4:i(n-(Math.ceil((e-a/4)/a)||1));break;case e<0&&Math.abs(e)>a/4:i(n+(Math.abs(Math.floor((e+a/4)/a))||1));break;default:i(n,!0)}else t.touchMoved&&i(n+1);t.touchMoved=!1,t.moveXEnd=t.moveXStart=0}),30)}},{key:"handleTouchCancel",value:function(e){this.moveToIndex(this.state.selectedIndex,!0)}},{key:"render",value:function(){var e=this,t=this.props,a=t.dataList,n=void 0===a?[]:a,s=t.renderItem,r=t.wrapperClass,l=void 0===r?"":r,c=t.itemClass,d=void 0===c?"":c,h=t.needPadding,p=void 0===h||h,m=t.itemStyle,u=void 0===m?{}:m,v=t.activeClass,g=void 0===v?"":v,f=t.prevClass,b=void 0===f?"":f,_=t.itemClick,x=t.clickTrigger,C=void 0===x||x,E=t.paginationWrapper,I=void 0===E?"":E,T=t.paginationPrevClass,W=void 0===T?"":T,k=t.paginationActiveClass,S=void 0===k?"":k,w=t.needPagination,y=void 0!==w&&w,X=this.state.selectedIndex;return i.a.createElement("div",{className:"slider_wrapper",onTouchStart:this.handleTouchStart,onTouchMove:function(t){t.persist(),e.handleTouchMove(t)},onTouchEnd:this.handleTouchEnd,onTouchCancel:this.handleTouchCancel},i.a.createElement("div",{ref:function(t){return e.slideWrapper=t},className:"slider_item_wrapper slider_transition ".concat(l||"")},n.map((function(t,a){return i.a.createElement("div",{key:t.id||a,onClick:function(){X!==a&&C&&e.selectItem(t,a),_&&_(t,a)},className:"slider_item ".concat(d," ").concat(X!==a?b:g),style:Object(o.a)({marginLeft:p&&0===a?"".concat((100-e.defaultWidth)/2,"%"):"0%",marginRight:p&&a===n.length-1?"".concat((100-e.defaultWidth)/2,"%"):"0%",width:"".concat(e.defaultWidth,"%")||!1},u)},s(t,a))}))),i.a.createElement("div",{className:"swiper-pagination ".concat(I)},y&&n.map((function(e,t){return i.a.createElement("span",{key:e.id||t,className:"swiper-pagination-bullet ".concat(X!==t?W:S||"paginationActive")})}))))}}]),t}(n.PureComponent));a(18);var g=function(){var e=[0,1,2,3,4,5,6,7,8,9],t=["#c12e34","#e6b600","#0098d9","#2b821d","#005eaa","#339ca8","#cda819","#32a487","#c12e34","#e6b600"];function a(e,t){console.log(e,t)}function n(e,t){alert(t)}return i.a.createElement("div",{className:"App"},i.a.createElement("h3",null,"width:100%,defaultIndex:1"),i.a.createElement(v,{wrapperClass:"wrapperClass",itemClass:"itemClass",itemStyle:{},itemWidth:"100%",curIdx:1,dataList:e,prevClass:"normal",activeClass:"active",onSlide:a,renderItem:function(e,a){return i.a.createElement("div",{className:"package-car-img",style:{backgroundColor:t[a],height:"160px"}},"".concat(a,"-").concat(e))},itemClick:n,needPagination:!0,paginationWrapper:"",paginationPrevClass:"",paginationActiveClass:""}),i.a.createElement("br",null),i.a.createElement("h3",null,"width:79%,defaultIndex:0"),i.a.createElement(v,{wrapperClass:"wrapperClass",itemWidth:"79%",curIdx:0,dataList:e,onSlide:a,renderItem:function(e,t){return i.a.createElement("div",{style:{boxShadow:"0px 0px 5px #999",textAlign:"center",color:"#6eb2e4",width:"100%",height:"200px",margin:"5px 10px",borderRadius:"5px",overflow:"hidden",backgroundColor:"#FFF"}},i.a.createElement("h1",null,t))},itemClick:n,needPagination:!1}),i.a.createElement("br",null),i.a.createElement("h3",null,"width:50%,defaultIndex:0"),i.a.createElement(v,{wrapperClass:"wrapperClass",itemClass:"itemClass",itemStyle:{},itemWidth:"50%",curIdx:0,dataList:e,prevClass:"normal",activeClass:"active",onSlide:a,renderItem:function(e,a){return i.a.createElement("div",{className:"package-car-img",style:{backgroundColor:t[a]}},"".concat(a,"-").concat(e))},itemClick:n,needPagination:!1}),i.a.createElement("br",null),i.a.createElement("h3",null,"width:40%,defaultIndex:0"),i.a.createElement("h4",{style:{textAlign:"center"}},"\u2014\u2014 \u65b0\u54c1\u4e0a\u5e02 \u2014\u2014"),i.a.createElement(v,{wrapperClass:"wrapperClass",itemWidth:"40%",curIdx:0,dataList:["https://images-cn.ssl-images-amazon.com/images/G/01/Shopbop/p/prod/products/ullaj/ullaj2115010652/ullaj2115010652_q1_2-0._SH20_QL90_UY1095_.jpg","https://images-cn.ssl-images-amazon.com/images/G/01/Shopbop/p/prod/products/habit/habit2016417b7b/habit2016417b7b_q1_2-0._SH20_QL90_UY1095_.jpg","https://images-cn.ssl-images-amazon.com/images/G/01/Shopbop/p/prod/products/salon/salon3050717f4a/salon3050717f4a_q1_2-0._SH20_QL90_UY1095_.jpg","https://images-cn.ssl-images-amazon.com/images/G/01/Shopbop/p/prod/products/ganni/ganni3092225644/ganni3092225644_q1_2-0._SH20_QL90_UY1095_.jpg","https://images-cn.ssl-images-amazon.com/images/G/01/Shopbop/p/prod/products/freya/freya30002187b8/freya30002187b8_q1_2-0._SH20_QL90_UY1095_.jpg","https://images-cn.ssl-images-amazon.com/images/G/01/Shopbop/p/prod/products/kulee/kulee3018310d92/kulee3018310d92_q1_2-1._SH20_QL90_UY1095_.jpg"],needPadding:!1,clickTrigger:!1,renderItem:function(e,t){return i.a.createElement("img",{src:e,style:{width:"100%",marginRight:"10px",borderRadius:"5px",overflow:"hidden"}})},itemClick:function(e){return alert(e)}}),i.a.createElement("br",null))};r.a.render(i.a.createElement(g,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.0a0526f6.chunk.js.map