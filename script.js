var input = document.querySelector("#text-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output-Div");

btnTranslate.addEventListener("click",clickhandler);

var url = "https://api.funtranslations.com/translate/shakespeare.json";
 function sURL(text)
{
    return  url+ "?"+"text=" + text;
}

function clickhandler(){
    
    var text = input.value;
    

    fetch(sURL(text))
    .then(response => response.json())
    .then(convertedJSON => {
        var transaltedText = convertedJSON.contents.translated;

        outputDiv.innerText = transaltedText;
    });
    
}
