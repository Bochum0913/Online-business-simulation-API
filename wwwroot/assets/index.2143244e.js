import{r as e,o as t,c as a,a as s,w as r,t as l,b as o,d as i,e as n,f as d,u as c,g as u,h as m,v as p,i as g,j as y,k as v,l as h,P as f,s as w,m as b,n as C,p as S,q as T,x as E,y as k,z as x,A as I,B as $,C as V}from"./vendor.42713109.js";const D={setup(){const t=e([{label:"Home",to:"/"},{label:"Brands",to:"/brands"},{label:"Register",to:"/register"},{label:"Login",to:"/login"},{label:"Logout",to:"/logout"},{label:"Previous Orders",to:"/orderlist"},{label:"Branches",to:"/map"}]),a=e();return{menuitems:t,menu:a,toggle:e=>{a.value.toggle(e)}}}},O=s("span",{style:{"font-weight":"bold","font-size":"larger"}},"Info3067 Casestudy",-1),q={class:"footer"};D.render=function(e,i,n,d,c,u){const m=o("Menu"),p=o("Button"),g=o("Toolbar"),y=o("router-view");return t(),a("div",null,[s(g,null,{left:r((()=>[O])),right:r((()=>[s(m,{id:"overlay_menu",ref:"menu",model:d.menuitems,popup:!0},null,8,["model"]),s(p,{icon:"pi pi-bars",onClick:d.toggle},null,8,["onClick"])])),_:1}),s(y),s("div",q," best viewed on mobile device — Bohong Liu ©"+l((new Date).getFullYear()),1)])};const P={},B=s("div",{class:"heading"},"Home",-1);P.render=function(e,s){return t(),a("div",null,[B])};const N=async e=>{let t,a=_();try{let s=await fetch(`/api/${e}`,{method:"GET",headers:a});t=await s.json()}catch(s){console.log(s),t={error:`Error has occured: ${s.message}`}}return t},U=async(e,t)=>{let a,s=_();try{let r=await fetch(`/api/${e}`,{method:"POST",headers:s,body:JSON.stringify(t)});a=await r.json()}catch(r){a=r}return a},_=()=>{const e=new Headers,t=JSON.parse(sessionStorage.getItem("user"));return t?(e.append("Content-Type","application/json"),e.append("Authorization","Bearer "+t.token)):e.append("Content-Type","application/json"),e},L={setup(){const e=c();i((()=>{a()}));let t=n({status:"",categories:[],menuitems:[],selectedCategory:{},selectedItem:{},dialogStatus:"",itemSelected:!1,qty:0,tray:[]});const a=async()=>{try{t.status="loading brands...";const e=await U("Brand");void 0===e.error?(t.categories=e,t.status=`loaded ${t.categories.length} brands`):t.status=e.error}catch(e){console.log(e),t.status=`Error has occured: ${e.message}`}};return{state:t,loadMenuitems:async()=>{try{t.status=`finding products for brand ${t.selectedCategory}...`;let e=await U(`Product/${t.selectedCategory}`);t.menuitems=e,t.status=`loaded ${t.menuitems.length} products`}catch(e){console.log(e),t.status=`Error has occured: ${e.message}`}sessionStorage.getItem("tray")&&(t.tray=JSON.parse(sessionStorage.getItem("tray")))},onRowSelect:e=>{try{t.selectedItem=e.data,t.dialogStatus="",t.itemSelected=!0}catch(a){console.log(a),t.status=`Error has occured: ${a.message}`}},addToTray:()=>{const e=t.tray.findIndex((e=>e.id===t.selectedItem.id));0!==t.qty?(-1===e?t.tray.push({id:t.selectedItem.id,qty:t.qty,item:t.selectedItem}):t.tray[e]={id:t.selectedItem.id,qty:t.qty,item:t.selectedItem},t.dialogStatus=`${t.qty} item(s) added`):(-1!==e&&t.tray.splice(e,1),t.dialogStatus="item(s) removed"),sessionStorage.setItem("tray",JSON.stringify(t.tray)),t.qty=0},formatCurrency:e=>e.toLocaleString("en-US",{style:"currency",currency:"USD"}),viewCart:()=>{e.push("tray")}}}},R=s("div",{class:"heading"},"Our Brands",-1),M={class:"status"},H={key:1,style:{"margin-top":"2vh"}},j={style:{"text-align":"left"}},A={style:{"margin-bottom":"2vh","font-size":"larger","font-weight":"bold"}},J={style:{"margin-top":"2vh","text-align":"center"}},F=s("span",{style:{"margin-left":"-10vw","margin-right":"2vw"}},"Enter Qty:",-1),z={style:{"text-align":"center","margin-top":"2vh"}},G=u("   "),Q={key:0,style:{"text-align":"center"},class:"dialog-status"};L.render=function(e,i,n,c,u,m){const p=o("Dropdown"),g=o("Column"),y=o("DataTable"),v=o("InputNumber"),h=o("Button"),f=o("Dialog");return t(),a("div",null,[R,s("div",M,l(c.state.status),1),c.state.categories.length>0?(t(),a(p,{key:0,modelValue:c.state.selectedCategory,"onUpdate:modelValue":i[1]||(i[1]=e=>c.state.selectedCategory=e),style:{"text-align":"left"},options:c.state.categories,optionLabel:"name",optionValue:"id",placeholder:"Select Brand",onChange:c.loadMenuitems},null,8,["modelValue","options","onChange"])):d("",!0),c.state.menuitems.length>0?(t(),a("div",H,[s(y,{value:c.state.menuitems,scrollable:!0,scrollHeight:"60vh",selectionMode:"single",class:"p-datatable-striped",onRowSelect:c.onRowSelect},{default:r((()=>[s(g,{style:{"margin-right":"-35vw"}},{body:r((e=>[s("img",{src:`/img/${e.data.graphicName}`,alt:e.data.productName,class:"product-image"},null,8,["src","alt"])])),_:1}),s(g,{field:"productName",header:"Product Name"})])),_:1},8,["value","onRowSelect"]),s(f,{visible:c.state.itemSelected,"onUpdate:visible":i[3]||(i[3]=e=>c.state.itemSelected=e),class:"dialog-border"},{default:r((()=>[s("img",{src:`/img/${c.state.selectedItem.graphicName}`,class:"product-image-dialog"},null,8,["src"]),s("div",j,[s("div",A,l(c.state.selectedItem.productName)+" - "+l(c.formatCurrency(c.state.selectedItem.msrp)),1)]),s("div",null,l(c.state.selectedItem.description),1),s("div",J,[F,s("span",null,[s(v,{id:"qty",min:0,modelValue:c.state.qty,"onUpdate:modelValue":i[2]||(i[2]=e=>c.state.qty=e),step:1,incrementButtonClass:"plus",showButtons:"",buttonLayout:"horizontal",decrementButtonIcon:"pi pi-minus",incrementButtonIcon:"pi pi-plus"},null,8,["modelValue"]),s("div",z,[s(h,{label:"Add To Cart",onClick:c.addToTray,class:"p-button-outlined margin-button1"},null,8,["onClick"]),G,c.state.tray.length>0?(t(),a(h,{key:0,label:"View Cart",class:"p-button-outlined margin-button1",onClick:c.viewCart},null,8,["onClick"])):d("",!0)])])]),""!==c.state.dialogStatus?(t(),a("div",Q,l(c.state.dialogStatus),1)):d("",!0)])),_:1},8,["visible"])])):d("",!0)])};const Z={setup(){let e=n({status:"",subTot:0,taxTot:0,tot:0,tray:[]});i((()=>{sessionStorage.getItem("tray")?(e.tray=JSON.parse(sessionStorage.getItem("tray")),e.tray.map((t=>{e.subTot+=t.item.msrp*t.qty,e.taxTot=.13*e.subTot,e.tot=e.subTot+e.taxTot}))):e.tray=[]}));const t=()=>{sessionStorage.removeItem("tray"),e.tray=[],e.status="cart cleared"};return{state:e,formatCurrency:e=>e.toLocaleString("en-US",{style:"currency",currency:"USD"}),clearCart:t,saveCart:async()=>{let a=JSON.parse(sessionStorage.getItem("user")),s=JSON.parse(sessionStorage.getItem("tray"));try{e.status="sending order info to server";let r={email:a.email,selections:s},l=await U("order",r);l.indexOf("not")>0||t(),e.status=l}catch(r){console.log(r),e.status=`Error add order: ${r}`}}}}},K={class:"container"},Y=s("img",{class:"item-image",style:{"margin-top":"2vh"},src:"/assets/Cart.f3f3591b.png"},null,-1),W=s("div",{class:"heading"},"Cart Contents",-1),X={class:"status"},ee={key:0,id:"tray"},te={key:1},ae={style:{border:"solid","margin-top":"1vh"}},se=s("td",{style:{width:"20%","font-weight":"bold"}},"Sub:",-1),re={style:{width:"10%","text-align":"right","padding-right":"3vw"}},le=s("td",{style:{width:"20%","font-weight":"bold"}},"Tax: ",-1),oe={style:{width:"10%","text-align":"right","padding-right":"3vw"}},ie=s("td",{style:{width:"20%","font-weight":"bold"}},"Total: ",-1),ne={style:{width:"10%","text-align":"right","padding-right":"3vw"}},de=s("td",{colspan:"4"}," ",-1);Z.render=function(e,i,n,c,m,p){const g=o("Column"),y=o("DataTable"),v=o("Button");return t(),a("div",K,[Y,W,s("div",X,l(c.state.status),1),c.state.tray.length>0?(t(),a("div",ee,[s(y,{value:c.state.tray,scrollable:!0,scrollHeight:"38vh",dataKey:"id",class:"p-datatable-striped",id:"tray-contents"},{default:r((()=>[s(g,{id:"id",header:"Name",field:"item.id"}),s(g,{header:"Qty",field:"qty"}),s(g,{id:"price",header:"Price"},{body:r((e=>[u(l(c.formatCurrency(e.data.item.msrp)),1)])),_:1}),s(g,{id:"extendedPrice",header:"Extended"},{body:r((e=>[u(l(c.formatCurrency(e.data.item.msrp*e.data.qty)),1)])),_:1})])),_:1},8,["value"])])):d("",!0),c.state.tray.length>0?(t(),a("div",te,[s("table",ae,[s("tr",null,[se,s("td",re,l(c.formatCurrency(c.state.subTot)),1)]),s("tr",null,[le,s("td",oe,l(c.formatCurrency(c.state.taxTot)),1)]),s("tr",null,[ie,s("td",ne,l(c.formatCurrency(c.state.tot)),1),de])]),s(v,{style:{"margin-top":"2vh"},label:"Save Cart",onClick:c.saveCart,class:"p-button-outlined margin-button1"},null,8,["onClick"]),s(v,{style:{"margin-top":"2vh"},label:"Clear Cart",onClick:c.clearCart,class:"p-button-outlined margin-button1"},null,8,["onClick"])])):d("",!0)])};const ce={setup(){let e=n({status:"",validationErrors:{},firstname:"",lastname:"",email:"",password:"",visibility:"password"});return{state:e,validateForm:async()=>{if(e.firstname.trim()?delete e.validationErrors.firstname:e.validationErrors.firstname=!0,e.lastname.trim()?delete e.validationErrors.lastname:e.validationErrors.lastname=!0,e.email.trim()?delete e.validationErrors.email:e.validationErrors.email=!0,e.password.trim()?delete e.validationErrors.password:e.validationErrors.password=!0,0===Object.keys(e.validationErrors).length){e.status="registering with server";let a={firstname:e.firstname,lastname:e.lastname,email:e.email,password:e.password};try{let t=await U("register",a);e.status=t.token}catch(t){e.status=t.message}}},showPassword:()=>{e.visibility="text"},hidePassword:()=>{e.visibility="password"}}}},ue={class:"container"},me=s("div",{class:"heading"},"Register",-1),pe={class:"status"},ge={class:"p-fluid"},ye={class:"p-field"},ve=s("label",{for:"firstname",class:"p-field-label"},"First Name",-1),he={class:"p-error"},fe={class:"p-field"},we=s("label",{for:"lastname",class:"p-field-label"},"Lastname",-1),be={class:"p-error"},Ce={class:"p-field"},Se=s("label",{for:"lastname",class:"p-field-label"},"Email",-1),Te={class:"p-error"},Ee={class:"p-field"},ke=s("label",{for:"password",class:"p-field-label"},"Password",-1),xe={class:"p-input-icon-right"},Ie={class:"p-error"};ce.render=function(e,r,i,n,c,u){const g=o("InputText"),y=o("Button");return t(),a("div",ue,[me,s("div",pe,l(n.state.status),1),s("div",ge,[s("div",ye,[ve,s(g,{placeholder:"enter first name",id:"firstname",modelValue:n.state.firstname,"onUpdate:modelValue":r[1]||(r[1]=e=>n.state.firstname=e),class:{"p-invalid":n.state.validationErrors.firstname}},null,8,["modelValue","class"]),m(s("small",he,"Firstname is required.",512),[[p,n.state.validationErrors.firstname]])]),s("div",fe,[we,s(g,{placeholder:"enter last name",id:"lastname",modelValue:n.state.lastname,"onUpdate:modelValue":r[2]||(r[2]=e=>n.state.lastname=e),class:{"p-invalid":n.state.validationErrors.lastname}},null,8,["modelValue","class"]),m(s("small",be,"Lastname is required.",512),[[p,n.state.validationErrors.lastname]])]),s("div",Ce,[Se,s(g,{placeholder:"enter email address",id:"email",modelValue:n.state.email,"onUpdate:modelValue":r[3]||(r[3]=e=>n.state.email=e),class:{"p-invalid":n.state.validationErrors.email}},null,8,["modelValue","class"]),m(s("small",Te,"valid format is required.",512),[[p,n.state.validationErrors.email]])]),s("div",Ee,[ke,s("span",xe,[s(g,{placeholder:"enter password",id:"password",type:n.state.visibility,modelValue:n.state.password,"onUpdate:modelValue":r[4]||(r[4]=e=>n.state.password=e),class:{"p-invalid":n.state.validationErrors.password}},null,8,["type","modelValue","class"]),"password"===n.state.visibility?(t(),a("i",{key:0,class:"pi pi-eye",onClick:r[5]||(r[5]=(...e)=>n.showPassword&&n.showPassword(...e))})):d("",!0),"text"===n.state.visibility?(t(),a("i",{key:1,class:"pi pi-eye-slash",onClick:r[6]||(r[6]=(...e)=>n.hidePassword&&n.hidePassword(...e))})):d("",!0)]),m(s("small",Ie,"Password is required.",512),[[p,n.state.validationErrors.email]])]),s(y,{label:"Register",onClick:n.validateForm,class:"p-button-outlined",style:{margin:"5vh",width:"25vw"}},null,8,["onClick"])])])};const $e={setup(){const e=c(),t=g();let a=n({email:"",password:"",status:"",visibility:"password",validationErrors:[]});return{login:async()=>{await sessionStorage.removeItem("user");try{if(a.email.trim()?delete a.validationErrors.email:a.validationErrors.email=!0,a.password.trim()?delete a.validationErrors.password:a.validationErrors.password=!0,0===Object.keys(a.validationErrors).length){a.status="logging into server";let s={firstname:"",lastname:"",email:a.email,password:a.password},r=await U("login",s);r.token.indexOf("failed")>0?a.status=r.token:(await sessionStorage.setItem("user",JSON.stringify(r)),t.params.nextUrl?e.push({name:t.params.nextUrl}):e.push({name:"Home"}))}}catch(s){console.log(`error ${s}`),a.status=`Error has occured: ${s}`}},state:a,showPassword:()=>{a.visibility="text"},hidePassword:()=>{a.visibility="password"}}}},Ve=s("div",{class:"heading"},"Login",-1),De={class:"status"},Oe={class:"p-fluid"},qe={class:"p-field"},Pe=s("label",{class:"p-field-label",for:"email"},"Email",-1),Be={class:"p-error"},Ne={class:"p-field"},Ue=s("label",{for:"password",class:"p-field-label"},"Password",-1),_e={class:"p-input-icon-right"},Le={class:"p-error"};$e.render=function(e,r,i,n,c,u){const g=o("InputText"),y=o("Button");return t(),a("div",null,[Ve,s("div",De,l(n.state.status),1),s("div",Oe,[s("div",qe,[Pe,s(g,{type:"text",placeholder:"enter email address",id:"email",modelValue:n.state.email,"onUpdate:modelValue":r[1]||(r[1]=e=>n.state.email=e),class:{"p-invalid":n.state.validationErrors.email}},null,8,["modelValue","class"]),m(s("small",Be,"valid format is required.",512),[[p,n.state.validationErrors.email]])]),s("div",Ne,[Ue,s("span",_e,[s(g,{placeholder:"enter password",id:"password",type:n.state.visibility,modelValue:n.state.password,"onUpdate:modelValue":r[2]||(r[2]=e=>n.state.password=e),class:{"p-invalid":n.state.validationErrors.password}},null,8,["type","modelValue","class"]),"password"===n.state.visibility?(t(),a("i",{key:0,class:"pi pi-eye",onClick:r[3]||(r[3]=(...e)=>n.showPassword&&n.showPassword(...e))})):d("",!0),"text"===n.state.visibility?(t(),a("i",{key:1,class:"pi pi-eye-slash",onClick:r[4]||(r[4]=(...e)=>n.hidePassword&&n.hidePassword(...e))})):d("",!0)]),m(s("small",Le,"Password is required.",512),[[p,n.state.validationErrors.password]])]),s(y,{label:"Login",onClick:n.login,class:"p-button-outlined",style:{margin:"5vh",width:"25vw"}},null,8,["onClick"])])])};const Re={setup(){let t=e("goodbye");i((()=>{a()}));const a=()=>{sessionStorage.clear()};return{status:t}}},Me={class:"container"},He=s("div",{class:"heading"},"Logout",-1),je={class:"status"};Re.render=function(e,r,o,i,n,d){return t(),a("div",Me,[He,s("div",je,l(i.status),1)])};const Ae={setup(){let e=n({status:"",dialogStatus:"",orders:[],selectedAOrder:!1,orderSelected:{},orderDetails:[],subTot:0,taxTot:0});i((()=>{t()}));const t=async()=>{try{let t=JSON.parse(sessionStorage.getItem("user"));const a=await N(`order/${t.email}`);void 0===a.error?(e.orders=a,e.status=`loaded ${e.orders.length} orders`,e.selectedAOrder=!1):e.status=a.error}catch(t){console.log(t),e.status=`Error has occured: ${t.message}`}};return{state:e,formatDate:e=>{let t;t=void 0===e?new Date:new Date(Date.parse(e));let a=t.getDate(),s=t.getMonth()+1,r=t.getFullYear();return t.getHours(),t.getMinutes(),r+"-"+s+"-"+a},onRowSelect:async t=>{try{let a=JSON.parse(sessionStorage.getItem("user"));e.orderSelected=t.data;const s=await N(`order/${e.orderSelected.id}/${a.email}`);e.orderDetails=s,e.dialogStatus=`details for order ${e.orderSelected.id}`,e.selectedAOrder=!0}catch(a){console.log(a),e.status=`Error has occured: ${a.message}`}},formatCurrency:e=>e.toLocaleString("en-US",{style:"currency",currency:"USD"})}}},Je={class:"container"},Fe=s("div",{class:"heading"},"Your Orders",-1),ze={class:"status"},Ge={id:"tray-list"},Qe={style:{"font-weight":"bold","margin-left":"-8vw"},class:"tray-head"};Ae.render=function(e,i,n,c,m,p){const g=o("Column"),y=o("DataTable"),v=o("Row"),h=o("ColumnGroup"),f=o("Dialog");return t(),a("div",Je,[Fe,s("div",ze,l(c.state.status),1),s("div",Ge,[c.state.orders.length>0?(t(),a(y,{key:0,value:c.state.orders,scrollable:!0,scrollHeight:"60vh",dataKey:"id",class:"p-datatable-striped",selection:c.state.orderSelected,"onUpdate:selection":i[1]||(i[1]=e=>c.state.orderSelected=e),selectionMode:"single",onRowSelect:c.onRowSelect},{default:r((()=>[s(g,{header:"Order #",field:"id"}),s(g,{header:"Date"},{body:r((e=>[u(l(c.formatDate(e.data.dateCreated)),1)])),_:1})])),_:1},8,["value","selection","onRowSelect"])):d("",!0),s(f,{visible:c.state.selectedAOrder,"onUpdate:visible":i[2]||(i[2]=e=>c.state.selectedAOrder=e),class:"dialog-border"},{default:r((()=>[s("div",Qe," Order: #"+l(c.state.orderDetails[0].orderId)+"   "+l(c.state.orderDetails[0].dateCreated),1),s(y,{value:c.state.orderDetails,scrollable:!0,scrollHeight:"38vh",dataKey:"id",class:"p-datatable-striped"},{default:r((()=>[s(g,{id:"id",header:"Name",field:"productId"}),s(g,{header:"S",field:"qtySold"}),s(g,{header:"O",field:"qtyOrdered"}),s(g,{header:"B",field:"qtyB"}),s(g,{header:"Extended",field:"extend"},{body:r((e=>[u(l(c.formatCurrency(e.data.extend)),1)])),_:1}),s(h,{type:"footer",class:"footerTotals"},{default:r((()=>[s(v,null,{default:r((()=>[s(g,{footer:"Sub: "+c.formatCurrency(c.state.orderDetails[0].subTotal),class:"footerTotals"},null,8,["footer"])])),_:1}),s(v,null,{default:r((()=>[s(g,{footer:"Tax: "+c.formatCurrency(.13*c.state.orderDetails[0].subTotal),class:"footerTotals"},null,8,["footer"])])),_:1}),s(v,null,{default:r((()=>[s(g,{footer:"Total: "+c.formatCurrency(1.13*c.state.orderDetails[0].subTotal),class:"footerTotals"},null,8,["footer"])])),_:1})])),_:1})])),_:1},8,["value"])])),_:1},8,["visible"])])])};const Ze={name:"Map",setup(){const t=e(null);let a=n({status:"",address:"",showmap:!1});return{mapRef:t,state:a,genMap:async()=>{try{a.showmap=!0;const e=window.tt;let s=`https://api.tomtom.com/search/2/geocode/${a.address}.json?key=CsiqlvbGg18v5dZsors7ZAhQy4wurzTv`,r=await fetch(s),l=await r.json(),o=l.results[0].position.lat,i=l.results[0].position.lon,n=`branch/${o}/${i}`,d=await N(n),c=e.map({key:"CsiqlvbGg18v5dZsors7ZAhQy4wurzTv",container:t.value,source:"vector/1/basic-main",center:[i,o],zoom:8});c.addControl(new e.FullscreenControl),c.addControl(new e.NavigationControl),d.map((t=>{let a=(new e.Marker).setLngLat([t.longitude,t.latitude]).addTo(c),s=new e.Popup({offset:25});s.setHTML(`<div id="popup">Branch#: ${t.id}</div><div>${t.street}, ${t.city}<br/>${t.distance.toFixed(2)} km</div>`),a.setPopup(s)}))}catch(e){a.status=e.message}}}}},Ke=s("div",{class:"heading"},"3 Closest Branches",-1),Ye=s("br",null,null,-1),We={style:{margin:"3vh"}},Xe={id:"map",ref:"mapRef"};Ze.render=function(e,r,l,i,n,d){const c=o("InputText"),u=o("Button");return t(),a("div",null,[Ke,s("div",null,[s(c,{placeholder:"enter current address",id:"address",modelValue:i.state.address,"onUpdate:modelValue":r[1]||(r[1]=e=>i.state.address=e)},null,8,["modelValue"]),Ye]),s("div",We,[s(u,{label:"Find 3 Closest",onClick:i.genMap,class:"p-button-outlined",style:{width:"30vw"}},null,8,["onClick"])]),m(s("div",Xe,null,512),[[p,!0===i.state.showmap]])])};const et=[{path:"/",name:"Home",component:P},{path:"/brands",name:"Brands",component:L},{path:"/tray",name:"tray",component:Z},{path:"/register",name:"Register",component:ce},{path:"/login",name:"login",component:$e},{path:"/logout",name:"logout",component:Re},{path:"/orderlist",name:"orderlist",component:Ae},{path:"/map",name:"map",component:Ze}],tt=y({history:v(),routes:et});tt.beforeEach(((e,t,a)=>{!["/login","/register","/logout","/map"].includes(e.path)&&!sessionStorage.getItem("user")?a({name:"login",params:{nextUrl:e.name}}):a()}));const at=h(D);at.use(f),at.component("Button",w),at.component("Dropdown",b),at.component("DataTable",C),at.component("Column",S),at.component("Dialog",T),at.component("InputNumber",E),at.component("Toolbar",k),at.component("Menu",x),at.component("InputText",I),at.component("ColumnGroup",$),at.component("Row",V),at.use(tt),at.mount("#app");