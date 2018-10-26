function getCookie(name) {
    //get cookie by name
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
        end = dc.length;
        }
    }
    console.log('Returned a cookie by name')
    return decodeURI(dc.substring(begin + prefix.length, end));
} 
//get the initial cookie value
function optOutStatus(){
    var status = getCookie("ga_opt_out");
        if (status == null) {
           cookieValue = false;
       }
       else {
           cookieValue = status;
   }
   console.log("returned cookieValue from optOutStatus")
   return cookieValue;
}

//suppress optout bar for people with ga_opt_out cookie
function cookieSet( name ){
    var cookie = cookieName( name );
    if (cookie == null ){
        //do nothing
    }
    else {
        //suppress optOutBar
        var optOutBar = document.getElementById('signup-bar');
        optOutBar.style.display = 'none';
    }
}

//toggle the cookie value
function toggleTracking(cookieName, expirationTime) {
    expirationTime = expirationTime * 1000; // Converts expirationtime to milliseconds
    var date = new Date(); 
    var dateTimeNow = date.getTime(); 
    
    date.setTime(dateTimeNow + expirationTime); // Sets expiration time (Time now + ten years)
    var date = date.toUTCString(); // Converts milliseconds to UTC time string
   if (status == null) {
       cookieValue = True;
   }
   else {
       cookieValue = !cookieValue;
   }
   console.log("attempted to write a cookie")
  document.cookie = cookieName+"="+cookieValue+"; expires="+date+"; path=/; domain=." + location.hostname.replace(/^www\./i, ""); // Sets cookie for all subdomains
}
//set the checked value for the Opt Out Toggle
$(document).ready(function () {
	 s = optOutStatus();
	 if (s = true){
         $('#toggleOptOUt').prop('checked', true);
         console.log(s)
         console.log("Checked opt out status cookie, found it and set toggle to checked");
	 }
	 else {
         $('#toggleOptOUt').prop('checked', false);
         console.log("Failed to find opt out status cookie and set toggle to unchecked")
	 }
});