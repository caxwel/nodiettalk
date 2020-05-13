const allElements = [...document.body.getElementsByTagName('*')];

function replaceText(node) {
    let value = node.nodeValue;
    value = value.replace(/the/gi, 'Smefanye');
    node.nodeValue = value;
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