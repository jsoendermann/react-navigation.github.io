(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{246:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(1),a=n(9),o=(n(0),n(474)),i={id:"web-support",title:"React Navigation on the Web",sidebar_label:"Web support"},c={id:"version-5.x/web-support",title:"React Navigation on the Web",description:"> Note: Support for web is experimental and a work in progress. It has bugs, is missing many features and the API for web integration may change in minor versions. Please help us test it and open bug reports if you encounter a bug.",source:"@site/versioned_docs/version-5.x/web-support.md",permalink:"/docs/web-support",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-5.x/web-support.md",version:"5.x",sidebar_label:"Web support",sidebar:"version-5.x/docs",previous:{title:"Configuring links",permalink:"/docs/configuring-links"},next:{title:"Screen tracking for analytics",permalink:"/docs/screen-tracking"}},s=[],b={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: Support for web is experimental and a work in progress. It has bugs, is missing many features and the API for web integration may change in minor versions. Please help us test it and open bug reports if you encounter a bug.")),Object(o.b)("p",null,"React Navigation's web support currently requires using ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/necolas/react-native-web"}),"React Native for Web"),". This approach lets us reuse the same code on both React Native and Web."),Object(o.b)("p",null,"Currently, the following features are available:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/configuring-links"}),"URL integration in browser")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/link"}),"Accessible links"))),Object(o.b)("p",null,"Some navigators are also configured differently on web or provide additional web specific features:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/drawer-navigator"}),"drawer")," and ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/bottom-tab-navigator"}),"bottom tab")," navigators show hyperlinks in the drawer sidebar and tab bar respectively."),Object(o.b)("li",{parentName:"ol"},"Swipe gestures are not available on ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/drawer-navigator"}),"drawer")," and ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/stack-navigator"}),"stack")," navigators when using on the web."),Object(o.b)("li",{parentName:"ol"},"By default, ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/stack-navigator"}),"stack")," navigator disables page transition animations, but it can be re-enabled by specifying ",Object(o.b)("inlineCode",{parentName:"li"},"animationEnabled: true"),".")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: Unlike React Navigation 4, you don't need to install a separate package to use web integration when using React Native for Web. If you have the ",Object(o.b)("inlineCode",{parentName:"p"},"@react-navigation/web")," package installed, please uninstall it because it cannot be used with React Navigation 5.")))}l.isMDXComponent=!0},474:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,f=p["".concat(i,".").concat(d)]||p[d]||u[d]||o;return n?a.a.createElement(f,c({ref:t},b,{components:n})):a.a.createElement(f,c({ref:t},b))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var b=2;b<o;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);