/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[5],{607:function(ya,ua,n){n.r(ua);var oa=n(0);ya=n(52);var ma=n(231),na=n(523),ka=n(290),ia=window;n=function(){function ba(x,y){this.Y$=function(w){w=w.split(".");return w[w.length-1].match(/(jpg|jpeg|png|gif)$/i)};y=y||{};this.url=x;this.filename=y.filename||x;this.Tf=y.customHeaders;this.kQa=!!y.useDownloader;this.withCredentials=!!y.withCredentials}ba.prototype.iO=function(x){this.Tf=x};ba.prototype.getCustomHeaders=function(){return this.Tf};
ba.prototype.getFileData=function(x){var y=this,w=this,b=new XMLHttpRequest,e=0===this.url.indexOf("blob:")?"blob":"arraybuffer";b.open("GET",this.url,!0);b.withCredentials=this.withCredentials;b.responseType=e;this.Tf&&Object.keys(this.Tf).forEach(function(f){b.setRequestHeader(f,y.Tf[f])});var h=/^https?:/i.test(this.url);b.addEventListener("load",function(f){return Object(oa.b)(this,void 0,void 0,function(){var a,r,z,aa,ea,ca;return Object(oa.d)(this,function(ha){switch(ha.label){case 0:if(200!==
this.status&&(h||0!==this.status))return[3,10];w.trigger(ba.Events.DOCUMENT_LOADING_PROGRESS,[f.loaded,f.loaded]);if("blob"!==this.responseType)return[3,4];a=this.response;return w.Y$(w.filename)?[4,Object(ka.b)(a)]:[3,2];case 1:return r=ha.aa(),w.fileSize=r.byteLength,x(new Uint8Array(r)),[3,3];case 2:z=new FileReader,z.onload=function(fa){fa=new Uint8Array(fa.target.result);w.fileSize=fa.length;x(fa)},z.readAsArrayBuffer(a),ha.label=3;case 3:return[3,9];case 4:ha.wd.push([4,8,,9]);aa=new Uint8Array(this.response);
if(!w.Y$(w.filename))return[3,6];a=new Blob([aa.buffer]);return[4,Object(ka.b)(a)];case 5:return r=ha.aa(),w.fileSize=r.byteLength,x(new Uint8Array(r)),[3,7];case 6:w.fileSize=aa.length,x(aa),ha.label=7;case 7:return[3,9];case 8:return ha.aa(),w.trigger(ba.Events.ERROR,["pdfLoad","Out of memory"]),[3,9];case 9:return[3,11];case 10:ea=f.currentTarget,ca=Object(ma.b)(ea),w.trigger(ba.Events.ERROR,["pdfLoad","".concat(this.status," ").concat(ea.statusText),ca]),ha.label=11;case 11:return w.eH=null,[2]}})})},
!1);b.onprogress=function(f){w.trigger(ba.Events.DOCUMENT_LOADING_PROGRESS,[f.loaded,0<f.total?f.total:0])};b.addEventListener("error",function(){w.trigger(ba.Events.ERROR,["pdfLoad","Network failure"]);w.eH=null},!1);b.send();this.eH=b};ba.prototype.getFile=function(){var x=this;return new Promise(function(y){ia.da.isJSWorker&&y(x.url);if(x.kQa){var w=Object(oa.a)({url:x.url},x.Tf?{customHeaders:x.Tf}:{});y(w)}y(null)})};ba.prototype.abort=function(){this.eH&&(this.eH.abort(),this.eH=null)};ba.Events=
{DOCUMENT_LOADING_PROGRESS:"documentLoadingProgress",ERROR:"error"};return ba}();Object(ya.a)(n);Object(na.a)(n);Object(na.b)(n);ua["default"]=n}}]);}).call(this || window)
