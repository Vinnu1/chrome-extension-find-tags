
let bodyText = document.body.innerText.toLowerCase()
let currentTags

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log('req: ', request, 'sender: ', sender, 'sendResponse: ', sendResponse)
        // console.log(sender.tab ?
        //     "from a content script:" + sender.tab.url :
        //     "from the extension");
        if (request.task === "is_tag_present") {
            chrome.storage.sync.get("tags", ({ tags }) => {
                if (tags != null && tags.length > 0) {
                    currentTags = tags
                }
                else {
                    currentTags = false
                }
                sendResponse({ result: currentTags });
            })
        }
        return true;
    }
);
