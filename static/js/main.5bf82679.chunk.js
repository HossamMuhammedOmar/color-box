(this["webpackJsonpcolor-box"]=this["webpackJsonpcolor-box"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(6),c=n.n(r),l=(n(12),n(13),n(1)),i=n(2),s=n(4),u=n(3);function h(e){return e[Math.floor(Math.random()*e.length)]}n(14);var f=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={color:h(e.props.colorList)},e.handleClick=function(){e.changeColor()},e}return Object(i.a)(n,[{key:"changeColor",value:function(){var e;do{e=h(this.props.colorList)}while(e===this.state.color);this.setState({color:e})}},{key:"render",value:function(){return a.a.createElement("div",{className:"Box",style:{backgroundColor:this.state.color},onClick:this.handleClick})}}]),n}(o.Component);f.defaultProps={colorList:["#1abc9c","#2ecc71","#3498db","#9b59b6","#34495e","#f1c40f","#e67e22","#e74c3c","#ecf0f1","#95a5a6"]};var m=f,p=(n(15),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=Array.from({length:this.props.numBoxes});return a.a.createElement("div",null,a.a.createElement("h1",null,"Box Color"),a.a.createElement("div",{className:"BoxContainer"},e.map((function(e){return a.a.createElement(m,null)}))))}}]),n}(o.Component));p.defaultProps={numBoxes:18};var d=p;var v=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.5bf82679.chunk.js.map