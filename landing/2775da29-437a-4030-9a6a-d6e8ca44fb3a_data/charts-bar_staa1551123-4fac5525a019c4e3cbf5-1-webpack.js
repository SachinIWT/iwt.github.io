(window.webpackJsonp=window.webpackJsonp||[]).push([["vendors~infogram-charts/charts-bar~infogram-charts/charts-bar_grouped~infogram-charts/charts-bar_sta~a1551123"],{"8Nqw":function(t,e,n){"use strict";n.r(e),n.d(e,"Bar",function(){return E}),n.d(e,"adjustScaleDomainToOutsideValues",function(){return I});var i=n("LvDl"),r=n.n(i),a=n("ziQ1"),o=n("vBe5"),c=n("+3eq"),l=n("CKDJ"),s=n("mb2s"),u=n("2LMz"),h=n("Io7g"),d=n("W3QS"),f=n("tb4o"),g=n("FNBR"),p=n("zVrf"),x=n("xuOt"),b=n("LM2t"),y=n("7S+G"),m=n("AF4e"),v=n("t9/8"),O=n("fsSQ"),w=n("qWMY");function L(t){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function j(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function S(t,e){return!e||"object"!==L(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function k(t,e,n){return(k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=D(t)););return t}(t,e);if(i){var r=Object.getOwnPropertyDescriptor(i,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function D(t){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function T(t,e){return(T=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}Object(O.putGraph)("bar",w.Bar);var E=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),S(this,D(e).apply(this,arguments))}var n,i,O;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&T(t,e)}(e,l["default"]),n=e,(i=[{key:"render",value:function(){var t=this;this.detectDimensions();var e=this.options,n=this.root,i=new y.Renderer({instance:this}),l=this.getSheetData(),m=Object(h.default)(l),O=this.runtime={width:e.width,height:e.height,components:{},metrics:{},layout:{},sheet:l,formatter:m,inanimate:Object(u.inanimated)(e)},w=O.layout,L=e.fixedHeight,j=l.axis[0],S=l.axis[1],k=this.prepareSheetData(l);if(this.createTickIntervals(),Object(b.SheetSwitcher)(this,{width:O.width}),Object(v.DownloadButton)(this,e.style.legend),!s.default.prototype.sheetsNotFound.call(this)){var D,T=0,E=1,P=0,M=0,A=O.layout.marginTitle={left:0,right:0,top:0,bottom:0},C=0,z=0,B={maxLeftCategoryWidth:0,maxLeftCategoryHeight:0},G=w.leftLabelPadding={top:0,right:10,bottom:0,left:0},V=this.createAnimationCounter(k.length+2);l.categories.categoryHeight&&(D=Number(l.categories.categoryHeight)),k[0].data=k[0].data.filter(function(t){return null!==t.x});var R=k[0].data.map(function(t){return t.y});if(R.length<1)return this.events.call("startAnimation"),this.events.call("endAnimation"),this.resetRootElement();var _=e.style.axis.x,H=e.style.axis.y;this.titleLayout(["x","y"]);var F={width:0,height:0};j.ticks&&((F=Object(x.getTextDimensions)(m.axis.x.tickSample(),n,_.tick)).height=Math.min(F.height,30));var N=O.width-M-A.left-E-A.right,W=O.height-T-A.top-P-A.bottom,Y=Object(o.range)(0,R.length),Z=Object(a.scaleBand)().domain(Y).padding(.1);if(!L&&D){var q=10;for(Z.range([0,q-(F.height+5)]);Z.bandwidth()-D<0;)q+=1,Z.range([0,q-(F.height+5)]);q-=1,O.height=q+T+A.top+P+A.bottom,W=q}Z.range([0,W-(F.height+5)]);var X=N-C-z,Q=this.getDomain(k);"absolute"===e.series.data&&(Q=this.getSheetsSeriesDomain()),O.xDomain=Q;var J=Object(p.limit)(j,Q);S.ticks||(G.right=0);var K=G.right;Q[0]<0&&(K*=2);var U=Object(x.getTextDimensions)(R,n,H.tick);B.maxLeftCategoryWidth=.35*X-G.right,B.maxLeftCategoryHeight=Z.bandwidth()+.1*Z.bandwidth()/.9-G.top-G.bottom;var $=O.metrics.leftCategoryWidth=0,tt=!1;S.ticks&&(U.width<=B.maxLeftCategoryHeight?$=U.height:($=p.Measure.wrappedText(n,B.maxLeftCategoryWidth,R,H.tick,U.height).width,Math.ceil($)<=B.maxLeftCategoryWidth&&($=Math.ceil($)),tt=B.maxLeftCategoryHeight<U.height)),O.metrics.leftCategoryWidth=$;var et=Object(d.Left)().scale(Z).data(R).style(H.tick).bounds({width:$+G.right,height:W}).offset({left:-($+K),top:0}).scaleFactor(r.a.get(this,"options.scale")).padding(G);if(tt){var nt=Object(d.filterOverlappingCategories)(Z,U,Object(x.getAllTextDimensions)(R,n,H.tick));et.indexFilter(nt)}X-=$+K;var it=O.xScale=Object(a.scaleLinear)().range([0,X]).clamp(J);it.domain(Q);var rt=r.a.get(l,"graphOptions.bar",{}),at=rt.showValues;rt.valuesOutside&&at&&I(it,k,j,function(e){return Object(x.getAllTextDimensions)(e,t.root,t.options.style.graph.item.value)});var ot=Object(g.GridLines)().scale(Z).orient(g.GridLines.ORIENTS.horizontal).tickSize(-N).highlightZero(l.grid.horizontalZeroHighlight).style(e.style.grid);l.grid.horizontal||ot.tickValues([]);var ct=O.components.xGridLines=Object(g.GridLines)().scale(it).orient(g.GridLines.ORIENTS.vertical).tickSize(W).highlightZero(l.grid.verticalZeroHighlight).style(e.style.grid),lt=O.components.xAxisBottomText=Object(f.default)().scale(it).orient("bottom").style(_.tick).textOffset(-5).offset({top:W-F.height/4});w.igc={x:M+A.left+C+($+K),y:T+A.top},this.xTicksSetup(),this.gridSetupVertical(),this.titleComponents(["x","y"]);var st=O.components,ut=st.bottomTitle,ht=st.leftTitle;ut.orientBounds({y2:O.height-P-5,y1:T,x2:O.width,x1:M+A.left+C+$+et.padding().right}),ht.orientBounds({x2:O.width,x1:M+4,y2:T+A.top+W,y1:T+A.top}),ut.dispatch().on("animationEnd",V),O.inanimate&&Object(u.removeAnimation)([ht,ut,ct,ot,lt,et]),this.containerSetup(),i.add(function(){n.attr("width",O.width).attr("height",O.height),n.transition().ease(c[t.options.animation.ease]).duration(t.options.animation.duration).on("start",function(){t.events.call("startAnimation")}).on("end",function(){V()}),n.select(".igc").attr("transform","translate(".concat(w.igc.x,", ").concat(w.igc.y,")"))}),i.addGrid(ot,"igc-ygrid"),i.addGrid(ct,"igc-xgrid"),i.addGraph([{graphs:k,x:it,y:Z,textStyle:e.style.graph.item.value,transitionDuration:e.animation.duration,animationEnd:V}]),S.ticks?(i.addGrid(et,"igc-y-axis-text"),l.grid.vertical?i.add(function(){t.createBorderLineFunc(n.select(".igc .igc-grid .igc-y-axis-text"),et)()}):i.addGrid(function(t){t.select(".igc-y-axis-border").remove()},"igc-y-axis-text")):i.addGrid(function(t){t.selectAll(".tick").remove(),t.select(".igc-y-axis-border").remove()},"igc-y-axis-text"),i.addGrid(lt,"igc-x-axis-text"),i.addTitle(ht,"igc-title-left"),i.addTitle(ut,"igc-title-bottom"),i.start()}}},{key:"graphInstanceSetup",value:function(t,e,n,i,r){var a=this.runtime.formatter,o=e.data.length,c=Object(u.removeDelay)(this,function(t,e){return e/o*500});t.scaleX(i.x).scaleY(i.y).data(e.data).groupId(r).textStyle(i.textStyle).showValues(e.showValues).valuesOutside(e.valuesOutside).tooltip(Object(m.createStyledTooltip)(this)).tooltipText(function(t){return t.yLabel}).tooltipValue(function(t){return a.tooltip.x.format(t.xLabel)}).numberFormat(a.labels).transitionDelay(c).transitionDuration(i.transitionDuration).dispatch().on("animationEnd",i.animationEnd)}},{key:"getSheetsSeriesDomain",value:function(){var t;return this.options.sheets.forEach(function(e,n){var i=r.a.merge({},this.emptySheetData(),e),a=this.prepareSheetData(i),o=this.getDomain(a);0===n?t=o.slice(0):(t[0]=Math.min(o[0],t[0]),t[1]=Math.max(o[1],t[1]))},this),t}},{key:"defaults",value:function(){return r.a.merge({},k(D(e.prototype),"defaults",this).call(this),{series:{data:"separate"}})}},{key:"emptySheetData",value:function(){return r.a.merge({},k(D(e.prototype),"emptySheetData",this).call(this),{series:[{title:"",type:"bar"}],graphOptions:{bar:{showValues:!0,valuesOutside:!1}},axis:[{title:"",ticks:!0,tickInterval:10},{title:"",ticks:!0}],grid:{vertical:!0,verticalZeroHighlight:!0,horizontal:!1}})}},{key:"prepareSheetData",value:function(t){var e=t.categories.colors,n=r.a.get(t,"series[0]"),i=n.type,a=r.a.get(t,"graphOptions.bar",{}),o=a.showValues,c=a.valuesOutside;return[{type:i,data:n.data.map(function(i,a){return{x:Object(x.replaceBlank)(i,null),y:Object(x.replaceBlank)(t.categories.data[a]),xLabel:Object(x.replaceBlank)(n.rawData[a]),color:Object(x.getColor)(a,e),link:r.a.get(n,"links[".concat(a,"]"),null)}}),showValues:o,valuesOutside:c}]}}])&&j(n.prototype,i),O&&j(n,O),e}();function I(t,e,n,i){var a=Object(x.isNumber)(n.maxLimit),o=Object(x.isNumber)(n.minLimit);if(!a||!o){var c=t.domain(),l=t.copy();l.clamp(!1);for(var s=i(r.a.flatten(e.map(function(t){return t.data.map(function(t){return t.xLabel})}))),u=r.a.flatten(e.map(function(t){return t.data})),h=u.length,d={neg:{text:0,bar:0,value:0,combined:0},pos:{text:0,bar:0,value:0,combined:0},bar:{neg:{text:0,bar:0,value:0,combined:0},pos:{text:0,bar:0,value:0,combined:0}}},f=l(0);h--;){var g=u[h].x>0?l(u[h].x)-f:f-l(u[h].x),p=g+s.collection[h].width+3,b={bar:g,value:u[h].x,text:s.collection[h].width+3,combined:p};u[h].x>=0?(d.pos.combined<p&&(d.pos=b),d.bar.pos.bar<g&&(d.bar.pos=b)):(d.neg.combined<p&&(d.neg=b),d.bar.neg.bar<g&&(d.bar.neg=b))}var y=l(c[1]);if(d.neg.bar+d.pos.bar!==0){if(a&&!o){var m=(y-d.neg.text)/y,v=(c[1]-d.neg.value)/m;t.domain([c[1]-v,c[1]])}else if(!a&&o){var O=(y-d.pos.text)/y,w=(d.pos.value-c[0])/O;t.domain([c[0],c[0]+w])}else{var L=d.bar.neg.bar,j=(y-(d.neg.text+d.pos.text))/(d.neg.bar+d.pos.bar),S=(c[1]-c[0])/j,k=[c[0],c[0]+S];l.domain(k);var D=l.invert(0)-l.invert(L-d.neg.combined);t.domain(k.map(function(t){return t-D}))}t.nice(10)}}}},qWMY:function(t,e,n){"use strict";n.r(e),n.d(e,"Bar",function(){return b});var i=n("LvDl"),r=n.n(i),a=n("AF4e"),o=n("ZbXR"),c=n("K4oO"),l=n("xuOt"),s=n("ziQ1"),u=n("/TIM"),h=(n("iD6h"),n("30U6")),d=n("vBe5"),f=n("+3eq"),g=n("zVrf"),p=n("SC+/"),x=n("pKNx");function b(){var t,e,n,i,d=Object(s.scaleLinear)(),g=Object(s.scaleLinear)(),y=[],m=!0,v=!1,O=Object(o.chartOptions)().style.graph.item.value,w=c.default.barToRight,L=Object(c.createTweenShape)(w,"y"),j={duration:{x:700,y:400,text:50}},S={enter:0,update:0,text:0},k=0,D=700,T=Object(h.dispatch)("highlightStart","highlightEnd","animationEnd","openUrl"),E=0,I=function(t){return t.x},P=function(t){return t.y},M=a.getTooltip,A=!1;function C(e){j.duration.x=D,0===D&&(j.duration.y=D,j.duration.text=D);var a=A?function(t){return t.x0}:function(){return 0};e.each(function(){if(y.length){var e=Object(u.select)(this);E=g.bandwidth();var o=[];y.forEach(function(t,e){var n=o[e]={},i=a(t);n.x=t.x,n.xLabel=t.xLabel,n.y=t.y,n.yLabel=t.y,n.height=E,n.width=d(t.x)-d(i),n.xPos=Math.round(d(i)+(!A&&n.width>0?1:0)),n.yPos=g(e),n.color=t.color,n.index=e,n.seriesIdx=t.seriesIdx,n.link=t.link});var c=e.selectAll("path");c.transition().duration(0),e.selectAll("text").remove();var s=[];c.each(function(t){s.push(r.a.merge({},t))}),0===s.length&&(s=o.map(function(t){return r.a.merge({},t,{width:0})})),Object(l.pairData)(s,o,function(t){t.width=0});var h=function(r){!function(e){i&&i.data().forEach(function(e){i.addListener({id:"".concat(t,"_").concat(e.groupId),dispatch:T})});T.on("highlightStart",function(t){e.filter(function(e){return e.seriesIdx!==t}).transition().duration(150).ease(f.easeLinear).style("opacity",.3)}),T.on("highlightEnd",function(t){e.filter(function(e){return e.seriesIdx!==t}).transition().duration(150).ease(f.easeLinear).style("opacity",1)})}(r),z(r),function(t,e){var i=e.map(function(t){return n?n.format(t.next.xLabel):"".concat(t.next.xLabel)});A&&(i=e.map(function(t){return"".concat(t.next.yLabel)}));var r=Object(l.getAllTextDimensions)(i,t,O),a=m&&E>=r.height,o=[];a&&(o=A?b.prepareTextDataInside(e,r,O,2,d,t):b.prepareTextData(e,r,O,2,d,v));o.length&&a||T.call("animationEnd");var c=Object(x.createLabel)(t,o,O);Object(x.addOutline)(c,O,G),c.transition().duration(j.duration.text).style("opacity",1).on("start",function(){S.text++}).on("end",function(){0==--S.text&&T.call("animationEnd")}),A&&function(t){var e=Object(x.labelInfo)(O);if(e.manual){var n=e.stroke,i=e.fill,r=V(i,.3),a=V(n,.3);return T.on("highlightStart.text",function(e){var n=t.filter(R(e)).transition().duration(150).ease(f.easeLinear).style("fill",r);n.select(".text-outline").attr("stroke",a).attr("fill",a),n.select(".text-outline-fill").style("fill",r)}),void T.on("highlightEnd.text",function(e){var r=t.filter(R(e)).transition().duration(150).ease(f.easeLinear).style("fill",Object(p.rgb)(i).toString());r.select(".text-outline").attr("fill",Object(p.rgb)(n).toString()).attr("stroke",Object(p.rgb)(n).toString()),r.select(".text-outline-fill").style("fill",Object(p.rgb)(i).toString())})}T.on("highlightStart.text",function(e){t.filter(R(e)).transition().duration(150).ease(f.easeLinear).style("opacity",.3)}),T.on("highlightEnd.text",function(e){t.filter(R(e)).transition().duration(150).ease(f.easeLinear).style("opacity",1)})}(c);z(c.filter(function(t){return t.inside}))}(e,s)};!function(t){var e,n,i,r,a={y:["yPos","height"]};if(!t)return;function o(n){var i=Math.abs(t[n]-e[n]);i<.2&&r++}for(n in e=t.next,j.duration)a[n]&&(i=a[n].length,r=0,a[n].forEach(o),i===r&&(j.duration[n]=0))}(s[0]);var w=e.selectAll("path").data(s),k=w.enter().insert("path","text"),D=0===w.size()&&w.size()<k.size();w.exit().remove(),w.style("stroke-width",0).style("fill",function(t){return t.next.color}).style("opacity",null);var I=j.duration;D?k.call(B,function(){h(w.merge(k))}):w.transition().duration(I.x).attrTween("d",L(function(t){return{xPos:t.next.xPos,yPos:t.yPos,width:t.next.width,height:t.height}})).transition().duration(I.y).on("start",function(){S.update++}).attrTween("d",L(function(t){return t.next})).on("end",function(){if(0==--S.update){if(0===k.size())return void h(w);k.call(B,function(){h(w.merge(k))})}})}})}function z(t){t.classed("igc-chart-link",function(t){return!(!t||!t.link)}).on("mouseover",function(){M().interaction("show")}).on("mousemove",function(t){var e,n,i=Object(l.getMousePosition)(u.event);e=I(t),n=P(t),M().setText(e).setValue(n).setPosition(i,t.color)}).on("mouseout",function(){M().hide()}).on("click",function(t){T.call("openUrl",null,t.link)})}function B(t,e){t.style("fill",function(t){return t.color}).style("stroke-width",0).attr("d",function(t){return w(t.xPos,t.yPos,t.width,0,0)}),t.transition().duration(D).ease(f.easeElastic).delay(k).attrTween("d",L(function(t){return t.next})).on("start",function(){S.enter++}).on("end",function(){0==--S.enter&&e()})}var G=function(t){return n?n.format(t.text):t.text};function V(t,e){return function(){var n=Object(p.rgb)(t);return n.opacity=e,n.toString()}}function R(t){return function(e){return e.seriesIdx!==t}}var _={scaleX:function(t){return arguments.length?(d=t.copy(),C):d},scaleY:function(t){return arguments.length?(g=t.copy(),C):g},data:function(t){return arguments.length?(y=t,C):y},groupId:function(t){return arguments.length?(e=t,C):e},chartId:function(e){return arguments.length?(t=e,C):t},dispatch:function(){return T},valuesOutside:function(t){return arguments.length?(v=!!t,C):v},showValues:function(t){return arguments.length?(m=!!t,C):m},textStyle:function(t){return arguments.length?(O=t,C):O},tooltip:function(t){return arguments.length?(M=t,C):M},tooltipText:function(t){return arguments.length?(I=t,C):I},tooltipValue:function(t){return arguments.length?(P=t,C):P},transitionDelay:function(t){return arguments.length?(k=t,C):k},transitionDuration:function(t){return arguments.length?(D=t,C):D},numberFormat:function(t){return arguments.length?(n=t,C):n},isGantt:function(t){return arguments.length?(A=t,C):A},legend:function(t){return arguments.length?(i=t,C):i}};return Object.assign(C,_),C}b.prepareTextData=function(t,e,n,i,r,a){var o=[],c=Object(d.max)(r.range());return t.forEach(function(t,n){var r=t.next;if(null!==r.y){var l={},s=r.xPos,u=s,h="start",d=c-s,f=s,g=-1,p=!0,x=e.collection[n],b=x.width+i,y=Math.round(Math.abs(r.width)),m=!a&&y>b;r.x<0&&(h="end",f=d,d=s,g=1),m?u-=g*i:d>=y+b?u-=g*(y+i):f>=b?(u+=g*i,h="end"===h?"start":"end"):p=!1,p&&(l.inside=m,l.textX=u,l.textY=r.yPos+r.height/2+.25*x.height,l.textAnchor=h,l.text=r.xLabel,l.index=n,l.seriesIdx=r.seriesIdx,l.yLabel=r.yLabel,l.xLabel=r.xLabel,l.groupLabel=r.groupLabel,l.color=r.color,o.push(l))}}),o},b.prepareTextDataInside=function(t,e,n,i,r,a){var o=[];return t.forEach(function(t,r){var c=t.next;if(null!==c.y){var l={},s=c.xPos,u=e.collection[r],h=u.width,d=h+2*i,f=Math.round(Math.abs(c.width)),p=f>d,x=f-2*i,b=c.yLabel;if(!p){var y=g.Text.getTrimmedText(a,b,n,x),m=y.collection,v=y.w;"..."===(b=m[0])?(b="",h=0):h=v}l.textX=Math.round(i+s+(x-h)/2),l.inside=!0,l.textY=Math.round(c.yPos+c.height/2+.25*u.height),l.textAnchor="start",l.text=b,l.index=r,l.seriesIdx=c.seriesIdx,l.yLabel=c.yLabel,l.xLabel=c.xLabel,l.groupLabel=c.groupLabel,l.color=c.color,o.push(l)}}),o}}}]);