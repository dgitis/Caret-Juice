function optOutPrefSet(){var o=Cookies.get("ga_opt_out");if(console.log("cookie var:"+o),void 0!==o){document.getElementById("signup-bar").style.display="none"}}function toggleTracking(){void 0===Cookies.getJSON("ga_opt_out")?cookieValue=!0:(cookieValue=$("#toggleOptOUt").prop("checked"),cookieValue=!cookieValue),Cookies.set("ga_opt_out",cookieValue,{expires:3650},{domain:"www.caretjuice.com"}),console.log("attempted to set cookie")}function acceptTracking(){Cookies.set("ga_opt_out","false",{expires:3650},{domain:"www.caretjuice.com"})}$(document).ready(function(){optOutPrefSet(),s=Cookies.get("ga_opt_out"),1==s?($("#toggleOptOUt").prop("checked",!0),console.log("s value:"+s),console.log("Checked opt out status cookie, found it and set toggle to checked")):($("#toggleOptOUt").prop("checked",!1),console.log("s value:"+s),console.log("Failed to find opt out status cookie and set toggle to unchecked"))});