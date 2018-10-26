/*
ga(function(tracker) {
    var clientId = tracker.get('clientId');
    console.log(clientId);
  });
*/
ga(function() {
    var t = ga.getAll(), clientId;
    if(t && t.length) {
    clientId = t[0].get('clientId');
    document.getElementById('clid').value = clientId;
    }
});