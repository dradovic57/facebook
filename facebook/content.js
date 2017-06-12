
if(window.location.href == "https://www.facebook.com/MpireSolutions/settings/?tab=people_and_other_pages"){


	var topElement = document.getElementsByClassName("_4kny _50tm")[0];
	var usersInfo = []
	i = 0;
	// minutes = 30;
	var counter = 11;
	repeatScroll();
	function repeatScroll() {
		console.log("scrolled");
	    if (i < counter) {
	        window.scrollTo(0, document.body.scrollHeight);
	        i++;
	        setTimeout(repeatScroll, 1000);
	    }    
	    else{
	    	clearTimeout();
	    	Continue();
	    }
	}

	function Continue(){
		var forceRedraw = function(element){
			var disp = element.style.display;
			element.style.display = "none";
			var trick = element.offsetHeight;
			element.style.display = disp;
			console.log("force redraw");
		};

		forceRedraw(topElement);

		var group = document.getElementsByClassName("_3cb8");
		for(var i = 0; i < group.length; i++){
			var names = group[i].innerHTML;

			var userId = group[i].href;

			usersInfo.push([names, userId]);
			console.log("Name: " + names + " Id: " + userId);

		}
		console.log(group.length);
		console.log(usersInfo);

		//chrome.runtime.sendMessage({url: usersInfo[16][1], truthy: false},	
        chrome.runtime.sendMessage({url: usersInfo[16][1], truthy: false, dr: 0}, function(response) {
				console.log(usersInfo[16][1]);
				console.log(response);
				console.log("UserId: " + usersInfo[16][1].slice(25))
				if(response == "Jodhpur"){
					var tags = document.getElementsByName("select_single_row_checkbox[]");
					for(var i = 0; i < tags.length; i++){
						if (usersInfo[16][1].slice(25) == tags[i].value){
							tags[i].checked = true;
							console.log("remove them");
						}
					}
				}
			});
	}
}







//https://www.facebook.com/browse/?type=page_fans&page_id=186504413358
else if(window.location.href == "https://www.facebook.com/browse/?type=page_fans&page_id=186504413358"){
	//first container of people who like the page
	var firstGroup = document.getElementsByClassName("uiList clearfix _5bbv _4kg _704 _4ks")[0];
	console.log(firstGroup);
	var user_id = [];

	//loop through first container getting each user id inside of it and name of each person
	// var users = firstGroup.getElementsByClassName("adminableItem fbProfileBrowserListItem");
	// //console.log(users);
	// console.log(users.length)
	// var names = firstGroup.getElementsByClassName("fsl fwb fcb");
	// for(var i = 0; i < users.length; i++){
	// 	console.log(users[i].id.slice(14) + " " + names[i].firstChild.innerHTML);

	// 	console.log(i);
	// }

	i = 0;
	// minutes = 30;
	counter = 60;
	repeatScroll();
	function repeatScroll() {
		console.log("scrolled");
	    if (i < counter) {
	        window.scrollTo(0, document.body.scrollHeight);
	        i++;
	        setTimeout(repeatScroll, 1000);
	    }    
	    else{
	    	clearTimeout();
	    	Continue();
	    }

	}

	function Continue(){
		var forceRedraw = function(element){
			var disp = element.style.display;
			element.style.display = "none";
			var trick = element.offsetHeight;
			element.style.display = disp;
			console.log("force redraw");
		};

		forceRedraw(firstGroup);

		var secondGroup = document.getElementsByClassName("uiList clearfix _5bbv _4kg _704 _4ks");
		console.log(secondGroup.length);
		var totalUsers = 0;
		for(var i = 0; i < secondGroup.length; i++){
			var users2 = secondGroup[i].getElementsByClassName("adminableItem fbProfileBrowserListItem");
			totalUsers += users2.length;
			console.log(users2.length);

			var names2 = secondGroup[i].getElementsByClassName("fsl fwb fcb");
			for(var a = 0; a < users2.length; a++){
				console.log(users2[a].id.slice(14) + " " + names2[a].firstChild.innerHTML);
				user_id.push(users2[a].id.slice(14));
			}

		}
		console.log(totalUsers);
	}
}


////////////////////////////////////////////////////////////////////////////////////////////////////////
else{

	var total_user = 0;
	var run = 0;
	var mails = {};
	total = 1;

	moreScroll();
	function moreScroll() {
    var text="";
    containerID = "BrowseResultsContainer" // original container

    if (run > 0) {
        containerID = "fbBrowseScrollingPagerContainer" + (run-1);
    }

    var cont = document.getElementById(containerID);
    if (cont) {
    	run++;
    	var id = run - 2;

    	console.log("Total user: " + total_user);
    	if (id >= 0) {
    		setTimeout(function() {
                containerID = "fbBrowseScrollingPagerContainer" + (id);
                var delcont = document.getElementById(containerID); //every extra loaded container

                if (delcont) {
                	var users = delcont.getElementsByClassName("_3u1 _gli _uvb _5und");
	                total_user += users.length;
	                delcont.parentNode.removeChild(delcont);
                }
                window.scrollTo(0, document.body.scrollHeight - 10);
    		}, 1000);
    	}
    }
    else {
        console.log("# " + containerID);
    }
    if (run < total) {
        window.scrollTo(0, document.body.scrollHeight + 10);
    }
    setTimeout(moreScroll, 2000);
}

// 	console.log("start 2");
// 	i = 0;
// 	// minutes = 30;
// 	counter = 600;
// 	repeatScroll();
// 	function repeatScroll() {
// 		console.log("scrolled");
// 	    if (i < counter) {
// 	        window.scrollTo(0, document.body.scrollHeight);
// 	        i++;
// 	        setTimeout(repeatScroll, 3000);
// 	    }    
// 	    else{
// 	    	clearTimeout();
// 	    	Continue();
// 	    }
// 	}
	
// 	function Continue(){
// 		var forceRedraw = function(element){
// 			var disp = element.style.display;
// 			element.style.display = "none";
// 			var trick = element.offsetHeight;
// 			element.style.display = disp;
// 			console.log("force redraw");
// 	};

// 	var updateElement = document.getElementsByClassName("_4kny _50tm")[0];
// 	console.log(updateElement);
// 	forceRedraw(updateElement);

// 	var firstGroup = document.getElementsByClassName("_1yt");
// 	console.log(firstGroup);

// 	var totalUsers = 0;

// 	for(var i = 0; i < firstGroup.length; i++){
// 		var users = firstGroup[i].getElementsByClassName("_3u1 _gli _5und");
// 		totalUsers += users.length;
// 		console.log("Users length: " + users.length);

// 		for(var a = 0; a < users.length; a++){
// 			var person = JSON.parse(users[a].getAttribute("data-bt"));
// 			//console.log(person);
// 			//console.log(person.id);

// 			var name = users[a].getElementsByClassName("_5d-5")[0].innerHTML;
// 			console.log(name + " " + person.id);


// 			// console.log(users[a].firstChild.innerHTML);
// 		}



// 		// var names = firstGroup[i].getElementsByClassName("_3u1 _gli _5und").getAttribute("data-bt");
// 		// 	for(var a = 0; a < users.length; a++){
// 		// 		console.log(users[a].id.slice(14) + " " + names[a].firstChild.innerHTML);
// 		// 	}
// 	}
// 	console.log("Total users:" + totalUsers);
// }
}