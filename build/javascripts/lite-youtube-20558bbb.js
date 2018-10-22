/*
 * YouTube Lite Embed - jQuery plugin to embed light-weight YouTube videos
 *
 * Copyright (c) 2012 Amr Tj. Wallas
 *
 * Licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License:
 *   http://creativecommons.org/licenses/by-nc-sa/3.0/
 *
 * Project Home:
 *   https://github.com/TjWallas/YouTube-Lite-Embed
 * 
 * Website:
 *	 http://tjwallas.weebly.com
 *
 * Version:  1.0
 *
 */
function YTLiteEmbed(){for(var t,e,i,a,o,l,n,r=$(".lite"),s=0;s<r.length;s++)a=r[s],t=a.id,e=a.style.width,i=a.style.height,o=$(document.createElement("img")),o.attr({"class":"lazy","data-original":"http://img.youtube.com/vi/"+t+"/0.jpg",width:e,height:i}),l=$(document.createElement("a")),l.href="#",n=document.createElement("img"),n.setAttribute("class","lite"),n.src="http://lh4.googleusercontent.com/-QCeB6REIFlE/TuGUlY3N46I/AAAAAAAAAaI/9-urEUtpKcI/s800/youtube-play-button.png",n.style.position="absolute",n.style.top=Math.round((a.clientHeight-51)/2)+"px",n.style.left=Math.round((a.clientWidth-71)/2)+"px",$(a).append(l.append(o,n)),$.ajax({url:"http://gdata.youtube.com/feeds/api/videos/"+t+"?v=2&fields=id,title&alt=json",dataType:"json",success:function(t){$(document.getElementById(t.entry.id.$t.split(":")[3])).append('<div style="position:relative;margin:-'+i+' 5px;padding:5px;background-color:rgba(0,0,0,0.3);-moz-border-radius:7px;-webkit-border-radius:7px;border-radius:7px"><span style="font-weight:bold;font-size:16px;color:#ffffff;font-family:sans-serif;text-align:left;">'+t.entry.title.$t+"</span></div>")}});return!1}!function(t){var e=t(document);e.on("click",".lite > a",function(){var e=this.parentNode;return t(e).replaceWith('<embed src="http://www.youtube.com/v/'+e.id+'?version=3&autoplay=1" type="application/x-shockwave-flash" width="'+e.style.width+'" height="'+e.style.height+'" allowscriptaccess="always"></embed>'),!1}),e.ready(function(){YTLiteEmbed(),t("img.lazy").lazyload({effect:"fadeIn"}),t(this).trigger("scroll")})}(jQuery);