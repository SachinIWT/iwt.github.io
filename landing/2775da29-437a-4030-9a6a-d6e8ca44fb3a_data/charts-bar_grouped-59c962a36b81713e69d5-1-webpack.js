(window.webpackJsonp=window.webpackJsonp||[]).push([["vendors~infogram-charts/charts-bar_grouped"],{JN6y:function(t,e,n){"use strict";n.r(e),n.d(e,"BarGrouped",function(){return C});var i=n("LvDl"),a=n.n(i),r=n("vBe5"),o=n("ziQ1"),c=n("+3eq"),s=n("CKDJ"),l=n("8Nqw"),u=n("W3QS"),h=n("tb4o"),d=n("FNBR"),g=n("2LMz"),f=n("Io7g"),p=n("zVrf"),y=n("Z8Kf"),m=n("Xmbb"),x=n("xuOt"),b=n("7S+G"),v=n("GBhQ"),O=n("LM2t"),w=n("AF4e"),j=n("t9/8"),S=n("fsSQ"),E=n("Uiim");function L(t){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function k(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function D(t,e){return!e||"object"!==L(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function T(t,e,n){return(T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=I(t)););return t}(t,e);if(i){var a=Object.getOwnPropertyDescriptor(i,e);return a.get?a.get.call(n):a.value}})(t,e,n||t)}function I(t){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function B(t,e){return(B=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}Object(S.putGraph)("bar-grouped",E.BarGrouped);var C=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),D(this,I(e).apply(this,arguments))}var n,i,S;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&B(t,e)}(e,s["default"]),n=e,(i=[{key:"render",value:function(){var t=this;this.detectDimensions();var e=this.root,n=this.options,i=new b.Renderer({instance:this}),s=this.getSheetData(),w=Object(f.default)(s),S=this.runtime={width:n.width,height:n.height,components:{},metrics:{},layout:{},sheet:s,formatter:w,inanimate:Object(g.inanimated)(n)},E=S.layout,L=n.fixedHeight,k=s.axis[0],D=s.axis[1],T=this.prepareSheetData(s,this.sheetIndex);this.createTickIntervals(),Object(O.SheetSwitcher)(this,{width:n.width}),Object(j.DownloadButton)(this,n.style.legend);var I=Object(v.legendHelper)({instance:this});if(!this.sheetsNotFound(T)){var B,C=0,G=1,P=0,A=0,M=S.layout.marginTitle={left:0,right:0,top:0,bottom:0},V=0,z=0,U=this.getCategoryData(T),R={maxLeftCategoryWidth:0,maxLeftCategoryHeight:0},F=E.leftLabelPadding={top:2,right:10,bottom:2,left:0},H=this.createAnimationCounter(3);s.categories.categoryHeight&&(B=Number(s.categories.categoryHeight));var N=m.math.preciseNumber,_=n.style.axis.x,W=n.style.axis.y;this.titleLayout(["x","y"]);var Z={width:0,height:0};k.ticks&&((Z=Object(x.getTextDimensions)(w.axis.x.tickSample(),e,_.tick)).height=Math.min(Z.height,30));var Q=Z.height+5,q=Number(s.categories.padding),J=Q+q/2,K=S.width-A-M.left-G-M.right,X=S.height-C-M.top-P-M.bottom,Y=Object(r.range)(0,U.length),$=Object(y.Ordinal)().domain(Y);if(!L&&B){for(var tt=s.series.length,et=B,nt=Object(o.scaleBand)().range([0,et]).domain(Object(r.range)(0,tt)).paddingInner(.2).paddingOuter(0);B>nt.bandwidth();)et+=1,nt.range([0,et]);$.rangeBandsByWidth(et,q,J);var it=$.range()[$.range().length-1]+$.rangeBand()+J;S.height=it+C+M.top+P+M.bottom,X=it}else{$.rangeBands([0,X],q,J);var at=Y.length*$.rangeBand()+(Y.length-1)*$.padding();at=N(at),0===N(X-at)&&(J=Q+(q=N(q=.1*((X-2*J)/Y.length-.1)))/2,$.rangeBands([0,X],q,J))}var rt=K-V-z,ot=this.getDomain(T);"absolute"!==n.series.data||Object(v.legendFiltered)(this)||(ot=this.getSheetsSeriesDomain()),S.xDomain=ot;var ct=Object(p.limit)(k,ot);D.ticks||(F.right=0);var st=0,lt=S.metrics.leftCategoryWidth=0,ut=Object(u.Left)().data([]),ht=ot[0]<0;if(D.ticks){st=F.right,ht&&(st*=2),R.maxLeftCategoryWidth=Math.floor(.35*rt)-F.right;var dt=Object(x.getTextDimensions)(U,e,W.tick);R.maxLeftCategoryHeight=$.rangeBand()+$.padding()-F.top-F.bottom,dt.width<=R.maxLeftCategoryHeight?lt=dt.height:(lt=p.Measure.wrappedText(e,R.maxLeftCategoryWidth,U,W.tick,dt.height).width,lt=Math.ceil(lt)<=R.maxLeftCategoryWidth?Math.ceil(lt):Math.floor(lt)),S.metrics.leftCategoryWidth=lt,ut.scale($).data(U).style(_.tick).bounds({width:lt+F.right,height:X}).offset({left:-(lt+st),top:0}).padding(F).scaleFactor(a.a.get(this,"options.scale")).drawSeparators(s.grid.vertical),rt-=lt+F.right+st}var gt=S.xScale=Object(o.scaleLinear)().rangeRound([0,rt]).clamp(ct);gt.domain(ot);var ft=a.a.get(s,"graphOptions.bar",{}),pt=ft.showValues;ft.valuesOutside&&pt&&Object(l.adjustScaleDomainToOutsideValues)(gt,T,k,function(e){return Object(x.getAllTextDimensions)(e,t.root,t.options.style.graph.item.value)});var yt=Object(d.GridLines)().scale($).orient(d.GridLines.ORIENTS.horizontal).tickSize(-K).highlightZero(s.grid.horizontalZeroHighlight).style(n.style.grid);s.grid.horizontal||yt.tickValues([]);var mt=S.components.xGridLines=Object(d.GridLines)().scale(gt).orient(d.GridLines.ORIENTS.vertical).tickSize(X).highlightZero(s.grid.verticalZeroHighlight).style(n.style.grid),xt=S.components.xAxisBottomText=Object(h.default)().scale(gt).orient("bottom").style(W.tick).textOffset(-5).offset({top:X-Z.height/4});E.igc={x:A+M.left+V+(lt+st),y:C+M.top},this.xTicksSetup(),this.gridSetupVertical(),this.titleComponents(["x","y"]);var bt=S.components,vt=bt.bottomTitle,Ot=bt.leftTitle;vt.orientBounds({y2:S.height-P-5,y1:C,x2:S.width,x1:A+M.left+V+lt+F.right}),Ot.orientBounds({x2:S.width,x1:A+4,y2:C+M.top+X,y1:C+M.top}),vt.dispatch().on("animationEnd",H),S.inanimate&&Object(g.removeAnimation)([Ot,vt,mt,yt,ut,xt]),this.containerSetup();var wt=e.select(".igc"),jt=n.animation.duration;i.add(function(){e.attr("width",S.width).attr("height",S.height),e.transition().ease(c[n.animation.ease]).duration(jt).on("start",function(){t.events.call("startAnimation")}).on("end",function(){H()}),wt.attr("transform","translate(".concat(E.igc.x,", ").concat(E.igc.y,")"))}),D.ticks?(i.addGrid(ut,"igc-y-axis-text"),s.grid.vertical?i.add(function(){t.createBorderLineFunc(e.select(".igc .igc-grid .igc-y-axis-text"),ut)()}):i.addGrid(function(t){t.selectAll(".igc-y-axis-separator").remove(),t.select(".igc-y-axis-border").remove()},"igc-y-axis-text")):i.addGrid(function(t){t.selectAll(".tick").remove(),t.selectAll(".igc-y-axis-separator").remove(),t.select(".igc-y-axis-border").remove()},"igc-y-axis-text"),i.addGrid(yt,"igc-ygrid"),i.addGrid(mt,"igc-xgrid"),i.addGrid(xt,"igc-x-axis-text"),i.addGraph([{graphs:T,x:gt,y:$,textStyle:n.style.graph.item.value,legend:I,transitionDuration:jt,animationEnd:H}]),i.addTitle(Ot,"igc-title-left"),i.addTitle(vt,"igc-title-bottom"),i.start()}}},{key:"renderGraphInstances",value:function(){var t,e=this,n=this.graphInstances.enterCount,i=this.graphInstances.updateCount,r=i+n,o=0===i&&n>0,c=i>0&&n>0,s=this.graphInstances.length,l=this.graphInstances[0].group,u=a.a.after(2,l.animationEnd),h=a.a.after(s,u);this.graphInstances.forEach(function(e){"update"===e.type&&(t=e.instance)});var d=function(){if(0==--r){var t=a.a.after(s,u);e.graphInstances.forEach(function(e){var n=e.instance;n.dispatch().on("animationTextEnd",t),n.renderText()})}};this.graphInstances.forEach(function(e){var n=e.instance,i=n.dispatch();if(c&&"enter"===e.type){i.on("animationEnterStart",d);var a=n.transitionTiming().duration;t&&(a=t.transitionTiming().duration);var r=a.x+a.y;n.renderDelay(r)}else o?i.on("animationStart",d):i.on("animationUpdateEnd",d);i.on("animationEnd",h),e.selection.call(e.instance)})}},{key:"graphInstanceSetup",value:function(t,e,n,i){var a=this.legendData,r=this.runtime,o=r.sheet,c=r.formatter,s=o.series.length,l=Object(v.legendFiltered)(this),u=Object(g.removeDelay)(this,function(t,e){return e/s*(i.transitionDuration-200)});t.scaleX(i.x).scaleY(i.y).data(e.data).colors(e.colors).groupId(n).textStyle(i.textStyle).showValues(e.showValues).legend(i.legend).valuesOutside(e.valuesOutside).tooltip(Object(w.createStyledTooltip)(this)).tooltipText(function(t){return"".concat(t.yLabel,": ").concat(c.tooltip.x.format(t.xLabel))}).tooltipValue(function(t){return t.groupLabel}).numberFormat(c.labels).transitionDelay(u).transitionDuration(i.transitionDuration),l&&t.filter(a)}},{key:"getSheetsSeriesDomain",value:function(){var t;return this.options.sheets.forEach(function(e,n){var i=a.a.merge({},this.emptySheetData(),e),r=this.prepareSheetData(i,n),o=this.getDomain(r);0===n?t=o.slice(0):(t[0]=Math.min(o[0],t[0]),t[1]=Math.max(o[1],t[1]))},this),t}},{key:"defaults",value:function(){return a.a.merge({},T(I(e.prototype),"defaults",this).call(this),{series:{data:"separate"}})}},{key:"emptySheetData",value:function(){return a.a.merge({},T(I(e.prototype),"emptySheetData",this).call(this),{categories:{padding:20},series:[{type:"bar-grouped"}],graphOptions:{bar:{showValues:!0,valuesOutside:!1}},axis:[{title:"",ticks:!0},{title:"",ticks:!0}],grid:{verticalZeroHighlight:!0,vertical:!0,horizontal:!1}})}},{key:"prepareSheetData",value:function(t,e){var n=t.categories.colors,i=a.a.get(t,"graphOptions.bar",{}),r=i.showValues,o=i.valuesOutside;t.categories.data||(t.categories.data=[]);var c,s=e===this.sheetIndex;s&&(c=Object(v.createLegendData)(this));var l=t.categories.data.length,u=t.categories.data.map(function(t,e){return{colors:n,data:[],categoryIdx:e,showValues:!0===r,valuesOutside:!!o,type:"bar-grouped"}});t.series.forEach(function(e,n){var i=a.a.get(e,"index",n);e.data.length<l&&t.categories.data.forEach(function(t,n){e.data[n]=e.data[n]}),e.data.forEach(function(n,r){var o=t.categories.data[r];void 0!==o&&u[r].data.push({x:Object(x.replaceBlank)(n,null),y:r,xLabel:Object(x.replaceBlank)(e.rawData[r]),yLabel:Object(x.replaceBlank)(e.title),groupLabel:Object(x.replaceBlank)(o),seriesIdx:i,link:a.a.get(e,"links[".concat(r,"]"),null)})})});var h=u.length;return u.forEach(function(t){var e=t.data.length,n=0;0!==e&&(t.data.forEach(function(t){null===t.x&&n++}),n===e&&(t.data=[]))}),(u=u.filter(function(t){return t.data&&t.data.length>0})).length!==h&&u.forEach(function(t,e){t.data.forEach(function(t){t.y=e})}),s&&u.forEach(function(t){var e=t.colors;t.data=t.data.filter(function(t){return c({color:Object(x.getColor)(t.seriesIdx,e),title:t.yLabel,groupId:t.seriesIdx}).active})}),u}}])&&k(n.prototype,i),S&&k(n,S),e}()},Uiim:function(t,e,n){"use strict";n.r(e),n.d(e,"BarGrouped",function(){return p});var i=n("LvDl"),a=n.n(i),r=n("30U6"),o=n("ziQ1"),c=n("/TIM"),s=n("+3eq"),l=n("AF4e"),u=n("ZbXR"),h=n("K4oO"),d=n("xuOt"),g=n("qWMY"),f=n("pKNx");function p(){var t,e,n,i,p,y=Object(o.scaleLinear)(),m=Object(o.scaleLinear)(),x=[],b=d.schemeCategory10,v=!0,O=!1,w=Object(u.chartOptions)().style.graph.item.value,j=h.default.barToRight,S=Object(h.createTweenShape)(j,"y"),E=0,L={duration:{x:400,y:700,text:50}},k=0,D=700,T=function(t){return t.x},I=function(t){return t.y},B=Object(r.dispatch)("highlightStart","highlightEnd","animationStart","animationUpdateStart","animationEnterStart","animationEnd","animationUpdateEnd","animationEnterEnd","animationTextEnd","openUrl"),C=0,G=function(){},P=l.getTooltip;function A(t){L.duration.x=D,0===D&&(L.duration.y=D,L.duration.text=D),t.each(function(){if(x.length){var t=Object(c.select)(this),e=t.selectAll("path");e.transition().duration(0);var i,r,l,u,h,j,E,D=function(t){var e,n=m.bandwidth(),i=[],r=[],c=[];x.forEach(function(t,n){var a=i[n]={},o=t.x;a.width=y(o)-y(0),a.x=t.x,a.xPos=Math.round(y(0)+(a.width>0?1:0)),a.xLabel=t.xLabel,a.y=t.y,a.yPos=m(n),a.yLabel=t.yLabel,a.seriesIdx=t.seriesIdx,a.color=Object(d.getColor)(t.seriesIdx,b),a.groupLabel=t.groupLabel,a.link=t.link,r.push(t.seriesIdx),e=m(t.y)}),p&&x.forEach(function(t,e){p[t.seriesIdx].active||r.splice(e,1)});var s=Object(o.scaleBand)().domain(r).range([e,e+n]).paddingInner(.2).paddingOuter(0);i.forEach(function(t){t.yPos=s(t.seriesIdx),t.height=s.bandwidth()}),t.each(function(t){var e=a.a.merge({},t);c.push(e)}),0===c.length&&(c=i.map(function(t){var e=a.a.merge({},t);return e.width=0,e}));return Object(d.pairData)(c,i,function(t){t.width=0}),c}(e);t.selectAll("text").remove(),G=function(){!function(t,e){var i=e.map(function(t){return n?n.format(t.next.xLabel):""+t.next.xLabel}),r=Object(d.getAllTextDimensions)(i,t,w),o=a.a.get(e,"[0].height",0),c=v&&o>=r.height,l=[];c&&(l=g.Bar.prepareTextData(e,r,w,2,y,O));l.length&&c||B.call("animationTextEnd");var u=Object(f.createLabel)(t,l,w);Object(f.addOutline)(u,w,V),u.transition().duration(L.duration.text).style("opacity",1).on("start",function(){k++}).on("end",function(){0==--k&&B.call("animationTextEnd")}),R(u.filter(function(t){return t.inside})),function(t){B.on("highlightStart.text",function(e){t.filter(z(e)).transition().duration(150).ease(s.easeLinear).style("opacity",.3)}),B.on("highlightEnd.text",function(e){t.filter(z(e)).transition().duration(150).ease(s.easeLinear).style("opacity",1)})}(u)}(t,D)},r=D,l=(i=t).selectAll("path").data(r),u=l.enter().insert("path","text"),h=0===l.size()&&0<u.size(),j=L.duration,E=0,l.exit().remove(),l.style("fill",function(t){return t.next.color}).style("stroke-width",0).style("opacity",null),h?(B.call("animationStart"),B.call("animationUpdateStart"),B.call("animationUpdateEnd"),B.call("animationEnterStart"),u.call(M,function(){U(l=l.merge(u)),R(l),B.call("animationEnterEnd"),B.call("animationEnd")})):(B.call("animationStart"),B.call("animationUpdateStart"),l.transition().duration(j.x).attrTween("d",S(function(t){return{xPos:t.next.xPos,yPos:t.yPos,width:t.next.width,height:t.height}})).transition().duration(j.y).on("start",function(){E++}).attrTween("d",S(function(t){return t.next})).on("end",function(){if(0==--E){if(B.call("animationUpdateEnd"),B.call("animationEnterStart"),0===u.size())return B.call("animationEnterEnd"),B.call("animationEnd"),U(l),void R(i.selectAll("path"));u.call(M,function(){B.call("animationEnterEnd"),B.call("animationEnd"),U(l.merge(u)),R(i.selectAll("path"))})}}))}})}function M(t,e){var n=0;t.style("fill",function(t){return t.color}).style("stroke-width",0).attr("d",function(t){return j(t.xPos,t.yPos,0,t.height,0)}).transition().duration(D).ease(s.easeElastic).delay(function(){return C+E.apply(this,arguments)}).on("start",function(){n++}).attrTween("d",S(function(t){return t.next})).on("end",function(){0==--n&&e()})}var V=function(t){return n?n.format(t.text):t.text};function z(t){return function(e){return e.seriesIdx!==t}}function U(e){i&&i.data().forEach(function(e){i.addListener({id:"".concat(t,"_").concat(e.groupId),dispatch:B})}),B.on("highlightStart",function(t){e.filter(function(e){return e.seriesIdx!==t}).transition().duration(150).ease(s.easeLinear).style("opacity",.3)}),B.on("highlightEnd",function(t){e.filter(function(e){return e.seriesIdx!==t}).transition().duration(150).ease(s.easeLinear).style("opacity",1)})}function R(t){t.classed("igc-chart-link",function(t){return!(!t||!t.link)}).on("mouseover",function(){P().interaction("show")}).on("mousemove",function(t){var e,n,i=Object(d.getMousePosition)(c.event);e=T(t),n=I(t),P().setText(e).setValue(n).setPosition(i,t.color)}).on("mouseout",function(){P().hide()}).on("click",function(t){B.call("openUrl",null,t.link)})}var F={scaleX:function(t){return arguments.length?(y=t.copy(),A):y},scaleY:function(t){return arguments.length?(m=t.copy(),A):m},data:function(t){return arguments.length?(x=t,A):x},colors:function(t){return arguments.length?(b=t,A):b},groupId:function(t){return arguments.length?(e=t,A):e},valuesOutside:function(t){return arguments.length?(O=!!t,A):O},chartId:function(e){return arguments.length?(t=e,A):t},showValues:function(t){return arguments.length?(v=!!t,A):v},textStyle:function(t){return arguments.length?(w=t,A):w},legend:function(t){return arguments.length?(i=t,A):i},tooltip:function(t){return arguments.length?(P=t,A):P},tooltipText:function(t){return arguments.length?(T=t,A):T},tooltipValue:function(t){return arguments.length?(I=t,A):I},numberFormat:function(t){return arguments.length?(n=t,A):n},transitionDelay:function(t){return arguments.length?(E=t,A):E},transitionDuration:function(t){return arguments.length?(D=t,A):D},transitionTiming:function(t){return arguments.length?(L=t,A):L},renderDelay:function(t){return arguments.length?(C=t,A):C},dispatch:function(){return B},renderText:function(){return G(),A},filter:function(t){return arguments.length?(p=t,A):p}};return Object.assign(A,F),A}}}]);