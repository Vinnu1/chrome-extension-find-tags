//console.log("yo")
//console.log(document.body.innerText)
let bodyText = document.body.innerText.toLowerCase()
//console.log(bodyText)
chrome.storage.sync.get("tags", ({ tags }) => {
    //console.log("tags:", tags)
})

// chrome.runtime.onMessage.addListener(msgObj => {
//     // do something with msgObj
chrome.runtime.sendMessage({ bodyText })
//});
