let counter = 0;

const ButtonSelector = document.querySelector(".send");
const FinishBlock = document.querySelector(".fogger")
const FinishSection = document.querySelector("section")

function selectFood(food){

    const selectedFood = document.querySelector(".food .selected");

    if(selectedFood === null){
        counter++;
    }else{
        selectedFood.classList.remove("selected")
    }

    food.classList.add("selected");

    if (counter ===3){
        ButtonSelector.classList.add("available");
        ButtonSelector.innerHTML = "Fechar pedido";
    }
}

function selectDrink(drink){

    const selectedDrink = document.querySelector(".drink .selected");

    if(selectedDrink === null){
        counter++;
    }else{
        selectedDrink.classList.remove("selected")
    }

    drink.classList.add("selected");

    if (counter ===3){
        ButtonSelector.classList.add("available");
        ButtonSelector.innerHTML = "Fechar pedido";
    }
}

function selectDessert(dessert){

    const selectedDessert = document.querySelector(".dessert .selected");

    if(selectedDessert === null){
        counter++;
    }else{
        selectedDessert.classList.remove("selected")
    }

    dessert.classList.add("selected");

    if (counter ===3){
        ButtonSelector.classList.add("available")
        ButtonSelector.innerHTML = "Fechar pedido"
    }
}

function reviewFood(){
    let foodName = document.querySelector(".food .selected h3").innerHTML;
    let drinkName = document.querySelector(".drink .selected h3").innerHTML;
    let dessertName = document.querySelector(".dessert .selected h3").innerHTML;
        
    let foodValue= Number(document.querySelector(".food .selected h4").className)
    let drinkValue= Number(document.querySelector(".drink .selected h4").className)
    let dessertValue= Number(document.querySelector(".dessert .selected h4").className)

    const TransFog = document.querySelector(".fogger")

    let totalValue = foodValue + drinkValue + dessertValue
    totalValue = totalValue.toFixed(2)

    if (ButtonSelector.classList.contains("available")){
        const food = document.querySelector("#foodPrice")
        food.innerHTML = foodValue
        const drink = document.querySelector("#drinkPrice")
        drink.innerHTML = drinkValue
        const dessert = document.querySelector("#dessertPrice")
        dessert.innerHTML = dessertValue
        const fValue = document.querySelector("#foodName")
        fValue.innerHTML = foodName
        const drValue = document.querySelector("#drinkName")
        drValue.innerHTML = drinkName
        const deValue = document.querySelector("#dessertName")
        deValue.innerHTML = dessertName
        const payment = document.querySelector("#total")
        payment.innerHTML = "R$ " + totalValue
        FinishBlock.classList.remove("hidden")
        FinishSection.classList.remove("hidden")
    }

}

function FinishOrder(){
    let foodName = document.querySelector(".food .selected h3").innerHTML;
    let drinkName = document.querySelector(".drink .selected h3").innerHTML;
    let dessertName = document.querySelector(".dessert .selected h3").innerHTML;
        
    let foodValue= Number(document.querySelector(".food .selected h4").className)
    let drinkValue= Number(document.querySelector(".drink .selected h4").className)
    let dessertValue= Number(document.querySelector(".dessert .selected h4").className)

    let totalValue = foodValue + drinkValue + dessertValue
    totalValue = totalValue.toFixed(2)

    const name = prompt("Qual o seu nome:")
    const address = prompt("Qual o seu endereço:")
    const text = `Olá, gostaria de fazer o pedido: \n
    - Prato: ${foodName}
    - Bebida: ${drinkName}
    - Sobremesa: ${dessertName}
    Total: R$${totalValue}

    Nome: ${name}
    Endereço: ${address}`;    

    const encriptedtext = encodeURIComponent(text)

    const link = document.querySelector("section .finishOrder a")
    link.href = `https://wa.me/5561991240842?text=`+ encriptedtext;

}

function returnPage(){
    FinishBlock.classList.add("hidden")
    FinishSection.classList.add("hidden")
}



