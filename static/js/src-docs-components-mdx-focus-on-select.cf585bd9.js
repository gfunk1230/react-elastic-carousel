(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./src/docs/components/mdx/focusOnSelect.mdx":function(e,n,t){"use strict";t.r(n);var o=t("./node_modules/react/index.js"),s=t.n(o),r=t("./node_modules/@mdx-js/tag/dist/index.js"),c=t("./node_modules/docz/dist/index.m.js"),a=t("./src/react-elastic-carousel/index.js"),i=t("./src/docs/components/ItemContainer.js"),m=t("./src/docs/components/itemsCollection.js");function l(e,n){if(null==e)return{};var t,o,s=function(e,n){if(null==e)return{};var t,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}n.default=function(e){var n=e.components,t=l(e,["components"]);return s.a.createElement(r.MDXTag,{name:"wrapper",components:n},s.a.createElement(c.Playground,{__position:0,__code:"<Carousel focusOnSelect={true} itemsToShow={3}>\n  {items(12).map(item => (\n    <Item key={item.id} {...item} />\n  ))}\n</Carousel>",__scope:{props:t,Carousel:a.a,Item:i.a,items:m.a}},s.a.createElement(a.a,{focusOnSelect:!0,itemsToShow:3},Object(m.a)(12).map(function(e){return s.a.createElement(i.a,Object.assign({key:e.id},e))}))))}}}]);