let emojify = document.getElementById("start"); //extension document


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

//angry
    map.set('angry','😠')
    map.set('anger','💢')


//animals
    map.set('chicken','🐔')
    map.set('hen','🐔')
    map.set('monkey','🐒')
    map.set('cat','🐱')
    map.set('dog','🐶')
    map.set('rat','🐀')
    map.set('mouse','🐭')
    map.set('duck','🦆')
    map.set('rabbit','🐰')

//food
    map.set('pizza','🍕')
    map.set('apple','🍎')
    map.set('pepper','🌶')
    map.set('avocado','🥑')
    map.set('pasta','🍝')
    map.set('banana','🍌')
    map.set('eggplant','🍆')
    map.set('mushroom','🍄')
    map.set('shroom','🍄')
    map.set('hamburger','🍔')
    map.set('burger','🍔')
    map.set('egg','🥚')
    map.set('bacon','🥓')
    map.set('fries','🍟')
    map.set('hotdog','🌭')
    map.set('hot dog','🌭')
    map.set('sushi','🍣')
    map.set('bread','🍞')

//people and people things
    map.set('tooth','🦷')
    map.set('teeth','🦷')
    map.set('mouth','👄')
    map.set('heart','❤')
    map.set('thumb','👍')
    map.set('leg','🦵')
    map.set('brain','🧠')
    map.set('nose','👃')
    map.set('tongue','👅')
    map.set('hand','✋')
    map.set('fist','✊')
    map.set('eyes','👀')
    map.set('eye','👁️')

//items
    map.set('knife','🔪')
    map.set('fork','🍴')
    map.set('spoon','🥄')
    map.set('phone','📱')
    map.set('clock','🕒')
    map.set('tool','🔨')
    map.set('bell','🛎️')
    map.set('bomb','💣')
    map.set('water','🌊')
    map.set('wave','🌊')

//media
    map.set('images','🖼️')
    map.set('video','📹')
    map.set('audio','🎧')
    map.set('music','🎵')
    map.set('musical','🎼')
    map.set('television','📺')
    map.set('computer','🖥️')

//other
    map.set('devil','👿')
    map.set('money','💸')
    map.set('cash','💰')
    map.set('stonks','📈')
    map.set('canada','🍁')
    map.set('map ','🗺️')
    map.set('news','📰')
    map.set('toilet','🚽')
    map.set('sun ','🌞')
    map.set('moon','🌙')
    map.set('star','⭐')
    map.set('cloud','🌥️')
    map.set('settings','⚙️')
    map.set('shopping','🛒')


    function emojiReplace(value,key,map) {   //called by foreach
        const text = this.querySelectorAll('u,b,dd,h1,h2,h3,h4,h5,p,li,td,caption,span,a'); //all text nodes
        for(let i = 0; i<text.length; i++){
            console.log(text[i].innerHTML)
            text[i].innerHTML = text[i].innerHTML.replace(key,value)
            text[i].innerHTML = text[i].innerHTML.replace(key.toUpperCase(),value)
            text[i].innerHTML = text[i].innerHTML.replace(key[0].toUpperCase()+key.substr(1),value)

        }
    }

    map.forEach(emojiReplace,document);

}

