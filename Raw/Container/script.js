document.addEventListener("DOMContentLoaded", (event) => {
    // The content below loads the scripts to html files so that it isnt very cluttered
    function loadScript(url) {
        const script = document.createElement('script');
        script.src = url;
        document.head.appendChild(script);
    }

    loadScript('https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.7.1.js');
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/jszip/3.7.1/jszip.min.js');
    loadScript('https://cdn.statically.io/gh/GsLibrary/Library/main/NewScript.js');
    loadScript('https://kit.fontawesome.com/5f8433758a.js');

    // Rest of script
    console.log("Website Has Been Loaded");
});
