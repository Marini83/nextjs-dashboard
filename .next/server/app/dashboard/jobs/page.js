(()=>{var e={};e.id=740,e.ids=[740],e.modules={67096:e=>{"use strict";e.exports=require("bcrypt")},47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},72254:e=>{"use strict";e.exports=require("node:buffer")},6005:e=>{"use strict";e.exports=require("node:crypto")},15673:e=>{"use strict";e.exports=require("node:events")},88849:e=>{"use strict";e.exports=require("node:http")},22286:e=>{"use strict";e.exports=require("node:https")},47261:e=>{"use strict";e.exports=require("node:util")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},24404:e=>{"use strict";e.exports=require("tls")},57310:e=>{"use strict";e.exports=require("url")},59796:e=>{"use strict";e.exports=require("zlib")},95416:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>i.a,__next_app__:()=>x,originalPathname:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>l});var s=t(50482),a=t(69108),n=t(62563),i=t.n(n),o=t(68300),d={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>o[e]);t.d(r,d);let l=["",{children:["dashboard",{children:["jobs",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,55445)),"/Users/marin/Documents/Projects/NextJS/nextjs-dashboard/app/dashboard/jobs/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,96339)),"/Users/marin/Documents/Projects/NextJS/nextjs-dashboard/app/dashboard/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,82917)),"/Users/marin/Documents/Projects/NextJS/nextjs-dashboard/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,69361,23)),"next/dist/client/components/not-found-error"]}],c=["/Users/marin/Documents/Projects/NextJS/nextjs-dashboard/app/dashboard/jobs/page.tsx"],u="/dashboard/jobs/page",x={require:t,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/dashboard/jobs/page",pathname:"/dashboard/jobs",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},7919:(e,r,t)=>{let s={"527d95f96f5ed1bd97151e366373f4e96c01b847":()=>Promise.resolve().then(t.bind(t,40825)).then(e=>e.$$ACTION_1)};async function a(e,...r){return(await s[e]()).apply(null,r)}e.exports={"527d95f96f5ed1bd97151e366373f4e96c01b847":a.bind(null,"527d95f96f5ed1bd97151e366373f4e96c01b847")}},72539:(e,r,t)=>{Promise.resolve().then(t.bind(t,79504)),Promise.resolve().then(t.t.bind(t,61476,23))},54993:()=>{},4013:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,2583,23)),Promise.resolve().then(t.t.bind(t,26840,23)),Promise.resolve().then(t.t.bind(t,38771,23)),Promise.resolve().then(t.t.bind(t,13225,23)),Promise.resolve().then(t.t.bind(t,9295,23)),Promise.resolve().then(t.t.bind(t,43982,23))},35303:()=>{},79504:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>u});var s=t(95344),a=t(81737),n=t(72773),i=t(16215),o=t(56506),d=t(8428),l=t(56815);let c=[{name:"Home",href:"/dashboard",icon:a.Z},{name:"Invoices",href:"/dashboard/invoices",icon:n.Z},{name:"Customers",href:"/dashboard/customers",icon:i.Z}];function u(){let e=(0,d.usePathname)();return s.jsx(s.Fragment,{children:c.map(r=>{let t=r.icon;return(0,s.jsxs)(o.default,{href:r.href,className:(0,l.Z)("flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",{"bg-sky-100 text-blue-600":e===r.href}),children:[s.jsx(t,{className:"w-6"}),s.jsx("p",{className:"hidden md:block",children:r.name})]},r.name)})})}},55445:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>a});var s=t(25036);function a(){return s.jsx("p",{children:"Jobs Trend Page"})}},96339:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>n});var s=t(25036),a=t(40825);function n({children:e}){return(0,s.jsxs)("div",{className:"flex h-screen flex-col md:flex-row md:overflow-hidden",children:[s.jsx("div",{className:"w-full flex-none md:w-64",children:s.jsx(a.default,{})}),s.jsx("div",{className:"flex-grow p-6 md:overflow-y-auto md:p-12",children:e})]})}},82917:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>o,metadata:()=>i});var s=t(25036);t(85832);var a=t(16304),n=t.n(a);let i={title:{template:"%s | Acme Dashboard",default:"Acme Dashboard"},description:"The official Next.js Learn Dashboard built with App Router.",metadataBase:new URL("https://next-learn-dashboard.vercel.sh")};function o({children:e}){return s.jsx("html",{lang:"en",children:s.jsx("body",{className:`${n().className} antialiased`,children:e})})}},1910:(e,r,t)=>{"use strict";t.d(r,{Z:()=>o});var s=t(25036),a=t(44117),n=t(72657),i=t.n(n);function o(){return(0,s.jsxs)("div",{className:`${i().className} flex flex-row items-center leading-none text-white`,children:[s.jsx(a.Z,{className:"h-12 w-12 rotate-[15deg]"}),s.jsx("p",{className:"text-[44px]",children:"Acme"})]})}},40825:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$ACTION_1:()=>p,default:()=>m});var s=t(25036),a=t(74471);t(68616);var n=t(16274);let i=(0,t(86843).createProxy)(String.raw`/Users/marin/Documents/Projects/NextJS/nextjs-dashboard/app/ui/dashboard/nav-links.tsx`),{__esModule:o,$$typeof:d}=i,l=i.default;var c=t(1910),u=t(43443),x=t(59204);function m(){return(0,s.jsxs)("div",{className:"flex h-full flex-col px-3 py-4 md:px-2",children:[s.jsx(n.default,{className:"mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40",href:"/",children:s.jsx("div",{className:"w-32 text-white md:w-40",children:s.jsx(c.Z,{})})}),(0,s.jsxs)("div",{className:"flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2",children:[s.jsx(l,{}),s.jsx("div",{className:"hidden h-auto w-full grow rounded-md bg-gray-50 md:block"}),s.jsx("form",{action:(0,a.U)("527d95f96f5ed1bd97151e366373f4e96c01b847",p),children:(0,s.jsxs)("button",{className:"flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",children:[s.jsx(u.Z,{className:"w-6"}),s.jsx("div",{className:"hidden md:block",children:"Sign Out"})]})})]})]})}async function p(){await (0,x.w7)()}},59204:(e,r,t)=>{"use strict";t.d(r,{zB:()=>u,w7:()=>x});var s=t(11450),a=t(3133),n=t(82196),i=t(26463),o=t(67096),d=t.n(o);async function l(e){try{return(await i.i6`SELECT * FROM users WHERE email=${e}`).rows[0]}catch(e){throw console.error("Failed to fetch user:",e),Error("Failed to fetch user.")}}let{auth:c,signIn:u,signOut:x}=(0,s.Z)({pages:{signIn:"/login"},callbacks:{authorized({auth:e,request:{nextUrl:r}}){let t=!!e?.user;return r.pathname.startsWith("/dashboard")?!!t:!t||Response.redirect(new URL("/dashboard",r))}},providers:[],providers:[(0,a.Z)({async authorize(e){let r=n.z.object({email:n.z.string().email(),password:n.z.string().min(6)}).safeParse(e);if(r.success){let{email:e,password:t}=r.data,s=await l(e);if(!s)return null;if(await d().compare(t,s.password))return s}return console.log("Invalid credentials"),null}})]})},85832:()=>{}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[506,250,467],()=>t(95416));module.exports=s})();