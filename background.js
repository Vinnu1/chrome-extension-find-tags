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
// function setPageBackgroundColor() {
//     console.log(document.body.innerText)
// }
// chrome.runtime.onStartup.addListener(() => {
//     console.log('chrome extension script ran on this page')
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