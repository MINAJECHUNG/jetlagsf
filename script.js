const cardData1 = [
    { 
        title: "Down a Container of Hot Sauce",
        description: "Obtain a container of Hot Sauce - it could be a bottle or just a packet, and drink the entire thing. You may split it between your partners. If you are more than 1.5 miles away from any reasonable place to obtain hot sauce, you may shuffle this back into your deck.",
        reward: 400
    },
    { 
        title: "Multimodal Extravaganza",
        description: "Find and ride 4 different modes of transportation. A mode counts as a change of transportation type. Some examples would be Bus, Heavy Rail, Ferry, Light Rail, Bicycle, Bike, Commuter Coach, Trackless Trolley… You may use this challenging transportation to get around, and all vehicles are half price, with exception of the ferry for the duration of the ferry. You may not ride the same mode in the row while doing this challenge. As soon as this challenge is drawn, the conditions start.",
        reward: 800
    },
    { 
        title: "Fast Food Mile",
        description: "Buy 4 different items at 4 different fast food chains, and find a place where you can run one mile straight. One partner will run ¼ of a mile, then eat / drink the entirety of one of the items. Repeat until finished. Track miles ran with an Apple Watch or workout on the phone.",
        reward: 750
    },
    { 
        title: "Have a Snowball Fight",
        description: "Get a bag of ice, and some powdered sugar and make some “snowballs” - then have a “snowball fight” with your partner, you must make at least 6 snowballs and make hits at least twice.",
        reward: 600
    },
    { 
        title: "Obtain a Condom",
        description: "This is legal.",
        reward: 800
    },
    { 
        title: "Win something from an Arcade or Gaming Machine",
        description: "It does not have to be at an arcade, but you must win something.",
        reward: 500
    },
    { 
        title: "Witness a crime.",
        description: "Witness a crime and film it. Remember, Jaywalking isn’t a crime anymore.",
        reward: 900
    },
    { 
        title: "Build a Taco",
        description: "Create a taco using ingredients. Must contain a tortilla, a filler (lettuce etc) and a protein (meat or veggies). You don’t have to heat it up, but you must eat the entire thing. Of the three items, each must be gotten a quarter of a mile away from the other.",
        reward: 850
    },
    { 
        title: "Buy the Local Paper and Solve One of the Puzzles",
        description: "The paper must be local to the town or the state. If no local paper has any puzzles, then draw a new card and shuffle this one back into the deck.",
        reward: 1000
    },
    { 
        title: "Go Exactly One Mile",
        description: "Close your eyes, spin in a circle, and point in a random direction. You must go as close as possible (on publicly accessible land) to the location exactly 1 mile in that direction.",
        reward: 750
    },
    { 
        title: "CURSED! Get a Sandwich Immediately",
        description: "You must have ordered a sandwich in the next 20 minutes. If you have not ordered in the next 20 minutes, this card is vetoed. Sandwich is up to interpretation, and you can make a sudo sandwich from a grocery store. As long as your item fulfills the definition of a sandwich, it counts. Chosen dictionary def: two or more slices of bread or a split roll having a filling in between.",
        reward: 1000
    },
    { 
        title: "Photograph Your Partner From Far Away",
        description: "From a distance of at least half a mile, one team member must take a photo of the other team member. The team member must be visible - but not necessarily recognizable - in the photo.",
        reward: 750
    },
    { 
        title: "Be Fast and Furious",
        description: "Reach a speed of 20 miles per hour by your own power while angrily ranting about something you don’t like. You can confirm speed by using the Speedometer Simple App.",
        reward: 450
    },
    { 
        title: "Duolingo Speedrun",
        description: "Complete 5 Duolingo lessons in at least 3 different languages, then text an identical sentence to the main group chat. You may not use google translate. You cannot be fluent in the languages you choose.",
        reward: 500
    },
    { 
        title: "Solve a Nueva Level Riddle",
        description: "Call this genius: ‭+1 (650) 248-9412‬ (Named Aurelia, She/Her) and answer the puzzle correctly. If you fail, this challenge is automatically vetoed. If she does not pick up, shuffle back in and draw a new card.",
        reward: 750
    },
    { 
        title: "Paint Your Nails",
        description: "Paint your nails using nail polish or paint. You may not have the paint already on you, and cannot pay more than 5 dollars for whatever you use.",
        reward: 650
    },
    { 
        title: "CURSED! Limited Options",
        description: "The next bus stop you board at cannot have the words, “St, Ave, Bvld, Hwy” - use Apple maps to see the name of the stop. Bus Pad, Bay, etc, are all allowed.",
        reward: 850
    },
    { 
        title: "CURSED! Melon Curse",
        description: "Before progressing in the game, you must exit whatever mode of transportation you are on at the next stop, and go directly to obtain a melon of any kind. You then must always have it with you until you cross back onto your side.",
        reward: 1000
    },
    { 
        title: "CURSED! Double Back Bitch™",
        description: "Whatever the last transit route you took, head to one of the ends of it. You must pay for the trip to the end, and may have another active challenge in addition to this one. This challenge has a 45 minute time limit + the headway of the mode you are taking.",
        reward: "1000 Instantly + Triple the amount of the cost of the transit trip."
    },
    { 
        title: "Worst Attraction",
        description: "Using TripAdvisor, within 2 miles of you, visit the worst rated attraction and leave a 5 star honest review.",
        reward: 750
    }
];

// Second card data set
const cardData2 = [
    { 
        title: "Bus > Train",
        description: "Bus costs are halved and train costs are doubled for 30 minutes.",
    },
    { 
        title: "Muni Monopoly",
        description: "Muni costs 100 coins less (round 1) or 50 coins less (round 2 and 3) but you can only ride muni for the next hour. Muni counts as both trains and buses.",
    },
    { 
        title: "Disable powerup",
        description: "Disable your group’s tracker for 10 minutes.",
    },
    { 
        title: "If I Can’t See You, You Can't See Me!",
        description: "Disable your group’s tracker for 15 minutes. You may not look at Find My for 10 minutes.",
    },
    { 
        title: "50-50",
        description: "Flip a coin. If heads, the next ride you take is free.",
    },
    { 
        title: "Freeze, Bitch!",
        description: "Freeze an opponent for 30 minutes.",
    },
    { 
        title: "Tacos all day every day",
        description: "An opposing pair must get off at the next station, buy tacos, and eat them. They cannot do any challenges. They may only move in the direction of the nearest taco restaurant.",
    },
    { 
        title: "Open Box Discount",
        description: "If currently on a train, your current ride is free, otherwise, you must pay 500 coins.",
    },
    { 
        title: "Honey gave you a coupon code",
        description: "For the next hour, all transit costs 75 coins less per mile.",
    },
    { 
        title: "Capitalism",
        description: "Your opponent must get off transit and freeze and opponent must film a 90 second ad about a product of your choice. They have 30 minutes to do so.",
    },
    { 
        title: "Sharing is caring",
        description: "The other group you are teamed with will get double the amount of coins for the next challenge you complete. If doing a challenge together, double the coins only for the other group.",
    },
    { 
        title: "Yoink!",
        description: "Take 20% (rounded up) of the coins from any group.",
    },
    { 
        title: "Pastybara",
        description: "You may choose to do the next challenge or item card you draw twice in a row.",
    },
    { 
        title: "Diabolic tutor",
        description: "Search your challenge deck for any challenge you want. Do that challenge.",
    },
    { 
        title: "Veto the Veto",
        description: "The next time you veto a challenge card, it has no effect.",
    },
    { 
        title: "Mr Beast",
        description: "Get off at the next stop for 2000 coins! (If not on transit, this card is void).",
    },
    { 
        title: "Twiggy arms",
        description: "You cannot tag or be tagged physically. If you tag or are picture tagged, take all coins instead of half.",
    },
    { 
        title: "The Essential Question",
        description: "You may save this card and play it later. Play this card when targeted by an item. The person who targeted you has 10 minutes to write a 100-word essay about why you deserve to be targeted. This card does not affect tower effects.",
    },
    { 
        title: "1v1 me bozo",
        description: "Immediately go to Embarcadero Station. Force an opponent to immediately go to Embarcadero station. Play a round of rock paper scissors. If you win, freeze your opponent for 20 min and take half their coins. If your opponent wins, they take 60% of your coins and you get frozen for 30 min.",
    },
    { 
        title: "Fog of War",
        description: "For the next hour, you are immune to picture tags. You may not use picture tags. (You can only tag and be tagged physically).",
    },
    { 
        title: "Curse reversal",
        description: "The next time you draw a curse, curse another group instead. You still obtain the coin reward. Do not play this card until you draw a curse.",
    },
    { 
        title: "Communism",
        description: "For the next hour, you receive half the coins from your opponent’s challenges.",
    },
    { 
        title: "Shread",
        description: "Tear up an item or challenge card of your choice. This does not reset at the end of the round.",
    },
    { 
        title: "Eternal Melon",
        description: "¼ mile. All opposing groups. You may only enter this tower if you are holding a melon.",
    },
    { 
        title: "Karl Zone",
        description: "½ mile. All. No picture tags in this zone.",
    },
    { 
        title: "Inflation on the rise",
        description: "¾ mile. All opposing groups. All transit costs 200 coins more in this zone.",
    },
    { 
        title: "Airplane Mode",
        description: "½ mile. All. When you enter this zone, declare Airplane mode! In the group chat and set your phone to airplane mode. This will disable your tracker but also stop you from looking at other people’s location. When inside, you may not text, track, or call even when in a wifi zone.",
    },
    { 
        title: "Death and Taxes",
        description: "¾ mile. All opposing groups. Pay the owner of this tower 200 coins entry fee and 100 coins per hour spent in the zone. If a group is already in the radius, they must pay the entry fee anyway.",
    },
    { 
        title: "Speed Tower",
        description: "3 miles. Your entire team. Transit cost are halved.",
    },
    { 
        title: "DnD tower",
        description: "1 mile. Opposing team. When traveling, you must roll a d20. You may only move that many steps before rolling again.",
    },
];

// Shuffle array utility function
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Initialize the shuffled decks
let shuffledCardData1 = shuffle([...cardData1]);
let shuffledCardData2 = shuffle([...cardData2]);

// Function to draw a card ensuring no repeats until deck is empty
function drawUniqueCard(shuffledDeck, originalDeck) {
    if (shuffledDeck.length === 0) {
        shuffledDeck.push(...shuffle([...originalDeck]));
    }
    return shuffledDeck.pop();
}

// Generate a random card for Card 1
document.getElementById('generateCard1').addEventListener('click', function() {
    const randomCard1 = drawUniqueCard(shuffledCardData1, cardData1);
    document.getElementById('cardResult1').innerHTML = `
        <div class="card-title">${randomCard1.title}</div>
        <div class="card-description">${randomCard1.description}</div>
        <div class="card-reward">Reward: ${randomCard1.reward}</div>
    `;
});

// Generate a random card for Card 2
document.getElementById('generateCard2').addEventListener('click', function() {
    const randomCard2 = drawUniqueCard(shuffledCardData2, cardData2);
    document.getElementById('cardResult2').innerHTML = `
        <div class="card-title">${randomCard2.title}</div>
        <div class="card-description">${randomCard2.description}</div>
    `;
  });