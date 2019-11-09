//function remove() {
//    //alert("asdasd");
//    var card = document.getElementById("card-to-delete");
//    card.parentElement.removeChild(card);
//}
//function add(){
//    car card = document.getElementById("card-to-delete");
//    document.body.appendChild(card);//УСтаревший код. Сейчас - библиотеки. jquery
//}
function removeByJquery() {

    var element = $("#card-to-delete"); //как в css можно .card class    # id
    element.remove(); //можно без .card

}

function add() {
    //если внутрь элемента, то как ребенка. Обычно - после, after. append закончить/склеить
    var but2 = $("#add-but"); //нашли элемент, но таких несколько, массив.
    but2.after("#card-to-delete");
}
//динамические вещи это джава

var current = "green";

function turn(number) {
    //alert(number);
    console.log(number);
    $("#s" + number).css("background-color", current);
    if (current === "green") {

        current = "red";
    } else {
        current = "green";
    }
    $("#s"+number).prop("disabled", true);
    
    for(let i = 0; i<10; i++){
        
    }
}

