import{D as x,a9 as J,bn as ge,B as N,bo as oe,bp as xe,b as ue,bq as te,r as A,b5 as H,br as de,d as U,aY as W,bj as Se,aQ as O,A as _,aZ as Oe,b0 as ce,b1 as Ie,b2 as Q,o as le,as as X,aR as Re,aS as ye,aT as Ce,aU as Y,aV as ne,F as we,aO as G,aP as Ee,b4 as Z,b3 as Te,az as ve,b6 as B,ar as Me,b7 as ze,aW as F,bs as ie,bt as De}from"./BbWg3rXT.js";import{d as Pe,e as Ae}from"./x07TgI02.js";function L(l,r,t){let o=t.initialDeps??[],e;return()=>{var i,a,n,f;let p;t.key&&((i=t.debug)!=null&&i.call(t))&&(p=Date.now());const d=l();if(!(d.length!==o.length||d.some((M,C)=>o[C]!==M)))return e;o=d;let I;if(t.key&&((a=t.debug)!=null&&a.call(t))&&(I=Date.now()),e=r(...d),t.key&&((n=t.debug)!=null&&n.call(t))){const M=Math.round((Date.now()-p)*100)/100,C=Math.round((Date.now()-I)*100)/100,P=C/16,$=(D,b)=>{for(D=String(D);D.length<b;)D=" "+D;return D};console.info(`%c⏱ ${$(C,5)} /${$(M,5)} ms`,`
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0,Math.min(120-120*P,120))}deg 100% 31%);`,t==null?void 0:t.key)}return(f=t==null?void 0:t.onChange)==null||f.call(t,e),e}}function ee(l,r){if(l===void 0)throw new Error("Unexpected undefined");return l}const Fe=(l,r)=>Math.abs(l-r)<1,$e=(l,r,t)=>{let o;return function(...e){l.clearTimeout(o),o=l.setTimeout(()=>r.apply(this,e),t)}},Ve=l=>l,ke=l=>{const r=Math.max(l.startIndex-l.overscan,0),t=Math.min(l.endIndex+l.overscan,l.count-1),o=[];for(let e=r;e<=t;e++)o.push(e);return o},_e=(l,r)=>{const t=l.scrollElement;if(!t)return;const o=l.targetWindow;if(!o)return;const e=a=>{const{width:n,height:f}=a;r({width:Math.round(n),height:Math.round(f)})};if(e(t.getBoundingClientRect()),!o.ResizeObserver)return()=>{};const i=new o.ResizeObserver(a=>{const n=a[0];if(n!=null&&n.borderBoxSize){const f=n.borderBoxSize[0];if(f){e({width:f.inlineSize,height:f.blockSize});return}}e(t.getBoundingClientRect())});return i.observe(t,{box:"border-box"}),()=>{i.unobserve(t)}},ae={passive:!0},Be=typeof window>"u"?!0:"onscrollend"in window,Ne=(l,r)=>{const t=l.scrollElement;if(!t)return;const o=l.targetWindow;if(!o)return;let e=0;const i=Be?()=>{}:$e(o,()=>{r(e,!1)},l.options.isScrollingResetDelay),a=p=>()=>{const{horizontal:d,isRtl:h}=l.options;e=d?t.scrollLeft*(h&&-1||1):t.scrollTop,i(),r(e,p)},n=a(!0),f=a(!1);return f(),t.addEventListener("scroll",n,ae),t.addEventListener("scrollend",f,ae),()=>{t.removeEventListener("scroll",n),t.removeEventListener("scrollend",f)}},je=(l,r,t)=>{if(r!=null&&r.borderBoxSize){const o=r.borderBoxSize[0];if(o)return Math.round(o[t.options.horizontal?"inlineSize":"blockSize"])}return Math.round(l.getBoundingClientRect()[t.options.horizontal?"width":"height"])},Le=(l,{adjustments:r=0,behavior:t},o)=>{var e,i;const a=l+r;(i=(e=o.scrollElement)==null?void 0:e.scrollTo)==null||i.call(e,{[o.options.horizontal?"left":"top"]:a,behavior:t})};class We{constructor(r){this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.isScrolling=!1,this.scrollToIndexTimeoutId=null,this.measurementsCache=[],this.itemSizeCache=new Map,this.pendingMeasuredCacheIndexes=[],this.scrollRect=null,this.scrollOffset=null,this.scrollDirection=null,this.scrollAdjustments=0,this.elementsCache=new Map,this.observer=(()=>{let t=null;const o=()=>t||(!this.targetWindow||!this.targetWindow.ResizeObserver?null:t=new this.targetWindow.ResizeObserver(e=>{e.forEach(i=>{this._measureElement(i.target,i)})}));return{disconnect:()=>{var e;(e=o())==null||e.disconnect(),t=null},observe:e=>{var i;return(i=o())==null?void 0:i.observe(e,{box:"border-box"})},unobserve:e=>{var i;return(i=o())==null?void 0:i.unobserve(e)}}})(),this.range=null,this.setOptions=t=>{Object.entries(t).forEach(([o,e])=>{typeof e>"u"&&delete t[o]}),this.options={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:Ve,rangeExtractor:ke,onChange:()=>{},measureElement:je,initialRect:{width:0,height:0},scrollMargin:0,gap:0,indexAttribute:"data-index",initialMeasurementsCache:[],lanes:1,isScrollingResetDelay:150,enabled:!0,isRtl:!1,...t}},this.notify=t=>{var o,e;(e=(o=this.options).onChange)==null||e.call(o,this,t)},this.maybeNotify=L(()=>(this.calculateRange(),[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]),t=>{this.notify(t)},{key:!1,debug:()=>this.options.debug,initialDeps:[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]}),this.cleanup=()=>{this.unsubs.filter(Boolean).forEach(t=>t()),this.unsubs=[],this.observer.disconnect(),this.scrollElement=null,this.targetWindow=null},this._didMount=()=>()=>{this.cleanup()},this._willUpdate=()=>{var t;const o=this.options.enabled?this.options.getScrollElement():null;if(this.scrollElement!==o){if(this.cleanup(),!o){this.maybeNotify();return}this.scrollElement=o,this.scrollElement&&"ownerDocument"in this.scrollElement?this.targetWindow=this.scrollElement.ownerDocument.defaultView:this.targetWindow=((t=this.scrollElement)==null?void 0:t.window)??null,this.elementsCache.forEach(e=>{this.observer.observe(e)}),this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0}),this.unsubs.push(this.options.observeElementRect(this,e=>{this.scrollRect=e,this.maybeNotify()})),this.unsubs.push(this.options.observeElementOffset(this,(e,i)=>{this.scrollAdjustments=0,this.scrollDirection=i?this.getScrollOffset()<e?"forward":"backward":null,this.scrollOffset=e,this.isScrolling=i,this.maybeNotify()}))}},this.getSize=()=>this.options.enabled?(this.scrollRect=this.scrollRect??this.options.initialRect,this.scrollRect[this.options.horizontal?"width":"height"]):(this.scrollRect=null,0),this.getScrollOffset=()=>this.options.enabled?(this.scrollOffset=this.scrollOffset??(typeof this.options.initialOffset=="function"?this.options.initialOffset():this.options.initialOffset),this.scrollOffset):(this.scrollOffset=null,0),this.getFurthestMeasurement=(t,o)=>{const e=new Map,i=new Map;for(let a=o-1;a>=0;a--){const n=t[a];if(e.has(n.lane))continue;const f=i.get(n.lane);if(f==null||n.end>f.end?i.set(n.lane,n):n.end<f.end&&e.set(n.lane,!0),e.size===this.options.lanes)break}return i.size===this.options.lanes?Array.from(i.values()).sort((a,n)=>a.end===n.end?a.index-n.index:a.end-n.end)[0]:void 0},this.getMeasurementOptions=L(()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey,this.options.enabled],(t,o,e,i,a)=>(this.pendingMeasuredCacheIndexes=[],{count:t,paddingStart:o,scrollMargin:e,getItemKey:i,enabled:a}),{key:!1}),this.getMeasurements=L(()=>[this.getMeasurementOptions(),this.itemSizeCache],({count:t,paddingStart:o,scrollMargin:e,getItemKey:i,enabled:a},n)=>{if(!a)return this.measurementsCache=[],this.itemSizeCache.clear(),[];this.measurementsCache.length===0&&(this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(d=>{this.itemSizeCache.set(d.key,d.size)}));const f=this.pendingMeasuredCacheIndexes.length>0?Math.min(...this.pendingMeasuredCacheIndexes):0;this.pendingMeasuredCacheIndexes=[];const p=this.measurementsCache.slice(0,f);for(let d=f;d<t;d++){const h=i(d),I=this.options.lanes===1?p[d-1]:this.getFurthestMeasurement(p,d),M=I?I.end+this.options.gap:o+e,C=n.get(h),P=typeof C=="number"?C:this.options.estimateSize(d),$=M+P,D=I?I.lane:d%this.options.lanes;p[d]={index:d,start:M,size:P,end:$,key:h,lane:D}}return this.measurementsCache=p,p},{key:!1,debug:()=>this.options.debug}),this.calculateRange=L(()=>[this.getMeasurements(),this.getSize(),this.getScrollOffset()],(t,o,e)=>this.range=t.length>0&&o>0?Ue({measurements:t,outerSize:o,scrollOffset:e}):null,{key:!1,debug:()=>this.options.debug}),this.getIndexes=L(()=>[this.options.rangeExtractor,this.calculateRange(),this.options.overscan,this.options.count],(t,o,e,i)=>o===null?[]:t({startIndex:o.startIndex,endIndex:o.endIndex,overscan:e,count:i}),{key:!1,debug:()=>this.options.debug}),this.indexFromElement=t=>{const o=this.options.indexAttribute,e=t.getAttribute(o);return e?parseInt(e,10):(console.warn(`Missing attribute name '${o}={index}' on measured element.`),-1)},this._measureElement=(t,o)=>{const e=this.indexFromElement(t),i=this.measurementsCache[e];if(!i)return;const a=i.key,n=this.elementsCache.get(a);n!==t&&(n&&this.observer.unobserve(n),this.observer.observe(t),this.elementsCache.set(a,t)),t.isConnected&&this.resizeItem(e,this.options.measureElement(t,o,this))},this.resizeItem=(t,o)=>{const e=this.measurementsCache[t];if(!e)return;const i=this.itemSizeCache.get(e.key)??e.size,a=o-i;a!==0&&((this.shouldAdjustScrollPositionOnItemSizeChange!==void 0?this.shouldAdjustScrollPositionOnItemSizeChange(e,a,this):e.start<this.getScrollOffset()+this.scrollAdjustments)&&this._scrollToOffset(this.getScrollOffset(),{adjustments:this.scrollAdjustments+=a,behavior:void 0}),this.pendingMeasuredCacheIndexes.push(e.index),this.itemSizeCache=new Map(this.itemSizeCache.set(e.key,o)),this.notify(!1))},this.measureElement=t=>{if(!t){this.elementsCache.forEach((o,e)=>{o.isConnected||(this.observer.unobserve(o),this.elementsCache.delete(e))});return}this._measureElement(t,void 0)},this.getVirtualItems=L(()=>[this.getIndexes(),this.getMeasurements()],(t,o)=>{const e=[];for(let i=0,a=t.length;i<a;i++){const n=t[i],f=o[n];e.push(f)}return e},{key:!1,debug:()=>this.options.debug}),this.getVirtualItemForOffset=t=>{const o=this.getMeasurements();if(o.length!==0)return ee(o[fe(0,o.length-1,e=>ee(o[e]).start,t)])},this.getOffsetForAlignment=(t,o)=>{const e=this.getSize(),i=this.getScrollOffset();o==="auto"&&(t<=i?o="start":t>=i+e?o="end":o="start"),o==="start"?t=t:o==="end"?t=t-e:o==="center"&&(t=t-e/2);const a=this.options.horizontal?"scrollWidth":"scrollHeight",f=(this.scrollElement?"document"in this.scrollElement?this.scrollElement.document.documentElement[a]:this.scrollElement[a]:0)-e;return Math.max(Math.min(f,t),0)},this.getOffsetForIndex=(t,o="auto")=>{t=Math.max(0,Math.min(t,this.options.count-1));const e=this.measurementsCache[t];if(!e)return;const i=this.getSize(),a=this.getScrollOffset();if(o==="auto")if(e.end>=a+i-this.options.scrollPaddingEnd)o="end";else if(e.start<=a+this.options.scrollPaddingStart)o="start";else return[a,o];const n=o==="end"?e.end+this.options.scrollPaddingEnd:e.start-this.options.scrollPaddingStart;return[this.getOffsetForAlignment(n,o),o]},this.isDynamicMode=()=>this.elementsCache.size>0,this.cancelScrollToIndex=()=>{this.scrollToIndexTimeoutId!==null&&this.targetWindow&&(this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId),this.scrollToIndexTimeoutId=null)},this.scrollToOffset=(t,{align:o="start",behavior:e}={})=>{this.cancelScrollToIndex(),e==="smooth"&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),this._scrollToOffset(this.getOffsetForAlignment(t,o),{adjustments:void 0,behavior:e})},this.scrollToIndex=(t,{align:o="auto",behavior:e}={})=>{t=Math.max(0,Math.min(t,this.options.count-1)),this.cancelScrollToIndex(),e==="smooth"&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");const i=this.getOffsetForIndex(t,o);if(!i)return;const[a,n]=i;this._scrollToOffset(a,{adjustments:void 0,behavior:e}),e!=="smooth"&&this.isDynamicMode()&&this.targetWindow&&(this.scrollToIndexTimeoutId=this.targetWindow.setTimeout(()=>{if(this.scrollToIndexTimeoutId=null,this.elementsCache.has(this.options.getItemKey(t))){const[p]=ee(this.getOffsetForIndex(t,n));Fe(p,this.getScrollOffset())||this.scrollToIndex(t,{align:n,behavior:e})}else this.scrollToIndex(t,{align:n,behavior:e})}))},this.scrollBy=(t,{behavior:o}={})=>{this.cancelScrollToIndex(),o==="smooth"&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),this._scrollToOffset(this.getScrollOffset()+t,{adjustments:void 0,behavior:o})},this.getTotalSize=()=>{var t;const o=this.getMeasurements();let e;return o.length===0?e=this.options.paddingStart:e=this.options.lanes===1?((t=o[o.length-1])==null?void 0:t.end)??0:Math.max(...o.slice(-this.options.lanes).map(i=>i.end)),Math.max(e-this.options.scrollMargin+this.options.paddingEnd,0)},this._scrollToOffset=(t,{adjustments:o,behavior:e})=>{this.options.scrollToFn(t,{behavior:e,adjustments:o},this)},this.measure=()=>{this.itemSizeCache=new Map,this.notify(!1)},this.setOptions(r)}}const fe=(l,r,t,o)=>{for(;l<=r;){const e=(l+r)/2|0,i=t(e);if(i<o)l=e+1;else if(i>o)r=e-1;else return e}return l>0?l-1:0};function Ue({measurements:l,outerSize:r,scrollOffset:t}){const o=l.length-1,i=fe(0,o,n=>l[n].start,t);let a=i;for(;a<o&&l[a].end<t+r;)a++;return{startIndex:i,endIndex:a}}function Ke(l){const r=new We(J(l)),t=ge(r),o=r._didMount();return N(()=>J(l).getScrollElement(),e=>{e&&r._willUpdate()},{immediate:!0}),N(()=>J(l),e=>{r.setOptions({...e,onChange:(i,a)=>{var n;oe(t),(n=e.onChange)==null||n.call(e,i,a)}}),r._willUpdate(),oe(t)},{immediate:!0}),xe(o),t}function qe(l){return Ke(x(()=>({observeElementRect:_e,observeElementOffset:Ne,scrollToFn:Le,...J(l)})))}function He(){let l=te();return ue(()=>l.dispose()),l}function Ye(){let l=He();return r=>{l.dispose(),l.nextFrame(r)}}function se(l){return[l.screenX,l.screenY]}function Je(){let l=A([-1,-1]);return{wasMoved(r){let t=se(r);return l.value[0]===t[0]&&l.value[1]===t[1]?!1:(l.value=t,!0)},update(r){l.value=se(r)}}}function Qe({container:l,accept:r,walk:t,enabled:o}){H(()=>{let e=l.value;if(!e||o!==void 0&&!o.value)return;let i=de(l);if(!i)return;let a=Object.assign(f=>r(f),{acceptNode:r}),n=i.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,a,!1);for(;n.nextNode();)t(n.currentNode)})}var pe=(l=>(l[l.Left=0]="Left",l[l.Right=2]="Right",l))(pe||{});function Xe(l){throw new Error("Unexpected object: "+l)}var z=(l=>(l[l.First=0]="First",l[l.Previous=1]="Previous",l[l.Next=2]="Next",l[l.Last=3]="Last",l[l.Specific=4]="Specific",l[l.Nothing=5]="Nothing",l))(z||{});function re(l,r){let t=r.resolveItems();if(t.length<=0)return null;let o=r.resolveActiveIndex(),e=o??-1;switch(l.focus){case 0:{for(let i=0;i<t.length;++i)if(!r.resolveDisabled(t[i],i,t))return i;return o}case 1:{e===-1&&(e=t.length);for(let i=e-1;i>=0;--i)if(!r.resolveDisabled(t[i],i,t))return i;return o}case 2:{for(let i=e+1;i<t.length;++i)if(!r.resolveDisabled(t[i],i,t))return i;return o}case 3:{for(let i=t.length-1;i>=0;--i)if(!r.resolveDisabled(t[i],i,t))return i;return o}case 4:{for(let i=0;i<t.length;++i)if(r.resolveId(t[i],i,t)===l.id)return i;return o}case 5:return null;default:Xe(l)}}var Ze={};function Ge(l,r){return l===r}var et=(l=>(l[l.Open=0]="Open",l[l.Closed=1]="Closed",l))(et||{}),tt=(l=>(l[l.Single=0]="Single",l[l.Multi=1]="Multi",l))(tt||{}),lt=(l=>(l[l.Pointer=0]="Pointer",l[l.Focus=1]="Focus",l[l.Other=2]="Other",l))(lt||{});let he=Symbol("ComboboxContext");function K(l){let r=ve(he,null);if(r===null){let t=new Error(`<${l} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,K),t}return r}let me=Symbol("VirtualContext"),nt=U({name:"VirtualProvider",setup(l,{slots:r}){let t=K("VirtualProvider"),o=x(()=>{let n=O(t.optionsRef);if(!n)return{start:0,end:0};let f=window.getComputedStyle(n);return{start:parseFloat(f.paddingBlockStart||f.paddingTop),end:parseFloat(f.paddingBlockEnd||f.paddingBottom)}}),e=qe(x(()=>({scrollPaddingStart:o.value.start,scrollPaddingEnd:o.value.end,count:t.virtual.value.options.length,estimateSize(){return 40},getScrollElement(){return O(t.optionsRef)},overscan:12}))),i=x(()=>{var n;return(n=t.virtual.value)==null?void 0:n.options}),a=A(0);return N([i],()=>{a.value+=1}),ce(me,t.virtual.value?e:null),()=>[X("div",{style:{position:"relative",width:"100%",height:`${e.value.getTotalSize()}px`},ref:n=>{if(n){if(typeof process<"u"&&Ze.JEST_WORKER_ID!==void 0||t.activationTrigger.value===0)return;t.activeOptionIndex.value!==null&&t.virtual.value.options.length>t.activeOptionIndex.value&&e.value.scrollToIndex(t.activeOptionIndex.value)}}},e.value.getVirtualItems().map(n=>Me(r.default({option:t.virtual.value.options[n.index],open:t.comboboxState.value===0})[0],{key:`${a.value}-${n.index}`,"data-index":n.index,"aria-setsize":t.virtual.value.options.length,"aria-posinset":n.index+1,style:{position:"absolute",top:0,left:0,transform:`translateY(${n.start}px)`,overflowAnchor:"none"}})))]}}),at=U({name:"Combobox",emits:{"update:modelValue":l=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],nullable:!0,default:null},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},form:{type:String,optional:!0},name:{type:String,optional:!0},nullable:{type:Boolean,default:!1},multiple:{type:[Boolean],default:!1},immediate:{type:[Boolean],default:!1},virtual:{type:Object,default:null}},inheritAttrs:!1,setup(l,{slots:r,attrs:t,emit:o}){let e=A(1),i=A(null),a=A(null),n=A(null),f=A(null),p=A({static:!1,hold:!1}),d=A([]),h=A(null),I=A(2),M=A(!1);function C(s=c=>c){let c=h.value!==null?d.value[h.value]:null,m=s(d.value.slice()),g=m.length>0&&m[0].dataRef.order.value!==null?m.sort((T,k)=>T.dataRef.order.value-k.dataRef.order.value):ze(m,T=>O(T.dataRef.domRef)),E=c?g.indexOf(c):null;return E===-1&&(E=null),{options:g,activeOptionIndex:E}}let P=x(()=>l.multiple?1:0),$=x(()=>l.nullable),[D,b]=Pe(x(()=>l.modelValue),s=>o("update:modelValue",s),x(()=>l.defaultValue)),w=x(()=>D.value===void 0?W(P.value,{1:[],0:void 0}):D.value),V=null,v=null;function R(s){return W(P.value,{0(){return b==null?void 0:b(s)},1:()=>{let c=_(u.value.value).slice(),m=_(s),g=c.findIndex(E=>u.compare(m,_(E)));return g===-1?c.push(m):c.splice(g,1),b==null?void 0:b(c)}})}let y=x(()=>{});N([y],([s],[c])=>{if(u.virtual.value&&s&&c&&h.value!==null){let m=s.indexOf(c[h.value]);m!==-1?h.value=m:h.value=null}});let u={comboboxState:e,value:w,mode:P,compare(s,c){if(typeof l.by=="string"){let m=l.by;return(s==null?void 0:s[m])===(c==null?void 0:c[m])}return l.by===null?Ge(s,c):l.by(s,c)},calculateIndex(s){return u.virtual.value?l.by===null?u.virtual.value.options.indexOf(s):u.virtual.value.options.findIndex(c=>u.compare(c,s)):d.value.findIndex(c=>u.compare(c.dataRef.value,s))},defaultValue:x(()=>l.defaultValue),nullable:$,immediate:x(()=>!1),virtual:x(()=>null),inputRef:a,labelRef:i,buttonRef:n,optionsRef:f,disabled:x(()=>l.disabled),options:d,change(s){b(s)},activeOptionIndex:x(()=>{if(M.value&&h.value===null&&(u.virtual.value?u.virtual.value.options.length>0:d.value.length>0)){if(u.virtual.value){let c=u.virtual.value.options.findIndex(m=>{var g;return!((g=u.virtual.value)!=null&&g.disabled(m))});if(c!==-1)return c}let s=d.value.findIndex(c=>!c.dataRef.disabled);if(s!==-1)return s}return h.value}),activationTrigger:I,optionsPropsRef:p,closeCombobox(){M.value=!1,!l.disabled&&e.value!==1&&(e.value=1,h.value=null)},openCombobox(){if(M.value=!0,!l.disabled&&e.value!==0){if(u.value.value){let s=u.calculateIndex(u.value.value);s!==-1&&(h.value=s)}e.value=0}},setActivationTrigger(s){I.value=s},goToOption(s,c,m){M.value=!1,V!==null&&cancelAnimationFrame(V),V=requestAnimationFrame(()=>{if(l.disabled||f.value&&!p.value.static&&e.value===1)return;if(u.virtual.value){h.value=s===z.Specific?c:re({focus:s},{resolveItems:()=>u.virtual.value.options,resolveActiveIndex:()=>{var T,k;return(k=(T=u.activeOptionIndex.value)!=null?T:u.virtual.value.options.findIndex(j=>{var q;return!((q=u.virtual.value)!=null&&q.disabled(j))}))!=null?k:null},resolveDisabled:T=>u.virtual.value.disabled(T),resolveId(){throw new Error("Function not implemented.")}}),I.value=m??2;return}let g=C();if(g.activeOptionIndex===null){let T=g.options.findIndex(k=>!k.dataRef.disabled);T!==-1&&(g.activeOptionIndex=T)}let E=s===z.Specific?c:re({focus:s},{resolveItems:()=>g.options,resolveActiveIndex:()=>g.activeOptionIndex,resolveId:T=>T.id,resolveDisabled:T=>T.dataRef.disabled});h.value=E,I.value=m??2,d.value=g.options})},selectOption(s){let c=d.value.find(g=>g.id===s);if(!c)return;let{dataRef:m}=c;R(m.value)},selectActiveOption(){if(u.activeOptionIndex.value!==null){if(u.virtual.value)R(u.virtual.value.options[u.activeOptionIndex.value]);else{let{dataRef:s}=d.value[u.activeOptionIndex.value];R(s.value)}u.goToOption(z.Specific,u.activeOptionIndex.value)}},registerOption(s,c){let m=Se({id:s,dataRef:c});if(u.virtual.value){d.value.push(m);return}v&&cancelAnimationFrame(v);let g=C(E=>(E.push(m),E));h.value===null&&u.isSelected(c.value.value)&&(g.activeOptionIndex=g.options.indexOf(m)),d.value=g.options,h.value=g.activeOptionIndex,I.value=2,g.options.some(E=>!O(E.dataRef.domRef))&&(v=requestAnimationFrame(()=>{let E=C();d.value=E.options,h.value=E.activeOptionIndex}))},unregisterOption(s,c){if(V!==null&&cancelAnimationFrame(V),c&&(M.value=!0),u.virtual.value){d.value=d.value.filter(g=>g.id!==s);return}let m=C(g=>{let E=g.findIndex(T=>T.id===s);return E!==-1&&g.splice(E,1),g});d.value=m.options,h.value=m.activeOptionIndex,I.value=2},isSelected(s){return W(P.value,{0:()=>u.compare(_(u.value.value),_(s)),1:()=>_(u.value.value).some(c=>u.compare(_(c),_(s)))})},isActive(s){return h.value===u.calculateIndex(s)}};Oe([a,n,f],()=>u.closeCombobox(),x(()=>e.value===0)),ce(he,u),Ie(x(()=>W(e.value,{0:Q.Open,1:Q.Closed})));let S=x(()=>{var s;return(s=O(a))==null?void 0:s.closest("form")});return le(()=>{N([S],()=>{if(!S.value||l.defaultValue===void 0)return;function s(){u.change(l.defaultValue)}return S.value.addEventListener("reset",s),()=>{var c;(c=S.value)==null||c.removeEventListener("reset",s)}},{immediate:!0})}),()=>{var s,c,m;let{name:g,disabled:E,form:T,...k}=l,j={open:e.value===0,disabled:E,activeIndex:u.activeOptionIndex.value,activeOption:u.activeOptionIndex.value===null?null:u.virtual.value?u.virtual.value.options[(s=u.activeOptionIndex.value)!=null?s:0]:(m=(c=u.options.value[u.activeOptionIndex.value])==null?void 0:c.dataRef.value)!=null?m:null,value:w.value};return X(we,[...g!=null&&w.value!=null?Ae({[g]:w.value}).map(([q,be])=>X(Re,ye({features:Ce.Hidden,key:q,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:T,disabled:E,name:q,value:be}))):[],Y({theirProps:{...t,...ne(k,["by","defaultValue","immediate","modelValue","multiple","nullable","onUpdate:modelValue","virtual"])},ourProps:{},slot:j,slots:r,attrs:t,name:"Combobox"})])}}}),st=U({name:"ComboboxButton",props:{as:{type:[Object,String],default:"button"},id:{type:String,default:null}},setup(l,{attrs:r,slots:t,expose:o}){var e;let i=(e=l.id)!=null?e:`headlessui-combobox-button-${G()}`,a=K("ComboboxButton");o({el:a.buttonRef,$el:a.buttonRef});function n(d){a.disabled.value||(a.comboboxState.value===0?a.closeCombobox():(d.preventDefault(),a.openCombobox()),B(()=>{var h;return(h=O(a.inputRef))==null?void 0:h.focus({preventScroll:!0})}))}function f(d){switch(d.key){case F.ArrowDown:d.preventDefault(),d.stopPropagation(),a.comboboxState.value===1&&a.openCombobox(),B(()=>{var h;return(h=a.inputRef.value)==null?void 0:h.focus({preventScroll:!0})});return;case F.ArrowUp:d.preventDefault(),d.stopPropagation(),a.comboboxState.value===1&&(a.openCombobox(),B(()=>{a.value.value||a.goToOption(z.Last)})),B(()=>{var h;return(h=a.inputRef.value)==null?void 0:h.focus({preventScroll:!0})});return;case F.Escape:if(a.comboboxState.value!==0)return;d.preventDefault(),a.optionsRef.value&&!a.optionsPropsRef.value.static&&d.stopPropagation(),a.closeCombobox(),B(()=>{var h;return(h=a.inputRef.value)==null?void 0:h.focus({preventScroll:!0})});return}}let p=Ee(x(()=>({as:l.as,type:r.type})),a.buttonRef);return()=>{var d,h;let I={open:a.comboboxState.value===0,disabled:a.disabled.value,value:a.value.value},{...M}=l,C={ref:a.buttonRef,id:i,type:p.value,tabindex:"-1","aria-haspopup":"listbox","aria-controls":(d=O(a.optionsRef))==null?void 0:d.id,"aria-expanded":a.comboboxState.value===0,"aria-labelledby":a.labelRef.value?[(h=O(a.labelRef))==null?void 0:h.id,i].join(" "):void 0,disabled:a.disabled.value===!0?!0:void 0,onKeydown:f,onClick:n};return Y({ourProps:C,theirProps:M,slot:I,attrs:r,slots:t,name:"ComboboxButton"})}}}),rt=U({name:"ComboboxInput",props:{as:{type:[Object,String],default:"input"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},displayValue:{type:Function},defaultValue:{type:String,default:void 0},id:{type:String,default:null}},emits:{change:l=>!0},setup(l,{emit:r,attrs:t,slots:o,expose:e}){var i;let a=(i=l.id)!=null?i:`headlessui-combobox-input-${G()}`,n=K("ComboboxInput"),f=x(()=>de(O(n.inputRef))),p={value:!1};e({el:n.inputRef,$el:n.inputRef});function d(){n.change(null);let v=O(n.optionsRef);v&&(v.scrollTop=0),n.goToOption(z.Nothing)}let h=x(()=>{var v;let R=n.value.value;return O(n.inputRef)?typeof l.displayValue<"u"&&R!==void 0?(v=l.displayValue(R))!=null?v:"":typeof R=="string"?R:"":""});le(()=>{N([h,n.comboboxState,f],([v,R],[y,u])=>{if(p.value)return;let S=O(n.inputRef);S&&((u===0&&R===1||v!==y)&&(S.value=v),requestAnimationFrame(()=>{var s;if(p.value||!S||((s=f.value)==null?void 0:s.activeElement)!==S)return;let{selectionStart:c,selectionEnd:m}=S;Math.abs((m??0)-(c??0))===0&&c===0&&S.setSelectionRange(S.value.length,S.value.length)}))},{immediate:!0}),N([n.comboboxState],([v],[R])=>{if(v===0&&R===1){if(p.value)return;let y=O(n.inputRef);if(!y)return;let u=y.value,{selectionStart:S,selectionEnd:s,selectionDirection:c}=y;y.value="",y.value=u,c!==null?y.setSelectionRange(S,s,c):y.setSelectionRange(S,s)}})});let I=A(!1);function M(){I.value=!0}function C(){te().nextFrame(()=>{I.value=!1})}let P=Ye();function $(v){switch(p.value=!0,P(()=>{p.value=!1}),v.key){case F.Enter:if(p.value=!1,n.comboboxState.value!==0||I.value)return;if(v.preventDefault(),v.stopPropagation(),n.activeOptionIndex.value===null){n.closeCombobox();return}n.selectActiveOption(),n.mode.value===0&&n.closeCombobox();break;case F.ArrowDown:return p.value=!1,v.preventDefault(),v.stopPropagation(),W(n.comboboxState.value,{0:()=>n.goToOption(z.Next),1:()=>n.openCombobox()});case F.ArrowUp:return p.value=!1,v.preventDefault(),v.stopPropagation(),W(n.comboboxState.value,{0:()=>n.goToOption(z.Previous),1:()=>{n.openCombobox(),B(()=>{n.value.value||n.goToOption(z.Last)})}});case F.Home:if(v.shiftKey)break;return p.value=!1,v.preventDefault(),v.stopPropagation(),n.goToOption(z.First);case F.PageUp:return p.value=!1,v.preventDefault(),v.stopPropagation(),n.goToOption(z.First);case F.End:if(v.shiftKey)break;return p.value=!1,v.preventDefault(),v.stopPropagation(),n.goToOption(z.Last);case F.PageDown:return p.value=!1,v.preventDefault(),v.stopPropagation(),n.goToOption(z.Last);case F.Escape:if(p.value=!1,n.comboboxState.value!==0)return;v.preventDefault(),n.optionsRef.value&&!n.optionsPropsRef.value.static&&v.stopPropagation(),n.nullable.value&&n.mode.value===0&&n.value.value===null&&d(),n.closeCombobox();break;case F.Tab:if(p.value=!1,n.comboboxState.value!==0)return;n.mode.value===0&&n.activationTrigger.value!==1&&n.selectActiveOption(),n.closeCombobox();break}}function D(v){r("change",v),n.nullable.value&&n.mode.value===0&&v.target.value===""&&d(),n.openCombobox()}function b(v){var R,y,u;let S=(R=v.relatedTarget)!=null?R:ie.find(s=>s!==v.currentTarget);if(p.value=!1,!((y=O(n.optionsRef))!=null&&y.contains(S))&&!((u=O(n.buttonRef))!=null&&u.contains(S))&&n.comboboxState.value===0)return v.preventDefault(),n.mode.value===0&&(n.nullable.value&&n.value.value===null?d():n.activationTrigger.value!==1&&n.selectActiveOption()),n.closeCombobox()}function w(v){var R,y,u;let S=(R=v.relatedTarget)!=null?R:ie.find(s=>s!==v.currentTarget);(y=O(n.buttonRef))!=null&&y.contains(S)||(u=O(n.optionsRef))!=null&&u.contains(S)||n.disabled.value||n.immediate.value&&n.comboboxState.value!==0&&(n.openCombobox(),te().nextFrame(()=>{n.setActivationTrigger(1)}))}let V=x(()=>{var v,R,y,u;return(u=(y=(R=l.defaultValue)!=null?R:n.defaultValue.value!==void 0?(v=l.displayValue)==null?void 0:v.call(l,n.defaultValue.value):null)!=null?y:n.defaultValue.value)!=null?u:""});return()=>{var v,R,y,u,S,s,c;let m={open:n.comboboxState.value===0},{displayValue:g,onChange:E,...T}=l,k={"aria-controls":(v=n.optionsRef.value)==null?void 0:v.id,"aria-expanded":n.comboboxState.value===0,"aria-activedescendant":n.activeOptionIndex.value===null?void 0:n.virtual.value?(R=n.options.value.find(j=>!n.virtual.value.disabled(j.dataRef.value)&&n.compare(j.dataRef.value,n.virtual.value.options[n.activeOptionIndex.value])))==null?void 0:R.id:(y=n.options.value[n.activeOptionIndex.value])==null?void 0:y.id,"aria-labelledby":(s=(u=O(n.labelRef))==null?void 0:u.id)!=null?s:(S=O(n.buttonRef))==null?void 0:S.id,"aria-autocomplete":"list",id:a,onCompositionstart:M,onCompositionend:C,onKeydown:$,onInput:D,onFocus:w,onBlur:b,role:"combobox",type:(c=t.type)!=null?c:"text",tabIndex:0,ref:n.inputRef,defaultValue:V.value,disabled:n.disabled.value===!0?!0:void 0};return Y({ourProps:k,theirProps:T,slot:m,attrs:t,slots:o,features:Z.RenderStrategy|Z.Static,name:"ComboboxInput"})}}}),ut=U({name:"ComboboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},hold:{type:[Boolean],default:!1}},setup(l,{attrs:r,slots:t,expose:o}){let e=K("ComboboxOptions"),i=`headlessui-combobox-options-${G()}`;o({el:e.optionsRef,$el:e.optionsRef}),H(()=>{e.optionsPropsRef.value.static=l.static}),H(()=>{e.optionsPropsRef.value.hold=l.hold});let a=Te(),n=x(()=>a!==null?(a.value&Q.Open)===Q.Open:e.comboboxState.value===0);Qe({container:x(()=>O(e.optionsRef)),enabled:x(()=>e.comboboxState.value===0),accept(p){return p.getAttribute("role")==="option"?NodeFilter.FILTER_REJECT:p.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(p){p.setAttribute("role","none")}});function f(p){p.preventDefault()}return()=>{var p,d,h;let I={open:e.comboboxState.value===0},M={"aria-labelledby":(h=(p=O(e.labelRef))==null?void 0:p.id)!=null?h:(d=O(e.buttonRef))==null?void 0:d.id,id:i,ref:e.optionsRef,role:"listbox","aria-multiselectable":e.mode.value===1?!0:void 0,onMousedown:f},C=ne(l,["hold"]);return Y({ourProps:M,theirProps:C,slot:I,attrs:r,slots:e.virtual.value&&e.comboboxState.value===0?{...t,default:()=>[X(nt,{},t.default)]}:t,features:Z.RenderStrategy|Z.Static,visible:n.value,name:"ComboboxOptions"})}}}),dt=U({name:"ComboboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1},order:{type:[Number],default:null}},setup(l,{slots:r,attrs:t,expose:o}){let e=K("ComboboxOption"),i=`headlessui-combobox-option-${G()}`,a=A(null),n=x(()=>l.disabled);o({el:a,$el:a});let f=x(()=>{var b;return e.virtual.value?e.activeOptionIndex.value===e.calculateIndex(l.value):e.activeOptionIndex.value===null?!1:((b=e.options.value[e.activeOptionIndex.value])==null?void 0:b.id)===i}),p=x(()=>e.isSelected(l.value)),d=ve(me,null),h=x(()=>({disabled:l.disabled,value:l.value,domRef:a,order:x(()=>l.order)}));le(()=>e.registerOption(i,h)),ue(()=>e.unregisterOption(i,f.value)),H(()=>{let b=O(a);b&&(d==null||d.value.measureElement(b))}),H(()=>{e.comboboxState.value===0&&f.value&&(e.virtual.value||e.activationTrigger.value!==0&&B(()=>{var b,w;return(w=(b=O(a))==null?void 0:b.scrollIntoView)==null?void 0:w.call(b,{block:"nearest"})}))});function I(b){b.preventDefault(),b.button===pe.Left&&(n.value||(e.selectOption(i),De()||requestAnimationFrame(()=>{var w;return(w=O(e.inputRef))==null?void 0:w.focus({preventScroll:!0})}),e.mode.value===0&&e.closeCombobox()))}function M(){var b;if(l.disabled||(b=e.virtual.value)!=null&&b.disabled(l.value))return e.goToOption(z.Nothing);let w=e.calculateIndex(l.value);e.goToOption(z.Specific,w)}let C=Je();function P(b){C.update(b)}function $(b){var w;if(!C.wasMoved(b)||l.disabled||(w=e.virtual.value)!=null&&w.disabled(l.value)||f.value)return;let V=e.calculateIndex(l.value);e.goToOption(z.Specific,V,0)}function D(b){var w;C.wasMoved(b)&&(l.disabled||(w=e.virtual.value)!=null&&w.disabled(l.value)||f.value&&(e.optionsPropsRef.value.hold||e.goToOption(z.Nothing)))}return()=>{let{disabled:b}=l,w={active:f.value,selected:p.value,disabled:b},V={id:i,ref:a,role:"option",tabIndex:b===!0?void 0:-1,"aria-disabled":b===!0?!0:void 0,"aria-selected":p.value,disabled:void 0,onMousedown:I,onFocus:M,onPointerenter:P,onMouseenter:P,onPointermove:$,onMousemove:$,onPointerleave:D,onMouseleave:D},v=ne(l,["order","value"]);return Y({ourProps:V,theirProps:v,slot:w,attrs:t,slots:r,name:"ComboboxOption"})}}});export{Je as a,z as c,re as f,rt as i,at as l,st as n,dt as r,ut as u};
