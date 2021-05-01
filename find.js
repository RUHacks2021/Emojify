let emojify = document.getElementById("start");







emojify.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: applyEmojification,
    });

});



function applyEmojification(){
    let map = new Map() //mapping from keyword to emoji

//laughing
    map.set('laughing','😂')
    map.set('laugh','🤣')


//happy
    map.set('happy','😃')
    map.set('smile','🙂')

//animals
    map.set('chicken','🐔')


    function emojiReplace(value,key,map) {   //called by foreach
        const text = this.querySelectorAll('u,b,dd,h1,h2,h3,h4,h5,p,li,td,caption,span,a'); //all text nodes
        for(let i = 0; i<text.length; i++){
            text[i].innerHTML = text[i].innerHTML.replace(key,value)
        }
    }

    map.forEach(emojiReplace,document);


}

