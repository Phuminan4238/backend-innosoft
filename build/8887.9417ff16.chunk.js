(self.webpackChunkbackend_mysql=self.webpackChunkbackend_mysql||[]).push([[8887],{97449:(C,T,t)=>{var s=t(85373),e=t(75821),h=e(s);C.exports=h},29884:(C,T,t)=>{var s=t(97449),e=t(91522);function h(c,D){var u=-1,l=e(c)?Array(c.length):[];return s(c,function(r,R,U){l[++u]=D(r,R,U)}),l}C.exports=h},4191:(C,T,t)=>{var s=t(87864),e=t(86386),h=t(45353),c=t(29884),D=t(74565),u=t(52689),l=t(48126),r=t(82388),R=t(82261);function U(E,f,V){f.length?f=s(f,function(B){return R(B)?function(z){return e(z,B.length===1?B[0]:B)}:B}):f=[r];var w=-1;f=s(f,u(h));var G=c(E,function(B,z,K){var k=s(f,function(y){return y(B)});return{criteria:k,index:++w,value:B}});return D(G,function(B,z){return l(B,z,V)})}C.exports=U},74565:C=>{function T(t,s){var e=t.length;for(t.sort(s);e--;)t[e]=t[e].value;return t}C.exports=T},64958:(C,T,t)=>{var s=t(91662);function e(h,c){if(h!==c){var D=h!==void 0,u=h===null,l=h===h,r=s(h),R=c!==void 0,U=c===null,E=c===c,f=s(c);if(!U&&!f&&!r&&h>c||r&&R&&E&&!U&&!f||u&&R&&E||!D&&E||!l)return 1;if(!u&&!r&&!f&&h<c||f&&D&&l&&!u&&!r||U&&D&&l||!R&&l||!E)return-1}return 0}C.exports=e},48126:(C,T,t)=>{var s=t(64958);function e(h,c,D){for(var u=-1,l=h.criteria,r=c.criteria,R=l.length,U=D.length;++u<R;){var E=s(l[u],r[u]);if(E){if(u>=U)return E;var f=D[u];return E*(f=="desc"?-1:1)}}return h.index-c.index}C.exports=e},75821:(C,T,t)=>{var s=t(91522);function e(h,c){return function(D,u){if(D==null)return D;if(!s(D))return h(D,u);for(var l=D.length,r=c?l:-1,R=Object(D);(c?r--:++r<l)&&u(R[r],r,R)!==!1;);return D}}C.exports=e},45635:(C,T,t)=>{var s=t(87212),e=t(4191),h=t(39226),c=t(3956),D=h(function(u,l){if(u==null)return[];var r=l.length;return r>1&&c(u,l[0],l[1])?l=[]:r>2&&c(l[0],l[1],l[2])&&(l=[l[0]]),e(u,s(l,1),[])});C.exports=D},48887:(C,T,t)=>{"use strict";t.r(T),t.d(T,{SettingsPage:()=>as,makeUniqueRoutes:()=>ht});var s=t(92132),e=t(21272),h=t(58805),c=t(5239),D=t(11196),u=t(88353),l=t(7981),r=t(94061),R=t(61485),U=t(99248),E=t(30893),f=t(12081),V=t(12408),w=t(48653),G=t(24093),B=t(7537),z=t(67030),K=t(85963),k=t(7153),y=t(83997),Mt=t(10229),Pt=t(74447),ut=t(19307),Dt=t(33468),Ot=t(37789),pt=t(76547),xt=t(52358),nt=t(98915),Ct=t(1844),at=t(42455),ft=t(38413),Lt=t(55356),vt=t(4198),ot=t(90151),Z=t(68074),it=t(64871),L=t(55506),At=t(14718),S=t(54894),X=t(17703),Rt=t(71389),F=t(48176),jt=t(45635),et=t(82437),dt=t(3001),Bt=t(41156),It=t(32091),Tt=t(29404),Ut=t(87419),yt=t(63996),Wt=t(66980),Kt=t(5194),St=t(70603),zt=t(99576),Ft=t(54514),lt=t(14595),rt=t(63891),_t=t(89032),$t=t(41629),Nt=t(60256),os=t(15126),is=t(63299),es=t(67014),ds=t(59080),ls=t(79275),rs=t(61535),gs=t(5790),cs=t(12083),Es=t(35223),ms=t(5409),hs=t(74930),Ms=t(2600),Ps=t(48940),us=t(41286),Ds=t(56336),Os=t(13426),ps=t(84624),xs=t(77965),Cs=t(54257),fs=t(71210),Ls=t(51187),vs=t(39404),As=t(58692),Rs=t(501),js=t(57646),Bs=t(23120),Is=t(44414),Ts=t(25962),Us=t(14664),ys=t(42588),Ws=t(90325),Ks=t(62785),Ss=t(87443),zs=t(41032),Fs=t(22957),_s=t(93179),$s=t(73055),Ns=t(15747),Vs=t(85306),Gs=t(26509),Zs=t(32058),Xs=t(81185),Hs=t(82261),Qs=t(55151),Js=t(79077);const Vt=n=>n.map(a=>{const o=a.links.map(M=>({...M,isDisplayed:!1}));return{...a,links:o}}),Gt=()=>{const[{isLoading:n,menu:a},o]=e.useState({isLoading:!0,menu:[]}),{allPermissions:M}=(0,L.r5)(),{shouldUpdateStrapi:g}=(0,L.Xe)(),{settings:m}=(0,L.vD)(),O=(0,et.d4)(dt.s),p=e.useMemo(()=>(0,F.y)(),[]),{admin:i,global:d}=(0,F.p)(p,async()=>(await t.e(6179).then(t.bind(t,76179))).SETTINGS_LINKS_EE(),{combine(x,v){return{admin:[...v.admin,...x.admin],global:[...x.global,...v.global]}},defaultValue:{admin:[],global:[]}}),P=e.useCallback(x=>{if(!x.id)throw new Error("The settings menu item must have an id attribute.");return{...x,permissions:O.settings?.[x.id]?.main??[]}},[O.settings]);return e.useEffect(()=>{const x=async()=>{const Y=await(J=>Promise.all(J.reduce((W,$,N)=>{const tt=$.links.map(async(st,b)=>({hasPermission:await(0,L.v$)(M,st.permissions),sectionIndex:N,linkIndex:b}));return[...W,...tt]},[])))(I);o(J=>({...J,isLoading:!1,menu:I.map((W,$)=>({...W,links:W.links.map((N,tt)=>{const st=Y.find(b=>b.sectionIndex===$&&b.linkIndex===tt);return{...N,isDisplayed:Boolean(st?.hasPermission)}})}))}))},{global:v,...j}=m,I=Vt([{...v,links:jt([...v.links,...d.map(P)],A=>A.id).map(A=>({...A,hasNotification:A.id==="000-application-infos"&&g}))},{id:"permissions",intlLabel:{id:"Settings.permissions",defaultMessage:"Administration Panel"},links:i.map(P)},...Object.values(j)]);x()},[i,d,M,m,g,P]),{isLoading:n,menu:a.map(x=>({...x,links:x.links.filter(v=>v.isDisplayed)}))}},Zt=(0,rt.Ay)(h.I)`
  right: 15px;
  position: absolute;

  path {
    fill: ${({theme:n})=>n.colors.warning500};
  }
`,Xt=({menu:n})=>{const{formatMessage:a}=(0,S.A)(),{trackUsage:o}=(0,L.z1)(),{pathname:M}=(0,X.zy)(),m=n.filter(i=>!i.links.every(d=>d.isDisplayed===!1)).map(i=>({...i,title:i.intlLabel,links:i.links.map(d=>({...d,title:d.intlLabel,name:d.id}))})),O=a({id:"global.settings",defaultMessage:"Settings"}),p=i=>()=>{o("willNavigate",{from:M,to:i})};return(0,s.jsxs)(Bt.C,{ariaLabel:O,children:[(0,s.jsx)(It.X,{label:O}),(0,s.jsx)(Tt.w,{children:m.map(i=>(0,s.jsx)(Ut.L,{label:a(i.intlLabel),children:i.links.map(d=>(0,s.jsxs)(yt.u,{as:Rt.k2,withBullet:d.hasNotification,to:d.to,onClick:p(d.to),children:[a(d.intlLabel),d?.lockIcon&&(0,s.jsx)(Zt,{width:`${15/16}rem`,height:`${15/16}rem`,as:Wt.A})]},d.id))},i.id))})]})},Ht=[{async Component(){const{ProtectedListPage:n}=await t.e(6234).then(t.bind(t,36234));return n},to:"/settings/roles",exact:!0},{async Component(){const{ProtectedCreatePage:n}=await Promise.all([t.e(6103),t.e(1216),t.e(7093)]).then(t.bind(t,77093));return n},to:"/settings/roles/duplicate/:id",exact:!0},{async Component(){const{ProtectedCreatePage:n}=await Promise.all([t.e(6103),t.e(1216),t.e(7093)]).then(t.bind(t,77093));return n},to:"/settings/roles/new",exact:!0},{async Component(){const{ProtectedEditPage:n}=await Promise.all([t.e(1216),t.e(90)]).then(t.bind(t,50090));return n},to:"/settings/roles/:id",exact:!0},{async Component(){const{ProtectedListPage:n}=await t.e(4026).then(t.bind(t,24026));return n},to:"/settings/users",exact:!0},{async Component(){const{ProtectedEditPage:n}=await t.e(5338).then(t.bind(t,75338));return n},to:"/settings/users/:id",exact:!0},{async Component(){const{ProtectedCreatePage:n}=await t.e(8533).then(t.bind(t,38533));return n},to:"/settings/webhooks/create",exact:!0},{async Component(){const{ProtectedEditPage:n}=await t.e(8859).then(t.bind(t,68859)).then(a=>a.b);return n},to:"/settings/webhooks/:id",exact:!0},{async Component(){const{ProtectedListPage:n}=await t.e(2184).then(t.bind(t,82184));return n},to:"/settings/webhooks",exact:!0},{async Component(){const{ProtectedListView:n}=await t.e(5586).then(t.bind(t,45586));return n},to:"/settings/api-tokens",exact:!0},{async Component(){const{ProtectedCreateView:n}=await Promise.all([t.e(6103),t.e(4978),t.e(9495)]).then(t.bind(t,49495));return n},to:"/settings/api-tokens/create",exact:!0},{async Component(){const{ProtectedEditView:n}=await Promise.all([t.e(6103),t.e(4978),t.e(2653)]).then(t.bind(t,82653));return n},to:"/settings/api-tokens/:id",exact:!0},{async Component(){const{ProtectedCreateView:n}=await Promise.all([t.e(6103),t.e(4978),t.e(2833)]).then(t.bind(t,12833));return n},to:"/settings/transfer-tokens/create",exact:!0},{async Component(){const{ProtectedListView:n}=await t.e(9488).then(t.bind(t,89488));return n},to:"/settings/transfer-tokens",exact:!0},{async Component(){const{ProtectedEditView:n}=await Promise.all([t.e(6103),t.e(4978),t.e(148)]).then(t.bind(t,80148));return n},to:"/settings/transfer-tokens/:id",exact:!0},{async Component(){const{PurchaseAuditLogs:n}=await t.e(6323).then(t.bind(t,96323));return n},to:"/settings/purchase-audit-logs",exact:!0},{async Component(){const{PurchaseReviewWorkflows:n}=await t.e(5904).then(t.bind(t,5904));return n},to:"/settings/purchase-review-workflows",exact:!0},{async Component(){const{PurchaseSingleSignOn:n}=await t.e(8848).then(t.bind(t,98848));return n},to:"/settings/purchase-single-sign-on",exact:!0}],_=750,H=100,gt=["image/jpeg","image/png","image/svg+xml"],Qt={id:"Settings.application.customization.modal.upload.error-format",defaultMessage:"Wrong format uploaded (accepted formats only: jpeg, jpg, png, svg)."},ct={id:"Settings.application.customization.modal.upload.error-size",defaultMessage:"The file uploaded is too large (max dimension: {dimension}x{dimension}, max file size: {size}KB)"},Et=async n=>{if(!gt.includes(n.type))throw new Q("File format",Qt);const o=await new Promise(O=>{const p=new FileReader;p.onload=()=>{const i=new Image;i.onload=()=>{O({width:i.width,height:i.height})},i.src=p.result},p.readAsDataURL(n)});if(!(o.width<=_&&o.height<=_))throw new Q("File sizing",ct);const g={ext:n.name.split(".").pop(),size:n.size/1e3,name:n.name,url:URL.createObjectURL(n),rawFile:n,width:o.width,height:o.height};if(!(g.size<=H))throw new Q("File sizing",ct);return g};class Q extends Error{displayMessage;constructor(a,o,M){super(a,M),this.displayMessage=o}}const[Jt,q]=(0,_t.q)("LogoInput"),mt=({canUpdate:n,customLogo:a,defaultLogo:o,hint:M,label:g,onChangeLogo:m})=>{const[O,p]=e.useState(),[i,d]=e.useState(),{formatMessage:P}=(0,S.A)(),x=()=>{p(void 0),d(void 0)};return(0,s.jsxs)(Jt,{setLocalImage:p,localImage:O,goToStep:d,onClose:x,children:[(0,s.jsx)(c.Z,{label:g,selectedSlide:0,hint:M,previousLabel:"",nextLabel:"",onNext:()=>{},onPrevious:()=>{},secondaryLabel:a?.name||"logo.png",actions:(0,s.jsxs)(D.O,{children:[(0,s.jsx)(u.K,{disabled:!n,onClick:()=>d("upload"),label:P({id:"Settings.application.customization.carousel.change-action",defaultMessage:"Change logo"}),icon:(0,s.jsx)(Kt.A,{})}),a?.url&&(0,s.jsx)(u.K,{disabled:!n,onClick:()=>m(null),label:P({id:"Settings.application.customization.carousel.reset-action",defaultMessage:"Reset logo"}),icon:(0,s.jsx)(St.A,{})})]}),children:(0,s.jsx)(l.o,{label:P({id:"Settings.application.customization.carousel-slide.label",defaultMessage:"Logo slide"}),children:(0,s.jsx)(r.a,{maxHeight:"40%",maxWidth:"40%",as:"img",src:a?.url||o,alt:P({id:"Settings.application.customization.carousel.title",defaultMessage:"Logo"})})})}),i?(0,s.jsxs)(R.k,{labelledBy:"modal",onClose:x,children:[(0,s.jsx)(U.r,{children:(0,s.jsx)(E.o,{fontWeight:"bold",as:"h2",id:"modal",children:P(i==="upload"?{id:"Settings.application.customization.modal.upload",defaultMessage:"Upload logo"}:{id:"Settings.application.customization.modal.pending",defaultMessage:"Pending logo"})})}),i==="upload"?(0,s.jsx)(Yt,{}):(0,s.jsx)(qt,{onChangeLogo:m})]}):null]})},Yt=()=>{const{formatMessage:n}=(0,S.A)();return(0,s.jsxs)(f.f,{label:n({id:"Settings.application.customization.modal.tab.label",defaultMessage:"How do you want to upload your assets?"}),variant:"simple",children:[(0,s.jsxs)(r.a,{paddingLeft:8,paddingRight:8,children:[(0,s.jsxs)(V.t,{children:[(0,s.jsx)(V.o,{children:n({id:"Settings.application.customization.modal.upload.from-computer",defaultMessage:"From computer"})}),(0,s.jsx)(V.o,{children:n({id:"Settings.application.customization.modal.upload.from-url",defaultMessage:"From url"})})]}),(0,s.jsx)(w.c,{})]}),(0,s.jsxs)(G.T,{children:[(0,s.jsx)(G.K,{children:(0,s.jsx)(wt,{})}),(0,s.jsx)(G.K,{children:(0,s.jsx)(bt,{})})]})]})},bt=()=>{const{formatMessage:n}=(0,S.A)(),[a,o]=e.useState(""),[M,g]=e.useState(),{setLocalImage:m,goToStep:O,onClose:p}=q("URLForm"),i=P=>{o(P.target.value)},d=async P=>{P.preventDefault();const v=new FormData(P.target).get("logo-url");if(v)try{const j=await $t.A.get(v.toString(),{responseType:"blob",timeout:8e3}),I=new File([j.data],j.config.url??"",{type:j.headers["content-type"]}),A=await Et(I);m(A),O("pending")}catch(j){if(j instanceof Nt.pe)g(n({id:"Settings.application.customization.modal.upload.error-network",defaultMessage:"Network error"}));else if(j instanceof Q)g(n(j.displayMessage,{size:H,dimension:_}));else throw j}};return(0,s.jsxs)("form",{onSubmit:d,children:[(0,s.jsx)(r.a,{paddingLeft:8,paddingRight:8,paddingTop:6,paddingBottom:6,children:(0,s.jsx)(B.k,{label:n({id:"Settings.application.customization.modal.upload.from-url.input-label",defaultMessage:"URL"}),error:M,onChange:i,value:a,name:"logo-url"})}),(0,s.jsx)(z.j,{startActions:(0,s.jsx)(K.$,{onClick:p,variant:"tertiary",children:n({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),endActions:(0,s.jsx)(K.$,{type:"submit",children:n({id:"Settings.application.customization.modal.upload.next",defaultMessage:"Next"})})})]})},wt=()=>{const{formatMessage:n}=(0,S.A)(),[a,o]=e.useState(!1),[M,g]=e.useState(),m=e.useRef(null),O=e.useId(),{setLocalImage:p,goToStep:i,onClose:d}=q("ComputerForm"),P=()=>o(!0),x=()=>o(!1),v=I=>{I.preventDefault(),m.current.click()},j=async()=>{if(x(),!m.current.files)return;const[I]=m.current.files;try{const A=await Et(I);p(A),i("pending")}catch(A){if(A instanceof Q)g(n(A.displayMessage,{size:H,dimension:_})),m.current.focus();else throw A}};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("form",{children:(0,s.jsx)(r.a,{paddingLeft:8,paddingRight:8,paddingTop:6,paddingBottom:6,children:(0,s.jsx)(k.D,{name:O,error:M,children:(0,s.jsxs)(y.s,{direction:"column",alignItems:"stretch",gap:2,children:[(0,s.jsxs)(y.s,{paddingTop:9,paddingBottom:7,hasRadius:!0,justifyContent:"center",direction:"column",background:a?"primary100":"neutral100",borderColor:a?"primary500":M?"danger600":"neutral300",borderStyle:"dashed",borderWidth:"1px",position:"relative",onDragEnter:P,onDragLeave:x,children:[(0,s.jsx)(h.I,{color:"primary600",width:(0,L.a8)(60),height:(0,L.a8)(60),as:zt.A,"aria-hidden":!0}),(0,s.jsx)(r.a,{paddingTop:3,paddingBottom:5,children:(0,s.jsx)(E.o,{variant:"delta",as:"label",htmlFor:O,children:n({id:"Settings.application.customization.modal.upload.drag-drop",defaultMessage:"Drag and Drop here or"})})}),(0,s.jsx)(kt,{accept:gt.join(", "),type:"file",name:"files",tabIndex:-1,onChange:j,ref:m,id:O}),(0,s.jsx)(K.$,{type:"button",onClick:v,children:n({id:"Settings.application.customization.modal.upload.cta.browse",defaultMessage:"Browse files"})}),(0,s.jsx)(r.a,{paddingTop:6,children:(0,s.jsx)(E.o,{variant:"pi",textColor:"neutral600",children:n({id:"Settings.application.customization.modal.upload.file-validation",defaultMessage:"Max dimension: {dimension}x{dimension}, Max size: {size}KB"},{size:H,dimension:_})})})]}),(0,s.jsx)(Mt.b,{})]})})})}),(0,s.jsx)(z.j,{startActions:(0,s.jsx)(K.$,{onClick:d,variant:"tertiary",children:n({id:"Settings.application.customization.modal.cancel",defaultMessage:"Cancel"})})})]})},kt=(0,rt.Ay)(Pt.T)`
  opacity: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`,qt=({onChangeLogo:n})=>{const{formatMessage:a}=(0,S.A)(),{localImage:o,setLocalImage:M,goToStep:g,onClose:m}=q("PendingLogoDialog"),O=()=>{M(void 0),g("upload")},p=()=>{o&&n(o),m()};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.a,{paddingLeft:8,paddingRight:8,paddingTop:6,paddingBottom:6,children:[(0,s.jsxs)(y.s,{justifyContent:"space-between",paddingBottom:6,children:[(0,s.jsxs)(y.s,{direction:"column",alignItems:"flex-start",children:[(0,s.jsx)(E.o,{variant:"pi",fontWeight:"bold",children:a({id:"Settings.application.customization.modal.pending.title",defaultMessage:"Logo ready to upload"})}),(0,s.jsx)(E.o,{variant:"pi",textColor:"neutral500",children:a({id:"Settings.application.customization.modal.pending.subtitle",defaultMessage:"Manage the chosen logo before uploading it"})})]}),(0,s.jsx)(K.$,{onClick:O,variant:"secondary",children:a({id:"Settings.application.customization.modal.pending.choose-another",defaultMessage:"Choose another logo"})})]}),(0,s.jsx)(r.a,{maxWidth:(0,L.a8)(180),children:o?.url?(0,s.jsx)(ts,{asset:o}):null})]}),(0,s.jsx)(z.j,{startActions:(0,s.jsx)(K.$,{onClick:m,variant:"tertiary",children:a({id:"Settings.application.customization.modal.cancel",defaultMessage:"Cancel"})}),endActions:(0,s.jsx)(K.$,{onClick:p,children:a({id:"Settings.application.customization.modal.pending.upload",defaultMessage:"Upload logo"})})})]})},ts=({asset:n})=>{const{formatMessage:a}=(0,S.A)();return(0,s.jsxs)(ut.Z,{children:[(0,s.jsx)(Dt.a,{children:(0,s.jsx)(Ot.P,{size:"S",src:n.url})}),(0,s.jsxs)(pt.b,{children:[(0,s.jsxs)(xt.W,{children:[(0,s.jsx)(nt.Z,{children:n.name}),(0,s.jsx)(nt.j,{children:`${n.ext?.toUpperCase()} - ${n.width}\u2715${n.height}`})]}),(0,s.jsx)(Ct.S,{children:a({id:"Settings.application.customization.modal.pending.card-badge",defaultMessage:"image"})})]})]})},ss=()=>null,ns=()=>{const{trackUsage:n}=(0,L.z1)(),{formatMessage:a}=(0,S.A)(),{logos:o,updateProjectSettings:M}=(0,F.u)("ApplicationInfoPage"),[g,m]=e.useState({menu:o.menu,auth:o.auth}),{settings:O}=(0,et.d4)(dt.s),{communityEdition:p,latestStrapiReleaseTag:i,nodeVersion:d,shouldUpdateStrapi:P,strapiVersion:x}=(0,L.Xe)(),v=(0,F.p)(ss,async()=>(await t.e(3175).then(t.bind(t,23175))).AdminSeatInfoEE),{allowedActions:{canRead:j,canUpdate:I}}=(0,L.ec)(O?O["project-settings"]:{});(0,L.L4)();const A=W=>{W.preventDefault(),M({authLogo:g.auth.custom??null,menuLogo:g.menu.custom??null})},Y=W=>$=>{$===null&&n("didClickResetLogo",{logo:W}),m(N=>({...N,[W]:{...N[W],custom:$}}))};if(e.useEffect(()=>{m({menu:o.menu,auth:o.auth})},[o]),!v)return null;const J=g.auth.custom===o.auth.custom&&g.menu.custom===o.menu.custom;return(0,s.jsxs)(at.P,{children:[(0,s.jsx)(L.x7,{name:a({id:"Settings.application.header",defaultMessage:"Application"})}),(0,s.jsx)(ft.g,{children:(0,s.jsxs)("form",{onSubmit:A,children:[(0,s.jsx)(Lt.Q,{title:a({id:"Settings.application.title",defaultMessage:"Overview"}),subtitle:a({id:"Settings.application.description",defaultMessage:"Administration panel\u2019s global information"}),primaryAction:I&&(0,s.jsx)(K.$,{disabled:J,type:"submit",startIcon:(0,s.jsx)(Ft.A,{}),children:a({id:"global.save",defaultMessage:"Save"})})}),(0,s.jsx)(vt.s,{children:(0,s.jsxs)(y.s,{direction:"column",alignItems:"stretch",gap:6,children:[(0,s.jsxs)(y.s,{direction:"column",alignItems:"stretch",gap:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingRight:7,paddingLeft:7,children:[(0,s.jsx)(E.o,{variant:"delta",as:"h3",children:a({id:"global.details",defaultMessage:"Details"})}),(0,s.jsxs)(ot.x,{gap:5,as:"dl",children:[(0,s.jsxs)(Z.E,{col:6,s:12,children:[(0,s.jsx)(E.o,{variant:"sigma",textColor:"neutral600",as:"dt",children:a({id:"Settings.application.strapiVersion",defaultMessage:"strapi version"})}),(0,s.jsxs)(y.s,{gap:3,direction:"column",alignItems:"start",as:"dd",children:[(0,s.jsxs)(E.o,{children:["v",x]}),P&&(0,s.jsx)(it.N,{href:`https://github.com/strapi/strapi/releases/tag/${i}`,endIcon:(0,s.jsx)(lt.A,{}),children:a({id:"Settings.application.link-upgrade",defaultMessage:"Upgrade your admin panel"})})]})]}),(0,s.jsxs)(Z.E,{col:6,s:12,children:[(0,s.jsx)(E.o,{variant:"sigma",textColor:"neutral600",as:"dt",children:a({id:"Settings.application.edition-title",defaultMessage:"current plan"})}),(0,s.jsxs)(y.s,{gap:3,direction:"column",alignItems:"start",as:"dd",children:[(0,s.jsx)(E.o,{children:a({id:"Settings.application.ee-or-ce",defaultMessage:"{communityEdition, select, true {Community Edition} other {Enterprise Edition}}"},{communityEdition:p})}),(0,s.jsx)(it.N,{href:"https://strapi.io/pricing-self-hosted",endIcon:(0,s.jsx)(lt.A,{}),children:a({id:"Settings.application.link-pricing",defaultMessage:"See all pricing plans"})})]})]}),(0,s.jsxs)(Z.E,{col:6,s:12,children:[(0,s.jsx)(E.o,{variant:"sigma",textColor:"neutral600",as:"dt",children:a({id:"Settings.application.node-version",defaultMessage:"node version"})}),(0,s.jsx)(E.o,{as:"dd",children:d})]}),(0,s.jsx)(v,{})]})]}),j&&(0,s.jsxs)(r.a,{hasRadius:!0,background:"neutral0",shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingRight:7,paddingLeft:7,children:[(0,s.jsx)(E.o,{variant:"delta",as:"h3",children:a({id:"Settings.application.customization",defaultMessage:"Customization"})}),(0,s.jsx)(E.o,{variant:"pi",textColor:"neutral600",children:a({id:"Settings.application.customization.size-details",defaultMessage:"Max dimension: {dimension}\xD7{dimension}, Max file size: {size}KB"},{dimension:_,size:H})}),(0,s.jsxs)(ot.x,{paddingTop:4,gap:4,children:[(0,s.jsx)(Z.E,{col:6,s:12,children:(0,s.jsx)(mt,{canUpdate:I,customLogo:g.menu.custom,defaultLogo:g.menu.default,hint:a({id:"Settings.application.customization.menu-logo.carousel-hint",defaultMessage:"Replace the logo in the main navigation"}),label:a({id:"Settings.application.customization.carousel.menu-logo.title",defaultMessage:"Menu logo"}),onChangeLogo:Y("menu")})}),(0,s.jsx)(Z.E,{col:6,s:12,children:(0,s.jsx)(mt,{canUpdate:I,customLogo:g.auth.custom,defaultLogo:g.auth.default,hint:a({id:"Settings.application.customization.auth-logo.carousel-hint",defaultMessage:"Replace the logo in the authentication pages"}),label:a({id:"Settings.application.customization.carousel.auth-logo.title",defaultMessage:"Auth logo"}),onChangeLogo:Y("auth")})})]})]})]})})]})})]})},as=()=>{const{settingId:n}=(0,X.g)(),{settings:a}=(0,L.vD)(),{formatMessage:o}=(0,S.A)(),{isLoading:M,menu:g}=Gt(),m=(0,F.p)(Ht,async()=>(await t.e(751).then(t.bind(t,80751))).ROUTES_EE,{combine(i,d){return[...i,...d]},defaultValue:[]}),O=e.useMemo(()=>ht(m).map(({to:i,Component:d,exact:P})=>(0,F.d)(d,i,P)),[m]),p=Object.values(a).flatMap(i=>{const{links:d}=i;return d.map(P=>(0,F.d)(P.Component,P.to,P.exact||!1))});return M?(0,s.jsx)(L.Bl,{}):n?(0,s.jsxs)(at.P,{sideNav:(0,s.jsx)(Xt,{menu:g}),children:[(0,s.jsx)(At.m,{title:o({id:"global.settings",defaultMessage:"Settings"})}),(0,s.jsxs)(X.dO,{children:[(0,s.jsx)(X.qh,{path:"/settings/application-infos",component:ns,exact:!0}),O,p]})]}):(0,s.jsx)(X.rd,{to:"/settings/application-infos"})},ht=n=>n.filter((a,o,M)=>M.findIndex(g=>g.to===a.to)===o)}}]);