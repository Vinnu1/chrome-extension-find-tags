//let color = "#3aa757"
chrome.runtime.onInstalled.addListener(() => {
    // chrome.storage.sync.set({ color })
    // console.log('Default color set to %cgreen', `color:${color}`)
    // chrome.scripting.executeScript({
    //     target: { tabId: tab.id },
    //     func: setPageBackgroundColor
    // })
    console.log("hey")
    //console.log(document.body.innerText)
})

// chrome.runtime.sendMessage({ from: 'background', result: false }, (response) => {
//     console.log('data received from popup: ', response)
// })

// chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//     chrome.tabs.sendMessage(tabs[0].id, { from: "background" }, function (response) {
//         console.log("response got: ", response);
//     });
// });

// chrome.extension.onConnect.addListener(function (port) {
//     console.log("Connected .....");
//     port.onMessage.addListener(function (msg) {
//         console.log("message recieved" + msg);
//         port.postMessage("Hi Popup.js");
//     });
// })

// chrome.runtime.onConnect.addListener(port => {
//     port.onMessage.addListener(msg => {
//         // Handle message however you want
//         console.log("port on message:", msg)
//     });
// });

// function setPageBackgroundColor() {
//     console.log(document.body.innerText)
// }
// chrome.runtime.onStartup.addListener(() => {
//     console.log('chrome extension script ran on this page')
//     chrome.runtime.sendMessage({ result: false })
// })
/*
async function myFunc() {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
    chrome.action.onLoad.addListener((tab) => {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: setPageBackgroundColor
        });
    });
}

function setPageBackgroundColor() {
    console.log(document.body.innerText)
}

myFunc()
*/
// getText()

// async function getText() {
//     let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })

//     chrome.scripting.executeScript({
//         target: {
//             tabId: tab.id
//         },
//         function: setPageBackgroundColor
//     })

//     //body of this func will be executed as a content script inside current page
//     function setPageBackgroundColor() {
//         console.log(document.body.innerText)
//         // chrome.storage.sync.get("color", ({ color }) => {
//         //     document.body.style.backgroundColor = color;
//         // })
//     }
// }