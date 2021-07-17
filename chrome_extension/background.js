function readPage() {

    //upper level box
    const property_box = document.getElementsByClassName("_1jhvjuo")
    for (const prop of property_box) {
        prop.style.cssText += "z-index:-1"
        prop.removeAttribute("href")
    }

    //flex box for box
    const box = document.getElementsByClassName("_zjunba")
    for (const prop of box) {
        box.href = "https://www.youtube.com/"
        // prop.style.cssText += "pointer-events: none"
        //Attribute("href");


    }

    const searchDiv = document.getElementsByClassName("_15eotbx")
    for (const option of searchDiv) {
        prev = option.textContent
        option.innerHTML = prev + "    " + "<a href=\"https://www.youtube.com/\"><button style='background-color: #4CAF50; /* Green */\n" +
            "  border: none;\n" +
            "  color: white;\n" +
            "  text-align: center;\n" +
            "  text-decoration: none;\n" +
            "  display: inline-block;\n" +
            "  font-size: 16px;'>Safety check</button></ahref>"
        option.setAttribute("href", "https://www.youtube.com/")

    }

}

//Listen for button click on extension
chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: readPage
    });
});


