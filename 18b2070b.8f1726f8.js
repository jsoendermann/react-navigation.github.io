(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{156:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return b}));var a=t(1),i=t(9),r=(t(0),t(474)),o={id:"navigation-events",title:"Navigation events",sidebar_label:"Navigation events"},c={id:"version-5.x/navigation-events",title:"Navigation events",description:"You can listen to various events emitted by React Navigation to get notified of certain events, and in some cases, override the default action. There are few core events that work for every navigator, as well as navigator specific events that work for only for certain navigators.",source:"@site/versioned_docs/version-5.x/navigation-events.md",permalink:"/docs/navigation-events",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-5.x/navigation-events.md",version:"5.x",sidebar_label:"Navigation events",sidebar:"version-5.x/docs",previous:{title:"NavigationContext",permalink:"/docs/navigation-context"},next:{title:"Link",permalink:"/docs/link"}},s=[{value:"<code>navigation.addListener</code>",id:"navigationaddlistener",children:[]},{value:"<code>listeners</code> prop on <code>Screen</code>",id:"listeners-prop-on-screen",children:[]}],l={rightToc:s};function b(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"You can listen to various events emitted by React Navigation to get notified of certain events, and in some cases, override the default action. There are few core events that work for every navigator, as well as navigator specific events that work for only for certain navigators."),Object(r.b)("p",null,"There are 3 core events:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"focus")," - This event is emitted when the screen comes into focus"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"blur")," - This event is emitted when the screen goes out of focus"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"state")," (advanced) - This event is emitted when the navigator's state changes")),Object(r.b)("p",null,"Apart from these, each navigator can emit their own custom events. For example, stack navigator emits ",Object(r.b)("inlineCode",{parentName:"p"},"transitionStart")," and ",Object(r.b)("inlineCode",{parentName:"p"},"transitionEnd")," events, tab navigator emits ",Object(r.b)("inlineCode",{parentName:"p"},"tabPress")," event etc. You can find details about the events emitted on the individual navigator's documentation."),Object(r.b)("p",null,"Each callback registered as an event listener receive an event object as its argument. The event object contains few properties:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"data")," - Additional data regarding the event passed by the navigator. This can be ",Object(r.b)("inlineCode",{parentName:"li"},"undefined")," if no data was passed."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"target")," - The route key for the screen that should receive the event. For some events, this maybe ",Object(r.b)("inlineCode",{parentName:"li"},"undefined")," if the event wasn't related to a specific screen."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"preventDefault")," - For some events, there may be a ",Object(r.b)("inlineCode",{parentName:"li"},"preventDefault")," method on the event object. Calling this method will prevent the default action performed by the event (such as switching tabs on ",Object(r.b)("inlineCode",{parentName:"li"},"tabPress"),"). Support for preventing actions are only available for certain events like ",Object(r.b)("inlineCode",{parentName:"li"},"tabPress")," and won't work for all events.")),Object(r.b)("p",null,"One thing to keep in mind is that you can only listen to events from the immediate parent navigator. For example, if you try to add a listener in a screen is inside a stack that's nested in a tab, it won't get the ",Object(r.b)("inlineCode",{parentName:"p"},"tabPress")," event. If you need to listen to an event from a parent navigator, you may use ",Object(r.b)("inlineCode",{parentName:"p"},"navigation.dangerouslyGetParent()")," to get a reference to parent navigator's navigation prop and add a listener."),Object(r.b)("p",null,"There are 2 ways to listen to events:"),Object(r.b)("h3",{id:"navigationaddlistener"},Object(r.b)("inlineCode",{parentName:"h3"},"navigation.addListener")),Object(r.b)("p",null,"Inside a screen, you can add listeners on the ",Object(r.b)("inlineCode",{parentName:"p"},"navigation")," prop with the ",Object(r.b)("inlineCode",{parentName:"p"},"addListener")," method. The ",Object(r.b)("inlineCode",{parentName:"p"},"addListener")," method takes 2 arguments: type of the event, and a callback to be called on the event. It returns a function that can be called to unsubscribe from the event."),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const unsubscribe = navigation.addListener('tabPress', e => {\n  // Prevent default action\n  e.preventDefault();\n});\n")),Object(r.b)("p",null,"Normally, you'd add an event listener in ",Object(r.b)("inlineCode",{parentName:"p"},"React.useEffect")," for function components. For example:"),Object(r.b)("samp",{id:"simple-focus-and-blur"}),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function Profile({ navigation }) {\n  React.useEffect(() => {\n    const unsubscribe = navigation.addListener('focus', () => {\n      // do something\n    });\n\n    return unsubscribe;\n  }, [navigation]);\n\n  return <ProfileContent />;\n}\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"unsubscribe")," function can be returned as the cleanup function in the effect."),Object(r.b)("p",null,"For class components, you can add the event in the ",Object(r.b)("inlineCode",{parentName:"p"},"componentDidMount")," lifecycle method and unsubscribe in ",Object(r.b)("inlineCode",{parentName:"p"},"componentWillUnmount"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class Profile extends React.Component {\n  componentDidMount() {\n    this._unsubscribe = navigation.addListener('focus', () => {\n      // do something\n    });\n  }\n\n  componentWillUnmount() {\n    this._unsubscribe();\n  }\n\n  render() {\n    // Content of the component\n  }\n}\n")),Object(r.b)("h3",{id:"listeners-prop-on-screen"},Object(r.b)("inlineCode",{parentName:"h3"},"listeners")," prop on ",Object(r.b)("inlineCode",{parentName:"h3"},"Screen")),Object(r.b)("p",null,"Sometimes you might want to add a listener from the component where you defined the navigator rather than inside the screen. You can use the ",Object(r.b)("inlineCode",{parentName:"p"},"listeners")," prop on the ",Object(r.b)("inlineCode",{parentName:"p"},"Screen")," component to add listeners. The ",Object(r.b)("inlineCode",{parentName:"p"},"listeners")," prop takes an object with the event names as keys and the listener callbacks as values."),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'<Tabs.Screen\n  name="Chat"\n  component={Chat}\n  listeners={{\n    tabPress: e => {\n      // Prevent default action\n      e.preventDefault();\n    },\n  }}\n/>\n')),Object(r.b)("p",null,"You can also pass a callback which returns the object with listeners. It'll receive ",Object(r.b)("inlineCode",{parentName:"p"},"navigation")," and ",Object(r.b)("inlineCode",{parentName:"p"},"route")," as the arguments."),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"<Tabs.Screen\n  name=\"Chat\"\n  component={Chat}\n  listeners={({ navigation, route }) => ({\n    tabPress: e => {\n      // Prevent default action\n      e.preventDefault();\n\n      // Do something with the `navigation` object\n      navigation.navigate('AnotherPlace');\n    },\n  })}\n/>\n")))}b.isMDXComponent=!0},474:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),b=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},p=function(e){var n=b(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(t),u=a,m=p["".concat(o,".").concat(u)]||p[u]||d[u]||r;return t?i.a.createElement(m,c({ref:n},l,{components:t})):i.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=u;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<r;l++)o[l]=t[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);