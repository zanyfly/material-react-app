(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{77:function(e,t,a){e.exports=a(88)},82:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(10),r=(a(82),a(7)),o=a(16),c=a(17),s=a(18),m=a(13),d=a(26),u=a(25),p=a(133),h=a(45),D=a(134),E=a(130),f=a(149),b=a(131),g=a(132),y=a(67),v=a.n(y),O=a(4),j=a(150),C=a(126),S=a(152),k=a(146),w=a(128),F=a(129),U=Object(O.a)((function(e){return{formClass:{width:300},myEmptyRow:{marginTop:e.spacing(2)}}}))(function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this)).handleChange=function(e){return function(t){n.setState({oneData:Object(c.a)(Object(c.a)({},n.state.oneData),{},Object(r.a)({},e,t.target.value))})}},n.handleSubmit=function(){console.log(n.state.oneData),n.props.onDialogSubmit(Object(c.a)(Object(c.a)({},n.state.oneData),{},{id:n.state.oneData.title.toLocaleLowerCase().replace(/ /g,"-")}))},n.handleUpdate=function(){n.props.onFormUpdate(n.state.oneData)},n.state=n.initState(e),n}return Object(m.a)(a,[{key:"initState",value:function(e){return e.isEdit?{oneData:e.oneData}:{oneData:{title:"",detail:"",mainData:""}}}},{key:"render",value:function(){return i.a.createElement(n.Fragment,null,i.a.createElement("form",{className:this.props.classes.formClass},i.a.createElement(j.a,{className:this.props.classes.FormControl+" "+this.props.classes.myEmptyRow,autoFocus:!0,margin:"dense",label:"TITLE",variant:"outlined",value:this.state.oneData.title,onChange:this.handleChange("title"),fullWidth:!0}),i.a.createElement(j.a,{className:this.props.classes.FormControl+" "+this.props.classes.myEmptyRow,margin:"dense",label:"detail",variant:"outlined",value:this.state.oneData.detail,onChange:this.handleChange("detail"),fullWidth:!0}),i.a.createElement(C.a,{variant:"outlined",className:this.props.classes.FormControl+" "+this.props.classes.myEmptyRow},i.a.createElement(S.a,{id:"demo-simple-select-outlined-label"},"program"),i.a.createElement(k.a,{value:this.state.oneData.mainData,onChange:this.handleChange("mainData"),label:"program"},this.props.mainData.map((function(e,t){return i.a.createElement(w.a,{key:t,value:e},e)}))))),i.a.createElement("br",null),this.props.isEdit?i.a.createElement(F.a,{variant:"contained",onClick:this.handleUpdate,color:"primary"},"update"):i.a.createElement(F.a,{variant:"contained",onClick:this.handleSubmit,color:"primary"},"Submit"))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.oneData&&e.oneData.id!==t.oneData.id?e:null}}]),a}(n.Component)),T=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={open:!1},e.handleClickOpen=function(){e.setState({open:!0})},e.handleClose=function(){e.setState({open:!1})},e.onDialogSubmit=function(t){e.props.onDialogSubmit(t),e.handleClose()},e}return Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement(n.Fragment,null,i.a.createElement(E.a,{size:"small","aria-label":"add",color:"secondary",onClick:this.handleClickOpen},i.a.createElement(v.a,null)),i.a.createElement(f.a,{open:this.state.open,onClose:this.handleClose,"aria-labelledby":"form-dialog-title"},i.a.createElement(b.a,{id:"form-dialog-title"},"custom program"),i.a.createElement(g.a,null,i.a.createElement(U,{mainData:this.props.mainData,onDialogSubmit:this.onDialogSubmit}))))}}]),a}(n.Component),x=function(e){return i.a.createElement(p.a,{position:"static"},i.a.createElement(D.a,{style:{display:"flex",justifyContent:"space-between"}},i.a.createElement(h.a,{variant:"h4"},"hello"),i.a.createElement(T,{mainData:e.mainData,onDialogSubmit:e.onDialogSubmit})))},L=a(147),N=a(135),W=["program-1","program-2","program-3"],R=[{title:"title 1.1",id:"1-1",detail:"detail 1.1",mainData:"program-1"},{title:"title 1.2",id:"1-2",detail:"detail 1.2",mainData:"program-1"},{title:"title 2.1",id:"2-1",detail:"detail 2.1",mainData:"program-2"},{title:"title 2.2",id:"2-2",detail:"detail 2.2",mainData:"program-2"},{title:"title 2.3",id:"2-3",detail:"detail 2.3",mainData:"program-2"},{title:"title 3.1",id:"3-1",detail:"detail 3.1",mainData:"program-3"}];function B(e){var t=""===e.selectedData?0:W.findIndex((function(t){return t===e.selectedData}))+1;return i.a.createElement(L.a,{style:{position:"fixed",bottom:0,width:"100%"},value:t,indicatorColor:"primary",textColor:"primary",variant:"fullWidth",onChange:function(t,a){e.onSelect(0===a?"":W[a-1])}},i.a.createElement(N.a,{label:"\u5168\u90e8"}),e.mainData.map((function(e,t){return i.a.createElement(N.a,{key:t,label:e})})))}var I=a(141),J=a(89),A=a(127),z=a(90),P=a(136),$=a(137),q=a(138),G=a(139),H=a(140),K=function(e){var t=e.styles,a=e.newData,l=e.onDetail,r=e.selectedData,o=e.onDelete,c=e.onEdit;return i.a.createElement(J.a,{style:t.paper},a.map((function(e,t){return""===r||e[0]===r?i.a.createElement(n.Fragment,{key:"main"+t},i.a.createElement(h.a,{variant:"h5"},e[0]),i.a.createElement(A.a,{key:"L"+t},e[1].map((function(e,t){return i.a.createElement(z.a,{button:!0,onClick:function(){return l(e.id)},key:"L"+t},i.a.createElement(P.a,null,e.title+" "+e.detail),i.a.createElement($.a,null,i.a.createElement(q.a,{edge:"end","aria-label":"Edit",onClick:function(){return c(e.id)}},i.a.createElement(G.a,null)),i.a.createElement(q.a,{edge:"end","aria-label":"delete",onClick:function(){return o(e.id)}},i.a.createElement(H.a,null))))})))):null})))},M=function(e){var t=e.styles,a=e.oneData,l=e.isEdit,r=e.mainData,o=e.onFormUpdate;return i.a.createElement(J.a,{style:t.paper},"{}"!==JSON.stringify(a)?l?i.a.createElement(U,{mainData:r,oneData:a,onFormUpdate:o,isEdit:l}):i.a.createElement(n.Fragment,null,i.a.createElement(h.a,{variant:"h6"},a.title),i.a.createElement(h.a,{variant:"body1",style:{marginTop:20}},a.id),i.a.createElement(h.a,{variant:"body1",style:{marginTop:20}},a.detail)):i.a.createElement(n.Fragment,null,i.a.createElement(h.a,{variant:"h6"},"\u6b22\u8fce\u4f7f\u7528")))},Q={paper:{marginTop:10,marginBottom:10,padding:20,height:"100%"}},V=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement(I.a,{container:!0,spacing:5},i.a.createElement(I.a,{item:!0,sm:!0},i.a.createElement(K,{newData:this.props.newData,selectedData:this.props.selectedData,styles:Q,onDelete:this.props.onDelete,onDetail:this.props.onDetail,onEdit:this.props.onEdit})),i.a.createElement(I.a,{item:!0,sm:!0},i.a.createElement(M,{styles:Q,oneData:this.props.oneData,isEdit:this.props.isEdit,mainData:this.props.mainData,onFormUpdate:this.props.onFormUpdate})))}}]),a}(n.Component),X=a(142),Y=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={oneData:{},detailData:R,selectFooterData:"",isEdit:!1},e.handleDetail=function(t){e.setState((function(e){return Object(c.a)(Object(c.a)({},e.detailData),{},{oneData:e.detailData.find((function(e){return e.id===t})),isEdit:!1})}))},e.handleDialogSubmit=function(t){e.setState((function(e){return{detailData:[].concat(Object(o.a)(e.detailData),[t])}}))},e.handleFormUpdate=function(t){console.log(t),e.setState((function(e){return{detailData:[].concat(Object(o.a)(e.detailData.filter((function(e){return e.id!==t.id}))),[t])}}))},e.handleSelect=function(t){e.setState({selectFooterData:t})},e.handleEdit=function(t){console.log("handleEdit "+t),e.setState((function(e){return Object(c.a)(Object(c.a)({},e.detailData),{},{oneData:e.detailData.find((function(e){return e.id===t})),isEdit:!0})}))},e.handleDelete=function(t){console.log("handleDelete "+t),e.setState((function(e){return{detailData:e.detailData.filter((function(e){return e.id!==t}))}}))},e}return Object(m.a)(a,[{key:"createData",value:function(){var e=W.reduce((function(e,t){return e=Object(c.a)(Object(c.a)({},e),{},Object(r.a)({},t,[]))}),{});return Object.entries(this.state.detailData.reduce((function(e,t){return e[t.mainData]=[].concat(Object(o.a)(e[t.mainData]),[t]),e}),e))}},{key:"render",value:function(){var e=this.createData();return console.log("newData ="+e),i.a.createElement(n.Fragment,null,i.a.createElement(X.a,null),i.a.createElement(x,{mainData:W,onDialogSubmit:this.handleDialogSubmit}),i.a.createElement(V,{mainData:W,newData:e,selectedData:this.state.selectFooterData,onDetail:this.handleDetail,isEdit:this.state.isEdit,onEdit:this.handleEdit,onDelete:this.handleDelete,oneData:this.state.oneData,onFormUpdate:this.handleFormUpdate}),i.a.createElement(B,{mainData:W,selectedData:this.state.selectFooterData,onSelect:this.handleSelect}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Z=a(68),_=a(145),ee=a(143),te=a(144),ae=Object(Z.a)({palette:{primary:ee.a,secondary:{main:te.a[100]},type:"dark"}});Object(l.render)(i.a.createElement(_.a,{theme:ae},i.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[77,1,2]]]);
//# sourceMappingURL=main.09952212.chunk.js.map