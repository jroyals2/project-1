$(() => {
    /* Want to create a card array. This should have 52 items. 1 - 11 
    (with 4 10s... or jack queen king and 10)
    Aces can be either 1 or 11. */
    const playerHand = [];
    const dealerHand = [];
    const deck = [];
    let totalValueP = 0;
    let totalValueD =0;
    function newDeck(){
        
        const suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
        const denoms = [2, 3, 4, 5, 6, 7, 8, 9, 10, "10_Jack", "10_Queen", "10_King", "11_Ace"];
        for(var i = 0; i < suits.length; i++){
            for(var j = 0; j < denoms.length; j++){
                let card = {
                    denom: denoms[j],
                    suit: suits[i], 
                    value: parseInt(denoms[j])
                    };
                deck.push(card);
            }
        }
        return deck;
    };
    console.log(newDeck())
$("#hit").on("click", function(){
    alert("show me what you've got");
    /* This is the hit button. I want to program this button
    to deal one random card from the cards array to the player. 
    I want this card to be made into a card div and placed into
    the main2 div class. 
    If the card places the players total in hand value over 21 then they bust and lose. */
    function addCard(){
        playerHand.push(deck[Math.floor(Math.random() * deck.length)]);
    }

    function counterP() {
        totalValueP = playerHand.reduce(function(banana, apple){
            return banana + apple.value;
        }, 0)
        console.log(totalValueP);
            if(totalValueP > 21){
                console.log("YOU BUSTED!!");
            };
            
    };


    addCard();
    counterP();
    console.log(playerHand);

});
$("#deal").on("click", function(){
        alert("Let's play some freaking cards");
        $(".cardPlayer").css("background-color", "white");
    function dealStartingHand() {
        for (var i = 0; i < 2; i++){
    playerHand.push(deck[Math.floor(Math.random() * deck.length)]);
    dealerHand.push(deck[Math.floor(Math.random() * deck.length)]);
         };
    };
    dealStartingHand();
    console.log(playerHand);
    console.log(dealerHand);
    let totalValueD = dealerHand[0].value + dealerHand[1].value;
    let totalValueP = playerHand[0].value + playerHand[1].value;
    function compare(){
        if (totalValueP && totalValueD === 21) {
        console.log("Push");
        } else if (totalValueP === 21) {
        console.log("Winner winner chicken dinner!!");
        } else if (totalValueD === 21){
        console.log("Dealer hit blackjack. Screw him");
        } else if (totalValueP > 21) {
            console.log("You Busted");
        } else if (totalValueD > 21){
            console.log("Dealer Busted!!! You win!!")
        }
    };
    compare();

 /* This should start the game. When pressed this should deal
 two random cards to the player face up, and deal two random cards to the dealer
 one face up and one face down. This should also activate the hit me and stand buttons.
 */
});
$("#stand").on("click", function(){
    alert("Mama didn't raise a fool!!!");
    $(".cardDealer").css("background-color", "white");
/* This should end the game from the users side.  After clicking stand this should
flip the dealer's face down card and make the dealer hit until he is at 17 or above.
This should also trigger the win condition.
1. If the dealer bust. The player wins.
2. If the dealer has less than the player. The player wins
3. If the dealer has equal to the player then it is a push.
4. If the dealer has more than the player the dealer wins.*/


function counterD() {
        totalValueD = dealerHand.reduce(function(banana, apple){
            return banana + apple.value;
        }, 0)
        console.log(totalValueD);
            if(totalValueD > 21){
                console.log("YOU BUSTED!!");
            }; 
        
};
counterD();
function dealerHit(){
    dealerHand.push(deck[Math.floor(Math.random() * deck.length)]);
 };
 function addCardDealer(){
     if (totalValueD < 17){
         dealerHit();
     } else if (totalValueD <= 21){
         return totalValueD;
     } else if (totalValueD > 21){
         console.log("Dealer bust");
     };
    };
    addCardDealer();
});

});