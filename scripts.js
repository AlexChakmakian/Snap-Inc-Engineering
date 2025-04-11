/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

const MESSI_URL = 
"https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg";
const RONALDO_URL = 
"https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg";
const MARADONA_URL = 
"https://upload.wikimedia.org/wikipedia/commons/2/2c/Maradona-Mundial_86_con_la_copa.JPG";
const ZIDANE_URL = 
"https://upload.wikimedia.org/wikipedia/commons/f/f3/Zinedine_Zidane_by_Tasnim_03.jpg";
const PELE_URL = 
"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Pele_con_brasil_%28cropped%29.jpg/250px-Pele_con_brasil_%28cropped%29.jpg";

// Hashmap/dictionary for Country Flags
const countryFlags = {
  "Argentina": "🇦🇷",
  "Portugal": "🇵🇹",
  "Brazil": "🇧🇷",
  "France": "🇫🇷",
  "Netherlands": "🇳🇱",
  "Spain": "🇪🇸",
  "Italy": "🇮🇹",
  "Germany": "🇩🇪",
  "England": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
  "Uruguay": "🇺🇾",
  "USA": "🇺🇸",
};

// Player Data
let players = [
  {
    name: "Lionel Messi",
    imageURL: MESSI_URL,
    team: "Inter Miami CF (previously Barcelona, PSG)",
    position: "Forward",
    achievements: "8x Ballon dOr, World Cup champion, 4x Champions League",
    country: "Argentina",
    birthYear: 1987,
    goals: 821,
    assists: 363,
    careerHighlights: [
      "Set record for most goals in a calendar year (91 in 2012)",
      "Most goals for a single club (672 for Barcelona)",
      "Argentina's all-time leading scorer"
    ]
  },
  {
    name: "Cristiano Ronaldo",
    imageURL: RONALDO_URL,
    team: "Al Nassr (previously Real Madrid, Man United, Juventus)",
    position: "Forward",
    achievements: "5x Ballon d'Or, 5x Champions League, Euro 2016 champion",
    country: "Portugal",
    birthYear: 1985,
    goals: 873,
    assists: 285,
    careerHighlights: [
      "All-time top goalscorer in men's international football",
      "Most Champions League goals (140+)",
      "First player to score 800+ career goals"
    ]
  },
  {
    name: "Diego Maradona",
    imageURL: MARADONA_URL,
    team: "Napoli/Argentina (retired)",
    position: "Attacking Midfielder / Second Striker",
    achievements: "World Cup winner 1986, 'Goal of the Century' scorer",
    country: "Argentina",
    birthYear: 1960,
    goals: 310,
    assists: 212,
    careerHighlights: [
      "Led Argentina to World Cup victory in 1986",
      "Famous 'Hand of God' goal against England",
      "Transformed Napoli into Serie A champions"
    ]
  },
  {
    name: "Zinedine Zidane",
    imageURL: ZIDANE_URL,
    team: "Real Madrid/Juventus (retired)",
    position: "Attacking Midfielder",
    achievements: "World Cup winner 1998, 3x FIFA World Player of the Year",
    country: "France",
    birthYear: 1972,
    goals: 125,
    assists: 178,
    careerHighlights: [
      "Scored two goals in 1998 World Cup final",
      "Famous volley goal in Champions League final",
      "Led France to Euro 2000 victory"
    ]
  },
  {
    name: "Pelé",
    imageURL: PELE_URL,
    team: "Santos/Brazil (retired)",
    position: "Forward",
    achievements: "3x World Cup winner (1958, 1962, 1970), 1000+ goals",
    country: "Brazil",
    birthYear: 1940,
    goals: 1279,
    assists: "N/A",
    careerHighlights: [
      "Only player to win three World Cups",
      "Youngest World Cup winner at age 17",
      "Named FIFA Player of the Century"
    ]
  }
];

// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < players.length; i++) {
    
    let player = players[i];
    
    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, player); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, player) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = player.name;

  const cardImage = card.querySelector("img");
  cardImage.src = player.imageURL;
  cardImage.alt = player.name + " image";

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  const flagContainer = document.createElement("div");
  flagContainer.className = "flag-container";
  flagContainer.style.textAlign = "center";
  flagContainer.style.fontSize = "2em";
  flagContainer.style.margin = "5px 0";
  // get flag emoji
  const flagEmoji = countryFlags[player.country] || "🏴"; // if flag not found, random flag
  flagContainer.innerHTML = `${flagEmoji} <span style="font-size: 0.5em;">${player.country}</span>`;
  // insert flag after image
  const imageParent = cardImage.parentNode;
  imageParent.insertBefore(flagContainer, cardImage.nextSibling);

  const listItems = card.querySelectorAll("li");
  listItems[0].textContent = "Team: " + player.team;
  listItems[1].textContent = "Position: " + player.position;
  listItems[2].textContent = "Achievements: " + player.achievements;

  console.log("new card:", player.name, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
  console.log("Button Clicked!");

  const playerName = prompt("Enter player name:");
  if (!playerName) return;

  const playerCountry = prompt("Enter player country:");
  const playerTeam = prompt("Enter player team:");
  const playerPosition = prompt("Enter player position:");
  const playerAchievements = prompt("Enter player achievements:");

  const newPlayer = {
    name: playerName,
    imageURL: "https://i.fbcd.co/products/original/one007e-68-e05-mainpreview-be8eac2abc8dd95b83d040f95ffd023d41d1c5651eaa244f7384b040cce2b1ab.jpg",
    team: playerTeam,
    position: playerPosition,
    achievements: playerAchievements,
    country: playerCountry,
    careerHighlights: [
      "Added by user"
    ] 
  };

  players.push(newPlayer);

  showCards();

  const flag = countryFlags[playerCountry] || "🏴"; // put flag image if nothing else
  alert(`Added ${newPlayer.name} to the list of top soccer players!`);
}

function removeLastCard() {
  if (players.length > 0) {
    const removedPlayer = players.pop(); //remove the last player from array
    showCards();
    alert(`Removed ${removedPlayer.name} from the list of top soccer players!`);
  }
  else {
    alert("No more players to remove!");
  }
}

function filterByCountry() {
  const country = prompt("Enter country to filter by (e.g., Argentina, Brazil, France):");
  if (!country) return;

  const filteredPlayers = players.filter(player => player.country.toLowerCase() == country.toLowerCase());

  if (filteredPlayers.length == 0) {
    alert(`No players found from ${country}`);
    return;
  }

  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = ""; // Clear existing cards
  const templateCard = document.querySelector(".card");
  
  for (let i = 0; i < filteredPlayers.length; i++) {
    let player = filteredPlayers[i];
    const nextCard = templateCard.cloneNode(true);
    editCardContent(nextCard, player);
    cardContainer.appendChild(nextCard);
  }

  
  
  const flag = countryFlags[country];
  alert(`Showing players from ${country}`);
}