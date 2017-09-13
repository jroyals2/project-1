$(() => {
    /* Want to create a card array. This should have 52 items. 1 - 11 
    (with 4 10s... or jack queen king and 10)
    Aces can be either 1 or 11. */
    const playerHand = [];
    const dealerHand = [];
    const deck = [];
    let totalValueP = 0;
    let totalValueD =0;

    function counterP() {
        totalValueP = playerHand.reduce(function(banana, apple){
            return banana + apple.value;
        }, 0)
        console.log(totalValueP);
            if(totalValueP > 21){
                alert("YOU BUSTED!!");
            };
            
    };

    function newDeck(){
        
        const suits = ["spades", "hearts", "diamonds", "clubs"];
        const denoms = [2, 3, 4, 5, 6, 7, 8, 9, 10, "10_jack", "10_queen", "10_king", "11_ace"];
        for(var i = 0; i < suits.length; i++){
            for(var j = 0; j < denoms.length; j++){
                let card = {
                    denom: denoms[j],
                    suit: suits[i], 
                    value: parseInt(denoms[j]),
                    imgsource: "PNG-cards-1.3/"+ denoms[j]+ "_of_"+suits[i]+".png"
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
        $("div.left-align").append(`<img src =` +playerHand[playerHand.length - 1].imgsource+` id = "cardsP">`);
    }

    /*function counterP() {
        totalValueP = playerHand.reduce(function(banana, apple){
            return banana + apple.value;
        }, 0)
        console.log(totalValueP);
            if(totalValueP > 21){
                alert("YOU BUSTED!!");
            };
            
    };*/

    
    addCard();
    counterP();
    console.log(playerHand);

});
$("#deal").on("click", function(){
        alert("Let's play some freaking cards");
        $(".cardPlayer").css("background-color", "green");
    function dealStartingHand() {
        for (var i = 0; i < 2; i++){
    playerHand.push(deck[Math.floor(Math.random() * deck.length)]);
    dealerHand.push(deck[Math.floor(Math.random() * deck.length)]);
    $("div.left-align").append(`<img src =` +playerHand[i].imgsource+` id = "cardsP">`);
    $("div.right-align").append(`<img src =` +dealerHand[i].imgsource+` id = "cardsD">`);
         };
    };
    dealStartingHand();
    console.log(playerHand);
    console.log(dealerHand);
    let totalValueD = dealerHand[0].value + dealerHand[1].value;
    let totalValueP = playerHand[0].value + playerHand[1].value;
    function compare(){
        if (totalValueP === 21 && totalValueD === 21) {
        alert("Push");
        } else if (totalValueP === 21) {
        alert("Winner winner chicken dinner!!");
        } else if (totalValueD === 21){
        alert("Dealer hit blackjack. Screw him");
        };
    };
    compare();

 /* This should start the game. When pressed this should deal
 two random cards to the player face up, and deal two random cards to the dealer
 one face up and one face down. This should also activate the hit me and stand buttons.
 */
});
$("#stand").on("click", function(){
    alert("Mama didn't raise a fool!!!");
    $("div.right-align").css("background-color", "green");
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
};
counterD();
function dealerHit(){
    dealerHand.push(deck[Math.floor(Math.random() * deck.length)]);
    $("div.right-align").append(`<img src =` +dealerHand[dealerHand.length - 1].imgsource+` id = "cardsD">`);
 };
 function addCardDealer(){
     while (totalValueD < 17){
         dealerHit();
         counterD();
         console.log(totalValueD);
        }
       if (totalValueD <= 21){
        return totalValueD;
       } else if (totalValueD > 21){
        console.log("Dealer has " + totalValueD)
        console.log("Dealer bust");
     };
  };
    addCardDealer();
    
  function winning() {
      counterD();
      counterP();
      if (totalValueP > 21) {
          alret("You lose");
      } else if (totalValueD > 21){
          alert("Dealer busted. You win");
      } else if (totalValueP > totalValueD){
         alert("Player Wins. I Like what you've got");
     } else if(totalValueP < totalValueD) {
        alert("Dealer Wins. You Lose");
     } else if (totalValueD === totalValueP){
        alert("Push");
     }
     //$("#reset").on("click", reset());
  };

  winning();
 });

});