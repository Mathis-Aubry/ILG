let textarea = document.querySelector("textarea");
let pre = document.querySelector("pre");

// Syncing <textarea> and <pre> contents
textarea.addEventListener("input", function() {
    let text = textarea.value;

    // Interpreting keywords
    let regex = "";
    
    //// Line comments 
    regex += "Genaivre:" // match the keyword
    regex += "(?:(?!\n).)*"; // match any char after the keyword but the line break
    regex += "(\n|$)"; // match the line break or the end of the code
    text = text.replace(new RegExp(regex, "g"), "<span class='comment'>$&</span>");
    
    pre.innerHTML = text;
});
