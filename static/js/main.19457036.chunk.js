(this.webpackJsonpreactniceresume=this.webpackJsonpreactniceresume||[]).push([[0],{24:function(e,t,s){},27:function(e,t,s){},47:function(e,t,s){"use strict";s.r(t);var a=s(2),c=s(16),i=s.n(c),n=(s(24),s(6)),r=s(7),l=s(9),j=s(8),o=s(13),d=s(17),h=s.n(d),b=(s(27),s(18)),m=s(5),u=s.n(m),O=s(1),x=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.project,t=this.props.data.github,s=this.props.data.name,a=this.props.data.description;return Object(O.jsxs)("header",{id:"home",children:[Object(O.jsx)(b.a,{type:"circle",bg:!0}),Object(O.jsxs)("nav",{id:"nav-wrap",children:[Object(O.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(O.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(O.jsxs)("ul",{id:"nav",className:"nav",children:[Object(O.jsx)("li",{className:"current",children:Object(O.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(O.jsx)("div",{className:"row banner",children:Object(O.jsxs)("div",{className:"banner-text",children:[Object(O.jsx)(u.a,{bottom:!0,children:Object(O.jsx)("h1",{className:"responsive-headline",children:s})}),Object(O.jsx)(u.a,{bottom:!0,duration:1200,children:Object(O.jsxs)("h3",{children:[a,"."]})}),Object(O.jsx)("hr",{}),Object(O.jsx)(u.a,{bottom:!0,duration:2e3,children:Object(O.jsxs)("ul",{className:"social",children:[Object(O.jsxs)("a",{href:e,className:"button btn project-btn",children:[Object(O.jsx)("i",{className:"fa fa-book"}),"Pr\xe9sentation"]}),t?Object(O.jsxs)("a",{href:t,className:"button btn github-btn",children:[Object(O.jsx)("i",{className:"fa fa-github"}),"Github"]}):""]})})]})}),Object(O.jsx)("p",{className:"scrolldown",children:Object(O.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(O.jsx)("i",{className:"icon-down-circle"})})})]})}}]),s}(a.Component),p=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.social.map((function(e){return e.url?Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:e.url,children:Object(O.jsx)("i",{className:e.className})})},e.name):""}));return Object(O.jsx)("footer",{children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)(u.a,{bottom:!0,children:Object(O.jsxs)("div",{className:"twelve columns",children:[Object(O.jsx)("ul",{className:"social-links",children:e}),Object(O.jsxs)("ul",{className:"copyright",children:[Object(O.jsxs)("li",{children:["\xa9 Copyright ",(new Date).getFullYear()," HAM PRODUCTION"]}),Object(O.jsxs)("li",{children:["Design by"," ",Object(O.jsx)("a",{title:"Styleshout",href:"http://www.styleshout.com/",children:"Styleshout"})]})]})]})}),Object(O.jsx)("div",{id:"go-top",children:Object(O.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(O.jsx)("i",{className:"icon-up-open"})})})]})})}}]),s}(a.Component),f=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,t=this.props.data.image,s=this.props.data.bio,a=this.props.data.address.street,c=this.props.data.address.city,i=this.props.data.address.state,n=this.props.data.address.zip,r=this.props.data.phone,l=this.props.data.email,j=this.props.data.resumedownload;return Object(O.jsx)("section",{id:"about",children:Object(O.jsx)(u.a,{duration:1e3,children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"three columns",children:Object(O.jsx)("img",{className:"profile-pic",src:t,alt:"Nordic Giant Profile Pic"})}),Object(O.jsxs)("div",{className:"nine columns main-col",children:[Object(O.jsx)("h2",{children:"About Me"}),Object(O.jsx)("p",{children:s}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsxs)("div",{className:"columns contact-details",children:[Object(O.jsx)("h2",{children:"Contact Details"}),Object(O.jsxs)("p",{className:"address",children:[Object(O.jsx)("div",{children:e}),Object(O.jsxs)("div",{children:[a,a?Object(O.jsx)("br",{}):"",c," ",i," ",c||i?",":""," ",n]}),Object(O.jsx)("div",{children:r}),Object(O.jsx)("div",{children:l})]})]}),Object(O.jsx)("div",{className:"columns download",children:Object(O.jsx)("p",{children:Object(O.jsxs)("a",{href:j,className:"button",children:[Object(O.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})})})]})]})]})})})}}]),s}(a.Component),v=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"getRandomColor",value:function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},{key:"render",value:function(){var e=this;if(!this.props.data)return null;var t=this.props.data.skillmessage,s=(this.props.data.education.map((function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:e.school}),Object(O.jsxs)("p",{className:"info",children:[e.degree," ",Object(O.jsx)("span",{children:"\u2022"}),Object(O.jsx)("em",{className:"date",children:e.graduated})]}),Object(O.jsx)("p",{children:e.description})]},e.school)})),this.props.data.work.map((function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:e.company}),Object(O.jsxs)("p",{className:"info",children:[e.title,Object(O.jsx)("span",{children:"\u2022"})," ",Object(O.jsx)("em",{className:"date",children:e.years})]}),Object(O.jsx)("p",{children:e.description})]},e.company)})),this.props.data.skills.map((function(t){var s=e.getRandomColor(),a="bar-expand "+t.name.toLowerCase(),c=t.level;return Object(O.jsxs)("li",{children:[Object(O.jsx)("span",{style:{width:c,backgroundColor:s},className:a}),Object(O.jsx)("em",{children:t.name})]},t.name)})));return Object(O.jsx)("section",{id:"resume",children:Object(O.jsx)(u.a,{left:!0,duration:1300,children:Object(O.jsxs)("div",{className:"row skill",children:[Object(O.jsx)("div",{className:"three columns header-col",children:Object(O.jsx)("h1",{children:Object(O.jsx)("span",{children:"Skills"})})}),Object(O.jsxs)("div",{className:"nine columns main-col",children:[t?Object(O.jsx)("p",{children:t}):null,Object(O.jsx)("div",{className:"bars",children:Object(O.jsx)("ul",{className:"skills",children:s})})]})]})})})}}]),s}(a.Component),N=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,t=this.props.data.address.street,s=this.props.data.address.city,a=this.props.data.address.state,c=this.props.data.address.zip,i=this.props.data.phone,n=this.props.data.contactmessage;return Object(O.jsxs)("section",{id:"contact",children:[Object(O.jsx)(m.Fade,{bottom:!0,duration:1e3,children:Object(O.jsxs)("div",{className:"row section-head",children:[Object(O.jsx)("div",{className:"two columns header-col",children:Object(O.jsx)("h1",{children:Object(O.jsx)("span",{children:"Get In Touch."})})}),Object(O.jsx)("div",{className:"ten columns",children:Object(O.jsx)("p",{className:"lead",children:n})})]})}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)(m.Slide,{left:!0,duration:1e3,children:Object(O.jsxs)("div",{className:"eight columns",children:[Object(O.jsx)("form",{action:"",method:"post",id:"contactForm",name:"contactForm",children:Object(O.jsxs)("fieldset",{children:[Object(O.jsxs)("div",{children:[Object(O.jsxs)("label",{htmlFor:"contactName",children:["Name ",Object(O.jsx)("span",{className:"required",children:"*"})]}),Object(O.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName",onChange:this.handleChange})]}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("label",{htmlFor:"contactEmail",children:["Email ",Object(O.jsx)("span",{className:"required",children:"*"})]}),Object(O.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail",onChange:this.handleChange})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"contactSubject",children:"Subject"}),Object(O.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject",onChange:this.handleChange})]}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("label",{htmlFor:"contactMessage",children:["Message ",Object(O.jsx)("span",{className:"required",children:"*"})]}),Object(O.jsx)("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"contactMessage"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{className:"submit",children:"Submit"}),Object(O.jsx)("span",{id:"image-loader",children:Object(O.jsx)("img",{alt:"",src:"images/loader.gif"})})]})]})}),Object(O.jsx)("div",{id:"message-warning",children:" Error boy"}),Object(O.jsxs)("div",{id:"message-success",children:[Object(O.jsx)("i",{className:"fa fa-check"}),"Your message was sent, thank you!",Object(O.jsx)("br",{})]})]})}),Object(O.jsx)(m.Slide,{right:!0,duration:1e3,children:Object(O.jsxs)("aside",{className:"four columns footer-widgets",children:[Object(O.jsxs)("div",{className:"widget widget_contact",children:[Object(O.jsx)("h4",{children:"Address and Phone"}),Object(O.jsxs)("p",{className:"address",children:[e,Object(O.jsx)("br",{}),t," ",Object(O.jsx)("br",{}),s,", ",a," ",c,Object(O.jsx)("br",{}),Object(O.jsx)("span",{children:i})]})]}),Object(O.jsxs)("div",{className:"widget widget_tweets",children:[Object(O.jsx)("h4",{className:"widget-title",children:"Latest Tweets"}),Object(O.jsxs)("ul",{id:"twitter",children:[Object(O.jsxs)("li",{children:[Object(O.jsxs)("span",{children:["This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum",Object(O.jsx)("a",{href:"./",children:"http://t.co/CGIrdxIlI3"})]}),Object(O.jsx)("b",{children:Object(O.jsx)("a",{href:"./",children:"2 Days Ago"})})]}),Object(O.jsxs)("li",{children:[Object(O.jsxs)("span",{children:["Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi",Object(O.jsx)("a",{href:"./",children:"http://t.co/CGIrdxIlI3"})]}),Object(O.jsx)("b",{children:Object(O.jsx)("a",{href:"./",children:"3 Days Ago"})})]})]})]})]})})]})]})}}]),s}(a.Component),g=s(19),w=s.n(g),y=0,C=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.projects.map((function(e){var t="images/portfolio/"+e.image;return Object(O.jsx)("div",{className:"columns portfolio-item",title:e.title,children:Object(O.jsxs)("div",{className:"item-wrap",children:[Object(O.jsx)(w.a,{alt:e.title,src:t}),Object(O.jsx)("div",{style:{textAlign:"center"},children:e.category})]})},y++)}));return Object(O.jsx)("section",{id:"portfolio",children:Object(O.jsx)(u.a,{left:!0,duration:1e3,distance:"40px",children:Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"twelve columns collapsed",children:[Object(O.jsx)("h1",{children:"Check Out Some of My Works."}),Object(O.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})})}}]),s}(a.Component),k=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(n.a)(this,s),(a=t.call(this,e)).state={foo:"bar",resumeData:{}},o.a.initialize("UA-110570651-1"),o.a.pageview(window.location.pathname),a}return Object(r.a)(s,[{key:"getResumeData",value:function(){h.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,s){console.log(s),alert(s)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(x,{data:this.state.resumeData.main}),Object(O.jsx)(f,{data:this.state.resumeData.main}),Object(O.jsx)(v,{data:this.state.resumeData.resume}),Object(O.jsx)(C,{data:this.state.resumeData.portfolio}),Object(O.jsx)(N,{data:this.state.resumeData.main}),Object(O.jsx)(p,{data:this.state.resumeData.main})]})}}]),s}(a.Component),D=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,48)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,n=t.getTTFB;s(e),a(e),c(e),i(e),n(e)}))};i.a.render(Object(O.jsx)(k,{}),document.getElementById("root")),D()}},[[47,1,2]]]);
//# sourceMappingURL=main.19457036.chunk.js.map