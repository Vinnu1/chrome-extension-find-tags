console.log("popup")
let changeColor = document.getElementById("changeColor")
const resultSpan = document.getElementById("resultSpan")
const searchButton = document.getElementById("searchButton")

//code related to tags
const tags = document.getElementById("tags")
const tagsArea = document.getElementById("tagsArea")

//arr of tags, don't know if i'll use it
let tagArr = []
getTags()

tags.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        console.log("key is pressed")
        let tagValue = tags.value.toLowerCase()
        if (tagArr.indexOf(tagValue) == -1) {
            tagArr.push(tagValue)
            chrome.storage.sync.set({ tags: tagArr })
            createTag(tagValue)
        }
        tags.value = ""
    }
    else if (e.code === "Space") {
        return e.preventDefault()
    }
})

function createTag(tagTitle) {
    //console.log("tagTitle:", tagTitle)
    let tag = document.createElement('div')
    let deleteBtn = document.createElement('span')
    deleteBtn.addEventListener("click", () => {
        tagArr = tagArr.filter(tag => tag != tagTitle)
        chrome.storage.sync.set({ tags: tagArr }, () => {
            tag.remove()
        })
    })
    tag.setAttribute("class", "tag")
    deleteBtn.setAttribute("class", "delete")
    deleteBtn.innerHTML = "&#10006;"
    tag.innerHTML = tagTitle
    tag.appendChild(deleteBtn)
    tagsArea.appendChild(tag)
}

function getTags() {
    chrome.storage.sync.get("tags", ({ tags }) => {
        if (typeof tags !== 'undefined') {
            console.log("tags exist: ", tags)
            tagArr = tags
            tagArr.map((tag) => {
                createTag(tag)
            })
        }
        else {
            console.log("no tags found")
        }
    })
}

function getResult() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { task: "is_tag_present" }, function (response) {
            console.log(response.result);
            resultSpan.innerHTML = response.result
        });
    });
}
getResult()

searchButton.addEventListener('click', getResult)
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     // console.log("request from: ", request.from)
//     // console.log(request, sender, sendResponse);
//     sendResponse(50)
// })


// var port = chrome.extension.connect({
//     name: "Sample Communication"
// });
// port.postMessage("Hi BackGround");
// port.onMessage.addListener(function (msg) {
//     console.log("message recieved" + msg);
// });

// window.addEventListener("DOMContentLoaded", () => {
//chrome tabs query
// chrome.tabs.query({
//     active: true,
//     currentWindow: true
// }, tabs => {
//     // ...and send a request for the DOM info...
//     chrome.tabs.sendMessage(
//         tabs[0].id,
//         { from: 'popup', subject: 'DOMInfo' },
//         // ...also specifying a callback to be called
//         //    from the receiving end (content script).
//         setDOMInfo);
// });
// })
//chrome.runtime.sendMessage({ result: false })
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     console.log("request from: ", request.from)
//     console.log(request, sender, sendResponse);
//     sendResponse(50)
// })
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     console.log("popup was called")
//     if (request.msg === "popup_result") {
//         //  To do something
//         console.log("in popup:", request.result)
//     }
// })

// function setDOMInfo(data) {
//     console.log("setDomInfo called: ", data)
// }

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

// chrome.storage.sync.get("color", ({ color }) => {
//     changeColor.style.backgroundColor = color
// })

// //when button clicked, inject setPageBackgroundColor into current page

// changeColor.addEventListener("click", async () => {
//     let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })

//     chrome.scripting.executeScript({
//         target: {
//             tabId: tab.id
//         },
//         function: setPageBackgroundColor
//     })
// })

// //body of this func will be executed as a content script inside current page
// function setPageBackgroundColor() {
//     chrome.storage.sync.get("color", ({ color }) => {
//         document.body.style.backgroundColor = color;
//     })
// } 