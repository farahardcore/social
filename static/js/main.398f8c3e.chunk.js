(this.webpackJsonpmarvel_app=this.webpackJsonpmarvel_app||[]).push([[0],{129:function(e,t,n){e.exports={friends:"Friends_friends__1n_fF"}},134:function(e,t,n){e.exports=n.p+"static/media/images.904467c3.jfif"},135:function(e,t,n){e.exports=n.p+"static/media/Pulse-1s-200px.cf5df366.svg"},15:function(e,t,n){e.exports={nav:"Navbar_nav__10lsR",item:"Navbar_item__3xH-R",active:"Navbar_active__2iq8d"}},162:function(e,t,n){e.exports=n(288)},245:function(e,t,n){},246:function(e,t,n){},288:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(7),r=n(94),o=n(9),s=n.n(o),c=n(18),i=n(41),u=n(8),l=n(128).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"10a0b773-bc02-42ab-8faa-a84175b9a08b"}}),p=function(e,t){return l.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},m=function(e){return l.post("follow/".concat(e)).then((function(e){return e.data.resultCode}))},f=function(e){return l.delete("follow/".concat(e)).then((function(e){return e.data.resultCode}))},d=function(e){return l.get("profile/".concat(e)).then((function(e){return e.data}))},g=function(e){return l.get("profile/status/".concat(e))},h=function(e){return l.put("profile/status",{status:e})},E=function(){return l.get("auth/me")},v=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return l.post("auth/login",{email:e,password:t,rememberMe:n})},b=function(){return l.delete("auth/login")},_={posts:[{id:5,message:"How much is the fish?",likesCount:11}],newPostText:"heyhey",profile:null,status:""},O=function(e){return{type:"SET_USER_PROFILE",profile:e}},w=function(e){return{type:"SET_STATUS",status:e}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":var n={id:7,message:t.newPostBody,likesCount:0};return Object(u.a)({},e,{posts:[].concat(Object(i.a)(e.posts),[n]),newPostText:""});case"SET_USER_PROFILE":return Object(u.a)({},e,{profile:t.profile});case"SET_STATUS":return Object(u.a)({},e,{status:t.status});case"DELETE_POST":return Object(u.a)({},e,{posts:e.posts.filter((function(e){return e.id!==t.postId}))});default:return e}},S=n(0),y=n.n(S),P=n(129),k=n.n(P),N=function(e){return y.a.createElement("div",{className:k.a.friends},y.a.createElement("img",{alt:"",src:e.src}))},T={friends:[{id:1,src:"https://cdn.iconscout.com/icon/premium/png-256-thumb/marvel-1502922-1273137.png"},{id:1,src:"https://66.media.tumblr.com/2baea900172949be0a2c460cfe48fff8/tumblr_p9d3rzjswE1wmrvkdo7_250.png"},{id:1,src:"https://66.media.tumblr.com/b6fdaeba44abe187c44e7b07fc896cbf/tumblr_p9d3rzjswE1wmrvkdo2_r1_250.png"}]},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FRIENDS_LIST":return e.friends.map((function(e){return y.a.createElement(N,{src:e.src})})),e;default:return e}},C={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},U=function(e,t){return{type:"TOGGLE_IS_FOLLOWING",isFetching:e,userId:t}},x=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},A=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(u.a)({},e,{users:e.users.map((function(e){return e.id===t.userID?Object(u.a)({},e,{followed:!0}):e}))});case"UNFOLLOW":return Object(u.a)({},e,{users:e.users.map((function(e){return e.id===t.userID?Object(u.a)({},e,{followed:!1}):e}))});case"SET_USERS":return Object(u.a)({},e,{users:t.users});case"SET_CURRENT_PAGE":return Object(u.a)({},e,{currentPage:t.currentPage});case"SET_USERS_TOTAL_COUNT":return Object(u.a)({},e,{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(u.a)({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING":return Object(u.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(i.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},L=n(42),D={isAuth:!1,id:null,login:null,email:null},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USERS_DATA":return Object(u.a)({},e,{},t.payload,{isAuth:!0});default:return e}},B=function(e,t,n,a){return{type:"SET_USERS_DATA",payload:{id:e,email:t,login:n,isAuth:a}}},M=function(){return function(){var e=Object(c.a)(s.a.mark((function e(t){var n,a,r,o,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,E();case 3:0===(n=e.sent).data.resultCode&&(a=n.data.data,r=a.id,o=a.email,c=a.login,t(B(r,o,c,!0)));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},z=n(130),G=n(127),H={initialized:!1},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INITIALIZED":return Object(u.a)({},e,{initialized:!0});default:return e}},Y=Object(a.c)({dialogsPage:r.b,profilePage:j,sidebar:I,usersPage:F,auth:R,app:W,form:G.a}),J=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||a.d,q=Object(a.e)(Y,J(Object(a.a)(z.a)));window.__store__=q;var X=q,K=n(60),Z=n.n(K),Q=(n(245),n(25)),V=n(26),$=n(27),ee=n(28),te=(n(246),n(15)),ne=n.n(te),ae=n(12),re=function(e){var t=function(){e.dispatch({type:"FRIENDS_LIST"})};return y.a.createElement("nav",{className:ne.a.nav},y.a.createElement("div",{className:ne.a.item},y.a.createElement(ae.b,{activeClassName:ne.a.active,to:"/profile"},"Profile")),y.a.createElement("div",{className:ne.a.item},y.a.createElement(ae.b,{activeClassName:ne.a.active,to:"/dialogs"},"Dialogs")),y.a.createElement("div",{className:ne.a.item},y.a.createElement(ae.b,{activeClassName:ne.a.active,to:"/users"},"Users")),y.a.createElement("div",{className:ne.a.item},y.a.createElement(ae.b,{activeClassName:ne.a.active,to:"/news"},"News")),y.a.createElement("div",{className:ne.a.item},y.a.createElement(ae.b,{activeClassName:ne.a.active,to:"/music"},"Music")),y.a.createElement("div",{className:ne.a.item},y.a.createElement(ae.b,{activeClassName:ne.a.active,to:"/settings"},"Settings")),t)},oe=n(31),se=n(10),ce=n(134),ie=n.n(ce),ue=n(86),le=n.n(ue);var pe=function(e){for(var t=[],n=1;n<=20;n++)t.push(n);return y.a.createElement("div",null,y.a.createElement("div",null,t.map((function(t){return y.a.createElement("span",{className:e.currentPage===t&&le.a.selectedPAge,onClick:function(n){e.onPageChanged(t)}},t)}))),e.users.map((function(t){return y.a.createElement("div",{key:t.id},y.a.createElement("span",null,y.a.createElement(ae.b,{to:"profile/"+t.id},y.a.createElement("div",null,y.a.createElement("img",{alt:"logo",src:null!=t.photos.small?t.photos.small:ie.a,className:le.a.photo}))),y.a.createElement("div",null,t.followed?y.a.createElement("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)}},"Unfollow"):y.a.createElement("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)}},"Follow"))),y.a.createElement("span",null,y.a.createElement("span",null,y.a.createElement("div",null,t.name),y.a.createElement("div",null,t.status)),y.a.createElement("span",null,y.a.createElement("div",null,"user.location.city"),y.a.createElement("div",null,"user.location.country"))))})))},me=n(135),fe=n.n(me),de=function(e){return y.a.createElement("div",null,y.a.createElement("img",{alt:"",src:fe.a}))},ge=n(136),he=Object(ge.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),Ee=function(e){return e.usersPage.pageSize},ve=function(e){return e.usersPage.totalUsersCount},be=function(e){return e.usersPage.currentPage},_e=function(e){return e.usersPage.isFetching},Oe=function(e){return e.usersPage.followingInProgress},we=function(e){Object(ee.a)(n,e);var t=Object($.a)(n);function n(){var e;Object(Q.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){e.props.setUsers(t,e.props.pageSize)},e}return Object(V.a)(n,[{key:"componentDidMount",value:function(){this.props.setUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return y.a.createElement(y.a.Fragment,null,this.props.isFetching?y.a.createElement(de,null):null,y.a.createElement(pe,{totalUsersCOunt:this.props.totalUserCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unFollow,followingInProgress:this.props.followingInProgress}))}}]),n}(y.a.Component),je=Object(a.d)(Object(se.b)((function(e){return{users:he(e),pageSize:Ee(e),totalUsersCount:ve(e),currentPage:be(e),isFetching:_e(e),followingInProgress:Oe(e)}}),{follow:function(e){return function(){var t=Object(c.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(U(!0,e)),t.next=3,m(e);case 3:0===t.sent&&n({type:"FOLLOW",userID:e}),n(U(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unFollow:function(e){return function(){var t=Object(c.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(U(!0,e)),t.next=3,f(e);case 3:0===t.sent&&n({type:"UNFOLLOW",userID:e}),n(U(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setUsers:function(e,t){return function(){var n=Object(c.a)(s.a.mark((function n(a){var r;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(A(!0)),n.next=4,p(e,t);case 4:r=n.sent,a(A(!1)),a(x(e)),a({type:"SET_USERS",users:r.items}),a({type:"SET_USERS_TOTAL_COUNT",count:r.totalCount});case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(we),Se=n(87),ye=n.n(Se),Pe=n(93),ke=function(e){console.log(e);var t=Object(S.useState)(!1),n=Object(Pe.a)(t,2),a=n[0],r=n[1],o=Object(S.useState)(e.status),s=Object(Pe.a)(o,2),c=s[0],i=s[1];Object(S.useEffect)((function(){i(e.status)}),[e.status]);return y.a.createElement("div",null,y.a.createElement("div",null,!a&&y.a.createElement("div",null,y.a.createElement("span",{onDoubleClick:function(){r(!0)}},e.status||"----","  ")),a&&y.a.createElement("div",null,y.a.createElement("input",{onChange:function(e){i(e.currentTarget.value)},autoFocus:!0,value:c,onBlur:function(){r(!1),e.updateUserStatus(c)}}))))},Ne=function(e){return e.profile?y.a.createElement("div",null,y.a.createElement("div",{className:ye.a.avatar},y.a.createElement("img",{alt:"hey",src:"https://esquire.kz/wp-content/uploads/2018/04/3367434-aiw_master-1-960x540.jpg"})),y.a.createElement("div",{className:ye.a.descriptionBlock},y.a.createElement("img",{alt:"hey",src:e.profile.photos.large}),y.a.createElement("span",null,e.profile.fullName),y.a.createElement(ke,{status:e.status,updateUserStatus:e.updateUserStatus})),y.a.createElement("div",null,y.a.createElement("span",null,e.profile.aboutMe)),y.a.createElement("div",null,y.a.createElement("span",null,e.profile.lookingForAJob?"Looking for a work":"Not looking a work")),y.a.createElement("div",null,y.a.createElement("span",null,e.profile.lookingForAJobDescription))):y.a.createElement(de,null)},Te=n(88),Ie=n.n(Te),Ce=n(89),Ue=n.n(Ce),xe=function(e){return y.a.createElement("div",{className:Ue.a.item},y.a.createElement("img",{alt:"",className:Ue.a.post_img,src:"https://www.freeiconspng.com/uploads/shield-marvel-icon-5.jpg"}),e.message,y.a.createElement("div",null,y.a.createElement("span",null,"Like: ",e.like)))},Ae=n(125),Fe=n(126),Le=n(37),De=n(46),Re=Object(Le.a)(50),Be=y.a.memo((function(e){var t=e.posts.map((function(e){return y.a.createElement(xe,{message:e.message,like:e.likesCount})}));return y.a.createElement("div",{className:Ie.a.postsBlock},y.a.createElement("h2",null,"My posts"),y.a.createElement("div",null,y.a.createElement(Me,{onSubmit:function(t){e.addPost(t.newPostBody)}})),y.a.createElement("div",{className:Ie.a.posts},t))})),Me=Object(Fe.a)({form:"addPostForm"})((function(e){return y.a.createElement("form",{onSubmit:e.handleSubmit},y.a.createElement(Ae.a,{component:De.b,validate:[Le.b,Re],name:"newPostBody",placeholder:"new Post"}),y.a.createElement("button",null,"add Post"))})),ze=Be,Ge=Object(se.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(function(e){return{type:"ADD_POST",newPostBody:e}}(t))}}}))(ze),He=function(e){return y.a.createElement("div",null,y.a.createElement(Ne,{status:e.status,updateUserStatus:e.updateUserStatus,profile:e.profile}),y.a.createElement(Ge,null))},We=function(e){Object(ee.a)(n,e);var t=Object($.a)(n);function n(){return Object(Q.a)(this,n),t.apply(this,arguments)}return Object(V.a)(n,[{key:"componentDidMount",value:function(){console.log(this.props);var e=this.props.match.params.userId;e||(e=5945)||this.props.history.push("/login"),this.props.setUserProfile(e),this.props.getUserStatus(e)}},{key:"render",value:function(){return y.a.createElement(He,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateUserStatus:this.props.updateUserStatus}))}}]),n}(y.a.Component),Ye=Object(a.d)(Object(se.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,ownUserId:e.auth.id,isAuth:e.auth.isAuth}}),{setUserProfile:function(e){return function(){var t=Object(c.a)(s.a.mark((function t(n){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(e);case 2:a=t.sent,n(O(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getUserStatus:function(e){return function(){var t=Object(c.a)(s.a.mark((function t(n){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(e);case 2:a=t.sent,n(w(a.data));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateUserStatus:function(e){return function(){var t=Object(c.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h(e);case 2:0===t.sent.data.resultCode&&n(w(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),oe.f)(We),Je=n(92),qe=n.n(Je),Xe=function(e){console.log(e);var t=e.logout;return y.a.createElement("header",{className:qe.a.header},y.a.createElement("img",{alt:"logo",src:"https://img2.freepng.es/20180331/aye/kisspng-iron-man-captain-america-logo-marvel-cinematic-uni-avengers-5abf62fa369331.0376927015224921542236.jpg"}),y.a.createElement("div",{className:qe.a.loginBlock},e.isAuth?e.login:y.a.createElement(ae.b,{to:"/login/"},"Login"),e.isAuth?y.a.createElement("button",null,t):""))},Ke=function(e){Object(ee.a)(n,e);var t=Object($.a)(n);function n(){return Object(Q.a)(this,n),t.apply(this,arguments)}return Object(V.a)(n,[{key:"render",value:function(){return y.a.createElement(Xe,this.props)}}]),n}(y.a.Component),Ze=Object(se.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(c.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:0===e.sent.data.resultCode&&t(B(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Ke),Qe=n(64),Ve=n.n(Qe),$e=Object(Fe.a)({form:"Login"})((function(e){return y.a.createElement("form",{onSubmit:e.handleSubmit},y.a.createElement("div",null,y.a.createElement(Ae.a,{name:"email",placeholder:"Email",type:"text",component:De.a,validate:[Le.b]})),y.a.createElement("div",null,y.a.createElement(Ae.a,{name:"password",placeholder:"Password",type:"password",component:De.a,validate:[Le.b]})),y.a.createElement("div",null,y.a.createElement(Ae.a,{name:"rememberMe",type:"checkbox",component:"input"}),"Remember me",e.error&&y.a.createElement("div",{className:Ve.a.formSummaryError},e.error),y.a.createElement("button",null,"Login")))})),et=function(e){return y.a.createElement("div",null,y.a.createElement("h1",null,"LOGIN"),y.a.createElement($e,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))},tt=Object(se.b)((function(e){return{login:e.auth.login}}),{login:function(e,t,n){return function(){var a=Object(c.a)(s.a.mark((function a(r){var o,c;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,v(e,t,n);case 2:0===(o=a.sent).data.resultCode?r(M()):(c=o.data.messages.length>0?o.data.messages[0]:"check the correctness of the entered data",r(Object(L.a)("Login",{_error:c})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return y.a.createElement(et,{login:e.login})})),nt=y.a.lazy((function(){return n.e(3).then(n.bind(null,290))})),at=function(e){Object(ee.a)(n,e);var t=Object($.a)(n);function n(){return Object(Q.a)(this,n),t.apply(this,arguments)}return Object(V.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?y.a.createElement("div",{className:"app-wrapper"},y.a.createElement(Ze,null),y.a.createElement(re,{state:this.props.state,dispatch:this.props.dispatch}),y.a.createElement("div",{className:"app-wrapper-content"},y.a.createElement(oe.b,{path:"/dialogs",render:(e=nt,function(t){return y.a.createElement(y.a.Suspense,{fallback:y.a.createElement(de,null)},y.a.createElement(e,t))})}),y.a.createElement(oe.b,{path:"/profile/:userId?",render:function(){return y.a.createElement(Ye,null)}}),y.a.createElement(oe.b,{path:"/users",render:function(){return y.a.createElement(je,null)}}),y.a.createElement(oe.b,{path:"/login",render:function(){return y.a.createElement(tt,null)}}))):y.a.createElement(de,null);var e}}]),n}(y.a.Component),rt=Object(se.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(M);Promise.all([t]).then((function(t){console.log(t),e({type:"SET_INITIALIZED"})}))}}})(at);Z.a.render(y.a.createElement(ae.a,null,y.a.createElement(se.a,{store:X},y.a.createElement(rt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},37:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"max length is ".concat(e," symbols")}}},46:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l}));var a=n(67),r=n(0),o=n.n(r),s=n(64),c=n.n(s),i=function(e){e.input;var t=e.meta,n=(e.child,Object(a.a)(e,["input","meta","child"])),r=t.touched&&t.error;return o.a.createElement("div",{className:r?c.a.formController:""},o.a.createElement("div",null,n.children),r&&o.a.createElement("span",null,t.error))},u=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return o.a.createElement(i,e," ",o.a.createElement("textarea",Object.assign({},t,n))," ")},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return o.a.createElement(i,e," ",o.a.createElement("input",Object.assign({},t,n))," ")}},64:function(e,t,n){e.exports={formController:"FormControls_formController__2nejx",formSummaryError:"FormControls_formSummaryError__1EQe4"}},86:function(e,t,n){e.exports={photo:"users_photo__AIauk",selectedPAge:"users_selectedPAge__EfTYy"}},87:function(e,t,n){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__1r69B",avatar:"ProfileInfo_avatar__1jmXn"}},88:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__3H1jN",posts:"MyPosts_posts__rGfw3"}},89:function(e,t,n){e.exports={item:"Post_item__26OKd"}},92:function(e,t,n){e.exports={header:"Header_header__1PU1-",loginBlock:"Header_loginBlock__RpTea"}},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(41),r=n(8),o={dialogs:[{id:1,name:"Maksim"},{id:2,name:"Maks"},{id:3,name:"Masha"},{id:4,name:"Yo"},{id:5,name:"Egor"}],messages:[{id:1,message:"Hi"},{id:2,message:"Hello"},{id:3,message:"How are you?"},{id:4,message:"What are you doing?"},{id:5,message:"How much is the fish?"}]},s=function(e){return{type:"ADD_NEW_MESSAGE_BODY",newMessageBody:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_NEW_MESSAGE_BODY":var n={id:7,message:t.newMessageBody};return Object(r.a)({},e,{messages:[].concat(Object(a.a)(e.messages),[n])});default:return e}}}},[[162,1,2]]]);
//# sourceMappingURL=main.398f8c3e.chunk.js.map