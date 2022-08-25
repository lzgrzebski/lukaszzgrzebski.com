import{r as S,a as v,j}from"../../chunk-e01411ca.js";import{T as B}from"../../chunk-54a7b622.js";import"../../chunk-17908734.js";function T(r,d){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,s){return t.__proto__=s,t},T(r,d)}function M(r,d){r.prototype=Object.create(d.prototype),r.prototype.constructor=r,T(r,d)}var P=function(d,p){return d===void 0&&(d=[]),p===void 0&&(p=[]),d.length!==p.length||d.some(function(t,s){return!Object.is(t,p[s])})},x={error:null},R=function(r){M(d,r);function d(){for(var t,s=arguments.length,e=new Array(s),c=0;c<s;c++)e[c]=arguments[c];return t=r.call.apply(r,[this].concat(e))||this,t.state=x,t.resetErrorBoundary=function(){for(var o,n=arguments.length,l=new Array(n),u=0;u<n;u++)l[u]=arguments[u];t.props.onReset==null||(o=t.props).onReset.apply(o,l),t.reset()},t}d.getDerivedStateFromError=function(s){return{error:s}};var p=d.prototype;return p.reset=function(){this.setState(x)},p.componentDidCatch=function(s,e){var c,o;(c=(o=this.props).onError)==null||c.call(o,s,e)},p.componentDidUpdate=function(s,e){var c=this.state.error,o=this.props.resetKeys;if(c!==null&&e.error!==null&&P(s.resetKeys,o)){var n,l;(n=(l=this.props).onResetKeysChange)==null||n.call(l,s.resetKeys,o),this.reset()}},p.render=function(){var s=this.state.error,e=this.props,c=e.fallbackRender,o=e.FallbackComponent,n=e.fallback;if(s!==null){var l={error:s,resetErrorBoundary:this.resetErrorBoundary};if(S.exports.isValidElement(n))return n;if(typeof c=="function")return c(l);if(o)return v(o,{...l});throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop")}return this.props.children},d}(S.exports.Component);const F=r=>r&&r.kind==="video",z=()=>{const r=S.exports.useRef(null);return S.exports.useEffect(()=>{const t=new AbortController,s=new OffscreenCanvas(640,480),e=s.getContext("2d");return navigator.mediaDevices.getUserMedia({video:{height:480,width:640}}).then(c=>{const o=t.signal,[n]=c.getVideoTracks();if(F(n)){const l=new MediaStreamTrackProcessor({track:n}),u=new MediaStreamTrackGenerator({kind:"video"});l.readable.pipeThrough(new TransformStream({transform:async(h,f)=>{var y;e==null||e.drawImage(h,0,0);const i=e==null?void 0:e.getImageData(0,0,640,480);if(!i)return;A(i,640,480),e==null||e.putImageData(i,0,0),h.close();const w=(y=h.timestamp)!=null?y:0;f.enqueue(new VideoFrame(s,{timestamp:w}))}}),{signal:o}).pipeTo(u.writable,{signal:o}).catch(h=>{console.error(h)});const b=new MediaStream([u]);r.current&&(r.current.srcObject=b)}}),()=>{var o;t.abort("Cleanup");const c=(o=r.current)==null?void 0:o.srcObject;c&&c.getTracks().forEach(n=>n.stop())}},[]),v("video",{autoPlay:!0,muted:!0,ref:r,style:{display:"block",height:"100vh",objectFit:"cover",width:"100vw"}})},A=(r,d,p)=>{var s,e,c;const t=(o,n)=>(o+n*d)*4;for(let o=0;o<p;o++)for(let n=0;n<d;n++){const l=t(n,o),u=(s=r==null?void 0:r.data[l])!=null?s:0,b=(e=r==null?void 0:r.data[l+1])!=null?e:0,h=(c=r==null?void 0:r.data[l+2])!=null?c:0,f=1,i=Math.round(f*u/255)*(255/f),w=Math.round(f*b/255)*(255/f),y=Math.round(f*h/255)*(255/f);r.data[l]=i,r.data[l+1]=w,r.data[l+2]=y;const k=u-i,E=b-w,O=h-y;r.data[t(n+1,o)]=(r==null?void 0:r.data[t(n+1,o)])+k*7/16,r.data[t(n+1,o)+1]=(r==null?void 0:r.data[t(n+1,o)+1])+E*7/16,r.data[t(n+1,o)+2]=(r==null?void 0:r.data[t(n+1,o)+1])+O*7/16,r.data[t(n-1,o+1)]=(r==null?void 0:r.data[t(n-1,o+1)])+k*3/16,r.data[t(n-1,o+1)+1]=(r==null?void 0:r.data[t(n-1,o+1)+1])+E*3/16,r.data[t(n-1,o+1)+2]=(r==null?void 0:r.data[t(n-1,o+1)+1])+O*3/16,r.data[t(n,o+1)]=(r==null?void 0:r.data[t(n,o+1)])+k*5/16,r.data[t(n,o+1)+1]=(r==null?void 0:r.data[t(n,o+1)+1])+E*5/16,r.data[t(n,o+1)+2]=(r==null?void 0:r.data[t(n,o+1)+1])+O*5/16,r.data[t(n+1,o+1)]=(r==null?void 0:r.data[t(n+1,o+1)])+k*1/16,r.data[t(n+1,o+1)+1]=(r==null?void 0:r.data[t(n+1,o+1)+1])+E*1/16,r.data[t(n+1,o+1)+2]=(r==null?void 0:r.data[t(n+1,o+1)+1])+O*1/16}},G=()=>v(R,{fallbackRender:r=>j(B,{children:[j("p",{children:["Was a bit lazy to get it working without MediaTrackGenerator and OffscreenCanvas.",v("br",{}),"Best to check it in chrome before I make it backward compatible ;)"," "]}),v("code",{children:r.error.toString()})]}),children:v(z,{})}),C={Page:G};export{C as default};
