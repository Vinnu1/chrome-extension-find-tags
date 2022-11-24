console.log('content script runs')
let bodyText = document.body.innerText.toLowerCase()
let currentTags

//same addListener to put in popup.js or background.js 
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log('req: ', request, 'sender: ', sender, 'sendResponse: ', sendResponse)
        // console.log(sender.tab ?
        //     "from a content script:" + sender.tab.url :
        //     "from the extension");
        if (request.task === "is_tag_present") {
            chrome.storage.sync.get("tags", async ({ tags }) => {
                let result
                if (tags != null && tags.length > 0) {
                    currentTags = tags
                    result = await DoesTagsMatch(currentTags)
                    console.log('do tags present: ', result)
                }
                else {
                    result = "No Tags Present"
                }
                sendResponse({ result: result });
            })
        }
        return true
    })

function DoesTagsMatch(tags) {
    let matchedTags = []
    console.log("tags: ", tags)
    console.log(bodyText)
    for (i = 0; i < tags.length; i++) {
        if (bodyText.indexOf(tags[i]) !== -1) {
            matchedTags.push(tags[i])
        }
    }
    return matchedTags
}