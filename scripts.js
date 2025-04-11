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
  "England": "🇬🇧",
  "Uruguay": "🇺🇾",
  "USA": "🇺🇸",
  "Sweden": "🇸🇪",
};

// Player Data
let players = [
  {
    name: "Lionel Messi",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg",
    team: "Inter Miami CF (previously Barcelona, PSG)",
    position: "Forward",
    achievements: "8x Ballon dOr, World Cup champion, 4x Champions League",
    country: "Argentina",
    careerHighlights: [
      "Set record for most goals in a calendar year (91 in 2012)",
      "Most goals for a single club (672 for Barcelona)",
      "Argentina's all-time leading scorer"
    ]
  },
  {
    name: "Cristiano Ronaldo",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg",
    team: "Al Nassr (previously Real Madrid, Man United, Juventus)",
    position: "Forward",
    achievements: "5x Ballon d'Or, 5x Champions League, Euro 2016 champion",
     country: "Portugal",
    careerHighlights: [
      "All-time top goalscorer in men's international football",
      "Most Champions League goals (140+)",
      "First player to score 800+ career goals"
    ]
  },
  {
    name: "Diego Maradona",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Maradona-Mundial_86_con_la_copa.JPG",
    team: "Napoli/Argentina (retired)",
    position: "Attacking Midfielder / Second Striker",
    achievements: "World Cup winner 1986, 'Goal of the Century' scorer",
    country: "Argentina",
    careerHighlights: [
      "Led Argentina to World Cup victory in 1986",
      "Famous 'Hand of God' goal against England",
      "Transformed Napoli into Serie A champions"
    ]
  },
  {
    name: "Zinedine Zidane",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Zinedine_Zidane_by_Tasnim_03.jpg",
    team: "Real Madrid/Juventus (retired)",
    position: "Attacking Midfielder",
    achievements: "World Cup winner 1998, 3x FIFA World Player of the Year",
    country: "France",
    careerHighlights: [
      "Scored two goals in 1998 World Cup final",
      "Famous volley goal in Champions League final",
      "Led France to Euro 2000 victory"
    ]
  },
  {
    name: "Pelé",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Pele_con_brasil_%28cropped%29.jpg/250px-Pele_con_brasil_%28cropped%29.jpg",
    team: "Santos/Brazil (retired)",
    position: "Forward",
    achievements: "3x World Cup winner (1958, 1962, 1970), 1000+ goals",
    country: "Brazil",
    assists: "N/A",
    careerHighlights: [
      "Only player to win three World Cups",
      "Youngest World Cup winner at age 17",
      "Named FIFA Player of the Century"
    ]
  },
  {
    name: "Zlatan Ibrahimović",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/0/09/Zlatan_Ibrahimovi%C4%87_June_2018.jpg",
    team: "AC Milan (retired)",
    position: "Striker",
    achievements: "Over 500 career goals, 12 league titles across 4 countries",
    country: "Sweden",
    careerHighlights: [
      "Scored over 500 career goals across top European leagues",
      "Won league titles in Netherlands, Italy, Spain, and France",
      "Known for spectacular bicycle kicks and acrobatic goals"
    ]
  },
  {
    name: "Neymar Jr.",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Neymar_850_1705.jpg/250px-20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Neymar_850_1705.jpg",
    team: "Al Hilal (previously Barcelona, PSG)",
    position: "Forward / Left Winger",
    achievements: "Olympic gold medal, Champions League winner",
    country: "Brazil",
    careerHighlights: [
      "Part of Barcelona's legendary 'MSN' trio with Messi and Suárez",
      "Most expensive transfer in football history (€222M to PSG)",
      "Led Santos to their first Copa Libertadores since Pelé era"
    ]
  },
  {
    name: "Ronaldo Nazário",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Ronaldo_2002_cropped.jpg",
    team: "Real Madrid/Barcelona/Inter/Brazil (retired)",
    position: "Striker",
    achievements: "2x World Cup winner, 2x Ballon d'Or, 3x FIFA World Player of the Year",
    country: "Brazil",
    careerHighlights: [
      "Known as 'O Fenômeno' (The Phenomenon) for his speed and finishing",
      "Youngest player to win FIFA World Player of the Year",
      "Overcame serious knee injuries to win 2002 World Cup"
    ]
  },
  {
    name: "Ronaldinho",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Ronaldinho_in_2019.jpg",
    team: "Barcelona/AC Milan/PSG/Brazil (retired)",
    position: "Attacking Midfielder / Forward",
    achievements: "World Cup winner 2002, Ballon d'Or, 2x FIFA World Player of the Year",
    country: "Brazil",
    careerHighlights: [
      "Known for his creativity, technical skills and joyful style of play",
      "Led Barcelona to Champions League victory in 2006",
      "Received standing ovation from Real Madrid fans at Santiago Bernabéu"
    ]
  },
  {
    name: "Kylian Mbappé",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/5/57/2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93129_%28cropped%29.jpg",
    team: "Real Madrid (previously PSG, Monaco)",
    position: "Forward",
    achievements: "World Cup winner 2018, 5x Ligue 1 titles, Golden Boy Award",
    country: "France",
    careerHighlights: [
      "Second teenager after Pelé to score in a World Cup final",
      "Youngest player to reach 40 Champions League goals",
      "Finished as Ligue 1 top scorer for five consecutive seasons"
    ]
  },
  {
    name: "Andrés Iniesta",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Andr%C3%A9s_Iniesta.jpg/640px-Andr%C3%A9s_Iniesta.jpg",
    team: "Barcelona/Vissel Kobe/Spain (retired)",
    position: "Central Midfielder",
    achievements: "World Cup winner 2010, 2x Euro champion, 4x Champions League",
    country: "Spain",
    careerHighlights: [
      "Scored the winning goal in the 2010 World Cup final",
      "Key part of Barcelona's tiki-taka era under Pep Guardiola",
      "Won 32 trophies with Barcelona, making him the most decorated Spanish footballer"
    ]
  },
  {
    name: "Xavi Hernández",
    imageURL: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/949_xavi.jpg",
    team: "Barcelona/Al Sadd/Spain (retired)",
    position: "Central Midfielder",
    achievements: "World Cup winner 2010, 2x Euro champion, 4x Champions League",
    country: "Spain",
    careerHighlights: [
      "Master of tiki-taka style and considered one of the greatest midfielders ever",
      "Holds Barcelona's record for most appearances (767)",
      "Set record for most assists in La Liga history during his career"
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

  // I put a default image here for added players so it's not blank
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

  players.push(newPlayer); // push a player on to the stack

  showCards();

  const flag = countryFlags[playerCountry] || "🏴"; // put flag image if nothing else
  alert(`Added ${newPlayer.name} to the list of top soccer players!`);
}

function removeLastCard() {
  if (players.length > 0) {
    const removedPlayer = players.pop(); //removes / pops player from the stack
    showCards();
    alert(`Removed ${removedPlayer.name} from the list of top soccer players!`);
  }
  else {
    alert("No more players to remove!");
  }
}

function filterByCountry() {
  const country = prompt("Enter country to filter by (e.g., Argentina, Brazil, France):");
  if (!country) 
      return;

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
  
  // to return back to all player
  const returnButton = document.createElement("button");
  returnButton.textContent = "Show All Players";
  returnButton.className = "return-button";
  returnButton.onclick = function() {
    showCards();
    this.remove();
  };

  cardContainer.insertBefore(returnButton, cardContainer.firstChild);

  const flag = countryFlags[country];
  alert(`Showing players from ${country}`);
}