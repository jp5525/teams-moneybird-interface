_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{CvGF:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/config",function(){return n("IeYr")}])},IeYr:function(e,t,n){"use strict";n.r(t);var a=n("KQm4"),o=n("o0o1"),i=n.n(o),s=n("HaE+"),r=n("1OyB"),c=n("vuIU"),l=n("JX7q"),u=n("Ji7U"),d=n("md7G"),p=n("foSv"),h=n("q1tI"),m=n.n(h),f=n("3r0M"),y=n("YIMM"),b=n("iUi7"),g=n("/Ina"),v=n("wX7S"),k=n("iY3s"),w=n("Skks"),O=n("wXOM"),S=n("WZt7"),j=n("3WF5"),C=n.n(j),T=n("Og4/"),x=n.n(T),A=n("UfWW"),I=n.n(A),P=n("aDiX"),K=function(){return{attributes:{root:{role:"radiogroup"}},keyActions:{root:{nextItem:{keyCombinations:[{keyCode:P.d.ArrowDown},{keyCode:P.d.ArrowRight}]},prevItem:{keyCombinations:[{keyCode:P.d.ArrowUp},{keyCode:P.d.ArrowLeft}]}}}}},N=n("LfD4"),D=n("17x9"),E=n("4o4N"),M=n("OG6F"),V=n("49JR"),F=n("yX7n"),_=n("3LPQ"),z=n("x8H/"),B=n("rxyn"),J=n("WwGW"),G=n("3S5o"),R=n("A8ML"),q=n("a3Sb"),Q=n("QPKD"),W=function(){var e=function e(t){var n=Object(z.c)(),a=Object(B.a)(e.displayName,n.telemetry),o=a.setStart,i=a.setEnd;o();var s=t.children,r=t.vertical,c=t.items,l=t.className,u=t.design,d=t.styles,p=t.variables,m=Object(J.a)(t),f=Object(G.a)(e.handledProps,t),y=Object(R.a)(t.accessibility,{debugName:e.displayName,actionHandlers:{nextItem:function(e){return T(e,1)},prevItem:function(e){return T(e,-1)}},rtl:n.rtl}),b=Object(q.a)(e.displayName,{className:"ui-radiogroup",mapPropsToInlineStyles:function(){return{className:l,design:u,styles:d,variables:p}},rtl:n.rtl}).classes,g=Object(Q.a)({defaultValue:t.defaultCheckedValue,value:t.checkedValue,initialValue:void 0}),v=g[0],k=g[1],w=h.useState(!1),O=w[0],S=w[1],j=function(e){return e.props||e},T=function(e,t){var n=A(t);n&&K({nextCheckedValue:n.value,shouldFocus:!0,event:e,itemProps:n}),e.preventDefault()},A=function(e){if(t.items&&t.items.length)for(var n=void 0!==v?I()(t.items,(function(e){return j(e).value===v})):0,a=n+e;a!==n;a+=e){if(a<0?a=t.items.length-1:a>=t.items.length&&(a=0),a===n)return;var o=j(t.items[a]);if(!o.disabled)return o}},P=function(e){return{checked:"undefined"!==typeof v&&v===e.value,onClick:function(t,n){var a=n.value;n.disabled||a===v||K({nextCheckedValue:a,shouldFocus:!1,event:t,itemProps:n}),x()(e,"onClick",t,n)},shouldFocus:O}},K=function(e){var n=e.nextCheckedValue,a=e.shouldFocus,o=e.event,i=e.itemProps;k(n),S(a),x()(t,"onCheckedValueChange",o,i)},N=y.unstable_wrapWithFocusZone(h.createElement(m,y("root",Object.assign({className:b.root},f,E.a.getAttributes({forElements:[s]}))),Object(M.a)(s)?s:function(e){var t=void 0===v;return C()(c,(function(n,a){return _.a.create(n,{defaultProps:function(){return y("item",Object.assign({vertical:e},0===a&&t&&{tabIndex:0}))},overrideProps:P})}))}(r)));return i(),N};return e.displayName="RadioGroup",e.propTypes=Object.assign({},V.a.createCommon({content:!1}),{checkedValue:D.oneOfType([D.number,D.string]),defaultCheckedValue:D.oneOfType([D.number,D.string]),items:N.c,onCheckedValueChange:D.func,vertical:D.bool}),e.defaultProps={accessibility:K},e.handledProps=Object.keys(e.propTypes),e.Item=_.a,e.create=Object(F.b)({Component:e}),e}(),L=n("g4pe"),U=n.n(L),X=m.a.createElement;function Y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(p.a)(e);if(t){var o=Object(p.a)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return Object(d.a)(this,n)}}var H=function(e){return null==e||0==e.length},Z={mainPadding:{padding:"0px 2em"},mainSidePadding:{padding:"10px 2em"},mainPdf:{display:"flex",justifyContent:"center"},mainTable:{backgroundColor:"#fff",border:"1px solid #d8e2f0",borderRadius:"4px",boxShadow:"0 0 10px 0 rgba(19,29,41,.05)",position:"relative",padding:"0em 3em 2em"},backButton:{cusor:"pointer"},label:{fontWeight:"bold"}},$={en:{heading:"Moneybird Configuration",apiSection:{title:X("label",{style:Z.label},"API Token"),description:X("span",null,"This is the API Token for you MoneyBird Account. You can generate one ",X("a",{target:"_blank",href:"https://moneybird.com/user/applications/new"},"here")," for personal use."),succsess:"API Token is vaild",fail:"API Token NOT vaild",placeholder:"API Token",show:"Click to choose another api key"},contactSection:{title:X("label",{style:Z.label},"Contact"),description:X("span",null,"The contact whos data will show up on the tab"),placeholder:"Choose a Contact"},typeSection:{title:X("label",{style:Z.label},"Data Type"),description:X("span",null,"The type of data to show on the tab")},deleteDialog:{cancel:"Cancel",confirm:"Yes",header:"Delete API Key",message:function(e){return"Are you sure you want to delete ".concat(e)}},tabs:["Invoices","Quotes"]},nl:{heading:"Moneybird Koppelen",apiSection:{title:X("label",{style:Z.label},"API token invoeren"),description:X("span",null,"Vul hier een API-token in van je Moneybird account. Je kunt ",X("a",{target:"_blank",href:"https://moneybird.com/user/applications/new"},"hier")," een API-token genereren. Vul een naam in die herkenbaar is voor deze connectie, bijvoorbeeld \u2018Microsoft Teams Integratie\u2019. Kies voor \u2018API token voor persoonlijk gebruik\u2019 en geef toegang voor alle onderdelen. Vervolgens verschijnt er een API-token in beeld. Vul deze hieronder in."),succsess:"API-token is geldig",fail:"API-token niet geldig",placeholder:"API token invoeren",show:"Klik om een \u200b\u200bandere API-sleutel te kiezen"},contactSection:{title:X("label",{style:Z.label},"Contact"),description:X("span",null,"Selecteer de Contact waarvan je de gegevens wilt tonen in de Tab."),placeholder:"Kies een Contact"},typeSection:{title:X("label",{style:Z.label},"Data Type"),description:X("span",null,"Het type gegevens dat op het tabblad moet worden weergegeven")},deleteDialog:{cancel:"Annuleren",confirm:"Ja",header:"API-sleutel verwijderen",message:function(e){return"Weet je zeker dat je wilt verwijderen ".concat(e)}},tabs:["Facturen","Offertes"]}},ee=function(e){Object(u.a)(n,e);var t=Y(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).microsoftTeams&&e.microsoftTeams.initialize(),e.state={apiKey:null,adminId:null,admins:null,admin:null,contacts:null,contact:null,loadingContacts:!1,keys:[],isNew:!1,isOpen:!1,isContactsOpen:!1,locale:null,tabType:"invoices",showApiKeys:!1,loaded:!1},e.submit=e.submit.bind(Object(l.a)(e)),e.getOptions=e.getOptions.bind(Object(l.a)(e)),e.save=e.save.bind(Object(l.a)(e)),e.getAdmin=e.getAdmin.bind(Object(l.a)(e)),e.handleToken=e.handleToken.bind(Object(l.a)(e)),e.handleAdmin=e.handleAdmin.bind(Object(l.a)(e)),e.getContacts=e.getContacts.bind(Object(l.a)(e)),e.updateContact=e.updateContact.bind(Object(l.a)(e)),e.deleteKeyFromDb=e.deleteKeyFromDb.bind(Object(l.a)(e)),e.createKeyEntry=e.createKeyEntry.bind(Object(l.a)(e)),e.update=e.update.bind(Object(l.a)(e)),e.callbacker=e.callbacker.bind(Object(l.a)(e)),e}return Object(c.a)(n,[{key:"update",value:function(e){this.setState(e)}},{key:"getAdmin",value:function(){var e=Object(s.a)(i.a.mark((function e(t){var n,a,o,s,r=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]&&r[1],a=this.state.tid,e.prev=2,e.next=5,fetch("https://moneybirdproxymaatwerk.azurewebsites.net/api/MoneyBirdProxy",{mode:"cors",method:"POST",body:JSON.stringify({method:"GET",path:"administrations.json",key:t,isNew:n,tid:a})});case 5:return o=e.sent,e.next=8,o.json();case 8:s=e.sent,console.log({json:s}),s.error?this.setState({admins:!1,isOpen:!1,contacts:null}):(this.setState({admin:s[0],adminId:s[0].id,admins:!0,isOpen:!1}),this.submit(s[0])),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),console.log(e.t0);case 16:case"end":return e.stop()}}),e,this,[[2,13]])})));return function(t){return e.apply(this,arguments)}}()},{key:"callbacker",value:function(){var e=Object(s.a)(i.a.mark((function e(t){var n,a,o,s,r,c,l,u=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.tid,a=t.locale,e.prev=1,e.next=4,fetch("https://moneybirdproxymaatwerk.azurewebsites.net/api/key/".concat(n),{mode:"cors",method:"GET"});case 4:return o=e.sent,e.next=7,o.json();case 7:s=e.sent,console.log({json:s}),r=s.map((function(e){return{content:X("div",null,X("span",{style:{cursor:"pointer"},class:"lnr lnr-trash",onClick:function(){return u.setState({deleteKey:e.key,isOpen:!1})}})," - ",X("span",{style:{cursor:"pointer"},onClick:function(){return u.handleToken(e.key)}},e.key)),key:e.key}})),c=s.length>0?s[0].key:"",0==(l=H(c))&&this.getAdmin(c),this.update({keys:r,apiKey:c,showApiKeys:l,tid:n,locale:a}),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(1),console.log("BOO"),console.log(e.t0);case 20:case"end":return e.stop()}}),e,this,[[1,16]])})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.microsoftTeams=window.microsoftTeams?window.microsoftTeams:null,this.microsoftTeams.initialize(),this.microsoftTeams.getContext(this.callbacker);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getOptions",value:function(){return this.state.contacts.map((function(e){return{content:e.company_name,value:e.id}}))}},{key:"handleAdmin",value:function(e,t){this.setState({admin:t.value}),this.submit(t.value)}},{key:"getContacts",value:function(){var e=Object(s.a)(i.a.mark((function e(t,n){var a,o,s,r,c,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=21;break}return a=this.state,o=a.apiKey,s=a.adminId,r=n.searchQuery,e.prev=3,this.setState({loadingContacts:!0}),e.next=7,fetch("https://moneybirdproxymaatwerk.azurewebsites.net/api/MoneyBirdProxy",{mode:"cors",method:"POST",body:JSON.stringify({method:"GET",path:"".concat(s,"/contacts.json").concat(H(r)?"":"?query="+r),key:o})});case 7:return c=e.sent,e.next=10,c.json();case 10:l=e.sent,console.log({json:l}),this.setState({contacts:l,loadingContacts:!1}),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(3),console.log("BOOM!"),console.log(e.t0);case 19:e.next=22;break;case 21:this.setState({contact:t.value},this.save);case 22:case"end":return e.stop()}}),e,this,[[3,15]])})));return function(t,n){return e.apply(this,arguments)}}()},{key:"handleToken",value:function(e){this.setState({apiKey:e,isOpen:!1}),this.getAdmin(e)}},{key:"submit",value:function(){var e=Object(s.a)(i.a.mark((function e(t){var n,a,o,r,c,l=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.id,console.log({adminId:n}),a=this.state,o=a.apiKey,r=a.isNew,c=a.loaded,this.microsoftTeams.initialize(),this.microsoftTeams.getContext(function(){var e=Object(s.a)(i.a.mark((function e(t){var a,s,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.tid,e.prev=1,e.next=4,fetch("https://moneybirdproxymaatwerk.azurewebsites.net/api/MoneyBirdProxy",{mode:"cors",method:"POST",body:JSON.stringify({method:"GET",path:"".concat(n,"/contacts.json"),key:o,tid:a,isNew:r})});case 4:return s=e.sent,e.next=7,s.json();case 7:u=e.sent,console.log({json:u}),l.setState({contacts:u,isOpen:!1}),0==c&&(l.microsoftTeams.appInitialization.notifyAppLoaded(),l.microsoftTeams.appInitialization.notifySuccess(),l.setState({loaded:!0})),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),console.log("BOOM!"),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}().bind(this));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateContact",value:function(e,t){var n=this,a=t.value;this.setState({contact:a},(function(){return n.save()}))}},{key:"save",value:function(){var e=this,t=this.state,n=t.apiKey,a=t.adminId,o=t.contact,i=t.locale,s=t.tabType,r=i.split("-")[0];console.log({contact:o}),this.microsoftTeams.initialize(),this.microsoftTeams.settings.setValidityState(!0),this.microsoftTeams.settings.registerOnSaveHandler((function(t){e.microsoftTeams.settings.setSettings({websiteUrl:"invoices"==s?"https://jp5525.github.io/teams-moneybird-interface/invoices":"https://jp5525.github.io/teams-moneybird-interface/quotes",contentUrl:"invoices"==s?"https://jp5525.github.io/teams-moneybird-interface/invoices":"https://jp5525.github.io/teams-moneybird-interface/quotes",entityId:JSON.stringify({apiKey:n,adminId:a,contact:o}),suggestedDisplayName:"Moneybird ".concat("invoices"==s?$[r].tabs[0]:$[r].tabs[1])}),t.notifySuccess()}))}},{key:"deleteKeyFromDb",value:function(){var e=Object(s.a)(i.a.mark((function e(){var t,n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,n=t.deleteKey,a=t.keys,H(n)){e.next=5;break}return e.next=4,fetch("https://moneybirdproxymaatwerk.azurewebsites.net/api/key/".concat(n),{mode:"cors",method:"DELETE"});case 4:this.setState({deleteKey:null,apiKey:"",keys:a.filter((function(e){return e.key!=n}))});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"createKeyEntry",value:function(e){var t=this;return{content:X("div",null,X("span",{style:{cursor:"pointer"},class:"lnr lnr-trash",onClick:function(){return t.setState({deleteKey:e})}})," - ",X("span",{style:{cursor:"pointer"},onClick:function(){return t.handleToken(e)}},e)),key:e}}},{key:"render",value:function(){var e=this,t=this.state,n=t.contacts,o=t.contact,i=t.admins,s=(t.admin,t.apiKey),r=t.keys,c=t.isOpen,l=t.locale,u=t.loadingContacts,d=t.showApiKeys,p=t.deleteKey;console.log({locale:l}),console.log("YIKES-5",s);var h=l?$[l.split("-")[0]]:null,j=h?[{key:"invoices",value:"invoices",name:"invoices",label:h.tabs[0],onClick:function(){return e.setState({tabType:"invoices"})}},{key:"quotes",name:"quotes",value:"quotes",label:h.tabs[1],onClick:function(){return e.setState({tabType:"quotes"})}}]:null;return console.log({keys:r}),X("div",null,X(U.a,null,X("script",{src:"https://statics.teams.cdn.office.net/sdk/v1.6.0/js/MicrosoftTeams.min.js"}),X("link",{rel:"stylesheet",href:"https://cdn.linearicons.com/free/1.0.0/icon-font.min.css"})),h?X(f.a,{theme:y.a},X("div",{style:Z.mainPadding},X("div",{style:Z.mainTable},X(b.a,{content:h.heading}),X(g.a,{gap:"gap.small",vAlign:"center",hAlign:"start"},X(v.a,{justifyContent:"center"},X("form",{onSubmit:this.submit,style:{width:"100%"}},h.apiSection.title," ",X("br",null),h.apiSection.description,0==i?X(m.a.Fragment,null," ",X("br",null),X(k.a,{content:h.apiSection.fail,style:{background:"#cc4a31",color:"white",marginTop:"10px",marginBottom:"10px"}})):null,i?X(m.a.Fragment,null," ",X("br",null),X(k.a,{content:h.apiSection.succsess,style:{background:"#7fba00",color:"white",marginTop:"10px",marginBottom:"10px"}})):null,d?X(w.a,{items:r||[],placeholder:h.apiSection.placeholder,onOpenChange:function(){return e.setState({isOpen:!c})},name:"apiKey",id:"apiKey",clearable:Boolean(s&&s.length>0),fluid:!0,search:!0,open:c,searchQuery:s,itemToString:function(e){return e?e.key:null},onSearchQueryChange:function(t,n){return e.setState({apiKey:n.searchQuery})},noResultsMessage:{content:"Add... ".concat(s),onClick:function(t){e.setState({isNew:!0,keys:[e.createKeyEntry(s)].concat(Object(a.a)(r)),isOpen:!1},(function(){return e.getAdmin(s,!0)}))},style:{cursor:"pointer"},active:!0}}):X("div",null,X(O.a,{text:!0,content:h.apiSection.show,onClick:function(){return e.setState({showApiKeys:!0})},style:{padding:"0px"}})),X(S.a,{cancelButton:h.deleteDialog.cancel,onCancel:function(){return e.setState({deleteKey:null})},confirmButton:h.deleteDialog.confirm,onConfirm:this.deleteKeyFromDb,content:h.deleteDialog.message(p),header:h.deleteDialog.header,open:!H(p),backdrop:!0}),X("br",null),h.contactSection.title," ",X("br",null),h.contactSection.description,X(w.a,{ref:function(t){return e.drop=t},items:n?this.getOptions():[],value:o?o.content:null,placeholder:h.contactSection.placeholder,search:!0,loading:u,loadingMessage:"Loading...",onSearchQueryChange:this.getContacts,onChange:this.updateContact,name:"contact",disabled:!n,itemToString:function(e){return e?e.content:""},fluid:!0}),X("br",null),h.typeSection.title," ",X("br",null),h.typeSection.description,X(W,{defaultCheckedValue:"invoices",items:j||[],onCheckedValueChange:function(t,n){e.setState({tabType:n.value},(function(){return e.save()}))},style:{margingTop:"5px"}}))))))):null)}}]),n}(m.a.Component);t.default=ee}},[["CvGF",0,2,1,3,7]]]);