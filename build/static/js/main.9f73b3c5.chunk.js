(window.webpackJsonpseasons=window.webpackJsonpseasons||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a(3),o=a(6),r=a(4),i=a(7),c=a(0),l=a.n(c),u=a(5),m=a.n(u),g=(a(13),{summer:{text:'"Sun is shinging. Weather is sweet. Make you wanna move your dancing feet." Bob Marely',iconName:"sun"},winter:{text:"It's winter season. Hot cocoa and cosy blankets please!",iconName:"snowflake"},autumn:{text:"It's autumn season. Enjoy the crisp air & the smell of cider!",iconName:"leaf"},spring:{text:"Yay! It's spring season!",iconName:"smile"}}),d=function(e){var t,a,n=(t=e.lat,(a=(new Date).getMonth())>=11&&a<=1?t>0?"winter":"summer":a>=2&&a<=4?t>0?"spring":"autumn":a>=5&&a<=7?t>0?"summer":"winter":t>0?"autumn":"spring");console.log(n);var s=g[n],o=s.text,r=s.iconName;return l.a.createElement("div",{className:"season-display ".concat(n)},l.a.createElement("i",{className:"icon-left massive ".concat(r," icon")}),l.a.createElement("div",{className:"ui container"},l.a.createElement("h3",null,"Date: ",(new Date).toLocaleDateString()," Time: ",(new Date).toTimeString()),l.a.createElement("h3",null,"Current Position: ","Latitude: ".concat(e.lat.toFixed(2)," Longitude: ").concat(e.long.toFixed(2))),l.a.createElement("h3",{style:{fontStyle:"italic"}},o)),l.a.createElement("i",{className:"icon-right massive ".concat(r," icon")}))},h=function(e){return l.a.createElement("div",{className:"ui active dimmer"},l.a.createElement("div",{className:"ui big text loader"},e.message))};h.defaultProps={message:"loading..."};var v=h,f=function(e){function t(){var e,a;Object(n.a)(this,t);for(var s=arguments.length,i=new Array(s),c=0;c<s;c++)i[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(i)))).state={lat:null,long:null,errMessage:""},a}return Object(i.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.navigator.geolocation.getCurrentPosition(function(t){console.log(t),e.setState({lat:t.coords.latitude,long:t.coords.longitude})},function(t){return e.setState({errMessage:t.message})})}},{key:"renderContent",value:function(){return console.log(this.state),this.state.lat&&!this.state.errMessage?l.a.createElement(d,{lat:this.state.lat,long:this.state.long}):!this.state.lat&&this.state.errMessage?l.a.createElement("div",null,"Error: ",this.state.errMessage):l.a.createElement(v,{message:"Please accept location request"})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"ui container"},this.renderContent()))}}]),t}(l.a.Component);m.a.render(l.a.createElement(f,null),document.querySelector("#root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.9f73b3c5.chunk.js.map