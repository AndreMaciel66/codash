(this.webpackJsonpcodash=this.webpackJsonpcodash||[]).push([[0],{75:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),a=n(12),o=n.n(a),c=n(107),s=n(23),d=n(57),l=Object(d.a)({palette:{primary:{main:"#22374D"},secondary:{main:"#7B9CBD"}},typography:{fontFamily:['"Source Code Pro"']}});l.typography.h1=Object(s.a)({fontFamily:['"Source Code Pro"'],fontSize:"1.5rem",fontWeight:300,"@media (min-width:600px)":{fontSize:"2rem"}},l.breakpoints.up("md"),{fontSize:"2.6rem"}),l.typography.h3=Object(s.a)({fontFamily:['"Source Code Pro"'],fontSize:"1.2rem","@media (min-width:600px)":{fontSize:"1.5rem"}},l.breakpoints.up("md"),{fontSize:"2rem"}),l.typography.h4=Object(s.a)({fontFamily:['"Source Code Pro"'],fontSize:"1.3rem",fontWeight:500,"@media (min-width:600px)":{fontSize:"1.6rem"}},l.breakpoints.up("md"),{fontSize:"2rem"}),l.typography.h5=Object(s.a)({fontFamily:['"Source Code Pro"'],fontSize:"0.8rem",fontWeight:200,"@media (min-width:600px)":{fontSize:"1rem"}},l.breakpoints.up("md"),{fontSize:"1.1rem"});var h,j=l,b=n(16),p=n(99),m=n(100),u=n(101),x=n.p+"static/media/codash-logo.512f952f.png",f=n(17),O=n(2),g=f.a.div(h||(h=Object(b.a)(["\n  min-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n"]))),y=function(){return Object(O.jsx)(g,{children:Object(O.jsxs)(p.a,{container:!0,direction:"column",justify:"center",alignItems:"center",children:[Object(O.jsx)(m.a,{variant:"h1",children:"Welcome to"}),Object(O.jsx)("img",{src:x,className:"App-logo",alt:"logo",style:{width:"38%"}}),Object(O.jsx)(u.a,{href:"/dashboards",children:Object(O.jsx)(m.a,{color:"primary",variant:"h3",children:">_ get started"})})]})})},v=n(56),w=n(7),k=n(102),N=[{id:0,title:"Covid-19 Brazil",urlCode:"covid",description:"Follow the covid-19 data in the states and cities of Brazil",to:"/dashboards/covid",tool:["Power BI","Power Query","Dax","Python","Pandas"],links:[{id:0,title:"github",url:"https://github.com/AndreMaciel66/covid"},{id:1,title:"embed",to:"/dashboards/covid",url:"https://app.powerbi.com/view?r=eyJrIjoiZmI0NGYwYzgtMGRiZi00NDk0LWIyOGUtMjNkNjhlNDdlYjEyIiwidCI6ImEzYTc4ZDc4LWM5YzEtNGVkYi05Y2MyLTk2OWNjYWNjYWNkYiJ9&pageName=ReportSectionf0ea873116e3a337e94b"},{id:2,title:"target",url:"https://app.powerbi.com/view?r=eyJrIjoiZmI0NGYwYzgtMGRiZi00NDk0LWIyOGUtMjNkNjhlNDdlYjEyIiwidCI6ImEzYTc4ZDc4LWM5YzEtNGVkYi05Y2MyLTk2OWNjYWNjYWNkYiJ9&pageName=ReportSectionf0ea873116e3a337e94b"}]}],z=n(109),S=n(103),C=n(105),Y=n(104),I=n.p+"static/media/github.9e094d23.png",W=n.p+"static/media/target.42736d94.png",D=n.p+"static/media/embed.c12c8bcf.png",T=n(108),F=n(106);var P=Object(k.a)({root:{maxWidth:525,minWidth:400,maxHeight:225,minHeight:200,borderWidth:"2px",borderColor:"white",borderStyle:"solid",borderRadius:15,"&:hover":{borderColor:"#22374D"}},cardActionArea:{paddingLeft:15,marginTop:5},cardContent:{minHeight:80},media:{height:140},linksWrapper:{backgroundColor:"#f5f4f5",display:"flex",flexDirection:"row",borderRadius:"25px",justifyItems:"center"}});function L(e){var t=P();return Object(O.jsxs)(z.a,{className:t.root,children:[Object(O.jsx)(S.a,{className:t.cardActionArea,children:Object(O.jsx)(m.a,{variant:"h4",color:"primary",children:e.dashboard.title})}),Object(O.jsx)(Y.a,{className:t.cardContent,children:Object(O.jsx)(m.a,{variant:"h5",color:"primary",children:e.dashboard.description})}),Object(O.jsx)(C.a,{children:Object(O.jsx)("div",{className:t.linksWrapper,children:e.dashboard.links.map((function(e,t){return Object(O.jsx)("a",{href:"embed"===e.title?e.to:e.url,target:"embed"===e.title?null:"_blank",rel:"embed"===e.title?null:"noreferrer",children:Object(O.jsx)(T.a,{title:e.title,children:Object(O.jsx)(F.a,{color:"primary",component:"span",children:(n=e.title,Object(O.jsx)("img",{src:"github"===n?I:"embed"===n?D:W,alt:"logo",style:{width:30}}))},t)})},t);var n}))})}),console.log(e.dashboard.url)]})}var M=Object(k.a)({pageTitle:{marginTop:"2rem"}});var G,B,E,R,A,J,Z,H,_,U=function(){var e=M();return Object(O.jsxs)(p.a,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:8,children:[Object(O.jsx)(p.a,{item:!0,children:Object(O.jsxs)(m.a,{className:e.pageTitle,variant:"h1",children:[">","_ Dashboard List"]})}),Object(O.jsx)(p.a,{item:!0,children:Object(O.jsx)(p.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"flex-start",spacing:4,children:N.map((function(e,t){return Object(O.jsx)(p.a,{item:!0,xs:12,sm:6,md:4,children:Object(O.jsx)(L,{dashboard:e})},t)}))})})]})},V=n(58),q=[{id:1,title:"home",linkType:"internal",to:"/",external:!1},{id:2,title:"dashboards",linkType:"internal",to:"/dashboards",external:!1},{id:3,title:"about",linkType:"internal",to:"/about",external:!1}],Q=f.a.nav(G||(G=Object(b.a)(["\n  padding: 0 20px;\n  min-height: 9vh;\n  background: #f5f5f5;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),K=f.a.h1(B||(B=Object(b.a)(["\n  font-size: 25px;\n  color: black;\n"]))),X=f.a.ul(E||(E=Object(b.a)(["\n  list-style: none;\n  display: flex;\n\n  li:nth-child(2) {\n    margin: 0px 20px;\n  }\n\n  @media (max-width: 768px) {\n    display: none;\n  }\n"]))),$=f.a.li(R||(R=Object(b.a)([""]))),ee=f.a.a(A||(A=Object(b.a)(["\n  color: black;\n  text-decoration: none;\n\n  :hover {\n    text-decoration: underline;\n  }\n"]))),te=f.a.button(J||(J=Object(b.a)(["\n  background: none;\n  cursor: pointer;\n  border: none;\n  outline: none;\n\n  @media (min-width: 769px) {\n    display: none;\n  }\n"]))),ne=f.a.span(Z||(Z=Object(b.a)(["\n  display: block;\n  border-radius: 50px;\n  width: 25px;\n  height: 3px;\n  margin: 5px;\n  background-color: #fff;\n  transition: width 0.4s ease-in-out;\n\n  :nth-child(2) {\n    width: ",";\n  }\n"])),(function(e){return e.open?"40%":"70%"})),ie=f.a.div(H||(H=Object(b.a)(["\n  position: absolute;\n  height: ",";\n  width: 100vw;\n  background: #f5f5f5;\n  transition: height 0.4s ease-in-out;\n\n  @media (min-width: 769px) {\n    display: none;\n  }\n"])),(function(e){return e.open?"91vh":0})),re=f.a.ul(_||(_=Object(b.a)(["\n  list-style: none;\n  position: absolute;\n  left: 50%;\n  top: 45%;\n  transform: translate(-50%, -50%);\n\n  li {\n    opacity: ",";\n    font-size: 25px;\n    margin: 50px 0px;\n    transition: opacity 0.4s ease-in-out;\n  }\n\n  li:nth-child(2) {\n    margin: 50px 0px;\n  }\n"])),(function(e){return e.open?1:0})),ae=function(){var e=Object(i.useState)(!1),t=Object(V.a)(e,2),n=t[0],r=t[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(Q,{children:[Object(O.jsx)(K,{children:Object(O.jsx)("img",{src:x,style:{width:"10vw"},alt:"logo"})}),Object(O.jsx)(X,{children:q.map((function(e,t){return Object(O.jsx)($,{children:Object(O.jsx)(ee,{href:e.to,children:Object(O.jsx)(m.a,{variant:"h5",style:{margin:"20px"},children:e.title})})},t)}))}),Object(O.jsx)(te,{onClick:function(){return r(!n)},children:q.map((function(e){return Object(O.jsx)(ne,{open:n},e.id)}))})]}),Object(O.jsx)(ie,{open:n,children:Object(O.jsx)(re,{open:n,children:q.map((function(e,t){return Object(O.jsx)($,{children:Object(O.jsx)(ee,{href:e.to,children:e.title})},t)}))})})]})},oe=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(ae,{}),Object(O.jsx)(U,{})]})},ce=n(40),se=n(5),de=n.n(se),le=n(6);function he(){return null}he.propTypes={classes:de.a.object.isRequired};var je=Object(le.a)((function(e){return{"@global":{body:Object(ce.a)(Object(ce.a)({},e.typography.body1),{},{padding:0,margin:0,backgroundColor:"white"})}}}))(he),be=Object(k.a)({container:{position:"relative",overflow:"hidden",width:"100%",paddingTop:"56.25%"},responsiveiFrame:{position:"absolute",top:0,left:0,bottom:0,right:0,width:"100%",height:"100%"}}),pe=function(e){var t=be(),n=Object(w.f)().DashName,i=N.filter((function(e){return e.urlCode===n})),r=i[0].links.filter((function(e){return"embed"===e.title}));return console.log(i[0]),console.log(r[0].to),Object(O.jsxs)("div",{children:[Object(O.jsx)(ae,{}),Object(O.jsx)("div",{className:t.container,children:Object(O.jsx)("iframe",{title:"rexpeita",className:t.responsiveiFrame,src:r[0].url})})]})};var me=function(){return Object(O.jsxs)(c.a,{theme:j,children:[Object(O.jsx)(je,{}),Object(O.jsx)(v.a,{children:Object(O.jsx)("div",{children:Object(O.jsxs)(w.c,{children:[Object(O.jsx)(w.a,{path:"/codash/dashboards",exact:!0,children:Object(O.jsx)(oe,{})}),Object(O.jsx)(w.a,{path:"/codash/dashboards/:DashName",children:Object(O.jsx)(pe,{})}),Object(O.jsx)(w.a,{path:"/codash/",children:Object(O.jsx)(y,{})})]})})})]})},ue=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,110)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),i(e),r(e),a(e),o(e)}))};o.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(me,{})}),document.getElementById("root")),ue()}},[[75,1,2]]]);
//# sourceMappingURL=main.919ee302.chunk.js.map