let cardsChosen = []
let cardsWon = []
const result = document.querySelector(".result")
const cards = [
    {
        name:"Fries",
        image:"img/fries.png",
       
    },
    {
        name:"Fries",
        image:"img/fries.png",
     
    },
    {
        name:"Cheeseburger",
        image: "img/cheeseburger.png",
       
    },
    {
        name:"Hotdog",
        image: "img/hotdog.png",
    
    },
    {
        name: "İce-Cream",
        image: "img/ice-cream.png",
        
    },
    {
        name: "Milkshake",
        image: "img/milkshake.png",
       
    },
    {
        name: "Pizza",
        image: "img/pizza.png",
        
    },
    {
        name:"Cheeseburger",
        image: "img/cheeseburger.png",
     
    },
    {
        name: "Pizza",
        image: "img/pizza.png",
       
    },
    {
        name:"Hotdog",
        image: "img/hotdog.png",
        
    },
    {
        name: "İce-Cream",
        image: "img/ice-cream.png",
       
    },
    {
        name: "Milkshake",
        image: "img/milkshake.png",
        
    },
]

cards.sort(() => 0.5 - Math.random())


const grid = document.querySelector(".grid")


function createBoard(){
    for (let i = 0; i < cards.length; i++) {
         const card = document.createElement("img")
         card.setAttribute("src","img/blank.png")
         card.setAttribute("data-id",i)
         card.setAttribute("alt",cards[i].name)
         card.addEventListener("click",flipCard)
         grid.appendChild(card)
        
    }
}



function flipCard(){
     let cardId = this.getAttribute("data-id")
     cardsChosen.push(cardId)
     cardsChosen.push(this.getAttribute("alt"))
     this.setAttribute("src",cards[cardId].image)
     if (cardsChosen.length === 4) {
         setTimeout(check,500)
     }
}

function check(){
    const images = document.querySelectorAll("img")
    const cardId1 = cardsChosen[0]
    const cardId2 = cardsChosen[2]
    const cardName1 = cardsChosen[1]
    const cardName2 = cardsChosen[3]
    if (cardId1 === cardId2) {
        alert("Aynı karta tıklayamazsın.")
        images[cardId1].setAttribute("src","img/blank.png")
        images[cardId2].setAttribute("src","img/blank.png")
    }else if(cardName1===cardName2){
        alert("Doğru eşleştirme!")
        images[cardId1].setAttribute("src","img/white.png")
        images[cardId2].setAttribute("src","img/white.png")
        images[cardId1].removeEventListener("click",flipCard)
        images[cardId2].removeEventListener("click",flipCard)
        cardsWon.push(cardsChosen)
    }else{
        images[cardId1].setAttribute("src","img/blank.png")
        images[cardId2].setAttribute("src","img/blank.png")
        alert("Yeniden dene")
    }
    cardsChosen = []
    result.textContent = cardsWon.length
    if (cardsWon.length == 6) {
        alert("Oyun Bitti")
    }
}
console.log(cardsWon);
console.log(cards);
createBoard()