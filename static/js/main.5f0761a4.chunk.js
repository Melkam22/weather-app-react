(window.webpackJsonpweatherappreact=window.webpackJsonpweatherappreact||[]).push([[0],{237:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(86),c=a.n(i),s=a(87),m=a(88),o=a(91),p=a(89),u=a(92),h=(a(98),a(239)),l=a(240),d=(a(99),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={input:"",icon:"",temperature:"",description:"",windSpeed:"",humidity:"",country:""},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=berlin&APPID=".concat("950a99d07777436d293fd763f07f0f90&units=metric");fetch(t).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({temperature:Math.floor(t.main.temp),icon:t.weather[0].icon,humidity:t.main.humidity,description:"container "+t.weather[0].description,windSpeed:t.wind.speed,country:t.sys.country,maxTemp:Math.floor(t.main.temp_max)})}))}},{key:"clickSubmit",value:function(e){var t=this;e.preventDefault();var a="https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=".concat(this.state.input,"&APPID=").concat("950a99d07777436d293fd763f07f0f90&units=metric");fetch(a).then((function(e){return e.json()})).then((function(e){t.setState({temperature:Math.floor(e.main.temp),icon:e.weather[0].icon,humidity:e.main.humidity,description:"container "+e.weather[0].description,windSpeed:e.wind.speed,country:e.sys.country,maxTemp:Math.floor(e.main.temp_max)})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"main"},r.a.createElement("h1",null,"Weather forecast App"),r.a.createElement("form",{onSubmit:function(t){return e.clickSubmit(t)},className:"form"},r.a.createElement(h.a,{className:"input",placeholder:"insert city name",value:this.state.input,onChange:function(t){return e.setState({input:t.target.value})}}),r.a.createElement("button",{className:"btn",type:"submit"},"Submit")),r.a.createElement("div",{className:this.state.description},r.a.createElement("div",{className:"title"},r.a.createElement("span",{className:"span"},r.a.createElement("img",{src:"http://openweathermap.org/img/wn/".concat(this.state.icon,".png"),alt:"img"}))),r.a.createElement("div",{className:"temperature"},"temperature: ",this.state.temperature," \xb0c"),r.a.createElement("div",{className:"humidity"},"humidity: ",this.state.humidity," %"),r.a.createElement("div",{className:"windSpeed"},"wind-speed: ",this.state.windSpeed," kmh "),r.a.createElement("div",{className:"weather"},"max-temperature: ",this.state.maxTemp," \xb0c"),r.a.createElement("div",{className:"country"},"country: ",this.state.country)),r.a.createElement("form",{className:"refresh"},r.a.createElement(l.a,{id:"btn"},"Refresh")))}}]),t}(n.Component));c.a.render(r.a.createElement(d,null),document.getElementById("root"))},93:function(e,t,a){e.exports=a(237)},98:function(e,t,a){}},[[93,1,2]]]);
//# sourceMappingURL=main.5f0761a4.chunk.js.map