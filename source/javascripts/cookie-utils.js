/*
If you have the set your cookie preferences, hide the privacy nag.
*/
function optOutPrefSet(){
    var cookie = Cookies.getJSON("ga_opt_out");
    if (typeof cookie != "undefined" ){  //suppress optOutBar
        var optOutBar = document.getElementById('signup-bar');
        optOutBar.style.display = 'none';
    }
}

//toggle the cookie value at privacy.html
function toggleTracking() {
    var status = Cookies.getJSON("ga_opt_out");
    if (typeof status === "undefined" ) {
        var cookieValue = true; //first click should turn off tracking
    }
    else {
        var cookieValue = status
        $('#toggleOptOUt').prop("checked"); 
        cookieValue = !cookieValue; //toggle true/false
    }
    Cookies.set("ga_opt_out", cookieValue, { expires: 3650 }, { domain: 'www.caretjuice.com' });
    console.log("attempted to set cookie");
}

//dismissing the privacy nag means you accept tracking
function acceptTracking() {
   Cookies.set("ga_opt_out", "false", { expires: 3650 }, { domain: 'www.caretjuice.com' });
}

//set the checked value for the Opt Out Toggle
$(document).ready(function () {
    optOutPrefSet(); //while we are here, let's also see if we need to display the Opt Out Bar
     s = Cookies.getJSON("ga_opt_out");
     console.log("S value: " + s);
     if (s === undefined){
         s = true;
     }
     $('#toggleOptOut').prop('checked', s);

});