document.querySelector("button").addEventListener("click", function() {
    var a = document.querySelector("#outputbox");
    var input = document.querySelector("input[type=url]");
    
    var longURL = location.href + "?" + btoa(encodeURIComponent(input.value));
    a.innerText = longURL;
    a.href = longURL;
    a.target = "_blank";
});

document.querySelector("input[type=url]").addEventListener("keydown", function(e) {
    if (e.key == "Enter") {
        e.preventDefault();
        document.querySelector("button").click();
    }
});

if (location.search.length > 1) {
    var encodedstr = location.search.substring(1);
    var decodedstr = decodeURIComponent(atob(encodedstr));
    location.replace(decodedstr);
}