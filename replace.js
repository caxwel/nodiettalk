const allElements = [...document.body.getElementsByTagName('*')];

let regexs = new Map();
for (let word of alldiettalk.keys()) {
    regexs.set(word, new RegExp(word, 'gi'));
}

function replaceText(node) {
    let value = node.textContent;
    for (let [word, image] of alldiettalk) {
        const regex = regexs.get(word);
        value = value.replace(regex, image);
    }
    node.textContent = value;
}

function search() {
    allElements.forEach(element => {
        element.childNodes.forEach(node => {
            if(node.nodeType === 3) {
                replaceText(node);
            } 
        });
    });
}

window.onload = search();