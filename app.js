$(() => {
    $('#deal').attr('disabled', false);
    
    /* Want to create a card array. This should have 52 items. 1 - 11 
    (with 4 10s... or jack queen king and 10)
    Aces can be either 1 or 11. */
    const playerHand = [];
    const dealerHand = [];
    const deck = [];
    let totalValueP = 0;
    let totalValueD =0;

    function aceChecker(array) {
        const index = array.findIndex(i => i.denom === "11_ace" && i.value === 11)
        if (index !== -1) {
            array[index].value = 1
        }
    }

    function counterP() {
        totalValueP = playerHand.reduce(function(banana, apple){
            return banana + apple.value;
        }, 0)
        console.log(totalValueP);
        let i = 1
        while (totalValueP > 21 && i < playerHand.length ) {
            aceChecker(playerHand)
            i++
            totalValueP = playerHand.reduce(function(banana, apple){
                return banana + apple.value;
            }, 0)
            // for (var i = 0; i< playerHand.length; i++){
            //         if(playerHand[i].value === 11){
            //             playerHand[i].value = 1;
            //             counterP();
            //         }
            // }
        }
        if (totalValueP > 21){
            setTimeout(function(){ alert("YOU BUSTED!!"); }, 800);
            buttonsOff();
        }
            
    };
    function buttonsOff() {
        $('#hit').attr('disabled', true);
        $('#stand').attr('disabled', true);
        $('#deal').attr('disabled', true);
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
                    imgsource: "PNG-cards-1.3/"+ denoms[j]+ "_of_"+suits[i]+".png",
                    imgsource2: "PNG-cards-1.3/card_back.jpg"
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

    /* function counterP() {
        totalValueP = playerHand.reduce(function(banana, apple){
            return banana + apple.value;
        }, 0)
        console.log(totalValueP);
            if(totalValueP > 21){
                alert("YOU BUSTED!!");
            };
            
    };
    Moved this function to another location. */

    
    addCard();
    counterP();
    // if (totalValueP > 21) {
    //    for (var i = 0; i< playerHand.length; i++){
    //        if(playerHand[i].value === 11){
    //            playerHand[i].value = 1;
    //        }
    //    }
    //    return totalValueP;
    //}
    
    console.log(playerHand);

});
$("#deal").on("click", function(){
        alert("Let's play some freaking cards");
        $('#hit').attr('disabled', false);
        $('#stand').attr('disabled', false);
        $('#reset').attr('disabled', false);
        //$('#deal').attr('enabled', false);
       // $(".cardPlayer").css("background-color", "green");
    function dealStartingHand() {
        for (var i = 0; i < 2; i++){
            // playerHand.push({...deck[12]})
    playerHand.push({...deck[Math.floor(Math.random() * deck.length)]});
    //dealerHand.push(deck[Math.floor(Math.random() * deck.length)]);
    $("div.left-align").append(`<img src =` +playerHand[i].imgsource+` id = "cardsP">`);
    //$("div.right-align").append(`<img src =` +dealerHand[i].imgsource+` id = "cardsD">`);
         };

         dealerHand.push({...deck[Math.floor(Math.random() * deck.length)]});
         $("div.right-align").prepend(`<img src =` +dealerHand[dealerHand.length - 1].imgsource+` id = "cardsD">`);
         dealerHand.push({...deck[Math.floor(Math.random() * deck.length)]});
         $("div.right-align").prepend(`<img src =` +dealerHand[dealerHand.length - 1].imgsource2+` id = "cardsD">`);
        // $("div.right-align #cardsD").remove(dealerHand.imgsource);
        // $("div.right-align #cardsD").remove(dealerHand.imgsource).add(dealerHand.imgsource2);
         // trying to deal a card face down
         // this worked but broke game
         // so it kind of worked....
         
     // for (var j = 0; j < 1; j++) {
     //     dealerHand.push(deck[Math.floor(Math.random() * deck.length)]);
     //     $("div.right-align").append(`<img src =` +dealerHand[j].imgsource+` id = "cardsD">`);
     //    };
     //   for (var k = 0; k < 1; k++){
     //     dealerHand.push(deck[Math.floor(Math.random() * deck.length)]);
     //     $("div.right-align").append(`<img src =` +dealerHand[k].imgsource2+` id = "cardsD"`);
     //    };
      //   $("div.right-align:last").attr(dealerHand[1].imgsource, "PNG-cards-1.3/back_of_card.jpg>");
     $('#deal').attr('disabled', true);
        
    };
    dealStartingHand();
    console.log(playerHand);
    console.log(dealerHand);
    let totalValueD = dealerHand[0].value + dealerHand[1].value;
    let totalValueP = playerHand[0].value + playerHand[1].value;
    function compare(){
        if (totalValueP === 21 && totalValueD === 21) {
            setTimeout(function(){ alert("Push... Lame"); }, 800);
            buttonsOff();
        }
         else if (totalValueP === 21) {
            setTimeout(function(){ alert("Winner Winner Chicken Dinner"); }, 800);
            buttonsOff();
        }
         else if (totalValueD === 21){
            setTimeout(function(){ alert("Dealer hit blackjack.... Screw him"); }, 800);
            buttonsOff();
            $("div.right-align #cardsD:last").remove(dealerHand.imgsource2);
            $("div.right-align").prepend(`<img src =` +dealerHand[1].imgsource+` id = "cardsD">`);
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
    $('#reset').attr('disabled', false);
    $('#hit').attr('disabled', true);
    $('#stand').attr('disabled', true);
    $('#deal').attr('disabled', true);
  //  $("div.right-align:last-child").attr(dealerHand.imgsource);
   // $("div.right-align").last.show();
    //$("div.right-align").css("background-color", "green");
    //$("div.right-align").last(dealerHand).attr(`img src =`+ dealerHand[1].imgsource);
/* This should end the game from the users side.  After clicking stand this should
flip the dealer's face down card and make the dealer hit until he is at 17 or above.
This should also trigger the win condition.
1. If the dealer bust. The player wins.
2. If the dealer has less than the player. The player wins
3. If the dealer has equal to the player then it is a push.
4. If the dealer has more than the player the dealer wins.*/
$("div.right-align #cardsD:first").remove(dealerHand.imgsource2);
$("div.right-align").prepend(`<img src =` +dealerHand[1].imgsource+` id = "cardsD">`);

//$("div.right-align #cardsD:last").add(dealerHand.imgsource);
//$("div.right-align #cardsD:last").append(dealerHand[1].imgsource2, function(){
//        dealerHand[1].imgsource2 = dealerHand[1].imgsource;
//    })

function counterD() {
        totalValueD = dealerHand.reduce(function(banana, apple){
            return banana + apple.value;
        }, 0)
        let i = 1
        while (totalValueD > 21 && i < dealerHand.length){
            aceChecker(dealerHand)
            i++
            totalValueD = dealerHand.reduce(function(banana, apple){
                return banana + apple.value;
            }, 0)
            // for (let i = 0; i < dealerHand.length; i++){
            //     if(dealerHand[i].value === 11){
            //         dealerHand[i].value = 1;
            //         counterD();
            //     }
            // }
        }

};
counterD();
function dealerHit(){
    dealerHand.push(deck[Math.floor(Math.random() * deck.length)]);
    $("div.right-align").prepend(`<img src =` +dealerHand[dealerHand.length - 1].imgsource+` id = "cardsD">`);
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
        setTimeout(function(){ alert("You lose"); }, 800);
      } else if (totalValueD > 21){
        setTimeout(function(){ alert("Dealer busted. you win!"); }, 800);
      } else if (totalValueP > totalValueD){
        setTimeout(function(){ alert("You win. I like what you've got"); }, 800);
     } else if(totalValueP < totalValueD) {
        setTimeout(function(){ alert("Dealer won... suckkssssss"); }, 800);
     } else if (totalValueD === totalValueP){
        setTimeout(function(){ alert("Push"); }, 800);
     }
      
     
  };

  winning();
 });
 $("#reset").on("click",function(){
    $('#deal').attr('disabled', false);
    $('#hit').attr('disabled', true);
    $('#stand').attr('disabled', true);
    $('#reset').attr('disabled', true);
    $("div.right-align #cardsD").remove();
    $("div.left-align #cardsP").remove();
     playerHand.length = 0;
     dealerHand.length = 0;
     newDeck();
 });
 // wanting to add a bet counter function

});
