const totalDeals = 100;
let previousDeals = [];
let bankerWins = [];
let playerWins = [];
let cashOnHand = 1000;
let betAmount = 0;
let myBet = ''; //banker, player

// Deal hand function
function dealCards() {

    // randomize card deal
    let deal = Math.floor(Math.random() * 10);
    console.log(deal);
    previousDeals.push(deal);

    // who wins
    if (deal > 5) {
        console.log('Banker won');
        bankerWins.push(deal);
        playerWins = [];
    } else if (deal < 5) {
        console.log('Player won');
        playerWins.push(deal);
        bankerWins = [];
    } else {
        console.log('tie');
        if (bankerWins.length > 0) {
            bankerWins.push(deal);
        } else if (playerWins.length > 0) {
            playerWins.push(deal);
        };
    };

    // bet if
    betAmount = 0;
    myBet = 'none'
    if (bankerWins.length === 4) {
        betAmount = 10;
        myBet = 'player';
    } else if (bankerWins.length === 5) {
        betAmount = 20;
        myBet = 'player';
    } else if (bankerWins.length === 6) {
        betAmount = 40;
        myBet = 'player';
    } else if (bankerWins.length === 7) {
        betAmount = 80;
        myBet = 'player';
    } else if (bankerWins.length === 8) {
        betAmount = 160;
        myBet = 'player';
    } else if (bankerWins.length === 9) {
        betAmount = 230;
        myBet = 'player';
    } else if (bankerWins.length === 10) {
        betAmount = 460;
        myBet = 'player';
    } else if (bankerWins.length > 10) {
        betAmount = 0;
        myBet = 'player';
    } else if (playerWins.length === 4) {
        betAmount = 10;
        myBet = 'banker';
    } else if (playerWins.length === 5) {
        betAmount = 20;
        myBet = 'banker';
    } else if (playerWins.length === 6) {
        betAmount = 40;
        myBet = 'banker';
    } else if (playerWins.length === 7) {
        betAmount = 80;
        myBet = 'banker';
    } else if (playerWins.length === 8) {
        betAmount = 160;
        myBet = 'banker';
    } else if (playerWins.length === 9) {
        betAmount = 230;
        myBet = 'banker';
    } else if (playerWins.length === 10) {
        betAmount = 460;
        myBet = 'banker';
    } else if (playerWins.length > 10) {
        betAmount = 0;
        myBet = 'banker';
    };

    // make the bet
    if (deal > 5 && myBet == 'player') {
        cashOnHand = cashOnHand + betAmount;
        console.log(`Deal was: ${deal} meaning banker won, and my bet was ${myBet} for $${betAmount}, and I am holding $${cashOnHand} on hand`);
    } else if (deal > 5 && myBet == 'banker') {
        cashOnHand = cashOnHand - betAmount;
        console.log(`Deal was: ${deal} meaning banker won, and my bet was ${myBet} for $${betAmount}, and I am holding $${cashOnHand} on hand`);
    } else if (deal < 5 && myBet == 'player') {
        cashOnHand = cashOnHand + betAmount;
        console.log(`Deal was: ${deal} meaning player won, and my bet was ${myBet} for $${betAmount}, and I am holding $${cashOnHand} on hand`);
    } else if (deal < 5 && myBet == 'banker') {
        cashOnHand = cashOnHand - betAmount;
        console.log(`Deal was: ${deal} meaning player won, and my bet was ${myBet} for $${betAmount}, and I am holding $${cashOnHand} on hand`);
    } else if (myBet == 'banker' || myBet == 'player') {
        cashOnHand = cashOnHand - betAmount;
    }else if (myBet == 'none') {
        console.log('No bet.')
    };
};

// Play game
for (let i = 0; i <= totalDeals; i++) {
    console.log(`Game: ${i}`);
    dealCards();
};
