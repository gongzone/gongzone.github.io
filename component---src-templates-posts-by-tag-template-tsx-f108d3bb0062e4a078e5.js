"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[662],{7372:function(e,t,a){a.d(t,{M:function(){return n}});var r=a(5893),n=function(e){var t=e.children;return(0,r.jsx)("ul",{className:"grid w-full grid-cols-1 gap-5 xs:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4",children:t})}},2216:function(e,t,a){a.d(t,{x:function(){return l}});var r=a(3723),n=a(5893),l=function(e){var t=e.title,a=e.image,l=e.children;return(0,n.jsxs)("div",{className:"relative w-full overflow-hidden",children:[(0,n.jsx)(r.G,{className:"rounded-t-md transition-all duration-300 hover:scale-110 hover:saturate-200",image:(0,r.c)(a),alt:null!=t?t:"card-image",objectFit:"cover"}),l]})}},8870:function(e,t,a){a.d(t,{S:function(){return l}});var r=a(5893),n={JavaScript:"bg-yellow-400 text-black",React:"bg-blue-500 text-black",Canvas:"bg-red-700",Web:"bg-teal-600",YarnBerry:"bg-emerald-700","Package-Manager":"bg-orange-700",Testing:"bg-rose-600"},l=function(e){var t,a=e.tagName,l=e.className;return(0,r.jsx)("span",{className:"rounded-xl px-2 py-1 text-xs shadow-lg "+(null!==(t=n[a])&&void 0!==t?t:"bg-gray-700")+" "+l,children:a})}},6033:function(e,t,a){a.d(t,{t:function(){return s}});var r=a(1082),n=a(5451),l=a(5893),s=function(e){var t=e.to,a=e.pageContext,s=a.totalPagination,i=a.postsPerPage,c=a.currentPage,o=function(e,t,a,r){void 0===t&&(t=1),void 0===a&&(a=12),void 0===r&&(r=5);var n,l,s=Math.ceil(e/a);if(t<1?t=1:t>s&&(t=s),s<=r)n=1,l=s;else{var i=Math.floor(r/2),c=Math.ceil(r/2)-1;t<=i?(n=1,l=r):t+c>=s?(n=s-r+1,l=s):(n=t-i,l=t+c)}var o=(t-1)*a,u=Math.min(o+a-1,e-1),d=Array.from(Array(l+1-n).keys()).map((function(e){return n+e}));return{totalItems:e,currentPage:t,pageSize:a,totalPages:s,startPage:n,endPage:l,startIndex:o,endIndex:u,pages:d}}(s*i,c,i,5),u=o.pages,d=2===c?""+t:""+t+(c-1)+"/",x=""+t+(c+1)+"/";a.tag&&(d=2===c?""+n.v.slugifyTag(a.tag):""+n.v.slugifyTag(a.tag)+(c-1)+"/",x=""+n.v.slugifyTag(a.tag)+(c+1)+"/");var g=function(e){return a.tag?1===e?""+n.v.slugifyTag(a.tag):""+n.v.slugifyTag(a.tag)+e+"/":1===e?""+t:""+t+e+"/"};return(0,l.jsxs)("div",{className:"flex justify-center gap-2 py-10 px-4 sm:py-12 md:py-14",children:[1!==c&&(0,l.jsx)(r.Link,{className:"hover-text-amber px-1 tracking-wider",to:d,rel:"prev",children:"Prev"}),(0,l.jsx)("ul",{className:"flex justify-center gap-1",children:Array.from(u).map((function(e){return(0,l.jsx)("li",{children:(0,l.jsx)(r.Link,{className:"hover-text-amber px-2 py-1 "+(e===c?"rounded-md bg-[#2e3039]":""),to:g(e),children:e})},e)}))}),c!==s&&(0,l.jsx)(r.Link,{className:"hover-text-amber px-1 tracking-wider",to:x,rel:"next",children:"Next"})]})}},6775:function(e,t,a){a.d(t,{J:function(){return c}});var r=a(1082),n=a(1852),l=a(5451),s=a(5893),i=function(e){var t=e.currentTag,a=e.tagName,n=e.totalCount;return(0,s.jsxs)(r.Link,{className:"hover-text-amber rounded-3xl bg-[#2e3039] px-4 py-2 text-sm shadow-xl xs:text-base "+(t===a?"bg-[#232c42] text-amber-300":""),to:l.v.slugifyTag(a),children:[(0,s.jsx)("span",{children:a}),(0,s.jsxs)("span",{children:[" (",n,")"]})]})},c=function(e){var t=e.currentTag,a=(0,r.useStaticQuery)("378254654").allMdx,l=a.group,c=a.totalCount;return(0,s.jsxs)("div",{className:"lg:w-2/3",children:[(0,s.jsxs)("div",{className:"mb-3 flex items-center gap-2",children:[(0,s.jsx)(n.WYG,{}),(0,s.jsx)("span",{children:"태그 목록"})]}),(0,s.jsxs)("ul",{className:"flex flex-wrap pb-4",children:[(0,s.jsx)("li",{className:"mb-2 mr-2 flex",children:(0,s.jsx)(i,{currentTag:t,tagName:"ALL",totalCount:c})}),l.map((function(e){var a=e.fieldValue,r=e.totalCount;return(0,s.jsx)("li",{className:"mb-2 mr-2 flex",children:(0,s.jsx)(i,{currentTag:t,tagName:a,totalCount:r})},a)}))]})]})}},826:function(e,t,a){a.d(t,{j:function(){return u}});var r=a(7372),n=a(1082),l=a(5451),s=a(2216),i=a(8870),c=a(5893),o=function(e){var t,a=e.frontmatter;return(0,c.jsxs)("li",{className:"flex h-full w-full flex-col rounded-md  bg-gradient-to-tl from-zinc-900 to-slate-800",children:[(0,c.jsx)(n.Link,{to:l.v.POSTS.toString(null==a?void 0:a.slug),children:(0,c.jsx)(s.x,{title:null==a?void 0:a.title,image:null==a?void 0:a.image})}),(0,c.jsxs)("div",{className:"flex flex-1 flex-col gap-2 p-5",children:[(0,c.jsx)(n.Link,{className:"flex items-center gap-2",to:l.v.POSTS.toString(null==a?void 0:a.slug),children:(0,c.jsx)("h2",{className:"text-amber-300",children:null==a?void 0:a.title})}),(0,c.jsx)("p",{className:"relative text-ellipsis break-words line-clamp-2",children:null==a?void 0:a.description}),(0,c.jsx)("ul",{className:"mt-auto flex flex-wrap gap-2",children:null==a||null===(t=a.tags)||void 0===t?void 0:t.map((function(e){return(0,c.jsx)("li",{children:(0,c.jsx)(i.S,{tagName:e})},e)}))}),(0,c.jsx)("div",{className:"mt-1 self-end",children:(0,c.jsxs)("span",{className:"text-sm",children:["📅 ",null==a?void 0:a.date]})})]})]})},u=function(e){var t=e.posts;return(0,c.jsx)(r.M,{children:t.map((function(e){return(0,c.jsx)(o,{frontmatter:e.frontmatter},e.id)}))})}},641:function(e,t,a){a.r(t),a.d(t,{Head:function(){return u}});var r=a(5451),n=a(7702),l=a(6766),s=a(6775),i=a(826),c=a(6033),o=a(5893);t.default=function(e){var t=e.data,a=e.pageContext,n=t.allMdx.nodes;return(0,o.jsxs)(l.I,{className:"max-w-[1720px] py-10 px-6 sm:px-10 md:p-20",children:[(0,o.jsx)(s.J,{currentTag:a.tag}),(0,o.jsx)(i.j,{posts:n}),(0,o.jsx)(c.t,{to:r.v.POSTS.toString(),pageContext:a})]})};var u=function(){return(0,o.jsx)(n.H,{title:"포스트 | 공존의 발자취",pathname:r.v.POSTS.toString()})}}}]);
//# sourceMappingURL=component---src-templates-posts-by-tag-template-tsx-f108d3bb0062e4a078e5.js.map