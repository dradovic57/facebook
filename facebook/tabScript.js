//document.body.style.backgroundColor="red";

var test;
var intro = document.getElementsByClassName("_50f3");
for(var i = 0; i < intro.length; i++){
	
	if(intro[i].innerHTML.indexOf("Lives in") !== -1){
		// console.log("here");
		// console.log(intro[i].getElementsByTagName("a")[0].innerHTML);
		// alert(intro[i].getElementsByTagName("a")[0].innerHTML);

		//console.log(intro[i]);
		var test = intro[i].innerHTML;
		console.log("test1: " + test);
		test = test.slice(0, test.length - 4);
		console.log("test2: " + test);
		test = test.slice(test.indexOf(">") + 1, test.length);
		console.log("test3: " + test);
		// test;
	}
}

// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
// 	console.log("tabScript.js: recieved " + request.data + " from tab:" + sender.tab.id)
// 	console.log("made it to tabScript");
// 	alert("made it to tabScript");
// 	sendResponse({data: (request.data + 456)});
// });

test;