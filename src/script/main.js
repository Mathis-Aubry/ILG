let textarea = document.querySelector("textarea");
let p = document.querySelector("p");

// Syncing textarea and p
textarea.addEventListener("input", function() {
    let text = textarea.value;
    text = text.replace(/\n/g, "<br>");

    // Interpreting keywords
    let regex = "";
    
    //// Line comments 
    regex += "Genaivre:" // match the keyword
    regex += "(?:(?!<br>).)*"; // match any char after the keyword but the line break
    regex += "(<br>|$)"; // match the line break or the end of the code
    text = text.replace(new RegExp(regex, "g"), "<span class='comment'>$&</span>");
    
    p.innerHTML = text;
});
