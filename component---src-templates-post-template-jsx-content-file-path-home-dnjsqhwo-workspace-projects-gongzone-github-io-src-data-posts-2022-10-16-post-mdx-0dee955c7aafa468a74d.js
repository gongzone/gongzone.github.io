"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[812],{6410:function(n,e,s){function t(n,e,s){return e in n?Object.defineProperty(n,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[e]=s,n}s.d(e,{Zo:function(){return p},ah:function(){return i}});var a=s(7294);function r(n,e){var s=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),s.push.apply(s,t)}return s}function c(n){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?r(Object(s),!0).forEach((function(e){t(n,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(s,e))}))}return n}var o=a.createContext({});function i(n){var e=a.useContext(o);return a.useMemo((function(){return"function"==typeof n?n(e):c(c({},e),n)}),[e,n])}var l={};function p(n){var e=n.components,s=n.children,t=n.disableParentContext,r=i(e);return t&&(r=e||l),a.createElement(o.Provider,{value:r},s)}},787:function(n,e,s){s.r(e),s.d(e,{Head:function(){return k},default:function(){return b}});var t=s(5893),a=s(6410);function r(n){var e=Object.assign({h2:"h2",a:"a",div:"div",p:"p",strong:"strong",ul:"ul",li:"li",code:"code",br:"br"},(0,a.ah)(),n.components),s=e.Callout;return s||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Callout",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.h2,{id:"1-cypress를-통한-테스팅",style:{position:"relative"},children:[(0,t.jsx)(e.a,{href:"#1-cypress%EB%A5%BC-%ED%86%B5%ED%95%9C-%ED%85%8C%EC%8A%A4%ED%8C%85","aria-label":"1 cypress를 통한 테스팅 permalink",className:"anchor before",children:(0,t.jsx)(e.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})}),"1. Cypress를 통한 테스팅"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Cypress"}),"는 E2E 테스트를 위한 도구로 유명세를 얻었다.\n",(0,t.jsx)(e.strong,{children:"E2E 테스트"}),"란 여러 모듈로 분화된 애플리케이션이 전체적으로 기대하는 바에 따라 동작하는지 검증하는\n기술 혹은 과정이라 볼 수 있다. 말 그대로 End-to-End 테스트, 혹은 통합 테스트이다.\nfrontend, backend 코드들이 어떻게 동작하고 사용되는지 보다는,\n최종 사용자(end-user)가 우리 제품을 사용하게 될 환경을 조성하고 시뮬레이션하여\n기대하는 바를 서술하고 검증하는 것이 E2E 테스트의 핵심이다."]}),"\n",(0,t.jsxs)(e.p,{children:["반면에 ",(0,t.jsx)(e.strong,{children:"Cypress"}),"에서 말하는 ",(0,t.jsx)(e.strong,{children:"Component 테스팅"}),"은 우리가 컴포넌트라고 부르는 작은 단위를 테스팅하는 것이다.\n현대 대부분의 프론트엔드 프레임워크는 컴포넌트라는 논리적 단위로 애플리케이션을 잘게 쪼개서 구성하도록 하는데,\n이 각각의 모듈을 검증하는 것이 Component 테스팅이다."]}),"\n",(0,t.jsxs)(s,{kind:"info",children:[(0,t.jsx)(e.p,{children:"허나 명심해야 할 것은 모든 컴포넌트 테스트가 통과하더라도 그 자체로 나의 애플리케이션이 무결하다라는 것을 보장할 순 없다는 점입니다."}),(0,t.jsx)(e.p,{children:"예를들어 어떤 컴포넌트에서 API 호출을 하는데,\n해당 컴포넌트의 독립적 공간안에서는 그 API의 존재에 대해서 알 수가 없기 때문에 mocking이 필요합니다.\nmocking은 mocking일 뿐, 실제 API 호출로 이루어진 결과 값을 반환받는 것이 아니기 때문에 무결성을 보장할 수 없다는 얘기입니다."}),(0,t.jsx)(e.p,{children:"따라서 E2E와 Component 테스팅을 잘 조합하여 사용하는 것이 중요하다고 볼 수 있습니다."})]}),"\n",(0,t.jsxs)(e.h2,{id:"2-cypress-component-테스팅의-강점은-무엇일까---브라우저-환경에서의-테스트",style:{position:"relative"},children:[(0,t.jsx)(e.a,{href:"#2-cypress-component-%ED%85%8C%EC%8A%A4%ED%8C%85%EC%9D%98-%EA%B0%95%EC%A0%90%EC%9D%80-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C---%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80-%ED%99%98%EA%B2%BD%EC%97%90%EC%84%9C%EC%9D%98-%ED%85%8C%EC%8A%A4%ED%8A%B8","aria-label":"2 cypress component 테스팅의 강점은 무엇일까   브라우저 환경에서의 테스트 permalink",className:"anchor before",children:(0,t.jsx)(e.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})}),"2. Cypress Component 테스팅의 강점은 무엇일까? - 브라우저 환경에서의 테스트"]}),"\n",(0,t.jsx)(e.p,{children:"React 테스트 코드 작성의 경우 Jest와 Testing-Library 조합을 대부분 많이 사용하는 추세이다.\n위 조합으로 다음과 같은 테스트 코드를 작성한다고 가정해보자."}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"모바일 화면에서는 햄버거 아이콘 버튼이 헤더에 나타나는 것을 검증해주세요."}),"\n",(0,t.jsx)(e.li,{children:"햄버거 아이콘 버튼을 클릭했을 시 사이드 메뉴가 나타나는 것을 검증해주세요."}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"굉장히 쉬운 요구사항이지 않는가? 그러나 실상은 그렇지 않다."}),"\n",(0,t.jsxs)(e.p,{children:["첫 번째, 반응형을 검증하는 요구사항을 먼저 살펴보자. Testing-Library의 API들을 살펴봐도 브라우저 window 사이즈를\n조절하는 메소드는 보이지 않는다. ",(0,t.jsx)(e.code,{children:"window.matchMedia"}),"를 수동적으로 설정하여 우회하는 해결책을\n찾아 볼 수 있지만, 개인적인 경험으로는 기대만큼 잘 작동하지 않았다."]}),"\n",(0,t.jsxs)(e.p,{children:["두 번째, 햄버거 아이콘을 클릭하면 사이드 메뉴의 스타일 속성이 ",(0,t.jsx)(e.code,{children:"display: none"})," 에서 ",(0,t.jsx)(e.code,{children:"display: block"}),"으로 바뀌어\n화면에 나타나는 경우라고 생각해보자. 인라인 스타일인 경우는 문제 없이 다음과 같은 테스트 코드로 검증이 될 것이다."]}),"\n",(0,t.jsx)(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="js"><pre style="counter-reset: linenumber NaN" class="language-js line-numbers"><code class="language-js"><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">\'when hamburger icon clicked, side menu should be opened\'</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> user <span class="token operator">=</span> userEvent<span class="token punctuation">.</span><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Header <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> hamburgerIconBtn <span class="token operator">=</span> screen<span class="token punctuation">.</span><span class="token function">getByRole</span><span class="token punctuation">(</span><span class="token string">\'button\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/hamburger/</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> sideMenu <span class="token operator">=</span> screen<span class="token punctuation">.</span><span class="token function">queryByRole</span><span class="token punctuation">(</span><span class="token string">\'navigation\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/sidebar-menu/i</span><span class="token template-punctuation string">`</span></span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n  <span class="token function">expect</span><span class="token punctuation">(</span>sideMenu<span class="token punctuation">)</span><span class="token punctuation">.</span>not<span class="token punctuation">.</span><span class="token function">toBeVisible</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n  <span class="token keyword">await</span> user<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span>hamburgerIconBtn<span class="token punctuation">)</span>\n\n  <span class="token function">expect</span><span class="token punctuation">(</span>sideMenu<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeVisible</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code><span aria-hidden="true" class="line-numbers-rows" style="white-space: normal; width: auto; left: 0;"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></pre></div>'}}),"\n",(0,t.jsx)(e.p,{children:"그러나 외부 CSS 라이브러리 or 프레임워크 같이 변환과정이 수반되는 경우는 테스트가 통과하지 않을 것이다. (혹은 특정한 설정이 요구 될 수 있다)\n실제 브라우저 화면에서는 사이드 메뉴가 보일지라도 말이다."}),"\n",(0,t.jsxs)(e.p,{children:["이 모든 문제는 Jest + Testing-Library이 ",(0,t.jsx)(e.strong,{children:"실제 브라우저 환경에서 수행되는 테스트가 아니라는 점"}),"이다.\nNode.js 환경에서 동작하는 테스트는 ",(0,t.jsx)(e.strong,{children:"JSDOM"}),"을 이용하여 브라우저 환경을 모방한다.\n이 역시 모방은 모방일 뿐, 실제 UI 테스트에 있어서 무결성을 보장하지 않는다."]}),"\n",(0,t.jsxs)(e.p,{children:["이에 반해 ",(0,t.jsx)(e.strong,{children:"Cypress Component 테스팅"}),"의 가장 큰 강점은 ",(0,t.jsx)(e.strong,{children:"실제 브라우저를 기반으로 테스트 검증"}),"한다는 것이다.\n따라서 반응형 테스트가 가능하고 CSS나 모방 환경에서의 자질구레한 문제들로 골치를 썩힐 필요가 없다.\n이 밖에도 크로스 브라우징 테스트, 실제 화면을 보면서 테스트 작동을 확인할 수 있다는 점, 직접적인 컴포넌트 인터렉션\n이 가능하다는 점 등을 장점으로 뽑을 수 있다."]}),"\n",(0,t.jsxs)(e.p,{children:["그렇다면 테스트 피드백 속도에 대해서는 어떠한가?",(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.strong,{children:"Cypress Component 테스팅"}),"은 기존 E2E 테스트와는 다르게\n완전한 웹사이트를 렌더링 하는 것이 아니라 개발 서버를 이용해 특정 컴포넌트만을 빌드한다. 따라서 더 적은 의존성,\ninfrastructure가 요구되어진다. Jest + Testing-Library 조합보다는 느릴 수 있지만, 개인적인 경험으로는 상당히\n빠른 피드백을 제공해주었다."]}),"\n",(0,t.jsxs)(e.p,{children:["다만 ",(0,t.jsx)(e.strong,{children:"Cypress Component 테스팅"}),"은 현재 작성일 기준 아직까진 beta 버전이다. 그에 따라 공식적으로 지원하지 않는 프레임워크들도 존재한다.\n그러나 기능 상으로는 현재 안정권에 접어들었다고 판단이 되며,\n기존 cypress 사용법에 익숙했던 사람은 별다른 학습 없이 프로젝트에 곧장 적용할 수 있을 것이다."]})]})}var c=function(n){void 0===n&&(n={});var e=Object.assign({},(0,a.ah)(),n.components).wrapper;return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(r,n)})):r(n)};var o=s(7294),i=s(5451),l=s(7702),p=s(6766),u=s(5087),d=s(8984),x=s(1476),m=s(4566),f=s(6314),h=s(6239),g=s(3549),j=s(8657),v=function(n){var e,s=n.data,t=n.pageContext,r=n.children,c=s.post,i=c.tableOfContents,l=c.fields.timeToRead,v=null===(e=s.post)||void 0===e?void 0:e.frontmatter,b=v.title,k=v.description,y=v.date,C=v.lastmod,N=v.tags,E=v.image,w=t.seriesName,S=t.seriesIndex;return o.createElement(p.I,{className:"max-w-[712px] py-10 px-5 xs:px-14 sm:px-16 lg:px-0 2xl:max-w-[768px] 3xl:max-w-[812px]"},o.createElement(u.m),o.createElement("div",{className:"relative mb-4"},o.createElement(m.o,{tableOfContents:i}),o.createElement(d.N,{title:b,image:E}),o.createElement(x.l,{postInfoData:{title:b,description:k,date:y,lastmod:C,tags:N,timeToRead:l.text}}),o.createElement(h.X,{seriesName:w,seriesIndex:S,seriesData:s.series}),o.createElement("article",{className:"prose prose-invert mt-8 mb-8 max-w-none md:prose-lg"},o.createElement(a.Zo,{components:j.d},r)),o.createElement(g.w,{seriesIndex:S,seriesData:s.series})),o.createElement(f.H))};function b(n){return o.createElement(v,n,o.createElement(c,n))}var k=function(n){var e=n.data.post.frontmatter,s=e.title,t=e.description,a=e.image,r=e.slug;return o.createElement(l.H,{title:s,description:t,image:null==a?void 0:a.publicURL,pathname:i.v.POSTS.toString(r)})}},8870:function(n,e,s){s.d(e,{S:function(){return r}});var t=s(5893),a={JavaScript:"bg-yellow-400 text-black",React:"bg-blue-500 text-black",Canvas:"bg-red-700",Web:"bg-teal-600",YarnBerry:"bg-emerald-700","Package-Manager":"bg-orange-700",Testing:"bg-rose-600"},r=function(n){var e,s=n.tagName,r=n.className;return(0,t.jsx)("span",{className:"rounded-xl px-2 py-1 text-xs shadow-lg "+(null!==(e=a[s])&&void 0!==e?e:"bg-gray-700")+" "+r,children:s})}},6314:function(n,e,s){s.d(e,{H:function(){return c}});var t=s(7294),a=s(5893),r="comments-container",c=function(){return(0,t.useEffect)((function(){var n=document.createElement("script");n.src="https://giscus.app/client.js",n.setAttribute("data-repo","gongzone/gongzone.github.io"),n.setAttribute("data-repo-id","MDEwOlJlcG9zaXRvcnk0MDA1NzgwMjU="),n.setAttribute("data-category","Announcements"),n.setAttribute("data-category-id","DIC_kwDOF-BV6c4CRe7B"),n.setAttribute("data-mapping","pathname"),n.setAttribute("data-strict","1"),n.setAttribute("data-reactions-enabled","1"),n.setAttribute("data-emit-metadata","0"),n.setAttribute("data-input-position","top"),n.setAttribute("data-theme","dark"),n.setAttribute("data-lang","ko"),n.setAttribute("data-loading","lazy"),n.setAttribute("data-input-position","top"),n.crossOrigin="anonymous",n.async=!0;var e=document.getElementById(r);return e&&e.appendChild(n),function(){var n=document.getElementById(r);n&&(n.innerHTML="")}}),[]),(0,a.jsx)("div",{className:"my-20",id:r})}},8657:function(n,e,s){s.d(e,{d:function(){return l}});var t=s(1082),a=s(3750),r=s(5893),c={bgColor:"bg-zinc-800",borderColor:"border-zinc-600",iconColor:"text-zinc-600",icon:a.a46},o={bgColor:"bg-emerald-900",borderColor:"border-emerald-700",iconColor:"text-emerald-700",icon:a.H33},i={bgColor:"bg-cyan-900",borderColor:"border-cyan-700",iconColor:"text-cyan-700",icon:a.bax};var l={Link:t.Link,Callout:function(n){var e=n.kind,s=n.children,t=function(n){switch(n){case"info":return o;case"question":return i;default:return c}}(e);return(0,r.jsxs)("div",{className:"relative my-[1.25rem] rounded-lg border-l-[5px] px-4 py-1 md:px-8 "+t.bgColor+" "+t.borderColor,children:[(0,r.jsx)(t.icon,{className:"absolute top-0 -left-[3px] h-[40px] w-[40px] \n          -translate-x-1/2 -translate-y-1/2 rounded-full border-[5px] border-[#222] bg-[#222] "+t.iconColor}),s]})},Video:function(n){var e=n.video,s=n.type;return(0,r.jsx)("div",{className:"w-full",children:(0,r.jsx)("video",{className:"w-full object-cover",controls:!0,muted:!0,children:(0,r.jsx)("source",{src:e,type:"video/"+s})})})}}},5087:function(n,e,s){s.d(e,{m:function(){return o}});var t=s(1082),a=s(7247),r=s(5451),c=s(5893),o=function(){return(0,c.jsxs)("div",{className:"mb-8 flex items-center justify-between",children:[(0,c.jsxs)(t.Link,{className:"group inline-flex items-center gap-3",to:r.v.POSTS.toString(),children:[(0,c.jsx)("span",{className:"flex h-12 w-12 items-center justify-center rounded-full bg-zinc-700 text-3xl shadow-lg duration-300 group-hover:-translate-x-1.5",children:(0,c.jsx)(a.wFh,{})}),(0,c.jsxs)("div",{className:"flex flex-col text-sm text-zinc-200",children:[(0,c.jsx)("span",{children:"글 목록으로"}),(0,c.jsx)("span",{children:"돌아가기"})]})]}),(0,c.jsxs)("div",{className:"flex flex-col",children:[(0,c.jsx)("span",{className:"text-sm",children:"Written by"}),(0,c.jsx)("span",{className:"text-lg font-bold",children:"GongZone"})]})]})}},8984:function(n,e,s){s.d(e,{N:function(){return r}});var t=s(3723),a=s(5893),r=function(n){var e=n.title,s=n.image;return(0,a.jsx)("div",{className:"flex items-center justify-center",children:(0,a.jsx)(t.G,{className:"rounded-lg",image:(0,t.c)(s),alt:e})})}},1476:function(n,e,s){s.d(e,{l:function(){return c}});var t=s(3201),a=s(8870),r=s(5893),c=function(n){var e=n.postInfoData,s=e.title,c=e.description,o=e.timeToRead,i=e.date,l=e.lastmod,p=e.tags;return(0,r.jsx)("div",{className:"mx-auto flex flex-col sm:max-w-[90%] md:max-w-[82%] lg:max-w-[75%]",children:(0,r.jsxs)("div",{className:"my-8 flex flex-col gap-3",children:[(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[(0,r.jsx)("span",{className:"rounded-full bg-zinc-700 p-2 text-base text-amber-300",children:(0,r.jsx)(t.pKb,{})}),(0,r.jsx)("h1",{className:"text-2xl font-bold md:text-3xl",children:s})]}),(0,r.jsxs)("div",{className:"flex items-center gap-2 font-bold text-zinc-400",children:[(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[(0,r.jsx)("span",{children:(0,r.jsx)(t.KHI,{})}),(0,r.jsx)("span",{children:i})]}),(0,r.jsx)("span",{children:"/"}),(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[(0,r.jsx)("span",{children:(0,r.jsx)(t.qyc,{})}),(0,r.jsx)("span",{children:o})]})]}),(0,r.jsx)("h2",{className:"md:text-lg",children:c}),(0,r.jsx)("ul",{className:"flex flex-wrap",children:null==p?void 0:p.map((function(n){return(0,r.jsx)("li",{className:"mb-2 mr-2",children:(0,r.jsx)(a.S,{className:"block rounded-3xl px-4 py-2 text-base",tagName:n})},n)}))}),(0,r.jsx)("div",{className:"flex flex-col self-end font-bold text-zinc-400",children:l&&(0,r.jsxs)("div",{className:"flex items-center gap-2 text-sm",children:[(0,r.jsx)("span",{children:(0,r.jsx)(t.O1O,{})}),(0,r.jsxs)("span",{children:["이 게시글은 ",l," 수정되었습니다. "]})]})})]})})}},4566:function(n,e,s){s.d(e,{o:function(){return o}});var t=s(1082),a=s(7294),r=s(3201),c=s(5893),o=function(n){var e=n.tableOfContents,s=(0,a.useState)(),t=s[0];!function(n){var e=(0,a.useRef)({});(0,a.useEffect)((function(){var s=new IntersectionObserver((function(s){e.current=s.reduce((function(n,e){return n[e.target.id]=e,n}),e.current);var a=[];Object.keys(e.current).forEach((function(n){var s=e.current[n];s.isIntersecting&&a.push(s)}));var r=function(n){return t.findIndex((function(e){return e.id===n}))};if(1===a.length)n(a[0].target.id);else if(a.length>1){var c=a.sort((function(n,e){return r(n.target.id)>r(e.target.id)}));n(c[0].target.id)}}),{}),t=Array.from(document.querySelectorAll("h2, h3"));return t.forEach((function(n){return s.observe(n)})),function(){return s.disconnect()}}),[])}(s[1]);var o=e.items;return(0,c.jsx)("nav",{className:"absolute left-full ml-20 hidden h-full w-[240px] 2xl:block",children:(0,c.jsxs)("div",{className:"sticky top-14",children:[(0,c.jsxs)("div",{className:"flex items-center gap-2 text-xl",children:[(0,c.jsx)("span",{children:(0,c.jsx)(r.E2G,{})}),(0,c.jsx)("span",{children:"Table of Contents"})]}),(0,c.jsx)("ul",{className:"scrollbar flex max-h-[calc(100vh-248px)] flex-col gap-2 overflow-auto rounded-lg p-5 text-sm text-zinc-400",children:o.map((function(n){return(0,c.jsx)("li",{children:(0,c.jsx)(i,{entry:n,activeId:t})},n.title)}))})]})})},i=function n(e){var s=e.entry,a=e.activeId,r=a===""+s.url.replace("#","")?"text-[#d1d5db]":"";return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.Link,{className:"transition-colors duration-300 "+r,to:s.url,children:s.title}),s.items&&(0,c.jsx)("ul",{className:"flex list-disc flex-col gap-1 pl-6 pt-1",children:s.items.map((function(e){return(0,c.jsx)("li",{children:(0,c.jsx)(n,{entry:e,activeId:a})},e.title)}))})]})}},6239:function(n,e,s){s.d(e,{X:function(){return i}});var t=s(7294),a=s(1082),r=s(3201),c=s(5451),o=s(5893),i=function(n){var e=n.seriesName,s=n.seriesIndex,i=n.seriesData,l=(0,t.useState)(!1),p=l[0],u=l[1];if(!(i.totalCount<=1))return(0,o.jsx)("div",{className:"gap-8md:px-16 mt-10 mb-16 flex w-full justify-center",children:(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{className:"mb-2 flex flex-col bg-zinc-800 p-5 shadow-md md:p-8",children:[(0,o.jsx)(a.Link,{to:c.v.slugifySeries(e),className:"mb-2 break-words text-xl font-bold text-emerald-400",children:e}),(0,o.jsx)("button",{className:"flex items-center gap-2 text-zinc-400 hover:text-zinc-300",onClick:function(){return u(!p)},children:(0,o.jsxs)("div",{className:"flex items-center gap-1",children:[(0,o.jsxs)("span",{children:[i.totalCount,"개의 게시글 (시리즈)"]}),(0,o.jsx)("span",{children:p?(0,o.jsx)(r.s$2,{}):(0,o.jsx)(r.RiI,{})})]})})]}),p&&(0,o.jsx)("ol",{className:"flex flex-col items-center justify-center gap-1 rounded-md py-5 text-zinc-400",children:i.nodes.map((function(n,e){var t=n.id,r=n.frontmatter;return(0,o.jsx)("li",{className:"text-zinc-400 hover:text-zinc-300",children:(0,o.jsxs)(a.Link,{className:e+1===s?"font-bold text-emerald-400":"",to:c.v.POSTS.toString(null==r?void 0:r.slug),children:[e+1,". ",null==r?void 0:r.title]})},t)}))})]})})}},3549:function(n,e,s){s.d(e,{w:function(){return o}});var t=s(1082),a=s(3201),r=s(5451),c=s(5893),o=function(n){var e,s,o=n.seriesIndex,i=n.seriesData;if(!(i.totalCount<=1)){var l=null===(e=i.nodes[o-2])||void 0===e?void 0:e.frontmatter,p=null===(s=i.nodes[o])||void 0===s?void 0:s.frontmatter;return(0,c.jsxs)("div",{className:"py-12",children:[o>1&&(0,c.jsxs)("div",{className:"flex flex-col items-center justify-center gap-2 ",children:[(0,c.jsxs)("div",{className:"flex items-center gap-2",children:[(0,c.jsx)("span",{className:"text-emerald-400",children:"이전 글 링크"}),(0,c.jsx)("span",{className:"text-emerald-400",children:(0,c.jsx)(a.hPV,{})})]}),(0,c.jsx)(t.Link,{className:"text-lg text-zinc-400 transition-colors duration-300 hover:text-zinc-300",to:r.v.POSTS.toString(null==l?void 0:l.slug),children:null==l?void 0:l.title})]}),i.nodes.length!==o&&(0,c.jsxs)("div",{className:"flex flex-col items-center justify-center gap-2",children:[(0,c.jsxs)("div",{className:"flex items-center gap-2",children:[(0,c.jsx)("span",{className:"text-emerald-400",children:"다음 글 링크"}),(0,c.jsx)("span",{className:"text-emerald-400",children:(0,c.jsx)(a.hPV,{})})]}),(0,c.jsx)(t.Link,{className:"text-lg text-zinc-400 transition-colors duration-300 hover:text-zinc-300",to:r.v.POSTS.toString(null==p?void 0:p.slug),children:null==p?void 0:p.title})]})]})}}}}]);
//# sourceMappingURL=component---src-templates-post-template-jsx-content-file-path-home-dnjsqhwo-workspace-projects-gongzone-github-io-src-data-posts-2022-10-16-post-mdx-0dee955c7aafa468a74d.js.map