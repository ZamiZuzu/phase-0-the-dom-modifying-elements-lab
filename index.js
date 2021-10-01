const main = document.getElementsByTagName("main")[0];
main.remove();


const newHeader = document.createElement("h1");

newHeader.id = "victory";

newHeader.innerHTML = "YOUR-NAME is the champion"

document.body.append(newHeader);



