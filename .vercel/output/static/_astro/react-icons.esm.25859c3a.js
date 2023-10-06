import{r as t,$ as a,R as O}from"./index.8b13ccb1.js";import{b as E,$ as S,g as x,f as b,c as _}from"./index.cd2ea889.js";function K({prop:e,defaultProp:l,onChange:o=()=>{}}){const[r,c]=Z({defaultProp:l,onChange:o}),n=e!==void 0,$=n?e:r,w=E(o),m=t.useCallback(v=>{if(n){const h=typeof v=="function"?v(e):v;h!==e&&w(h)}else c(v)},[n,e,c,w]);return[$,m]}function Z({defaultProp:e,onChange:l}){const o=t.useState(e),[r]=o,c=t.useRef(r),n=E(l);return t.useEffect(()=>{c.current!==r&&(n(r),c.current=r)},[r,c,n]),o}function Q(e){const l=e+"CollectionProvider",[o,r]=S(l),[c,n]=o(l,{collectionRef:{current:null},itemMap:new Map}),$=u=>{const{scope:s,children:p}=u,d=a.useRef(null),f=a.useRef(new Map).current;return a.createElement(c,{scope:s,itemMap:f,collectionRef:d},p)},w=e+"CollectionSlot",m=a.forwardRef((u,s)=>{const{scope:p,children:d}=u,f=n(w,p),C=x(s,f.collectionRef);return a.createElement(b,{ref:C},d)}),v=e+"CollectionItemSlot",L="data-radix-collection-item",h=a.forwardRef((u,s)=>{const{scope:p,children:d,...f}=u,C=a.useRef(null),R=x(s,C),g=n(v,p);return a.useEffect(()=>(g.itemMap.set(C,{ref:C,...f}),()=>void g.itemMap.delete(C))),a.createElement(b,{[L]:"",ref:R},d)});function M(u){const s=n(e+"CollectionConsumer",u);return a.useCallback(()=>{const d=s.collectionRef.current;if(!d)return[];const f=Array.from(d.querySelectorAll(`[${L}]`));return Array.from(s.itemMap.values()).sort((g,I)=>f.indexOf(g.ref.current)-f.indexOf(I.ref.current))},[s.collectionRef,s.itemMap])}return[{Provider:$,Slot:m,ItemSlot:h},M,r]}const j=O["useId".toString()]||(()=>{});let A=0;function W(e){const[l,o]=t.useState(j());return _(()=>{e||o(r=>r??String(A++))},[e]),e||(l?`radix-${l}`:"")}function i(e,l){if(e==null)return{};var o={},r=Object.keys(e),c,n;for(n=0;n<r.length;n++)c=r[n],!(l.indexOf(c)>=0)&&(o[c]=e[c]);return o}var P=["color"],X=t.forwardRef(function(e,l){var o=e.color,r=o===void 0?"currentColor":o,c=i(e,P);return t.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c,{ref:l}),t.createElement("path",{d:"M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),B=["color"],Y=t.forwardRef(function(e,l){var o=e.color,r=o===void 0?"currentColor":o,c=i(e,B);return t.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c,{ref:l}),t.createElement("path",{d:"M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),T=["color"],z=t.forwardRef(function(e,l){var o=e.color,r=o===void 0?"currentColor":o,c=i(e,T);return t.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c,{ref:l}),t.createElement("path",{d:"M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),D=["color"],G=t.forwardRef(function(e,l){var o=e.color,r=o===void 0?"currentColor":o,c=i(e,D);return t.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c,{ref:l}),t.createElement("path",{d:"M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),H=["color"],J=t.forwardRef(function(e,l){var o=e.color,r=o===void 0?"currentColor":o,c=i(e,H);return t.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c,{ref:l}),t.createElement("path",{d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),N=["color"],V=t.forwardRef(function(e,l){var o=e.color,r=o===void 0?"currentColor":o,c=i(e,N);return t.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c,{ref:l}),t.createElement("path",{d:"M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z",fill:r}))}),y=["color"],e1=t.forwardRef(function(e,l){var o=e.color,r=o===void 0?"currentColor":o,c=i(e,y);return t.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c,{ref:l}),t.createElement("path",{d:"M6.85355 3.85355C7.04882 3.65829 7.04882 3.34171 6.85355 3.14645C6.65829 2.95118 6.34171 2.95118 6.14645 3.14645L2.14645 7.14645C1.95118 7.34171 1.95118 7.65829 2.14645 7.85355L6.14645 11.8536C6.34171 12.0488 6.65829 12.0488 6.85355 11.8536C7.04882 11.6583 7.04882 11.3417 6.85355 11.1464L3.20711 7.5L6.85355 3.85355ZM12.8536 3.85355C13.0488 3.65829 13.0488 3.34171 12.8536 3.14645C12.6583 2.95118 12.3417 2.95118 12.1464 3.14645L8.14645 7.14645C7.95118 7.34171 7.95118 7.65829 8.14645 7.85355L12.1464 11.8536C12.3417 12.0488 12.6583 12.0488 12.8536 11.8536C13.0488 11.6583 13.0488 11.3417 12.8536 11.1464L9.20711 7.5L12.8536 3.85355Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),k=["color"],o1=t.forwardRef(function(e,l){var o=e.color,r=o===void 0?"currentColor":o,c=i(e,k);return t.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c,{ref:l}),t.createElement("path",{d:"M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),U=["color"],r1=t.forwardRef(function(e,l){var o=e.color,r=o===void 0?"currentColor":o,c=i(e,U);return t.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c,{ref:l}),t.createElement("path",{d:"M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))});export{K as $,G as C,V as D,r1 as H,W as a,Q as b,Y as c,X as d,e1 as e,z as f,o1 as g,J as h};