chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

    chrome.tabs.create({ url: request.url }, function(tab){
    	chrome.tabs.executeScript(tab.id, {file: "tabScript.js"},
    		function(results){
    			console.log(results[0]);
				chrome.tabs.remove(tab.id);

    			sendResponse(results[0]);
    		});
    });

    return true;
});