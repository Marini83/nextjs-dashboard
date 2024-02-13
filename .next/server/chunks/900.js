exports.id=900,exports.ids=[900],exports.modules={72539:(e,t,r)=>{Promise.resolve().then(r.bind(r,79504)),Promise.resolve().then(r.t.bind(r,61476,23))},54993:()=>{},4013:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,26840,23)),Promise.resolve().then(r.t.bind(r,38771,23)),Promise.resolve().then(r.t.bind(r,13225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,43982,23))},79504:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var s=r(95344),a=r(81737),o=r(72773),n=r(16215),i=r(56506),c=r(8428),l=r(56815);let d=[{name:"Home",href:"/dashboard",icon:a.Z},{name:"Invoices",href:"/dashboard/invoices",icon:o.Z},{name:"Customers",href:"/dashboard/customers",icon:n.Z}];function u(){let e=(0,c.usePathname)();return s.jsx(s.Fragment,{children:d.map(t=>{let r=t.icon;return(0,s.jsxs)(i.default,{href:t.href,className:(0,l.Z)("flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",{"bg-sky-100 text-blue-600":e===t.href}),children:[s.jsx(r,{className:"w-6"}),s.jsx("p",{className:"hidden md:block",children:t.name})]},t.name)})})}},96339:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var s=r(25036),a=r(40825);function o({children:e}){return(0,s.jsxs)("div",{className:"flex h-screen flex-col md:flex-row md:overflow-hidden",children:[s.jsx("div",{className:"w-full flex-none md:w-64",children:s.jsx(a.default,{})}),s.jsx("div",{className:"flex-grow p-6 md:overflow-y-auto md:p-12",children:e})]})}},82917:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i,metadata:()=>n});var s=r(25036);r(85832);var a=r(16304),o=r.n(a);let n={title:{template:"%s | Acme Dashboard",default:"Acme Dashboard"},description:"The official Next.js Learn Dashboard built with App Router.",metadataBase:new URL("https://next-learn-dashboard.vercel.sh")};function i({children:e}){return s.jsx("html",{lang:"en",children:s.jsx("body",{className:`${o().className} antialiased`,children:e})})}},27521:(e,t,r)=>{"use strict";r.d(t,{BX:()=>m,D1:()=>u,NI:()=>i,V_:()=>d,qu:()=>c,t2:()=>n,x4:()=>l});var s=r(26463),a=r(99981),o=r(66864);async function n(){(0,o.unstable_noStore)();try{console.log("Fetching revenue data..."),await new Promise(e=>setTimeout(e,3e3));let e=await s.i6`SELECT * FROM revenue`;return console.log("Data fetch completed after 3 seconds."),e.rows}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch revenue data.")}}async function i(){(0,o.unstable_noStore)();try{return(await s.i6`
      SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      ORDER BY invoices.date DESC
      LIMIT 5`).rows.map(e=>({...e,amount:(0,a.xG)(e.amount)}))}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch the latest invoices.")}}async function c(){(0,o.unstable_noStore)();try{let e=s.i6`SELECT COUNT(*) FROM invoices`,t=s.i6`SELECT COUNT(*) FROM customers`,r=s.i6`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM invoices`,o=await Promise.all([e,t,r]),n=Number(o[0].rows[0].count??"0"),i=Number(o[1].rows[0].count??"0"),c=(0,a.xG)(o[2].rows[0].paid??"0"),l=(0,a.xG)(o[2].rows[0].pending??"0");return{numberOfCustomers:i,numberOfInvoices:n,totalPaidInvoices:c,totalPendingInvoices:l}}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch card data.")}}async function l(e,t){(0,o.unstable_noStore)();try{return(await s.i6`
      SELECT
        invoices.id,
        invoices.amount,
        invoices.date,
        invoices.status,
        customers.name,
        customers.email,
        customers.image_url
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE
        customers.name ILIKE ${`%${e}%`} OR
        customers.email ILIKE ${`%${e}%`} OR
        invoices.amount::text ILIKE ${`%${e}%`} OR
        invoices.date::text ILIKE ${`%${e}%`} OR
        invoices.status ILIKE ${`%${e}%`}
      ORDER BY invoices.date DESC
      LIMIT ${6} OFFSET ${(t-1)*6}
    `).rows}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch invoices.")}}async function d(e){(0,o.unstable_noStore)();try{let t=await s.i6`SELECT COUNT(*)
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE
      customers.name ILIKE ${`%${e}%`} OR
      customers.email ILIKE ${`%${e}%`} OR
      invoices.amount::text ILIKE ${`%${e}%`} OR
      invoices.date::text ILIKE ${`%${e}%`} OR
      invoices.status ILIKE ${`%${e}%`}
  `;return Math.ceil(Number(t.rows[0].count)/6)}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch total number of invoices.")}}async function u(e){(0,o.unstable_noStore)();try{let t=(await s.i6`
      SELECT
        invoices.id,
        invoices.customer_id,
        invoices.amount,
        invoices.status
      FROM invoices
      WHERE invoices.id = ${e};
    `).rows.map(e=>({...e,amount:e.amount/100}));return console.log("invoice",t),t[0]}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch invoice.")}}async function m(){(0,o.unstable_noStore)();try{return(await s.i6`
      SELECT
        id,
        name
      FROM customers
      ORDER BY name ASC
    `).rows}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch all customers.")}}},99981:(e,t,r)=>{"use strict";r.d(t,{p9:()=>a,tk:()=>o,xG:()=>s});let s=e=>(e/100).toLocaleString("en-US",{style:"currency",currency:"USD"}),a=(e,t="en-US")=>{let r=new Date(e);return new Intl.DateTimeFormat(t,{day:"numeric",month:"short",year:"numeric"}).format(r)},o=e=>{let t=[],r=1e3*Math.ceil(Math.max(...e.map(e=>e.revenue))/1e3);for(let e=r;e>=0;e-=1e3)t.push(`$${e/1e3}K`);return{yAxisLabels:t,topLabel:r}}},1910:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var s=r(25036),a=r(44117),o=r(72657),n=r.n(o);function i(){return(0,s.jsxs)("div",{className:`${n().className} flex flex-row items-center leading-none text-white`,children:[s.jsx(a.Z,{className:"h-12 w-12 rotate-[15deg]"}),s.jsx("p",{className:"text-[44px]",children:"Acme"})]})}},40825:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$ACTION_1:()=>f,default:()=>h});var s=r(25036),a=r(74471);r(68616);var o=r(16274);let n=(0,r(86843).createProxy)(String.raw`/Users/marin/Documents/Projects/NextJS/nextjs-dashboard/app/ui/dashboard/nav-links.tsx`),{__esModule:i,$$typeof:c}=n,l=n.default;var d=r(1910),u=r(43443),m=r(59204);function h(){return(0,s.jsxs)("div",{className:"flex h-full flex-col px-3 py-4 md:px-2",children:[s.jsx(o.default,{className:"mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40",href:"/",children:s.jsx("div",{className:"w-32 text-white md:w-40",children:s.jsx(d.Z,{})})}),(0,s.jsxs)("div",{className:"flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2",children:[s.jsx(l,{}),s.jsx("div",{className:"hidden h-auto w-full grow rounded-md bg-gray-50 md:block"}),s.jsx("form",{action:(0,a.U)("527d95f96f5ed1bd97151e366373f4e96c01b847",f),children:(0,s.jsxs)("button",{className:"flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",children:[s.jsx(u.Z,{className:"w-6"}),s.jsx("div",{className:"hidden md:block",children:"Sign Out"})]})})]})]})}async function f(){await (0,m.w7)()}},59204:(e,t,r)=>{"use strict";r.d(t,{zB:()=>u,w7:()=>m});var s=r(11450),a=r(3133),o=r(82196),n=r(26463),i=r(67096),c=r.n(i);async function l(e){try{return(await n.i6`SELECT * FROM users WHERE email=${e}`).rows[0]}catch(e){throw console.error("Failed to fetch user:",e),Error("Failed to fetch user.")}}let{auth:d,signIn:u,signOut:m}=(0,s.Z)({pages:{signIn:"/login"},callbacks:{authorized({auth:e,request:{nextUrl:t}}){let r=!!e?.user;return t.pathname.startsWith("/dashboard")?!!r:!r||Response.redirect(new URL("/dashboard",t))}},providers:[],providers:[(0,a.Z)({async authorize(e){let t=o.z.object({email:o.z.string().email(),password:o.z.string().min(6)}).safeParse(e);if(t.success){let{email:e,password:r}=t.data,s=await l(e);if(!s)return null;if(await c().compare(r,s.password))return s}return console.log("Invalid credentials"),null}})]})},85832:()=>{}};