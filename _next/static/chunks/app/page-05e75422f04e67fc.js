(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{1487:(e,t,a)=>{"use strict";a.d(t,{dt:()=>n,eP:()=>r,t1:()=>i});let n=[{id:"gentlemonster-pocket",title:"포켓 X 젠틀 몬스터",categories:["uiux","web"],categoryLabel:"UI/UX",year:2026,image:"/assets/projects/gentlemonster-pocket/motion-poster.webp",workImage:"/assets/projects/work/pocket-device-mockup-1600.webp",workImageSrcSet:"/assets/projects/work/pocket-device-mockup-960.webp 960w, /assets/projects/work/pocket-device-mockup-1600.webp 1600w",poster:"/assets/projects/gentlemonster-pocket/motion-poster.webp",video:"/assets/projects/gentlemonster-pocket/persona-lab-1920x1080.mp4",slug:"gentlemonster-pocket",status:"published",summary:"POCKET COLLECTION을 중심으로 구성한 웹 리디자인과 모션 쇼잉입니다."},{id:"for-me",title:"FOR ME",categories:["uiux"],categoryLabel:"UI/UX",year:2026,image:"/assets/projects/for-me-cover-20261022.webp",workImage:"/assets/projects/work/for-me-device-mockup-1600.webp",workImageSrcSet:"/assets/projects/work/for-me-device-mockup-960.webp 960w, /assets/projects/work/for-me-device-mockup-1600.webp 1600w",externalUrl:"https://for-me-c67.pages.dev/",status:"published",summary:"내 옷과 하루의 상황을 연결하는 스마트 드레싱 UIUX 프로젝트입니다."},{id:"yohji-yamamoto-redesign",title:"요지 야마모토 리디자인",categories:["uiux"],categoryLabel:"UI/UX",year:null,image:null,summary:null,status:"draft"},{id:"sky-garden",title:"하늘정원",categories:["3d"],categoryLabel:"3D",year:null,image:null,summary:null,status:"draft"},{id:"pop-ing",title:"POP-ING",categories:["uiux","3d"],categoryLabel:"UI/UX / 3D",year:null,image:null,summary:null,status:"draft"},{id:"ten-storytelling",title:"10 Storytelling",categories:["uiux"],categoryLabel:"UI/UX",year:null,image:null,summary:null,status:"draft"}],r=[{id:"all",label:"All"},{id:"uiux",label:"UI/UX"},{id:"web",label:"Web"},{id:"branding",label:"Branding"},{id:"3d",label:"3D"}];function i(e){var t;return null!=(t=n.find(t=>t.id===e))?t:n[0]}},1971:()=>{},2865:(e,t,a)=>{"use strict";a.d(t,{ProjectSelectionProvider:()=>o,v:()=>d});var n=a(5155),r=a(2115),i=a(63),s=a(1487);let l=(0,r.createContext)(null);function o(e){let{children:t}=e,a=(0,i.useRouter)(),o=(0,i.usePathname)(),[d,c]=(0,r.useState)(s.dt[0].id),[u,m]=(0,r.useState)("all"),[h,p]=(0,r.useState)("latest");(0,r.useEffect)(()=>{function e(){let e=new URLSearchParams(window.location.search);if(c((0,s.t1)(e.get("project")).id),"/work"===window.location.pathname){let t=e.get("category");m(s.eP.some(e=>e.id===t)?t:"all"),p("original"===e.get("order")?"original":"latest")}}return e(),window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)},[o]);let g=(0,r.useCallback)((e,t,a)=>{let n=new URL(window.location.href);t===a?n.searchParams.delete(e):n.searchParams.set(e,t),n.href!==window.location.href&&window.history.pushState({},"",n)},[]),v=(0,r.useCallback)((e,t)=>{let n=(0,s.t1)(e);c(n.id),t?a.push("".concat(t,"?").concat(new URLSearchParams({project:n.id}))):g("project",n.id)},[a,g]),w=(0,r.useCallback)(e=>{let t=(0,s.t1)(e);c(t.id);let a=new URL(window.location.href);a.searchParams.set("project",t.id),window.history.replaceState(window.history.state,"",a)},[]),f=(0,r.useCallback)(e=>{m(e),g("category",e,"all")},[g]),y=(0,r.useCallback)(e=>{p(e),g("order",e,"latest")},[g]),x=(0,r.useCallback)(e=>{let t=new URLSearchParams({project:d});return"/work"===e&&("all"!==u&&t.set("category",u),"latest"!==h&&t.set("order",h)),"".concat(e,"?").concat(t)},[d,u,h]),j=(0,r.useMemo)(()=>({project:(0,s.t1)(d),category:u,order:h,selectProject:v,rememberProject:w,setCategory:f,setOrder:y,hrefFor:x}),[d,u,h,v,w,f,y,x]);return(0,n.jsx)(l.Provider,{value:j,children:t})}function d(){let e=(0,r.useContext)(l);if(!e)throw Error("ProjectSelectionProvider is required");return e}},3961:(e,t,a)=>{var module={exports:{}};var exports=module.exports;function require(name){if(name==="react")return a(2115);if(name==="react/jsx-runtime")return a(5155);if(name==="nams-selection")return{useProjectSelection:a(2865).v};if(name==="nams-projects")return{projects:a(1487).dt};throw Error("Unexpected gallery dependency: "+name)}
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

// work/public-gallery-integration/design/ProjectStage.jsx
var ProjectStage_exports = {};
__export(ProjectStage_exports, {
  ProjectStage: () => ProjectStage
});
module.exports = __toCommonJS(ProjectStage_exports);
var import_react3 = __toESM(require("react"));
var import_nams_selection = require("nams-selection");
var import_nams_projects = require("nams-projects");

// work/public-gallery-integration/design/use-theme.js
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

// work/public-gallery-integration/design/use-locale.js
var import_react2 = require("react");
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

// work/public-gallery-integration/design/ProjectStage.jsx
var import_jsx_runtime = require("react/jsx-runtime");
var films = import_nams_projects.projects.filter((item) => item.status === "published" && (item.image || item.video));
var isControl = (target) => Boolean(target?.closest?.('a,button,input,select,textarea,[role="button"]'));
var blocksGesture = (target) => isControl(target) && !target?.closest?.(".gallery-public-link");
var validHref = (item) => {
  if (item.status !== "published") return null;
  if (item.externalUrl) {
    try {
      const url = new URL(item.externalUrl);
      return url.protocol === "https:" && !url.username && !url.password ? url.href : null;
    } catch {
      return null;
    }
  }
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(item.slug || "") ? `/work/${item.slug}` : null;
};
var instructions = {
  ko: "\uC791\uD488 \uD654\uBA74\uC744 \uD074\uB9AD\uD558\uBA74 \uC0C1\uC138\uAC00 \uC5F4\uB9BD\uB2C8\uB2E4. \uC2A4\uD06C\uB864, \uC88C\uC6B0 \uB4DC\uB798\uADF8 \uB610\uB294 \uC2A4\uC640\uC774\uD504\uB85C \uC791\uD488\uC744 \uBC14\uAFB8\uC138\uC694. \uC804\uC2DC \uACF5\uAC04\uC5D0 \uD3EC\uCEE4\uC2A4\uD55C \uB4A4 \uBC29\uD5A5\uD0A4\uB85C \uC791\uD488\uC744 \uC120\uD0DD\uD558\uACE0, \uC2A4\uD398\uC774\uC2A4 \uD0A4\uB85C \uC601\uC0C1\uC744 \uC815\uC9C0\uD558\uAC70\uB098 \uC7AC\uC0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
  ja: "\u4F5C\u54C1\u753B\u9762\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u8A73\u7D30\u304C\u958B\u304D\u307E\u3059\u3002\u30B9\u30AF\u30ED\u30FC\u30EB\u3001\u5DE6\u53F3\u306E\u30C9\u30E9\u30C3\u30B0\u307E\u305F\u306F\u30B9\u30EF\u30A4\u30D7\u3067\u4F5C\u54C1\u3092\u5207\u308A\u66FF\u3048\u3089\u308C\u307E\u3059\u3002\u5C55\u793A\u7A7A\u9593\u306B\u30D5\u30A9\u30FC\u30AB\u30B9\u3057\u3066\u77E2\u5370\u30AD\u30FC\u3067\u4F5C\u54C1\u3092\u9078\u629E\u3057\u3001\u30B9\u30DA\u30FC\u30B9\u30AD\u30FC\u3067\u52D5\u753B\u3092\u4E00\u6642\u505C\u6B62\u30FB\u518D\u751F\u3067\u304D\u307E\u3059\u3002",
  en: "Click the artwork screen to open its project. Scroll, drag or swipe horizontally to change works. Focus the gallery to select works with the arrow keys or pause and play the video with Space."
};
function ExhibitMedia({ item, title, autoplay, onReady, onFailure, failedCopy }) {
  const videoRef = (0, import_react3.useRef)(null);
  const imageRef = (0, import_react3.useRef)(null);
  const [videoFailed, setVideoFailed] = (0, import_react3.useState)(false);
  const [posterFailed, setPosterFailed] = (0, import_react3.useState)(false);
  const [imageFailed, setImageFailed] = (0, import_react3.useState)(false);
  const useVideo = Boolean(item.video && !videoFailed);
  const imageSource = videoFailed && item.poster && !posterFailed ? item.poster : item.image;
  (0, import_react3.useEffect)(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.error) {
      setVideoFailed(true);
      return;
    }
    if (video.readyState >= 2) onReady(video);
    if (autoplay) void video.play().catch(() => {
    });
    else video.pause();
    return () => video.pause();
  }, [autoplay, useVideo, onReady]);
  (0, import_react3.useEffect)(() => {
    const image = imageRef.current;
    if (image?.complete && image.naturalWidth > 0) onReady(image);
  }, [imageSource, useVideo, onReady]);
  if (useVideo) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "video",
    {
      ref: videoRef,
      className: "gallery-public-artwork",
      src: item.video,
      poster: item.poster || item.image,
      muted: true,
      playsInline: true,
      loop: true,
      autoPlay: autoplay,
      preload: autoplay ? "auto" : "metadata",
      "aria-label": title,
      onLoadedData: (event) => onReady(event.currentTarget),
      onError: () => setVideoFailed(true)
    }
  );
  if (imageSource && !imageFailed) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "img",
    {
      ref: imageRef,
      className: "gallery-public-artwork",
      src: imageSource,
      alt: title,
      loading: "eager",
      decoding: "async",
      draggable: false,
      onLoad: (event) => onReady(event.currentTarget),
      onError: () => {
        if (imageSource === item.poster) setPosterFailed(true);
        if (imageSource === item.image) {
          setImageFailed(true);
          onFailure();
        }
      }
    }
  );
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "sr-only", children: failedCopy });
}
function ProjectStage() {
  const { project, rememberProject } = (0, import_nams_selection.useProjectSelection)();
  const { theme } = useTheme();
  const { locale, copy } = useLocale();
  const item = films.find((film) => film.id === project.id) || films[0];
  const titleFor = (film) => film.id === "gentlemonster-pocket" ? { ko: film.title, ja: "POCKET \xD7 GENTLE MONSTER", en: "POCKET \xD7 GENTLE MONSTER" }[locale] || film.title : film.title;
  const title = titleFor(item);
  const stageRef = (0, import_react3.useRef)(null);
  const canvasHostRef = (0, import_react3.useRef)(null);
  const activeRef = (0, import_react3.useRef)(item);
  const gestureRef = (0, import_react3.useRef)(null);
  const touchRef = (0, import_react3.useRef)(null);
  const suppressClickUntil = (0, import_react3.useRef)(0);
  const lockedUntil = (0, import_react3.useRef)(0);
  const transitionTimer = (0, import_react3.useRef)(null);
  const [paused, setPaused] = (0, import_react3.useState)(false);
  const [hidden, setHidden] = (0, import_react3.useState)(false);
  const [policy, setPolicy] = (0, import_react3.useState)({ initialized: false, webgl: false, autoplay: false });
  const [readyMedia, setReadyMedia] = (0, import_react3.useState)(null);
  const [failedMediaId, setFailedMediaId] = (0, import_react3.useState)(null);
  const [renderer, setRenderer] = (0, import_react3.useState)("loading");
  const [transitioning, setTransitioning] = (0, import_react3.useState)(false);
  activeRef.current = item;
  const source = readyMedia?.id === item.id ? readyMedia.element : null;
  const destination = validHref(item);
  const handleReady = (0, import_react3.useCallback)((element) => {
    setReadyMedia((current) => current?.element === element ? current : { id: item.id, element });
  }, [item.id]);
  const handleMediaFailure = (0, import_react3.useCallback)(() => setFailedMediaId(item.id), [item.id]);
  (0, import_react3.useEffect)(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 768px) and (pointer: fine)");
    const connection = navigator.connection;
    const update = () => {
      const autoplay = !reduced.matches && !connection?.saveData;
      setPolicy({ initialized: true, webgl: desktop.matches && autoplay, autoplay });
    };
    const visibility = () => setHidden(document.hidden);
    update();
    visibility();
    reduced.addEventListener("change", update);
    desktop.addEventListener("change", update);
    connection?.addEventListener("change", update);
    document.addEventListener("visibilitychange", visibility);
    return () => {
      reduced.removeEventListener("change", update);
      desktop.removeEventListener("change", update);
      connection?.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", visibility);
      clearTimeout(transitionTimer.current);
    };
  }, []);
  (0, import_react3.useEffect)(() => {
    if (!films.some((film) => film.id === project.id)) rememberProject(films[0].id);
  }, [project.id, rememberProject]);
  (0, import_react3.useEffect)(() => {
    const host = canvasHostRef.current;
    if (!host || !policy.initialized) return;
    if (!policy.webgl || failedMediaId === item.id) {
      setRenderer("fallback");
      return;
    }
    setRenderer("loading");
    if (!source) return;
    let cancelled = false;
    let scene = null;
    let observer = null;
    const fail = () => {
      if (cancelled) return;
      observer?.disconnect();
      scene?.dispose();
      scene = null;
      setRenderer("fallback");
    };
    const sceneModule = "/assets/gallery/scene.js";
    void import(sceneModule).then((module2) => {
      if (cancelled) return null;
      return module2.createGalleryScene(host, source, { motion: true, onContextLost: fail });
    }).then((created) => {
      if (!created) return;
      if (cancelled) {
        created.dispose();
        return;
      }
      scene = created;
      setRenderer("webgl");
      observer = new IntersectionObserver((entries) => created.setVisible(entries[0]?.isIntersecting ?? false));
      observer.observe(host);
    }).catch(fail);
    return () => {
      cancelled = true;
      observer?.disconnect();
      scene?.dispose();
    };
  }, [policy.initialized, policy.webgl, source, failedMediaId, item.id]);
  const go = (0, import_react3.useCallback)((step) => {
    const now = Date.now();
    if (films.length < 2) return;
    const index = films.findIndex((film) => film.id === activeRef.current.id);
    const next = films[(index + step + films.length) % films.length];
    activeRef.current = next;
    lockedUntil.current = now + 420;
    setTransitioning(true);
    clearTimeout(transitionTimer.current);
    transitionTimer.current = setTimeout(() => setTransitioning(false), 240);
    rememberProject(next.id);
  }, [rememberProject]);
  (0, import_react3.useEffect)(() => {
    const node = stageRef.current;
    if (!node) return;
    const wheel = { sum: 0, last: 0, consumed: false };
    const onWheel = (event) => {
      if (event.ctrlKey || event.metaKey || blocksGesture(event.target)) return;
      const delta = Math.abs(event.deltaY) >= Math.abs(event.deltaX) ? event.deltaY : event.deltaX;
      if (!delta) return;
      event.preventDefault();
      const now = Date.now();
      if (now - wheel.last > 180) {
        wheel.sum = 0;
        wheel.consumed = false;
      }
      wheel.last = now;
      if (wheel.consumed) return;
      if (now < lockedUntil.current) {
        wheel.consumed = true;
        return;
      }
      const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? node.clientHeight : 1;
      wheel.sum = wheel.sum * delta < 0 ? delta * unit : wheel.sum + delta * unit;
      if (Math.abs(wheel.sum) >= 80) {
        wheel.consumed = true;
        go(wheel.sum > 0 ? 1 : -1);
        wheel.sum = 0;
      }
    };
    node.addEventListener("wheel", onWheel, { passive: false });
    return () => node.removeEventListener("wheel", onWheel);
  }, [go]);
  const finishGesture = (start, x, y) => {
    const dx = x - start.x, dy = y - start.y;
    if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.35) {
      suppressClickUntil.current = Date.now() + 500;
      go(dx < 0 ? 1 : -1);
      return true;
    }
    if (Math.hypot(dx, dy) > 12) {
      suppressClickUntil.current = Date.now() + 500;
      return true;
    }
    return false;
  };
  const onKeyDown = (event) => {
    if (event.key === "Enter") suppressClickUntil.current = 0;
    if (isControl(event.target) || event.altKey || event.ctrlKey || event.metaKey || event.nativeEvent.isComposing) return;
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      go(event.key === "ArrowRight" ? 1 : -1);
    } else if (event.code === "Space" || event.key === " ") {
      event.preventDefault();
      setPaused((value) => !value);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { className: "main-gallery page-width gallery-public", id: "main-content", "data-theme": theme, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "section",
    {
      ref: stageRef,
      className: "project-stage cinema-screen gallery-room",
      "aria-label": copy.screen,
      tabIndex: 0,
      "aria-describedby": "gallery-instructions",
      "aria-busy": transitioning,
      "data-project-id": item.id,
      "data-renderer": renderer,
      "data-motion": policy.webgl ? "enabled" : "reduced",
      "data-transitioning": transitioning,
      onKeyDown,
      onDragStart: (event) => event.preventDefault(),
      onPointerDown: (event) => {
        if (event.pointerType === "touch" || event.button !== 0 || blocksGesture(event.target)) return;
        suppressClickUntil.current = 0;
        gestureRef.current = { id: event.pointerId, x: event.clientX, y: event.clientY, captured: false };
      },
      onPointerMove: (event) => {
        const start = gestureRef.current;
        if (!start || start.id !== event.pointerId) return;
        const dx = event.clientX - start.x, dy = event.clientY - start.y;
        if (!start.captured && Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(dy) * 1.1) {
          start.captured = true;
          event.currentTarget.setPointerCapture(event.pointerId);
        }
        if (start.captured && event.cancelable) event.preventDefault();
      },
      onPointerUp: (event) => {
        const start = gestureRef.current;
        gestureRef.current = null;
        if (!start || start.id !== event.pointerId) return;
        finishGesture(start, event.clientX, event.clientY);
        if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
      },
      onPointerCancel: () => {
        gestureRef.current = null;
      },
      onLostPointerCapture: (event) => {
        if (event.target === event.currentTarget) gestureRef.current = null;
      },
      onTouchStart: (event) => {
        if (event.touches.length !== 1 || blocksGesture(event.target)) {
          touchRef.current = null;
          return;
        }
        const touch = event.touches[0];
        suppressClickUntil.current = 0;
        touchRef.current = { x: touch.clientX, y: touch.clientY, id: touch.identifier };
      },
      onTouchEnd: (event) => {
        const start = touchRef.current;
        touchRef.current = null;
        if (!start) return;
        const touch = Array.from(event.changedTouches).find((touch2) => touch2.identifier === start.id);
        if (touch && finishGesture(start, touch.clientX, touch.clientY) && event.cancelable) event.preventDefault();
      },
      onTouchCancel: () => {
        touchRef.current = null;
      },
      onClickCapture: (event) => {
        if (event.detail === 0) {
          suppressClickUntil.current = 0;
          return;
        }
        if (Date.now() < suppressClickUntil.current) {
          event.preventDefault();
          event.stopPropagation();
        }
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { className: "sr-only", children: title }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gallery-public-back-wall", "aria-hidden": "true" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gallery-public-side-wall", "aria-hidden": "true" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gallery-public-floor", "aria-hidden": "true" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gallery-public-fallback", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          ExhibitMedia,
          {
            item,
            title: `${title} ${copy.motion}`,
            autoplay: policy.autoplay && !paused && !hidden,
            onReady: handleReady,
            onFailure: handleMediaFailure,
            failedCopy: copy.failed
          },
          item.id
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: canvasHostRef, className: "gallery-public-canvas", "aria-hidden": "true" }),
        destination && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "a",
          {
            className: "gallery-public-link",
            href: destination,
            "aria-label": `${title} \u2014 ${copy.view}`,
            target: item.externalUrl ? "_blank" : void 0,
            rel: item.externalUrl ? "noopener noreferrer" : void 0,
            draggable: false
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { id: "gallery-instructions", className: "sr-only", children: instructions[locale] || instructions.ko }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { role: "status", className: "sr-only", "aria-live": "polite", "aria-atomic": "true", children: title }),
        failedMediaId === item.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { role: "status", className: "sr-only", children: copy.failed })
      ]
    }
  ) });
}

a.d(t,{ProjectStage:()=>module.exports.ProjectStage});},9885:(e,t,a)=>{Promise.resolve().then(a.bind(a,3961))}},e=>{e.O(0,[540,619,394,441,255,358],()=>e(e.s=9885)),_N_E=e.O()}]);