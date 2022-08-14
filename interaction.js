let counter = 0;

function selectFood(food){
    const selectedOption = document.querySelector(".food .selected")

    if(selectedOption === null){
        counter++;
    }else{
        selectedOption.classList.remove("selected")
    }

    food.classList.add("selected");

    if (counter ===3){
        const ButtonSelector = document.querySelector(".send");
        ButtonSelector.classList.add("available")
    }
}

function selectDrink(drink){

    const selectedOption = document.querySelector(".drink .selected")

    if(selectedOption === null){
        counter++;
    }else{
        selectedOption.classList.remove("selected")
    }

    drink.classList.add("selected");

    if (counter ===3){
        const ButtonSelector = document.querySelector(".send");
        ButtonSelector.classList.add("available")
    }
}

function selectDessert(dessert){
    const selectedOption = document.querySelector(".dessert .selected")

    if(selectedOption === null){
        counter++;
    }else{
        selectedOption.classList.remove("selected")
    }

    dessert.classList.add("selected");

    if (counter ===3){
        const ButtonSelector = document.querySelector(".send");
        ButtonSelector.classList.add("available")
    }
}





