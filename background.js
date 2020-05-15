chrome.browserAction.onClicked.addListener((tab) => {
    chrome.tabs.executeScript(null, {
        file: 'wordmap.js'
    }, () => {
        chrome.tabs.executeScript(null, {
            file: 'replace.js'
        })
    });
});