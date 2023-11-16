"use strict";(self.webpackChunkauto_mindmapping=self.webpackChunkauto_mindmapping||[]).push([[190],{8190:(t,e,a)=>{a.d(e,{diagram:()=>h});var r=a(7201),i=a(9836),n=a(8584),d=a(8433),o=a(2954),s=a(2997),l=a(4299);a(504),a(8703),a(7892);let p={};const c=function(t){const e=Object.entries(p).find((e=>e[1].label===t));if(e)return e[0]},g={draw:function(t,e,a,r){const g=(0,o.g)().class;p={},o.l.info("Rendering diagram "+t);const h=(0,o.g)().securityLevel;let f;"sandbox"===h&&(f=(0,i.Ys)("#i"+e));const u="sandbox"===h?(0,i.Ys)(f.nodes()[0].contentDocument.body):(0,i.Ys)("body"),x=u.select("[id='".concat(e,"']"));var y;(y=x).append("defs").append("marker").attr("id","extensionStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),y.append("defs").append("marker").attr("id","extensionEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z"),y.append("defs").append("marker").attr("id","compositionStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),y.append("defs").append("marker").attr("id","compositionEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),y.append("defs").append("marker").attr("id","aggregationStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),y.append("defs").append("marker").attr("id","aggregationEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),y.append("defs").append("marker").attr("id","dependencyStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),y.append("defs").append("marker").attr("id","dependencyEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z");const m=new d.k({multigraph:!0});m.setGraph({isMultiGraph:!0}),m.setDefaultEdgeLabel((function(){return{}}));const b=r.db.getClasses(),w=Object.keys(b);for(const i of w){const t=b[i],e=s.s.drawClass(x,t,g,r);p[e.id]=e,m.setNode(e.id,e),o.l.info("Org height: "+e.height)}r.db.getRelations().forEach((function(t){o.l.info("tjoho"+c(t.id1)+c(t.id2)+JSON.stringify(t)),m.setEdge(c(t.id1),c(t.id2),{relation:t},t.title||"DEFAULT")}));r.db.getNotes().forEach((function(t){o.l.debug("Adding note: ".concat(JSON.stringify(t)));const e=s.s.drawNote(x,t,g,r);p[e.id]=e,m.setNode(e.id,e),t.class&&t.class in b&&m.setEdge(t.id,c(t.class),{relation:{id1:t.id,id2:t.class,relation:{type1:"none",type2:"none",lineType:10}}},"DEFAULT")})),(0,n.bK)(m),m.nodes().forEach((function(t){void 0!==t&&void 0!==m.node(t)&&(o.l.debug("Node "+t+": "+JSON.stringify(m.node(t))),u.select("#"+(r.db.lookUpDomId(t)||t)).attr("transform","translate("+(m.node(t).x-m.node(t).width/2)+","+(m.node(t).y-m.node(t).height/2)+" )"))})),m.edges().forEach((function(t){void 0!==t&&void 0!==m.edge(t)&&(o.l.debug("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(m.edge(t))),s.s.drawEdge(x,m.edge(t),m.edge(t).relation,g,r))}));const k=x.node().getBBox(),v=k.width+40,E=k.height+40;(0,l.c)(x,E,v,g.useMaxWidth);const L="".concat(k.x-20," ").concat(k.y-20," ").concat(v," ").concat(E);o.l.debug("viewBox ".concat(L)),x.attr("viewBox",L)}},h={parser:r.p,db:r.d,renderer:g,styles:r.s,init:t=>{t.class||(t.class={}),t.class.arrowMarkerAbsolute=t.arrowMarkerAbsolute,r.d.clear()}}},2997:(t,e,a)=>{a.d(e,{p:()=>o,s:()=>h});var r=a(9836),i=a(5178),n=a(2954);let d=0;const o=function(t){let e=t.match(/^([#+~-])?(\w+)(~\w+~|\[])?\s+(\w+) *([$*])?$/),a=t.match(/^([#+|~-])?(\w+) *\( *(.*)\) *([$*])? *(\w*[[\]|~]*\s*\w*~?)$/);return e&&!a?s(e):a?l(a):p(t)},s=function(t){let e="",a="";try{let r=t[1]?t[1].trim():"",i=t[2]?t[2].trim():"",d=t[3]?(0,n.p)(t[3].trim()):"",o=t[4]?t[4].trim():"",s=t[5]?t[5].trim():"";a=r+i+d+" "+o,e=g(s)}catch(r){a=t}return{displayText:a,cssStyle:e}},l=function(t){let e="",a="";try{let r=t[1]?t[1].trim():"",i=t[2]?t[2].trim():"",d=t[3]?(0,n.p)(t[3].trim()):"",o=t[4]?t[4].trim():"";a=r+i+"("+d+")"+(t[5]?" : "+(0,n.p)(t[5]).trim():""),e=g(o)}catch(r){a=t}return{displayText:a,cssStyle:e}},p=function(t){let e="",a="",r="",i=t.indexOf("("),d=t.indexOf(")");if(i>1&&d>i&&d<=t.length){let o="",s="",l=t.substring(0,1);l.match(/\w/)?s=t.substring(0,i).trim():(l.match(/[#+~-]/)&&(o=l),s=t.substring(1,i).trim());const p=t.substring(i+1,d);t.substring(d+1,1),a=g(t.substring(d+1,d+2)),e=o+s+"("+(0,n.p)(p.trim())+")",d<t.length&&(r=t.substring(d+2).trim(),""!==r&&(r=" : "+(0,n.p)(r),e+=r))}else e=(0,n.p)(t);return{displayText:e,cssStyle:a}},c=function(t,e,a,r){let i=o(e);const n=t.append("tspan").attr("x",r.padding).text(i.displayText);""!==i.cssStyle&&n.attr("style",i.cssStyle),a||n.attr("dy",r.textHeight)},g=function(t){switch(t){case"*":return"font-style:italic;";case"$":return"text-decoration:underline;";default:return""}},h={drawClass:function(t,e,a,r){n.l.debug("Rendering class ",e,a);const i=e.id,d={id:i,label:e.id,width:0,height:0},o=t.append("g").attr("id",r.db.lookUpDomId(i)).attr("class","classGroup");let s;s=e.link?o.append("svg:a").attr("xlink:href",e.link).attr("target",e.linkTarget).append("text").attr("y",a.textHeight+a.padding).attr("x",0):o.append("text").attr("y",a.textHeight+a.padding).attr("x",0);let l=!0;e.annotations.forEach((function(t){const e=s.append("tspan").text("\xab"+t+"\xbb");l||e.attr("dy",a.textHeight),l=!1}));let p=e.id;void 0!==e.type&&""!==e.type&&(p+="<"+e.type+">");const g=s.append("tspan").text(p).attr("class","title");l||g.attr("dy",a.textHeight);const h=s.node().getBBox().height,f=o.append("line").attr("x1",0).attr("y1",a.padding+h+a.dividerMargin/2).attr("y2",a.padding+h+a.dividerMargin/2),u=o.append("text").attr("x",a.padding).attr("y",h+a.dividerMargin+a.textHeight).attr("fill","white").attr("class","classText");l=!0,e.members.forEach((function(t){c(u,t,l,a),l=!1}));const x=u.node().getBBox(),y=o.append("line").attr("x1",0).attr("y1",a.padding+h+a.dividerMargin+x.height).attr("y2",a.padding+h+a.dividerMargin+x.height),m=o.append("text").attr("x",a.padding).attr("y",h+2*a.dividerMargin+x.height+a.textHeight).attr("fill","white").attr("class","classText");l=!0,e.methods.forEach((function(t){c(m,t,l,a),l=!1}));const b=o.node().getBBox();var w=" ";e.cssClasses.length>0&&(w+=e.cssClasses.join(" "));const k=o.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",b.width+2*a.padding).attr("height",b.height+a.padding+.5*a.dividerMargin).attr("class",w).node().getBBox().width;return s.node().childNodes.forEach((function(t){t.setAttribute("x",(k-t.getBBox().width)/2)})),e.tooltip&&s.insert("title").text(e.tooltip),f.attr("x2",k),y.attr("x2",k),d.width=k,d.height=b.height+a.padding+.5*a.dividerMargin,d},drawEdge:function(t,e,a,o,s){const l=function(t){switch(t){case s.db.relationType.AGGREGATION:return"aggregation";case s.db.relationType.EXTENSION:return"extension";case s.db.relationType.COMPOSITION:return"composition";case s.db.relationType.DEPENDENCY:return"dependency";case s.db.relationType.LOLLIPOP:return"lollipop"}};e.points=e.points.filter((t=>!Number.isNaN(t.y)));const p=e.points,c=(0,r.jvg)().x((function(t){return t.x})).y((function(t){return t.y})).curve(r.$0Z),g=t.append("path").attr("d",c(p)).attr("id","edge"+d).attr("class","relation");let h,f,u="";o.arrowMarkerAbsolute&&(u=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,u=u.replace(/\(/g,"\\("),u=u.replace(/\)/g,"\\)")),1==a.relation.lineType&&g.attr("class","relation dashed-line"),10==a.relation.lineType&&g.attr("class","relation dotted-line"),"none"!==a.relation.type1&&g.attr("marker-start","url("+u+"#"+l(a.relation.type1)+"Start)"),"none"!==a.relation.type2&&g.attr("marker-end","url("+u+"#"+l(a.relation.type2)+"End)");const x=e.points.length;let y,m,b,w,k=i.u.calcLabelPosition(e.points);if(h=k.x,f=k.y,x%2!==0&&x>1){let t=i.u.calcCardinalityPosition("none"!==a.relation.type1,e.points,e.points[0]),r=i.u.calcCardinalityPosition("none"!==a.relation.type2,e.points,e.points[x-1]);n.l.debug("cardinality_1_point "+JSON.stringify(t)),n.l.debug("cardinality_2_point "+JSON.stringify(r)),y=t.x,m=t.y,b=r.x,w=r.y}if(void 0!==a.title){const e=t.append("g").attr("class","classLabel"),r=e.append("text").attr("class","label").attr("x",h).attr("y",f).attr("fill","red").attr("text-anchor","middle").text(a.title);window.label=r;const i=r.node().getBBox();e.insert("rect",":first-child").attr("class","box").attr("x",i.x-o.padding/2).attr("y",i.y-o.padding/2).attr("width",i.width+o.padding).attr("height",i.height+o.padding)}if(n.l.info("Rendering relation "+JSON.stringify(a)),void 0!==a.relationTitle1&&"none"!==a.relationTitle1){t.append("g").attr("class","cardinality").append("text").attr("class","type1").attr("x",y).attr("y",m).attr("fill","black").attr("font-size","6").text(a.relationTitle1)}if(void 0!==a.relationTitle2&&"none"!==a.relationTitle2){t.append("g").attr("class","cardinality").append("text").attr("class","type2").attr("x",b).attr("y",w).attr("fill","black").attr("font-size","6").text(a.relationTitle2)}d++},drawNote:function(t,e,a,r){n.l.debug("Rendering note ",e,a);const i=e.id,d={id:i,text:e.text,width:0,height:0},o=t.append("g").attr("id",i).attr("class","classGroup");let s=o.append("text").attr("y",a.textHeight+a.padding).attr("x",0);const l=JSON.parse('"'.concat(e.text,'"')).split("\n");l.forEach((function(t){n.l.debug("Adding line: ".concat(t)),s.append("tspan").text(t).attr("class","title").attr("dy",a.textHeight)}));const p=o.node().getBBox(),c=o.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",p.width+2*a.padding).attr("height",p.height+l.length*a.textHeight+a.padding+.5*a.dividerMargin).node().getBBox().width;return s.node().childNodes.forEach((function(t){t.setAttribute("x",(c-t.getBBox().width)/2)})),d.width=c,d.height=p.height+l.length*a.textHeight+a.padding+.5*a.dividerMargin,d},parseMember:o}}}]);
//# sourceMappingURL=190.8b416049.chunk.js.map