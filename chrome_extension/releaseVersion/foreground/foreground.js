//grab url




//scripts that get run during completed load of site
//removes untouchable layer which blocks href changes
remove_top_layer()
//stores location and saves them in href on safety button
grab_locations()

function grab_locations() {
    let locations = document.getElementsByClassName("_1spi1ps9")
    const searchDiv = document.getElementsByClassName("_15eotbx")

    let format;
    let prev;
    for (let i = 0; i < locations.length; i++) {
        format = locations[i].textContent.replaceAll(" ", "+")
        prev = searchDiv[i].textContent
        searchDiv[i].innerHTML = prev + "    " + "<a href=\"https://www.google.com/maps/search/" + format + "\"><button style='background-color: " + get_rating("null") + "; /* Green */\n" +
            "  border: none;\n" +
            "  color:#ffffff;\n" +
            "  text-align: center;\n" +
            "  text-decoration: none;\n" +
            "  display: inline-block;\n" +
            "  border-radius: 4px;" +
            "  font-size: 16px;'>Safety check</button></ahref>"


    }
    const searchDiv2 = document.getElementsByClassName("_mjvmnj")
    console.log(searchDiv2)

    let prev2;
    for (let i = 0; i < searchDiv2.length; i++) {
        searchDiv2[i].innerHTML = "<a href=\"https://www.google.com/maps/search/" + get_loc() + "\"><button style='background-color: " + get_rating("null") + "; /* Green */\n" +
            "  border: none;\n" +
            "  color:#ffffff;\n" +
            "  text-align: center;\n" +
            "  text-decoration: none;\n" +
            "  display: inline-block;\n" +
            "  border-radius: 4px;" +
            "  font-size: 16px;'>Safety check</button></ahref>"


    }


}

function remove_top_layer() {
    const property_box = document.getElementsByClassName("_1jhvjuo")
    for (const prop of property_box) {
        prop.style.cssText += "z-index:-1"
        prop.removeAttribute("href")
    }
    const alt_box = document.getElementsByClassName("_mm360j")
    for (const prop of alt_box) {
        prop.style.cssText += "z-index:-1"
        prop.removeAttribute("href")
    }
}


function get_rating(location) {
    //get score from database
    let score = Math.floor(Math.random() * 10)


    switch (score) {
        case (score <= 3):
            return "#900011"
        case 4:
            return "#B13433"
        case 5:
            return "#af8f2f"
        case 6:
            return "#d7b90f"
        case 7:
            return "#63a72a"
        default:
            return "#208b02"
    }

}

function get_loc(){
    return window.location.toString().slice(25).split("/")[0].replaceAll("-", " ");
}
