// chrome.runtime.onInstalled.addListener(() => {
//     chrome.storage.local.set({
//         name: document.get
//     })
// });


// chrome.storage.local.get("name", data => {
//
// });


chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && /^http/.test(tab.url)) {
        chrome.scripting.insertCSS({
            target: {tabId: tabId},
            files: ["./foreground/foreground.css"]
        })
            .then(() => {
                console.log("injected foreground css")
                chrome.scripting.executeScript({
                    target: {tabId: tabId},
                    files: ["./foreground/foreground.js"]
                })
                    .then(() => {
                        console.log("injected foreground script")
                    })
            })
            .catch(err => console.log(err));

    }
});

//looks for message from popup script/foreground
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'get-name') {
        chrome.storage.local.get('name', data => {
            if (chrome.runtime.lastError) {
                sendResponse({
                    message: 'fail'
                });

                return;
            }

            sendResponse({
                message: 'success',
                payload: data.name
            });
        });

        return true;
    }
})


//chrome runtime sendMessage sends to popup
//chrome.tabs.sendMessage sends only to foreground