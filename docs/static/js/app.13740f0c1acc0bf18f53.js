webpackJsonp([1],{193:function(t,e){},194:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"day",class:t.theme},[a("div",{staticClass:"icon"},[t.thisDay.reward?a("i",{staticClass:"fal",class:t.thisDay.reward}):a("span",[t._v("·")])])])},i=[],s={render:n,staticRenderFns:i};e.a=s},195:function(t,e){},196:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"day today",class:[t.theme]},[a("div",[a("div",[t._v(t._s(t.formatDate))]),t._v(" "),a("div",{staticClass:"list"},t._l(t.list,function(e,n){return a("div",{key:n,staticClass:"thing",class:{complete:e.done},on:{click:function(a){t.toggleDone(n,e)}}},[a("div",{staticClass:"check"},[a("i",{staticClass:"far fa-square",class:[e.done?"hide":"show"]}),t._v(" "),a("i",{staticClass:"fas fa-check-square",class:[e.done?"show":"hide"]})]),t._v(" "),a("div",{staticClass:"name"},[t._v("\n          "+t._s(e.name)+"\n        ")])])})),t._v(" "),a("button",{staticClass:"fin",class:[t.canFinish?"enabled":"disabled"],on:{click:t.giftReward}},[t._v("\n      FIN\n    ")])]),t._v(" "),this.thisDay.reward?a("div",{staticClass:"icon"},[a("i",{staticClass:"fal",class:t.thisDay.reward})]):t._e()])},i=[],s={render:n,staticRenderFns:i};e.a=s},197:function(t,e,a){"use strict";function n(t){a(198)}var i=a(74),s=a(199),r=a(4),o=n,c=r(i.a,s.a,!1,o,null,null);e.a=c.exports},198:function(t,e){},199:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"day tomorrow",class:t.theme},[t._m(0)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("\n    Tomorrow"),a("br"),t._v("\n    brings…\n    "),a("br"),t._v(" "),a("br")])}],s={render:n,staticRenderFns:i};e.a=s},200:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"timeline",class:{dayDone:this.timeline[1].reward}},[a("tomorrow",{attrs:{thisDay:t.timeline[0]}}),t._v(" "),a("today",{attrs:{thisDay:t.timeline[1],timeline:t.timeline,list:t.list,rewards:t.rewards}}),t._v(" "),t._l(t.notToday,function(t,e){return a("day",{key:e,attrs:{thisDay:t}})})],2)},i=[],s={render:n,staticRenderFns:i};e.a=s},201:function(t,e,a){"use strict";function n(t){a(202)}var i=a(75),s=a(231),r=a(4),o=n,c=r(i.a,s.a,!1,o,"data-v-4746695d",null);e.a=c.exports},202:function(t,e){},231:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"timeline"},t._l(t.timeline,function(e,n){return a("today",{key:n,attrs:{thisDay:e,list:t.list,rewards:t.rewards}})}))])},i=[],s={render:n,staticRenderFns:i};e.a=s},232:function(t,e,a){"use strict";var n=function(){console.log("%c __, _ _, _ _ __,\n |_  | |\\ | | |_)\n |   | | \\| | | \\","color: #eb316f")};e.a=n},25:function(t,e,a){"use strict";function n(t){a(193)}var i=a(71),s=a(194),r=a(4),o=n,c=r(i.a,s.a,!1,o,null,null);e.a=c.exports},32:function(t,e,a){"use strict";e.a={name:"app"}},33:function(t,e,a){"use strict";var n=a(90),i=a.n(n),s=a(9),r=a.n(s),o=a(69),c=a(70),f=a(25),l=a(72),u=a(197);e.a={name:"timeline",data:function(){return{list:[{name:"Wake up",done:!0},{name:"Eat breakfast",done:!0},{name:"Ping friend",done:!0},{name:"Read",done:!0},{name:"Meditate",done:!0}],rewards:o.a,themes:c.a,timeline:[{day:"2018-01-01T08:00:00.000Z",theme:"genepersimmons",reward:"fa-bomb"},{day:"2017-12-31T08:00:00.000Z",theme:"megaviolet",reward:"fa-leaf"},{day:"2017-12-30T08:00:00.000Z",theme:"genepersimmons",reward:"fa-gem"},{day:"2017-12-29T08:00:00.000Z",theme:"",reward:""}]}},watch:{list:{handler:function(){},deep:!0},timeline:{handler:function(){},deep:!0}},methods:{randomTheme:function(){for(var t=[],e=0;e<this.timeline.length&&t.length<2;)this.timeline[e].theme&&t.push(this.timeline[e].theme),e+=1;var a=JSON.parse(i()(this.themes));return a=a.filter(function(e){return!t.includes(e)}),a[Math.floor(Math.random()*a.length)]}},created:function(){var t=r.a.startOfDay(r.a.format(new Date));0===this.timeline.length&&this.timeline.unshift({day:t,theme:"",reward:""});for(var e=JSON.parse(i()(this.timeline[0]));!r.a.isTomorrow(e.day);)e.day=r.a.addDays(e.day,1),this.timeline.unshift({day:e.day,theme:"",reward:""});""===this.timeline[1].theme&&(this.timeline[1].theme=this.randomTheme()),""===this.timeline[0].theme&&(this.timeline[0].theme=this.randomTheme())},computed:{notToday:function(){return this.timeline.slice(2,this.timeline.length)}},components:{day:f.a,today:l.a,tomorrow:u.a}}},69:function(t,e,a){"use strict";var n=["fa-anchor","fa-clock","fa-balance-scale","fa-battery-bolt","fa-beer","fa-bell","fa-bicycle","fa-birthday-cake","fa-bomb","fa-book","fa-bug","fa-camera-retro","fa-club","fa-coffee","fa-compass","fa-envelope","fa-fighter-jet","fa-flag","fa-futbol","fa-gamepad","fa-gem","fa-gift","fa-globe","fa-headphones","fa-heart","fa-jack-o-lantern","fa-leaf","fa-lemon","fa-lightbulb","fa-magic","fa-magnet","fa-map-pin","fa-medkit","fa-microchip","fa-microphone-alt","fa-moon","fa-paint-brush","fa-paper-plane","fa-paperclip","fa-paw","fa-pen-alt","fa-pencil-alt","fa-puzzle-piece","fa-qrcode","fa-rocket","fa-save","fa-shield-alt","fa-snowflake","fa-space-shuttle","fa-spade","fa-star","fa-sun","fa-tag","fa-thumbtack","fa-ticket-alt","fa-tree-alt","fa-trophy","fa-tv-retro","fa-umbrella","fa-usd-circle","fa-user-secret","fa-utensils-alt"];e.a=n},70:function(t,e,a){"use strict";var n=["starburst","genepersimmons","gloriousincandescence","limelife","seadrink","barbiegirl","spiltblues","megaviolet"];e.a=n},71:function(t,e,a){"use strict";var n=a(9),i=a.n(n);e.a={name:"day",props:["thisDay"],data:function(){return{}},created:function(){},computed:{formatDate:function(){return i.a.format(this.thisDay.day,"MMMM Do")},theme:function(){return""!==this.thisDay.reward||i.a.isToday(this.thisDay.day)?this.thisDay.theme:""}},methods:{}}},72:function(t,e,a){"use strict";function n(t){a(195)}var i=a(73),s=a(196),r=a(4),o=n,c=r(i.a,s.a,!1,o,"data-v-482a8dd8",null);e.a=c.exports},73:function(t,e,a){"use strict";var n=a(9),i=(a.n(n),a(25));e.a={name:"today",extends:i.a,props:["list","rewards","timeline"],data:function(){return{}},created:function(){},computed:{canFinish:function(){return this.list.every(function(t){return!0===t.done})}},methods:{toggleDone:function(t,e){this.list[t].done=!this.list[t].done},giftReward:function(){this.thisDay.reward=this.rewards[Math.floor(Math.random()*this.rewards.length)]}}}},74:function(t,e,a){"use strict";var n=a(25),i=a(9);a.n(i);e.a={name:"tomorrow",extends:n.a,props:[],data:function(){return{}},created:function(){},computed:{formatDate:function(){},theme:function(){return this.thisDay.theme}},methods:{}}},75:function(t,e,a){"use strict";var n=a(203),i=a.n(n),s=a(69),r=a(70),o=a(72);e.a={name:"test",data:function(){return{rewards:s.a,list:[{name:"Wake up",done:!0},{name:"Eat breakfast",done:!0},{name:"Ping friend",done:!0},{name:"Read",done:!0},{name:"Meditate",done:!0}],timeline:[]}},created:function(){var t=this;i()(r.a).forEach(function(e){t.timeline.unshift({theme:e,reward:t.giftReward()})}),this.timeline.unshift({theme:"",reward:this.giftReward()})},methods:{giftReward:function(){return s.a[Math.floor(Math.random()*s.a.length)]}},components:{today:o.a}}},78:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(30),i=a(82),s=(a.n(i),a(84)),r=a(86),o=a(232);Object(o.a)(),n.a.config.productionTip=!1,new n.a({el:"#app",router:r.a,template:"<App/>",components:{App:s.a}})},82:function(t,e){},84:function(t,e,a){"use strict";var n=a(32),i=a(85),s=a(4),r=s(n.a,i.a,!1,null,null,null);e.a=r.exports},85:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("main",[a("router-view")],1)])},i=[],s={render:n,staticRenderFns:i};e.a=s},86:function(t,e,a){"use strict";var n=a(30),i=a(87),s=a(88),r=a(201);n.a.use(i.a),e.a=new i.a({routes:[{path:"/",name:"Timeline",component:s.a},{path:"/test",name:"Test",component:r.a}]})},88:function(t,e,a){"use strict";function n(t){a(89)}var i=a(33),s=a(200),r=a(4),o=n,c=r(i.a,s.a,!1,o,null,null);e.a=c.exports},89:function(t,e){}},[78]);
//# sourceMappingURL=app.13740f0c1acc0bf18f53.js.map