let emojify = document.getElementById("start");


emojify.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: applyEmojification,
    });

});

function applyEmojification(){
    const text = document.querySelectorAll('dd,h1,h2,h3,h4,h5,p,li,td,caption,span,a'); //all text nodes
    let curr = null


    for(let i = 0; i < text.length; i++){
        text[i].innerHTML = "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life."
    }
}