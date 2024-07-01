function downloadFiles() {
   
    var htmlCode = document.getElementById("html").innerText;
    var cssCode = document.getElementById("css").innerText;
    var jsCode = document.getElementById("js").innerText;

  
    var combinedCode = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Document</title>\n<style>\n" + cssCode + "\n</style>\n</head>\n<body>\n" + htmlCode + "\n<script src=\"script.js\"></script>\n</body>\n</html>";

  
    var blob = new Blob([combinedCode], { type: "text/html" });

   
    var url = URL.createObjectURL(blob);

   
    var link = document.createElement("a");

  
    link.href = url;

   
    link.download = "index.html";

    document.body.appendChild(link);

   
    link.click();

   
    document.body.removeChild(link);

  
    var jsBlob = new Blob([jsCode], { type: "text/javascript" });
    var jsUrl = URL.createObjectURL(jsBlob);
    var jsLink = document.createElement("a");
    jsLink.href = jsUrl;
    jsLink.download = "script.js";
    document.body.appendChild(jsLink);
    jsLink.click();
    document.body.removeChild(jsLink);
}