(window.webpackJsonpseasons=window.webpackJsonpseasons||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(3),s=a(6),i=a(4),o=a(7),c=a(0),l=a.n(c),u=a(5),m=a.n(u),d=(a(13),{summer:{text:"Hope you are having a great summer",iconName:"sun"},winter:{text:"It's winter season. Burr...it is cold!",iconName:"snowflake"}}),g=function(e){var t,a,n=(t=e.lat,(a=(new Date).getMonth())>2&&a<9?t>0?"summer":"winter":t>0?"winter":"summer"),r=d[n],s=r.text,i=r.iconName;return l.a.createElement("div",{className:"season-display ".concat(n)},l.a.createElement("i",{className:"icon-left massive ".concat(i," icon")}),l.a.createElement("h1",null,s),l.a.createElement("i",{className:"icon-right massive ".concat(i," icon")}))},v=function(e){return l.a.createElement("div",{className:"ui active dimmer"},l.a.createElement("div",{className:"ui big text loader"},e.message))};v.defaultProps={message:"loading..."};var h=v,f=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).state={lat:null,errMessage:""},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.navigator.geolocation.getCurrentPosition(function(t){return e.setState({lat:t.coords.latitude})},function(t){return e.setState({errMessage:t.message})})}},{key:"renderContent",value:function(){return this.state.lat&&!this.state.errMessage?l.a.createElement(g,{lat:this.state.lat}):!this.state.lat&&this.state.errMessage?l.a.createElement("div",null,"Error: ",this.state.errMessage):l.a.createElement(h,{message:"Please accept location request"})}},{key:"render",value:function(){return l.a.createElement("div",null,this.renderContent())}}]),t}(l.a.Component);m.a.render(l.a.createElement(f,null),document.querySelector("#root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.cc383a75.chunk.js.map