//console.log("popup")
let changeColor = document.getElementById("changeColor")

//code related to tags
const tags = document.getElementById("tags")
const tagsArea = document.getElementById("tagsArea")

//arr of tags, don't know if i'll use it
let tagArr = []
getTags()

tags.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        console.log("key is pressed")
        if (tagArr.indexOf(tags.value) == -1) {
            tagArr.push(tags.value)
            chrome.storage.sync.set({ tags: tagArr })
            createTag(tags.value)
        }
        tags.value = ""
    }
})

function createTag(tagTitle) {
    console.log("tagTitle:", tagTitle)
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