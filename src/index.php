<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- Preventing browser caching on the css and js -->
        <link rel="stylesheet" href="style/reset.css?<?=time();?>"> 
        <link rel="stylesheet" href="style/style.css?<?=time();?>">
        <title>ILG</title>
    </head>
    <body>
        <!-- In this <pre> tag is where the text is really highlighted, because we can't do it in the textarea directly.
        At any time the text written in the textarea must be there as well, perfectly aligned for the illusion not to break.
        Also, the overflow, the spaces and newlines must be managed the exact same way as in the textarea.
        If not done properly there will be a missalignment of the textarea's caret,
        and the user won't be able to click and edit where he wants. -->
        <div>
            <pre></pre>
            <textarea autocomplete="off" spellcheck="false"></textarea>
        </div>
        <button>Run</button>
        <script src="script/main.js?<?=time();?>"></script>
    </body>
</html>