define(["durandal/system","durandal/viewEngine","durandal/composition","durandal/events","jquery"],function(e,t,n,i,a){function r(){return e.defer(function(t){return 0==c.length?(t.resolve(),void 0):(e.acquire(c).then(function(n){for(var i=0;i<n.length;i++){var a=n[i];if(a.install){var r=s[i];e.isObject(r)||(r={}),a.install(r),e.log("Plugin:Installed "+c[i])}else e.log("Plugin:Loaded "+c[i])}t.resolve()}).fail(function(t){e.error("Failed to load plugin(s). Details: "+t.message)}),void 0)}).promise()}var o,c=[],s=[];return o={title:"Application",configurePlugins:function(t,n){var i=e.keys(t);n=n||"plugins/",-1===n.indexOf("/",n.length-1)&&(n+="/");for(var a=0;a<i.length;a++){var r=i[a];c.push(n+r),s.push(t[r])}},start:function(){return e.log("Application:Starting"),this.title&&(document.title=this.title),e.defer(function(t){a(function(){r().then(function(){t.resolve(),e.log("Application:Started")})})}).promise()},setRoot:function(i,a,r){var o,c={activate:!0,transition:a};o=!r||e.isString(r)?document.getElementById(r||"applicationHost"):r,e.isString(i)?t.isViewUrl(i)?c.view=i:c.model=i:c.model=i,n.compose(o,c)}},i.includeIn(o),o});