//console.log("popup")
let changeColor = document.getElementById("changeColor")

//code related to tags
const tags = document.getElementById("tags")
const tagsArea = document.getElementById("tagsArea")

//arr of tags, don't know if i'll use it
const tagArr = []

tags.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        console.log("key is pressed")
        addTag(tags.value);
        tags.value = ""
    }
})

function addTag(tagTitle) {
    let tag = document.createElement('div')
    let deleteBtn = document.createElement('span')
    deleteBtn.addEventListener("click", () => {
        tag.remove()
    })
    tag.setAttribute("class", "tag")
    deleteBtn.setAttribute("class", "delete")
    deleteBtn.innerHTML = "&#10006;"
    tag.innerHTML = tagTitle
    tag.appendChild(deleteBtn)
    tagsArea.appendChild(tag)
}


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