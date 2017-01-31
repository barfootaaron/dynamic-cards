document.getElementById("createButton")
	.addEventListener("click", addCard);
document.getElementById("deleteButton")
	.addEventListener("click", deleteCard);

function addCard(event) {
	document.getElementById("cardGrid").innerHTML +=
	"<div class='myCards'>" + document.getElementById("textArea").value + "</div>";
}

function deleteCard(event) {
	document.getElementById("cardGrid").removeChild(document.getElementById("cardGrid").lastChild
)};