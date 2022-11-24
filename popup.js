console.log("popup")
let changeColor = document.getElementById("changeColor")
const resultSpan = document.getElementById("resultSpan")
const searchButton = document.getElementById("searchButton")
const closeButton = document.getElementById("closeButton")

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
            let result = response.result
            if (result === "No Tags Present") {
                resultSpan.innerHTML = "Enter Tags Above for Searching &uarr;"
            }
            else if (result.length === 0) {
                resultSpan.innerHTML = "No Tags Found."
                closeButton.classList.remove("closeBtn")
            }
            else {
                resultSpan.innerHTML = result.toString() + " found!"
            }
        });
    });
}
getResult()

searchButton.addEventListener('click', getResult)
closeButton.addEventListener('click', closeTab)

function closeTab() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.remove(tabs[0].id);
    });
}