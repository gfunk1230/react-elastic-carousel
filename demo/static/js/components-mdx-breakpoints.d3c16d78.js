(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./src/docs/components/mdx/breakpoints.mdx":function(e,o,t){"use strict";t.r(o);var n=t("./node_modules/react/index.js"),s=t.n(n),i=t("./node_modules/@mdx-js/tag/dist/index.js"),r=t("./node_modules/docz/dist/index.m.js"),m=t("./src/react-elastic-carousel/index.js"),c=t("./src/docs/components/ItemContainer.js"),l=t("./src/docs/components/itemsCollection.js");function a(e,o){if(null==e)return{};var t,n,s=function(e,o){if(null==e)return{};var t,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||(s[t]=e[t]);return s}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}o.default=function(e){var o=e.components,t=a(e,["components"]);return s.a.createElement(i.MDXTag,{name:"wrapper",components:o},s.a.createElement(r.Playground,{__position:0,__code:"{() => {\n  const breakpoints = [\n    { width: 1, itemsToShow: 1, itemsToScroll: 1 },\n    { width: 550, itemsToShow: 2, itemsToScroll: 1 },\n    { width: 850, itemsToShow: 3, itemsToScroll: 1 },\n    { width: 1150, itemsToShow: 4, itemsToScroll: 1 },\n    { width: 1450, itemsToShow: 5, itemsToScroll: 1 },\n    { width: 1750, itemsToShow: 6, itemsToScroll: 1 },\n  ]\n  return (\n    <Carousel breakPoints={breakpoints}>\n      {items(12).map(item => (\n        <Item key={item.id} {...item} />\n      ))}\n    </Carousel>\n  )\n}}",__scope:{props:t,Carousel:m.a,Item:c.a,items:l.a}},function(){return s.a.createElement(m.a,{breakPoints:[{width:1,itemsToShow:1,itemsToScroll:1},{width:550,itemsToShow:2,itemsToScroll:1},{width:850,itemsToShow:3,itemsToScroll:1},{width:1150,itemsToShow:4,itemsToScroll:1},{width:1450,itemsToShow:5,itemsToScroll:1},{width:1750,itemsToShow:6,itemsToScroll:1}]},Object(l.a)(12).map(function(e){return s.a.createElement(c.a,Object.assign({key:e.id},e))}))}))}}}]);