webpackJsonp([1],{0:function(e,t,n){!function(){n(107);var e=n(108),t=n(7),o=n(36);e.enable("app:*");var r=n(209);t.initializeTouchEvents(!0),o.run(r,function(e){t.render(t.createElement(e,null),document.getElementById("main"))})}()},68:function(e,t,n){!function(){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];e.push(n[2]?"@media "+n[2]+"{"+n[1]+"}":n[1])}return e.join("")},e}}()},104:function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=l[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(a(o.parts[i],t))}else{for(var s=[],i=0;i<o.parts.length;i++)s.push(a(o.parts[i],t));l[o.id]={id:o.id,refs:1,parts:s}}}}function r(e){for(var t=[],n={},o=0;o<e.length;o++){var r=e[o],i=r[0],a=r[1],s=r[2],u=r[3],c={css:a,media:s,sourceMap:u};n[i]?n[i].parts.push(c):t.push(n[i]={id:i,parts:[c]})}return t}function i(){var e=document.createElement("style"),t=f();return e.type="text/css",t.appendChild(e),e}function a(e,t){var n,o,r;if(t.singleton){var a=m++;n=h||(h=i()),o=u.bind(null,n,a,!1),r=u.bind(null,n,a,!0)}else n=i(),o=c.bind(null,n),r=function(){n.parentNode.removeChild(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}function s(e,t,n){var o=["/** >>"+t+" **/","/** "+t+"<< **/"],r=e.lastIndexOf(o[0]),i=n?o[0]+n+o[1]:"";if(e.lastIndexOf(o[0])>=0){var a=e.lastIndexOf(o[1])+o[1].length;return e.slice(0,r)+i+e.slice(a)}return e+i}function u(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=s(e.styleSheet.cssText,t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function c(e,t){var n=t.css,o=t.media,r=t.sourceMap;if(r&&"function"==typeof btoa)try{n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(JSON.stringify(r))+" */",n='@import url("data:text/css;base64,'+btoa(n)+'")'}catch(i){}if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var l={},p=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},d=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),f=p(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,m=0;e.exports=function(e,t){if("object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},"undefined"==typeof t.singleton&&(t.singleton=d());var n=r(e);return o(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var s=n[a],u=l[s.id];u.refs--,i.push(u)}if(e){var c=r(e);o(c,t)}for(var a=0;a<i.length;a++){var u=i[a];if(0===u.refs){for(var p=0;p<u.parts.length;p++)u.parts[p]();delete l[u.id]}}}}},105:function(e,t,n){t=e.exports=n(68)(),t.push([e.id,"",""])},106:function(e,t,n){t=e.exports=n(68)(),t.push([e.id,"#douban-diary{font-size:12px;font-family:Helvetica,Arial,sans-serif}#douban-diary a{text-decoration:none;color:#669}#douban-diary .pl{line-height:150%;color:#666}#douban-diary .wrapper{width:950px;margin:0 auto}#douban-diary .global-nav{height:28px}#douban-diary .nav-sns{height:74px;margin-bottom:40px}#douban-diary .article{width:590px;padding-right:40px}#douban-diary h1{word-wrap:break-word;display:block;font-size:25px;font-weight:700;color:#494949;margin:0;padding:0 0 15px;line-height:1.1}#douban-diary .avatar{display:inline-block;height:24px;width:24px;background-color:#f9f9f9;vertical-align:middle}#douban-diary .author{margin:0 10px 0 7px}#douban-diary .post-content{font-size:13px;line-height:1.62;font-family:Arial,Helvetica,sans-serif}",""])},107:function(e,t,n){},108:function(e,t,n){!function(){function o(){return"WebkitAppearance"in document.documentElement.style||window.console&&(console.firebug||console.exception&&console.table)||navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31}function r(){var e=arguments,n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return e;var o="color: "+this.color;e=[e[0],o,"color: inherit"].concat(Array.prototype.slice.call(e,1));var r=0,i=0;return e[0].replace(/%[a-z%]/g,function(e){"%%"!==e&&(r++,"%c"===e&&(i=r))}),e.splice(i,0,o),e}function i(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function a(e){try{null==e?c.removeItem("debug"):c.debug=e}catch(t){}}function s(){var e;try{e=c.debug}catch(t){}return e}function u(){try{return window.localStorage}catch(e){}}t=e.exports=n(109),t.log=i,t.formatArgs=r,t.save=a,t.load=s,t.useColors=o;var c;c="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:u(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){return JSON.stringify(e)},t.enable(s())}()},109:function(e,t,n){!function(){function o(){return t.colors[l++%t.colors.length]}function r(e){function n(){}function r(){var e=r,n=+new Date,i=n-(c||n);e.diff=i,e.prev=c,e.curr=n,c=n,null==e.useColors&&(e.useColors=t.useColors()),null==e.color&&e.useColors&&(e.color=o());var a=Array.prototype.slice.call(arguments);a[0]=t.coerce(a[0]),"string"!=typeof a[0]&&(a=["%o"].concat(a));var s=0;a[0]=a[0].replace(/%([a-z%])/g,function(n,o){if("%%"===n)return n;s++;var r=t.formatters[o];if("function"==typeof r){var i=a[s];n=r.call(e,i),a.splice(s,1),s--}return n}),"function"==typeof t.formatArgs&&(a=t.formatArgs.apply(e,a));var u=r.log||t.log||console.log.bind(console);u.apply(e,a)}n.enabled=!1,r.enabled=!0;var i=t.enabled(e)?r:n;return i.namespace=e,i}function i(e){t.save(e);for(var n=(e||"").split(/[\s,]+/),o=n.length,r=0;o>r;r++)n[r]&&(e=n[r].replace(/\*/g,".*?"),"-"===e[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))}function a(){t.enable("")}function s(e){var n,o;for(n=0,o=t.skips.length;o>n;n++)if(t.skips[n].test(e))return!1;for(n=0,o=t.names.length;o>n;n++)if(t.names[n].test(e))return!0;return!1}function u(e){return e instanceof Error?e.stack||e.message:e}t=e.exports=r,t.coerce=u,t.disable=a,t.enable=i,t.enabled=s,t.humanize=n(110),t.names=[],t.skips=[],t.formatters={};var c,l=0}()},110:function(e,t,n){!function(){function t(e){var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(t){var n=parseFloat(t[1]),o=(t[2]||"ms").toLowerCase();switch(o){case"years":case"year":case"yrs":case"yr":case"y":return n*c;case"days":case"day":case"d":return n*u;case"hours":case"hour":case"hrs":case"hr":case"h":return n*s;case"minutes":case"minute":case"mins":case"min":case"m":return n*a;case"seconds":case"second":case"secs":case"sec":case"s":return n*i;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n}}}function n(e){return e>=u?Math.round(e/u)+"d":e>=s?Math.round(e/s)+"h":e>=a?Math.round(e/a)+"m":e>=i?Math.round(e/i)+"s":e+"ms"}function o(e){return r(e,u,"day")||r(e,s,"hour")||r(e,a,"minute")||r(e,i,"second")||e+" ms"}function r(e,t,n){return t>e?void 0:1.5*t>e?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}var i=1e3,a=60*i,s=60*a,u=24*s,c=365.25*u;e.exports=function(e,r){return r=r||{},"string"==typeof e?t(e):r["long"]?o(e):n(e)}}()},204:function(e,t,n){!function(){var t=n(7),o=n(36),r=o,i=r.RouteHandler,a=t.createClass({displayName:"App",render:function(){return t.createElement(i,null)}});e.exports=a}()},205:function(e,t,n){!function(){var t=n(7),o=n(208),r=n(206),i=t.createClass({displayName:"Cover",mixins:[o("douban-diary")],render:function(){return t.createElement("div",{id:"douban-diary"},t.createElement(r,null))}});e.exports=i}()},206:function(e,t,n){!function(){var t=n(7),o=n(207),r=t.createClass({displayName:"Home",render:function(){return t.createElement("div",null,t.createElement("div",{className:"global-nav"}),t.createElement("div",{className:"nav-sns"}),t.createElement("div",{className:"wrapper"},t.createElement("div",{className:"article"},t.createElement("div",{className:"post"},t.createElement("div",{className:"post-header"},t.createElement("h1",null,"Is it Love?"),t.createElement("div",null,t.createElement("a",{href:"#douban-diary"},t.createElement("div",{className:"avatar"})),t.createElement("a",{href:"#douban-diary",className:"author"},"Brian Kuan Wood"),t.createElement("span",{className:"pl"},"2014-03-06 18:53:50"))),t.createElement("div",{className:"post-content"},t.createElement("p",null,o.p1),t.createElement("p",null,o.p2),t.createElement("p",null,o.p3),t.createElement("p",null,o.p4),t.createElement("p",null,o.p5),t.createElement("p",null,o.p6),t.createElement("p",null,o.p7))))))}});e.exports=r}()},207:function(e,t,n){!function(){var t="Over the past few decades, it has often been said that we no longer have an addressee for our political demands. But that’s not true. We have each other. What we can no longer get from the state, the party, the union, the boss, we ask for from one another. And we provide. Lacan famously defined love as giving something you don’t have to someone who doesn’t want it.1 But love is more than a YouTube link or a URL. This beautiful negative flip of what is commonly considered the most positive force in the universe helps us begin to see love’s fullness and endless bounty, as based in emptiness and lack—in mutual loss. Love’s joy is not to be found in fulfillment, but in recognition: even though I can never return what was taken away from you, I may be the only person alive who knows what it is. I don’t have what it is you’re missing, but knowing its shape already makes a world where you can live without it.",n="Now it becomes easy to see how love translates to economic terms as a union based in mutual debt. When the debt is paid off or called in, the union dissolves. And now that pretty much everyone is in debt, love abounds! Professionals are moving back in with their parents, people are returning home to their countries to depend on their extended families, contracts are increasingly backed by personal relationships, and even the values of goods and currencies are backed less by bonds and legal tender and more by the trust and intimacy that gives them their character. Shared associations and affinities expressed over communication lines produce pockets of enormous value in an otherwise lonely ocean of random data streams. Musicians record reams of songs without ever thinking about wanting a record contract from major labels that are still struggling to understand how to make money off computer files.",o="Musicians produce music for pure communication now. Information and communication turns immaterial economy into superstition and affective projections. Capital defers down to pure communication, and what used to be an idea of the collective has become a force of conviviality in the absolute. Information-driven overstimulation and actual impoverishment may have fallen in love with each other as well, and they shack up together on an unemployed person’s Facebook page. Now that we live a constant slump, what used to be called biopolitics has been accelerated to the degree that it starts to line up with older pre-capitalist and pre-mercantile means of stabilizing exchanges. Why, after all, do you think there is so much talk about feudalism these days? And how did you suddenly get so many friends that you don’t even like? Where do you think we got all the bromance films—Hollywood romantic comedies on Platonic love between immature men with nothing in common who are nonetheless forced to improve difficult circumstances by forming bonds of intimacy and solidarity? Neighborhood currencies appear, not only in places like Greece, to keep goods and services moving when the money system breaks down. The currency could be a stone or a handshake—it doesn’t matter and doesn’t even have to be material when it’s backed by bonds of trust, by family love, or by friendship. All that is capital melts into love.",r="Love is the most recently introduced member in the family of inflation and bloat. It is a burst of fresh air fed straight into the bubble. It gives the Ponzi scheme at least another decade before people start to think about cashing out. Remember when you would run out of time and replace that with energy? Push a little harder and move a little faster and you can trick time, because darling you’re a superhero. But when you run out of time and energy alike, you run into a problem. You need help. You need support. You need love and a bit of tenderness. Now, with the help of others, you can feed the machine again.",i="Without time and energy of your own, love is the conduit through which you extract the time and energy of others. You then start to take the shape of that loving conduit. But you have also become a professional lover—or a diabolically good flirt. You are a kind of Marilyn Monroe or Don Juan in the labor of other Marilyns and Dons. This arrangement actually makes for a beautifully collective endeavor so long as you can stay beautiful, tender, and kind to your lovers, and so long as they stay that way to you. This tenderness is a force of resynchronization. Maybe it is a new kind of force altogether. Maybe it is love time. Let’s inhale and exhale together.",a="Love is in this sense not an elevated romantic phenomenon but the economization of empathy. Love is immaterial capital in the absolute in a sphere of value relations where capital and labor are no longer the main operators or arbiters of value. As unfixed capital summons higher and higher symbolic registers into the arena of exchange, its increasing abstraction puts it constantly on the prowl for a lower base to peg value to. But we now find ourselves in a moment where the situation has taken hold to the point where we are no longer really talking about value in an economic sense, but rather about how to sustain meaning in its most fundamental semantic and ontological sense. And this meaning is provided by the base-level foundations for life and for identification, for solidarity or for support, in reproductive and affective relations, from childbirth to friendship.",s="There is also an idea that solidarities between people within the sphere of capital are capable of compensating for the inequities produced by capital, and that this constitutes a kind of exception to the economy within it. But in fact these solidarities are the very essence of what regulates the flows of value and compensate for its inconsistencies through promises, favors—the handshake or the handjob. Kisses and compliments cost nothing and mean everything, like the phrase “sweet nothings” to describe lovers’ whispers to each other. It is not through the “nothing” but the “sweet” that semiotics becomes material when plucking the strings of the heart. Love abounds on information networks—like a home, every inbox is a cacophony of emotions, of simple pleasures, seething frustrations, of unconditional support and permanent disavowals, of silent treatments and gushing confessions. It is through bonds of solidarity that all the things that that cannot be registered and accounted for—because they are irrational and errant and ill defined suspended interactions—find their place, either due to tolerance or an ability to codify or both. In this sense, what I am talking about is a bloat in the sphere of mutual solidarities, a bubble that is no longer economic but will only burst as an aneurism or an uprising—its effects will not be registered according to any language so far understood as being within the realm of economy. Even if Marx did give us a premonition in his closing lines of “The Power of Money”:";e.exports={p1:t,p2:n,p3:o,p4:r,p5:i,p6:a,p7:s}}()},208:function(e,t,n){!function(){e.exports=function(e){var t=n(213)("./"+e+".scss");return{statics:{willTransitionTo:function(){t.use()},willTransitionFrom:function(){t.unuse()}}}}}()},209:function(e,t,n){!function(){function t(e){return n(212)("./"+e+"/cover")}function o(e){return r.createElement(s,{name:e,path:e,handler:t(e)})}var r=n(7),i=n(36),a=i,s=a.Route,u=(a.DefaultRoute,a.Redirect),c=n(204),l=r.createElement(s,{path:"/",handler:c},o("douban-diary"),r.createElement(u,{from:"/",to:"douban-diary"}));e.exports=l}()},210:function(e,t,n){var o,r=0;t.use=t.ref=function(){if(!r++){var i=n(105);"string"==typeof i&&(i=[[e.id,i,""]]),o=n(104)(i)}return t},t.unuse=t.unref=function(){--r||(o(),o=null)}},211:function(e,t,n){var o,r=0;t.use=t.ref=function(){if(!r++){var i=n(106);"string"==typeof i&&(i=[[e.id,i,""]]),o=n(104)(i)}return t},t.unuse=t.unref=function(){--r||(o(),o=null)}},212:function(e,t,n){function o(e){return n(r(e))}function r(e){return i[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var i={"./douban-diary/cover":205};o.keys=function(){return Object.keys(i)},o.resolve=r,e.exports=o,o.id=212},213:function(e,t,n){function o(e){return n(r(e))}function r(e){return i[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var i={"./app.scss":210,"./douban-diary.scss":211};o.keys=function(){return Object.keys(i)},o.resolve=r,e.exports=o,o.id=213}});