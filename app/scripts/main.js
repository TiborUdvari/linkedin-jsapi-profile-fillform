function onLinkedInAuth() {
  IN.API.Profile("me")
    .result( function(me) {
      member = me.values[0];

      console.log(member);
	
	document.getElementById("ln-name").innerHTML = member.firstName + ' ' +  member.lastName;
    document.getElementById("ln-header").innerHTML = member.headline;
    document.getElementById("ln-picture").src = member.pictureUrl;
    });
}


