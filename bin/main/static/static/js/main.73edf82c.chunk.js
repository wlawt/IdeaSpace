(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,t,a){e.exports=a.p+"static/media/post.af94b71a.png"},40:function(e,t,a){e.exports=a.p+"static/media/landing2.0f578210.png"},41:function(e,t,a){e.exports=a.p+"static/media/online.bd523a82.png"},42:function(e,t,a){e.exports=a.p+"static/media/globe.aca388e6.png"},43:function(e,t,a){e.exports=a.p+"static/media/network.48eb396e.png"},44:function(e,t,a){e.exports=a.p+"static/media/contact.de24b292.png"},45:function(e,t,a){e.exports=a.p+"static/media/search.a3917ab2.png"},47:function(e,t,a){e.exports=a(85)},52:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(23),o=a.n(l),s=(a(52),a(4)),i=a(5),c=a(7),m=a(6),u=a(8),p=a(3),d=a(20),b=a(10),h=a(11),g=a(9),f=a(1),E=a.n(f),v=function(e){var t=e.divClassName,a=e.labelClassName,n=e.forAttr,l=e.labelTitle,o=e.inputClassName,s=e.id,i=e.type,c=e.placeholder,m=e.name,u=e.value,p=e.onChange;return r.a.createElement("div",{className:t},r.a.createElement("label",{className:a,htmlFor:n},l),r.a.createElement("input",{className:o,id:s,type:i,placeholder:c,name:m,value:u,onChange:p}))};v.defaultProps={type:"text"};var y=v,N=function(e){var t=e.divClassName,a=e.labelClassName,n=e.forAttr,l=e.labelTitle,o=e.textAreaClassName,s=e.id,i=e.type,c=e.rows,m=e.placeholder,u=e.name,p=e.value,d=e.onChange;return r.a.createElement("div",{className:t},r.a.createElement("label",{className:a,htmlFor:n},l),r.a.createElement("textarea",{className:o,name:u,id:s,rows:c,placeholder:m,value:p,onChange:d,type:i}))},x=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onChange=function(e){a.setState(Object(h.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault();var t={name:a.state.name,title:a.state.title,subTitle:a.state.subTitle,body:a.state.body,imageURL:a.state.imageURL,id:a.state.id};a.props.editPost(t,a.props.history)},a.state={errors:{},name:"",title:"",subTitle:"",body:"",imageURL:"",id:""},a.onChange=a.onChange.bind(Object(g.a)(a)),a.onSubmit=a.onSubmit.bind(Object(g.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getCurrentPost(this.props.match.params.id)}},{key:"componentWillReceiveProps",value:function(e){if(e.errors&&this.setState({errors:e.errors}),e.post.post){var t=e.post.post;this.setState({name:t.name,title:t.title,subTitle:t.subTitle,body:t.body,imageURL:t.imageURL,id:t.id})}}},{key:"delete",value:function(e){this.props.deletePost(e,this.props.history)}},{key:"render",value:function(){var e=this.state,t=e.errors,a=e.name,n=e.title,l=e.subTitle,o=e.body,s=e.imageURL,i=e.id;return r.a.createElement("div",null,r.a.createElement("div",{className:"container pb-5"},r.a.createElement("h1",{className:"display-4 pt-5 pb-4"},"Edit post"),r.a.createElement("form",{onSubmit:this.onSubmit,className:"w-full max-w-md"},r.a.createElement("div",{className:"flex items-center border-b border-b-2 border-teal py-2 mb-4"},r.a.createElement("input",{className:"appearance-none bg-transparent border-none w-full text-grey-darker mr-3 py-1 px-2 leading-tight focus:outline-none",type:"text",placeholder:"Enter author alias",name:"name",value:a,onChange:this.onChange,error:t.title})),r.a.createElement("div",{className:"flex flex-wrap -mx-3 mb-6"},r.a.createElement(y,{divClassName:"w-full md:w-1/2 px-3 mb-6 md:mb-0",labelClassName:"block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2",forAttr:"grid-title",labelTitle:"Article Title",inputClassName:"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",id:"grid-title",type:"text",placeholder:"Enter title here ...",name:"title",value:n,onChange:this.onChange,error:t.title}),r.a.createElement(y,{divClassName:"w-full md:w-1/2 px-3",labelClassName:"block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2",forAttr:"grid-subTitle",labelTitle:"Article Caption",inputClassName:"appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey",id:"grid-subTitle",type:"text",placeholder:"Enter sub-title ...",name:"subTitle",value:l,onChange:this.onChange,error:t.subTitle})),r.a.createElement("div",{className:"flex flex-wrap -mx-3 mb-6"},r.a.createElement(N,{divClassName:"w-full px-3",labelClassName:"block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2",forAttr:"grid-body",labelTitle:"Article Body",textAreaClassName:"appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey",id:"grid-body",type:"text",placeholder:"Enter article body ...",rows:"10",name:"body",value:o,onChange:this.onChange,error:t.body})),r.a.createElement("div",{className:"flex flex-wrap -mx-3 mb-6"},r.a.createElement(y,{divClassName:"w-full px-3",labelClassName:"block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2",forAttr:"grid-image",labelTitle:"Image",inputClassName:"appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey",id:"grid-image",type:"text",placeholder:"Enter image URL ...",name:"imageURL",value:s,onChange:this.onChange,error:t.imageURL})),r.a.createElement("button",{type:"submit",className:"btn btn-outline-danger btn-block btn-lg mt-4",onClick:this.delete.bind(this,i)},"Delete Post"),r.a.createElement("button",{type:"submit",className:"btn btn-outline-primary btn-block btn-lg mt-4"},"Update Post"))))}}]),t}(n.Component),w=Object(b.b)(function(e){return{errors:e.errors,post:e.post}},{editPost:function(e,t){return function(a){E.a.put("/posts/"+e.id,e).then(function(a){t.push("/show/"+e.id)}).catch(function(e){return a({type:"GET_ERRORS",payload:e.response.data})})}},deletePost:function(e,t){return function(a){E.a.delete("/posts/"+e).then(function(e){t.push("/post")})}},getCurrentPost:function(e){return function(t){E.a.get("/posts/"+e).then(function(e){return t({type:"GET_POST",payload:e.data})}).catch(function(e){return t({type:"GET_POST",payload:{}})})}}})(Object(d.d)(x)),C=a(39),k=a.n(C),O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onChange=function(e){a.setState(Object(h.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault();var t={name:a.state.name,title:a.state.title,subTitle:a.state.subTitle,body:a.state.body,imageURL:a.state.imageURL};a.props.postSubmit(t,a.props.history)},a.state={name:"",title:"",subTitle:"",body:"",imageURL:"",errors:{}},a.onChange=a.onChange.bind(Object(g.a)(a)),a.onSubmit=a.onSubmit.bind(Object(g.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.title,n=e.subTitle,l=e.body,o=e.imageURL,s=e.errors;return r.a.createElement("div",{className:"container pb-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("h1",{className:"display-4 pt-5 pb-4"},"Create a new post"),r.a.createElement("form",{onSubmit:this.onSubmit,className:"w-full max-w-md"},r.a.createElement("div",{className:"flex items-center border-b border-b-2 border-teal py-2 mb-4"},r.a.createElement("input",{className:"appearance-none bg-transparent border-none w-full text-grey-darker mr-3 py-1 px-2 leading-tight focus:outline-none",type:"text",placeholder:"Enter author alias",name:"name",value:t,onChange:this.onChange,error:s.name})),r.a.createElement("div",{className:"flex flex-wrap -mx-3 mb-6"},r.a.createElement(y,{divClassName:"w-full md:w-1/2 px-3 mb-6 md:mb-0",labelClassName:"block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2",forAttr:"grid-title",labelTitle:"Article Title",inputClassName:"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",id:"grid-title",type:"text",placeholder:"Enter title here ...",name:"title",value:a,onChange:this.onChange,error:s.title}),r.a.createElement(y,{divClassName:"w-full md:w-1/2 px-3",labelClassName:"block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2",forAttr:"grid-subTitle",labelTitle:"Article Caption",inputClassName:"appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey",id:"grid-subTitle",type:"text",placeholder:"Enter sub-title ...",name:"subTitle",value:n,onChange:this.onChange,error:s.subTitle})),r.a.createElement("div",{className:"flex flex-wrap -mx-3 mb-6"},r.a.createElement(N,{divClassName:"w-full px-3",labelClassName:"block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2",forAttr:"grid-body",labelTitle:"Article Body",textAreaClassName:"appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey",id:"grid-body",type:"text",placeholder:"Enter article body ...",rows:"10",name:"body",value:l,onChange:this.onChange,error:s.body})),r.a.createElement("div",{className:"flex flex-wrap -mx-3 mb-6"},r.a.createElement(y,{divClassName:"w-full px-3",labelClassName:"block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2",forAttr:"grid-image",labelTitle:"Image",inputClassName:"appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey",id:"grid-image",type:"text",placeholder:"Enter image URL ...",name:"imageURL",value:o,onChange:this.onChange,error:s.imageURL})),r.a.createElement("button",{type:"submit",className:"btn btn-outline-primary btn-block btn-lg mt-4"},"Create Post"))),r.a.createElement("div",{className:"col-6 my-auto pt-5 pl-5"},r.a.createElement("img",{src:k.a,alt:""}))))}}]),t}(n.Component),j=Object(b.b)(function(e){return{errors:e.errors}},{postSubmit:function(e,t){return function(a){E.a.post("/posts",e).then(function(e){return t.push("/post")}).catch(function(e){return a({type:"GET_ERRORS",payload:e.response.data})})}}})(Object(d.d)(O)),S=(a(81),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onChange=function(e){a.setState(Object(h.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault();var t={comment:a.state.comment,id:a.props.match.params.id};a.props.commentSubmit(t,a.props.history)},a.state={post:{},errors:{},comments:[]},a.onChange=a.onChange.bind(Object(g.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("/posts/"+this.props.match.params.id).then(function(t){e.setState({post:t.data})}),E.a.get("/comments").then(function(t){e.setState({comments:t.data})})}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"onLikeClick",value:function(e){var t=this;E.a.put("/comments/"+e).then(function(e){t.props.history.push("/post")}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this,t=this.state,a=t.errors,n=t.comment;return r.a.createElement("div",{className:"container",style:{marginBottom:"400px"}},r.a.createElement("h1",{className:"display-4 pt-5 pb-2"},this.state.post.title,r.a.createElement(p.b,{to:"/edit/".concat(this.state.post.id)}," ",r.a.createElement("i",{class:"fas fa-pencil-alt"}))),r.a.createElement("img",{src:"".concat(this.state.post.imageURL),alt:""}),r.a.createElement("h3",{className:"pb-1 pt-3"},this.state.post.subTitle),r.a.createElement("p",{className:"text-muted"},"Author: ",this.state.post.name),r.a.createElement("hr",null),r.a.createElement("p",{className:"lead"},this.state.post.body),r.a.createElement("hr",{style:{marginBottom:"200px"}}),r.a.createElement("h2",{className:"display-4 mb-3"},"Comments"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"flex flex-wrap -mx-3 mb-6"},r.a.createElement(N,{divClassName:"w-full px-3",labelClassName:"block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2",forAttr:"grid-comment",labelTitle:"Your comment",textAreaClassName:"appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey",id:"grid-body",type:"text",placeholder:"Enter comment ...",rows:"3",name:"comment",value:n,onChange:this.onChange,error:a.comment})),r.a.createElement("input",{type:"submit",value:"Submit",className:"btn btn-primary"})),0==this.state.comments.length?r.a.createElement("div",{class:"alert alert-warning mt-4",role:"alert"},"No comments, be the first to comment!"):r.a.createElement("div",null,this.state.comments.map(function(t){return r.a.createElement("div",null,t.id===e.state.post.id?r.a.createElement("span",{className:"border border-white"},r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text pb-2"},r.a.createElement("small",{className:"lead"},t.comment)),t.like,r.a.createElement("button",{type:"button",onClick:e.onLikeClick.bind(e,t.id)},r.a.createElement("i",{className:"fas fa-thumbs-up pl-2 pr-3"}))))):null)})))}}]),t}(n.Component)),T=Object(b.b)(function(e){return{errors:e.errors}},{commentSubmit:function(e,t){return function(a){E.a.post("/comments/".concat(e.id),e).then(function(a){return t.push("/posts/".concat(e.id))}).catch(function(e){return a({type:"GET_ERRORS",payload:e.response.data})})}}})(Object(d.d)(S)),P=function(e){e?E.a.defaults.headers.common.Authorization=e:delete E.a.defaults.headers.common.Authorization},R=a(25),U=a.n(R),A=function(e){return{type:"SET_CURRENT_USER",payload:e}},L=function(){return function(e){localStorage.removeItem("jwtToken"),P(!1),e(A())}},I=function(){return{type:"CLEAR_CURRENT_PROFILE"}},D=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"onLogoutClick",value:function(e){e.preventDefault(),this.props.clearCurrentProfile(),this.props.logoutUser()}},{key:"render",value:function(){var e=this.props.auth,t=e.isAuthenticated,a=(e.user,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(p.b,{to:"/profile",className:"navbar-brand my-2 ml-3"},"My Profile"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/post",className:"nav-link"},"Posts")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/create",className:"nav-link"},"Create"))),r.a.createElement("form",{className:"form-inline pt-2 pb-2 my-2 mr-4 my-lg-0"},r.a.createElement("a",{href:"#",onClick:this.onLogoutClick.bind(this),className:"btn btn-outline-danger my-2 mr-3 my-sm-0"},"Logout"))))),n=r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(p.b,{to:"/",className:"navbar-brand my-2 ml-3"},"IdeaSpace"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(p.b,{to:"/",className:"nav-link"},"Home",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/post",className:"nav-link"},"Posts"))),r.a.createElement("form",{className:"form-inline pt-2 pb-2 my-2 mr-4 my-lg-0"},r.a.createElement(p.b,{to:"/login",className:"btn btn-outline-success my-2 mr-3 my-sm-0"},"Login"),r.a.createElement(p.b,{to:"/signup",className:"btn btn-outline-primary my-2 my-sm-0"},"Sign Up"))));return r.a.createElement("div",null,t?a:n)}}]),t}(n.Component),_=Object(b.b)(function(e){return{auth:e.auth}},{logoutUser:L,clearCurrentProfile:I})(D),B=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("footer",{className:"page-footer font-small bg-light text-center"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 mt-5 ml-4"},r.a.createElement("div",{className:"mb-5 flex-center"},r.a.createElement("a",{className:"fb-ic",href:"https://www.facebook.com/",target:"_blank"},r.a.createElement("i",{className:"fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"}," ")),r.a.createElement("a",{className:"tw-ic",href:"https://twitter.com/",target:"_blank"},r.a.createElement("i",{className:"fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"}," ")),r.a.createElement("a",{className:"li-ic",href:"https://www.linkedin.com/",target:"_blank"},r.a.createElement("i",{className:"fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"}," ")),r.a.createElement("a",{className:"ins-ic",href:"https://www.instagram.com",target:"_blank"},r.a.createElement("i",{className:"fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"}," ")))))),r.a.createElement("div",{className:"footer-copyright text-center py-3"},"IdeaSpace"," ",2019===(new Date).getFullYear()?(new Date).getFullYear():"2019 - "+(new Date).getFullYear())))}}]),t}(n.Component),F=a(40),G=a.n(F),q=a(41),M=a.n(q),W=a(42),Y=a.n(W),z=a(43),H=a.n(z),J=a(44),K=a.n(J),V=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"height-bg"},r.a.createElement("div",{className:"row h-100 pl-4"},r.a.createElement("div",{className:"col-6 col-md-4 text-center my-auto","uk-scrollspy":"cls: uk-animation-fade; repeat: true"},r.a.createElement("h1",{className:"display-1"},"IdeaSpace"),r.a.createElement("h3",null,"A web blogging application")),r.a.createElement("div",{className:"col-12 col-md-8","uk-scrollspy":"cls: uk-animation-slide-right-small; repeat: true"},r.a.createElement("img",{src:G.a,alt:""})))),r.a.createElement("div",{className:"pb-5 pt-5"},r.a.createElement("h2",{className:"font-weight-bold text-center"},"Welcome to IdeaSpace!"),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("img",{src:M.a,alt:""})),r.a.createElement("div",{className:"col-6 pt-5"},r.a.createElement("h2",{className:"pb-3"},"Create blogs at a click of a button."),r.a.createElement("p",{className:"lead"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6 pt-5"},r.a.createElement("h2",{className:"pb-3"},"Accessible everywhere."),r.a.createElement("p",{className:"lead"},"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),r.a.createElement("div",{className:"col-6"},r.a.createElement("img",{src:Y.a,alt:""}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("img",{src:H.a,alt:""})),r.a.createElement("div",{className:"col-6 pt-4"},r.a.createElement("h2",{className:"pb-3"},"Grow your network."),r.a.createElement("p",{className:"lead"},"Venenatis a condimentum vitae sapien pellentesque habitant morbi. Pretium fusce id velit ut tortor pretium viverra. Cursus eget nunc scelerisque viverra mauris in aliquam sem. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Dolor purus non enim praesent elementum facilisis."))),r.a.createElement("hr",null),r.a.createElement("h2",{className:"font-weight-bold text-center pt-3 pb-4"},"Got a question?"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("h3",{className:"pb-3"},"Contact us through social media!"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-2"},r.a.createElement("i",{className:"fas fa-envelope-open-text fa-3x pb-4 pb-2"}),r.a.createElement("br",null),r.a.createElement("i",{className:"fab fa-facebook fa-3x pb-4"}),r.a.createElement("br",null),r.a.createElement("i",{className:"fab fa-twitter fa-3x"})),r.a.createElement("div",{className:"col"},r.a.createElement("p",{className:"lead pt-2"},"horizon.william14@gmail.com"),r.a.createElement("p",{className:"lead pt-5"},"@IdeaSpace"),r.a.createElement("p",{className:"lead pt-5"},"@IdeaSpace")))),r.a.createElement("div",{className:"col-6"},r.a.createElement("img",{src:K.a,alt:""}))))))}}]),t}(n.Component),$=a(45),Q=a.n($),X=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={posts:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("/posts").then(function(t){e.setState({posts:t.data}),console.log(e.state.posts)})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container",style:{marginBottom:"575px"}},r.a.createElement("h1",{className:"display-3 text-center pt-3 pb-1"},"Browse recent posts"),r.a.createElement("img",{src:Q.a,alt:""}),r.a.createElement("h2",{className:"font-weight-bold text-center"},"Featured Posts"),r.a.createElement("hr",{className:"pt-3 pb-4"}),this.state.posts.map(function(e){return r.a.createElement("div",null,r.a.createElement(p.b,{to:"/show/".concat(e.id)},r.a.createElement("img",{style:{display:"block"},className:"mr-auto ml-auto",src:"".concat(e.imageURL),alt:""})),r.a.createElement("h3",{className:"font-weight-bold pt-2"},e.title),r.a.createElement("p",{className:"lead pt-1"},e.subTitle),r.a.createElement("p",{className:"text-muted pt-3"},"Created by: ",e.name),r.a.createElement("hr",{className:"pt-2 pb-3"}))})))}}]),t}(n.Component),Z=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onChange=function(e){a.setState(Object(h.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault();var t={email:a.state.email,fullname:a.state.fullname,password:a.state.password};a.props.registerUser(t,a.props.history)},a.state={email:"",fullname:"",password:""},a.onChange=a.onChange.bind(Object(g.a)(a)),a.onSubmit=a.onSubmit.bind(Object(g.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"render",value:function(){var e=this.state,t=e.email,a=e.fullname,n=e.password;return r.a.createElement("div",{className:"container pt-5",style:{marginBottom:"300px"}},r.a.createElement("form",{onSubmit:this.onSubmit,className:"form-signin"},r.a.createElement("h1",{className:"h3 mb-3 display-4 text-center"},"Signup Here"),r.a.createElement("label",{for:"inputUsername",className:"sr-only"},"Username"),r.a.createElement("input",{type:"email",name:"email",id:"inputEmail",className:"form-control mb-3",placeholder:"Username",value:t,onChange:this.onChange}),r.a.createElement("label",{for:"inputPassword",className:"sr-only"},"Password"),r.a.createElement("input",{type:"password",name:"password",id:"inputPassword",className:"form-control mb-3",placeholder:"Password",value:n,onChange:this.onChange}),r.a.createElement("label",{for:"inputFullname",className:"sr-only"},"Full Name"),r.a.createElement("input",{type:"text",name:"fullname",id:"inputEmail",className:"form-control mb-3",placeholder:"Fullname",value:a,onChange:this.onChange}),r.a.createElement("button",{className:"btn btn-lg btn-primary btn-block mb-2",type:"submit"},"Sign Up"),r.a.createElement("p",{className:"lead mt-2"},"Already have an account? ",r.a.createElement(p.b,{to:"/login"},"Login here."))))}}]),t}(n.Component),ee=Object(b.b)(function(e){return{auth:e.auth}},{registerUser:function(e,t){return function(a){E.a.post("/api/auth/register",e).then(function(e){t.push("/login")}).catch(function(e){return console.log(e)})}}})(Z),te=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onChange=function(e){a.setState(Object(h.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault();var t={email:a.state.email,password:a.state.password};a.props.loginUser(t)},a.state={email:"",password:""},a.onChange=a.onChange.bind(Object(g.a)(a)),a.onSubmit=a.onSubmit.bind(Object(g.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"render",value:function(){var e=this.state,t=e.email,a=e.password;return r.a.createElement("div",{className:"container pt-5",style:{marginBottom:"400px"}},r.a.createElement("form",{onSubmit:this.onSubmit,className:"form-signin"},r.a.createElement("h1",{className:"h3 mb-3 display-4 text-center"},"Login into IdeaSpace"),r.a.createElement("label",{for:"inputEmail",className:"sr-only"},"Email address"),r.a.createElement("input",{type:"email",name:"email",id:"inputEmail",className:"form-control mb-3",placeholder:"Email",value:t,onChange:this.onChange}),r.a.createElement("label",{for:"inputPassword",className:"sr-only"},"Password"),r.a.createElement("input",{type:"password",name:"password",id:"inputPassword",className:"form-control mb-3",placeholder:"Password",value:a,onChange:this.onChange}),r.a.createElement("button",{className:"btn btn-lg btn-primary btn-block mb-2",type:"submit"},"Sign in")),r.a.createElement("p",{className:"lead mt-3"},"Don't have an account? ",r.a.createElement(p.b,{to:"/signup"},"Sign up today!")))}}]),t}(n.Component),ae=Object(b.b)(function(e){return{auth:e.auth}},{loginUser:function(e){return function(t){E.a.post("/api/auth/login",e).then(function(e){var a=e.data.token;localStorage.setItem("jwtToken",a),P(a);var n=U()(a);t(A(n))})}}})(te),ne=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onChange=function(e){a.setState(Object(h.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault();var t={profilePic:a.state.profilePic,bgPic:a.state.bgPic,bioInfo:a.state.bioInfo};a.props.submitProfile(t,a.props.history)},a.state={users:[],profilePic:"",bgPic:"",bioInfo:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("/api/products").then(function(t){e.setState({users:t.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this.state,t=e.profilePic,a=e.bgPic,n=e.bioInfo;return r.a.createElement("div",{className:"container pt-5",style:{marginBottom:"500px"}},r.a.createElement("h1",{className:"display-4"},"Configure Profile Settings"),r.a.createElement("form",{className:"pt-3",onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"profilePic"},"Profile picture URL"),r.a.createElement("input",{type:"text",className:"form-control",id:"profilePic",name:"profilePic",value:t,onChange:this.onChange,placeholder:"Enter image address"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"bgPic"},"Background picture URL"),r.a.createElement("input",{type:"text",className:"form-control",id:"bgPic",name:"bgPic",value:a,onChange:this.onChange,placeholder:"Enter image address"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"bioInfo"},"Tell us about yourself"),r.a.createElement("textarea",{className:"form-control",id:"bioInfo",rows:"4",placeholder:"Enter as much as you would like . . .",name:"bioInfo",value:n,onChange:this.onChange})),r.a.createElement("input",{type:"submit",value:"Submit",className:"btn btn-block btn-lg btn-primary"})))}}]),t}(n.Component),re=Object(b.b)(function(e){return{auth:e.auth}},{submitProfile:function(e,t){return function(a){E.a.post("/createprofile",e).then(function(e){return t.push("/profile")}).catch(function(e){return console.log(e)})}}})(ne),le=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={profile:[],posts:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("/displayprofile").then(function(t){e.setState({profile:t.data})}).catch(function(e){return console.log(e)}),E.a.get("/posts").then(function(t){e.setState({posts:t.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container pt-5"},this.state.profile.map(function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"profile-img"},r.a.createElement("img",{className:"img-responsive",src:"".concat(e.bgPic)}),r.a.createElement("img",{className:"img-circle img-responsive",src:"".concat(e.profilePic)})),r.a.createElement("p",{className:"lead pt-5",style:{marginTop:"50px"}},e.bioInfo))}),r.a.createElement("h2",{className:"display-4 pt-5",style:{marginTop:"50px"}},"Check out my posts!"),this.state.posts.map(function(e){return r.a.createElement("div",null,r.a.createElement(p.b,{to:"/show/".concat(e.id)},r.a.createElement("img",{style:{display:"block"},className:"mr-auto ml-auto",src:"".concat(e.imageURL),alt:""})),r.a.createElement("h3",{className:"font-weight-bold pt-2"},e.title),r.a.createElement("p",{className:"lead pt-1"},e.subTitle),r.a.createElement("p",{className:"text-muted pt-3"},"Created by: ",e.name),r.a.createElement("hr",{className:"pt-2 pb-3"}))}))}}]),t}(n.Component),oe=(a(84),a(19)),se=a(46),ie={},ce=a(18),me={post:null,posts:null},ue={comment:null,comments:null},pe=function(e){return void 0===e||null===e||"object"===typeof e&&0===Object.keys(e).length||"string"===typeof e&&0===e.trim().length},de={isAuthenticated:!1,user:{}},be={admin:null},he=Object(oe.c)({errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.payload;default:return e}},post:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_POST":return Object(ce.a)({},e,{post:t.payload});default:return e}},comment:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_COMMENTS":case"GET_LIKES":return Object(ce.a)({},e,{comments:t.payload});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(ce.a)({},e,{isAuthenticated:!pe(t.payload),user:t.payload});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be;switch((arguments.length>1?arguments[1]:void 0).type){case"CLEAR_CURRENT_PROFILE":return Object(ce.a)({},e,{admin:null});default:return e}}}),ge=[se.a],fe=Object(oe.d)(he,{},oe.a.apply(void 0,ge));if(localStorage.jwtToken){P(localStorage.jwtToken);var Ee=U()(localStorage.jwtToken);fe.dispatch(A(Ee));var ve=Date.now()/1e3;Ee.exp<ve&&(fe.dispatch(L()),fe.dispatch({type:"CLEAR_CURRENT_PROFILE"}),window.location.href="/login")}var ye=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(b.a,{store:fe},r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(_,null),r.a.createElement(d.a,{exact:!0,path:"/",component:V}),r.a.createElement(d.a,{exact:!0,path:"/edit/:id",component:w}),r.a.createElement(d.a,{exact:!0,path:"/create",component:j}),r.a.createElement(d.a,{exact:!0,path:"/show/:id",component:T}),r.a.createElement(d.a,{exact:!0,path:"/post",component:X}),r.a.createElement(d.a,{exact:!0,path:"/signup",component:ee}),r.a.createElement(d.a,{exact:!0,path:"/login",component:ae}),r.a.createElement(d.a,{exact:!0,path:"/dashboard",component:re}),r.a.createElement(d.a,{exact:!0,path:"/profile",component:le}),r.a.createElement(B,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ye,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[47,1,2]]]);
//# sourceMappingURL=main.73edf82c.chunk.js.map