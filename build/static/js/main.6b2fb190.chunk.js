(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,n){e.exports=n(53)},53:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(25),c=n.n(o),i=n(26),l=n(27),u="#EAEAEA";function s(){var e=Object(i.a)(['\n* {\n    box-sizing: border-box;\n}\n\nhtml, body {\n    font-family: Lato, Helvetica-Neue,Helvetica,Arial,sans-serif;\n    width: 95%;\n    nim-height: 100vh;\n    overflow-x: hidden;\n    margin 3%;\n    padding: 0;\n    background: lightgray;\n    //background-color: #0653c7;\n}\n\nul {\n    list-style: none;\n    padding: 0;\n}\n\nh2, h1 {\n    text-align: center;\n    //color: #0653c7;\n    width: 95%\n}\n.container {\n    border: ridge;\n    border-radius: .5em;\n    //width: 95%;  \n    text-align: center;\n    margin-right: 5%;\n    background: #f5f5f5;\n    //background: #0653c7;\n}\n\n.container-title {\n    color: #0653c7;\n    width: 100%\n}\n\n.list-wrapper {\n    margin: 1em;\n    //background-color: lightgray;\n    border-radius: .5em;\n  }\n\n.row {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    width: 100%;\n  }\n  \n.column {\n    display: flex;\n    flex-direction: column;\n    flex-basis: 100%;\n    flex: 1;\n    height: 100%;\n    border-radius: .5em;\n    //box-shadow: 5px 2px 2px #283f61c0;\n}\n\n.column1 {\n    background: lightgray;\n    border-radius: .5em;\n    margin-right: 2%;\n    margin-bottom: 2%;\n}\n\n.column2 {\n    background: lightgray;\n    border-radius: .5em;\n}\n\n.column3 {\n    background: lightgray;\n    margin-left: 2%;\n    border-radius: .5em;\n}\n\nh3 {\n  padding: 0 .5em 0 .5em; \n  text-align: center;\n  background: lightgray;\n}\n\np { \n  padding: 0 .5em 0 .5em;\n  font-weight: bold;\n  color: #333;\n  text-align: center;\n\n}\na {\n    text-decoration: none;\n    &:visited {\n      color: inherit;\n    }\n}\n\nbutton {\n    border-radius: 1em;\n    background-color: #0653c7;\n    font-family: "Avenir Next" !important;\n    font-weight: bold;\n    font-size: 12px;\n    letter-spacing: 1px;\n    padding: .3em 1.5em;\n    margin: 1em auto;\n    color: ',";\n}\n\nbutton:hover {\n    color: white;\n    transform: scale(1.02);\n    border: solid white 1px;\n    cursor: pointer;\n    background-color: #fb7361;\n}\n\nlabel {\n    color: white;\n}\n\ninput {\n    background: lightgray;\n}\n\n"]);return s=function(){return e},e}var m=function(){Object(l.a)(s(),u)},p=n(3),d=n(4),h=n(6),f=n(5),y=n(7),v=n(18),E=n(56),b=n(57),w=n(16),g=n(33),D=n(2),C=n(14),O=n.n(C),S=n(8),j=n.n(S),k="https://tier-board.herokuapp.com/api/v1/safety",A=[],x=function(){return function(e){fetch(k).then(function(e){return e.json()}).then(function(t){console.log("fetch data: ",t),e(function(e){return console.log("inside action creator",e),{type:"safety/ASYNC_ADD",payload:e}}(t))})}},V="https://tier-board.herokuapp.com/api/v1/quality",T=[],U=function(){return function(e){fetch(V).then(function(e){return e.json()}).then(function(t){console.log("fetch data: ",t),e(function(e){return console.log("inside action creator",e),{type:"quality/ASYNC_ADD",payload:e}}(t))})}},q="https://tier-board.herokuapp.com/api/v1/delivery",R=[],I=function(){return function(e){fetch(q).then(function(e){return e.json()}).then(function(t){console.log("fetch data: ",t),e(function(e){return console.log("inside action creator",e),{type:"delivery/ASYNC_ADD",payload:e}}(t))})}},F="https://tier-board.herokuapp.com/api/v1/cost",_=[],N=function(){return function(e){fetch(F).then(function(e){return e.json()}).then(function(t){console.log("fetch data: ",t),e(function(e){return console.log("inside action creator",e),{type:"cost/ASYNC_ADD",payload:e}}(t))})}},L="https://tier-board.herokuapp.com/api/v1/morale",Y=[],P=function(){return function(e){fetch(L).then(function(e){return e.json()}).then(function(t){console.log("fetch data: ",t),e(function(e){return console.log("inside action creator",e),{type:"morale/ASYNC_ADD",payload:e}}(t))})}},H=Object(w.c)({safety:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"safety/ADD":return localStorage.setItem("state","state"),Object(D.a)(e).concat([a]);case"safety/FETCH":return Object(D.a)(e).concat([a]);case"safety/ASYNC_ADD":return Object(D.a)(e).concat(Object(D.a)(a));case"safety/UPDATE":return e.map(function(e){return e.id===a.id?a:e});case"safety/DELETE":return e.filter(function(e){return e.id!==a.id});default:return e}},quality:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"quality/ADD":return localStorage.setItem("state","state"),Object(D.a)(e).concat([a]);case"quality/FETCH":return Object(D.a)(e).concat([a]);case"quality/ASYNC_ADD":return Object(D.a)(e).concat(Object(D.a)(a));case"quality/UPDATE":return e.map(function(e){return e.id===a.id?a:e});case"quality/DELETE":return e.filter(function(e){return e.id!==a.id});default:return e}},delivery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"delivery/ADD":return localStorage.setItem("state","state"),Object(D.a)(e).concat([a]);case"delivery/FETCH":return Object(D.a)(e).concat([a]);case"delivery/ASYNC_ADD":return Object(D.a)(e).concat(Object(D.a)(a));case"delivery/UPDATE":return e.map(function(e){return e.id===a.id?a:e});case"delivery/DELETE":return e.filter(function(e){return e.id!==a.id});default:return e}},cost:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"cost/ADD":return localStorage.setItem("state","state"),Object(D.a)(e).concat([a]);case"cost/FETCH":return Object(D.a)(e).concat([a]);case"cost/ASYNC_ADD":return Object(D.a)(e).concat(Object(D.a)(a));case"cost/UPDATE":return e.map(function(e){return e.id===a.id?a:e});case"cost/DELETE":return e.filter(function(e){return e.id!==a.id});default:return e}},morale:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"morale/ADD":return localStorage.setItem("state","state"),Object(D.a)(e).concat([a]);case"morale/FETCH":return Object(D.a)(e).concat([a]);case"morale/ASYNC_ADD":return Object(D.a)(e).concat(Object(D.a)(a));case"morale/UPDATE":return e.map(function(e){return e.id===a.id?a:e});case"morale/DELETE":return e.filter(function(e){return e.id!==a.id});default:return e}}}),M=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||w.d,B=n(11),z=n(10),J=n(12),K=n.n(J),Q=new Date,W=function(e){function t(e){var n;Object(p.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).onSubmit=function(e){e.preventDefault(),n.props.onComplete(n.state),n.props.viewChange(),n.setState(Object(z.a)({},n.defaultState))},n.onChange=function(e){var t="checkbox"===e.target.type?e.target.checked:e.target.value,a=Object(B.a)({},e.target.name,t);n.setState(a)},n.defaultState={incidents:"",response:"",safeDay:!0,date:K()(Q,"mmm dd, yyyy")};var a=n.props.safety||n.defaultState;return n.state=Object(z.a)({},a),n}return Object(y.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(a.Fragment,null,r.a.createElement("fieldset",null,r.a.createElement("form",{onSubmit:this.onSubmit,onChange:this.onChange},r.a.createElement("label",null,"Safe Day?",r.a.createElement("input",{name:"safeDay",type:"checkbox",value:this.state.safeDay})),r.a.createElement("label",null,"Incidents",r.a.createElement("input",{name:"incidents",value:this.state.incidents})),r.a.createElement("label",null,"Response",r.a.createElement("input",{name:"response",type:"text",value:this.state.response})),r.a.createElement("button",null,this.props.buttonText))))}}]),t}(a.Component),X=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).updateView=function(){n.setState({view:!0})},n.returnView=function(){n.setState({view:!1})},n.onRemove=function(){n.props.onRemove(n.props.safety),window.location.reload()},n.safetyUpdate=function(e){n.props.onComplete(e),window.location.reload()},n.state={view:!1},n}return Object(y.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(a.Fragment,null,r.a.createElement("div",{onDoubleClick:this.updateView},r.a.createElement("li",{class:"list-wrapper"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"column"},r.a.createElement("div",{class:"column1"},r.a.createElement("h3",null,"INCIDENT"),r.a.createElement("p",null,this.props.safety.incidents))),r.a.createElement("div",{class:"column"},r.a.createElement("div",{class:"column2"},r.a.createElement("h3",null,"RESPONSE"),r.a.createElement("p",null,this.props.safety.response))))),this.state.view&&r.a.createElement("button",{onClick:this.onRemove},"Delete")),this.state.view&&r.a.createElement("div",null,r.a.createElement(W,{onComplete:this.safetyUpdate,safety:this.props.safety,viewChange:this.returnView,onClick:this.props.returnView,buttonText:"save update"}),r.a.createElement("button",{onClick:this.returnView},"cancel update")))}}]),t}(a.Component),$=new Date,G=function(e){function t(e){var n;Object(p.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).setDate=function(e){e.preventDefault();var t=new Date(e);n.setState({date:t.toLocaleDateString("en-US")})},n.onSubmit=function(e){e.preventDefault(),n.props.onComplete(n.state),n.props.viewChange(),n.setState(Object(z.a)({},n.defaultState))},n.onChange=function(e){var t="checkbox"===e.target.type?e.target.checked:e.target.value,a=Object(B.a)({},e.target.name,t);n.setState(a)},n.defaultState={aIssues:!1,cIssues:!1,station:"",issue:"",countermeasure:"",date:K()($,"mmm dd, yyyy")};var a=n.props.quality||n.defaultState;return n.state=Object(z.a)({},a),n}return Object(y.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(a.Fragment,null,r.a.createElement("fieldset",null,r.a.createElement("form",{onSubmit:this.onSubmit,onChange:this.onChange},r.a.createElement("label",null,"A issue",r.a.createElement("input",{name:"aIssues",type:"checkbox",value:this.state.aIssues})),r.a.createElement("label",null,"C issue",r.a.createElement("input",{name:"cIssues",type:"checkbox",value:this.state.cIssues})),r.a.createElement("label",null,"Station",r.a.createElement("input",{name:"station",type:"text",value:this.state.station})),r.a.createElement("label",null,"Issue",r.a.createElement("input",{name:"issue",type:"text",value:this.state.issue})),r.a.createElement("label",null,"Countermeasure",r.a.createElement("input",{name:"countermeasure",type:"text",value:this.state.countermeasure})),r.a.createElement("button",null,this.props.buttonText))))}}]),t}(a.Component),Z=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).updateView=function(){n.setState({view:!0})},n.returnView=function(){n.setState({view:!1})},n.onRemove=function(){n.props.onRemove(n.props.quality),window.location.reload()},n.qualityUpdate=function(e){n.props.onComplete(e),window.location.reload()},n.state={view:!1},n}return Object(y.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(a.Fragment,null,r.a.createElement("div",{onDoubleClick:this.updateView},r.a.createElement("li",{class:"list-wrapper"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"column"},r.a.createElement("div",{class:"column1"},r.a.createElement("h3",null,"STATION"),r.a.createElement("p",null,this.props.quality.station))),r.a.createElement("div",{class:"column"},r.a.createElement("div",{class:"column2"},r.a.createElement("h3",null,"ISSUE"),r.a.createElement("p",null,this.props.quality.issue))),r.a.createElement("div",{class:"column"},r.a.createElement("div",{class:"column3"},r.a.createElement("h3",null,"COUNTERMEASURE"),r.a.createElement("p",null,this.props.quality.countermeasure))))),this.state.view&&r.a.createElement("button",{onClick:this.onRemove},"Delete")),this.state.view&&r.a.createElement("div",null,r.a.createElement(G,{onComplete:this.qualityUpdate,quality:this.props.quality,viewChange:this.returnView,onClick:this.props.returnView,buttonText:"save update"}),r.a.createElement("button",{onClick:this.returnView},"cancel update")))}}]),t}(a.Component),ee=new Date,te=function(e){function t(e){var n;Object(p.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).setDate=function(e){e.preventDefault();var t=new Date(e);n.setState({date:t.toLocaleDateString("en-US")})},n.onSubmit=function(e){e.preventDefault(),n.props.onComplete(n.state),n.props.viewChange(),n.setState(Object(z.a)({},n.defaultState))},n.onChange=function(e){var t="checkbox"===e.target.type?e.target.checked:e.target.value,a=Object(B.a)({},e.target.name,t);n.setState(a)},n.defaultState={station:"",issue:"",countermeasure:"",date:K()(ee,"mmm dd, yyyy")};var a=n.props.delivery||n.defaultState;return n.state=Object(z.a)({},a),n}return Object(y.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(a.Fragment,null,r.a.createElement("fieldset",null,r.a.createElement("form",{onSubmit:this.onSubmit,onChange:this.onChange},r.a.createElement("label",null,"Station",r.a.createElement("input",{name:"station",type:"text",value:this.state.station})),r.a.createElement("label",null,"Issue",r.a.createElement("input",{name:"issue",type:"text",value:this.state.issue})),r.a.createElement("label",null,"Countermeasure",r.a.createElement("input",{name:"countermeasure",type:"text",value:this.state.countermeasure})),r.a.createElement("button",null,this.props.buttonText))))}}]),t}(a.Component),ne=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).updateView=function(){n.setState({view:!0})},n.returnView=function(){n.setState({view:!1})},n.onRemove=function(){n.props.onRemove(n.props.delivery),window.location.reload()},n.deliveryUpdate=function(e){n.props.onComplete(e),window.location.reload()},n.state={view:!1},n}return Object(y.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(a.Fragment,null,r.a.createElement("div",{onDoubleClick:this.updateView},r.a.createElement("li",{class:"list-wrapper"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"column"},r.a.createElement("div",{class:"column1"},r.a.createElement("h3",null,"STATION"),r.a.createElement("p",null,this.props.delivery.station))),r.a.createElement("div",{class:"column"},r.a.createElement("div",{class:"column2"},r.a.createElement("h3",null,"ISSUE"),r.a.createElement("p",null,this.props.delivery.issue))),r.a.createElement("div",{class:"column"},r.a.createElement("div",{class:"column3"},r.a.createElement("h3",null,"COUNTERMEASURE"),r.a.createElement("p",null,this.props.delivery.countermeasure))))),this.state.view&&r.a.createElement("button",{onClick:this.onRemove},"Delete")),this.state.view&&r.a.createElement("div",null,r.a.createElement(te,{onComplete:this.deliveryUpdate,delivery:this.props.delivery,viewChange:this.returnView,onClick:this.props.returnView,buttonText:"save update"}),r.a.createElement("button",{onClick:this.returnView},"cancel update")))}}]),t}(a.Component),ae=new Date,re=function(e){function t(e){var n;Object(p.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).setDate=function(e){e.preventDefault();var t=new Date(e);n.setState({date:t.toLocaleDateString("en-US")})},n.onSubmit=function(e){e.preventDefault(),n.props.onComplete(n.state),n.props.viewChange(),n.setState(Object(z.a)({},n.defaultState))},n.onChange=function(e){var t="checkbox"===e.target.type?e.target.checked:e.target.value,a=Object(B.a)({},e.target.name,t);n.setState(a)},n.defaultState={station:"",task:"",date:K()(ae,"mmm dd, yyyy")};var a=n.props.cost||n.defaultState;return n.state=Object(z.a)({},a),n}return Object(y.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(a.Fragment,null,r.a.createElement("fieldset",null,r.a.createElement("form",{onSubmit:this.onSubmit,onChange:this.onChange},r.a.createElement("label",null,"Station",r.a.createElement("input",{name:"station",type:"text",value:this.state.station})),r.a.createElement("label",null,"Task",r.a.createElement("input",{name:"task",type:"text",value:this.state.task})),r.a.createElement("button",null,this.props.buttonText))))}}]),t}(a.Component),oe=new Date,ce=function(e){function t(e){var n;Object(p.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).setDate=function(e){e.preventDefault();var t=new Date(e);n.setState({date:t.toLocaleDateString("en-US")})},n.onSubmit=function(e){e.preventDefault(),n.props.onComplete(n.state),n.props.viewChange(),n.setState(Object(z.a)({},n.defaultState))},n.onChange=function(e){var t="checkbox"===e.target.type?e.target.checked:e.target.value,a=Object(B.a)({},e.target.name,t);n.setState(a)},n.defaultState={station:"",task:"",date:K()(oe,"mmm dd, yyyy")};var a=n.props.morale||n.defaultState;return n.state=Object(z.a)({},a),n}return Object(y.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(a.Fragment,null,r.a.createElement("fieldset",null,r.a.createElement("form",{onSubmit:this.onSubmit,onChange:this.onChange},r.a.createElement("label",null,"Station",r.a.createElement("input",{name:"station",type:"text",value:this.state.station})),r.a.createElement("label",null,"Task",r.a.createElement("input",{name:"task",type:"text",value:this.state.task})),r.a.createElement("button",null,this.props.buttonText))))}}]),t}(a.Component),ie=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).updateView=function(){n.setState({view:!0})},n.returnView=function(){n.setState({view:!1})},n.onRemove=function(){n.props.onRemove(n.props.morale),window.location.reload()},n.moraleUpdate=function(e){n.props.onComplete(e),window.location.reload()},n.state={view:!1},n}return Object(y.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(a.Fragment,null,r.a.createElement("div",{onDoubleClick:this.updateView},r.a.createElement("li",{class:"list-wrapper"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"column"},r.a.createElement("div",{class:"column1"},r.a.createElement("h3",null,"STATION"),r.a.createElement("p",null,this.props.morale.station))),r.a.createElement("div",{class:"column"},r.a.createElement("div",{class:"column2"},r.a.createElement("h3",null,"TASK"),r.a.createElement("p",null,this.props.morale.task))))),this.state.view&&r.a.createElement("button",{onClick:this.onRemove},"Delete")),this.state.view&&r.a.createElement("div",null,r.a.createElement(ce,{onComplete:this.moraleUpdate,morale:this.props.morale,viewChange:this.returnView,onClick:this.props.returnView,buttonText:"save update"}),r.a.createElement("button",{onClick:this.returnView},"cancel update")))}}]),t}(a.Component),le=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).updateView=function(){n.setState({view:!0})},n.returnView=function(){n.setState({view:!1})},n.onRemove=function(){n.props.onRemove(n.props.cost),window.location.reload()},n.costUpdate=function(e){n.props.onComplete(e),window.location.reload()},n.state={view:!1},n}return Object(y.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(a.Fragment,null,r.a.createElement("div",{onDoubleClick:this.updateView},r.a.createElement("li",{class:"list-wrapper"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"column"},r.a.createElement("div",{class:"column1"},r.a.createElement("h3",null,"STATION"),r.a.createElement("p",null,this.props.cost.station))),r.a.createElement("div",{class:"column"},r.a.createElement("div",{class:"column2"},r.a.createElement("h3",null,"TASK"),r.a.createElement("p",null,this.props.cost.task))))),this.state.view&&r.a.createElement("button",{onClick:this.onRemove},"Delete")),this.state.view&&r.a.createElement("div",null,r.a.createElement(re,{onComplete:this.costUpdate,cost:this.props.cost,viewChange:this.returnView,onClick:this.props.returnView,buttonText:"save update"}),r.a.createElement("button",{onClick:this.returnView},"cancel update")))}}]),t}(a.Component),ue=new Date,se="http://localhost:3003/api/v1/safety",me=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).allSafetyFetch=function(){fetch(se).then(function(e){return e.json()}).then(function(e){var t=e;n.setState({safetyData:t})})},n.updateView=function(e){"safety"===e.target.name?n.setState({safetyView:!0}):"quality"===e.target.name?n.setState({qualityView:!0}):"delivery"===e.target.name?n.setState({deliveryView:!0}):"cost"===e.target.name?n.setState({costView:!0}):"morale"===e.target.name&&n.setState({moraleView:!0})},n.returnView=function(){n.setState({safetyView:!1}),n.setState({qualityView:!1}),n.setState({deliveryView:!1}),n.setState({costView:!1}),n.setState({moraleView:!1})},n.state={view:!1,safetyView:!1,qualityView:!1,deliveryView:!1,costView:!1,moraleView:!1,date:K()(ue,"mmm dd, yyyy")},n}return Object(y.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.safetyFetch(),this.props.qualityFetch(),this.props.deliveryFetch(),this.props.costFetch(),this.props.moraleFetch()}},{key:"render",value:function(){var e=this;return r.a.createElement(a.Fragment,null,r.a.createElement("h1",null,"Tier Board Data"),r.a.createElement("h2",null,this.state.date),r.a.createElement("div",{class:"container"},r.a.createElement("h2",{class:"container-title"},"SAFETY"),r.a.createElement("button",{onClick:this.updateView,name:"safety"},"Add Safety Incident"),this.state.safetyView&&r.a.createElement(W,{onComplete:this.props.safetyAdd,viewChange:this.returnView,buttonText:"submit"}),r.a.createElement("ul",null,this.props.safety.map(function(t){return r.a.createElement("li",{key:t.id},r.a.createElement(X,{safety:t,onComplete:e.props.safetyUpdate,onRemove:e.props.safetyDelete}))}))),r.a.createElement("div",{class:"container"},r.a.createElement("h2",{class:"container-title"},"QUALITY"),r.a.createElement("button",{onClick:this.updateView,name:"quality"},"Add Quality Issue"),this.state.qualityView&&r.a.createElement(G,{onComplete:this.props.qualityAdd,viewChange:this.returnView,buttonText:"submit"}),r.a.createElement("ul",{class:"list-container"},this.props.quality.map(function(t){return r.a.createElement("li",{key:t.id},r.a.createElement(Z,{quality:t,onComplete:e.props.qualityUpdate,onRemove:e.props.qualityDelete}))}))),r.a.createElement("div",{class:"container"},r.a.createElement("h2",{class:"container-title"},"DELIVERY"),r.a.createElement("button",{onClick:this.updateView,name:"delivery"},"Add Delivery Issue"),this.state.deliveryView&&r.a.createElement(te,{onComplete:this.props.deliveryAdd,viewChange:this.returnView,buttonText:"submit"}),r.a.createElement("ul",null,this.props.delivery.map(function(t){return r.a.createElement("li",{key:t.id},r.a.createElement(ne,{delivery:t,onComplete:e.props.deliveryUpdate,onRemove:e.props.deliveryDelete}))}))),r.a.createElement("div",{class:"container"},r.a.createElement("h2",{class:"container-title"},"COST"),r.a.createElement("button",{onClick:this.updateView,name:"cost"},"Add cost Issue"),this.state.costView&&r.a.createElement(re,{onComplete:this.props.costAdd,viewChange:this.returnView,buttonText:"submit"}),r.a.createElement("ul",null,this.props.cost.map(function(t){return r.a.createElement("li",{key:t.id},r.a.createElement(le,{cost:t,onComplete:e.props.costUpdate,onRemove:e.props.costDelete}))}))),r.a.createElement("div",{class:"container"},r.a.createElement("h2",{class:"container-title"},"MORALE"),r.a.createElement("button",{onClick:this.updateView,name:"morale"},"Add morale Issue"),this.state.moraleView&&r.a.createElement(ce,{onComplete:this.props.moraleAdd,viewChange:this.returnView,buttonText:"submit"}),r.a.createElement("ul",null,this.props.morale.map(function(t){return r.a.createElement("li",{key:t.id},r.a.createElement(ie,{morale:t,onComplete:e.props.moraleUpdate,onRemove:e.props.moraleDelete}))}))))}}]),t}(a.Component),pe=Object(v.b)(function(e){return{safety:e.safety,quality:e.quality,delivery:e.delivery,cost:e.cost,morale:e.morale}},function(e){return{safetyAdd:function(t){return e(function(e){return console.log("addReducer",e),e.id=O()(),function(t){j.a.post(k,e).then(function(e){t({type:"safety/ADD",payload:e.body})})}}(t))},safetyUpdate:function(t){return e(function(e){return function(t){j.a.put("".concat(k,"/").concat(e._id)).send(e).then(function(){t({type:"safety/UPDATE",payload:e})})}}(t))},safetyFetch:function(t){return e(x())},safetyDelete:function(t){return e(function(e){return function(t){j.a.delete("".concat(k,"/").concat(e._id)).then(function(e){return e.text}).then(function(){t({type:"safety/DELETE",payload:e})})}}(t))},qualityAdd:function(t){return e(function(e){return console.log("addReducer",e),e.id=O()(),function(t){j.a.post(V,e).then(function(e){t({type:"quality/ADD",payload:e.body})})}}(t))},qualityUpdate:function(t){return e(function(e){return function(t){j.a.put("".concat(V,"/").concat(e._id)).send(e).then(function(){t({type:"quality/UPDATE",payload:e})})}}(t))},qualityFetch:function(t){return e(U())},qualityDelete:function(t){return e(function(e){return function(t){j.a.delete("".concat(V,"/").concat(e._id)).then(function(e){return e.text}).then(function(){t({type:"quality/DELETE",payload:e})})}}(t))},deliveryAdd:function(t){return e(function(e){return console.log("addReducer",e),e.id=O()(),function(t){j.a.post(q,e).then(function(e){t({type:"delivery/ADD",payload:e.body})})}}(t))},deliveryUpdate:function(t){return e(function(e){return function(t){j.a.put("".concat(q,"/").concat(e._id)).send(e).then(function(){t({type:"delivery/UPDATE",payload:e})})}}(t))},deliveryFetch:function(t){return e(I())},deliveryDelete:function(t){return e(function(e){return function(t){j.a.delete("".concat(q,"/").concat(e._id)).then(function(e){return e.text}).then(function(){t({type:"delivery/DELETE",payload:e})})}}(t))},costAdd:function(t){return e(function(e){return console.log("addReducer",e),e.id=O()(),function(t){j.a.post(F,e).then(function(e){t({type:"cost/ADD",payload:e.body})})}}(t))},costUpdate:function(t){return e(function(e){return function(t){j.a.put("".concat(F,"/").concat(e._id)).send(e).then(function(){t({type:"cost/UPDATE",payload:e})})}}(t))},costFetch:function(t){return e(N())},costDelete:function(t){return e(function(e){return function(t){j.a.delete("".concat(F,"/").concat(e._id)).then(function(e){return e.text}).then(function(){t({type:"cost/DELETE",payload:e})})}}(t))},moraleAdd:function(t){return e(function(e){return console.log("addReducer",e),e.id=O()(),function(t){j.a.post(L,e).then(function(e){t({type:"morale/ADD",payload:e.body})})}}(t))},moraleUpdate:function(t){return e(function(e){return function(t){j.a.put("".concat(L,"/").concat(e._id)).send(e).then(function(){t({type:"morale/UPDATE",payload:e})})}}(t))},moraleFetch:function(t){return e(P())},moraleDelete:function(t){return e(function(e){return function(t){j.a.delete("".concat(L,"/").concat(e._id)).then(function(e){return e.text}).then(function(){t({type:"morale/DELETE",payload:e})})}}(t))}}})(me),de=Object(w.e)(H,M(Object(w.a)(g.a))),he=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v.a,{store:de},r.a.createElement(E.a,null,r.a.createElement(a.Fragment,null,r.a.createElement(b.a,{exact:!0,path:"/",component:pe})))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m(),c.a.render(r.a.createElement(he,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,2,1]]]);
//# sourceMappingURL=main.6b2fb190.chunk.js.map