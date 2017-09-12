$(() => {
    /* Want to create a card array. This should have 52 items. 1 - 11 
    (with 4 10s... or jack queen king and 10)
    Aces can be either 1 or 11. */
    const suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
    const denoms = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
    const deck = [];
    function newDeck(){
        for(var i = 0; i < suits.length; i++){
            for(var j = 0; j < denoms.length; j++){
                let card = {denom: denoms[j], suit: suits[i]};
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
});
$("#deal").on("click", function(){
 /* This should start the game. When pressed this should deal
 two random cards to the player face up, and deal two random cards to the dealer
 one face up and one face down. This should also activate the hit me and stand buttons.
 */

});
$("#stand").on("click", function(){
    alert("Mama didn't raise a fool!!!");
/* This should end the game from the users side.  After clicking stand this should
flip the dealer's face down card and make the dealer hit until he is at 17 or above.
This should also trigger the win condition.
1. If the dealer bust. The player wins.
2. If the dealer has less than the player. The player wins
3. If the dealer has equal to the player then it is a push.
4. If the dealer has more than the player the dealer wins.*/

});

});