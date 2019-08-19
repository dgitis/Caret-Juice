var stlib=stlib||{functions:[],functionCount:0,util:{prop:function(b,a){if(a){return a[b]}return function(c){return c[b]}}},dynamicOn:true,setPublisher:function(a){stlib.publisher=a},setProduct:function(a){stlib.product=a},parseQuery:function(d){var e=new Object();if(!d){return e}var a=d.split(/[;&]/);for(var c=0;c<a.length;c++){var g=a[c].split("=");if(!g||g.length!=2){continue}var b=unescape(g[0]);var f=unescape(g[1]);f=f.replace(/\+/g," ");e[b]=f}return e},getQueryParams:function(){var a=document.getElementById("st_insights_js");if(a&&a.src){var c=a.src.replace(/^[^\?]+\??/,"");var b=stlib.parseQuery(c);stlib.setPublisher(b.publisher);stlib.setProduct(b.product)}}};stlib.global={hash:stlib.util.prop("hash",document.location).substr(1)};stlib.getQueryParams();stlib.browser={iemode:null,firefox:null,firefoxVersion:null,safari:null,chrome:null,opera:null,windows:null,mac:null,ieFallback:(/MSIE [6789]/).test(navigator.userAgent),init:function(){var a=navigator.userAgent.toString().toLowerCase();if(/msie|trident/i.test(a)){if(document.documentMode){stlib.browser.iemode=document.documentMode}else{stlib.browser.iemode=5;if(document.compatMode){if(document.compatMode=="CSS1Compat"){stlib.browser.iemode=7}}}}stlib.browser.firefox=((a.indexOf("firefox")!=-1)&&(typeof InstallTrigger!=="undefined"))?true:false;stlib.browser.firefoxVersion=(a.indexOf("firefox/5.0")!=-1||a.indexOf("firefox/9.0")!=-1)?false:true;stlib.browser.safari=(a.indexOf("safari")!=-1&&a.indexOf("chrome")==-1)?true:false;stlib.browser.chrome=(a.indexOf("safari")!=-1&&a.indexOf("chrome")!=-1)?true:false;stlib.browser.opera=(window.opera||a.indexOf(" opr/")>=0)?true:false;stlib.browser.windows=(a.indexOf("windows")!=-1)?true:false;stlib.browser.mac=(a.indexOf("macintosh")!=-1)?true:false},getIEVersion:function(){return stlib.browser.iemode},isFirefox:function(){return stlib.browser.firefox},firefox8Version:function(){return stlib.browser.firefoxVersion},isSafari:function(){return stlib.browser.safari},isWindows:function(){return stlib.browser.windows},isChrome:function(){return stlib.browser.chrome},isOpera:function(){return stlib.browser.opera},isMac:function(){return stlib.browser.mac},isSafariBrowser:function(g,f){var e=g&&g.indexOf("Apple Computer, Inc.")>-1&&f&&!f.match("CriOS");var b=/^((?!chrome|android).)*safari/i.test(f);var d=/^((?!firefox|linux))/i.test(f);var c=(f.indexOf("Mac OS X")>-1)||(/iPad|iPhone|iPod/.test(f)&&!window.MSStream);var a=(f.indexOf("Windows NT")>-1)&&b;return(e&&b&&d&&(c||a))}};stlib.browser.init();stlib.scriptLoader={loadJavascript:function(b,c){var a=stlib.scriptLoader;a.head=document.getElementsByTagName("head")[0];a.scriptSrc=b;a.script=document.createElement("script");a.script.setAttribute("type","text/javascript");a.script.setAttribute("src",a.scriptSrc);a.script.async=true;if(window.attachEvent&&document.all){a.script.onreadystatechange=function(){if(this.readyState=="complete"||this.readyState=="loaded"){c()}}}else{a.script.onload=c}a.s=document.getElementsByTagName("script")[0];a.s.parentNode.insertBefore(a.script,a.s)},loadCSS:function(b,d){_$d_();_$d1("Loading CSS: "+b);var a=stlib.scriptLoader;var c;a.head=document.getElementsByTagName("head")[0];a.cssSrc=b;a.css=document.createElement("link");a.css.setAttribute("rel","stylesheet");a.css.setAttribute("type","text/css");a.css.setAttribute("href",b);a.css.setAttribute("id",b);setTimeout(function(){d();if(!document.getElementById(b)){c=setInterval(function(){if(document.getElementById(b)){clearInterval(c);d()}},100)}},100);a.head.appendChild(a.css)}};stlib.browser.mobile={mobile:false,uagent:null,android:null,iOs:null,silk:null,windows:null,kindle:null,url:null,sharCreated:false,sharUrl:null,isExcerptImplementation:false,iOsVer:0,init:function(){this.uagent=navigator.userAgent.toLowerCase();if(this.isAndroid()){this.mobile=true}else{if(this.isIOs()){this.mobile=true}else{if(this.isSilk()){this.mobile=true}else{if(this.isWindowsPhone()){this.mobile=true}else{if(this.isKindle()){this.mobile=true}}}}}},isMobile:function isMobile(){return this.mobile},isAndroid:function(){if(this.android===null){this.android=this.uagent.indexOf("android")>-1}return this.android},isKindle:function(){if(this.kindle===null){this.kindle=this.uagent.indexOf("kindle")>-1}return this.kindle},isIOs:function isIOs(){if(this.iOs===null){this.iOs=(this.uagent.indexOf("ipad")>-1)||(this.uagent.indexOf("ipod")>-1)||(this.uagent.indexOf("iphone")>-1)}return this.iOs},isSilk:function(){if(this.silk===null){this.silk=this.uagent.indexOf("silk")>-1}return this.silk},getIOSVersion:function(){if(this.isIOs()){this.iOsVer=this.uagent.substr((this.uagent.indexOf("os "))+3,5).replace(/\_/g,".")}return this.iOsVer},isWindowsPhone:function(){if(this.windows===null){this.windows=this.uagent.indexOf("windows phone")>-1}return this.windows}};stlib.browser.mobile.init();var tpcCookiesEnableCheckingDone=false;var tpcCookiesEnabledStatus=true;stlib.cookie={setCookie:function(d,m,o){var c=(navigator.userAgent.indexOf("Safari")!=-1&&navigator.userAgent.indexOf("Chrome")==-1);var b=(navigator.userAgent.indexOf("MSIE")!=-1);if(c||b){var q=(o)?o*24*60*60:0;var j=document.createElement("div");j.setAttribute("id",d);j.setAttribute("type","hidden");document.body.appendChild(j);var a=document.getElementById(d),e=document.createElement("form");try{var l=document.createElement('<iframe name="'+d+'" ></iframe>')}catch(k){l=document.createElement("iframe")}l.name=d;l.src="javascript:false";l.style.display="none";a.appendChild(l);e.action="https://sharethis.com/account/setCookie.php";e.method="POST";var i=document.createElement("input");i.setAttribute("type","hidden");i.setAttribute("name","name");i.setAttribute("value",d);e.appendChild(i);var p=document.createElement("input");p.setAttribute("type","hidden");p.setAttribute("name","value");p.setAttribute("value",m);e.appendChild(p);var n=document.createElement("input");n.setAttribute("type","hidden");n.setAttribute("name","time");n.setAttribute("value",q);e.appendChild(n);e.target=d;a.appendChild(e);e.submit()}else{if(o){var h=new Date();h.setTime(h.getTime()+(o*24*60*60*1000));var f="; expires="+h.toGMTString()}else{var f=""}var g=d+"="+escape(m)+f;g+="; domain="+escape(".sharethis.com")+";path=/";document.cookie=g}},setTempCookie:function(d,e,f){if(f){var c=new Date();c.setTime(c.getTime()+(f*24*60*60*1000));var a="; expires="+c.toGMTString()}else{var a=""}var b=d+"="+escape(e)+a;b+="; domain="+escape(".sharethis.com")+";path=/";document.cookie=b},getCookie:function(b){var a=document.cookie.match("(^|;) ?"+b+"=([^;]*)(;|$)");if(a){return(unescape(a[2]))}else{return false}},deleteCookie:function(d){var k="/";var j=".sharethis.com";document.cookie=d.replace(/^\s+|\s+$/g,"")+"="+((k)?";path="+k:"")+((j)?";domain="+j:"")+";expires=Thu, 01-Jan-1970 00:00:01 GMT";var c=(navigator.userAgent.indexOf("Safari")!=-1&&navigator.userAgent.indexOf("Chrome")==-1);var b=(navigator.userAgent.indexOf("MSIE")!=-1);if(c||b){var g=document.createElement("div");g.setAttribute("id",d);g.setAttribute("type","hidden");document.body.appendChild(g);var a=document.getElementById(d),e=document.createElement("form");try{var i=document.createElement('<iframe name="'+d+'" ></iframe>')}catch(h){i=document.createElement("iframe")}i.name=d;i.src="javascript:false";i.style.display="none";a.appendChild(i);e.action="https://sharethis.com/account/deleteCookie.php";e.method="POST";var f=document.createElement("input");f.setAttribute("type","hidden");f.setAttribute("name","name");f.setAttribute("value",d);e.appendChild(f);e.target=d;a.appendChild(e);e.submit()}},deleteAllSTCookie:function(){var d=document.cookie;d=d.split(";");for(var f=0;f<d.length;f++){var c=d[f];c=c.split("=");if(!/st_optout/.test(c[0])){var e=c[0];var h="/";var g=".edge.sharethis.com";document.cookie=e+"=;path="+h+";domain="+g+";expires=Thu, 01-Jan-1970 00:00:01 GMT"}}},setFpcCookie:function(a,g){var c=new Date;var i=c.getFullYear();var f=c.getMonth()+9;var h=c.getDate();var d=a+"="+escape(g);if(i){var b=new Date(i,f,h);d+="; expires="+b.toGMTString()}var e=stlib.cookie.getDomain();d+="; domain="+escape(e)+";path=/";document.cookie=d},getFpcCookie:function(b){var a=document.cookie.match("(^|;) ?"+b+"=([^;]*)(;|$)");if(a){return(unescape(a[2]))}else{return false}},getDomain:function(){var b=document.domain.split(/\./);var a="";if(b.length>1){a="."+b[b.length-2]+"."+b[b.length-1]}return a},checkCookiesEnabled:function(){if(!tpcCookiesEnableCheckingDone){stlib.cookie.setTempCookie("STPC","yes",1);if(stlib.cookie.getCookie("STPC")=="yes"){tpcCookiesEnabledStatus=true}else{tpcCookiesEnabledStatus=false}tpcCookiesEnableCheckingDone=true;return tpcCookiesEnabledStatus}else{return tpcCookiesEnabledStatus}},hasLocalStorage:function(){try{localStorage.setItem("stStorage","yes");localStorage.removeItem("stStorage");return true}catch(a){return false}}};stlib.fpc={cookieName:"__unam",cookieValue:"",createFpc:function(){if(!document.domain||document.domain.search(/\.gov/)>0){return false}var h=stlib.cookie.getFpcCookie(stlib.fpc.cookieName);if(h==false){var c=Math.round(Math.random()*2147483647);c=c.toString(16);var f=(new Date()).getTime();f=f.toString(16);var e=window.location.hostname.split(/\./)[1];if(!e){return false}var g="";g=stlib.fpc.determineHash(e)+"-"+f+"-"+c+"-1";h=g}else{var b=h;var a=b.split(/\-/);if(a.length==4){var d=Number(a[3]);d++;h=a[0]+"-"+a[1]+"-"+a[2]+"-"+d}}stlib.cookie.setFpcCookie(stlib.fpc.cookieName,h);stlib.fpc.cookieValue=h;return h},determineHash:function(b){var e=0;var d=0;for(var c=b.length-1;c>=0;c--){var a=parseInt(b.charCodeAt(c));e=((e<<8)&268435455)+a+(a<<12);if((d=e&161119850)!=0){e=(e^(d>>20))}}return e.toString(16)}};if(typeof(stlib.data)=="undefined"){stlib.data={bInit:false,publisherKeySet:false,pageInfo:{},shareInfo:{},resetPageData:function(){stlib.data.pageInfo.fpc="ERROR";stlib.data.pageInfo.sessionID="ERROR";stlib.data.pageInfo.hostname="ERROR";stlib.data.pageInfo.location="ERROR";stlib.data.pageInfo.product="DOS2"},resetShareData:function(){stlib.data.shareInfo={};stlib.data.shareInfo.url="ERROR";stlib.data.shareInfo.sharURL="";stlib.data.shareInfo.buttonType="ERROR";stlib.data.shareInfo.destination="ERROR";stlib.data.shareInfo.source="ERROR"},resetData:function(){stlib.data.resetPageData();stlib.data.resetShareData()},init:function(){if(!stlib.data.bInit){stlib.data.bInit=true;stlib.data.resetData();stlib.data.set("fcmp",typeof(window.__cmp)=="function","pageInfo");if(stlib.publisher){stlib.data.setPublisher(stlib.publisher)}stlib.data.set("product",stlib.product,"pageInfo");var b=document.location.href;var a="",c="";stlib.data.set("url",b,"shareInfo");stlib.fpc.createFpc();stlib.data.set("fpc",stlib.fpc.cookieValue,"pageInfo");stlib.data.set("title",document.title,"shareInfo");a=(new Date()).getTime().toString();c=Number(Math.random().toPrecision(5).toString().substr(2)).toString();stlib.data.set("sessionID",a+"."+c,"pageInfo");stlib.data.validateRefDomain();stlib.data.set("hostname",document.location.hostname,"pageInfo");stlib.data.set("location",document.location.pathname,"pageInfo")}},validateRefDomain:function(){var a=stlib.data.get("refDomain","pageInfo");if(!a){this.setRefDomain(stlib.util.prop("referrer",window.document))}},setRefDomain:function(a){if(a.length==0){return}var b=a.replace("http://","").replace("https://","").split("/");if(b.length>0){a=(typeof(b[0])!="undefined")?b[0]:a;refQuery=(typeof(b[1])!="undefined")?b[1]:"";stlib.data.set("refQuery",refQuery,"pageInfo");stlib.data.set("refDomain",a,"pageInfo")}},setPublisher:function(a){stlib.data.set("publisher",a,"pageInfo")},setSource:function(c,a){var b="";if(a){if(a.toolbar){b="toolbar"+c}else{if(a.page&&a.page!="home"&&a.page!=""){b="chicklet"+c}else{b="button"+c}}}else{b=c}stlib.data.set("source",b,"shareInfo")},set:function(a,c,b){if(typeof(c)=="number"||typeof(c)=="boolean"){stlib.data[b][a]=c}else{if(typeof(c)=="undefined"||c==null){}else{stlib.data[b][a]=encodeURIComponent(decodeURIComponent(unescape(c.replace(/<[^<>]*>/gi," ")).replace(/%/gi,"%25")));if(a=="url"||a=="location"||a=="image"){try{stlib.data[b][a]=encodeURIComponent(decodeURIComponent(decodeURI(c.replace(/<[^<>]*>/gi," ")).replace(/%/gi,"%25")))}catch(d){stlib.data[b][a]=encodeURIComponent(decodeURIComponent(unescape(c.replace(/<[^<>]*>/gi," ")).replace(/%/gi,"%25")))}}}}},get:function(a,b){try{if(stlib.data[b]&&stlib.data[b][a]){return decodeURIComponent(stlib.data[b][a])}else{return false}}catch(c){return false}},unset:function(a,b){if(stlib.data[b]&&typeof(stlib.data[b][a])!="undefined"){delete stlib.data[b][a]}},bindEvent:function(c,a,b){if(c.addEventListener){c.addEventListener(a,b,false)}else{if(c.attachEvent){c.attachEvent("on"+a,b)}}},debug:function(j,g){stlib.data.init();var f=stlib.data.pageInfo;var k="";var d;for(d in f){k+=d+"="+f[d]+"&"}k=k.substring(0,k.length-1);var i="https://l.sharethis.com/";i+=j;i+="?event="+g;i+="&"+k;var h=new Image(1,1);h.src=i;h.onload=function(){return}},parseCookie:function(a,b){b="; "+b;var c=b.split("; "+a+"=");if(c.length===2){return c.pop().split(";").shift()}else{return null}},setConsent:function(b){for(var a in b){stlib.data.set(a,b[a],"pageInfo")}},getEUConsent:function(f){var e=stlib.data.parseCookie("euconsent",document.cookie);if(e!==null){stlib.data.setConsent({consentData:e,consentDomain:document.location.hostname});f()}else{var d=document.createElement("iframe");var b="https://c.sharethis.mgr.consensu.org/v1.0/cmp/portal.html";d.setAttribute("src",b);d.setAttribute("id","st_gdpr_iframe");d.setAttribute("title","GDPR Consent Management");d.style.width="0px";d.style.height="0px";d.style.position="absolute";d.style.left="-5000px";var a=setInterval(function(){if(document.body!=null){clearInterval(a);document.body.appendChild(d)}},10);stlib.data.bindEvent(window,"message",function(g){var c=/^(http|https):\/\/c.sharethis.mgr.consensu.org/;if(c.test(g.origin)&&g.data.domain==="sharethis.mgr.consensu.org"&&g.data.event==="EU_CONSENT_COOKIE"){var h=g.data.value;if(h!=null&&h!==""){stlib.data.setConsent({consentData:h,consentDomain:".consensu.org"})}f()}})}}};stlib.data.resetData()}stlib.comscore={load:function(){var b=document.referrer;var c="https://sb.scorecardresearch.com/";c+="b?c1=7&c2=8097938&rn="+Math.round(Math.random()*2147483647)+"&c7="+encodeURIComponent(document.location.href)+"&c3=8097938&c8="+encodeURIComponent(document.title)+((b)?"&c9="+encodeURIComponent(document.referrer):"")+"&cv=2.2&cs=js";var a=new Image(1,1);a.src=c;a.onload=function(){return}}};stlib.logger={loggerUrl:"https://l.sharethis.com/",l2LoggerUrl:"https://l2.sharethis.com/",productArray:new Array(),version:"",lang:"en",isFpEvent:false,constructParamString:function(){var a=stlib.data.pageInfo;var c="";var b;for(b in a){c+=b+"="+a[b]+"&"}a=stlib.data.shareInfo;for(b in a){c+=b+"="+a[b]+"&"}c+="sop=false";return c},getGDPRQueryString:function(){var a=stlib.data.get("consentData","pageInfo");var b=encodeURIComponent(stlib.data.get("consentDomain","pageInfo"));var c="";if(a!==false){c="&gdpr_consent="+a+"&gdpr_domain="+b}return c},loadPixelsAsync:function(b){if(typeof(stlib.product)!=="undefined"){if((stlib.product=="ecommerce")||(stlib.product=="dos2")||(stlib.product=="feather")||(stlib.product=="simple")||(stlib.product=="simpleshare")||(stlib.product=="simple-share-pro")){return}}if(typeof(b)!=="undefined"){if(b.status==="true"){stlib.data.set("stid",b.stid,"pageInfo");var c="https://t.sharethis.com/1/d/t.dhj?rnd="+(new Date()).getTime()+"&cid=c010&dmn="+window.location.hostname+stlib.logger.getGDPRQueryString();var a=document.createElement("script");a.async=1;a.src=c;a.id="pxscrpt";var d=document.getElementsByTagName("script")[0];d.parentNode.insertBefore(a,d)}}},logByImage:function(b,c,d){var a=new Image(1,1);a.src=c+"&img_pview=true";a.onload=function(){return};if(b=="pview"){stlib.logger.loadPixelsAsync(undefined)}else{d?d():null}},log:function(f,e,g,c){if(typeof(stlib.data.get("counter","shareInfo"))!="undefined"){var d=0;if(stlib.data.get("counter","shareInfo")){d=stlib.data.get("counter","shareInfo")}stlib.data.set("ts"+new Date().getTime()+"."+d,"","shareInfo");stlib.data.unset("counter","shareInfo")}else{stlib.data.set("ts"+new Date().getTime(),"","shareInfo")}if(f=="widget"){var b="."+stlib.hash.hashDestination(stlib.data.shareInfo.destination);stlib.hash.updateDestination(b)}if(!e||(e!=stlib.logger.loggerUrl&&e!=stlib.logger.l2LoggerUrl)){e=stlib.logger.loggerUrl}var a=null;if(c){a=f}else{a=(f=="pview")?f:((f=="debug")?"cns":"log")}stlib.data.getEUConsent(function(l){if(f=="pview"){var k=e+a+"?event="+f+"&version="+stlib.logger.version+"&lang="+stlib.logger.lang+"&"+stlib.logger.constructParamString()}else{var k=e+a+"?event="+f+"&"+stlib.logger.constructParamString()}try{var h=new XMLHttpRequest();var i;h.open("GET",k,true);h.withCredentials=true;h.timeout=10000;h.onreadystatechange=function(){if(this.readyState==this.DONE){try{i=JSON.parse(h.responseText);if(f=="pview"){stlib.logger.loadPixelsAsync(i)}else{g?g():null}}catch(m){stlib.data.debug("debug-gdpr","pview_timeout");stlib.logger.logByImage(f,k,g)}}};h.send()}catch(j){stlib.logger.logByImage(f,k,g)}})}};stlib.logger.version="st_insights.js";if(window.__sharethis__){stlib.setProduct(window.__sharethis__.product);stlib.setPublisher(window.__sharethis__.property)}var sop_pview_logged=typeof __stdos__!=="undefined"&&__stdos__!==null&&__stdos__.onscriptload;if(!sop_pview_logged&&!stlib.onscriptload&&document.URL.indexOf("edge.sharethis.com")==-1){stlib.data.init();stlib.onscriptload=true;stlib.logger.log("pview",null)}if(typeof(stLight)=="undefined"&&typeof(SHARETHIS)=="undefined"){var stWidgetVersion=false;if(typeof(switchTo5x)=="undefined"){stWidgetVersion="4x"}else{if(switchTo5x==false){stWidgetVersion="4x"}if(switchTo5x==true){stWidgetVersion="5xa"}}stLight=new function(){this.version=false;this.publisher=null;this.sessionID_time=(new Date()).getTime().toString();this.sessionID_rand=Number(Math.random().toPrecision(5).toString().substr(2)).toString();this.sessionID=this.sessionID_time+"."+this.sessionID_rand;this.fpc=null;this.counter=0;this.readyRun=false;this.meta={hostname:document.location.host,location:document.location.pathname};this.loadedFromBar=false;this.clickCallBack=false};stLight.loadDefault=function(){if(typeof(customProduct)=="undefined"){this.product="DOS2"}else{this.product=customProduct}this.source="DOS2";this.version="st_insights.js"};stLight.options=function(a){this.loadDefault();if(a&&a.publisher){stLight.setPublisher(a.publisher)}if(a&&a.refDomain){stLight.setRefDomain(a.refDomain)}stlib.logger.productArray=[];if(a&&a.product){stLight.setProduct(a.product)}else{stLight.setProduct(stLight.product)}if(a&&typeof(a.hashAddressBar)!="undefined"){stlib.hash.hashAddressBar=a.hashAddressBar}stlib.hash.doNotHash=stlib.hash.doNotCopy=false;if(a){a.doNotCopy=a.doNotHash=false}stlib.stLightOptionsObj=a};stLight.onReady=function(){if(stLight.readyRun==true){return false}stLight.loadFromScript();stLight.readyRun=true;stlib.data.init();stLight.fpc=stlib.data.get("fpc","pageInfo");if(stLight.publisher==null){if(typeof(window.console)!=="undefined"){try{}catch(a){}}}stLight.setProduct(stLight.product);stlib.logger.lang="en"};stLight.log=function(a){stlib.data.resetShareData();stlib.data.setSource(stLight.getSource());stlib.data.set("url",document.location.href,"shareInfo");stlib.data.set("title",document.title,"shareInfo");stlib.data.set("counter",stLight.counter++,"shareInfo");stlib.logger.log(a)};if(window.document.readyState=="completed"){stLight.onReady()}else{if(typeof(window.addEventListener)!="undefined"){window.addEventListener("load",stLight.onReady,false)}else{if(typeof(document.addEventListener)!="undefined"){document.addEventListener("load",stLight.onReady,false)}else{if(typeof window.attachEvent!="undefined"){window.attachEvent("onload",stLight.onReady)}}}}stLight.setPublisher=function(a){stlib.data.setPublisher(a);stLight.publisher=a};stLight.setRefDomain=function(a){stlib.data.setRefDomain(a)};stLight.setProduct=function(a){this.product=a;stlib.data.set("product",a,"pageInfo")};stLight.getProduct=function(){return this.product};stLight.getSource=function(){var a="share4x";if(stWidgetVersion=="5xa"){a="share5x"}return a}}stLight.getUrlSearchParam=function(){var a=window.location.search.substring(1);return a.split("&")};stLight.getUrlQueryParams=function(a){var c={};var b=a.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(d,e,f){c[e]=f});return c};stLight.getScriptSrcParams=function(b){var a=document.getElementById(b);if(a){return stLight.getUrlQueryParams(a.src)}};stLight.setParams=function(a){if(a){if(a.refdomain){stLight.setRefDomain(a.refdomain)}if(a.publisher){stLight.setPublisher(a.publisher)}if(a.product){stLight.setProduct(a.product)}}};stLight.loadFromScript=function(){var a=stLight.getScriptSrcParams("st_insights_js");stLight.setParams(a)};stLight.loadFromWindowLocation=function(){var a=stLight.getUrlSearchParam();stLight.setParams(a)};stLight.onDomContentLoaded=function(){stLight.onReady()};stLight.domReady=function(){stLight.onReady()};st_showing=false;stLight.clickSubscribers=[];stLight.nonClickSubscribers=[];if(window.document.readyState=="completed"){stLight.domReady()}else{if(typeof(window.addEventListener)!="undefined"){window.addEventListener("load",stLight.domReady,false)}else{if(typeof(document.addEventListener)!="undefined"){document.addEventListener("load",stLight.domReady,false)}else{if(typeof window.attachEvent!="undefined"){window.attachEvent("onwload",stLight.domReady)}}}}if(typeof(__st_loadLate)=="undefined"){if(typeof(window.addEventListener)!="undefined"){window.addEventListener("DOMContentLoaded",stLight.onDomContentLoaded,false)}else{if(typeof(document.addEventListener)!="undefined"){document.addEventListener("DOMContentLoaded",stLight.onDomContentLoaded,false)}}}else{if(typeof(window.addEventListener)!="undefined"){window.addEventListener("DOMContentLoaded",stLight.onDomContentLoadedLazy,false)}else{if(typeof(document.addEventListener)!="undefined"){document.addEventListener("DOMContentLoaded",stLight.onDomContentLoadedLazy,false)}}}if(document.readyState=="complete"&&stLight.readyRun==false){stLight.domReady()};
