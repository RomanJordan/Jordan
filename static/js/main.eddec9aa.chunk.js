(this.webpackJsonppersonalsite=this.webpackJsonppersonalsite||[]).push([[0],{34:function(A,e,t){},43:function(A,e,t){},44:function(A,e,t){},45:function(A,e,t){},49:function(A,e,t){"use strict";t.r(e);var n=t(1),c=t(0),s=t.n(c),r=t(14),a=t.n(r),i=(t(34),t.p,t(6)),g=t(7),o=t(9),C=t(8),E=t(24),Q=t.n(E),l=t(10),I=function(A){Object(o.a)(t,A);var e=Object(C.a)(t);function t(){return Object(i.a)(this,t),e.apply(this,arguments)}return Object(g.a)(t,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{id:"lead",children:Object(n.jsx)("h1",{className:"display-1 text-center",id:"lead",children:Object(n.jsx)(Q.a,{strings:["Hello!","\u3053\u3093\u306b\u3061\u308f!"],typeSpeed:80,backSpeed:60,loop:!0})})}),Object(n.jsxs)("div",{className:"display-5 text-center",children:[Object(n.jsxs)("h2",{children:[" ",Object(n.jsx)(l.b,{to:"/about",children:"About"})," "]}),Object(n.jsxs)("h2",{children:[" ",Object(n.jsx)(l.b,{to:"/contact",children:"Contact me"})," "]}),Object(n.jsxs)("h2",{children:[" ",Object(n.jsx)(l.b,{to:"/projects",children:"Work"})," "]})]})]})}}]),t}(c.Component),B=t(16),d=function(A){Object(o.a)(t,A);var e=Object(C.a)(t);function t(A){var n;return Object(i.a)(this,t),(n=e.call(this,A)).state={value:""},n.handleChange=n.handleChange.bind(Object(B.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(B.a)(n)),n}return Object(g.a)(t,[{key:"handleChange",value:function(A){this.setState({value:A.target.value})}},{key:"handleSubmit",value:function(A){alert("Thanks!"),A.preventDefault()}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h1",{class:"text-center",children:"Contact me"}),Object(n.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(n.jsxs)("div",{class:"form-group",children:[Object(n.jsx)("label",{children:"Email address"}),Object(n.jsx)("input",{type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"})]}),Object(n.jsxs)("div",{class:"form-group",children:[Object(n.jsx)("label",{for:"exampleFormControlTextarea1",children:"Your message"}),Object(n.jsx)("textarea",{class:"form-control",id:"exampleFormControlTextarea1",rows:"3",placeholder:"Enter your message"})]}),Object(n.jsx)("button",{type:"submit",class:"btn btn-primary",value:"submit",children:"Submit"})]})]})}}]),t}(c.Component),b=(t(43),function(A){Object(o.a)(t,A);var e=Object(C.a)(t);function t(){return Object(i.a)(this,t),e.apply(this,arguments)}return Object(g.a)(t,[{key:"render",value:function(){return Object(n.jsxs)("div",{class:"container-fluid",children:[Object(n.jsx)("h1",{children:"Stuff I've been working on"}),Object(n.jsx)("div",{class:"work-container pt-2 pb-2",style:{borderTop:"1px solid black",borderBottom:"1px solid black"},children:Object(n.jsxs)("h3",{class:"title pt-1 pb-1 mb-0",children:[Object(n.jsx)(l.b,{class:"abc",to:"/projects/mshortstories",children:"mShortStories"})," "]})}),Object(n.jsx)("div",{class:"work-container pt-2 pb-2",style:{borderBottom:"1px solid black"},children:Object(n.jsxs)("h3",{class:"title pt-1 pb-1 mb-0",children:[Object(n.jsx)(l.b,{to:"/projects/chip8",children:"Chip8 Emulator"})," "]})})]})}}]),t}(c.Component)),f=t.p+"static/media/mshortstories2.20b07514.png",h=t.p+"static/media/mshortstories3.e02d1b64.png",j=(t.p,t.p+"static/media/mshortstories5.598a5ec1.png"),u=t.p+"static/media/arrow_left.842e761b.svg",p=t.p+"static/media/arrow_right.e1da7cbe.svg",v=function(A){Object(o.a)(t,A);var e=Object(C.a)(t);function t(){var A;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(A=e.call.apply(e,[this].concat(c))).state={index:0,pics:[f,h,j]},A.onClickNext=function(){A.state.index+1===A.state.pics.length?A.setState({index:0}):A.setState({index:A.state.index+1})},A.onClickPrevious=function(){A.state.index-1===-1?A.setState({index:A.state.pics.length-1}):A.setState({index:A.state.index-1})},A}return Object(g.a)(t,[{key:"render",value:function(){return Object(n.jsxs)("div",{class:"container text-center",style:{borderLeft:"1px solid black",borderRight:"1px solid black"},children:[Object(n.jsx)("h1",{children:"mShortStories"}),Object(n.jsx)("p",{children:"A site for short stories, post your own short stories, share them, and read short stories of others"}),Object(n.jsx)("p",{children:"Technologies used: Django (python), PostgreSQL, AWS, Heroku"}),Object(n.jsx)("img",{src:this.state.pics[this.state.index],style:{maxHeight:"50%",maxWidth:"60%"}})," ",Object(n.jsx)("br",{}),Object(n.jsxs)("button",{class:"btn btn-outline-dark mt-2 mr-1",onClick:this.onClickPrevious,children:[" ",Object(n.jsx)("img",{src:u})," "]}),Object(n.jsxs)("button",{class:"btn btn-outline-dark mt-2 ml-1",onClick:this.onClickNext,children:[" ",Object(n.jsx)("img",{src:p})," "]})]})}}]),t}(c.Component),O="data:image/png;base64,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",x="data:image/png;base64,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2dMHABCA6AMACED0AQAEIPoAAAIQfQAAAYg+AIAARB8AQACiDwAgANEHABCA6AMACED0AQAEIPoAAAIQfQAAAYg+AIAARB8AQACiDwAgANEHABCA6AMACED0AQAEIPoAAAIQfQAAAYg+AIAARB8AQACiDwAgANEHABCA6AMACED0AQAEIPoAAAIQfQAAAYg+AIAARB8AQACiDwAgANEHABCA6AMACED0AQAEIPoAAAIQfQAAAYg+AIAARB8AQACt4rRefQgxrK97yMNR12rlzRvQZE8fAEAAog8AIADRBwAQgOgDAAhA9AEABCD6AAACEH0AAAGIPgCAAEQfAEAA/iIH4Qz6Fzkc0b874zca4zca4we7Z08fAEAAog8AIADRBwAQgOgDAAhA9AEABCD6AAACEH0AAAGIPgCAAEQfAEAAog8AIADRBwAQgOgDAAhA9AEABCD6AAACEH0AAAGIPgCAAEQfAEAAog8AIADRBwAQgOgDAAhA9AEABCD6AAACEH0AAAGIPgCAAEQfAEAAog8AIADRBwAQgOgDAAhA9AEABCD6AAACEH0AAAGIPgCAAEQfAEAAog8AIADRBwAQgOgDAAhA9AEABCD6AAACEH0AAAGIPgCAAEQfAEAAog8AIADRBwAQgOgDAAhA9AEABCD6AAACEH0AAAGIPgCAAEQfAEAAog8AIADRBwAQgOgDAAhA9AEABCD6AAACEH0AAAGIPgCAAEQfAEAAog8AIADRBwAQgOgDAAhA9AEABCD6AAACEH0AAAGIPgCAAEQfAEAAog8AIADRBwAQgOgDAAhA9AEABNAqTuvVhxDD+rqHPBx1rVbevAFN9vQBAAQg+gAAAhB9AAABiD4AgABEHwBAAKIPACAA0QcAEIDoAwAIQPQBAATgL3IAAARgTx8AQACiDwAgANEHABCA6AMACED0AQAEIPoAAAIQfQAAAYg+AIAARB8AQACiDwAgANEHABCA6AMACED0AQAEIPoAAAIQfQAAAYg+AIAARB8AQACiDwAgANEHABCA6AMACED0AQAEIPoAAAIQfQAAAYg+AIAARB8AQACiDwAgANEHABCA6AMACED0AQAEIPoAAAIQfQAAAYg+AIAARB8AQACiDwAgANEHAHDkpfQrg5CZY7VrBt4AAAAASUVORK5CYII=",m=t.p+"static/media/space3.ae3df03d.png",D=function(A){Object(o.a)(t,A);var e=Object(C.a)(t);function t(){var A;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(A=e.call.apply(e,[this].concat(c))).state={index:0,pics:[O,x,m]},A.onClickNext=function(){A.state.index+1===A.state.pics.length?A.setState({index:0}):A.setState({index:A.state.index+1})},A.onClickPrevious=function(){A.state.index-1===-1?A.setState({index:A.state.pics.length-1}):A.setState({index:A.state.index-1})},A}return Object(g.a)(t,[{key:"render",value:function(){return Object(n.jsxs)("div",{class:"container text-center",style:{borderLeft:"1px solid black",borderRight:"1px solid black"},children:[Object(n.jsx)("h1",{children:"mShortStories"}),Object(n.jsx)("p",{children:"A small emulator for the CHIP8 emulator."}),Object(n.jsx)("p",{children:"Written in C++, with sounds, keyboad input, and all implemented. "}),Object(n.jsx)("img",{src:this.state.pics[this.state.index],style:{maxHeight:"50%",maxWidth:"60%"}})," ",Object(n.jsx)("br",{}),Object(n.jsxs)("button",{class:"btn btn-outline-dark mt-2 mr-1",onClick:this.onClickPrevious,children:[" ",Object(n.jsx)("img",{src:u})," "]}),Object(n.jsxs)("button",{class:"btn btn-outline-dark mt-2 ml-1",onClick:this.onClickNext,children:[" ",Object(n.jsx)("img",{src:p})," "]})]})}}]),t}(c.Component),P=function(A){Object(o.a)(t,A);var e=Object(C.a)(t);function t(){return Object(i.a)(this,t),e.apply(this,arguments)}return Object(g.a)(t,[{key:"render",value:function(){return Object(n.jsxs)("div",{class:"container text-center",style:{borderLeft:"1px solid black",borderRight:"1px solid black"},children:[Object(n.jsx)("h1",{children:"jgj"}),Object(n.jsx)("p",{children:"A site for short stories, post your own short stories, share them, and read short stories of others"}),Object(n.jsx)("p",{children:"Technologies used: Django (python), PostgreSQL, AWS, Heroku"})]})}}]),t}(c.Component),q=function(A){Object(o.a)(t,A);var e=Object(C.a)(t);function t(){return Object(i.a)(this,t),e.apply(this,arguments)}return Object(g.a)(t,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"container",style:{borderLeft:"1px solid black",borderRight:"1px solid black"},children:[Object(n.jsx)("p",{class:"lead",children:"Hello!"}),Object(n.jsx)("p",{children:"I'm Jordan Roman, living in New York City. I have been programming for about 5 years. Currently pursuing a B.S. in Computer Science at City University of New York, Lehman College "}),Object(n.jsx)("p",{children:"I have experience with frontend web development, and backend, with the backend being my strongest area. "})]})}}]),t}(c.Component),H=(t(44),t(45),t(46),t(3)),w=t(28);function N(){return Object(n.jsxs)(l.a,{children:[Object(n.jsx)("h4",{class:"display-4",children:Object(n.jsx)(l.b,{to:"/",children:"Jordan"})}),Object(n.jsx)("p",{class:"mt-1 mb-1",children:"New York City"}),Object(n.jsx)("p",{class:"mt-1 mb-1",children:"Jordan.Roman90@gmail.com"}),Object(n.jsx)(H.a,{render:function(A){var e=A.location;return Object(n.jsx)(w.a,{preset:"moveToLeftFromRight",transitionKey:e.pathname,children:Object(n.jsxs)(H.c,{location:e,children:[Object(n.jsx)(H.a,{exact:!0,path:"/",component:I}),Object(n.jsx)(H.a,{exact:!0,path:"/projects",component:b}),Object(n.jsx)(H.a,{exact:!0,path:"/projects/mshortstories",component:v}),Object(n.jsx)(H.a,{exact:!0,path:"/projects/chip8",component:D}),Object(n.jsx)(H.a,{exact:!0,path:"/projects/jgg",component:P}),Object(n.jsx)(H.a,{exact:!0,path:"/contact",component:d}),Object(n.jsx)(H.a,{exact:!0,path:"/about",component:q})]})})}})]})}a.a.render(Object(n.jsx)(N,{}),document.getElementById("root"));var R=N,z=function(A){A&&A instanceof Function&&t.e(3).then(t.bind(null,52)).then((function(e){var t=e.getCLS,n=e.getFID,c=e.getFCP,s=e.getLCP,r=e.getTTFB;t(A),n(A),c(A),s(A),r(A)}))};a.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(R,{})}),document.getElementById("root")),z()}},[[49,1,2]]]);
//# sourceMappingURL=main.eddec9aa.chunk.js.map