//suppress optout bar for people with ga_opt_out cookie
function optOutPrefSet(){
    var cookie = Cookies.get("ga_opt_out");
    console.log("cookie var= " + cookie);
    if (typeof cookie == "undefined" ){
        //suppress optOutBar
        var optOutBar = document.getElementById('signup-bar');
        optOutBar.style.display = 'none';
    }
}

//toggle the cookie value
function toggleTracking() {
    var status = Cookies.get("ga_opt_out");
   if (typeof status == "undefined" ) {
       cookieValue = true; //first click should turn off tracking
   }
   else {
       cookieValue = !cookieValue;
   }
   Cookies.set("ga_opt_out", cookieValue, { expires: 3650 });
   console.log("attempted to set cookie");
}

//accept Tracking
function acceptTracking() {
   Cookies.set("ga_opt_out", "false", { expires: 3650 });
}

//set the checked value for the Opt Out Toggle
$(document).ready(function () {
    optOutPrefSet(); //while we are here, let's also see if we need to display the Opt Out Bar
	 s = Cookies.get("ga_opt_out");
	 if (s == true ){
         $('#toggleOptOUt').prop('checked', true);
         console.log("s value:" + s);
         console.log("Checked opt out status cookie, found it and set toggle to checked");
	 }
	 else {
         $('#toggleOptOUt').prop('checked', false);
         console.log("Failed to find opt out status cookie and set toggle to unchecked")
	 }
});