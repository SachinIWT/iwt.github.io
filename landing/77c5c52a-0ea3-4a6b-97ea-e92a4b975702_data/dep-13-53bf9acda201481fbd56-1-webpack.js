(window.webpackJsonp=window.webpackJsonp||[]).push([["infogram-charts/dep-13"],{CKDJ:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return g});var r=n("LvDl"),o=n.n(r),i=n("xLbz"),a=n("FVwI"),c=n("vBe5"),u=n("ziQ1"),s=n("xuOt"),l=n("W3QS"),f=n("JgWh");function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function y(t,e){return!e||"object"!==p(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var g=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),y(this,b(e).apply(this,arguments))}var n,r,p;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(e,i["default"]),n=e,(r=[{key:"getDomain",value:function(t){var e=[Object(c.min)(t,function(t){return Object(c.min)(t.data,function(t){return t.x})}),Object(c.max)(t,function(t){return Object(c.max)(t.data,function(t){return t.x})})];return Object(a.ensureZeroEqual)(e),Object(a.ensureZero)(e),Object(u.scaleLinear)().domain(e).nice(10).domain()}},{key:"sheetsNotFound",value:function(t){var e=!t||t&&0===t.length;return e&&(this.events.call("startAnimation"),this.events.call("endAnimation"),this.resetRootElement()),e}},{key:"getCategoryData",value:function(t){return this.runtime.sheet.categories.data.filter(function(e,n){var r=t.find(function(t){var e=t.categoryIdx;return n===e});return r&&r.data.length>0})}},{key:"xTicksMetrics",value:function(t){var e=this.root,n=this.options,r=this.runtime.formatter;return Object(s.getTextDimensions)(r.axis.x.formatTicks(t),e,n.style.axis.x)}},{key:"gridSetupVertical",value:function(){var t=this.runtime.sheet;if(!t.grid.vertical){var e=this.runtime,n=e.xDomain,r=e.components,i=Object(a.containsZero)(n),c=[],u=o.a.get(t,"grid.verticalZero",!1);i&&u&&c.push(0),r.xGridLines.tickValues(c)}}},{key:"xTicksSetup",value:function(){var t,e,n=this.options,r=this.root,i=this.runtime,a=i.xScale,c=i.components,u=i.layout,p=i.xDomain,h=i.sheet,y=i.xTickInterval,b=i.formatter,m=i.percent,g=c.xAxisBottomText,d=c.xGridLines,v=u.leftLabelPadding,x=u.igc,O=p[0]<0,j=[],k=[],T=[],w=[];l.ScaleHelper.ticks(a,y).forEach(function(t){0===t?(j.push(t),k.push(a(t)),T.push(t),w.push(a(t))):t<0?(j.push(t),k.push(a(t))):(T.push(t),w.push(a(t)))});var E=o.a.union(j,T);m?(e=Object(f.percentFormat)(b.axis.x),t=Object(s.getTextDimensions)(E.map(e),r,n.style.axis.x)):t=this.xTicksMetrics(E);var S=Object(l.getStepsInRange)(k,t.width+5,-1),P=Object(l.getStepsInRange)(w,t.width+5,1),L=Object(l.filterToFit)(k,j,S,-1),_=Object(l.filterToFit)(w,T,P,1),D=o.a.union(L.domain,_.domain);!O&&D[0]!==p[0]&&D.unshift(p[0]),g.tickValues(D),d.tickValues(D),d.tickValues().length>0&&0===a(d.tickValues()[0])&&!h.grid.vertical&&!o.a.get(h,"grid.verticalZero",!1)&&d.hideLinesByIndex([0]);var I=[],F=m?e:b.axis.x.createTickFormatter(D);g.tickFormat(F);var R=Object(s.getAllTextDimensions)(D.map(F),r,n.style.axis.x.tick),V=g.textOffset();D.forEach(function(t,e){var n=a(t),r=R.collection[e].width,o=n-r+V;O&&(o+=v.right);var i=0<o;0===e&&0===n&&x.x>r+Math.abs(V)||i||I.push(e)}),g.hideTicksByIndex(I),this.runtime.sheet.axis[0].ticks||g.tickValues([])}},{key:"createBorderLineFunc",value:function(t,e){return function(){var n=e.bounds(),r=e.style(),o=e.offset();t.attr("transform","translate(".concat(o.left,", ").concat(o.top,")"));var i=t.selectAll(".igc-y-axis-border").data([0]);i.exit().remove(),(i=i.enter().append("rect").attr("class","igc-y-axis-border").merge(i)).attr("x",n.width-1).attr("y",0).attr("height",n.height).attr("width",2).styles({fill:r.color,stroke:"none","stroke-width":0})}}},{key:"applySheetOptions",value:function(t){function e(e){return t[e]||t[0]}t&&this.options.sheets.forEach(function(t,n){var r=e(n+1);r.categories&&o.a.merge(t.categories,r.categories),r.grid&&o.a.merge(t.grid,r.grid),o.a.merge(t.graphOptions,r.graphOptions),r.legend&&o.a.merge(t.legend,r.legend),r.tooltip&&(t.tooltip=t.tooltip||{},o.a.merge(t.tooltip,r.tooltip)),r.labels&&(t.labels=t.labels||{},o.a.merge(t.labels,r.labels)),t.axis.forEach(function(t,e){var n=r.axis&&r.axis[e];n&&o.a.merge(t,n)})})}}])&&h(n.prototype,r),p&&h(n,p),e}()},JgWh:function(t,e,n){"use strict";n.r(e),n.d(e,"percentFormat",function(){return c}),n.d(e,"percentEnabled",function(){return u}),n.d(e,"adjustStackedGraphs",function(){return s}),n.d(e,"tooltipPercentValue",function(){return l});var r=n("LvDl"),o=n.n(r),i=n("rWgG"),a=n("xuOt");function c(t){var e=o.a.get(t,"config.prefix",""),n=o.a.get(t,"config.suffix","");return function(t){return"".concat(e).concat(Object(i.format)(".0%")(t)).concat(n)}}function u(t){var e=t.series;return e&&e.percent}function s(t,e){var n=t.map(function(t){return t.data.reduce(function(t,n){var r=Object(a.replaceBlank)(n[e],0);return r>0?t.positive+=r:t.negative+=Math.abs(r),t},{positive:0,negative:0})});t.forEach(function(t,r){var o=n[r];t.data.forEach(function(t){var n=Object(a.replaceBlank)(t[e],0),r=n>0;t[e]=0===n?n:n/(r?o.positive:o.negative)})})}function l(t){var e,n=t.sheet,r=t.formatter,a=t.props;if(o.a.get(n,"tooltip.showPercent",!1)){var c=Object(i.format)(".2%");e=function(t){return"".concat(t[a[0]],": ").concat(r.tooltip.y.format(t[a[1]])," (").concat(c(t[a[2]]),")")}}else e=function(t){return"".concat(t[a[0]],": ").concat(r.tooltip.y.format(t[a[1]]))};return e}},oxvG:function(t,e,n){"use strict";n.r(e),n.d(e,"Label",function(){return u});var r=n("ZbXR"),o=n("Xmbb"),i=n("xuOt"),a=n("30U6"),c=n("/TIM"),u=(n("iD6h"),function t(){var e="",n=t.DEFAULT_ORIENT,u={x1:0,y1:0,x2:100,y2:100},s=Object(r.chartOptions)().style.axis.default.title,l=Object(a.dispatch)("animationEnd"),f=!0;function p(r){r.each(function(){var r=Object(c.select)(this).selectAll("text").data([0]);r.exit().remove(),r=r.enter().insert("text").merge(r);var a=u.x1,p=u.y1+(u.y2-u.y1)/2;"top"!==n&&"bottom"!==n||(a=u.x1+(u.x2-u.x1)/2),"top"===n&&(p=u.y1),"right"===n&&(a=u.x1+(u.x2-u.x1)),"bottom"===n&&(p=u.y1+(u.y2-u.y1)),r.text(e),t.adjust(r,a,p,n,Object(i.getTextDimensions)(e,Object(c.select)(this.ownerSVGElement),s)),r.styles(s).attr("x",a).attr("y",p).style("opacity",f?o.eps:null).attr("fill",s.color).attr("text-anchor","middle"),f?r.transition().style("opacity",1).on("end",function(){l.call("animationEnd")}):l.call("animationEnd")})}var h={text:function(t){return arguments.length?(e=t,p):e},orientBounds:function(t){return arguments.length?(u=t,p):u},orient:function(e){return arguments.length?(n=e in t.ORIENTS?e+"":t.DEFAULT_ORIENT,p):n},style:function(t){return arguments.length?(s=t,p):s},dispatch:function(){return l},animate:function(t){return arguments.length?(f=t,p):p}};return Object.assign(p,h),p});u.DEFAULT_ORIENT="left",u.ORIENTS={top:1,right:1,bottom:1,left:1},u.adjust=function(t,e,n,r,o){"left"===r&&(t.attr("dy",o.baseLineOffset),t.attr("transform","rotate(270,".concat(e,",").concat(n,")"))),"right"===r&&(t.attr("dy",o.baseLineOffset-o.height),t.attr("transform","rotate(270,".concat(e,",").concat(n,")"))),"top"===r&&t.attr("dy",o.baseLineOffset),"bottom"===r&&t.attr("dy",o.baseLineOffset-o.height)}},xLbz:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return y});var r=n("LvDl"),o=n.n(r),i=n("mb2s"),a=n("oxvG"),c=n("xuOt");function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var h={x:{name:"bottomTitle",valuePath:"axis[0].title",stylePath:"style.axis.x.title",orient:"bottom"},y:{name:"leftTitle",valuePath:"axis[1].title",stylePath:"style.axis.y.title",orient:"left"},y2:{name:"rightTitle",valuePath:"axis[2].title",stylePath:"style.axis.y2.title",orient:"right"}},y=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,f(e).apply(this,arguments))}var n,r,u;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(e,i["default"]),n=e,(r=[{key:"titleLayout",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["x","y"],e=this.runtime,n=this.root,r=this.options,i=e.sheet,a=e.layout.marginTitle;t.forEach(function(t){var e=o.a.get(h,t),u=o.a.get(i,e.valuePath);u&&(a[e.orient]=Object(c.getTextDimensions)(u,n,o.a.get(r,e.stylePath)).height+10)})}},{key:"titleComponents",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["x","y"],e=this.options,n=this.runtime,r=n.sheet,i=n.components;t.forEach(function(t){var n=o.a.get(h,t);i[n.name]=Object(a.Label)().text(o.a.get(r,n.valuePath)).style(o.a.get(e,n.stylePath)).orient(n.orient)})}}])&&s(n.prototype,r),u&&s(n,u),e}()}}]);