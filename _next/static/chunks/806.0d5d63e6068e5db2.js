"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[806],{70806:function(e,n,t){t.r(n),t.d(n,{default:function(){return S}});var r=t(35944),o=t(86886),a=t(70917),i=t(77044),u=t(94859),c=t(67294),s=t(90948),d=t(41796),l=t(87357),m=t(26447),p=t(22038),f=t(10633),h=t(655);function v(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(c){o=!0,a=c}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var w=(0,s.ZP)(f.Z)((function(e){return{"& .MuiPaginationItem-root":{borderRadius:"4px",minWidth:"20px",height:"20px"},"& .MuiPaginationItem-root:not(.Mui-selected)":{border:"none",color:e.theme.palette.text.secondary},"& .MuiPaginationItem-root.Mui-selected":{background:"transparent"}}})),g=function(){var e=(0,h.lML)(),n=v((0,h.SYq)(e),1)[0];return n.pagination.pageCount>1?(0,r.tZ)(w,{color:"primary",variant:"outlined",count:n.pagination.pageCount,page:n.pagination.page+1,onChange:function(n,t){return e.current.setPage(t-1)}}):null},x=t(39658),A=t(75447),y=t(95271),b=[{field:"sell",headerName:"Sell",width:150,sortable:!1},{field:"expected",headerName:"Expected",width:150},{field:"received",headerName:"Received",width:180},{field:"dateOfExecution",headerName:"Date",flex:1}],T=(0,s.ZP)(h._$r)((function(e){var n=e.theme;return{border:"none",fontSize:"0.8125rem",lineHeight:"1rem",fontWeight:400,color:(0,d.Fq)(p.S.text[n.palette.mode],.85),borderRadius:0,cursor:"pointer","& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell":{padding:"0 1.5rem",borderBottom:"1px solid ".concat((0,d.Fq)(p.S.text[n.palette.mode],.02))},"& .MuiDataGrid-columnSeparator":{display:"none"},"& .MuiDataGrid-columnHeaders":{borderBottom:"none"},"& .MuiDataGrid-footerContainer":{minHeight:"40px"},"& .MuiDataGrid-columnHeaderTitleContainer":{padding:0,color:n.palette.text.secondary},"& .MuiDataGrid-columnHeader":{padding:"0 1.5rem",background:(0,d.Fq)(p.S.text[n.palette.mode],.02)},"& .MuiDataGrid-columnHeaderTitle":{paddingRight:"1rem"},"& .MuiDataGrid-cell:focus":{outline:"none"}}})),k=function(e){var n=e.rows,t=e.chainId,o=e.searchQuery,a=(0,A.Lw)(),i=n.map((function(e){return(0,u.z)(e,t,a,"history")})).filter((function(e){return e&&"string"===typeof e.pairs&&!!e.pairs.match(new RegExp((0,x.JX)(o),"i"))})),s=Math.min(880,42*i.length+42),d=(0,y.S)().isMobile,p=(0,c.useMemo)((function(){return d?b.slice(0,3):b}),[d]);return(0,r.tZ)(l.Z,{style:{height:s},children:(0,r.tZ)(T,{rows:i,columns:p,pagination:!0,pageSize:20,disableColumnMenu:!0,rowHeight:40,loading:!1,headerHeight:40,sortingMode:"server",hideFooter:i.length<=20,isRowSelectable:function(){return!1},components:{Pagination:g,NoRowsOverlay:function(){return(0,r.tZ)(m.Z,{height:"40px",marginTop:"40px",alignItems:"center",justifyContent:"center",children:"No rows"})}},onRowClick:function(e){e.row.explorerLink&&window.open(e.row.explorerLink)}})})},O=t(51848);function C(){var e,n,t=(e=[""],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return C=function(){return t},t}var S=function(){var e=(0,i.useWeb3React)(),n=e.account,t=e.chainId,s=(0,c.useState)(""),d=s[0],l=s[1],m=(0,u.d)(n,t,1e4,"past",[]),p=m.orders,f=m.refreshOrders,h=(0,c.useCallback)((function(e){var n=e.target.value;l(n)}),[]),v=(0,c.useCallback)((function(){f()}),[f]);return(0,r.BX)(o.ZP,{item:!0,css:(0,a.iv)(C()),children:[(0,r.tZ)(O.ZP,{value:d,onChange:h,onRefresh:v}),p.length?(0,r.tZ)(k,{chainId:t,rows:p,searchQuery:d}):null]})}},51848:function(e,n,t){t.d(n,{W_:function(){return w},Pp:function(){return g}});var r=t(35944),o=t(90948),a=t(86886),i=t(41796),u=t(70917),c=t(22038),s=t(32103),d=t(68850),l=t(67294),m=t(95271);function p(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function f(){var e=p(["\n        flex-direction: row;\n        flex-wrap: nowrap;\n        justify-content: space-between;\n        align-items: center;\n        margin-top: 12px;\n        margin-bottom: 16px;\n        padding: ",";\n      "]);return f=function(){return e},e}function h(){var e=p(["\n          width: 205px;\n        "]);return h=function(){return e},e}var v,w=(0,o.ZP)(s.d7)((function(e){var n=e.theme,t=e.shouldrotate;return{fill:n.palette.text.primary,fontSize:"0.875rem",animation:t?"rotating 1s linear infinite":""}})),g=(0,o.ZP)(a.ZP)((function(e){var n=e.theme;return{width:"24px",height:"24px",cursor:"pointer",borderRadius:"8px",alignItems:"center",justifyContent:"center",background:(0,i.Fq)(c.S.text[n.palette.mode],.04)}}));n.ZP=function(e){var n=e.value,t=e.onChange,o=e.onRefresh,i=(0,l.useState)(!1),c=i[0],s=i[1],p=(0,l.useCallback)((function(){v&&clearTimeout(v),s(!0),o(),v=setTimeout((function(){s(!1)}),2e3)}),[o,s]),x=(0,m.S)().isMobile;return(0,r.BX)(a.ZP,{container:!0,css:(0,u.iv)(f(),x?"0 1rem":"0"),children:[(0,r.tZ)(a.ZP,{item:!0,css:(0,u.iv)(h()),children:(0,r.tZ)(d.b,{value:n,onChange:t,variant:"small",placeholder:"Search tokens name"})}),(0,r.tZ)(g,{container:!0,onClick:p,children:(0,r.tZ)(w,{shouldrotate:c})})]})}},94859:function(e,n,t){t.d(n,{z:function(){return k},d:function(){return T}});var r=t(28520),o=t.n(r),a=t(2593),i=t(41814),u=t(67294),c=t(9669),s=t.n(c),d=t(61407);function l(e,n,t,r,o,a,i){try{var u=e[a](i),c=u.value}catch(s){return void t(s)}u.done?n(c):Promise.resolve(c).then(r,o)}function m(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var a=e.apply(n,t);function i(e){l(a,r,o,i,u,"next",e)}function u(e){l(a,r,o,i,u,"throw",e)}i(void 0)}))}}var p=m(o().mark((function e(n,t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"\n    query GetOrdersByOwner($owner: String) {\n      orders(\n        where:{creator:$owner,status:ACTIVE},\n        orderBy: createdAtBlock, \n        orderDirection: desc\n      ) {\n        id\n        orderId\n        recipient {\n          id\n        }\n        inputToken\n        outputToken\n        inputAmount\n        minReturnAmount\n        stoplossAmount\n        orderEncodedData\n        shares\n        executionFee\n        inputAfterFee\n        createdTxHash\n        status\n      }\n    }\n  ",e.prev=1,e.next=4,s().post(d.TL[t],{query:"\n    query GetOrdersByOwner($owner: String) {\n      orders(\n        where:{creator:$owner,status:ACTIVE},\n        orderBy: createdAtBlock, \n        orderDirection: desc\n      ) {\n        id\n        orderId\n        recipient {\n          id\n        }\n        inputToken\n        outputToken\n        inputAmount\n        minReturnAmount\n        stoplossAmount\n        orderEncodedData\n        shares\n        executionFee\n        inputAfterFee\n        createdTxHash\n        status\n      }\n    }\n  ",variables:{owner:n.toLowerCase()}});case 4:return r=e.sent.data,e.abrupt("return",r.data.orders||[]);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),f=m(o().mark((function e(n,t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"\n    query GetOrdersByOwner($owner: String) {\n      orders(\n        where:{creator:$owner,status_not:ACTIVE},\n        orderBy: updatedAt, \n        orderDirection: desc\n      ) {\n        id\n        inputToken\n        outputToken\n        inputAmount\n        minReturnAmount\n        stoplossAmount\n        status\n        updatedAt\n        executedTxHash\n        cancelledTxHash\n        returnAmount\n        inputAfterFee\n      }\n    }\n  ",e.prev=1,e.next=4,s().post(d.TL[t],{query:"\n    query GetOrdersByOwner($owner: String) {\n      orders(\n        where:{creator:$owner,status_not:ACTIVE},\n        orderBy: updatedAt, \n        orderDirection: desc\n      ) {\n        id\n        inputToken\n        outputToken\n        inputAmount\n        minReturnAmount\n        stoplossAmount\n        status\n        updatedAt\n        executedTxHash\n        cancelledTxHash\n        returnAmount\n        inputAfterFee\n      }\n    }\n  ",variables:{owner:n.toLowerCase()}});case 4:return r=e.sent.data,e.abrupt("return",r.data.orders);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),h=t(39658);function v(e,n,t,r,o){var i=void 0!==o&&o;try{if(e&&(n||0===n)&&t&&(r||0===r)){var u=n>r?n:r,c=a.O$.from(10).pow(a.O$.from(u));return i?e.mul(c).div(t).mul(a.O$.from(10).pow(a.O$.from(r))).div(a.O$.from(10).pow(a.O$.from(n))):t.mul(c).div(e).mul(a.O$.from(10).pow(a.O$.from(n))).div(a.O$.from(10).pow(a.O$.from(r)))}}catch(s){}}var w=t(34497),g=t(44431),x=t.n(g);function A(e,n,t,r,o,a,i){try{var u=e[a](i),c=u.value}catch(s){return void t(s)}u.done?n(c):Promise.resolve(c).then(r,o)}function y(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var a=e.apply(n,t);function i(e){A(a,r,o,i,u,"next",e)}function u(e){A(a,r,o,i,u,"throw",e)}i(void 0)}))}}var b={open:p,past:f};function T(e,n,t,r,a){var i=void 0===t?5e3:t,c=(0,u.useState)([]),s=c[0],d=c[1],l=(0,u.useRef)(),m=(0,u.useCallback)(y(o().mark((function t(){var a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e&&(0,h.UJ)(e)&&n)){t.next=5;break}return t.next=3,b[r](e,n);case 3:a=t.sent,d(a);case 5:case"end":return t.stop()}}),t)}))),[e,n,r]);return(0,u.useEffect)((function(){d([]);var e=function(n){l.current&&clearTimeout(l.current),l.current=setTimeout(y(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m();case 2:e();case 3:case"end":return n.stop()}}),n)}))),n?0:i||1e4)};return e(!0),function(){l.current&&clearTimeout(l.current)}}),[e,n,i,m]),{orders:s,refreshOrders:m}}function k(e,n,t,r){if(!e.id)return null;var o=i.getAddress(e.inputToken),u=i.getAddress(e.outputToken),c=t[o],s=t[u];if(!c||!s)return null;if(!t[o]||!t[u])return null;var d=c.symbol,l=c.decimals,m=c.logoURI,p=s.symbol,f=s.decimals,g=s.logoURI,A=a.O$.from("0"===e.inputAmount&&e.creationAmount?e.creationAmount:e.inputAmount),y=a.O$.from(e.minReturnAmount),b=a.O$.from(e.stoplossAmount),T=a.O$.from(e.inputAfterFee),k="ACTIVE"===e.status,O="CANCELLED"===e.status,C=(0,h.E8)(n,k?e.createdTxHash:O?e.cancelledTxHash:e.executedTxHash,"transaction");if("history"===r){var S="".concat(d," -> ").concat(p),R=a.O$.from(0);return Number(e.returnAmount)&&(R=a.O$.from(e.returnAmount)),{pairs:S,sell:"".concat((0,h.QB)(A,l,6)," ").concat(d),expected:"".concat((0,h.QB)(y,f,6)," ").concat(p),received:R.gt(0)?"".concat((0,h.QB)(R,f,6)," ").concat(p):"CANCELLED",id:e.id,explorerLink:C,dateOfExecution:(0,w.Z)(new Date(1e3*e.updatedAt),"yyyy/MM/dd kk:mm")}}var D=v(T,l,y,f,!1),$=v(T,l,y,f,!0),Z=v(T,l,b,f,!1),I=v(T,l,b,f,!0);if("openOrder"===r){var M=new(x())(e.executionFee).toString();return{fromSymbol:d,fromlogoURI:m,fromAddress:o,recipient:e.recipient,fromDecimals:l,toSymbol:p,tologoURI:g,toDecimals:f,toAddress:u,inputAmount:A,minReturnAmount:y,stoplossAmount:b,explorerLink:C,rateFromTo:D,rateToFrom:$,stoplossRateToFrom:I,stoplossRateFromTo:Z,inputAfterFee:T,orderInfo:{orderId:e.orderId,orderEncodedData:e.orderEncodedData,orderShares:e.shares,executionFee:M}}}return{fromSymbol:d,fromDecimals:l,toSymbol:p,toDecimals:f,inputAmount:A,minReturnAmount:y,stoplossAmount:b,explorerLink:C,rateFromTo:D,rateToFrom:$}}}}]);