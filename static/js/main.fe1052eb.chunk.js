(this["webpackJsonpnotion-graphs"]=this["webpackJsonpnotion-graphs"]||[]).push([[0],{12:function(t,e,n){t.exports=n.p+"static/media/loop2.9dfc4175.svg"},14:function(t,e,n){t.exports=n(22)},19:function(t,e,n){},21:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(10),o=n.n(c),i=(n(19),n(5)),s=n(7),u=n(1),l=n.n(u),p=n(11),f=n(30),h=n(31),d=n(33),m=n(32),b=(n(21),n(6)),v=n(12),j=n.n(v),g=function(){var t=Object(a.useRef)(null),e=window.location.search,n=Object(b.a)(e,function(){var t=Object(p.a)(l.a.mark((function t(e){var n,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://l175wxlpxi.execute-api.us-east-1.amazonaws.com/production/line_graph"+e,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Cache:"no-cache"},credentials:"include"});case 2:return n=t.sent,t.next=5,n.json();case 5:return a=t.sent,t.abrupt("return",a.data_points);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),{refreshInterval:3e4}).data;return Object(a.useEffect)((function(){if(null!=t&&null!=t.current&&n){var a=n.filter((function(t){return null!=t.x&&null!=t.y&&null!=t.size})),r=new URLSearchParams(e),c=function(t){return parseInt(r.get(t))},o=function(t,e){var n=c("".concat(t,"Max")),a=c("".concat(t,"Min"));if(!n||!a){var r=function(t,e){var n,a;return n=Math.min.apply(Math,Object(s.a)(t.map((function(t){return t[e]})))),(a=Math.max.apply(Math,Object(s.a)(t.map((function(t){return t[e]})))))===n&&(a+=0===a?1:.1*Math.abs(a)),[n,a]}(e,t),o=Object(i.a)(r,2),u=o[0],l=o[1];return[n||u,a||l]}return[n,a]},u=o("x",a),l=Object(i.a)(u,2),p=l[0],b=l[1],v=o("y",a),j=Object(i.a)(v,2),g=j[0],x=j[1],O=o("size",a),w=Object(i.a)(O,2),y=w[0],M=w[1],k=Object(f.a)(t.current),E=t.current.clientWidth-50,z=t.current.clientHeight-50,A=Object(h.a)().domain([p,b+.1*Math.abs(b-p)]).range([25,E]),C=Object(h.a)().domain([g-.1*Math.abs(x-g),x]).range([z,65]),I=Object(h.a)().domain([y,M+.1*Math.abs(M-y)]).range([3,7]);k.append("g").attr("class","x axis").attr("transform","translate(0,".concat(z,")")).call(Object(d.a)(A)),k.append("g").attr("class","y axis").attr("transform","translate(25,0)").call(Object(d.b)(C));var S=Object(m.a)().x((function(t){return A(t.x)})).y((function(t){return C(t.y)}));k.select(".line").remove(),k.append("path").datum(a).attr("class","line").attr("d",S).attr("fill","none").attr("pointer-events","visibleStroke").style("stroke","black").attr("stroke-width","1px"),k.selectAll(".dot").remove(),k.selectAll(".dot").data(a).enter().append("circle").attr("class","dot").attr("cx",(function(t){return A(t.x)})).attr("cy",(function(t){return C(t.y)})).attr("r",(function(t){return I(t.size)})).on("mouseover",(function(t){console.log(t)})).on("mouseout",(function(){}))}}),[n,e]),r.a.createElement("div",{className:"container"},r.a.createElement("svg",{id:"journey-timeline",ref:t}),r.a.createElement("button",{id:"refresh-button",onClick:function(){return Object(b.b)(e)}}," ",r.a.createElement("img",{alt:"refresh graph",src:j.a})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.fe1052eb.chunk.js.map