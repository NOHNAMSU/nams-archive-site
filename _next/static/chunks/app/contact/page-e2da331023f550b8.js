(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[977],{1487:(e,t,a)=>{"use strict";a.d(t,{dt:()=>n,eP:()=>s,t1:()=>r});let n=[{id:"gentlemonster-pocket",title:"포켓 X 젠틀 몬스터",categories:["uiux","web"],categoryLabel:"UI/UX",year:2026,image:"/assets/projects/gentlemonster-pocket/motion-poster.webp",workImage:"/assets/projects/work/pocket-device-mockup-1600.webp",workImageSrcSet:"/assets/projects/work/pocket-device-mockup-960.webp 960w, /assets/projects/work/pocket-device-mockup-1600.webp 1600w",poster:"/assets/projects/gentlemonster-pocket/motion-poster.webp",video:"/assets/projects/gentlemonster-pocket/persona-lab-1920x1080.mp4",slug:"gentlemonster-pocket",status:"published",summary:"POCKET COLLECTION을 중심으로 구성한 웹 리디자인과 모션 쇼잉입니다."},{id:"for-me",title:"FOR ME",categories:["uiux"],categoryLabel:"UI/UX",year:2026,image:"/assets/projects/for-me-cover-20261022.webp",workImage:"/assets/projects/work/for-me-device-mockup-1600.webp",workImageSrcSet:"/assets/projects/work/for-me-device-mockup-960.webp 960w, /assets/projects/work/for-me-device-mockup-1600.webp 1600w",externalUrl:"https://for-me-c67.pages.dev/",status:"published",summary:"내 옷과 하루의 상황을 연결하는 스마트 드레싱 UIUX 프로젝트입니다."},{id:"yohji-yamamoto-redesign",title:"요지 야마모토 리디자인",categories:["uiux"],categoryLabel:"UI/UX",year:null,image:null,summary:null,status:"draft"},{id:"sky-garden",title:"하늘정원",categories:["3d"],categoryLabel:"3D",year:null,image:null,summary:null,status:"draft"},{id:"pop-ing",title:"POP-ING",categories:["uiux","3d"],categoryLabel:"UI/UX / 3D",year:null,image:null,summary:null,status:"draft"},{id:"ten-storytelling",title:"10 Storytelling",categories:["uiux"],categoryLabel:"UI/UX",year:null,image:null,summary:null,status:"draft"}],s=[{id:"all",label:"All"},{id:"uiux",label:"UI/UX"},{id:"web",label:"Web"},{id:"branding",label:"Branding"},{id:"3d",label:"3D"}];function r(e){var t;return null!=(t=n.find(t=>t.id===e))?t:n[0]}},2865:(e,t,a)=>{"use strict";a.d(t,{ProjectSelectionProvider:()=>c,v:()=>o});var n=a(5155),s=a(2115),r=a(63),l=a(1487);let i=(0,s.createContext)(null);function c(e){let{children:t}=e,a=(0,r.useRouter)(),c=(0,r.usePathname)(),[o,d]=(0,s.useState)(l.dt[0].id),[m,u]=(0,s.useState)("all"),[h,b]=(0,s.useState)("latest");(0,s.useEffect)(()=>{function e(){let e=new URLSearchParams(window.location.search);if(d((0,l.t1)(e.get("project")).id),"/work"===window.location.pathname){let t=e.get("category");u(l.eP.some(e=>e.id===t)?t:"all"),b("original"===e.get("order")?"original":"latest")}}return e(),window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)},[c]);let p=(0,s.useCallback)((e,t,a)=>{let n=new URL(window.location.href);t===a?n.searchParams.delete(e):n.searchParams.set(e,t),n.href!==window.location.href&&window.history.pushState({},"",n)},[]),f=(0,s.useCallback)((e,t)=>{let n=(0,l.t1)(e);d(n.id),t?a.push("".concat(t,"?").concat(new URLSearchParams({project:n.id}))):p("project",n.id)},[a,p]),j=(0,s.useCallback)(e=>{let t=(0,l.t1)(e);d(t.id);let a=new URL(window.location.href);a.searchParams.set("project",t.id),window.history.replaceState(window.history.state,"",a)},[]),x=(0,s.useCallback)(e=>{u(e),p("category",e,"all")},[p]),g=(0,s.useCallback)(e=>{b(e),p("order",e,"latest")},[p]),_=(0,s.useCallback)(e=>{let t=new URLSearchParams({project:o});return"/work"===e&&("all"!==m&&t.set("category",m),"latest"!==h&&t.set("order",h)),"".concat(e,"?").concat(t)},[o,m,h]),w=(0,s.useMemo)(()=>({project:(0,l.t1)(o),category:m,order:h,selectProject:f,rememberProject:j,setCategory:x,setOrder:g,hrefFor:_}),[o,m,h,f,j,x,g,_]);return(0,n.jsx)(i.Provider,{value:w,children:t})}function o(){let e=(0,s.useContext)(i);if(!e)throw Error("ProjectSelectionProvider is required");return e}},4463:(e,t,a)=>{"use strict";a.d(t,{ContactContent:()=>v});var n=a(5155),s=a(2115),r=a(2619),l=a.n(r),i=a(2865);let c={email:"jujono2@gmail.com",phone:"010-5177-8426",phoneHref:"tel:+821051778426"},o={eyebrow:"04/CONTACT",heading:"함께 이야기해요.",introduction:["프로젝트 협업, 작업 의뢰, 또는 가벼운 문의까지 언제든 편하게 연락 주세요.","좋은 아이디어와 멋진 프로젝트를 함께 만들어가는 것을 늘 환영합니다."],methods:[{id:"email",title:"이메일",lines:["프로젝트 제안, 협업 문의 등","자세한 이야기를 보내주세요."],label:"메일 보내기",href:"mailto:".concat(c.email),accessibleLabel:"".concat(c.email,"으로 이메일 보내기")},{id:"instagram",title:"인스타그램",lines:["작업 소식과 일상의 기록을","가장 빠르게 만나보실 수 있어요."],label:"프로필 준비 중",href:null,accessibleLabel:"인스타그램 프로필 준비 중"},{id:"phone",title:"전화",lines:["작업 일정이나 급한 문의는","전화로 이야기해 주세요."],label:c.phone,href:c.phoneHref,accessibleLabel:"".concat(c.phone,"으로 전화 걸기")}]},d={name:80,email:254,subject:120,message:3e3,website:200},m={name:"",email:"",subject:"",message:"",website:""},u={name:"이름",email:"이메일",subject:"제목",message:"메시지"},h=/[\u0000-\u001f\u007f]/u;function b(e){let t={name:e.name.trim(),email:e.email.trim(),subject:e.subject.trim(),message:e.message.replace(/\r\n?/gu,"\n").trim(),website:e.website.trim()},a={};for(let e of Object.keys(u))t[e]?t[e].length>d[e]&&(a[e]="".concat(u[e],"은 ").concat(d[e],"자 이내로 입력해 주세요.")):a[e]="".concat(u[e]).concat("message"===e?"를":"을"," 입력해 주세요.");return t.name&&h.test(t.name)&&(a.name="이름을 한 줄로 입력해 주세요."),t.subject&&h.test(t.subject)&&(a.subject="제목을 한 줄로 입력해 주세요."),t.email&&(h.test(t.email)||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/u.test(t.email))&&(a.email="올바른 이메일 주소를 입력해 주세요."),t.message.includes("\0")&&(a.message="메시지에 사용할 수 없는 문자가 있습니다."),{values:t,errors:a,valid:!t.website&&0===Object.keys(a).length,formError:t.website?"요청을 처리할 수 없습니다. 입력 내용을 확인해 주세요.":null}}var p=a(7595),f=a.n(p);function j(e){let{name:t}=e;return(0,n.jsxs)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:["email"===t&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("path",{d:"M2 6h28v21H2z"}),(0,n.jsx)("path",{d:"m2 6 14 12L30 6"})]}),"instagram"===t&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("rect",{x:"1",y:"1",width:"30",height:"30",rx:"7"}),(0,n.jsx)("circle",{cx:"16",cy:"16",r:"6"}),(0,n.jsx)("circle",{cx:"25",cy:"7",r:"1",fill:"currentColor",stroke:"none"})]}),"phone"===t&&(0,n.jsx)("path",{d:"m8 2 5 7-4 4c2 5 5 8 10 10l4-4 7 5-3 6C13 31 1 19 2 5Z"})]})}function x(){return(0,n.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5","aria-hidden":"true",children:(0,n.jsx)("path",{d:"M3 12h18m-8-8 8 8-8 8"})})}function g(){return(0,n.jsx)("div",{className:f().methods,"aria-label":"연락 방법",children:o.methods.map(e=>(0,n.jsxs)("article",{className:f().method,children:[(0,n.jsx)("span",{className:f().methodIcon,children:(0,n.jsx)(j,{name:e.id})}),(0,n.jsxs)("div",{className:f().methodContent,children:[(0,n.jsx)("h2",{children:e.title}),(0,n.jsxs)("p",{children:[e.lines[0],(0,n.jsx)("br",{}),e.lines[1]]}),e.href?(0,n.jsxs)("a",{href:e.href,"aria-label":e.accessibleLabel,title:"email"===e.id?c.email:c.phone,children:[e.label,(0,n.jsx)("span",{"aria-hidden":"true",children:" ↗"})]}):(0,n.jsxs)("span",{className:f().unavailable,"aria-label":e.accessibleLabel,children:[e.label,(0,n.jsx)("span",{"aria-hidden":"true",children:" ↗"})]})]})]},e.id))})}let _=[{name:"name",label:"이름",type:"text",autoComplete:"name"},{name:"email",label:"이메일",type:"email",autoComplete:"email"},{name:"subject",label:"제목",type:"text",autoComplete:"off"},{name:"message",label:"메시지",type:"text",autoComplete:"off"}];function w(){let[e,t]=(0,s.useState)(m),[a,r]=(0,s.useState)({}),[l,i]=(0,s.useState)(!1),[o,u]=(0,s.useState)("전송 서버 대신 메일 앱에서 초안을 엽니다. 메일은 직접 보내 주세요."),[h,p]=(0,s.useState)(null),j=(0,s.useRef)(!1),x=(0,s.useRef)(null);function g(e,a){t(t=>({...t,[e]:a})),"website"!==e&&r(t=>({...t,[e]:void 0})),p(null)}return(0,s.useEffect)(()=>()=>{x.current&&clearTimeout(x.current)},[]),(0,n.jsxs)("form",{className:f().form,onSubmit:function(a){if(a.preventDefault(),j.current)return;let n=a.currentTarget,s=b(e);if(r(s.errors),t(s.values),p(s.formError),!s.valid){var l;u("입력 내용을 확인해 주세요. 메일 초안은 아직 열리지 않았습니다.");let e=_.find(e=>s.errors[e.name]);e&&(null==(l=n.querySelector('[name="'.concat(e.name,'"]')))||l.focus());return}let o=function(e){let t=b(e);if(!t.valid)return null;let{name:a,email:n,subject:s,message:r}=t.values,l="이름: ".concat(a,"\n이메일: ").concat(n,"\n\n").concat(r);return"mailto:".concat(c.email,"?subject=").concat(encodeURIComponent(s),"&body=").concat(encodeURIComponent(l))}(s.values);if(o){j.current=!0,i(!0);try{window.location.assign(o),u("메일 앱이 열리면 내용을 확인하고 직접 보내 주세요. 이 화면에서는 메일이 발송되지 않습니다.")}catch(e){p("메일 앱을 열지 못했습니다. 위의 이메일 링크를 이용해 주세요.")}finally{x.current=setTimeout(()=>{j.current=!1,i(!1)},600)}}},noValidate:!0,"aria-label":"프로젝트 문의","aria-describedby":"contact-form-status",children:[(0,n.jsxs)("div",{className:f().honeypot,"aria-hidden":"true",children:[(0,n.jsx)("label",{htmlFor:"contact-website",children:"웹사이트"}),(0,n.jsx)("input",{id:"contact-website",name:"website",value:e.website,onChange:e=>g("website",e.target.value),autoComplete:"off",tabIndex:-1,maxLength:d.website})]}),_.map(t=>(0,n.jsxs)("div",{className:"".concat(f().field," ").concat("name"===t.name||"email"===t.name?"":f().fullWidth),children:[(0,n.jsx)("label",{className:f().visuallyHidden,htmlFor:"contact-".concat(t.name),children:t.label}),"message"===t.name?(0,n.jsx)("textarea",{id:"contact-".concat(t.name),name:t.name,placeholder:"".concat(t.label," *"),required:!0,maxLength:d[t.name],value:e[t.name],onChange:e=>g(t.name,e.target.value),"aria-invalid":!!a[t.name],"aria-describedby":a[t.name]?"contact-".concat(t.name,"-error"):void 0,rows:4}):(0,n.jsx)("input",{id:"contact-".concat(t.name),name:t.name,type:t.type,placeholder:"".concat(t.label," *"),required:!0,maxLength:d[t.name],autoComplete:t.autoComplete,value:e[t.name],onChange:e=>g(t.name,e.target.value),"aria-invalid":!!a[t.name],"aria-describedby":a[t.name]?"contact-".concat(t.name,"-error"):void 0}),a[t.name]&&(0,n.jsx)("span",{id:"contact-".concat(t.name,"-error"),className:f().fieldError,children:a[t.name]})]},t.name)),(0,n.jsxs)("button",{className:f().submit,type:"submit",disabled:l,children:[l?"메일 초안 여는 중…":"메일 앱에서 보내기",(0,n.jsx)("span",{"aria-hidden":"true",children:" ↗"})]}),(0,n.jsx)("p",{id:"contact-form-status",className:f().formStatus,role:"status","aria-live":"polite",children:o}),h&&(0,n.jsx)("p",{className:f().formError,role:"alert",children:h})]})}function y(){let{hrefFor:e}=(0,i.v)();return(0,n.jsxs)("aside",{className:f().sidebar,"aria-label":"문의 안내와 빠른 링크",children:[(0,n.jsxs)("div",{className:f().note,children:[(0,n.jsx)("span",{className:f().noteDash,"aria-hidden":"true"}),(0,n.jsxs)("div",{className:f().noteCopy,children:[(0,n.jsxs)("p",{children:["지금 생각하고 있는 프로젝트가 있다면,",(0,n.jsx)("br",{}),"부담 없이 이야기해 주세요."]}),(0,n.jsxs)("p",{children:["작은 아이디어라도 좋아요.",(0,n.jsx)("br",{}),"함께 정리하고, 더 좋은 방향으로",(0,n.jsx)("br",{}),"발전시켜 나가요. :)"]})]})]}),(0,n.jsxs)("nav",{className:f().quickLinks,"aria-label":"빠른 링크",children:[(0,n.jsx)("h2",{children:"QUICK LINKS"}),(0,n.jsxs)("div",{className:f().quickList,children:[(0,n.jsxs)(l(),{href:e("/work"),children:["포트폴리오 보기",(0,n.jsx)(x,{})]}),(0,n.jsxs)("button",{type:"button",disabled:!0,title:"이력서 PDF가 아직 제공되지 않았습니다.",children:["이력서 보기 (PDF)",(0,n.jsx)("span",{className:f().preparing,children:"준비 중"}),(0,n.jsx)(x,{})]}),(0,n.jsxs)("button",{type:"button",disabled:!0,title:"자주 묻는 질문의 내용이 아직 제공되지 않았습니다.",children:["자주 묻는 질문",(0,n.jsx)("span",{className:f().preparing,children:"준비 중"}),(0,n.jsx)(x,{})]})]})]})]})}function v(){return(0,n.jsxs)("div",{className:f().content,children:[(0,n.jsxs)("section",{className:f().main,"aria-labelledby":"contact-heading",children:[(0,n.jsx)("p",{className:f().eyebrow,children:o.eyebrow}),(0,n.jsx)("h1",{id:"contact-heading",className:f().heading,children:o.heading}),(0,n.jsxs)("p",{className:f().introduction,children:[o.introduction[0],(0,n.jsx)("br",{}),o.introduction[1]]}),(0,n.jsx)(g,{}),(0,n.jsx)(w,{})]}),(0,n.jsx)(y,{})]})}},4716:(e,t,a)=>{Promise.resolve().then(a.bind(a,4463)),Promise.resolve().then(a.bind(a,5399))},5399:(e,t,a)=>{var module={exports:{}};var exports=module.exports;function require(name){if(name==="react")return a(2115);if(name==="react/jsx-runtime")return a(5155);if(name==="nams-selection")return{useProjectSelection:a(2865).v};if(name==="nams-projects")return{projects:a(1487).dt};if(name==="nams-navigation")return{usePathname:a(63).usePathname};if(name==="nams-link")return a.n(a(2619))();throw Error("Unexpected dependency: "+name)}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// outputs/nams-archive/design/SiteShell.jsx
var SiteShell_exports = {};
__export(SiteShell_exports, {
  AboutPage: () => AboutPage,
  ContactPage: () => ContactPage,
  PageFrame: () => PageFrame,
  SiteHeader: () => SiteHeader,
  SiteShell: () => SiteShell,
  WorkPage: () => WorkPage
});
module.exports = __toCommonJS(SiteShell_exports);
var import_react6 = __toESM(require("react"), 1);
var import_nams_link2 = __toESM(require("nams-link"), 1);
var import_nams_navigation = require("nams-navigation");
var import_nams_selection2 = require("nams-selection");

// outputs/nams-archive/design/SiteControls.jsx
var import_react4 = __toESM(require("react"), 1);

// outputs/nams-archive/design/ThemeControls.jsx
var import_react3 = __toESM(require("react"), 1);

// outputs/nams-archive/design/use-theme.js
var import_react = require("react");
function useTheme() {
  const [theme, setTheme] = (0, import_react.useState)("dark");
  (0, import_react.useEffect)(() => {
    const sync = () => {
      let mode;
      try {
        mode = window.NamsTheme?.get();
      } catch {
      }
      if (mode !== "dark" && mode !== "light") mode = document.documentElement.dataset.theme;
      setTheme(mode === "light" ? "light" : "dark");
    };
    window.addEventListener("nams:themechange", sync);
    sync();
    return () => window.removeEventListener("nams:themechange", sync);
  }, []);
  const chooseTheme = (mode, event) => {
    if (mode !== "dark" && mode !== "light") return;
    if (typeof window.NamsTheme?.set === "function") {
      try {
        window.NamsTheme.set(mode, event);
        return;
      } catch {
      }
    }
    document.documentElement.dataset.theme = mode;
    try {
      window.localStorage.setItem("nams-hero-theme", mode);
    } catch {
    }
    window.dispatchEvent(new window.CustomEvent("nams:themechange", { detail: { theme: mode } }));
  };
  return { theme, chooseTheme };
}

// outputs/nams-archive/design/use-locale.js
var import_react2 = require("react");
var localeNames = { ko: "\uD55C\uAD6D\uC5B4", ja: "\u65E5\u672C\u8A9E", en: "English" };
var uiCopy = {
  ko: { language: "\uC5B8\uC5B4 \uC120\uD0DD", appearance: "\uD654\uBA74 \uBAA8\uB4DC", dark: "\uB2E4\uD06C \uBAA8\uB4DC", light: "\uD654\uC774\uD2B8 \uBAA8\uB4DC", switchDark: "\uB2E4\uD06C \uBAA8\uB4DC\uB85C \uC804\uD658", switchLight: "\uD654\uC774\uD2B8 \uBAA8\uB4DC\uB85C \uC804\uD658", navigation: "\uC8FC\uC694 \uBA54\uB274", home: "NAMS ARCHIVE \uBA54\uC778", skip: "\uBCF8\uBB38\uC73C\uB85C \uAC74\uB108\uB6F0\uAE30", screen: "\uC791\uD488 \uC0C1\uC601\uAD00", view: "\uD504\uB85C\uC81D\uD2B8 \uBCF4\uAE30", motion: "\uBAA8\uC158", failed: "\uC791\uD488 \uBBF8\uB514\uC5B4\uB97C \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.", instructions: "\uD654\uBA74\uC744 \uD074\uB9AD\uD558\uAC70\uB098 \uC2A4\uD06C\uB864\uD558\uACE0, \uC88C\uC6B0\uB85C \uC2A4\uC640\uC774\uD504\uD558\uAC70\uB098 \uBC29\uD5A5\uD0A4\uB97C \uB20C\uB7EC \uC791\uD488\uC744 \uC774\uB3D9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC2A4\uD398\uC774\uC2A4 \uD0A4\uB85C \uC601\uC0C1\uC744 \uC815\uC9C0\uD558\uAC70\uB098 \uC7AC\uC0DD\uD569\uB2C8\uB2E4." },
  ja: { language: "\u8A00\u8A9E\u3092\u9078\u629E", appearance: "\u8868\u793A\u30E2\u30FC\u30C9", dark: "\u30C0\u30FC\u30AF\u30E2\u30FC\u30C9", light: "\u30E9\u30A4\u30C8\u30E2\u30FC\u30C9", switchDark: "\u30C0\u30FC\u30AF\u30E2\u30FC\u30C9\u306B\u5207\u308A\u66FF\u3048", switchLight: "\u30E9\u30A4\u30C8\u30E2\u30FC\u30C9\u306B\u5207\u308A\u66FF\u3048", navigation: "\u30E1\u30A4\u30F3\u30E1\u30CB\u30E5\u30FC", home: "NAMS ARCHIVE \u30DB\u30FC\u30E0", skip: "\u672C\u6587\u3078\u30B9\u30AD\u30C3\u30D7", screen: "\u4F5C\u54C1\u30AE\u30E3\u30E9\u30EA\u30FC", view: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u898B\u308B", motion: "\u30E2\u30FC\u30B7\u30E7\u30F3", failed: "\u4F5C\u54C1\u306E\u30E1\u30C7\u30A3\u30A2\u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F\u3002", instructions: "\u753B\u9762\u306E\u30AF\u30EA\u30C3\u30AF\u3001\u30B9\u30AF\u30ED\u30FC\u30EB\u3001\u5DE6\u53F3\u3078\u306E\u30B9\u30EF\u30A4\u30D7\u3001\u307E\u305F\u306F\u77E2\u5370\u30AD\u30FC\u3067\u4F5C\u54C1\u3092\u5207\u308A\u66FF\u3048\u3089\u308C\u307E\u3059\u3002\u30B9\u30DA\u30FC\u30B9\u30AD\u30FC\u3067\u52D5\u753B\u3092\u4E00\u6642\u505C\u6B62\u30FB\u518D\u751F\u3057\u307E\u3059\u3002" },
  en: { language: "Choose language", appearance: "Appearance", dark: "Dark mode", light: "Light mode", switchDark: "Switch to dark mode", switchLight: "Switch to light mode", navigation: "Main navigation", home: "NAMS ARCHIVE home", skip: "Skip to content", screen: "Project cinema", view: "View project", motion: "motion", failed: "The project media could not be loaded.", instructions: "Click, scroll, swipe left or right, or use the arrow keys to move between projects. Press Space to pause or play the video." }
};
function useLocale() {
  const [locale, setLocale] = (0, import_react2.useState)("ko");
  (0, import_react2.useEffect)(() => {
    const sync = () => setLocale(window.NamsLocale?.get() || "ko");
    sync();
    window.addEventListener("nams:localechange", sync);
    return () => window.removeEventListener("nams:localechange", sync);
  }, []);
  const chooseLocale = (0, import_react2.useCallback)((next) => window.NamsLocale?.set(next), []);
  return { locale, chooseLocale, copy: uiCopy[locale] };
}

// outputs/nams-archive/design/ThemeControls.jsx
var import_jsx_runtime = require("react/jsx-runtime");
function ThemeControls({ className = "", compact = false }) {
  const { theme, chooseTheme } = useTheme();
  const { copy: copy2 } = useLocale();
  if (compact) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "button",
    {
      className: "appearance-toggle",
      type: "button",
      "aria-label": theme === "dark" ? copy2.switchLight : copy2.switchDark,
      title: theme === "dark" ? copy2.switchLight : copy2.switchDark,
      onClick: (event) => chooseTheme(theme === "dark" ? "light" : "dark", event),
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", focusable: "false", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3.5 3.5h17v17h-17z", stroke: "currentColor", strokeWidth: "1.5" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 4 4 20h16V4Z", fill: "currentColor" })
      ] })
    }
  );
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className, role: "group", "aria-label": copy2.appearance, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "button",
      {
        className: "theme-choice",
        type: "button",
        "data-mode": "dark",
        "aria-pressed": theme === "dark",
        "aria-label": copy2.dark,
        onClick: (event) => chooseTheme("dark", event),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20.8 13.1A9 9 0 0 1 10.9 3.2A9 9 0 1 0 20.8 13.1Z", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Dark" })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "button",
      {
        className: "theme-choice",
        type: "button",
        "data-mode": "light",
        "aria-pressed": theme === "light",
        "aria-label": copy2.light,
        onClick: (event) => chooseTheme("light", event),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", focusable: "false", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "12", cy: "12", r: "4", stroke: "currentColor", strokeWidth: "1.5" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2V4M12 20V22M2 12H4M20 12H22M4.9 4.9L6.3 6.3M17.7 17.7L19.1 19.1M4.9 19.1L6.3 17.7M17.7 6.3L19.1 4.9", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "White" })
        ]
      }
    )
  ] });
}

// outputs/nams-archive/design/SiteControls.jsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var languages = ["ja", "ko", "en"];
function SiteControls() {
  const { locale, chooseLocale, copy: copy2 } = useLocale();
  const [open, setOpen] = (0, import_react4.useState)(false);
  const root = (0, import_react4.useRef)(null);
  const trigger = (0, import_react4.useRef)(null);
  const menu = (0, import_react4.useRef)(null);
  (0, import_react4.useEffect)(() => {
    if (!open) return;
    const dismiss = (event) => {
      if (!root.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener("pointerdown", dismiss);
    menu.current?.querySelector('[aria-checked="true"]')?.focus();
    return () => document.removeEventListener("pointerdown", dismiss);
  }, [open]);
  const close = () => {
    setOpen(false);
    trigger.current?.focus();
  };
  const onKeyDown = (event) => {
    if (event.key === "Escape" && open) {
      event.preventDefault();
      close();
      return;
    }
    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    if (!open) {
      setOpen(true);
      return;
    }
    const options = [...menu.current.querySelectorAll('[role="menuitemradio"]')];
    const index = options.indexOf(document.activeElement);
    const next = event.key === "Home" ? 0 : event.key === "End" ? options.length - 1 : (index + (event.key === "ArrowDown" ? 1 : -1) + options.length) % options.length;
    options[next]?.focus();
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "site-utilities", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      "div",
      {
        className: "language-picker",
        ref: root,
        onKeyDown,
        onBlur: (event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
            "button",
            {
              ref: trigger,
              className: "language-trigger",
              type: "button",
              "aria-label": copy2.language,
              "aria-haspopup": "menu",
              "aria-expanded": open,
              "aria-controls": "archive-language-menu",
              onClick: () => setOpen((value) => !value),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { lang: locale, children: localeNames[locale] }),
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("svg", { width: "12", height: "12", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "m4 6 4 4 4-4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
              ]
            }
          ),
          open && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "language-menu", id: "archive-language-menu", role: "menu", "aria-label": copy2.language, ref: menu, children: languages.map((value) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "button",
            {
              type: "button",
              role: "menuitemradio",
              "aria-checked": locale === value,
              lang: value,
              onClick: () => {
                chooseLocale(value);
                close();
              },
              children: localeNames[value]
            },
            value
          )) })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "utility-divider", "aria-hidden": "true" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ThemeControls, { compact: true })
  ] });
}

// outputs/nams-archive/design/ArchivePages.jsx
var import_react5 = __toESM(require("react"), 1);
var import_nams_link = __toESM(require("nams-link"), 1);
var import_nams_projects = require("nams-projects");
var import_nams_selection = require("nams-selection");
var import_jsx_runtime3 = require("react/jsx-runtime");
var copy = {
  ko: {
    workLabel: "\uC791\uC5C5\uBB3C",
    workEyebrow: "02 / SELECTED WORK",
    category: "\uD504\uB85C\uC81D\uD2B8 \uBD84\uB958",
    sort: "\uD504\uB85C\uC81D\uD2B8 \uC815\uB82C",
    all: "\uC804\uCCB4",
    latest: "\uCD5C\uC2E0\uC21C",
    original: "\uC6D0\uBCF8\uC21C",
    count: (n) => `${n}\uAC1C \uD504\uB85C\uC81D\uD2B8`,
    view: "\uD504\uB85C\uC81D\uD2B8 \uBCF4\uAE30",
    unavailable: "\uC900\uBE44 \uC911",
    mediaUnavailable: "\uBBF8\uB514\uC5B4 \uC900\uBE44 \uC911",
    mediaFailed: "\uBBF8\uB514\uC5B4\uB97C \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.",
    detail: (title) => `${title} \uC790\uC138\uD788 \uBCF4\uAE30`,
    main: (title) => `${title} Main\uC5D0\uC11C \uBCF4\uAE30`,
    noProjects: "\uD574\uB2F9 \uBD84\uB958\uC758 \uD504\uB85C\uC81D\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.",
    viewAll: "\uC804\uCCB4 \uC791\uC5C5 \uBCF4\uAE30",
    image: (title) => `${title} \uB300\uD45C \uC774\uBBF8\uC9C0`,
    aboutEyebrow: "03 / ABOUT THE DESIGNER",
    aboutLabel: "\uB514\uC790\uC774\uB108 \uC18C\uAC1C",
    name: "\uB178\uB0A8\uC218",
    role: "UI/UX \uB514\uC790\uC774\uB108 / \uBC31\uC5D4\uB4DC \uAC1C\uBC1C\uC790",
    headline: ["\uAD00\uCC30\uD558\uACE0, \uAE30\uB85D\uD558\uACE0,", "\uACBD\uD5D8\uC744 \uB514\uC790\uC778\uD569\uB2C8\uB2E4."],
    introduction: "\uC77C\uC0C1\uC758 \uC791\uC740 \uB9E5\uB77D\uACFC \uC0AC\uC6A9\uC790\uC758 \uD589\uB3D9\uC5D0\uC11C \uB2E8\uC11C\uB97C \uBC1C\uACAC\uD558\uACE0, \uADF8\uAC83\uC744 \uAE30\uB85D\uD558\uACE0 \uAD6C\uC870\uD654\uD574 \uB354 \uC790\uC5F0\uC2A4\uB7FD\uACE0 \uC758\uBBF8 \uC788\uB294 \uACBD\uD5D8\uC73C\uB85C \uB514\uC790\uC778\uD569\uB2C8\uB2E4.",
    principlesLabel: "\uB514\uC790\uC778 \uC6D0\uCE59",
    principles: [["\uAD00\uCC30", "\uC77C\uC0C1\uC758 \uB9E5\uB77D\uACFC \uC0AC\uC6A9\uC790\uC758 \uD589\uB3D9\uC744 \uC138\uC2EC\uD558\uAC8C \uAD00\uCC30\uD558\uBA70, \uB514\uC790\uC778\uC758 \uC2E4\uB9C8\uB9AC\uB97C \uBC1C\uACAC\uD569\uB2C8\uB2E4."], ["\uAE30\uB85D", "\uAD00\uCC30\uD55C \uC774\uC57C\uAE30\uB97C \uC0DD\uAC01\uACFC \uC790\uB8CC\uB85C \uC815\uB9AC\uD558\uACE0, \uD544\uC694\uD55C \uBCF8\uC9C8\uC744 \uC120\uBCC4\uD574 \uB514\uC790\uC778\uC758 \uBC29\uD5A5\uC744 \uAD6C\uCCB4\uD654\uD569\uB2C8\uB2E4."], ["\uC5F0\uACB0", "\uC0AC\uC6A9\uC790, \uB9E5\uB77D, \uAE30\uC220\uC744 \uC720\uAE30\uC801\uC73C\uB85C \uC5F0\uACB0\uD574, \uB354 \uC790\uC5F0\uC2A4\uB7FD\uACE0 \uC9C0\uC18D \uAC00\uB2A5\uD55C \uACBD\uD5D8\uC73C\uB85C \uC644\uC131\uD569\uB2C8\uB2E4."]],
    tools: "\uB3C4\uAD6C / \uC791\uC5C5 \uBC29\uC2DD",
    education: "\uD559\uB825",
    school: "\uACC4\uC6D0\uC608\uC220\uB300\uD559\uAD50 \xB7 \uB514\uC9C0\uD138\uBBF8\uB514\uC5B4\uB514\uC790\uC778\uACFC \xB7 2\uD559\uB144 \uC878\uC5C5 \uC608\uC815",
    portrait: "\uC778\uBB3C \uC0AC\uC9C4 / \uCD94\uAC00 \uC608\uC815",
    contactEyebrow: "04 / CONTACT",
    contactHeading: "\uD568\uAED8 \uC774\uC57C\uAE30\uD574\uC694.",
    contactIntroduction: ["\uD504\uB85C\uC81D\uD2B8 \uD611\uC5C5, \uC791\uC5C5 \uC758\uB8B0, \uB610\uB294 \uAC00\uBCBC\uC6B4 \uBB38\uC758\uAE4C\uC9C0 \uC5B8\uC81C\uB4E0 \uD3B8\uD558\uAC8C \uC5F0\uB77D \uC8FC\uC138\uC694.", "\uC88B\uC740 \uC544\uC774\uB514\uC5B4\uC640 \uBA4B\uC9C4 \uD504\uB85C\uC81D\uD2B8\uB97C \uD568\uAED8 \uB9CC\uB4E4\uC5B4\uAC00\uB294 \uAC83\uC744 \uB298 \uD658\uC601\uD569\uB2C8\uB2E4."],
    methodsLabel: "\uC5F0\uB77D \uBC29\uBC95",
    methods: [{ title: "\uC774\uBA54\uC77C", lines: ["\uD504\uB85C\uC81D\uD2B8 \uC81C\uC548, \uD611\uC5C5 \uBB38\uC758 \uB4F1", "\uC790\uC138\uD55C \uC774\uC57C\uAE30\uB97C \uBCF4\uB0B4\uC8FC\uC138\uC694."], label: "\uBA54\uC77C \uBCF4\uB0B4\uAE30" }, { title: "\uC778\uC2A4\uD0C0\uADF8\uB7A8", lines: ["\uC791\uC5C5 \uC18C\uC2DD\uACFC \uC77C\uC0C1\uC758 \uAE30\uB85D\uC744", "\uAC00\uC7A5 \uBE60\uB974\uAC8C \uB9CC\uB098\uBCF4\uC2E4 \uC218 \uC788\uC5B4\uC694."], label: "\uD504\uB85C\uD544 \uBCF4\uAE30" }, { title: "\uC804\uD654", lines: ["\uC791\uC5C5 \uC77C\uC815\uC774\uB098 \uAE09\uD55C \uBB38\uC758\uB294", "\uC804\uD654\uB85C \uC774\uC57C\uAE30\uD574 \uC8FC\uC138\uC694."] }],
    emailAction: (email) => `${email}\uC73C\uB85C \uC774\uBA54\uC77C \uBCF4\uB0B4\uAE30`,
    phoneAction: (phone) => `${phone}\uC73C\uB85C \uC804\uD654 \uAC78\uAE30`,
    formLabel: "\uD504\uB85C\uC81D\uD2B8 \uBB38\uC758",
    fields: { name: "\uC774\uB984", email: "\uC774\uBA54\uC77C", subject: "\uC81C\uBAA9", message: "\uBA54\uC2DC\uC9C0", website: "\uC6F9\uC0AC\uC774\uD2B8" },
    send: "\uBA54\uC77C \uC571\uC5D0\uC11C \uBCF4\uB0B4\uAE30",
    sending: "\uBA54\uC77C \uCD08\uC548 \uC5EC\uB294 \uC911\u2026",
    status: { initial: "\uC804\uC1A1 \uC11C\uBC84 \uB300\uC2E0 \uBA54\uC77C \uC571\uC5D0\uC11C \uCD08\uC548\uC744 \uC5FD\uB2C8\uB2E4. \uBA54\uC77C\uC740 \uC9C1\uC811 \uBCF4\uB0B4 \uC8FC\uC138\uC694.", invalid: "\uC785\uB825 \uB0B4\uC6A9\uC744 \uD655\uC778\uD574 \uC8FC\uC138\uC694. \uBA54\uC77C \uCD08\uC548\uC740 \uC544\uC9C1 \uC5F4\uB9AC\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.", opened: "\uBA54\uC77C \uC571\uC774 \uC5F4\uB9AC\uBA74 \uB0B4\uC6A9\uC744 \uD655\uC778\uD558\uACE0 \uC9C1\uC811 \uBCF4\uB0B4 \uC8FC\uC138\uC694. \uC774 \uD654\uBA74\uC5D0\uC11C\uB294 \uBA54\uC77C\uC774 \uBC1C\uC1A1\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4." },
    error: { required: (label) => `${label}${label === "\uBA54\uC2DC\uC9C0" ? "\uB97C" : "\uC744"} \uC785\uB825\uD574 \uC8FC\uC138\uC694.`, length: (label, max) => `${label}\uC740 ${max}\uC790 \uC774\uB0B4\uB85C \uC785\uB825\uD574 \uC8FC\uC138\uC694.`, line: (label) => `${label}\uC744 \uD55C \uC904\uB85C \uC785\uB825\uD574 \uC8FC\uC138\uC694.`, email: "\uC62C\uBC14\uB978 \uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694.", nul: "\uBA54\uC2DC\uC9C0\uC5D0 \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uB294 \uBB38\uC790\uAC00 \uC788\uC2B5\uB2C8\uB2E4.", honeypot: "\uC694\uCCAD\uC744 \uCC98\uB9AC\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC785\uB825 \uB0B4\uC6A9\uC744 \uD655\uC778\uD574 \uC8FC\uC138\uC694.", mail: "\uBA54\uC77C \uC571\uC744 \uC5F4\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uC704\uC758 \uC774\uBA54\uC77C \uB9C1\uD06C\uB97C \uC774\uC6A9\uD574 \uC8FC\uC138\uC694." },
    asideLabel: "\uBB38\uC758 \uC548\uB0B4\uC640 \uBE60\uB978 \uB9C1\uD06C",
    note: ["\uC9C0\uAE08 \uC0DD\uAC01\uD558\uACE0 \uC788\uB294 \uD504\uB85C\uC81D\uD2B8\uAC00 \uC788\uB2E4\uBA74, \uBD80\uB2F4 \uC5C6\uC774 \uC774\uC57C\uAE30\uD574 \uC8FC\uC138\uC694.", "\uC791\uC740 \uC544\uC774\uB514\uC5B4\uB77C\uB3C4 \uC88B\uC544\uC694. \uD568\uAED8 \uC815\uB9AC\uD558\uACE0, \uB354 \uC88B\uC740 \uBC29\uD5A5\uC73C\uB85C \uBC1C\uC804\uC2DC\uCF1C \uB098\uAC00\uC694. :)"],
    quick: "\uBE60\uB978 \uB9C1\uD06C",
    portfolio: "\uD3EC\uD2B8\uD3F4\uB9AC\uC624 \uBCF4\uAE30",
    resume: "\uC774\uB825\uC11C \uBCF4\uAE30 (PDF)",
    faq: "\uC790\uC8FC \uBB3B\uB294 \uC9C8\uBB38",
    resumeUnavailable: "\uC774\uB825\uC11C PDF\uAC00 \uC544\uC9C1 \uC81C\uACF5\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.",
    faqUnavailable: "\uC790\uC8FC \uBB3B\uB294 \uC9C8\uBB38\uC758 \uB0B4\uC6A9\uC774 \uC544\uC9C1 \uC81C\uACF5\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4."
  },
  ja: {
    workLabel: "\u5236\u4F5C\u5B9F\u7E3E",
    workEyebrow: "02 / SELECTED WORK",
    category: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u5206\u985E",
    sort: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u4E26\u3073\u9806",
    all: "\u3059\u3079\u3066",
    latest: "\u65B0\u3057\u3044\u9806",
    original: "\u5143\u306E\u9806\u756A",
    count: (n) => `${n}\u4EF6\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8`,
    view: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u898B\u308B",
    unavailable: "\u6E96\u5099\u4E2D",
    mediaUnavailable: "\u30E1\u30C7\u30A3\u30A2\u3092\u6E96\u5099\u4E2D",
    mediaFailed: "\u30E1\u30C7\u30A3\u30A2\u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F\u3002",
    detail: (title) => `${title}\u306E\u8A73\u7D30\u3092\u898B\u308B`,
    main: (title) => `${title}\u3092Main\u3067\u898B\u308B`,
    noProjects: "\u3053\u306E\u5206\u985E\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306F\u3042\u308A\u307E\u305B\u3093\u3002",
    viewAll: "\u3059\u3079\u3066\u306E\u5236\u4F5C\u5B9F\u7E3E\u3092\u898B\u308B",
    image: (title) => `${title}\u306E\u30E1\u30A4\u30F3\u753B\u50CF`,
    aboutEyebrow: "03 / ABOUT THE DESIGNER",
    aboutLabel: "\u30C7\u30B6\u30A4\u30CA\u30FC\u7D39\u4ECB",
    name: "\u30CE\u30FB\u30CA\u30E0\u30B9",
    role: "UI/UX\u30C7\u30B6\u30A4\u30CA\u30FC / \u30D0\u30C3\u30AF\u30A8\u30F3\u30C9\u958B\u767A\u8005",
    headline: ["\u89B3\u5BDF\u3057\u3001\u8A18\u9332\u3057\u3001", "\u4F53\u9A13\u3092\u30C7\u30B6\u30A4\u30F3\u3057\u307E\u3059\u3002"],
    introduction: "\u65E5\u5E38\u306E\u5C0F\u3055\u306A\u6587\u8108\u3084\u30E6\u30FC\u30B6\u30FC\u306E\u884C\u52D5\u304B\u3089\u624B\u304C\u304B\u308A\u3092\u898B\u3064\u3051\u3001\u8A18\u9332\u3057\u3001\u69CB\u9020\u5316\u3059\u308B\u3053\u3068\u3067\u3001\u3088\u308A\u81EA\u7136\u3067\u610F\u5473\u306E\u3042\u308B\u4F53\u9A13\u3092\u30C7\u30B6\u30A4\u30F3\u3057\u307E\u3059\u3002",
    principlesLabel: "\u30C7\u30B6\u30A4\u30F3\u306E\u539F\u5247",
    principles: [["\u89B3\u5BDF", "\u65E5\u5E38\u306E\u6587\u8108\u3084\u30E6\u30FC\u30B6\u30FC\u306E\u884C\u52D5\u3092\u4E01\u5BE7\u306B\u89B3\u5BDF\u3057\u3001\u30C7\u30B6\u30A4\u30F3\u306E\u624B\u304C\u304B\u308A\u3092\u898B\u3064\u3051\u307E\u3059\u3002"], ["\u8A18\u9332", "\u89B3\u5BDF\u3057\u305F\u3053\u3068\u3092\u8003\u5BDF\u3068\u8CC7\u6599\u306B\u6574\u7406\u3057\u3001\u5FC5\u8981\u306A\u672C\u8CEA\u3092\u9078\u3073\u53D6\u3063\u3066\u3001\u30C7\u30B6\u30A4\u30F3\u306E\u65B9\u5411\u6027\u3092\u5177\u4F53\u5316\u3057\u307E\u3059\u3002"], ["\u3064\u306A\u3050", "\u30E6\u30FC\u30B6\u30FC\u3001\u6587\u8108\u3001\u6280\u8853\u3092\u6709\u6A5F\u7684\u306B\u3064\u306A\u304E\u3001\u3088\u308A\u81EA\u7136\u3067\u6301\u7D9A\u53EF\u80FD\u306A\u4F53\u9A13\u3078\u3068\u4ED5\u4E0A\u3052\u307E\u3059\u3002"]],
    tools: "\u30C4\u30FC\u30EB / \u30EF\u30FC\u30AF\u30D5\u30ED\u30FC",
    education: "\u5B66\u6B74",
    school: "\u6842\u5712\u82B8\u8853\u5927\u5B66 \xB7 \u30C7\u30B8\u30BF\u30EB\u30E1\u30C7\u30A3\u30A2\u30C7\u30B6\u30A4\u30F3\u5B66\u79D1 \xB7 2\u5E74\u6B21\u5352\u696D\u4E88\u5B9A",
    portrait: "\u30DD\u30FC\u30C8\u30EC\u30FC\u30C8 / \u8FFD\u52A0\u4E88\u5B9A",
    contactEyebrow: "04 / CONTACT",
    contactHeading: "\u304A\u8A71\u3057\u3057\u307E\u3057\u3087\u3046\u3002",
    contactIntroduction: ["\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u306E\u5354\u696D\u3084\u5236\u4F5C\u306E\u3054\u4F9D\u983C\u3001\u3061\u3087\u3063\u3068\u3057\u305F\u304A\u554F\u3044\u5408\u308F\u305B\u307E\u3067\u3001\u3044\u3064\u3067\u3082\u304A\u6C17\u8EFD\u306B\u3054\u9023\u7D61\u304F\u3060\u3055\u3044\u3002", "\u826F\u3044\u30A2\u30A4\u30C7\u30A2\u3084\u7D20\u6575\u306A\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4E00\u7DD2\u306B\u5F62\u306B\u3059\u308B\u3053\u3068\u3092\u3001\u3044\u3064\u3067\u3082\u6B53\u8FCE\u3057\u3066\u3044\u307E\u3059\u3002"],
    methodsLabel: "\u9023\u7D61\u65B9\u6CD5",
    methods: [{ title: "\u30E1\u30FC\u30EB", lines: ["\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u3054\u63D0\u6848\u3084\u5354\u696D\u306E\u3054\u76F8\u8AC7\u306A\u3069\u3001", "\u8A73\u3057\u3044\u304A\u8A71\u3092\u304A\u805E\u304B\u305B\u304F\u3060\u3055\u3044\u3002"], label: "\u30E1\u30FC\u30EB\u3092\u9001\u308B" }, { title: "Instagram", lines: ["\u5236\u4F5C\u306E\u304A\u77E5\u3089\u305B\u3084\u65E5\u3005\u306E\u8A18\u9332\u3092\u3001", "\u3044\u3061\u65E9\u304F\u3054\u89A7\u3044\u305F\u3060\u3051\u307E\u3059\u3002"], label: "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u3092\u898B\u308B" }, { title: "\u96FB\u8A71", lines: ["\u5236\u4F5C\u65E5\u7A0B\u3084\u304A\u6025\u304E\u306E\u304A\u554F\u3044\u5408\u308F\u305B\u306F\u3001", "\u304A\u96FB\u8A71\u3067\u304A\u8A71\u3057\u304F\u3060\u3055\u3044\u3002"] }],
    emailAction: (email) => `${email}\u306B\u30E1\u30FC\u30EB\u3092\u9001\u308B`,
    phoneAction: (phone) => `${phone}\u306B\u96FB\u8A71\u3092\u304B\u3051\u308B`,
    formLabel: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u304A\u554F\u3044\u5408\u308F\u305B",
    fields: { name: "\u304A\u540D\u524D", email: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9", subject: "\u4EF6\u540D", message: "\u30E1\u30C3\u30BB\u30FC\u30B8", website: "\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8" },
    send: "\u30E1\u30FC\u30EB\u30A2\u30D7\u30EA\u3067\u9001\u308B",
    sending: "\u30E1\u30FC\u30EB\u306E\u4E0B\u66F8\u304D\u3092\u958B\u3044\u3066\u3044\u307E\u3059\u2026",
    status: { initial: "\u9001\u4FE1\u30B5\u30FC\u30D0\u30FC\u306E\u4EE3\u308F\u308A\u306B\u3001\u30E1\u30FC\u30EB\u30A2\u30D7\u30EA\u3067\u4E0B\u66F8\u304D\u3092\u958B\u304D\u307E\u3059\u3002\u30E1\u30FC\u30EB\u306F\u3054\u81EA\u8EAB\u3067\u9001\u4FE1\u3057\u3066\u304F\u3060\u3055\u3044\u3002", invalid: "\u5165\u529B\u5185\u5BB9\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002\u30E1\u30FC\u30EB\u306E\u4E0B\u66F8\u304D\u306F\u307E\u3060\u958B\u3044\u3066\u3044\u307E\u305B\u3093\u3002", opened: "\u30E1\u30FC\u30EB\u30A2\u30D7\u30EA\u304C\u958B\u3044\u305F\u3089\u3001\u5185\u5BB9\u3092\u78BA\u8A8D\u3057\u3066\u9001\u4FE1\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u3053\u306E\u753B\u9762\u304B\u3089\u30E1\u30FC\u30EB\u306F\u9001\u4FE1\u3055\u308C\u307E\u305B\u3093\u3002" },
    error: { required: (label) => `${label}\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002`, length: (label, max) => `${label}\u306F${max}\u6587\u5B57\u4EE5\u5185\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002`, line: (label) => `${label}\u306F1\u884C\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002`, email: "\u6B63\u3057\u3044\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002", nul: "\u30E1\u30C3\u30BB\u30FC\u30B8\u306B\u4F7F\u7528\u3067\u304D\u306A\u3044\u6587\u5B57\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002", honeypot: "\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u51E6\u7406\u3067\u304D\u307E\u305B\u3093\u3002\u5165\u529B\u5185\u5BB9\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002", mail: "\u30E1\u30FC\u30EB\u30A2\u30D7\u30EA\u3092\u958B\u3051\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u4E0A\u306E\u30E1\u30FC\u30EB\u30EA\u30F3\u30AF\u3092\u3054\u5229\u7528\u304F\u3060\u3055\u3044\u3002" },
    asideLabel: "\u304A\u554F\u3044\u5408\u308F\u305B\u306E\u3054\u6848\u5185\u3068\u30AF\u30A4\u30C3\u30AF\u30EA\u30F3\u30AF",
    note: ["\u4ECA\u3001\u8003\u3048\u3066\u3044\u308B\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u304C\u3042\u308C\u3070\u3001\u304A\u6C17\u8EFD\u306B\u304A\u8A71\u3057\u304F\u3060\u3055\u3044\u3002", "\u5C0F\u3055\u306A\u30A2\u30A4\u30C7\u30A2\u3067\u3082\u69CB\u3044\u307E\u305B\u3093\u3002\u4E00\u7DD2\u306B\u6574\u7406\u3057\u3001\u3088\u308A\u826F\u3044\u65B9\u5411\u3078\u80B2\u3066\u3066\u3044\u304D\u307E\u3057\u3087\u3046\u3002 :)"],
    quick: "\u30AF\u30A4\u30C3\u30AF\u30EA\u30F3\u30AF",
    portfolio: "\u30DD\u30FC\u30C8\u30D5\u30A9\u30EA\u30AA\u3092\u898B\u308B",
    resume: "\u5C65\u6B74\u66F8\u3092\u898B\u308B (PDF)",
    faq: "\u3088\u304F\u3042\u308B\u3054\u8CEA\u554F",
    resumeUnavailable: "\u5C65\u6B74\u66F8\u306EPDF\u306F\u307E\u3060\u7528\u610F\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002",
    faqUnavailable: "\u3088\u304F\u3042\u308B\u3054\u8CEA\u554F\u306E\u5185\u5BB9\u306F\u307E\u3060\u7528\u610F\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002"
  },
  en: {
    workLabel: "Selected projects",
    workEyebrow: "02 / SELECTED WORK",
    category: "Project categories",
    sort: "Project order",
    all: "All",
    latest: "Latest",
    original: "Original order",
    count: (n) => `${n} projects`,
    view: "View project",
    unavailable: "Coming soon",
    mediaUnavailable: "Media coming soon",
    mediaFailed: "The media could not be loaded.",
    detail: (title) => `View ${title} details`,
    main: (title) => `View ${title} on Main`,
    noProjects: "There are no projects in this category.",
    viewAll: "View all work",
    image: (title) => `${title} cover image`,
    aboutEyebrow: "03 / ABOUT THE DESIGNER",
    aboutLabel: "About the designer",
    name: "Namsu Noh",
    role: "UI/UX designer / Backend developer",
    headline: ["Observe, document,", "and design experiences."],
    introduction: "I find clues in the small contexts of everyday life and in user behavior, then document and structure them to design more natural and meaningful experiences.",
    principlesLabel: "Design principles",
    principles: [["Observe", "I carefully observe everyday contexts and user behavior to discover clues for design."], ["Document", "I organize observations into thoughts and references, identify what matters, and give the design a clear direction."], ["Connect", "I connect users, context, and technology to create more natural and sustainable experiences."]],
    tools: "Tools / Workflow",
    education: "Education",
    school: "Kaywon University of Art & Design \xB7 Digital Media Design \xB7 Year 2, expected graduation",
    portrait: "Portrait / To be added",
    contactEyebrow: "04 / CONTACT",
    contactHeading: "Let\u2019s talk.",
    contactIntroduction: ["For project collaborations, commissions, or a quick question, feel free to get in touch anytime.", "I always welcome the chance to work together on good ideas and exciting projects."],
    methodsLabel: "Contact methods",
    methods: [{ title: "Email", lines: ["For project proposals, collaborations,", "and anything you would like to share."], label: "Send an email" }, { title: "Instagram", lines: ["Find the latest updates on my work", "and records of everyday life."], label: "View profile" }, { title: "Phone", lines: ["For project schedules or urgent inquiries,", "let\u2019s talk over the phone."] }],
    emailAction: (email) => `Email ${email}`,
    phoneAction: (phone) => `Call ${phone}`,
    formLabel: "Project inquiry",
    fields: { name: "Name", email: "Email", subject: "Subject", message: "Message", website: "Website" },
    send: "Open in your email app",
    sending: "Opening email draft\u2026",
    status: { initial: "This opens a draft in your email app instead of using a sending server. Please send the email yourself.", invalid: "Please check your entries. The email draft has not been opened yet.", opened: "When your email app opens, review the draft and send it yourself. No email is sent from this page." },
    error: { required: (label) => `Please enter your ${label.toLowerCase()}.`, length: (label, max) => `Keep ${label.toLowerCase()} within ${max} characters.`, line: (label) => `Enter ${label.toLowerCase()} on one line.`, email: "Please enter a valid email address.", nul: "The message contains a character that cannot be used.", honeypot: "The request could not be processed. Please check your entries.", mail: "The email app could not be opened. Please use the email link above." },
    asideLabel: "Inquiry notes and quick links",
    note: ["If you have a project in mind, feel free to tell me about it.", "Even a small idea is welcome. Let\u2019s organize it together and develop it in a better direction. :)"],
    quick: "Quick links",
    portfolio: "View portfolio",
    resume: "View r\xE9sum\xE9 (PDF)",
    faq: "Frequently asked questions",
    resumeUnavailable: "The r\xE9sum\xE9 PDF has not been provided yet.",
    faqUnavailable: "The frequently asked questions have not been provided yet."
  }
};
var projectText = {
  ko: {
    "gentlemonster-pocket": { title: "\uD3EC\uCF13 X \uC820\uD2C0 \uBAAC\uC2A4\uD130", summary: "POCKET COLLECTION\uC744 \uC911\uC2EC\uC73C\uB85C \uAD6C\uC131\uD55C \uC6F9 \uB9AC\uB514\uC790\uC778\uACFC \uBAA8\uC158 \uC1FC\uC789\uC785\uB2C8\uB2E4." },
    "for-me": { title: "FOR ME", summary: "\uB0B4 \uC637\uACFC \uD558\uB8E8\uC758 \uC0C1\uD669\uC744 \uC5F0\uACB0\uD558\uB294 \uC2A4\uB9C8\uD2B8 \uB4DC\uB808\uC2F1 UIUX \uD504\uB85C\uC81D\uD2B8\uC785\uB2C8\uB2E4." },
    "yohji-yamamoto-redesign": { title: "\uC694\uC9C0 \uC57C\uB9C8\uBAA8\uD1A0 \uB9AC\uB514\uC790\uC778" },
    "sky-garden": { title: "\uD558\uB298\uC815\uC6D0" },
    "pop-ing": { title: "POP-ING" },
    "ten-storytelling": { title: "10 Storytelling" }
  },
  ja: {
    "gentlemonster-pocket": { title: "POCKET \xD7 GENTLE MONSTER", summary: "POCKET COLLECTION\u3092\u4E2D\u5FC3\u306B\u69CB\u6210\u3057\u305F\u3001\u30A6\u30A7\u30D6\u306E\u30EA\u30C7\u30B6\u30A4\u30F3\u3068\u30E2\u30FC\u30B7\u30E7\u30F3\u306E\u30B7\u30E7\u30FC\u30B1\u30FC\u30B9\u3067\u3059\u3002" },
    "for-me": { title: "FOR ME", summary: "\u81EA\u5206\u306E\u670D\u3068\u305D\u306E\u65E5\u306E\u72B6\u6CC1\u3092\u3064\u306A\u3050\u3001\u30B9\u30DE\u30FC\u30C8\u30C9\u30EC\u30C3\u30B7\u30F3\u30B0\u306EUI/UX\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u3059\u3002" },
    "yohji-yamamoto-redesign": { title: "\u30E8\u30A6\u30B8\u30E4\u30DE\u30E2\u30C8 \u30EA\u30C7\u30B6\u30A4\u30F3" },
    "sky-garden": { title: "\u7A7A\u306E\u5EAD" },
    "pop-ing": { title: "POP-ING" },
    "ten-storytelling": { title: "10 Storytelling" }
  },
  en: {
    "gentlemonster-pocket": { title: "POCKET \xD7 GENTLE MONSTER", summary: "A website redesign and motion showcase centered on POCKET COLLECTION." },
    "for-me": { title: "FOR ME", summary: "A smart dressing UI/UX project connecting the clothes you own with the context of your day." },
    "yohji-yamamoto-redesign": { title: "Yohji Yamamoto Redesign" },
    "sky-garden": { title: "Sky Garden" },
    "pop-ing": { title: "POP-ING" },
    "ten-storytelling": { title: "10 Storytelling" }
  }
};
var categories = [{ id: "all" }, { id: "uiux", label: "UI/UX" }, { id: "web", label: "Web" }, { id: "branding", label: "Branding" }, { id: "3d", label: "3D" }];
var categoryText = { ko: { web: "\uC6F9", branding: "\uBE0C\uB79C\uB529" }, ja: { web: "\u30A6\u30A7\u30D6", branding: "\u30D6\u30E9\u30F3\u30C7\u30A3\u30F3\u30B0" }, en: { web: "Web", branding: "Branding" } };
function usePageCopy() {
  const { locale } = useLocale();
  const language = Object.hasOwn(copy, locale) ? locale : "ko";
  return { locale: language, t: copy[language] };
}
function Arrow({ diagonal = false }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: diagonal ? "M5 19 19 5M5 5h14v14" : "M3 12h18m-8-8 8 8-8 8", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
function PageHero({ eyebrow, title, children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("header", { className: "page-hero", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "page-hero__eyebrow", children: eyebrow }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h1", { className: "page-hero__title", children: title }),
    children && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "page-hero__description", children })
  ] });
}
function projectHref(project) {
  if (project.status !== "published") return null;
  if (project.externalUrl) {
    try {
      const url = new URL(project.externalUrl);
      const localPreview = url.protocol === "http:" && ["127.0.0.1", "localhost", "[::1]"].includes(url.hostname);
      return (url.protocol === "https:" || localPreview) && !url.username && !url.password ? url.href : null;
    } catch {
      return null;
    }
  }
  return project.slug && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(project.slug) ? `/work/${project.slug}` : null;
}
var WorkPage;var AboutPage;
var contact = { email: "jujono2@gmail.com", phone: "010-5177-8426", phoneHref: "tel:+821051778426" };
var fieldLimits = { name: 80, email: 254, subject: 120, message: 3e3, website: 200 };
var fieldKeys = ["name", "email", "subject", "message"];
var emptyFields = { name: "", email: "", subject: "", message: "", website: "" };
var controlCharacter = /[\u0000-\u001f\u007f]/u;
function validateFields(input) {
  const values = { name: input.name.trim(), email: input.email.trim(), subject: input.subject.trim(), message: input.message.replace(/\r\n?/gu, "\n").trim(), website: input.website.trim() };
  const errors = {};
  for (const name of fieldKeys) {
    if (!values[name]) errors[name] = "required";
    else if (values[name].length > fieldLimits[name]) errors[name] = "length";
  }
  for (const name of ["name", "subject"]) if (values[name] && controlCharacter.test(values[name])) errors[name] = "line";
  if (values.email && (controlCharacter.test(values.email) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/u.test(values.email))) errors.email = "email";
  if (values.message.includes("\0")) errors.message = "nul";
  return { values, errors, formError: values.website ? "honeypot" : null, valid: !values.website && Object.keys(errors).length === 0 };
}
function ContactIcon({ name }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", focusable: "false", children: [
    name === "email" && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M2 6h28v21H2z" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "m2 6 14 12L30 6" })
    ] }),
    name === "instagram" && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("rect", { x: "1", y: "1", width: "30", height: "30", rx: "7" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("circle", { cx: "16", cy: "16", r: "6" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("circle", { cx: "25", cy: "7", r: "1", fill: "currentColor", stroke: "none" })
    ] }),
    name === "phone" && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "m8 2 5 7-4 4c2 5 5 8 10 10l4-4 7 5-3 6C13 31 1 19 2 5Z" })
  ] });
}
function ContactMethods({ t }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "archive-contact-methods", "aria-label": t.methodsLabel, children: ["email", "instagram", "phone"].map((id, index) => {
    const method = t.methods[index];
    const href = id === "email" ? `mailto:${contact.email}` : id === "phone" ? contact.phoneHref : "https://www.instagram.com/beginnerboy.design/";
    const label = id === "phone" ? contact.phone : method.label;
    const aria = id === "email" ? t.emailAction(contact.email) : id === "phone" ? t.phoneAction(contact.phone) : label;
    const title = id === "email" ? contact.email : id === "phone" ? contact.phone : "@beginnerboy.design";
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("article", { className: "archive-contact-method", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "archive-contact-method__icon", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ContactIcon, { name: id }) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h2", { children: method.title }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: method.lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: line }, line)) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("a", { href, "aria-label": aria, title, target: id === "instagram" ? "_blank" : void 0, rel: id === "instagram" ? "noopener noreferrer" : void 0, children: [
          label,
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Arrow, { diagonal: true })
        ] })
      ] })
    ] }, id);
  }) });
}
function ContactForm({ t }) {
  const [values, setValues] = (0, import_react5.useState)(emptyFields);
  const [errors, setErrors] = (0, import_react5.useState)({});
  const [busy, setBusy] = (0, import_react5.useState)(false);
  const [status, setStatus] = (0, import_react5.useState)("initial");
  const [formError, setFormError] = (0, import_react5.useState)(null);
  const locked = (0, import_react5.useRef)(false);
  const timer = (0, import_react5.useRef)(null);
  (0, import_react5.useEffect)(() => () => clearTimeout(timer.current), []);
  function change(name, value) {
    setValues((previous) => ({ ...previous, [name]: value }));
    if (name !== "website") setErrors((previous) => ({ ...previous, [name]: void 0 }));
    setFormError(null);
  }
  function submit(event) {
    event.preventDefault();
    if (locked.current) return;
    const form = event.currentTarget;
    const result = validateFields(values);
    setErrors(result.errors);
    setValues(result.values);
    setFormError(result.formError);
    if (!result.valid) {
      setStatus("invalid");
      const first = fieldKeys.find((name2) => result.errors[name2]);
      if (first) form.elements.namedItem(first)?.focus();
      return;
    }
    const { name, email, subject, message } = result.values;
    const body = `${t.fields.name}: ${name}
${t.fields.email}: ${email}

${message}`;
    const url = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    locked.current = true;
    setBusy(true);
    try {
      window.location.assign(url);
      setStatus("opened");
    } catch {
      setFormError("mail");
    } finally {
      timer.current = setTimeout(() => {
        locked.current = false;
        setBusy(false);
      }, 600);
    }
  }
  function fieldError(name) {
    const code = errors[name];
    if (!code) return null;
    if (code === "required" || code === "line") return t.error[code](t.fields[name]);
    if (code === "length") return t.error.length(t.fields[name], fieldLimits[name]);
    return t.error[code];
  }
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("form", { className: "archive-contact-form", onSubmit: submit, noValidate: true, "aria-label": t.formLabel, "aria-describedby": "contact-form-status", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "archive-contact-form__honeypot", "aria-hidden": "true", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("label", { htmlFor: "contact-website", children: t.fields.website }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("input", { id: "contact-website", name: "website", value: values.website, onChange: (event) => change("website", event.target.value), autoComplete: "off", tabIndex: -1, maxLength: fieldLimits.website })
    ] }),
    fieldKeys.map((name) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: `archive-contact-field ${name === "subject" || name === "message" ? "archive-contact-field--wide" : ""}`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("label", { htmlFor: `contact-${name}`, children: [
        t.fields[name],
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { "aria-hidden": "true", children: "*" })
      ] }),
      name === "message" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("textarea", { id: `contact-${name}`, name, placeholder: t.fields[name], required: true, maxLength: fieldLimits[name], rows: 5, value: values[name], onChange: (event) => change(name, event.target.value), "aria-invalid": Boolean(errors[name]), "aria-describedby": errors[name] ? `contact-${name}-error` : void 0 }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("input", { id: `contact-${name}`, name, type: name === "email" ? "email" : "text", placeholder: t.fields[name], required: true, maxLength: fieldLimits[name], autoComplete: name === "name" ? "name" : name === "email" ? "email" : "off", value: values[name], onChange: (event) => change(name, event.target.value), "aria-invalid": Boolean(errors[name]), "aria-describedby": errors[name] ? `contact-${name}-error` : void 0 }),
      " ",
      errors[name] && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "archive-contact-field__error", id: `contact-${name}-error`, children: fieldError(name) })
    ] }, name)),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("button", { className: "archive-contact-form__submit", type: "submit", disabled: busy, children: [
      busy ? t.sending : t.send,
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Arrow, { diagonal: true })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "archive-contact-form__status", id: "contact-form-status", role: "status", "aria-live": "polite", children: t.status[status] }),
    formError && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "archive-contact-form__error", role: "alert", children: t.error[formError] })
  ] });
}
function ContactPage() {
  const { t } = usePageCopy();
  const { hrefFor } = (0, import_nams_selection.useProjectSelection)();
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(PageFrame, { className: "archive-page archive-page--contact", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(PageHero, { eyebrow: t.contactEyebrow, title: "Contact", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: t.contactHeading }) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "archive-contact", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("section", { className: "archive-contact__main", "aria-label": t.formLabel, children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "archive-contact__introduction", children: t.contactIntroduction.map((line) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: line }, line)) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ContactMethods, { t }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ContactForm, { t })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("aside", { className: "archive-contact__aside", "aria-label": t.asideLabel, children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "archive-contact-note", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { "aria-hidden": "true" }),
          t.note.map((line) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: line }, line))
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("nav", { className: "archive-contact-quick", "aria-label": t.quick, children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h2", { children: t.quick }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_nams_link.default, { href: hrefFor("/work"), children: [
            t.portfolio,
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Arrow, {})
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("button", { type: "button", disabled: true, title: t.resumeUnavailable, children: [
            t.resume,
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: t.unavailable }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Arrow, {})
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("button", { type: "button", disabled: true, title: t.faqUnavailable, children: [
            t.faq,
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: t.unavailable }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Arrow, {})
          ] })
        ] })
      ] })
    ] })
  ] });
}

// outputs/nams-archive/design/SiteShell.jsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var navigation = [{ href: "/", label: "Main" }, { href: "/work", label: "Work" }, { href: "/about", label: "About" }, { href: "/contact", label: "Contact" }];
function SiteHeader({ pathname = "/" }) {
  const { hrefFor } = (0, import_nams_selection2.useProjectSelection)();
  const { copy: copy2 } = useLocale();
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("header", { className: "site-header page-width", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_nams_link2.default, { className: "site-logo", href: hrefFor("/"), "aria-label": copy2.home, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("img", { src: "/assets/brand/nams-logo.svg", alt: "NAMS ARCHIVE", width: "134", height: "74", decoding: "async" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("nav", { className: "site-nav", "aria-label": copy2.navigation, children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_nams_link2.default, { href: hrefFor(item.href), "aria-current": pathname === item.href ? "page" : void 0, children: item.label }, item.href)) }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SiteControls, {})
  ] });
}
function SiteShell({ children }) {
  const pathname = (0, import_nams_navigation.usePathname)();
  const { copy: copy2 } = useLocale();
  const Page = { "/work": WorkPage, "/about": AboutPage, "/contact": ContactPage }[pathname];
  (0, import_react6.useEffect)(() => {
    if (Page) window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  if (pathname.startsWith("/work/")) return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, { children });
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "archive-layout", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", { className: "skip-link", href: "#main-content", children: copy2.skip }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SiteHeader, { pathname }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "page-transition", children: Page ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Page, {}) : children }, pathname),
    pathname !== "/" && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("footer", { className: "site-footer", children: pathname === "/work" ? "PROJECTS" : "NAMSARCHIVE" })
  ] });
}
function PageFrame({ children, className = "" }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("main", { className: `page-frame page-width ${className}`, id: "main-content", children });
}

a.d(t,{SiteShell:()=>module.exports.SiteShell,PageFrame:()=>module.exports.PageFrame});;ContactPage=(()=>{var module={exports:{}};var exports=module.exports;function require(name){if(name==='react')return a(2115);if(name==='react/jsx-runtime')return a(5155);if(name==='nams-link')return a.n(a(2619))();if(name==='nams-selection')return{useProjectSelection:a(2865).v};if(name==='nams-shell')return{PageFrame};throw Error('Unexpected Contact dependency '+name)}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// outputs/nams-archive/design/ContactRedesign.jsx
var ContactRedesign_exports = {};
__export(ContactRedesign_exports, {
  ContactPage: () => ContactPage
});
module.exports = __toCommonJS(ContactRedesign_exports);
var import_react2 = __toESM(require("react"), 1);
var import_nams_link = __toESM(require("nams-link"), 1);
var import_nams_selection = require("nams-selection");
var import_nams_shell = require("nams-shell");

// outputs/nams-archive/design/use-locale.js
var import_react = require("react");
var uiCopy = {
  ko: { language: "\uC5B8\uC5B4 \uC120\uD0DD", appearance: "\uD654\uBA74 \uBAA8\uB4DC", dark: "\uB2E4\uD06C \uBAA8\uB4DC", light: "\uD654\uC774\uD2B8 \uBAA8\uB4DC", switchDark: "\uB2E4\uD06C \uBAA8\uB4DC\uB85C \uC804\uD658", switchLight: "\uD654\uC774\uD2B8 \uBAA8\uB4DC\uB85C \uC804\uD658", navigation: "\uC8FC\uC694 \uBA54\uB274", home: "NAMS ARCHIVE \uBA54\uC778", skip: "\uBCF8\uBB38\uC73C\uB85C \uAC74\uB108\uB6F0\uAE30", screen: "\uC791\uD488 \uC0C1\uC601\uAD00", view: "\uD504\uB85C\uC81D\uD2B8 \uBCF4\uAE30", motion: "\uBAA8\uC158", failed: "\uC791\uD488 \uBBF8\uB514\uC5B4\uB97C \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.", instructions: "\uD654\uBA74\uC744 \uD074\uB9AD\uD558\uAC70\uB098 \uC2A4\uD06C\uB864\uD558\uACE0, \uC88C\uC6B0\uB85C \uC2A4\uC640\uC774\uD504\uD558\uAC70\uB098 \uBC29\uD5A5\uD0A4\uB97C \uB20C\uB7EC \uC791\uD488\uC744 \uC774\uB3D9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC2A4\uD398\uC774\uC2A4 \uD0A4\uB85C \uC601\uC0C1\uC744 \uC815\uC9C0\uD558\uAC70\uB098 \uC7AC\uC0DD\uD569\uB2C8\uB2E4." },
  ja: { language: "\u8A00\u8A9E\u3092\u9078\u629E", appearance: "\u8868\u793A\u30E2\u30FC\u30C9", dark: "\u30C0\u30FC\u30AF\u30E2\u30FC\u30C9", light: "\u30E9\u30A4\u30C8\u30E2\u30FC\u30C9", switchDark: "\u30C0\u30FC\u30AF\u30E2\u30FC\u30C9\u306B\u5207\u308A\u66FF\u3048", switchLight: "\u30E9\u30A4\u30C8\u30E2\u30FC\u30C9\u306B\u5207\u308A\u66FF\u3048", navigation: "\u30E1\u30A4\u30F3\u30E1\u30CB\u30E5\u30FC", home: "NAMS ARCHIVE \u30DB\u30FC\u30E0", skip: "\u672C\u6587\u3078\u30B9\u30AD\u30C3\u30D7", screen: "\u4F5C\u54C1\u30AE\u30E3\u30E9\u30EA\u30FC", view: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u898B\u308B", motion: "\u30E2\u30FC\u30B7\u30E7\u30F3", failed: "\u4F5C\u54C1\u306E\u30E1\u30C7\u30A3\u30A2\u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F\u3002", instructions: "\u753B\u9762\u306E\u30AF\u30EA\u30C3\u30AF\u3001\u30B9\u30AF\u30ED\u30FC\u30EB\u3001\u5DE6\u53F3\u3078\u306E\u30B9\u30EF\u30A4\u30D7\u3001\u307E\u305F\u306F\u77E2\u5370\u30AD\u30FC\u3067\u4F5C\u54C1\u3092\u5207\u308A\u66FF\u3048\u3089\u308C\u307E\u3059\u3002\u30B9\u30DA\u30FC\u30B9\u30AD\u30FC\u3067\u52D5\u753B\u3092\u4E00\u6642\u505C\u6B62\u30FB\u518D\u751F\u3057\u307E\u3059\u3002" },
  en: { language: "Choose language", appearance: "Appearance", dark: "Dark mode", light: "Light mode", switchDark: "Switch to dark mode", switchLight: "Switch to light mode", navigation: "Main navigation", home: "NAMS ARCHIVE home", skip: "Skip to content", screen: "Project cinema", view: "View project", motion: "motion", failed: "The project media could not be loaded.", instructions: "Click, scroll, swipe left or right, or use the arrow keys to move between projects. Press Space to pause or play the video." }
};
function useLocale() {
  const [locale, setLocale] = (0, import_react.useState)("ko");
  (0, import_react.useEffect)(() => {
    const sync = () => setLocale(window.NamsLocale?.get() || "ko");
    sync();
    window.addEventListener("nams:localechange", sync);
    return () => window.removeEventListener("nams:localechange", sync);
  }, []);
  const chooseLocale = (0, import_react.useCallback)((next) => window.NamsLocale?.set(next), []);
  return { locale, chooseLocale, copy: uiCopy[locale] };
}

// outputs/nams-archive/design/contact-copy.js
var contactCopy = {
  ko: {
    profile: "\uD504\uB85C\uD544 \uBC14\uB85C\uAC00\uAE30",
    send: "\uBA54\uC2DC\uC9C0 \uBCF4\uB0B4\uAE30",
    draftHint: "\uBA54\uC77C \uC571\uC5D0\uC11C \uC791\uC131\uD55C \uB0B4\uC6A9\uC744 \uD655\uC778\uD55C \uB4A4 \uC804\uC1A1\uD574 \uC8FC\uC138\uC694.",
    coverLetter: "\uC790\uAE30\uC18C\uAC1C\uC11C \uBCF4\uAE30 (PDF)",
    coverUnavailable: "\uC790\uAE30\uC18C\uAC1C\uC11C PDF\uAC00 \uC544\uC9C1 \uC81C\uACF5\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.",
    biography: [
      "\uC548\uB155\uD558\uC138\uC694, UI/UX \uB514\uC790\uC774\uB108\uB97C \uAFC8\uAFB8\uB294 \uB178\uB0A8\uC218\uC785\uB2C8\uB2E4. \uACC4\uC6D0\uC608\uC220\uB300\uD559\uAD50 \uB514\uC9C0\uD138\uBBF8\uB514\uC5B4\uB514\uC790\uC778\uACFC\uB97C \uC804\uACF5\uD558\uC600\uC73C\uBA70, 2\uB144 \uB3D9\uC548 \uB514\uC790\uC778\uACFC \uD504\uB85C\uADF8\uB798\uBC0D\uC5D0 \uB300\uD55C \uAE30\uBCF8\uC801\uC778 \uC9C0\uC2DD\uC744 \uC313\uACE0 \uD504\uB85C\uC81D\uD2B8\uB97C \uC9C4\uD589\uD588\uC2B5\uB2C8\uB2E4.",
      "\uD2B9\uD788 \uB300\uD559\uC5D0 \uB4E4\uC5B4\uC624\uAE30 \uC804 1\uB144 \uC815\uB3C4 \uC778\uD134\uC73C\uB85C \uD504\uB860\uD2B8\uC5D4\uB4DC\uC640 \uBC31\uC5D4\uB4DC \uAC1C\uBC1C\uC790\uB85C \uC77C\uD55C \uC801\uC774 \uC788\uC73C\uBA70, \uB514\uC790\uC778\uBFD0\uB9CC \uC544\uB2C8\uB77C \uCF54\uB4DC \uCABD\uC73C\uB85C\uB3C4 \uC9C0\uC2DD\uC744 \uAC16\uACE0 \uC791\uC5C5\uC744 \uC9C4\uD589\uD588\uC2B5\uB2C8\uB2E4.",
      "\uD2B9\uD788 \uC138\uB828\uB418\uACE0 \uBBF8\uB2C8\uBA40\uD55C \uC6F9\uC0AC\uC774\uD2B8\uB97C \uB9CC\uB4DC\uB294 \uCABD\uC5D0 \uC788\uC5B4\uC11C\uB294 \uC790\uC2E0\uC774 \uC788\uC73C\uBA70, \uC0AC\uC6A9\uC790\uC758 \uB2C8\uC988\uB97C \uC815\uD655\uD788 \uD30C\uC545\uD558\uACE0 \uB9CC\uB4DC\uB294 \uC791\uC5C5\uC5D0 \uD765\uBBF8\uB97C \uB290\uB08D\uB2C8\uB2E4."
    ]
  },
  ja: {
    profile: "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u3092\u898B\u308B",
    send: "\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u9001\u308B",
    draftHint: "\u30E1\u30FC\u30EB\u30A2\u30D7\u30EA\u3067\u5185\u5BB9\u3092\u78BA\u8A8D\u3057\u3066\u304B\u3089\u9001\u4FE1\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
    coverLetter: "\u81EA\u5DF1\u7D39\u4ECB\u66F8\u3092\u898B\u308B (PDF)",
    coverUnavailable: "\u81EA\u5DF1\u7D39\u4ECB\u66F8\u306EPDF\u306F\u307E\u3060\u7528\u610F\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002",
    biography: [
      "\u3053\u3093\u306B\u3061\u306F\u3002UI/UX\u30C7\u30B6\u30A4\u30CA\u30FC\u3092\u76EE\u6307\u3059\u30CE\u30FB\u30CA\u30E0\u30B9\u3067\u3059\u3002\u6842\u5712\u82B8\u8853\u5927\u5B66\u3067\u30C7\u30B8\u30BF\u30EB\u30E1\u30C7\u30A3\u30A2\u30C7\u30B6\u30A4\u30F3\u3092\u5C02\u653B\u3057\u30012\u5E74\u9593\u306B\u308F\u305F\u308A\u30C7\u30B6\u30A4\u30F3\u3068\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u306E\u57FA\u790E\u3092\u5B66\u3073\u3001\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u53D6\u308A\u7D44\u3093\u3067\u304D\u307E\u3057\u305F\u3002",
      "\u5927\u5B66\u5165\u5B66\u524D\u306B\u306F\u7D041\u5E74\u9593\u3001\u30D5\u30ED\u30F3\u30C8\u30A8\u30F3\u30C9\u30FB\u30D0\u30C3\u30AF\u30A8\u30F3\u30C9\u958B\u767A\u306E\u30A4\u30F3\u30BF\u30FC\u30F3\u3092\u7D4C\u9A13\u3057\u307E\u3057\u305F\u3002\u30C7\u30B6\u30A4\u30F3\u3060\u3051\u3067\u306A\u304F\u3001\u30B3\u30FC\u30C9\u306E\u77E5\u8B58\u3082\u751F\u304B\u3057\u306A\u304C\u3089\u5236\u4F5C\u3057\u3066\u3044\u307E\u3059\u3002",
      "\u6D17\u7DF4\u3055\u308C\u305F\u30DF\u30CB\u30DE\u30EB\u306A\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u306E\u5236\u4F5C\u3092\u5F97\u610F\u3068\u3057\u3001\u30E6\u30FC\u30B6\u30FC\u306E\u30CB\u30FC\u30BA\u3092\u7684\u78BA\u306B\u6349\u3048\u3001\u5F62\u306B\u3057\u3066\u3044\u304F\u3053\u3068\u306B\u3084\u308A\u304C\u3044\u3092\u611F\u3058\u3066\u3044\u307E\u3059\u3002"
    ]
  },
  en: {
    profile: "View profile",
    send: "Send a message",
    draftHint: "Review the draft in your email app, then send it when you are ready.",
    coverLetter: "View personal statement (PDF)",
    coverUnavailable: "The personal statement PDF has not been provided yet.",
    biography: [
      "Hello, I\u2019m Namsu Noh, an aspiring UI/UX designer. I studied Digital Media Design at Kaywon University of Art & Design, building a foundation in design and programming through two years of projects.",
      "Before entering university, I spent about a year working as a frontend and backend development intern. That experience helps me bring both design and coding knowledge into my work.",
      "I\u2019m confident in creating polished, minimal websites. I enjoy understanding users\u2019 needs precisely and turning those insights into thoughtful experiences."
    ]
  }
};

// outputs/nams-archive/design/ContactRedesign.jsx
var import_jsx_runtime = require("react/jsx-runtime");
var copy = {
  ko: {
    workLabel: "\uC791\uC5C5\uBB3C",
    workEyebrow: "02 / SELECTED WORK",
    category: "\uD504\uB85C\uC81D\uD2B8 \uBD84\uB958",
    sort: "\uD504\uB85C\uC81D\uD2B8 \uC815\uB82C",
    all: "\uC804\uCCB4",
    latest: "\uCD5C\uC2E0\uC21C",
    original: "\uC6D0\uBCF8\uC21C",
    count: (n) => `${n}\uAC1C \uD504\uB85C\uC81D\uD2B8`,
    view: "\uD504\uB85C\uC81D\uD2B8 \uBCF4\uAE30",
    unavailable: "\uC900\uBE44 \uC911",
    mediaUnavailable: "\uBBF8\uB514\uC5B4 \uC900\uBE44 \uC911",
    mediaFailed: "\uBBF8\uB514\uC5B4\uB97C \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.",
    detail: (title) => `${title} \uC790\uC138\uD788 \uBCF4\uAE30`,
    main: (title) => `${title} Main\uC5D0\uC11C \uBCF4\uAE30`,
    noProjects: "\uD574\uB2F9 \uBD84\uB958\uC758 \uD504\uB85C\uC81D\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.",
    viewAll: "\uC804\uCCB4 \uC791\uC5C5 \uBCF4\uAE30",
    image: (title) => `${title} \uB300\uD45C \uC774\uBBF8\uC9C0`,
    aboutEyebrow: "03 / ABOUT THE DESIGNER",
    aboutLabel: "\uB514\uC790\uC774\uB108 \uC18C\uAC1C",
    name: "\uB178\uB0A8\uC218",
    role: "UI/UX \uB514\uC790\uC774\uB108 / \uBC31\uC5D4\uB4DC \uAC1C\uBC1C\uC790",
    headline: ["\uAD00\uCC30\uD558\uACE0, \uAE30\uB85D\uD558\uACE0,", "\uACBD\uD5D8\uC744 \uB514\uC790\uC778\uD569\uB2C8\uB2E4."],
    introduction: "\uC77C\uC0C1\uC758 \uC791\uC740 \uB9E5\uB77D\uACFC \uC0AC\uC6A9\uC790\uC758 \uD589\uB3D9\uC5D0\uC11C \uB2E8\uC11C\uB97C \uBC1C\uACAC\uD558\uACE0, \uADF8\uAC83\uC744 \uAE30\uB85D\uD558\uACE0 \uAD6C\uC870\uD654\uD574 \uB354 \uC790\uC5F0\uC2A4\uB7FD\uACE0 \uC758\uBBF8 \uC788\uB294 \uACBD\uD5D8\uC73C\uB85C \uB514\uC790\uC778\uD569\uB2C8\uB2E4.",
    principlesLabel: "\uB514\uC790\uC778 \uC6D0\uCE59",
    principles: [["\uAD00\uCC30", "\uC77C\uC0C1\uC758 \uB9E5\uB77D\uACFC \uC0AC\uC6A9\uC790\uC758 \uD589\uB3D9\uC744 \uC138\uC2EC\uD558\uAC8C \uAD00\uCC30\uD558\uBA70, \uB514\uC790\uC778\uC758 \uC2E4\uB9C8\uB9AC\uB97C \uBC1C\uACAC\uD569\uB2C8\uB2E4."], ["\uAE30\uB85D", "\uAD00\uCC30\uD55C \uC774\uC57C\uAE30\uB97C \uC0DD\uAC01\uACFC \uC790\uB8CC\uB85C \uC815\uB9AC\uD558\uACE0, \uD544\uC694\uD55C \uBCF8\uC9C8\uC744 \uC120\uBCC4\uD574 \uB514\uC790\uC778\uC758 \uBC29\uD5A5\uC744 \uAD6C\uCCB4\uD654\uD569\uB2C8\uB2E4."], ["\uC5F0\uACB0", "\uC0AC\uC6A9\uC790, \uB9E5\uB77D, \uAE30\uC220\uC744 \uC720\uAE30\uC801\uC73C\uB85C \uC5F0\uACB0\uD574, \uB354 \uC790\uC5F0\uC2A4\uB7FD\uACE0 \uC9C0\uC18D \uAC00\uB2A5\uD55C \uACBD\uD5D8\uC73C\uB85C \uC644\uC131\uD569\uB2C8\uB2E4."]],
    tools: "\uB3C4\uAD6C / \uC791\uC5C5 \uBC29\uC2DD",
    education: "\uD559\uB825",
    school: "\uACC4\uC6D0\uC608\uC220\uB300\uD559\uAD50 \xB7 \uB514\uC9C0\uD138\uBBF8\uB514\uC5B4\uB514\uC790\uC778\uACFC \xB7 2\uD559\uB144 \uC878\uC5C5 \uC608\uC815",
    portrait: "\uC778\uBB3C \uC0AC\uC9C4 / \uCD94\uAC00 \uC608\uC815",
    contactEyebrow: "04 / CONTACT",
    contactHeading: "\uD568\uAED8 \uC774\uC57C\uAE30\uD574\uC694.",
    contactIntroduction: ["\uD504\uB85C\uC81D\uD2B8 \uD611\uC5C5, \uC791\uC5C5 \uC758\uB8B0, \uB610\uB294 \uAC00\uBCBC\uC6B4 \uBB38\uC758\uAE4C\uC9C0 \uC5B8\uC81C\uB4E0 \uD3B8\uD558\uAC8C \uC5F0\uB77D \uC8FC\uC138\uC694.", "\uC88B\uC740 \uC544\uC774\uB514\uC5B4\uC640 \uBA4B\uC9C4 \uD504\uB85C\uC81D\uD2B8\uB97C \uD568\uAED8 \uB9CC\uB4E4\uC5B4\uAC00\uB294 \uAC83\uC744 \uB298 \uD658\uC601\uD569\uB2C8\uB2E4."],
    methodsLabel: "\uC5F0\uB77D \uBC29\uBC95",
    methods: [{ title: "\uC774\uBA54\uC77C", lines: ["\uD504\uB85C\uC81D\uD2B8 \uC81C\uC548, \uD611\uC5C5 \uBB38\uC758 \uB4F1", "\uC790\uC138\uD55C \uC774\uC57C\uAE30\uB97C \uBCF4\uB0B4\uC8FC\uC138\uC694."], label: "\uBA54\uC77C \uBCF4\uB0B4\uAE30" }, { title: "\uC778\uC2A4\uD0C0\uADF8\uB7A8", lines: ["\uC791\uC5C5 \uC18C\uC2DD\uACFC \uC77C\uC0C1\uC758 \uAE30\uB85D\uC744", "\uAC00\uC7A5 \uBE60\uB974\uAC8C \uB9CC\uB098\uBCF4\uC2E4 \uC218 \uC788\uC5B4\uC694."], label: "\uD504\uB85C\uD544 \uBCF4\uAE30" }, { title: "\uC804\uD654", lines: ["\uC791\uC5C5 \uC77C\uC815\uC774\uB098 \uAE09\uD55C \uBB38\uC758\uB294", "\uC804\uD654\uB85C \uC774\uC57C\uAE30\uD574 \uC8FC\uC138\uC694."] }],
    emailAction: (email) => `${email}\uC73C\uB85C \uC774\uBA54\uC77C \uBCF4\uB0B4\uAE30`,
    phoneAction: (phone) => `${phone}\uC73C\uB85C \uC804\uD654 \uAC78\uAE30`,
    formLabel: "\uD504\uB85C\uC81D\uD2B8 \uBB38\uC758",
    fields: { name: "\uC774\uB984", email: "\uC774\uBA54\uC77C", subject: "\uC81C\uBAA9", message: "\uBA54\uC2DC\uC9C0", website: "\uC6F9\uC0AC\uC774\uD2B8" },
    send: "\uBA54\uC77C \uC571\uC5D0\uC11C \uBCF4\uB0B4\uAE30",
    sending: "\uBA54\uC77C \uCD08\uC548 \uC5EC\uB294 \uC911\u2026",
    status: { initial: "\uC804\uC1A1 \uC11C\uBC84 \uB300\uC2E0 \uBA54\uC77C \uC571\uC5D0\uC11C \uCD08\uC548\uC744 \uC5FD\uB2C8\uB2E4. \uBA54\uC77C\uC740 \uC9C1\uC811 \uBCF4\uB0B4 \uC8FC\uC138\uC694.", invalid: "\uC785\uB825 \uB0B4\uC6A9\uC744 \uD655\uC778\uD574 \uC8FC\uC138\uC694. \uBA54\uC77C \uCD08\uC548\uC740 \uC544\uC9C1 \uC5F4\uB9AC\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.", opened: "\uBA54\uC77C \uC571\uC774 \uC5F4\uB9AC\uBA74 \uB0B4\uC6A9\uC744 \uD655\uC778\uD558\uACE0 \uC9C1\uC811 \uBCF4\uB0B4 \uC8FC\uC138\uC694. \uC774 \uD654\uBA74\uC5D0\uC11C\uB294 \uBA54\uC77C\uC774 \uBC1C\uC1A1\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4." },
    error: { required: (label) => `${label}${label === "\uBA54\uC2DC\uC9C0" ? "\uB97C" : "\uC744"} \uC785\uB825\uD574 \uC8FC\uC138\uC694.`, length: (label, max) => `${label}\uC740 ${max}\uC790 \uC774\uB0B4\uB85C \uC785\uB825\uD574 \uC8FC\uC138\uC694.`, line: (label) => `${label}\uC744 \uD55C \uC904\uB85C \uC785\uB825\uD574 \uC8FC\uC138\uC694.`, email: "\uC62C\uBC14\uB978 \uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694.", nul: "\uBA54\uC2DC\uC9C0\uC5D0 \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uB294 \uBB38\uC790\uAC00 \uC788\uC2B5\uB2C8\uB2E4.", honeypot: "\uC694\uCCAD\uC744 \uCC98\uB9AC\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC785\uB825 \uB0B4\uC6A9\uC744 \uD655\uC778\uD574 \uC8FC\uC138\uC694.", mail: "\uBA54\uC77C \uC571\uC744 \uC5F4\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uC704\uC758 \uC774\uBA54\uC77C \uB9C1\uD06C\uB97C \uC774\uC6A9\uD574 \uC8FC\uC138\uC694." },
    asideLabel: "\uBB38\uC758 \uC548\uB0B4\uC640 \uBE60\uB978 \uB9C1\uD06C",
    note: ["\uC9C0\uAE08 \uC0DD\uAC01\uD558\uACE0 \uC788\uB294 \uD504\uB85C\uC81D\uD2B8\uAC00 \uC788\uB2E4\uBA74, \uBD80\uB2F4 \uC5C6\uC774 \uC774\uC57C\uAE30\uD574 \uC8FC\uC138\uC694.", "\uC791\uC740 \uC544\uC774\uB514\uC5B4\uB77C\uB3C4 \uC88B\uC544\uC694. \uD568\uAED8 \uC815\uB9AC\uD558\uACE0, \uB354 \uC88B\uC740 \uBC29\uD5A5\uC73C\uB85C \uBC1C\uC804\uC2DC\uCF1C \uB098\uAC00\uC694. :)"],
    quick: "\uBE60\uB978 \uB9C1\uD06C",
    portfolio: "\uD3EC\uD2B8\uD3F4\uB9AC\uC624 \uBCF4\uAE30",
    resume: "\uC774\uB825\uC11C \uBCF4\uAE30 (PDF)",
    faq: "\uC790\uC8FC \uBB3B\uB294 \uC9C8\uBB38",
    resumeUnavailable: "\uC774\uB825\uC11C PDF\uAC00 \uC544\uC9C1 \uC81C\uACF5\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.",
    faqUnavailable: "\uC790\uC8FC \uBB3B\uB294 \uC9C8\uBB38\uC758 \uB0B4\uC6A9\uC774 \uC544\uC9C1 \uC81C\uACF5\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4."
  },
  ja: {
    workLabel: "\u5236\u4F5C\u5B9F\u7E3E",
    workEyebrow: "02 / SELECTED WORK",
    category: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u5206\u985E",
    sort: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u4E26\u3073\u9806",
    all: "\u3059\u3079\u3066",
    latest: "\u65B0\u3057\u3044\u9806",
    original: "\u5143\u306E\u9806\u756A",
    count: (n) => `${n}\u4EF6\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8`,
    view: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u898B\u308B",
    unavailable: "\u6E96\u5099\u4E2D",
    mediaUnavailable: "\u30E1\u30C7\u30A3\u30A2\u3092\u6E96\u5099\u4E2D",
    mediaFailed: "\u30E1\u30C7\u30A3\u30A2\u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F\u3002",
    detail: (title) => `${title}\u306E\u8A73\u7D30\u3092\u898B\u308B`,
    main: (title) => `${title}\u3092Main\u3067\u898B\u308B`,
    noProjects: "\u3053\u306E\u5206\u985E\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306F\u3042\u308A\u307E\u305B\u3093\u3002",
    viewAll: "\u3059\u3079\u3066\u306E\u5236\u4F5C\u5B9F\u7E3E\u3092\u898B\u308B",
    image: (title) => `${title}\u306E\u30E1\u30A4\u30F3\u753B\u50CF`,
    aboutEyebrow: "03 / ABOUT THE DESIGNER",
    aboutLabel: "\u30C7\u30B6\u30A4\u30CA\u30FC\u7D39\u4ECB",
    name: "\u30CE\u30FB\u30CA\u30E0\u30B9",
    role: "UI/UX\u30C7\u30B6\u30A4\u30CA\u30FC / \u30D0\u30C3\u30AF\u30A8\u30F3\u30C9\u958B\u767A\u8005",
    headline: ["\u89B3\u5BDF\u3057\u3001\u8A18\u9332\u3057\u3001", "\u4F53\u9A13\u3092\u30C7\u30B6\u30A4\u30F3\u3057\u307E\u3059\u3002"],
    introduction: "\u65E5\u5E38\u306E\u5C0F\u3055\u306A\u6587\u8108\u3084\u30E6\u30FC\u30B6\u30FC\u306E\u884C\u52D5\u304B\u3089\u624B\u304C\u304B\u308A\u3092\u898B\u3064\u3051\u3001\u8A18\u9332\u3057\u3001\u69CB\u9020\u5316\u3059\u308B\u3053\u3068\u3067\u3001\u3088\u308A\u81EA\u7136\u3067\u610F\u5473\u306E\u3042\u308B\u4F53\u9A13\u3092\u30C7\u30B6\u30A4\u30F3\u3057\u307E\u3059\u3002",
    principlesLabel: "\u30C7\u30B6\u30A4\u30F3\u306E\u539F\u5247",
    principles: [["\u89B3\u5BDF", "\u65E5\u5E38\u306E\u6587\u8108\u3084\u30E6\u30FC\u30B6\u30FC\u306E\u884C\u52D5\u3092\u4E01\u5BE7\u306B\u89B3\u5BDF\u3057\u3001\u30C7\u30B6\u30A4\u30F3\u306E\u624B\u304C\u304B\u308A\u3092\u898B\u3064\u3051\u307E\u3059\u3002"], ["\u8A18\u9332", "\u89B3\u5BDF\u3057\u305F\u3053\u3068\u3092\u8003\u5BDF\u3068\u8CC7\u6599\u306B\u6574\u7406\u3057\u3001\u5FC5\u8981\u306A\u672C\u8CEA\u3092\u9078\u3073\u53D6\u3063\u3066\u3001\u30C7\u30B6\u30A4\u30F3\u306E\u65B9\u5411\u6027\u3092\u5177\u4F53\u5316\u3057\u307E\u3059\u3002"], ["\u3064\u306A\u3050", "\u30E6\u30FC\u30B6\u30FC\u3001\u6587\u8108\u3001\u6280\u8853\u3092\u6709\u6A5F\u7684\u306B\u3064\u306A\u304E\u3001\u3088\u308A\u81EA\u7136\u3067\u6301\u7D9A\u53EF\u80FD\u306A\u4F53\u9A13\u3078\u3068\u4ED5\u4E0A\u3052\u307E\u3059\u3002"]],
    tools: "\u30C4\u30FC\u30EB / \u30EF\u30FC\u30AF\u30D5\u30ED\u30FC",
    education: "\u5B66\u6B74",
    school: "\u6842\u5712\u82B8\u8853\u5927\u5B66 \xB7 \u30C7\u30B8\u30BF\u30EB\u30E1\u30C7\u30A3\u30A2\u30C7\u30B6\u30A4\u30F3\u5B66\u79D1 \xB7 2\u5E74\u6B21\u5352\u696D\u4E88\u5B9A",
    portrait: "\u30DD\u30FC\u30C8\u30EC\u30FC\u30C8 / \u8FFD\u52A0\u4E88\u5B9A",
    contactEyebrow: "04 / CONTACT",
    contactHeading: "\u304A\u8A71\u3057\u3057\u307E\u3057\u3087\u3046\u3002",
    contactIntroduction: ["\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u306E\u5354\u696D\u3084\u5236\u4F5C\u306E\u3054\u4F9D\u983C\u3001\u3061\u3087\u3063\u3068\u3057\u305F\u304A\u554F\u3044\u5408\u308F\u305B\u307E\u3067\u3001\u3044\u3064\u3067\u3082\u304A\u6C17\u8EFD\u306B\u3054\u9023\u7D61\u304F\u3060\u3055\u3044\u3002", "\u826F\u3044\u30A2\u30A4\u30C7\u30A2\u3084\u7D20\u6575\u306A\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4E00\u7DD2\u306B\u5F62\u306B\u3059\u308B\u3053\u3068\u3092\u3001\u3044\u3064\u3067\u3082\u6B53\u8FCE\u3057\u3066\u3044\u307E\u3059\u3002"],
    methodsLabel: "\u9023\u7D61\u65B9\u6CD5",
    methods: [{ title: "\u30E1\u30FC\u30EB", lines: ["\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u3054\u63D0\u6848\u3084\u5354\u696D\u306E\u3054\u76F8\u8AC7\u306A\u3069\u3001", "\u8A73\u3057\u3044\u304A\u8A71\u3092\u304A\u805E\u304B\u305B\u304F\u3060\u3055\u3044\u3002"], label: "\u30E1\u30FC\u30EB\u3092\u9001\u308B" }, { title: "Instagram", lines: ["\u5236\u4F5C\u306E\u304A\u77E5\u3089\u305B\u3084\u65E5\u3005\u306E\u8A18\u9332\u3092\u3001", "\u3044\u3061\u65E9\u304F\u3054\u89A7\u3044\u305F\u3060\u3051\u307E\u3059\u3002"], label: "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u3092\u898B\u308B" }, { title: "\u96FB\u8A71", lines: ["\u5236\u4F5C\u65E5\u7A0B\u3084\u304A\u6025\u304E\u306E\u304A\u554F\u3044\u5408\u308F\u305B\u306F\u3001", "\u304A\u96FB\u8A71\u3067\u304A\u8A71\u3057\u304F\u3060\u3055\u3044\u3002"] }],
    emailAction: (email) => `${email}\u306B\u30E1\u30FC\u30EB\u3092\u9001\u308B`,
    phoneAction: (phone) => `${phone}\u306B\u96FB\u8A71\u3092\u304B\u3051\u308B`,
    formLabel: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u304A\u554F\u3044\u5408\u308F\u305B",
    fields: { name: "\u304A\u540D\u524D", email: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9", subject: "\u4EF6\u540D", message: "\u30E1\u30C3\u30BB\u30FC\u30B8", website: "\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8" },
    send: "\u30E1\u30FC\u30EB\u30A2\u30D7\u30EA\u3067\u9001\u308B",
    sending: "\u30E1\u30FC\u30EB\u306E\u4E0B\u66F8\u304D\u3092\u958B\u3044\u3066\u3044\u307E\u3059\u2026",
    status: { initial: "\u9001\u4FE1\u30B5\u30FC\u30D0\u30FC\u306E\u4EE3\u308F\u308A\u306B\u3001\u30E1\u30FC\u30EB\u30A2\u30D7\u30EA\u3067\u4E0B\u66F8\u304D\u3092\u958B\u304D\u307E\u3059\u3002\u30E1\u30FC\u30EB\u306F\u3054\u81EA\u8EAB\u3067\u9001\u4FE1\u3057\u3066\u304F\u3060\u3055\u3044\u3002", invalid: "\u5165\u529B\u5185\u5BB9\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002\u30E1\u30FC\u30EB\u306E\u4E0B\u66F8\u304D\u306F\u307E\u3060\u958B\u3044\u3066\u3044\u307E\u305B\u3093\u3002", opened: "\u30E1\u30FC\u30EB\u30A2\u30D7\u30EA\u304C\u958B\u3044\u305F\u3089\u3001\u5185\u5BB9\u3092\u78BA\u8A8D\u3057\u3066\u9001\u4FE1\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u3053\u306E\u753B\u9762\u304B\u3089\u30E1\u30FC\u30EB\u306F\u9001\u4FE1\u3055\u308C\u307E\u305B\u3093\u3002" },
    error: { required: (label) => `${label}\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002`, length: (label, max) => `${label}\u306F${max}\u6587\u5B57\u4EE5\u5185\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002`, line: (label) => `${label}\u306F1\u884C\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002`, email: "\u6B63\u3057\u3044\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002", nul: "\u30E1\u30C3\u30BB\u30FC\u30B8\u306B\u4F7F\u7528\u3067\u304D\u306A\u3044\u6587\u5B57\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002", honeypot: "\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u51E6\u7406\u3067\u304D\u307E\u305B\u3093\u3002\u5165\u529B\u5185\u5BB9\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002", mail: "\u30E1\u30FC\u30EB\u30A2\u30D7\u30EA\u3092\u958B\u3051\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u4E0A\u306E\u30E1\u30FC\u30EB\u30EA\u30F3\u30AF\u3092\u3054\u5229\u7528\u304F\u3060\u3055\u3044\u3002" },
    asideLabel: "\u304A\u554F\u3044\u5408\u308F\u305B\u306E\u3054\u6848\u5185\u3068\u30AF\u30A4\u30C3\u30AF\u30EA\u30F3\u30AF",
    note: ["\u4ECA\u3001\u8003\u3048\u3066\u3044\u308B\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u304C\u3042\u308C\u3070\u3001\u304A\u6C17\u8EFD\u306B\u304A\u8A71\u3057\u304F\u3060\u3055\u3044\u3002", "\u5C0F\u3055\u306A\u30A2\u30A4\u30C7\u30A2\u3067\u3082\u69CB\u3044\u307E\u305B\u3093\u3002\u4E00\u7DD2\u306B\u6574\u7406\u3057\u3001\u3088\u308A\u826F\u3044\u65B9\u5411\u3078\u80B2\u3066\u3066\u3044\u304D\u307E\u3057\u3087\u3046\u3002 :)"],
    quick: "\u30AF\u30A4\u30C3\u30AF\u30EA\u30F3\u30AF",
    portfolio: "\u30DD\u30FC\u30C8\u30D5\u30A9\u30EA\u30AA\u3092\u898B\u308B",
    resume: "\u5C65\u6B74\u66F8\u3092\u898B\u308B (PDF)",
    faq: "\u3088\u304F\u3042\u308B\u3054\u8CEA\u554F",
    resumeUnavailable: "\u5C65\u6B74\u66F8\u306EPDF\u306F\u307E\u3060\u7528\u610F\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002",
    faqUnavailable: "\u3088\u304F\u3042\u308B\u3054\u8CEA\u554F\u306E\u5185\u5BB9\u306F\u307E\u3060\u7528\u610F\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002"
  },
  en: {
    workLabel: "Selected projects",
    workEyebrow: "02 / SELECTED WORK",
    category: "Project categories",
    sort: "Project order",
    all: "All",
    latest: "Latest",
    original: "Original order",
    count: (n) => `${n} projects`,
    view: "View project",
    unavailable: "Coming soon",
    mediaUnavailable: "Media coming soon",
    mediaFailed: "The media could not be loaded.",
    detail: (title) => `View ${title} details`,
    main: (title) => `View ${title} on Main`,
    noProjects: "There are no projects in this category.",
    viewAll: "View all work",
    image: (title) => `${title} cover image`,
    aboutEyebrow: "03 / ABOUT THE DESIGNER",
    aboutLabel: "About the designer",
    name: "Namsu Noh",
    role: "UI/UX designer / Backend developer",
    headline: ["Observe, document,", "and design experiences."],
    introduction: "I find clues in the small contexts of everyday life and in user behavior, then document and structure them to design more natural and meaningful experiences.",
    principlesLabel: "Design principles",
    principles: [["Observe", "I carefully observe everyday contexts and user behavior to discover clues for design."], ["Document", "I organize observations into thoughts and references, identify what matters, and give the design a clear direction."], ["Connect", "I connect users, context, and technology to create more natural and sustainable experiences."]],
    tools: "Tools / Workflow",
    education: "Education",
    school: "Kaywon University of Art & Design \xB7 Digital Media Design \xB7 Year 2, expected graduation",
    portrait: "Portrait / To be added",
    contactEyebrow: "04 / CONTACT",
    contactHeading: "Let\u2019s talk.",
    contactIntroduction: ["For project collaborations, commissions, or a quick question, feel free to get in touch anytime.", "I always welcome the chance to work together on good ideas and exciting projects."],
    methodsLabel: "Contact methods",
    methods: [{ title: "Email", lines: ["For project proposals, collaborations,", "and anything you would like to share."], label: "Send an email" }, { title: "Instagram", lines: ["Find the latest updates on my work", "and records of everyday life."], label: "View profile" }, { title: "Phone", lines: ["For project schedules or urgent inquiries,", "let\u2019s talk over the phone."] }],
    emailAction: (email) => `Email ${email}`,
    phoneAction: (phone) => `Call ${phone}`,
    formLabel: "Project inquiry",
    fields: { name: "Name", email: "Email", subject: "Subject", message: "Message", website: "Website" },
    send: "Open in your email app",
    sending: "Opening email draft\u2026",
    status: { initial: "This opens a draft in your email app instead of using a sending server. Please send the email yourself.", invalid: "Please check your entries. The email draft has not been opened yet.", opened: "When your email app opens, review the draft and send it yourself. No email is sent from this page." },
    error: { required: (label) => `Please enter your ${label.toLowerCase()}.`, length: (label, max) => `Keep ${label.toLowerCase()} within ${max} characters.`, line: (label) => `Enter ${label.toLowerCase()} on one line.`, email: "Please enter a valid email address.", nul: "The message contains a character that cannot be used.", honeypot: "The request could not be processed. Please check your entries.", mail: "The email app could not be opened. Please use the email link above." },
    asideLabel: "Inquiry notes and quick links",
    note: ["If you have a project in mind, feel free to tell me about it.", "Even a small idea is welcome. Let\u2019s organize it together and develop it in a better direction. :)"],
    quick: "Quick links",
    portfolio: "View portfolio",
    resume: "View r\xE9sum\xE9 (PDF)",
    faq: "Frequently asked questions",
    resumeUnavailable: "The r\xE9sum\xE9 PDF has not been provided yet.",
    faqUnavailable: "The frequently asked questions have not been provided yet."
  }
};
function usePageCopy() {
  const { locale } = useLocale();
  const language = Object.hasOwn(copy, locale) ? locale : "ko";
  return { locale: language, t: copy[language] };
}
function Arrow({ diagonal = false }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: diagonal ? "M5 19 19 5M5 5h14v14" : "M3 12h18m-8-8 8 8-8 8", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
var contact = { email: "jujono2@gmail.com", phone: "010-5177-8426", phoneHref: "tel:+821051778426" };
var fieldLimits = { name: 80, email: 254, subject: 120, message: 3e3, website: 200 };
var fieldKeys = ["name", "email", "subject", "message"];
var emptyFields = { name: "", email: "", subject: "", message: "", website: "" };
var controlCharacter = /[\u0000-\u001f\u007f]/u;
function validateFields(input) {
  const values = { name: input.name.trim(), email: input.email.trim(), subject: input.subject.trim(), message: input.message.replace(/\r\n?/gu, "\n").trim(), website: input.website.trim() };
  const errors = {};
  for (const name of fieldKeys) {
    if (!values[name]) errors[name] = "required";
    else if (values[name].length > fieldLimits[name]) errors[name] = "length";
  }
  for (const name of ["name", "subject"]) if (values[name] && controlCharacter.test(values[name])) errors[name] = "line";
  if (values.email && (controlCharacter.test(values.email) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/u.test(values.email))) errors.email = "email";
  if (values.message.includes("\0")) errors.message = "nul";
  return { values, errors, formError: values.website ? "honeypot" : null, valid: !values.website && Object.keys(errors).length === 0 };
}
function ContactIcon({ name }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", focusable: "false", children: [
    name === "email" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2 6h28v21H2z" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m2 6 14 12L30 6" })
    ] }),
    name === "instagram" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "1", y: "1", width: "30", height: "30", rx: "7" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "16", cy: "16", r: "6" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "25", cy: "7", r: "1", fill: "currentColor", stroke: "none" })
    ] }),
    name === "phone" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m8 2 5 7-4 4c2 5 5 8 10 10l4-4 7 5-3 6C13 31 1 19 2 5Z" })
  ] });
}
function ContactMethods({ t }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "archive-contact-methods", "aria-label": t.methodsLabel, children: ["email", "instagram", "phone"].map((id, index) => {
    const method = t.methods[index];
    const href = id === "email" ? `mailto:${contact.email}` : id === "phone" ? contact.phoneHref : "https://www.instagram.com/beginnerboy.design/";
    const label = id === "phone" ? contact.phone : method.label;
    const aria = id === "email" ? t.emailAction(contact.email) : id === "phone" ? t.phoneAction(contact.phone) : label;
    const title = id === "email" ? contact.email : id === "phone" ? contact.phone : "@beginnerboy.design";
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { className: "archive-contact-method", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "archive-contact-method__icon", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactIcon, { name: id }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: method.title }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: method.lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: line }, line)) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", { href, "aria-label": aria, title, target: id === "instagram" ? "_blank" : void 0, rel: id === "instagram" ? "noopener noreferrer" : void 0, children: [
          label,
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, { diagonal: true })
        ] })
      ] })
    ] }, id);
  }) });
}
function ContactForm({ t }) {
  const [values, setValues] = (0, import_react2.useState)(emptyFields);
  const [errors, setErrors] = (0, import_react2.useState)({});
  const [busy, setBusy] = (0, import_react2.useState)(false);
  const [status, setStatus] = (0, import_react2.useState)("initial");
  const [formError, setFormError] = (0, import_react2.useState)(null);
  const locked = (0, import_react2.useRef)(false);
  const timer = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => () => clearTimeout(timer.current), []);
  function change(name, value) {
    setValues((previous) => ({ ...previous, [name]: value }));
    if (name !== "website") setErrors((previous) => ({ ...previous, [name]: void 0 }));
    setFormError(null);
  }
  function submit(event) {
    event.preventDefault();
    if (locked.current) return;
    const form = event.currentTarget;
    const result = validateFields(values);
    setErrors(result.errors);
    setValues(result.values);
    setFormError(result.formError);
    if (!result.valid) {
      setStatus("invalid");
      const first = fieldKeys.find((name2) => result.errors[name2]);
      if (first) form.elements.namedItem(first)?.focus();
      return;
    }
    const { name, email, subject, message } = result.values;
    const body = `${t.fields.name}: ${name}
${t.fields.email}: ${email}

${message}`;
    const url = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    locked.current = true;
    setBusy(true);
    try {
      window.location.assign(url);
      setStatus("opened");
    } catch {
      setFormError("mail");
    } finally {
      timer.current = setTimeout(() => {
        locked.current = false;
        setBusy(false);
      }, 600);
    }
  }
  function fieldError(name) {
    const code = errors[name];
    if (!code) return null;
    if (code === "required" || code === "line") return t.error[code](t.fields[name]);
    if (code === "length") return t.error.length(t.fields[name], fieldLimits[name]);
    return t.error[code];
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", { className: "archive-contact-form", onSubmit: submit, noValidate: true, "aria-label": t.formLabel, "aria-describedby": "contact-form-status", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "archive-contact-form__honeypot", "aria-hidden": "true", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", { htmlFor: "contact-website", children: t.fields.website }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { id: "contact-website", name: "website", value: values.website, onChange: (event) => change("website", event.target.value), autoComplete: "off", tabIndex: -1, maxLength: fieldLimits.website })
    ] }),
    fieldKeys.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: `archive-contact-field ${name === "subject" || name === "message" ? "archive-contact-field--wide" : ""}`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { htmlFor: `contact-${name}`, children: [
        t.fields[name],
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { "aria-hidden": "true", children: "*" })
      ] }),
      name === "message" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", { id: `contact-${name}`, name, placeholder: `${t.fields[name]} *`, required: true, maxLength: fieldLimits[name], rows: 5, value: values[name], onChange: (event) => change(name, event.target.value), "aria-invalid": Boolean(errors[name]), "aria-describedby": errors[name] ? `contact-${name}-error` : void 0 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { id: `contact-${name}`, name, type: name === "email" ? "email" : "text", placeholder: `${t.fields[name]} *`, required: true, maxLength: fieldLimits[name], autoComplete: name === "name" ? "name" : name === "email" ? "email" : "off", value: values[name], onChange: (event) => change(name, event.target.value), "aria-invalid": Boolean(errors[name]), "aria-describedby": errors[name] ? `contact-${name}-error` : void 0 }),
      " ",
      errors[name] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "archive-contact-field__error", id: `contact-${name}-error`, children: fieldError(name) })
    ] }, name)),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { className: "archive-contact-form__submit", type: "submit", disabled: busy, children: [
      busy ? t.sending : t.send,
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, { diagonal: true })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "archive-contact-form__status", id: "contact-form-status", role: "status", "aria-live": "polite", children: t.status[status] }),
    formError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "archive-contact-form__error", role: "alert", children: t.error[formError] })
  ] });
}
function ContactPage() {
  const { locale, t } = usePageCopy();
  const c = contactCopy[locale];
  const text = { ...t, send: c.send, status: { ...t.status, initial: c.draftHint }, methods: t.methods.map((method, index) => index === 1 ? { ...method, label: c.profile } : method) };
  const { hrefFor } = (0, import_nams_selection.useProjectSelection)();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_nams_shell.PageFrame, { className: "archive-page archive-page--contact", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "archive-contact", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { className: "archive-contact__main", "aria-label": t.formLabel, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { className: "contact-intro", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "contact-eyebrow", children: "CONTACT" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { className: "contact-title", children: t.contactHeading }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "archive-contact__introduction", children: t.contactIntroduction.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: line }, line)) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactMethods, { t: text }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, { t: text })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", { className: "archive-contact__aside", "aria-label": t.asideLabel, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "archive-contact-note", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { "aria-hidden": "true" }),
        c.biography.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: line }, line))
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", { className: "archive-contact-quick", "aria-label": t.quick, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t.quick }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_nams_link.default, { href: hrefFor("/work"), children: [
          t.portfolio,
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { type: "button", disabled: true, title: t.resumeUnavailable, children: [
          t.resume,
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.unavailable }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { type: "button", disabled: true, title: c.coverUnavailable, children: [
          c.coverLetter,
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.unavailable }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { type: "button", disabled: true, title: t.faqUnavailable, children: [
          t.faq,
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.unavailable }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})
        ] })
      ] })
    ] })
  ] }) });
}

return module.exports;})().ContactPage;;var __pageRequire=require;var revisedPages=(function(){var module={exports:{}};var exports=module.exports;var originalRequire=__pageRequire;function require(name){if(name==='nams-current')return{useLocale,projects:originalRequire('nams-projects').projects,useProjectSelection:originalRequire('nams-selection').useProjectSelection,Link:originalRequire('nams-link')};return originalRequire(name)}
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// work/work-arrow-removal-20261116/src/index.ts
var index_exports = {};
__export(index_exports, {
  AboutPage: () => AboutPage,
  WorkPage: () => WorkPage
});
module.exports = __toCommonJS(index_exports);

// work/work-arrow-removal-20261116/src/WorkPage.tsx
var import_react2 = require("react");
var import_nams_current = require("nams-current");

// work/work-arrow-removal-20261116/src/useWorkMotion.ts
var import_react = require("react");
var CARD_SELECTOR = ".nams-work-card[data-project-id]";
var EASING = "cubic-bezier(0.22, 1, 0.36, 1)";
function useWorkMotion(ref) {
  (0, import_react.useEffect)(() => {
    const grid = ref.current;
    if (!grid) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const supported = typeof IntersectionObserver !== "undefined" && typeof MutationObserver !== "undefined" && typeof grid.animate === "function";
    if (!supported) {
      grid.dataset.workMotion = "static";
      return () => {
        delete grid.dataset.workMotion;
      };
    }
    let disposed = false;
    let usable = true;
    let resizeFrame = 0;
    let positions = /* @__PURE__ */ new Map();
    const seen = /* @__PURE__ */ new Set();
    const observed = /* @__PURE__ */ new Set();
    const animations = /* @__PURE__ */ new Map();
    const cards = () => Array.from(grid.querySelectorAll(`:scope > ${CARD_SELECTOR}`));
    const allowed = () => usable && !preference.matches && !document.hidden;
    const position = (card) => {
      const rect = card.getBoundingClientRect();
      return { x: rect.left + window.scrollX, y: rect.top + window.scrollY, width: rect.width, height: rect.height };
    };
    const visible = (card) => {
      const rect = card.getBoundingClientRect();
      return rect.bottom > 0 && rect.top < window.innerHeight && rect.right > 0 && rect.left < window.innerWidth;
    };
    const cancel = (card) => {
      const animation = animations.get(card);
      if (!animation) return;
      animations.delete(card);
      animation.onfinish = null;
      animation.oncancel = null;
      animation.cancel();
      delete card.dataset.workMotion;
    };
    const cancelAll = () => {
      for (const card of animations.keys()) cancel(card);
    };
    const animate = (card, kind, frames, duration, delay = 0) => {
      if (!allowed() || card.contains(document.activeElement)) return;
      cancel(card);
      try {
        const animation = card.animate(frames, { duration, delay, easing: EASING, fill: "backwards" });
        animations.set(card, animation);
        card.dataset.workMotion = kind;
        const done = () => {
          if (animations.get(card) !== animation) return;
          animations.delete(card);
          delete card.dataset.workMotion;
          animation.onfinish = null;
          animation.oncancel = null;
          animation.cancel();
          if (!disposed && card.isConnected) positions.set(card.dataset.projectId, position(card));
        };
        animation.onfinish = done;
        animation.oncancel = done;
      } catch {
        usable = false;
        cancelAll();
        grid.dataset.workMotion = "static";
      }
    };
    const entrance = new IntersectionObserver((entries2) => {
      if (disposed) return;
      const currentCards = cards();
      for (const entry of entries2) {
        if (!entry.isIntersecting) continue;
        const card = entry.target;
        if (!grid.contains(card)) continue;
        const id = card.dataset.projectId;
        entrance.unobserve(card);
        observed.delete(card);
        card.dataset.workRevealed = "true";
        if (seen.has(id)) continue;
        seen.add(id);
        if (!animations.has(card)) {
          const index = currentCards.indexOf(card);
          const twoColumns = currentCards.length > 1 && Math.abs(currentCards[0].offsetTop - currentCards[1].offsetTop) < 2;
          animate(card, "enter", [
            { opacity: 0, transform: "translateY(16px)" },
            { opacity: 1, transform: "translateY(0)" }
          ], 360, twoColumns && index % 2 === 1 ? 48 : 0);
        }
      }
    }, { threshold: 0.08 });
    const collect = (reflow) => {
      if (disposed) return;
      cancelAll();
      const currentCards = cards();
      const currentSet = new Set(currentCards);
      for (const card of observed) {
        if (!currentSet.has(card)) {
          entrance.unobserve(card);
          observed.delete(card);
        }
      }
      const next = /* @__PURE__ */ new Map();
      const measured = currentCards.map((card) => ({ card, rect: position(card) }));
      for (const { card, rect } of measured) {
        const id = card.dataset.projectId;
        next.set(id, rect);
        const previous = positions.get(id);
        if (reflow && previous && allowed() && visible(card)) {
          const x = previous.x - rect.x;
          const y = previous.y - rect.y;
          const unchangedSize = Math.abs(previous.width - rect.width) < 1 && Math.abs(previous.height - rect.height) < 1;
          if (unchangedSize && Math.abs(x) + Math.abs(y) > 1) {
            animate(card, "layout", [{ transform: `translate(${x}px, ${y}px)` }, { transform: "translate(0, 0)" }], 320);
          }
        }
        if (seen.has(id) || !allowed()) {
          card.dataset.workRevealed = "true";
          if (!allowed()) seen.add(id);
        } else if (!observed.has(card)) {
          observed.add(card);
          entrance.observe(card);
        }
      }
      positions = next;
      grid.dataset.workMotion = allowed() ? "ready" : "static";
    };
    const mutation = new MutationObserver(() => collect(true));
    const onResize = () => {
      cancelAll();
      positions.clear();
      if (resizeFrame) return;
      resizeFrame = window.requestAnimationFrame(() => {
        resizeFrame = 0;
        collect(false);
      });
    };
    const onVisibility = () => {
      if (document.hidden) {
        cancelAll();
        entrance.disconnect();
        observed.clear();
        grid.dataset.workMotion = "static";
        if (resizeFrame) window.cancelAnimationFrame(resizeFrame);
        resizeFrame = 0;
      } else {
        positions.clear();
        collect(false);
      }
    };
    const onPreference = () => {
      cancelAll();
      positions.clear();
      collect(false);
    };
    const onFocus = (event) => {
      const card = event.target instanceof Element ? event.target.closest(CARD_SELECTOR) : null;
      if (!card || !grid.contains(card)) return;
      cancel(card);
      const id = card.dataset.projectId;
      seen.add(id);
      card.dataset.workRevealed = "true";
      entrance.unobserve(card);
      observed.delete(card);
      positions.set(id, position(card));
    };
    collect(false);
    mutation.observe(grid, { childList: true });
    window.addEventListener("resize", onResize, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    grid.addEventListener("focusin", onFocus);
    preference.addEventListener("change", onPreference);
    return () => {
      disposed = true;
      mutation.disconnect();
      entrance.disconnect();
      cancelAll();
      if (resizeFrame) window.cancelAnimationFrame(resizeFrame);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
      grid.removeEventListener("focusin", onFocus);
      preference.removeEventListener("change", onPreference);
      delete grid.dataset.workMotion;
    };
  }, [ref]);
}

// work/work-arrow-removal-20261116/src/WorkPage.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var categories = ["all", "uiux", "web", "branding", "graphic", "3d"];
var copy = {
  ko: { filters: ["\uC804\uCCB4", "UI/UX", "\uC6F9", "\uBE0C\uB79C\uB529", "\uADF8\uB798\uD53D", "3D"], sort: "\uC815\uB82C", latest: "\uCD5C\uC2E0\uC21C", original: "\uAE30\uC874\uC21C", empty: "\uC774 \uBD84\uB958\uC758 \uC791\uC5C5\uC740 \uC900\uBE44 \uC911\uC785\uB2C8\uB2E4.", reset: "\uC804\uCCB4 \uBCF4\uAE30", pending: "\uC900\uBE44 \uC911", failed: "\uC774\uBBF8\uC9C0\uB97C \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.", detail: "\uD504\uB85C\uC81D\uD2B8 \uBCF4\uAE30" },
  ja: { filters: ["\u3059\u3079\u3066", "UI/UX", "\u30A6\u30A7\u30D6", "\u30D6\u30E9\u30F3\u30C7\u30A3\u30F3\u30B0", "\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF", "3D"], sort: "\u4E26\u3073\u9806", latest: "\u65B0\u3057\u3044\u9806", original: "\u63B2\u8F09\u9806", empty: "\u3053\u306E\u30AB\u30C6\u30B4\u30EA\u30FC\u306E\u4F5C\u54C1\u306F\u6E96\u5099\u4E2D\u3067\u3059\u3002", reset: "\u3059\u3079\u3066\u8868\u793A", pending: "\u6E96\u5099\u4E2D", failed: "\u753B\u50CF\u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F\u3002", detail: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u898B\u308B" },
  en: { filters: ["All", "UI/UX", "Web", "Branding", "Graphic", "3D"], sort: "Sort", latest: "Latest", original: "Original", empty: "Work in this category is being prepared.", reset: "View all", pending: "Coming soon", failed: "The image could not be loaded.", detail: "View project" }
};
var entries = [
  { id: "for-me", title: "FOR ME", categories: ["uiux"], label: ["UI/UX \uB514\uC790\uC778", "UI/UX\u30C7\u30B6\u30A4\u30F3", "UI/UX design"] },
  { id: "pop-ing", title: "POP-ING", categories: ["web"], label: ["\uC6F9 \xB7 \uC778\uD130\uB799\uC158", "\u30A6\u30A7\u30D6 \xB7 \u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3", "Web \xB7 Interaction"] },
  { id: "gentlemonster-pocket", title: "POCKET \xD7 GENTLE MONSTER", categories: ["web", "branding"], label: ["\uC6F9 \xB7 \uCEA0\uD398\uC778", "\u30A6\u30A7\u30D6 \xB7 \u30AD\u30E3\u30F3\u30DA\u30FC\u30F3", "Web \xB7 Campaign"] },
  { id: "no-fixed-form", title: "NO FIEXD FORM", categories: ["uiux"], label: ["UI/UX \uB514\uC790\uC778 \xB7 \uC778\uD130\uB799\uC158", "UI/UX\u30C7\u30B6\u30A4\u30F3 \xB7 \u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3", "UI/UX design \xB7 Interaction"] },
  { id: "sky-garden", title: "\uD558\uB298 \uC815\uC6D0", categories: ["3d"], label: ["3D \xB7 \uACF5\uAC04", "3D \xB7 \u7A7A\u9593", "3D \xB7 Space"] },
  { id: "uniqlo-uiux-redesign", title: "\uC720\uB2C8\uD074\uB85C UI/UX \uB9AC\uB514\uC790\uC778", categories: ["web", "uiux"], label: ["\uC6F9 \xB7 \uC778\uD130\uB799\uC158", "\u30A6\u30A7\u30D6 \xB7 \u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3", "Web \xB7 Interaction"] }
];
function ProjectCover({ src, srcSet, title, failedLabel }) {
  const [failed, setFailed] = (0, import_react2.useState)(false);
  return failed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "nams-work-card__failure", role: "status", children: failedLabel }) : (
    // Existing responsive assets are served directly by the static Cloudflare export.
    // eslint-disable-next-line @next/next/no-img-element
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { src, srcSet, sizes: "(max-width: 700px) 90vw, 45vw", alt: title, loading: "lazy", decoding: "async", ref: (image) => {
      if (image?.complete && image.naturalWidth === 0) setFailed(true);
    }, onError: () => setFailed(true) })
  );
}
function WorkPage() {
  const { locale } = (0, import_nams_current.useLocale)();
  const t = copy[locale];
  const selection = (0, import_nams_current.useProjectSelection)();
  const gridRef = (0, import_react2.useRef)(null);
  useWorkMotion(gridRef);
  const [category, setCategory] = (0, import_react2.useState)("all");
  const [order, setOrder] = (0, import_react2.useState)("latest");
  const { setCategory: sharedCategory, setOrder: sharedOrder } = selection;
  (0, import_react2.useEffect)(() => {
    const sync = () => {
      const query = new URLSearchParams(window.location.search);
      const value = query.get("category");
      const next = categories.includes(value) ? value : "all";
      const sorting = query.get("order") === "original" ? "original" : "latest";
      setCategory(next);
      setOrder(sorting);
      if (selection.category !== next) sharedCategory(next);
      if (selection.order !== sorting) sharedOrder(sorting);
    };
    sync();
    window.addEventListener("popstate", sync);
    return () => window.removeEventListener("popstate", sync);
  }, [selection.category, selection.order, sharedCategory, sharedOrder]);
  const choose = (value) => {
    setCategory(value);
    sharedCategory(value);
  };
  const sort = (value) => {
    const next = value === "original" ? "original" : "latest";
    setOrder(next);
    sharedOrder(next);
  };
  const shown = entries.filter((entry) => category === "all" || entry.categories.includes(category));
  const dated = shown.filter((entry) => import_nams_current.projects.find((project) => project.id === entry.id)?.year);
  if (order === "latest") dated.sort((a, b) => (import_nams_current.projects.find((p) => p.id === b.id)?.year || 0) - (import_nams_current.projects.find((p) => p.id === a.id)?.year || 0));
  let datedIndex = 0;
  const displayed = shown.map((entry) => import_nams_current.projects.find((p) => p.id === entry.id)?.year ? dated[datedIndex++] : entry);
  const languageIndex = { ko: 0, ja: 1, en: 2 }[locale];
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { id: "main-content", tabIndex: -1, className: "nams-work-page", "data-locale": locale, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "nams-work-heading", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "WORK." }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "nams-work-toolbar", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "nams-work-filters", role: "group", "aria-label": locale === "ko" ? "\uC791\uC5C5 \uBD84\uB958" : locale === "ja" ? "\u4F5C\u54C1\u30AB\u30C6\u30B4\u30EA\u30FC" : "Work categories", children: categories.map((id, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", "data-category": id, "aria-pressed": category === id, onClick: () => choose(id), children: t.filters[index] }, id)) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { className: "nams-work-sort", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "sr-only", children: t.sort }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", { "aria-label": t.sort, value: order, onChange: (event) => sort(event.target.value), children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: "latest", children: t.latest }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: "original", children: t.original })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "nams-work-grid", ref: gridRef, children: displayed.map((entry) => {
      const project = import_nams_current.projects.find((item) => item.id === entry.id);
      const available = project?.status === "published";
      const href = available ? project.externalUrl || (project.slug ? `/work/${project.slug}` : void 0) : void 0;
      const title = entry.id === "sky-garden" ? locale === "ja" ? "\u7A7A\u306E\u5EAD" : locale === "en" ? "Sky Garden" : entry.title : entry.id === "uniqlo-uiux-redesign" ? locale === "ko" ? entry.title : locale === "ja" ? "\u30E6\u30CB\u30AF\u30ED UI/UX \u30EA\u30C7\u30B6\u30A4\u30F3" : "UNIQLO UI/UX Redesign" : entry.title;
      const number = String(entries.findIndex((item) => item.id === entry.id) + 1).padStart(2, "0");
      const header = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "nams-work-card__number", children: number }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: title }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "nams-work-card__category", children: entry.label[languageIndex] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "nams-work-card__dots", "aria-hidden": "true", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
        ] })
      ] });
      const cover = project?.workImage && available ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCover, { src: project.workImage, srcSet: project.workImageSrcSet, title, failedLabel: t.failed }, project.workImage) : null;
      const caption = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "nams-work-card__caption", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: title }) });
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", { className: "nams-work-card", "data-project-id": entry.id, "data-status": href ? "published" : "draft", children: href ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_nams_current.Link, { className: "nams-work-card__bar", href, "aria-label": `${title} \u2014 ${t.detail}`, onClick: () => selection.rememberProject(entry.id), children: header }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_nams_current.Link, { className: "nams-work-card__media", href, "aria-label": `${title} \u2014 ${t.detail}`, onClick: () => selection.rememberProject(entry.id), children: [
          cover,
          caption
        ] })
      ] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "nams-work-card__bar", children: header }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "nams-work-card__media", "aria-label": `${title} \u2014 ${t.pending}`, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "sr-only", children: t.pending }) })
      ] }) }, entry.id);
    }) }),
    !displayed.length && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "nams-work-empty", role: "status", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t.empty }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", onClick: () => choose("all"), children: t.reset })
    ] })
  ] });
}

// work/work-arrow-removal-20261116/src/AboutPage.tsx
var import_nams_current2 = require("nams-current");
var import_jsx_runtime2 = require("react/jsx-runtime");
var copy2 = {
  ko: { hello: "\uC548\uB155\uD558\uC138\uC694. \uCF54\uB4DC\uB85C \uAD6C\uD604\uAE4C\uC9C0 \uD558\uB294 \uB514\uC790\uC774\uB108 \uACB8 \uAC1C\uBC1C\uC790\uC778 \uB178\uB0A8\uC218\uC785\uB2C8\uB2E4.", intro: "\uB514\uC790\uC778\uC758 \uACFC\uC815\uC744 \uAE30\uB85D\uD558\uACE0, \uCF54\uB4DC\uB85C \uACBD\uD5D8\uC744 \uAD6C\uD604\uD569\uB2C8\uB2E4.", about: ["\uB514\uC790\uC778\uC5D0\uC11C \uAD6C\uD604\uAE4C\uC9C0,", "\uACFC\uC815\uC744 \uC5F0\uACB0\uD558\uACE0 \uAE30\uB85D\uD569\uB2C8\uB2E4."], aboutDetail: "UI/UX \xB7 \uC2DC\uAC01 \uB514\uC790\uC778 \xB7 \uC778\uD130\uB799\uC158", school: ["\uACC4\uC6D0\uC608\uC220\uB300\uD559\uAD50", "\uB514\uC9C0\uD138\uBBF8\uB514\uC5B4\uB514\uC790\uC778\uACFC"], expert: ["UI/UX \xB7 \uC778\uD130\uB799\uC158 \uB514\uC790\uC778", "\uBE44\uC8FC\uC5BC \xB7 \uBE0C\uB79C\uB529"], expertDetail: "\uC6F9 \uAD6C\uD604 \xB7 3D \uACF5\uAC04 \uAD6C\uD604", resume: "\uC774\uB825\uC11C", letter: "\uC790\uAE30\uC18C\uAC1C\uC11C", projects: "\uD504\uB85C\uC81D\uD2B8 \uBCF4\uAE30", pending: "\uC900\uBE44 \uC911" },
  ja: { hello: "\u3053\u3093\u306B\u3061\u306F\u3002\u30B3\u30FC\u30C9\u3067\u5B9F\u88C5\u3059\u308B\u30C7\u30B6\u30A4\u30CA\u30FC\u517C\u958B\u767A\u8005\u3001\u30CE\u30FB\u30CA\u30E0\u30B9\u3067\u3059\u3002", intro: "\u30C7\u30B6\u30A4\u30F3\u306E\u904E\u7A0B\u3092\u8A18\u9332\u3057\u3001\u30B3\u30FC\u30C9\u3067\u4F53\u9A13\u3092\u5B9F\u88C5\u3057\u307E\u3059\u3002", about: ["\u30C7\u30B6\u30A4\u30F3\u304B\u3089\u5B9F\u88C5\u307E\u3067\u3001", "\u30D7\u30ED\u30BB\u30B9\u3092\u3064\u306A\u304E\u3001\u8A18\u9332\u3057\u307E\u3059\u3002"], aboutDetail: "UI/UX \xB7 \u30D3\u30B8\u30E5\u30A2\u30EB\u30C7\u30B6\u30A4\u30F3 \xB7 \u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3", school: ["\u6842\u5712\u82B8\u8853\u5927\u5B66", "\u30C7\u30B8\u30BF\u30EB\u30E1\u30C7\u30A3\u30A2\u30C7\u30B6\u30A4\u30F3\u5B66\u79D1"], expert: ["UI/UX \xB7 \u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u30C7\u30B6\u30A4\u30F3", "\u30D3\u30B8\u30E5\u30A2\u30EB \xB7 \u30D6\u30E9\u30F3\u30C7\u30A3\u30F3\u30B0"], expertDetail: "\u30A6\u30A7\u30D6\u5B9F\u88C5 \xB7 3D\u7A7A\u9593\u306E\u5B9F\u88C5", resume: "\u5C65\u6B74\u66F8", letter: "\u81EA\u5DF1\u7D39\u4ECB\u66F8", projects: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u898B\u308B", pending: "\u6E96\u5099\u4E2D" },
  en: { hello: "Hi, I\u2019m Namsu Noh, a designer and developer who builds with code.", intro: "I document the design process and build experiences with code.", about: ["From design to implementation,", "I connect and document the process."], aboutDetail: "UI/UX \xB7 Visual design \xB7 Interaction", school: ["Kaywon University of Art & Design", "Digital Media Design"], expert: ["UI/UX \xB7 Interaction design", "Visual \xB7 Branding"], expertDetail: "Web implementation \xB7 3D spaces", resume: "R\xE9sum\xE9", letter: "Cover letter", projects: "View projects", pending: "Coming soon" }
};
function AboutPage() {
  const { locale } = (0, import_nams_current2.useLocale)();
  const t = copy2[locale];
  const { hrefFor } = (0, import_nams_current2.useProjectSelection)();
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("main", { id: "main-content", tabIndex: -1, className: "nams-about-page", "data-locale": locale, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "nams-about-content", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("section", { className: "nams-about-hero", "aria-labelledby": "nams-about-title", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "nams-about-mark", "aria-hidden": "true" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "nams-about-intro", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("h1", { id: "nams-about-title", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: "DESIGNER" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: "& BUILDER." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h2", { children: t.hello }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { children: t.intro })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "nams-about-facts", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("section", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h2", { children: "ABOUT" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("strong", { children: t.about[0] }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("br", {}),
          t.about[1]
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "nams-about-muted", children: t.aboutDetail })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("section", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h2", { children: "EDUCATION" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("strong", { children: t.school[0] }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("br", {}),
          t.school[1]
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "nams-about-muted", children: "2023.03 \u2014 2027.02" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("section", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h2", { children: "EXPERTISE" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("p", { children: [
          t.expert[0],
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("br", {}),
          t.expert[1]
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "nams-about-muted", children: t.expertDetail })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("section", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h2", { children: "TOOLS" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("p", { children: [
          "Figma \xB7 VS Code",
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("br", {}),
          "Blender \xB7 After Effects"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "nams-about-muted", children: "AI : ChatGPT \xB7 Codex \xB7 Claude" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("nav", { className: "nams-about-explore", "aria-label": "Explore", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h2", { children: "EXPLORE" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { role: "link", "aria-disabled": "true", title: t.pending, children: [
        t.resume,
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: "sr-only", children: [
          " \u2014 ",
          t.pending
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { role: "link", "aria-disabled": "true", title: t.pending, children: [
        t.letter,
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: "sr-only", children: [
          " \u2014 ",
          t.pending
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_nams_current2.Link, { href: hrefFor("/work"), children: t.projects })
    ] })
  ] }) });
}

return module.exports;})();WorkPage=revisedPages.WorkPage;AboutPage=revisedPages.AboutPage;;SiteShell=(()=>{var module={exports:{}};var exports=module.exports;function require(name){if(name==='react')return a(2115);if(name==='react/jsx-runtime')return a(5155);if(name==='nams-link')return a.n(a(2619))();if(name==='nams-navigation')return{usePathname:a(63).usePathname};if(name==='nams-selection')return{useProjectSelection:a(2865).v};if(name==='nams-current-shell')return{SiteControls,WorkPage,AboutPage,ContactPage};throw Error('Unexpected main dependency '+name)}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// outputs/nams-archive/design/MainRedesign.jsx
var MainRedesign_exports = {};
__export(MainRedesign_exports, {
  RedesignedFooter: () => RedesignedFooter,
  RedesignedHeader: () => RedesignedHeader,
  RedesignedMain: () => RedesignedMain,
  RedesignedShell: () => RedesignedShell
});
module.exports = __toCommonJS(MainRedesign_exports);
var import_react5 = __toESM(require("react"), 1);
var import_nams_link = __toESM(require("nams-link"), 1);
var import_nams_navigation = require("nams-navigation");
var import_nams_selection = require("nams-selection");
var import_nams_current_shell = require("nams-current-shell");

// outputs/nams-archive/design/use-locale.js
var import_react = require("react");
var uiCopy = {
  ko: { language: "\uC5B8\uC5B4 \uC120\uD0DD", appearance: "\uD654\uBA74 \uBAA8\uB4DC", dark: "\uB2E4\uD06C \uBAA8\uB4DC", light: "\uD654\uC774\uD2B8 \uBAA8\uB4DC", switchDark: "\uB2E4\uD06C \uBAA8\uB4DC\uB85C \uC804\uD658", switchLight: "\uD654\uC774\uD2B8 \uBAA8\uB4DC\uB85C \uC804\uD658", navigation: "\uC8FC\uC694 \uBA54\uB274", home: "NAMS ARCHIVE \uBA54\uC778", skip: "\uBCF8\uBB38\uC73C\uB85C \uAC74\uB108\uB6F0\uAE30", screen: "\uC791\uD488 \uC0C1\uC601\uAD00", view: "\uD504\uB85C\uC81D\uD2B8 \uBCF4\uAE30", motion: "\uBAA8\uC158", failed: "\uC791\uD488 \uBBF8\uB514\uC5B4\uB97C \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.", instructions: "\uD654\uBA74\uC744 \uD074\uB9AD\uD558\uAC70\uB098 \uC2A4\uD06C\uB864\uD558\uACE0, \uC88C\uC6B0\uB85C \uC2A4\uC640\uC774\uD504\uD558\uAC70\uB098 \uBC29\uD5A5\uD0A4\uB97C \uB20C\uB7EC \uC791\uD488\uC744 \uC774\uB3D9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC2A4\uD398\uC774\uC2A4 \uD0A4\uB85C \uC601\uC0C1\uC744 \uC815\uC9C0\uD558\uAC70\uB098 \uC7AC\uC0DD\uD569\uB2C8\uB2E4." },
  ja: { language: "\u8A00\u8A9E\u3092\u9078\u629E", appearance: "\u8868\u793A\u30E2\u30FC\u30C9", dark: "\u30C0\u30FC\u30AF\u30E2\u30FC\u30C9", light: "\u30E9\u30A4\u30C8\u30E2\u30FC\u30C9", switchDark: "\u30C0\u30FC\u30AF\u30E2\u30FC\u30C9\u306B\u5207\u308A\u66FF\u3048", switchLight: "\u30E9\u30A4\u30C8\u30E2\u30FC\u30C9\u306B\u5207\u308A\u66FF\u3048", navigation: "\u30E1\u30A4\u30F3\u30E1\u30CB\u30E5\u30FC", home: "NAMS ARCHIVE \u30DB\u30FC\u30E0", skip: "\u672C\u6587\u3078\u30B9\u30AD\u30C3\u30D7", screen: "\u4F5C\u54C1\u30AE\u30E3\u30E9\u30EA\u30FC", view: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u898B\u308B", motion: "\u30E2\u30FC\u30B7\u30E7\u30F3", failed: "\u4F5C\u54C1\u306E\u30E1\u30C7\u30A3\u30A2\u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F\u3002", instructions: "\u753B\u9762\u306E\u30AF\u30EA\u30C3\u30AF\u3001\u30B9\u30AF\u30ED\u30FC\u30EB\u3001\u5DE6\u53F3\u3078\u306E\u30B9\u30EF\u30A4\u30D7\u3001\u307E\u305F\u306F\u77E2\u5370\u30AD\u30FC\u3067\u4F5C\u54C1\u3092\u5207\u308A\u66FF\u3048\u3089\u308C\u307E\u3059\u3002\u30B9\u30DA\u30FC\u30B9\u30AD\u30FC\u3067\u52D5\u753B\u3092\u4E00\u6642\u505C\u6B62\u30FB\u518D\u751F\u3057\u307E\u3059\u3002" },
  en: { language: "Choose language", appearance: "Appearance", dark: "Dark mode", light: "Light mode", switchDark: "Switch to dark mode", switchLight: "Switch to light mode", navigation: "Main navigation", home: "NAMS ARCHIVE home", skip: "Skip to content", screen: "Project cinema", view: "View project", motion: "motion", failed: "The project media could not be loaded.", instructions: "Click, scroll, swipe left or right, or use the arrow keys to move between projects. Press Space to pause or play the video." }
};
function useLocale() {
  const [locale, setLocale] = (0, import_react.useState)("ko");
  (0, import_react.useEffect)(() => {
    const sync = () => setLocale(window.NamsLocale?.get() || "ko");
    sync();
    window.addEventListener("nams:localechange", sync);
    return () => window.removeEventListener("nams:localechange", sync);
  }, []);
  const chooseLocale = (0, import_react.useCallback)((next) => window.NamsLocale?.set(next), []);
  return { locale, chooseLocale, copy: uiCopy[locale] };
}

// outputs/nams-archive/design/main-artwork.js
var mainArtwork = {
  "logo": '<path d="M90 69.5625H92.9817V54.9747C92.9817 53.8603 92.9486 51.6992 92.8326 48.5756C94.6051 51.5979 95.9966 53.9279 96.6757 55.0085L105.72 69.5625H109.182V44.4053H106.201V60.6477C106.201 61.4919 106.25 63.67 106.3 65.4259C105.306 63.6362 104.18 61.7283 103.6 60.7828L93.429 44.4053H90V69.5625Z"/><path d="M113.9 69.5625H117.134L119.714 62.505H130.413L132.925 69.5625H136.227L126.87 44.4053H123.361L113.9 69.5625ZM120.695 59.8035L122.673 54.4006C123.327 52.6278 124.015 50.6017 125.116 47.2587C126.216 50.6017 126.904 52.6278 127.541 54.4006L129.467 59.8035H120.695Z"/><path d="M141.101 69.5625H143.995V54.9747C143.995 53.2694 143.963 51.1082 143.898 49.0315C144.825 51.5303 145.605 53.6915 146.109 54.9747L151.768 69.5625H154.175L159.802 54.9747C160.322 53.624 161.135 51.3277 162.062 48.66C162.013 50.855 161.964 53.1681 161.964 54.9747V69.5625H164.843V44.4053H160.842L154.793 60.6477C154.37 61.8127 153.541 64.0414 153.02 65.561C152.484 64.0414 151.671 61.8127 151.232 60.6477L145.085 44.4053H141.101V69.5625Z"/><path d="M180.138 69.9678C186.055 69.9678 190 67.0131 190 62.6401C190 59.1282 187.516 56.9671 182.22 55.7514L179.133 55.0423C175.189 54.1305 173.673 52.9993 173.673 51.0408C173.673 48.5419 176.175 46.786 179.7 46.786C183.389 46.786 185.781 48.6939 185.982 51.8343H189.233C189.087 47.0055 185.471 44.0001 179.809 44.0001C174.129 44.0001 170.422 46.8535 170.422 51.1927C170.422 54.6202 172.723 56.6125 178.275 57.8788L181.325 58.571C185.251 59.4659 186.712 60.6815 186.712 62.7752C186.712 65.4766 184.101 67.1988 180.138 67.1988C175.773 67.1988 173.234 65.0545 173.234 61.4582H169.874C169.874 66.6923 173.855 69.9678 180.138 69.9678Z"/>',
  "design": '<path d="M145.139 300.06C171.902 300.06 192.881 307.485 208.076 322.334C223.443 337.011 231.127 358.076 231.127 385.53C231.127 412.984 223.443 434.136 208.076 448.985C192.881 463.662 171.902 471 145.139 471H89.972V300.06H145.139ZM147.211 451.575C166.722 451.575 181.917 445.791 192.795 434.222C203.846 422.481 209.371 406.25 209.371 385.53C209.371 364.81 203.846 348.666 192.795 337.097C181.917 325.356 166.722 319.485 147.211 319.485H110.692V451.575H147.211ZM276.634 471V300.06H396.551V319.485H297.354V374.652H374.536V394.077H297.354V451.575H400.436V471H276.634ZM496.705 297.47C511.727 297.47 524.677 300.578 535.555 306.794C546.433 312.837 555.498 321.816 562.75 333.73L545.397 347.198C539.009 336.147 531.757 328.377 523.641 323.888C515.699 319.226 506.029 316.895 494.633 316.895C485.482 316.895 477.885 318.19 471.841 320.78C465.971 323.37 461.654 326.823 458.891 331.14C456.129 335.284 454.747 340.032 454.747 345.385C454.747 351.428 456.647 356.781 460.445 361.443C464.244 365.932 471.841 369.472 483.237 372.062L520.274 380.35C536.678 383.976 548.074 389.501 554.462 396.926C561.024 404.178 564.304 413.243 564.304 424.121C564.304 433.79 561.542 442.424 556.016 450.021C550.664 457.446 543.066 463.23 533.224 467.374C523.382 471.518 511.814 473.59 498.518 473.59C486.086 473.59 475.122 471.95 465.625 468.669C456.301 465.216 448.272 460.64 441.538 454.942C434.804 449.244 429.279 442.855 424.962 435.776L443.092 421.013C446.373 427.574 450.603 433.359 455.783 438.366C460.963 443.373 467.179 447.258 474.431 450.021C481.856 452.784 490.317 454.165 499.813 454.165C508.619 454.165 516.217 453.129 522.605 451.057C529.167 448.812 534.174 445.618 537.627 441.474C541.081 437.157 542.807 431.977 542.807 425.934C542.807 420.409 540.994 415.488 537.368 411.171C533.742 406.682 526.922 403.315 516.907 401.07L476.762 392.005C466.23 389.588 457.683 386.307 451.121 382.163C444.733 377.846 440.071 372.839 437.135 367.141C434.373 361.27 432.991 354.968 432.991 348.234C432.991 339.083 435.495 330.708 440.502 323.111C445.682 315.341 453.021 309.125 462.517 304.463C472.187 299.801 483.583 297.47 496.705 297.47ZM628.439 300.06V471H607.719V300.06H628.439ZM753.251 473.59C737.02 473.59 722.948 470.05 711.034 462.971C699.292 455.719 690.141 445.532 683.58 432.409C677.191 419.286 673.997 403.66 673.997 385.53C673.997 367.4 677.364 351.774 684.098 338.651C691.004 325.528 700.587 315.427 712.847 308.348C725.106 301.096 739.178 297.47 755.064 297.47C771.985 297.47 785.712 300.664 796.245 307.053C806.95 313.442 815.583 323.284 822.145 336.579L803.238 346.939C799.439 337.097 793.396 329.672 785.108 324.665C776.992 319.485 766.978 316.895 755.064 316.895C743.495 316.895 733.221 319.658 724.243 325.183C715.437 330.536 708.444 338.392 703.264 348.752C698.256 358.939 695.753 371.199 695.753 385.53C695.753 399.861 697.911 412.207 702.228 422.567C706.717 432.754 713.278 440.611 721.912 446.136C730.718 451.489 741.423 454.165 754.028 454.165C761.107 454.165 767.668 453.302 773.712 451.575C779.928 449.676 785.28 446.913 789.77 443.287C794.432 439.661 798.058 435.085 800.648 429.56C803.238 424.035 804.533 417.56 804.533 410.135V404.178H750.143V384.753H823.44V471H807.123L806.087 439.143L810.49 439.92C806 450.625 798.921 458.913 789.252 464.784C779.582 470.655 767.582 473.59 753.251 473.59ZM1005.94 300.06V471H980.299L908.815 356.522L890.685 324.406H890.426L891.462 350.306V471H871.778V300.06H897.419L968.644 414.02L987.033 446.913H987.292L986.256 420.754V300.06H1005.94Z"/>',
  "builder": '<path d="M943.22 833V691.1H993.745C1010.51 691.1 1022.77 694.612 1030.51 701.635C1038.25 708.658 1042.12 718.19 1042.12 730.23C1042.12 737.397 1040.04 743.918 1035.89 749.795C1031.73 755.528 1025.85 759.183 1018.26 760.76V760.975C1026.71 762.552 1033.38 766.422 1038.25 772.585C1043.27 778.605 1045.78 785.485 1045.78 793.225C1045.78 805.265 1041.26 814.94 1032.23 822.25C1023.2 829.417 1010.3 833 993.53 833H943.22ZM960.42 816.875H997.615C1007.79 816.875 1015.32 814.797 1020.19 810.64C1025.21 806.483 1027.72 800.678 1027.72 793.225C1027.72 785.628 1025.21 779.823 1020.19 775.81C1015.32 771.653 1007.79 769.575 997.615 769.575H960.42V816.875ZM960.42 753.45H993.96C1014.03 753.45 1024.06 745.71 1024.06 730.23C1024.06 714.893 1014.03 707.225 993.96 707.225H960.42V753.45ZM1192.26 691.1V780.11C1192.26 798.313 1187.46 812.073 1177.85 821.39C1168.25 830.563 1154.49 835.15 1136.57 835.15C1118.8 835.15 1105.04 830.563 1095.29 821.39C1085.69 812.073 1080.89 798.313 1080.89 780.11V691.1H1098.09V775.81C1098.09 790.573 1101.17 801.467 1107.33 808.49C1113.64 815.513 1123.39 819.025 1136.57 819.025C1149.76 819.025 1159.44 815.513 1165.6 808.49C1171.91 801.467 1175.06 790.573 1175.06 775.81V691.1H1192.26ZM1253.11 691.1V833H1235.91V691.1H1253.11ZM1316.72 816.875H1397.99V833H1299.52V691.1H1316.72V816.875ZM1473.81 691.1C1496.03 691.1 1513.45 697.263 1526.06 709.59C1538.82 721.773 1545.19 739.26 1545.19 762.05C1545.19 784.84 1538.82 802.398 1526.06 814.725C1513.45 826.908 1496.03 833 1473.81 833H1428.02V691.1H1473.81ZM1475.53 816.875C1491.73 816.875 1504.34 812.073 1513.37 802.47C1522.55 792.723 1527.13 779.25 1527.13 762.05C1527.13 744.85 1522.55 731.448 1513.37 721.845C1504.34 712.098 1491.73 707.225 1475.53 707.225H1445.22V816.875H1475.53ZM1582.97 833V691.1H1682.52V707.225H1600.17V753.02H1664.24V769.145H1600.17V816.875H1685.74V833H1582.97ZM1773.83 691.1C1788.3 691.1 1799.91 694.827 1808.66 702.28C1817.4 709.733 1821.77 719.838 1821.77 732.595C1821.77 745.352 1817.33 755.313 1808.44 762.48C1799.7 769.503 1788.09 773.015 1773.61 773.015L1772.11 774.09H1737.28V833H1720.08V691.1H1773.83ZM1773.61 757.965C1783.79 757.965 1791.31 755.887 1796.19 751.73C1801.2 747.43 1803.71 741.052 1803.71 732.595C1803.71 724.138 1801.2 717.832 1796.19 713.675C1791.31 709.375 1783.79 707.225 1773.61 707.225H1737.28V757.965H1773.61ZM1783.5 761.405L1830.37 833H1809.95L1769.1 770.865L1783.5 761.405Z"/>',
  "ampersand": '<path d="M735.47 835.15C726.01 835.15 717.912 833.502 711.175 830.205C704.438 826.908 699.278 822.393 695.695 816.66C692.112 810.927 690.32 804.333 690.32 796.88C690.32 792.293 690.893 787.993 692.04 783.98C693.33 779.823 695.337 775.882 698.06 772.155C700.783 768.428 704.438 764.917 709.025 761.62C713.755 758.323 719.56 755.242 726.44 752.375L735.47 747.86C740.917 744.85 745.432 742.055 749.015 739.475C752.598 736.752 755.25 733.813 756.97 730.66C758.833 727.507 759.765 723.78 759.765 719.48C759.765 714.463 758.188 710.593 755.035 707.87C752.025 705.003 747.868 703.57 742.565 703.57C736.402 703.57 731.815 705.29 728.805 708.73C725.938 712.027 724.505 715.897 724.505 720.34C724.505 723.063 724.863 725.715 725.58 728.295C726.297 730.732 727.802 733.813 730.095 737.54C732.532 741.267 736.115 746.212 740.845 752.375C745.575 758.538 751.953 766.637 759.98 776.67C768.15 786.703 774.887 794.802 780.19 800.965C785.493 806.985 790.008 811.572 793.735 814.725C797.462 817.735 800.902 819.742 804.055 820.745C807.352 821.748 810.935 822.25 814.805 822.25L810.505 835.15C806.348 835.15 802.407 834.648 798.68 833.645C795.097 832.642 791.083 830.492 786.64 827.195C782.34 823.898 777.108 818.953 770.945 812.36C764.925 805.767 757.4 796.952 748.37 785.915C740.63 776.312 734.18 768.213 729.02 761.62C723.86 755.027 719.775 749.437 716.765 744.85C713.755 740.263 711.605 736.107 710.315 732.38C709.025 728.51 708.38 724.568 708.38 720.555C708.38 715.395 709.598 710.378 712.035 705.505C714.615 700.632 718.485 696.69 723.645 693.68C728.805 690.527 735.47 688.95 743.64 688.95C749.803 688.95 755.178 690.097 759.765 692.39C764.352 694.683 767.935 697.98 770.515 702.28C773.238 706.58 774.6 711.668 774.6 717.545C774.6 722.562 773.74 727.363 772.02 731.95C770.443 736.393 767.362 740.837 762.775 745.28C758.332 749.58 751.667 754.095 742.78 758.825L735.47 761.62C728.017 765.06 722.212 768.428 718.055 771.725C713.898 774.878 710.96 778.318 709.24 782.045C707.52 785.772 706.66 790.215 706.66 795.375C706.66 800.678 708.022 805.265 710.745 809.135C713.468 813.005 717.123 816.015 721.71 818.165C726.297 820.172 731.457 821.175 737.19 821.175C745.073 821.175 751.738 819.742 757.185 816.875C762.632 814.008 767.648 809.923 772.235 804.62L775.03 802.04C778.757 796.163 781.623 789.498 783.63 782.045C785.78 774.592 786.497 766.278 785.78 757.105L800.4 758.395C800.973 767.568 799.97 776.598 797.39 785.485C794.953 794.372 791.012 802.398 785.565 809.565L782.34 814.08C776.893 820.53 770.3 825.69 762.56 829.56C754.82 833.287 745.79 835.15 735.47 835.15Z"/>'
};

// outputs/nams-archive/design/RotatingSlogan.jsx
var import_react3 = __toESM(require("react"), 1);

// outputs/nams-archive/design/use-media-preference.js
var import_react2 = require("react");
function useMediaPreference(query) {
  const [matches, setMatches] = (0, import_react2.useState)(false);
  (0, import_react2.useEffect)(() => {
    const media = window.matchMedia(query);
    const sync = () => setMatches(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, [query]);
  return matches;
}

// outputs/nams-archive/design/RotatingSlogan.jsx
var import_jsx_runtime = require("react/jsx-runtime");
var SLOGAN_HOLD_MS = 4800;
var SLOGAN_TRANSITION_MS = 650;
var controls = {"ko":{"region":"메인 슬로건"},"ja":{"region":"メインスローガン"},"en":{"region":"Main slogan"}};
function RotatingSlogan({ phrases, locale = "ko" }) {
  const reducedMotion = useMediaPreference("(prefers-reduced-motion: reduce)");
  const [frame, setFrame] = (0, import_react3.useState)({ index: 0, phase: "hold" });
  const [hovered, setHovered] = (0, import_react3.useState)(false);
  const [focused, setFocused] = (0, import_react3.useState)(false);
  const [hidden, setHidden] = (0, import_react3.useState)(false);
  const clock = (0, import_react3.useRef)({ key: "0:hold", remaining: SLOGAN_HOLD_MS });
  const t = controls[locale] || controls.ko;
  const paused = hovered || focused || hidden || reducedMotion;
  (0, import_react3.useEffect)(() => {
    const sync = () => setHidden(document.visibilityState === "hidden");
    sync();
    document.addEventListener("visibilitychange", sync);
    return () => document.removeEventListener("visibilitychange", sync);
  }, []);
  (0, import_react3.useEffect)(() => {
    if (reducedMotion) {
      clock.current = { key: "0:hold", remaining: SLOGAN_HOLD_MS };
      setFrame({ index: 0, phase: "hold" });
    }
  }, [reducedMotion]);
  (0, import_react3.useEffect)(() => {
    const key = `${frame.index}:${frame.phase}`;
    if (clock.current.key !== key) {
      clock.current = { key, remaining: frame.phase === "hold" ? SLOGAN_HOLD_MS : SLOGAN_TRANSITION_MS };
    }
    if (paused || phrases.length < 2) return;
    const started = performance.now();
    let active = true;
    const timer = window.setTimeout(() => {
      if (!active) return;
      setFrame((previous) => previous.phase === "hold" ? { ...previous, phase: "transition" } : { index: (previous.index + 1) % phrases.length, phase: "hold" });
    }, clock.current.remaining);
    return () => {
      active = false;
      window.clearTimeout(timer);
      clock.current.remaining = Math.max(0, clock.current.remaining - (performance.now() - started));
    };
  }, [frame.index, frame.phase, paused, phrases.length]);
  const index = reducedMotion ? 0 : frame.index;
  const transitioning = frame.phase === "transition" && !reducedMotion;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "rotating-slogan-group", "data-paused": paused, "data-index": index, "data-phase": frame.phase, "data-reduced-motion": reducedMotion, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        className: "rotating-slogan__viewport",
        tabIndex: "0",
        role: "group",
        "aria-label": t.region,
        onMouseEnter: () => setHovered(true),
        onMouseLeave: () => setHovered(false),
        onFocus: () => setFocused(true),
        onBlur: (event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { className: "rotating-slogan", "aria-live": "off", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "sr-only", children: phrases[0] }),
          phrases.map((phrase) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "rotating-slogan__measure", "aria-hidden": "true", children: phrase }, phrase)),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "rotating-slogan__line", "aria-hidden": "true", "data-phase": transitioning ? "exit" : "current", children: phrases[index] }, index),
          transitioning && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "rotating-slogan__line", "aria-hidden": "true", "data-phase": "enter", children: phrases[(index + 1) % phrases.length] }, (index + 1) % phrases.length)
        ] })
      }
    )
  ] });
}

// NAMS Main type masks: source src/TypeMaskHero.tsx
var useTypeMaskHero = (function(){var module={exports:{}};var exports=module.exports;
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/TypeMaskHero.tsx
var TypeMaskHero_exports = {};
__export(TypeMaskHero_exports, {
  useTypeMaskHero: () => useTypeMaskHero
});
module.exports = __toCommonJS(TypeMaskHero_exports);
var import_react = require("react");
var INTRO_MS = 600;
var FOLLOW_MS = 32;
var EXIT_MS = 320;
var AMPERSAND_EXIT_MS = 280;
var AMPERSAND_BAND_PX = 48;
var LINE_FLASH_ANIMATION = "main-ampersand-line-flash";
var SVG_NS = "http://www.w3.org/2000/svg";
var TARGETS = {
  design: ".redesigned-main__design > svg",
  builder: ".redesigned-main__builder > svg:not(.redesigned-main__ampersand)",
  ampersand: ".redesigned-main__ampersand"
};
var introComplete = false;
var controllerSequence = 0;
function svgNode(document, tag, attributes = {}) {
  const element = document.createElementNS(SVG_NS, tag);
  for (const [name, value] of Object.entries(attributes)) element.setAttribute(name, String(value));
  return element;
}
function attachTypeMasks(root) {
  const document = root.ownerDocument;
  const window = document.defaultView;
  if (!window) return () => {
  };
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
  const words = [];
  const cleanups = [];
  const divider = root.querySelector(".redesigned-main__statement > span");
  let frame = null;
  let previousTime = 0;
  let introAt = null;
  let visible = true;
  let geometryDirty = true;
  let pointer = null;
  let destroyed = false;
  const sequence = ++controllerSequence;
  const setPhase = (word, phase) => {
    if (word.phase === phase) return;
    word.phase = phase;
    word.svg.dataset.maskState = phase;
  };
  const paint = (word) => {
    for (const rect of [word.cutout, word.clip]) {
      rect.setAttribute("x", String(word.x));
      rect.setAttribute("width", String(Math.max(0, word.width)));
    }
  };
  const stop = () => {
    if (frame !== null) window.cancelAnimationFrame(frame);
    frame = null;
    previousTime = 0;
    root.dataset.typeMaskRaf = "idle";
  };
  const stopLineFlash = () => {
    delete root.dataset.ampersandFlash;
  };
  const reset = () => {
    stop();
    stopLineFlash();
    introAt = null;
    pointer = null;
    for (const word of words) {
      word.width = 0;
      word.targetWidth = 0;
      setPhase(word, reduced.matches || !fine.matches ? "static" : "idle");
      paint(word);
    }
  };
  const cleanup = () => {
    if (destroyed) return;
    destroyed = true;
    stop();
    stopLineFlash();
    for (const dispose of cleanups) dispose();
    for (const word of words) {
      if (word.originalMask === null) word.fill.removeAttribute("mask");
      else word.fill.setAttribute("mask", word.originalMask);
      word.fill.removeAttribute("data-type-mask-fill");
      word.defs.remove();
      word.outline.remove();
      delete word.svg.dataset.typeWord;
      delete word.svg.dataset.maskState;
    }
    delete root.dataset.typeMaskReady;
    delete root.dataset.typeMaskRaf;
  };
  try {
    if (!("SVGMaskElement" in window) || !("IntersectionObserver" in window)) return cleanup;
    for (const name of Object.keys(TARGETS)) {
      const selector = TARGETS[name];
      const svg = root.querySelector(selector);
      const fill = svg?.querySelector(":scope > g");
      if (!svg || !fill || !svg.getScreenCTM || !svg.createSVGPoint) throw new Error("SVG enhancement unavailable");
      const box = svg.viewBox.baseVal;
      const id = `nams-type-${sequence}-${name}`;
      const defs = svgNode(document, "defs");
      const mask = svgNode(document, "mask", {
        id: `${id}-fill`,
        maskUnits: "userSpaceOnUse",
        maskContentUnits: "userSpaceOnUse",
        x: box.x - 8,
        y: box.y - 8,
        width: box.width + 16,
        height: box.height + 16
      });
      mask.style.maskType = "luminance";
      mask.append(svgNode(document, "rect", {
        x: box.x - 8,
        y: box.y - 8,
        width: box.width + 16,
        height: box.height + 16,
        fill: "white"
      }));
      const cutout = svgNode(document, "rect", {
        "data-mask-cutout": "",
        x: box.x,
        y: box.y - 8,
        width: 0,
        height: box.height + 16,
        fill: "black"
      });
      mask.append(cutout);
      const clipping = svgNode(document, "clipPath", { id: `${id}-outline`, clipPathUnits: "userSpaceOnUse" });
      const clip = svgNode(document, "rect", { x: box.x, y: box.y - 8, width: 0, height: box.height + 16 });
      clipping.append(clip);
      defs.append(mask, clipping);
      const outline = fill.cloneNode(true);
      outline.setAttribute("class", "type-mask-outline");
      outline.setAttribute("fill", "none");
      outline.setAttribute("stroke", "currentColor");
      outline.setAttribute("stroke-width", "1.5");
      outline.setAttribute("clip-path", `url(#${id}-outline)`);
      outline.setAttribute("pointer-events", "none");
      outline.setAttribute("aria-hidden", "true");
      for (const path of Array.from(outline.querySelectorAll("path"))) path.setAttribute("vector-effect", "non-scaling-stroke");
      const phase = name === "ampersand" && (!fine.matches || reduced.matches) ? "static" : "idle";
      const word = {
        name,
        svg,
        fill,
        defs,
        outline,
        cutout,
        clip,
        bounds: svg.getBoundingClientRect(),
        inverse: null,
        x: box.x,
        width: 0,
        targetX: box.x,
        targetWidth: 0,
        leaveWidth: 0,
        leaveAt: 0,
        phase,
        originalMask: fill.getAttribute("mask")
      };
      words.push(word);
      svg.prepend(defs);
      svg.append(outline);
      fill.setAttribute("mask", `url(#${id}-fill)`);
      fill.setAttribute("data-type-mask-fill", "");
      svg.dataset.typeWord = name;
      svg.dataset.maskState = phase;
    }
    const refreshGeometry = () => {
      for (const word of words) {
        word.bounds = word.svg.getBoundingClientRect();
        word.inverse = word.svg.getScreenCTM()?.inverse() ?? null;
      }
      geometryDirty = false;
    };
    const bandWidth = (word) => {
      const screenWidth = word.name === "ampersand" ? Math.min(AMPERSAND_BAND_PX, word.bounds.width * 0.4) : Math.max(80, Math.round(window.innerWidth / 8 / 8) * 8);
      return screenWidth * (word.inverse?.a ?? word.svg.viewBox.baseVal.width / Math.max(1, word.bounds.width));
    };
    const leave = (word, now) => {
      if (word.phase !== "active") return;
      word.leaveAt = now;
      word.leaveWidth = word.width;
      word.targetWidth = 0;
      setPhase(word, "leaving");
    };
    const tick = (now) => {
      frame = null;
      if (destroyed || document.hidden || !visible || reduced.matches) {
        reset();
        return;
      }
      if (geometryDirty) refreshGeometry();
      const dt = previousTime ? Math.min(64, now - previousTime) : 16;
      previousTime = now;
      let running = false;
      const active = fine.matches && pointer ? words.find((word) => pointer && pointer.x >= word.bounds.left && pointer.x <= word.bounds.right && pointer.y >= word.bounds.top && pointer.y <= word.bounds.bottom) : void 0;
      if (active && pointer) {
        if (introAt !== null) {
          introAt = null;
          for (const word of words) {
            word.width = 0;
            setPhase(word, "idle");
          }
        }
        const point = active.svg.createSVGPoint();
        point.x = pointer.x;
        point.y = pointer.y;
        const localX = active.inverse ? point.matrixTransform(active.inverse).x : active.svg.viewBox.baseVal.x;
        active.targetWidth = bandWidth(active);
        active.targetX = localX - active.targetWidth / 2;
        if (active.phase !== "active") {
          active.x = active.targetX;
          if (active.name === "ampersand" && divider?.getBoundingClientRect().width) {
            root.dataset.ampersandFlash = "true";
          }
        }
        setPhase(active, "active");
      }
      for (let index = 0; index < words.length; index++) {
        const word = words[index];
        if (introAt !== null && word.name !== "ampersand") {
          const elapsed = now - introAt - index * 40;
          const progress = Math.min(1, Math.max(0, elapsed / 560));
          const box = word.svg.viewBox.baseVal;
          word.width = bandWidth(word);
          word.x = box.x - word.width + (box.width + word.width) * progress;
          setPhase(word, "intro");
          if (elapsed >= 560) {
            word.width = 0;
            setPhase(word, fine.matches ? "idle" : "static");
          }
          running = now - introAt < INTRO_MS;
        } else if (word === active) {
          const alpha = 1 - Math.exp(-dt / FOLLOW_MS);
          word.x += (word.targetX - word.x) * alpha;
          word.width += (word.targetWidth - word.width) * alpha;
          if (Math.abs(word.targetX - word.x) < 0.05 && Math.abs(word.targetWidth - word.width) < 0.05) {
            word.x = word.targetX;
            word.width = word.targetWidth;
          } else running = true;
        } else {
          leave(word, now);
          if (word.phase === "leaving") {
            const duration = word.name === "ampersand" ? AMPERSAND_EXIT_MS : EXIT_MS;
            const progress = Math.min(1, (now - word.leaveAt) / duration);
            word.width = word.leaveWidth * (1 - progress) ** 3;
            if (progress === 1) {
              word.width = 0;
              setPhase(word, fine.matches ? "idle" : "static");
            } else running = true;
          }
        }
        paint(word);
      }
      if (introAt !== null && now - introAt >= INTRO_MS) introAt = null;
      if (running) schedule();
      else {
        previousTime = 0;
        root.dataset.typeMaskRaf = "idle";
      }
    };
    const schedule = () => {
      if (frame !== null || destroyed || document.hidden || !visible || reduced.matches) return;
      root.dataset.typeMaskRaf = "running";
      frame = window.requestAnimationFrame((now) => {
        try {
          tick(now);
        } catch {
          cleanup();
        }
      });
    };
    const move = (event) => {
      if (event.pointerType !== "mouse" || !fine.matches || reduced.matches) return;
      pointer = { x: event.clientX, y: event.clientY };
      schedule();
    };
    const exit = () => {
      pointer = null;
      if (words.some((word) => word.phase === "active")) schedule();
    };
    const invalidate = () => {
      geometryDirty = true;
      reset();
    };
    const visibility = () => {
      if (document.hidden) reset();
    };
    const preference = () => {
      reset();
    };
    const flashFinished = (event) => {
      if (event.animationName === LINE_FLASH_ANIMATION) stopLineFlash();
    };
    const listen = (target, name, listener) => {
      target.addEventListener(name, listener, { passive: true });
      cleanups.push(() => target.removeEventListener(name, listener));
    };
    root.addEventListener("pointermove", move, { passive: true });
    root.addEventListener("pointerleave", exit, { passive: true });
    cleanups.push(() => {
      root.removeEventListener("pointermove", move);
      root.removeEventListener("pointerleave", exit);
    });
    divider?.addEventListener("animationend", flashFinished);
    divider?.addEventListener("animationcancel", flashFinished);
    cleanups.push(() => {
      divider?.removeEventListener("animationend", flashFinished);
      divider?.removeEventListener("animationcancel", flashFinished);
    });
    listen(window, "resize", invalidate);
    listen(window, "scroll", invalidate);
    listen(window, "blur", reset);
    document.addEventListener("visibilitychange", visibility);
    reduced.addEventListener("change", preference);
    fine.addEventListener("change", preference);
    cleanups.push(() => {
      document.removeEventListener("visibilitychange", visibility);
      reduced.removeEventListener("change", preference);
      fine.removeEventListener("change", preference);
    });
    const observer = new IntersectionObserver((entries) => {
      visible = entries[0]?.isIntersecting ?? false;
      if (!visible) reset();
    });
    observer.observe(root);
    cleanups.push(() => observer.disconnect());
    if ("ResizeObserver" in window) {
      const resize = new ResizeObserver(() => {
        geometryDirty = true;
      });
      for (const word of words) resize.observe(word.svg);
      cleanups.push(() => resize.disconnect());
    }
    root.dataset.typeMaskReady = "true";
    root.dataset.typeMaskRaf = "idle";
    if (!introComplete) {
      introComplete = true;
      if (!reduced.matches && !document.hidden) {
        introAt = window.performance.now();
        schedule();
      } else reset();
    } else reset();
    return cleanup;
  } catch {
    cleanup();
    return () => {
    };
  }
}
function useTypeMaskHero() {
  const root = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => root.current ? attachTypeMasks(root.current) : void 0, []);
  return root;
}

return module.exports;})().useTypeMaskHero;

// outputs/nams-archive/design/MainRedesign.jsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var navigation = [["/", "Main"], ["/work", "Work"], ["/about", "About"], ["/contact", "Contact"]];
var mainCopy = {
  ko: { statement: "\uB9C9\uD600\uB3C4 \uBA48\uCD94\uC9C0 \uC54A\uACE0, \uACC4\uC18D \uC131\uC7A5\uD569\uB2C8\uB2E4" },
  ja: { statement: "\u58C1\u306B\u3076\u3064\u304B\u3063\u3066\u3082\u7ACB\u3061\u6B62\u307E\u3089\u305A\u3001\u6210\u9577\u3057\u7D9A\u3051\u307E\u3059" },
  en: { statement: "I keep moving, learning, and growing." }
};
var slogans = {
  ko: ["\uC9C1\uC811 \uB514\uC790\uC778\uD558\uACE0, \uAD6C\uD604\uAE4C\uC9C0 \uD558\uB294 \uB514\uC790\uC774\uB108", "\uD53D\uC140\uC5D0\uC11C \uCF54\uB4DC\uAE4C\uC9C0, \uC9C1\uC811 \uC644\uC131\uD558\uB294 \uB514\uC790\uC774\uB108", "\uB514\uC790\uC778\uACFC \uCF54\uB4DC\uB97C \uC5F0\uACB0\uD574, \uD558\uB098\uC758 \uACBD\uD5D8\uC744 \uB9CC\uB4DC\uB294 \uB514\uC790\uC774\uB108", "\uB514\uC790\uC778\uC5D0\uC11C \uBA48\uCD94\uC9C0 \uC54A\uACE0, \uAD6C\uD604\uAE4C\uC9C0 \uC774\uC5B4\uAC00\uB294 \uB514\uC790\uC774\uB108"],
  ja: ["\u30C7\u30B6\u30A4\u30F3\u304B\u3089\u5B9F\u88C5\u307E\u3067\u624B\u304C\u3051\u308B\u30C7\u30B6\u30A4\u30CA\u30FC", "\u30D4\u30AF\u30BB\u30EB\u304B\u3089\u30B3\u30FC\u30C9\u307E\u3067\u3001\u81EA\u3089\u5B8C\u6210\u3055\u305B\u308B\u30C7\u30B6\u30A4\u30CA\u30FC", "\u30C7\u30B6\u30A4\u30F3\u3068\u30B3\u30FC\u30C9\u3092\u3064\u306A\u304E\u3001\u3072\u3068\u3064\u306E\u4F53\u9A13\u3092\u3064\u304F\u308B\u30C7\u30B6\u30A4\u30CA\u30FC", "\u30C7\u30B6\u30A4\u30F3\u3067\u6B62\u307E\u3089\u305A\u3001\u5B9F\u88C5\u307E\u3067\u3064\u306A\u3052\u308B\u30C7\u30B6\u30A4\u30CA\u30FC"],
  en: ["A designer who designs and builds.", "From pixels to code, I bring ideas to life.", "Connecting design and code to create one experience.", "Taking design further, all the way to implementation."]
};
function RedesignedHeader({ pathname = "/" }) {
  const { hrefFor } = (0, import_nams_selection.useProjectSelection)();
  const { copy } = useLocale();
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("header", { className: "site-header page-width redesigned-header", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_nams_link.default, { className: "redesigned-brand", href: hrefFor("/"), "aria-label": copy.home, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", { viewBox: "87 43 104 28", width: "104", height: "28", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("g", { fill: "currentColor", dangerouslySetInnerHTML: { __html: mainArtwork.logo } }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("nav", { className: "site-nav", "aria-label": copy.navigation, children: navigation.map(([href, label]) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_nams_link.default, { href: hrefFor(href), "aria-current": pathname === href ? "page" : void 0, children: label }, href)) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_nams_current_shell.SiteControls, {})
  ] });
}
function RedesignedFooter() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("footer", { className: "redesigned-footer", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "redesigned-footer__identity", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_nams_link.default, { href: "/", className: "redesigned-brand", "aria-label": "NAMS Main", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", { viewBox: "87 43 104 28", width: "104", height: "28", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("g", { fill: "currentColor", dangerouslySetInnerHTML: { __html: mainArtwork.logo } }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: "Design \xD7 Code \xB7 Implementation" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "2026 PORTFOLIO NAMS" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "redesigned-footer__links", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { href: "mailto:jujono2@gmail.com", children: "E-mail" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { "aria-hidden": "true", children: "/" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { href: "https://www.instagram.com/beginnerboy.design/", target: "_blank", rel: "noopener noreferrer", children: "Instagram" })
    ] })
  ] });
}
var useMainNoteReveal = (function(){var module={exports:{}};var exports=module.exports;
"use strict";var s=Object.defineProperty;var u=Object.getOwnPropertyDescriptor;var d=Object.getOwnPropertyNames;var c=Object.prototype.hasOwnProperty;var f=(t,e)=>{for(var a in e)s(t,a,{get:e[a],enumerable:!0})},v=(t,e,a,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of d(e))!c.call(t,n)&&n!==a&&s(t,n,{get:()=>e[n],enumerable:!(i=u(e,n))||i.enumerable});return t};var g=t=>v(s({},"__esModule",{value:!0}),t);var R={};f(R,{useMainNoteReveal:()=>E});module.exports=g(R);var r=require("react"),N="nams-main-note-reveal";function E(){let t=(0,r.useRef)(null);return(0,r.useLayoutEffect)(()=>{let e=t.current,a=e?.ownerDocument,i=a?.defaultView;if(!e||!a||!i)return;let n=a.documentElement;if(n.dataset.namsMainNoteEntered)return;let l=i.requestAnimationFrame(()=>{if(n.dataset.namsMainNoteEntered)return;e.dataset.noteRevealing="true",n.dataset.namsMainNoteEntered="true";let m=(e.getAnimations?.({subtree:!0})??[]).filter(o=>"animationName"in o&&o.animationName===N);if(!m.length){delete e.dataset.noteRevealing;return}Promise.allSettled(m.map(o=>o.finished)).then(()=>{delete e.dataset.noteRevealing})});return()=>{i.cancelAnimationFrame(l),delete e.dataset.noteRevealing}},[]),t}
return module.exports;})().useMainNoteReveal;
function RedesignedMain() {
  const { locale } = useLocale();
  const t = mainCopy[locale] || mainCopy.ko;
  const heroRef = useTypeMaskHero();
  const noteRef = useMainNoteReveal();
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("main", { id: "main-content", ref: heroRef, className: "redesigned-main", "data-locale": locale, tabIndex: "-1", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h1", { className: "sr-only", children: "DESIGN & BUILDER" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "redesigned-main__note", ref: noteRef, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "DESIGNER & BUILDER" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: t.statement }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "FROM IDEA TO INTERACTION" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "redesigned-main__design", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", { viewBox: "85 297 925 177", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("g", { fill: "currentColor", dangerouslySetInnerHTML: { __html: mainArtwork.design } }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "redesigned-main__statement", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(RotatingSlogan, { locale, phrases: slogans[locale] || slogans.ko }, locale),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { "aria-hidden": "true" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "redesigned-main__builder", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", { className: "redesigned-main__ampersand", viewBox: "684 689 132 147", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("g", { fill: "currentColor", dangerouslySetInnerHTML: { __html: mainArtwork.ampersand } }) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", { viewBox: "937 689 893 146", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("g", { fill: "currentColor", dangerouslySetInnerHTML: { __html: mainArtwork.builder } }) })
    ] })
  ] });
}
function RedesignedShell({ children }) {
  const pathname = (0, import_nams_navigation.usePathname)();
  const { copy } = useLocale();
  const previousPath = (0, import_react5.useRef)(pathname);
  const Page = { "/": RedesignedMain, "/work": import_nams_current_shell.WorkPage, "/about": import_nams_current_shell.AboutPage, "/contact": import_nams_current_shell.ContactPage }[pathname];
  (0, import_react5.useEffect)(() => {
    if (previousPath.current === pathname) return;
    previousPath.current = pathname;
    const main = document.getElementById("main-content");
    main?.setAttribute("tabindex", "-1");
    main?.focus({ preventScroll: true });
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  if (pathname.startsWith("/work/")) return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_jsx_runtime3.Fragment, { children });
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "archive-layout redesigned-layout", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { className: "skip-link", href: "#main-content", children: copy.skip }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(RedesignedHeader, { pathname }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "page-transition", "data-motion": pathname === "/" ? "idle" : "enter", children: Page ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Page, {}) : children }, pathname),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(RedesignedFooter, {})
  ] });
}

return module.exports;})().RedesignedShell;},7595:e=>{e.exports={content:"contact_content__qLFZm",main:"contact_main__8bdi5",eyebrow:"contact_eyebrow__V8zrN",heading:"contact_heading__T4Axr",introduction:"contact_introduction__GO1hN",methods:"contact_methods__aXff3",method:"contact_method__IgLSm",methodIcon:"contact_methodIcon__0DwmS",methodContent:"contact_methodContent__uIagk",unavailable:"contact_unavailable__8OHEr",form:"contact_form__OKD5W",field:"contact_field__IjJuW",fullWidth:"contact_fullWidth__FUM31",fieldError:"contact_fieldError__ml4Ew",formError:"contact_formError__Dq4UJ",submit:"contact_submit__PO4zs",formStatus:"contact_formStatus__1a9U2",honeypot:"contact_honeypot__Z1PEG",visuallyHidden:"contact_visuallyHidden__syOms",sidebar:"contact_sidebar__lwa83",note:"contact_note__Z34ZQ",noteDash:"contact_noteDash__qzgGF",noteCopy:"contact_noteCopy__KNz5F",quickLinks:"contact_quickLinks___rwYz",quickList:"contact_quickList__JnO00",preparing:"contact_preparing__kuyJH"}}},e=>{e.O(0,[732,619,394,441,255,358],()=>e(e.s=4716)),_N_E=e.O()}]);