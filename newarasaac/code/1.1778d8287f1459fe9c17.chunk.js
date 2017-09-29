webpackJsonp([1],{"./app/components/H2/index.js":function(e,t,o){"use strict";function i(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var n=o("./node_modules/styled-components/dist/styled-components.es.js"),a=o("./node_modules/material-ui/styles/index.js"),l=(o.n(a),o("./node_modules/material-ui/styles/colors.js")),s=(o.n(l),o("./app/utils/mediaqueries.js")),r=i(["\n  font-size: 2.4em;\n  margin-bottom: 0.25em;\n  line-height: '2.8em';\n  font-weight: ",";\n  color: ",";\n  text-transform: ",";\n  "," {\n    font-size: 2.4em;\n  }\n"],["\n  font-size: 2.4em;\n  margin-bottom: 0.25em;\n  line-height: '2.8em';\n  font-weight: ",";\n  color: ",";\n  text-transform: ",";\n  "," {\n    font-size: 2.4em;\n  }\n"]),d=n.a.h2(r,a.typography.fontWeightLight,function(e){return e.primary?l.lightGreen500:l.darkWhite},function(e){return e.ucase?"uppercase":"none"},s.a.lg);t.a=d},"./app/components/H3/index.js":function(e,t,o){"use strict";function i(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var n=o("./node_modules/styled-components/dist/styled-components.es.js"),a=i(["\n  font-size: 1.25rem;\n"],["\n  font-size: 1.25rem;\n"]),l=n.a.h3(a);t.a=l},"./app/components/View/index.js":function(e,t,o){"use strict";function i(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var n=o("./node_modules/styled-components/dist/styled-components.es.js"),a=o("./app/utils/mediaqueries.js"),l=i(["\n  padding: 6rem 1rem;\n  "," {\n    padding: 8rem 4rem;\n  }\n"],["\n  padding: 6rem 1rem;\n  "," {\n    padding: 8rem 4rem;\n  }\n"]),s=n.a.div(l,a.a.md);t.a=s},"./app/containers/ConfigurationView/index.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o("./node_modules/react/react.js"),n=o.n(i),a=o("./node_modules/react-intl/lib/index.es.js"),l=o("./node_modules/react-flexbox-grid/lib/index.js"),s=(o.n(l),o("./node_modules/material-ui/Paper/index.js")),r=o.n(s),d=o("./app/components/H2/index.js"),u=o("./app/components/H3/index.js"),c=o("./app/containers/ToggleFilter/index.js"),p=o("./app/components/View/index.js"),h=o("./app/containers/ConfigurationView/messages.js"),f=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,o,i,n){var a=t&&t.defaultProps,l=arguments.length-3;if(o||0===l||(o={}),o&&a)for(var s in a)void 0===o[s]&&(o[s]=a[s]);else o||(o=a||{});if(1===l)o.children=n;else if(l>1){for(var r=Array(l),d=0;d<l;d++)r[d]=arguments[d+3];o.children=r}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:o,_owner:null}}}(),m={padding:20,textAlign:"center",display:"inline-block",width:"100%",height:"250px"},g=function(){return f(p.a,{},void 0,f(l.Row,{},void 0,f(l.Col,{xs:12,lg:6},void 0,f(d.a,{},void 0,n.a.createElement(a.c,h.a.searchPictograms)),f(r.a,{style:m,zDepth:2,rounded:!1},void 0,f(u.a,{},void 0,n.a.createElement(a.c,h.a.filters)),f("p",{},void 0,n.a.createElement(a.c,h.a.pictogramFiltersDesc)),f(c.a,{label:n.a.createElement(a.c,h.a.filterCatalog),type:"pictograms",filter:"catalog"}),f(c.a,{label:n.a.createElement(a.c,h.a.filterLicense),type:"pictograms",filter:"license"}),f(c.a,{label:n.a.createElement(a.c,h.a.filterSize),type:"pictograms",filter:"size"}))),f(l.Col,{xs:12,lg:6},void 0,f(d.a,{},void 0,n.a.createElement(a.c,h.a.searchMaterials)),f(r.a,{style:m,zDepth:2,rounded:!1},void 0,f(u.a,{},void 0,n.a.createElement(a.c,h.a.filters)),f("p",{},void 0,n.a.createElement(a.c,h.a.materialFiltersDesc)),f(c.a,{label:n.a.createElement(a.c,h.a.filterArea),type:"materials",filter:"area"}),f(c.a,{label:n.a.createElement(a.c,h.a.filterActivity),type:"materials",filter:"activity"}),f(c.a,{label:n.a.createElement(a.c,h.a.filterLanguage),type:"materials",filter:"language"}),f(c.a,{label:n.a.createElement(a.c,h.a.filterLicense),type:"materials",filter:"license"})))))};t.default=g},"./app/containers/ConfigurationView/messages.js":function(e,t,o){"use strict";var i=o("./node_modules/react-intl/lib/index.es.js");t.a=o.i(i.d)({appConfiguration:{id:"app.containers.ConfigurationView.title",description:"Title for Arasaac configuration view",defaultMessage:"Arasaac configuration"},filterCatalog:{id:"app.containers.ConfigurationView.filterCatalog",description:"Conf option filter by Catalog",defaultMessage:"Catalog"},filterLicense:{id:"app.containers.ConfigurationView.filterLicense",description:"Conf option filter by License",defaultMessage:"License"},filterSize:{id:"app.containers.ConfigurationView.filterSize",description:"Conf option filter by Size",defaultMessage:"Size"},filterArea:{id:"app.containers.ConfigurationView.filterArea",description:"Conf option filter by Area",defaultMessage:"Area"},filterActivity:{id:"app.containers.ConfigurationView.filterActivity",description:"Conf option filter by Size",defaultMessage:"Activity"},filterLanguage:{id:"app.containers.ConfigurationView.filterLanguage",description:"Conf option filter by Language",defaultMessage:"Language"},searchPictograms:{id:"app.containers.ConfigurationView.searchPictograms",description:"Menu item",defaultMessage:"Search Pictograms"},searchMaterials:{id:"app.containers.ConfigurationView.searchMaterials",description:"Menu item",defaultMessage:"Search Materials"},filters:{id:"app.containers.ConfigurationView.filters",description:"Configuration title for filters",defaultMessage:"Filters"},pictogramFiltersDesc:{id:"app.containers.ConfigurationView.pictogramFiltersDesc",description:"Configuration description for filters",defaultMessage:"Select the filters you want to enable for searching pictograms"},materialFiltersDesc:{id:"app.containers.ConfigurationView.materialFiltersDesc",description:"Configuration description for filters",defaultMessage:"Select the filters you want to enable for searching materials"}})},"./app/containers/ToggleFilter/index.js":function(e,t,o){"use strict";var i=o("./node_modules/prop-types/index.js"),n=o.n(i),a=o("./node_modules/react-redux/lib/index.js"),l=(o.n(a),o("./node_modules/material-ui/Toggle/index.js")),s=o.n(l),r=o("./app/containers/ToggleFilter/actions.js"),d=function(e,t){return{defaultToggled:e.getIn(["configuration","filters",t.type,t.filter]),label:t.label,style:{width:200,margin:"0 auto"}}},u=function(e,t){return{onToggle:function(){e(o.i(r.a)(t.type,t.filter))}}},c=o.i(a.connect)(d,u)(s.a);c.propTypes={label:n.a.object.isRequired,filter:n.a.string.isRequired,type:n.a.string.isRequired},t.a=c},"./node_modules/material-ui/Toggle/Toggle.js":function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function n(e,t,o){var i=e.disabled,n=e.elementStyle,a=e.trackSwitchedStyle,l=e.thumbSwitchedStyle,s=e.trackStyle,r=e.thumbStyle,d=e.iconStyle,u=e.rippleStyle,c=e.labelStyle,p=t.muiTheme,h=p.baseTheme,f=p.toggle,m=20,g=36,b={icon:{width:36,padding:"4px 0px 6px 2px"},ripple:{top:-10,left:-10,color:o.switched?f.thumbOnColor:h.palette.textColor},toggleElement:{width:g},track:{transition:x.default.easeOut(),width:"100%",height:14,borderRadius:30,backgroundColor:f.trackOffColor},thumb:{transition:x.default.easeOut(),position:"absolute",top:1,left:0,width:m,height:m,lineHeight:"24px",borderRadius:"50%",backgroundColor:f.thumbOffColor},trackWhenSwitched:{backgroundColor:f.trackOnColor},thumbWhenSwitched:{backgroundColor:f.thumbOnColor,left:"100%"},trackWhenDisabled:{backgroundColor:f.trackDisabledColor},thumbWhenDisabled:{backgroundColor:f.thumbDisabledColor},label:{color:i?f.labelDisabledColor:f.labelColor,width:"calc(100% - "+(g+10)+"px)"}};return(0,S.default)(b.track,s,o.switched&&b.trackWhenSwitched,o.switched&&a,i&&b.trackWhenDisabled),(0,S.default)(b.thumb,r,o.switched&&b.thumbWhenSwitched,o.switched&&l,i&&b.thumbWhenDisabled),o.switched&&(b.thumb.marginLeft=0-b.thumb.width),(0,S.default)(b.icon,d),(0,S.default)(b.ripple,u),(0,S.default)(b.label,c),(0,S.default)(b.toggleElement,n),b}Object.defineProperty(t,"__esModule",{value:!0});var a=o("./node_modules/babel-runtime/helpers/extends.js"),l=i(a),s=o("./node_modules/babel-runtime/helpers/objectWithoutProperties.js"),r=i(s),d=o("./node_modules/babel-runtime/core-js/object/get-prototype-of.js"),u=i(d),c=o("./node_modules/babel-runtime/helpers/classCallCheck.js"),p=i(c),h=o("./node_modules/babel-runtime/helpers/createClass.js"),f=i(h),m=o("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),g=i(m),b=o("./node_modules/babel-runtime/helpers/inherits.js"),y=i(b),w=o("./node_modules/simple-assign/index.js"),S=i(w),v=o("./node_modules/react/react.js"),j=i(v),k=o("./node_modules/prop-types/index.js"),C=i(k),_=o("./node_modules/material-ui/styles/transitions.js"),x=i(_),T=o("./node_modules/material-ui/Paper/index.js"),P=i(T),E=o("./node_modules/material-ui/internal/EnhancedSwitch.js"),M=i(E),F=function(e){function t(){var e,o,i,n;(0,p.default)(this,t);for(var a=arguments.length,l=Array(a),s=0;s<a;s++)l[s]=arguments[s];return o=i=(0,g.default)(this,(e=t.__proto__||(0,u.default)(t)).call.apply(e,[this].concat(l))),i.state={switched:!1},i.handleStateChange=function(e){i.setState({switched:e})},i.handleToggle=function(e,t){i.props.onToggle&&i.props.onToggle(e,t)},n=o,(0,g.default)(i,n)}return(0,y.default)(t,e),(0,f.default)(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.toggled,o=e.defaultToggled,i=e.valueLink;(t||o||i&&i.value)&&this.setState({switched:!0})}},{key:"isToggled",value:function(){return this.refs.enhancedSwitch.isSwitched()}},{key:"setToggled",value:function(e){this.refs.enhancedSwitch.setSwitched(e)}},{key:"render",value:function(){var e=this.props,t=e.defaultToggled,o=(e.elementStyle,e.onToggle,e.trackSwitchedStyle,e.thumbSwitchedStyle,e.toggled),i=(0,r.default)(e,["defaultToggled","elementStyle","onToggle","trackSwitchedStyle","thumbSwitchedStyle","toggled"]),a=this.context.muiTheme.prepareStyles,s=n(this.props,this.context,this.state),d=j.default.createElement("div",{style:a((0,S.default)({},s.toggleElement))},j.default.createElement("div",{style:a((0,S.default)({},s.track))}),j.default.createElement(P.default,{style:s.thumb,circle:!0,zDepth:1})),u={ref:"enhancedSwitch",inputType:"checkbox",switchElement:d,rippleStyle:s.ripple,rippleColor:s.ripple.color,iconStyle:s.icon,trackStyle:s.track,thumbStyle:s.thumb,labelStyle:s.label,switched:this.state.switched,onSwitch:this.handleToggle,onParentShouldUpdate:this.handleStateChange,labelPosition:this.props.labelPosition};return this.props.hasOwnProperty("toggled")?u.checked=o:this.props.hasOwnProperty("defaultToggled")&&(u.defaultChecked=t),j.default.createElement(M.default,(0,l.default)({},i,u))}}]),t}(v.Component);F.defaultProps={defaultToggled:!1,disabled:!1,labelPosition:"left"},F.contextTypes={muiTheme:C.default.object.isRequired},F.propTypes={},t.default=F},"./node_modules/material-ui/Toggle/index.js":function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o("./node_modules/material-ui/Toggle/Toggle.js"),a=i(n);t.default=a.default},"./node_modules/material-ui/internal/EnhancedSwitch.js":function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function n(e,t){var o=t.muiTheme.baseTheme;return{root:{cursor:e.disabled?"not-allowed":"pointer",position:"relative",overflow:"visible",display:"table",height:"auto",width:"100%"},input:{position:"absolute",cursor:"inherit",pointerEvents:"all",opacity:0,width:"100%",height:"100%",zIndex:2,left:0,boxSizing:"border-box",padding:0,margin:0},controls:{display:"flex",width:"100%",height:"100%"},label:{float:"left",position:"relative",display:"block",width:"calc(100% - 60px)",lineHeight:"24px",color:o.palette.textColor,fontFamily:o.fontFamily},wrap:{transition:M.default.easeOut(),float:"left",position:"relative",display:"block",flexShrink:0,width:60-o.spacing.desktopGutterLess,marginRight:"right"===e.labelPosition?o.spacing.desktopGutterLess:0,marginLeft:"left"===e.labelPosition?o.spacing.desktopGutterLess:0},ripple:{color:e.rippleColor||o.palette.primary1Color,height:"200%",width:"200%",top:-12,left:-12}}}Object.defineProperty(t,"__esModule",{value:!0});var a=o("./node_modules/babel-runtime/helpers/extends.js"),l=i(a),s=o("./node_modules/babel-runtime/helpers/objectWithoutProperties.js"),r=i(s),d=o("./node_modules/babel-runtime/core-js/object/get-prototype-of.js"),u=i(d),c=o("./node_modules/babel-runtime/helpers/classCallCheck.js"),p=i(c),h=o("./node_modules/babel-runtime/helpers/createClass.js"),f=i(h),m=o("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),g=i(m),b=o("./node_modules/babel-runtime/helpers/inherits.js"),y=i(b),w=o("./node_modules/simple-assign/index.js"),S=i(w),v=o("./node_modules/react/react.js"),j=i(v),k=o("./node_modules/prop-types/index.js"),C=i(k),_=o("./node_modules/react-event-listener/lib/index.js"),x=i(_),T=o("./node_modules/keycode/index.js"),P=i(T),E=o("./node_modules/material-ui/styles/transitions.js"),M=i(E),F=o("./node_modules/material-ui/internal/FocusRipple.js"),R=i(F),O=o("./node_modules/material-ui/internal/TouchRipple.js"),D=i(O),z=o("./node_modules/material-ui/Paper/index.js"),L=i(z),U=o("./node_modules/warning/browser.js"),V=(i(U),function(e){function t(){var e,o,i,n;(0,p.default)(this,t);for(var a=arguments.length,l=Array(a),s=0;s<a;s++)l[s]=arguments[s];return o=i=(0,g.default)(this,(e=t.__proto__||(0,u.default)(t)).call.apply(e,[this].concat(l))),i.state={isKeyboardFocused:!1},i.handleChange=function(e){i.tabPressed=!1,i.setState({isKeyboardFocused:!1});var t=i.refs.checkbox.checked;!i.props.hasOwnProperty("checked")&&i.props.onParentShouldUpdate&&i.props.onParentShouldUpdate(t),i.props.onSwitch&&i.props.onSwitch(e,t)},i.handleKeyDown=function(e){var t=(0,P.default)(e);"tab"===t&&(i.tabPressed=!0),i.state.isKeyboardFocused&&"space"===t&&i.handleChange(e)},i.handleKeyUp=function(e){i.state.isKeyboardFocused&&"space"===(0,P.default)(e)&&i.handleChange(e)},i.handleMouseDown=function(e){0===e.button&&i.refs.touchRipple.start(e)},i.handleMouseUp=function(){i.refs.touchRipple.end()},i.handleMouseLeave=function(){i.refs.touchRipple.end()},i.handleTouchStart=function(e){i.refs.touchRipple.start(e)},i.handleTouchEnd=function(){i.refs.touchRipple.end()},i.handleBlur=function(e){i.setState({isKeyboardFocused:!1}),i.props.onBlur&&i.props.onBlur(e)},i.handleFocus=function(e){setTimeout(function(){i.tabPressed&&i.setState({isKeyboardFocused:!0})},150),i.props.onFocus&&i.props.onFocus(e)},n=o,(0,g.default)(i,n)}return(0,y.default)(t,e),(0,f.default)(t,[{key:"componentWillMount",value:function(){this.componentWillReceiveProps(this.props)}},{key:"componentDidMount",value:function(){var e=this.refs.checkbox;this.props.switched&&e.checked===this.props.switched||!this.props.onParentShouldUpdate||this.props.onParentShouldUpdate(e.checked)}},{key:"componentWillReceiveProps",value:function(e){var t=e.hasOwnProperty("checked"),o=e.hasOwnProperty("defaultChecked")&&e.defaultChecked!==this.props.defaultChecked;if(t||o){var i=e.checked||e.defaultChecked||!1;this.setState({switched:i}),this.props.onParentShouldUpdate&&i!==this.props.switched&&this.props.onParentShouldUpdate(i)}}},{key:"isSwitched",value:function(){return this.refs.checkbox.checked}},{key:"setSwitched",value:function(e){this.props.hasOwnProperty("checked")&&this.props.checked!==!1||(this.props.onParentShouldUpdate&&this.props.onParentShouldUpdate(e),this.refs.checkbox.checked=e)}},{key:"getValue",value:function(){return this.refs.checkbox.value}},{key:"render",value:function(){var e=this.props,t=e.name,o=e.value,i=(e.checked,e.iconStyle),a=e.inputStyle,s=e.inputType,d=e.label,u=e.labelStyle,c=e.labelPosition,p=(e.onSwitch,e.onBlur,e.onFocus,e.onMouseUp,e.onMouseDown,e.onMouseLeave,e.onTouchStart,e.onTouchEnd,e.onParentShouldUpdate,e.disabled),h=e.disableTouchRipple,f=e.disableFocusRipple,m=e.className,g=(e.rippleColor,e.rippleStyle),b=e.style,y=(e.switched,e.switchElement),w=e.thumbStyle,v=e.trackStyle,k=(0,r.default)(e,["name","value","checked","iconStyle","inputStyle","inputType","label","labelStyle","labelPosition","onSwitch","onBlur","onFocus","onMouseUp","onMouseDown","onMouseLeave","onTouchStart","onTouchEnd","onParentShouldUpdate","disabled","disableTouchRipple","disableFocusRipple","className","rippleColor","rippleStyle","style","switched","switchElement","thumbStyle","trackStyle"]),C=this.context.muiTheme.prepareStyles,_=n(this.props,this.context),T=(0,S.default)(_.wrap,i),P=(0,S.default)(_.ripple,g);w&&(T.marginLeft/=2,T.marginRight/=2);var E=d&&j.default.createElement("label",{style:C((0,S.default)(_.label,u))},d),M=!p&&!h,F=!p&&!f,O=j.default.createElement(D.default,{ref:"touchRipple",key:"touchRipple",style:P,color:P.color,muiTheme:this.context.muiTheme,centerRipple:!0}),z=j.default.createElement(R.default,{key:"focusRipple",innerStyle:P,color:P.color,muiTheme:this.context.muiTheme,show:this.state.isKeyboardFocused}),U=[M?O:null,F?z:null],V=j.default.createElement("input",(0,l.default)({},k,{ref:"checkbox",type:s,style:C((0,S.default)(_.input,a)),name:t,value:o,checked:this.state.switched,disabled:p,onBlur:this.handleBlur,onFocus:this.handleFocus,onChange:this.handleChange,onMouseUp:M&&this.handleMouseUp,onMouseDown:M&&this.handleMouseDown,onMouseLeave:M&&this.handleMouseLeave,onTouchStart:M&&this.handleTouchStart,onTouchEnd:M&&this.handleTouchEnd})),W=w?j.default.createElement("div",{style:C(T)},j.default.createElement("div",{style:C((0,S.default)({},v))}),j.default.createElement(L.default,{style:w,zDepth:1,circle:!0}," ",U," ")):j.default.createElement("div",{style:C(T)},y,U),A="right"===c?j.default.createElement("div",{style:_.controls},W,E):j.default.createElement("div",{style:_.controls},E,W);return j.default.createElement("div",{ref:"root",className:m,style:C((0,S.default)(_.root,b))},j.default.createElement(x.default,{target:"window",onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp}),V,A)}}]),t}(v.Component));V.contextTypes={muiTheme:C.default.object.isRequired},V.propTypes={},t.default=V}});