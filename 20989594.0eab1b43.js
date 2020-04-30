(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{172:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(1),o=n(9),a=(n(0),n(474)),i={id:"route-prop",title:"Route prop reference",sidebar_label:"Route prop"},c={id:"version-5.x/route-prop",title:"Route prop reference",description:"Each `screen` component in your app is provided with the `route` prop automatically. The prop contains various information regarding current route (place in navigation hierarchy component lives).",source:"@site/versioned_docs/version-5.x/route-prop.md",permalink:"/docs/route-prop",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-5.x/route-prop.md",version:"5.x",sidebar_label:"Route prop",sidebar:"version-5.x/docs",previous:{title:"NavigationContainer",permalink:"/docs/navigation-container"},next:{title:"Navigation prop reference",permalink:"/docs/navigation-prop"}},p=[],l={rightToc:p};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Each ",Object(a.b)("inlineCode",{parentName:"p"},"screen")," component in your app is provided with the ",Object(a.b)("inlineCode",{parentName:"p"},"route")," prop automatically. The prop contains various information regarding current route (place in navigation hierarchy component lives)."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"route"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"key")," - key of the screen. Created automatically or added while navigating to this screen."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"name")," - name of the screen. Defined in navigator component hierarchy."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"params")," - set of params which is defined while navigating e.g. ",Object(a.b)("inlineCode",{parentName:"li"},"navigate('Twitter', { user: 'Dan Abramov' })"),".")))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"function ProfileScreen({ route }) {\n  return (\n    <View>\n      <Text>This is the profile screen of the app</Text>\n      <Text>{route.name}</Text>\n    </View>\n  );\n}\n")),Object(a.b)("p",null,"You might also find a ",Object(a.b)("inlineCode",{parentName:"p"},"state")," property on the route object in some cases. This property contains the child navigator's state and may exist when you have a navigator inside this screen. It's important to note that ",Object(a.b)("strong",{parentName:"p"},"this property may be ",Object(a.b)("inlineCode",{parentName:"strong"},"undefined"))," even if you have a child navigator. It gets initialized only after the first navigation in the child navigator. It's ",Object(a.b)("strong",{parentName:"p"},"not recommended")," to use this property."))}u.isMDXComponent=!0},474:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,m=s["".concat(i,".").concat(d)]||s[d]||b[d]||a;return n?o.a.createElement(m,c({ref:t},l,{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);