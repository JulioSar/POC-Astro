import{j as o}from"./jsx-runtime.e5472271.js";import{A as le}from"./index.esm.11971b09.js";import{r as i,$ as a}from"./index.8b13ccb1.js";import{$ as q,a as j,_ as $,g as Y,c as ie,d as H}from"./index.cd2ea889.js";import{$ as L,a as J,b as de,H as fe}from"./react-icons.esm.25859c3a.js";import{a as Q,$ as pe,b as be}from"./index.ae9257b6.js";import"./iconBase.c7ef52f7.js";import"./index.cd0476e8.js";const W="Collapsible",[$e,X]=q(W),[ue,U]=$e(W),me=i.forwardRef((e,r)=>{const{__scopeCollapsible:t,open:n,defaultOpen:s,disabled:c,onOpenChange:l,...d}=e,[f=!1,p]=L({prop:n,defaultProp:s,onChange:l});return i.createElement(ue,{scope:t,disabled:c,contentId:J(),open:f,onOpenToggle:i.useCallback(()=>p(m=>!m),[p])},i.createElement(j.div,$({"data-state":G(f),"data-disabled":c?"":void 0},d,{ref:r})))}),xe="CollapsibleTrigger",ge=i.forwardRef((e,r)=>{const{__scopeCollapsible:t,...n}=e,s=U(xe,t);return i.createElement(j.button,$({type:"button","aria-controls":s.contentId,"aria-expanded":s.open||!1,"data-state":G(s.open),"data-disabled":s.disabled?"":void 0,disabled:s.disabled},n,{ref:r,onClick:Q(e.onClick,s.onOpenToggle)}))}),Z="CollapsibleContent",he=i.forwardRef((e,r)=>{const{forceMount:t,...n}=e,s=U(Z,e.__scopeCollapsible);return i.createElement(pe,{present:t||s.open},({present:c})=>i.createElement(ve,$({},n,{ref:r,present:c})))}),ve=i.forwardRef((e,r)=>{const{__scopeCollapsible:t,present:n,children:s,...c}=e,l=U(Z,t),[d,f]=i.useState(n),p=i.useRef(null),m=Y(r,p),x=i.useRef(0),C=x.current,v=i.useRef(0),A=v.current,I=l.open||d,_=i.useRef(I),g=i.useRef();return i.useEffect(()=>{const b=requestAnimationFrame(()=>_.current=!1);return()=>cancelAnimationFrame(b)},[]),ie(()=>{const b=p.current;if(b){g.current=g.current||{transitionDuration:b.style.transitionDuration,animationName:b.style.animationName},b.style.transitionDuration="0s",b.style.animationName="none";const u=b.getBoundingClientRect();x.current=u.height,v.current=u.width,_.current||(b.style.transitionDuration=g.current.transitionDuration,b.style.animationName=g.current.animationName),f(n)}},[l.open,n]),i.createElement(j.div,$({"data-state":G(l.open),"data-disabled":l.disabled?"":void 0,id:l.contentId,hidden:!I},c,{ref:m,style:{"--radix-collapsible-content-height":C?`${C}px`:void 0,"--radix-collapsible-content-width":A?`${A}px`:void 0,...e.style}}),I&&s)});function G(e){return e?"open":"closed"}const Ce=me,Ae=ge,_e=he,h="Accordion",Ne=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[K,Ee,ye]=de(h),[R,Qe]=q(h,[ye,X]),B=X(),ee=a.forwardRef((e,r)=>{const{type:t,...n}=e,s=n,c=n;return a.createElement(K.Provider,{scope:e.__scopeAccordion},t==="multiple"?a.createElement(Re,$({},c,{ref:r})):a.createElement(je,$({},s,{ref:r})))});ee.propTypes={type(e){const r=e.value||e.defaultValue;return e.type&&!["single","multiple"].includes(e.type)?new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`."):e.type==="multiple"&&typeof r=="string"?new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`."):e.type==="single"&&Array.isArray(r)?new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`."):null}};const[te,Ie]=R(h),[oe,we]=R(h,{collapsible:!1}),je=a.forwardRef((e,r)=>{const{value:t,defaultValue:n,onValueChange:s=()=>{},collapsible:c=!1,...l}=e,[d,f]=L({prop:t,defaultProp:n,onChange:s});return a.createElement(te,{scope:e.__scopeAccordion,value:d?[d]:[],onItemOpen:f,onItemClose:a.useCallback(()=>c&&f(""),[c,f])},a.createElement(oe,{scope:e.__scopeAccordion,collapsible:c},a.createElement(ne,$({},l,{ref:r}))))}),Re=a.forwardRef((e,r)=>{const{value:t,defaultValue:n,onValueChange:s=()=>{},...c}=e,[l=[],d]=L({prop:t,defaultProp:n,onChange:s}),f=a.useCallback(m=>d((x=[])=>[...x,m]),[d]),p=a.useCallback(m=>d((x=[])=>x.filter(C=>C!==m)),[d]);return a.createElement(te,{scope:e.__scopeAccordion,value:l,onItemOpen:f,onItemClose:p},a.createElement(oe,{scope:e.__scopeAccordion,collapsible:!0},a.createElement(ne,$({},c,{ref:r}))))}),[Pe,P]=R(h),ne=a.forwardRef((e,r)=>{const{__scopeAccordion:t,disabled:n,dir:s,orientation:c="vertical",...l}=e,d=a.useRef(null),f=Y(d,r),p=Ee(t),x=be(s)==="ltr",C=Q(e.onKeyDown,v=>{var A;if(!Ne.includes(v.key))return;const I=v.target,_=p().filter(S=>{var T;return!((T=S.ref.current)!==null&&T!==void 0&&T.disabled)}),g=_.findIndex(S=>S.ref.current===I),b=_.length;if(g===-1)return;v.preventDefault();let u=g;const O=0,D=b-1,k=()=>{u=g+1,u>D&&(u=O)},M=()=>{u=g-1,u<O&&(u=D)};switch(v.key){case"Home":u=O;break;case"End":u=D;break;case"ArrowRight":c==="horizontal"&&(x?k():M());break;case"ArrowDown":c==="vertical"&&k();break;case"ArrowLeft":c==="horizontal"&&(x?M():k());break;case"ArrowUp":c==="vertical"&&M();break}const se=u%b;(A=_[se].ref.current)===null||A===void 0||A.focus()});return a.createElement(Pe,{scope:t,disabled:n,direction:s,orientation:c},a.createElement(K.Slot,{scope:t},a.createElement(j.div,$({},l,{"data-orientation":c,ref:f,onKeyDown:n?void 0:C}))))}),V="AccordionItem",[Oe,F]=R(V),De=a.forwardRef((e,r)=>{const{__scopeAccordion:t,value:n,...s}=e,c=P(V,t),l=Ie(V,t),d=B(t),f=J(),p=n&&l.value.includes(n)||!1,m=c.disabled||e.disabled;return a.createElement(Oe,{scope:t,open:p,disabled:m,triggerId:f},a.createElement(Ce,$({"data-orientation":c.orientation,"data-state":re(p)},d,s,{ref:r,disabled:m,open:p,onOpenChange:x=>{x?l.onItemOpen(n):l.onItemClose(n)}})))}),ke="AccordionHeader",Me=a.forwardRef((e,r)=>{const{__scopeAccordion:t,...n}=e,s=P(h,t),c=F(ke,t);return a.createElement(j.h3,$({"data-orientation":s.orientation,"data-state":re(c.open),"data-disabled":c.disabled?"":void 0},n,{ref:r}))}),z="AccordionTrigger",Se=a.forwardRef((e,r)=>{const{__scopeAccordion:t,...n}=e,s=P(h,t),c=F(z,t),l=we(z,t),d=B(t);return a.createElement(K.ItemSlot,{scope:t},a.createElement(Ae,$({"aria-disabled":c.open&&!l.collapsible||void 0,"data-orientation":s.orientation,id:c.triggerId},d,n,{ref:r})))}),Te="AccordionContent",Ve=a.forwardRef((e,r)=>{const{__scopeAccordion:t,...n}=e,s=P(h,t),c=F(Te,t),l=B(t);return a.createElement(_e,$({role:"region","aria-labelledby":c.triggerId,"data-orientation":s.orientation},l,n,{ref:r,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}}))});function re(e){return e?"open":"closed"}const He=ee,Le=De,Ue=Me,ce=Se,ae=Ve,w=He,N=i.forwardRef(({className:e,...r},t)=>o.jsx(Le,{ref:t,className:H("",e),...r}));N.displayName="AccordionItem";const E=i.forwardRef(({className:e,children:r,...t},n)=>o.jsx(Ue,{className:"flex",children:o.jsxs(ce,{ref:n,className:H("flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all [&[data-state=open]>svg]:rotate-180",e),...t,children:[r,o.jsx(fe,{className:"h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"})]})}));E.displayName=ce.displayName;const y=i.forwardRef(({className:e,children:r,...t},n)=>o.jsx(ae,{ref:n,className:H("overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",e),...t,children:o.jsx("div",{className:"pb-4 pt-0",children:r})}));y.displayName=ae.displayName;function We(){return o.jsxs("section",{className:" mt-10",children:[o.jsx("div",{className:"px-8 py-2  text-black",children:o.jsxs("a",{className:"py-2 flex flex-row gap-4 text-md font-light",href:"/",children:[o.jsx(le,{className:"mt-1 "})," Dashboard"]})}),o.jsx(w,{type:"single",collapsible:!0,className:"px-8",children:o.jsxs(N,{value:"item-1",children:[o.jsx(E,{className:"text-md font-light",children:"Configurations"}),o.jsx(y,{children:o.jsxs("section",{className:"flex flex-col c",children:[o.jsx("a",{href:"google.com",className:"pr-5 pb-2 cursor-pointer",children:"Applications"}),o.jsx("a",{className:"pr-5 pb-2 cursor-pointer",children:"App Configuration Groups"})]})})]})}),o.jsx(w,{type:"single",collapsible:!0,className:"px-8 bg-[#E87722] text-white",children:o.jsxs(N,{value:"item-1",children:[o.jsx(E,{className:"text-md font-light ",children:"Users"}),o.jsx(y,{children:o.jsxs("section",{className:"flex flex-col ",children:[o.jsx("a",{className:"pr-5 pb-2 cursor-pointer",children:"Users"}),o.jsx("a",{className:"pr-5 pb-2 cursor-pointer",children:"User Managment Log"}),o.jsx("a",{className:"pr-5 pb-2 cursor-pointer",children:"Portal Data Audit"})]})})]})}),o.jsx(w,{type:"single",collapsible:!0,className:"px-8",children:o.jsxs(N,{value:"item-1",children:[o.jsx(E,{className:"text-md font-light",children:"Interests"}),o.jsx(y,{children:o.jsx("a",{className:"pr-5 pb-2 cursor-pointer",children:"Interests Categories"})})]})}),o.jsx(w,{type:"single",collapsible:!0,className:"px-8",children:o.jsxs(N,{value:"item-1",children:[o.jsx(E,{className:"text-md font-light",children:"Settings"}),o.jsx(y,{children:o.jsx("a",{className:"pr-5 pb-2 cursor-pointer",children:"Portal Configurations"})})]})}),o.jsx(w,{type:"single",collapsible:!0,className:"px-8",children:o.jsxs(N,{value:"item-1",children:[o.jsx(E,{className:"text-md font-light",children:"Tools"}),o.jsx(y,{children:o.jsx("a",{className:"pr-5 pb-2 cursor-pointer",children:"Document Upload"})})]})})]})}export{We as default};