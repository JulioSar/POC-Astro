import{r as d}from"./index.8b13ccb1.js";import{r as fr}from"./index.cd0476e8.js";function nr(r){var e,t,o="";if(typeof r=="string"||typeof r=="number")o+=r;else if(typeof r=="object")if(Array.isArray(r))for(e=0;e<r.length;e++)r[e]&&(t=nr(r[e]))&&(o&&(o+=" "),o+=t);else for(e in r)r[e]&&(o&&(o+=" "),o+=e);return o}function pr(){for(var r,e,t=0,o="";t<arguments.length;)(r=arguments[t++])&&(e=nr(r))&&(o&&(o+=" "),o+=e);return o}function br(){for(var r=0,e,t,o="";r<arguments.length;)(e=arguments[r++])&&(t=ir(e))&&(o&&(o+=" "),o+=t);return o}function ir(r){if(typeof r=="string")return r;for(var e,t="",o=0;o<r.length;o++)r[o]&&(e=ir(r[o]))&&(t&&(t+=" "),t+=e);return t}var H="-";function gr(r){var e=vr(r),t=r.conflictingClassGroups,o=r.conflictingClassGroupModifiers,a=o===void 0?{}:o;function s(i){var l=i.split(H);return l[0]===""&&l.length!==1&&l.shift(),ar(l,e)||mr(i)}function n(i,l){var u=t[i]||[];return l&&a[i]?[].concat(u,a[i]):u}return{getClassGroupId:s,getConflictingClassGroupIds:n}}function ar(r,e){if(r.length===0)return e.classGroupId;var t=r[0],o=e.nextPart.get(t),a=o?ar(r.slice(1),o):void 0;if(a)return a;if(e.validators.length!==0){var s=r.join(H);return e.validators.find(function(n){var i=n.validator;return i(s)})?.classGroupId}}var er=/^\[(.+)\]$/;function mr(r){if(er.test(r)){var e=er.exec(r)[1],t=e?.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}}function vr(r){var e=r.theme,t=r.prefix,o={nextPart:new Map,validators:[]},a=yr(Object.entries(r.classGroups),t);return a.forEach(function(s){var n=s[0],i=s[1];B(i,o,n,e)}),o}function B(r,e,t,o){r.forEach(function(a){if(typeof a=="string"){var s=a===""?e:tr(e,a);s.classGroupId=t;return}if(typeof a=="function"){if(hr(a)){B(a(o),e,t,o);return}e.validators.push({validator:a,classGroupId:t});return}Object.entries(a).forEach(function(n){var i=n[0],l=n[1];B(l,tr(e,i),t,o)})})}function tr(r,e){var t=r;return e.split(H).forEach(function(o){t.nextPart.has(o)||t.nextPart.set(o,{nextPart:new Map,validators:[]}),t=t.nextPart.get(o)}),t}function hr(r){return r.isThemeGetter}function yr(r,e){return e?r.map(function(t){var o=t[0],a=t[1],s=a.map(function(n){return typeof n=="string"?e+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(function(i){var l=i[0],u=i[1];return[e+l,u]})):n});return[o,s]}):r}function xr(r){if(r<1)return{get:function(){},set:function(){}};var e=0,t=new Map,o=new Map;function a(s,n){t.set(s,n),e++,e>r&&(e=0,o=t,t=new Map)}return{get:function(n){var i=t.get(n);if(i!==void 0)return i;if((i=o.get(n))!==void 0)return a(n,i),i},set:function(n,i){t.has(n)?t.set(n,i):a(n,i)}}}var sr="!";function wr(r){var e=r.separator||":",t=e.length===1,o=e[0],a=e.length;return function(n){for(var i=[],l=0,u=0,m,f=0;f<n.length;f++){var g=n[f];if(l===0){if(g===o&&(t||n.slice(f,f+a)===e)){i.push(n.slice(u,f)),u=f+a;continue}if(g==="/"){m=f;continue}}g==="["?l++:g==="]"&&l--}var h=i.length===0?n:n.substring(u),v=h.startsWith(sr),y=v?h.substring(1):h,x=m&&m>u?m-u:void 0;return{modifiers:i,hasImportantModifier:v,baseClassName:y,maybePostfixModifierPosition:x}}}function Cr(r){if(r.length<=1)return r;var e=[],t=[];return r.forEach(function(o){var a=o[0]==="[";a?(e.push.apply(e,t.sort().concat([o])),t=[]):t.push(o)}),e.push.apply(e,t.sort()),e}function $r(r){return{cache:xr(r.cacheSize),splitModifiers:wr(r),...gr(r)}}var Sr=/\s+/;function kr(r,e){var t=e.splitModifiers,o=e.getClassGroupId,a=e.getConflictingClassGroupIds,s=new Set;return r.trim().split(Sr).map(function(n){var i=t(n),l=i.modifiers,u=i.hasImportantModifier,m=i.baseClassName,f=i.maybePostfixModifierPosition,g=o(f?m.substring(0,f):m),h=!!f;if(!g){if(!f)return{isTailwindClass:!1,originalClassName:n};if(g=o(m),!g)return{isTailwindClass:!1,originalClassName:n};h=!1}var v=Cr(l).join(":"),y=u?v+sr:v;return{isTailwindClass:!0,modifierId:y,classGroupId:g,originalClassName:n,hasPostfixModifier:h}}).reverse().filter(function(n){if(!n.isTailwindClass)return!0;var i=n.modifierId,l=n.classGroupId,u=n.hasPostfixModifier,m=i+l;return s.has(m)?!1:(s.add(m),a(l,u).forEach(function(f){return s.add(i+f)}),!0)}).reverse().map(function(n){return n.originalClassName}).join(" ")}function Mr(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];var o,a,s,n=i;function i(u){var m=e[0],f=e.slice(1),g=f.reduce(function(h,v){return v(h)},m());return o=$r(g),a=o.cache.get,s=o.cache.set,n=l,l(u)}function l(u){var m=a(u);if(m)return m;var f=kr(u,o);return s(u,f),f}return function(){return n(br.apply(null,arguments))}}function p(r){var e=function(o){return o[r]||[]};return e.isThemeGetter=!0,e}var lr=/^\[(?:([a-z-]+):)?(.+)\]$/i,Ar=/^\d+\/\d+$/,zr=new Set(["px","full","screen"]),Er=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Gr=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Pr=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function C(r){return M(r)||zr.has(r)||Ar.test(r)||U(r)}function U(r){return A(r,"length",Or)}function Ir(r){return A(r,"size",cr)}function Rr(r){return A(r,"position",cr)}function Nr(r){return A(r,"url",Wr)}function j(r){return A(r,"number",M)}function M(r){return!Number.isNaN(Number(r))}function Tr(r){return r.endsWith("%")&&M(r.slice(0,-1))}function G(r){return or(r)||A(r,"number",or)}function c(r){return lr.test(r)}function P(){return!0}function k(r){return Er.test(r)}function jr(r){return A(r,"",Lr)}function A(r,e,t){var o=lr.exec(r);return o?o[1]?o[1]===e:t(o[2]):!1}function Or(r){return Gr.test(r)}function cr(){return!1}function Wr(r){return r.startsWith("url(")}function or(r){return Number.isInteger(Number(r))}function Lr(r){return Pr.test(r)}function Vr(){var r=p("colors"),e=p("spacing"),t=p("blur"),o=p("brightness"),a=p("borderColor"),s=p("borderRadius"),n=p("borderSpacing"),i=p("borderWidth"),l=p("contrast"),u=p("grayscale"),m=p("hueRotate"),f=p("invert"),g=p("gap"),h=p("gradientColorStops"),v=p("gradientColorStopPositions"),y=p("inset"),x=p("margin"),S=p("opacity"),$=p("padding"),Z=p("saturate"),O=p("scale"),q=p("sepia"),J=p("skew"),X=p("space"),K=p("translate"),W=function(){return["auto","contain","none"]},L=function(){return["auto","hidden","clip","visible","scroll"]},V=function(){return["auto",c,e]},b=function(){return[c,e]},Q=function(){return["",C]},R=function(){return["auto",M,c]},Y=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},N=function(){return["solid","dashed","dotted","double","none"]},D=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},_=function(){return["start","end","center","between","around","evenly","stretch"]},z=function(){return["","0",c]},rr=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},E=function(){return[M,j]},T=function(){return[M,c]};return{cacheSize:500,theme:{colors:[P],spacing:[C],blur:["none","",k,c],brightness:E(),borderColor:[r],borderRadius:["none","","full",k,c],borderSpacing:b(),borderWidth:Q(),contrast:E(),grayscale:z(),hueRotate:T(),invert:z(),gap:b(),gradientColorStops:[r],gradientColorStopPositions:[Tr,U],inset:V(),margin:V(),opacity:E(),padding:b(),saturate:E(),scale:E(),sepia:z(),skew:T(),space:b(),translate:b()},classGroups:{aspect:[{aspect:["auto","square","video",c]}],container:["container"],columns:[{columns:[k]}],"break-after":[{"break-after":rr()}],"break-before":[{"break-before":rr()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(Y(),[c])}],overflow:[{overflow:L()}],"overflow-x":[{"overflow-x":L()}],"overflow-y":[{"overflow-y":L()}],overscroll:[{overscroll:W()}],"overscroll-x":[{"overscroll-x":W()}],"overscroll-y":[{"overscroll-y":W()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[y]}],"inset-x":[{"inset-x":[y]}],"inset-y":[{"inset-y":[y]}],start:[{start:[y]}],end:[{end:[y]}],top:[{top:[y]}],right:[{right:[y]}],bottom:[{bottom:[y]}],left:[{left:[y]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",G]}],basis:[{basis:V()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",c]}],grow:[{grow:z()}],shrink:[{shrink:z()}],order:[{order:["first","last","none",G]}],"grid-cols":[{"grid-cols":[P]}],"col-start-end":[{col:["auto",{span:["full",G]},c]}],"col-start":[{"col-start":R()}],"col-end":[{"col-end":R()}],"grid-rows":[{"grid-rows":[P]}],"row-start-end":[{row:["auto",{span:[G]},c]}],"row-start":[{"row-start":R()}],"row-end":[{"row-end":R()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",c]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",c]}],gap:[{gap:[g]}],"gap-x":[{"gap-x":[g]}],"gap-y":[{"gap-y":[g]}],"justify-content":[{justify:["normal"].concat(_())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(_(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(_(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[$]}],px:[{px:[$]}],py:[{py:[$]}],ps:[{ps:[$]}],pe:[{pe:[$]}],pt:[{pt:[$]}],pr:[{pr:[$]}],pb:[{pb:[$]}],pl:[{pl:[$]}],m:[{m:[x]}],mx:[{mx:[x]}],my:[{my:[x]}],ms:[{ms:[x]}],me:[{me:[x]}],mt:[{mt:[x]}],mr:[{mr:[x]}],mb:[{mb:[x]}],ml:[{ml:[x]}],"space-x":[{"space-x":[X]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[X]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",c,e]}],"min-w":[{"min-w":["min","max","fit",c,C]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[k]},k,c]}],h:[{h:[c,e,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",c,C]}],"max-h":[{"max-h":[c,e,"min","max","fit"]}],"font-size":[{text:["base",k,U]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",j]}],"font-family":[{font:[P]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",c]}],"line-clamp":[{"line-clamp":["none",M,j]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",c,C]}],"list-image":[{"list-image":["none",c]}],"list-style-type":[{list:["none","disc","decimal",c]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[r]}],"placeholder-opacity":[{"placeholder-opacity":[S]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[r]}],"text-opacity":[{"text-opacity":[S]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(N(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",C]}],"underline-offset":[{"underline-offset":["auto",c,C]}],"text-decoration-color":[{decoration:[r]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:b()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",c]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",c]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[S]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(Y(),[Rr])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Ir]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Nr]}],"bg-color":[{bg:[r]}],"gradient-from-pos":[{from:[v]}],"gradient-via-pos":[{via:[v]}],"gradient-to-pos":[{to:[v]}],"gradient-from":[{from:[h]}],"gradient-via":[{via:[h]}],"gradient-to":[{to:[h]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[i]}],"border-w-x":[{"border-x":[i]}],"border-w-y":[{"border-y":[i]}],"border-w-s":[{"border-s":[i]}],"border-w-e":[{"border-e":[i]}],"border-w-t":[{"border-t":[i]}],"border-w-r":[{"border-r":[i]}],"border-w-b":[{"border-b":[i]}],"border-w-l":[{"border-l":[i]}],"border-opacity":[{"border-opacity":[S]}],"border-style":[{border:[].concat(N(),["hidden"])}],"divide-x":[{"divide-x":[i]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[i]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[S]}],"divide-style":[{divide:N()}],"border-color":[{border:[a]}],"border-color-x":[{"border-x":[a]}],"border-color-y":[{"border-y":[a]}],"border-color-t":[{"border-t":[a]}],"border-color-r":[{"border-r":[a]}],"border-color-b":[{"border-b":[a]}],"border-color-l":[{"border-l":[a]}],"divide-color":[{divide:[a]}],"outline-style":[{outline:[""].concat(N())}],"outline-offset":[{"outline-offset":[c,C]}],"outline-w":[{outline:[C]}],"outline-color":[{outline:[r]}],"ring-w":[{ring:Q()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[r]}],"ring-opacity":[{"ring-opacity":[S]}],"ring-offset-w":[{"ring-offset":[C]}],"ring-offset-color":[{"ring-offset":[r]}],shadow:[{shadow:["","inner","none",k,jr]}],"shadow-color":[{shadow:[P]}],opacity:[{opacity:[S]}],"mix-blend":[{"mix-blend":D()}],"bg-blend":[{"bg-blend":D()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",k,c]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[m]}],invert:[{invert:[f]}],saturate:[{saturate:[Z]}],sepia:[{sepia:[q]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[m]}],"backdrop-invert":[{"backdrop-invert":[f]}],"backdrop-opacity":[{"backdrop-opacity":[S]}],"backdrop-saturate":[{"backdrop-saturate":[Z]}],"backdrop-sepia":[{"backdrop-sepia":[q]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[n]}],"border-spacing-x":[{"border-spacing-x":[n]}],"border-spacing-y":[{"border-spacing-y":[n]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",c]}],duration:[{duration:T()}],ease:[{ease:["linear","in","out","in-out",c]}],delay:[{delay:T()}],animate:[{animate:["none","spin","ping","pulse","bounce",c]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[O]}],"scale-x":[{"scale-x":[O]}],"scale-y":[{"scale-y":[O]}],rotate:[{rotate:[G,c]}],"translate-x":[{"translate-x":[K]}],"translate-y":[{"translate-y":[K]}],"skew-x":[{"skew-x":[J]}],"skew-y":[{"skew-y":[J]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",c]}],accent:[{accent:["auto",r]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",c]}],"caret-color":[{caret:[r]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":b()}],"scroll-mx":[{"scroll-mx":b()}],"scroll-my":[{"scroll-my":b()}],"scroll-ms":[{"scroll-ms":b()}],"scroll-me":[{"scroll-me":b()}],"scroll-mt":[{"scroll-mt":b()}],"scroll-mr":[{"scroll-mr":b()}],"scroll-mb":[{"scroll-mb":b()}],"scroll-ml":[{"scroll-ml":b()}],"scroll-p":[{"scroll-p":b()}],"scroll-px":[{"scroll-px":b()}],"scroll-py":[{"scroll-py":b()}],"scroll-ps":[{"scroll-ps":b()}],"scroll-pe":[{"scroll-pe":b()}],"scroll-pt":[{"scroll-pt":b()}],"scroll-pr":[{"scroll-pr":b()}],"scroll-pb":[{"scroll-pb":b()}],"scroll-pl":[{"scroll-pl":b()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",c]}],fill:[{fill:[r,"none"]}],"stroke-w":[{stroke:[C,j]}],stroke:[{stroke:[r,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}var _r=Mr(Vr);function Kr(...r){return _r(pr(r))}function I(){return I=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])}return r},I.apply(this,arguments)}function Br(r,e){typeof r=="function"?r(e):r!=null&&(r.current=e)}function dr(...r){return e=>r.forEach(t=>Br(t,e))}function Qr(...r){return d.useCallback(dr(...r),r)}function Yr(r,e=[]){let t=[];function o(s,n){const i=d.createContext(n),l=t.length;t=[...t,n];function u(f){const{scope:g,children:h,...v}=f,y=g?.[r][l]||i,x=d.useMemo(()=>v,Object.values(v));return d.createElement(y.Provider,{value:x},h)}function m(f,g){const h=g?.[r][l]||i,v=d.useContext(h);if(v)return v;if(n!==void 0)return n;throw new Error(`\`${f}\` must be used within \`${s}\``)}return u.displayName=s+"Provider",[u,m]}const a=()=>{const s=t.map(n=>d.createContext(n));return function(i){const l=i?.[r]||s;return d.useMemo(()=>({[`__scope${r}`]:{...i,[r]:l}}),[i,l])}};return a.scopeName=r,[o,Ur(a,...e)]}function Ur(...r){const e=r[0];if(r.length===1)return e;const t=()=>{const o=r.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(s){const n=o.reduce((i,{useScope:l,scopeName:u})=>{const f=l(s)[`__scope${u}`];return{...i,...f}},{});return d.useMemo(()=>({[`__scope${e.scopeName}`]:n}),[n])}};return t.scopeName=e.scopeName,t}function Dr(r){const e=d.useRef(r);return d.useEffect(()=>{e.current=r}),d.useMemo(()=>(...t)=>{var o;return(o=e.current)===null||o===void 0?void 0:o.call(e,...t)},[])}const ur=d.forwardRef((r,e)=>{const{children:t,...o}=r,a=d.Children.toArray(t),s=a.find(Hr);if(s){const n=s.props.children,i=a.map(l=>l===s?d.Children.count(n)>1?d.Children.only(null):d.isValidElement(n)?n.props.children:null:l);return d.createElement(F,I({},o,{ref:e}),d.isValidElement(n)?d.cloneElement(n,void 0,i):null)}return d.createElement(F,I({},o,{ref:e}),t)});ur.displayName="Slot";const F=d.forwardRef((r,e)=>{const{children:t,...o}=r;return d.isValidElement(t)?d.cloneElement(t,{...Zr(o,t.props),ref:e?dr(e,t.ref):t.ref}):d.Children.count(t)>1?d.Children.only(null):null});F.displayName="SlotClone";const Fr=({children:r})=>d.createElement(d.Fragment,null,r);function Hr(r){return d.isValidElement(r)&&r.type===Fr}function Zr(r,e){const t={...e};for(const o in e){const a=r[o],s=e[o];/^on[A-Z]/.test(o)?a&&s?t[o]=(...i)=>{s(...i),a(...i)}:a&&(t[o]=a):o==="style"?t[o]={...a,...s}:o==="className"&&(t[o]=[a,s].filter(Boolean).join(" "))}return{...r,...t}}const qr=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],re=qr.reduce((r,e)=>{const t=d.forwardRef((o,a)=>{const{asChild:s,...n}=o,i=s?ur:e;return d.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),d.createElement(i,I({},n,{ref:a}))});return t.displayName=`Primitive.${e}`,{...r,[e]:t}},{});function ee(r,e){r&&fr.flushSync(()=>r.dispatchEvent(e))}const te=globalThis?.document?d.useLayoutEffect:()=>{};export{Yr as $,I as _,re as a,Dr as b,te as c,Kr as d,pr as e,ur as f,Qr as g,ee as h,dr as i,_r as t};
