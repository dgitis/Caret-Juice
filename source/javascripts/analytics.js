/*
Get the clientID from Google Analytics and insert it into hidden form field.
The submitted value goes in to marketing automation platform to later reference when 
submitting online transactions.

On pages with multiple forms, this should insert the clientID into all forms.

There may be multiple GA tracker objects on the page. We should be able to 
configure which tracker object we want to get the client ID from.

Docs:
JS-Cookie https://github.com/js-cookie/js-cookie
GA Tracker https://developers.google.com/analytics/devguides/collection/analyticsjs/cookies-user-id
*/
$(document).ready(function(){ // Shouldn't need this with GA Ready Callback
    ga(function(tracker) {  //GA Ready Callback (not working) https://developers.google.com/analytics/devguides/collection/analyticsjs/command-queue-reference#ready-callback
        var clientId = tracker.get('clientId');
        document.prop('#clid').value = clientId;//may need to use Hit Callback https://developers.google.com/analytics/devguides/collection/analyticsjs/sending-hits#hitcallback
        console.log(clientId);
  });
});
/*
$(document).ready(function(){
    ga(function() {
        var t = ga.getAll(), clientId;
        if(t && t.length) {
            clientId = t[0].get('clientId');
            document.getElementById('clid').value = clientId;
            console.log(clientId);
        }
    });
});
*/