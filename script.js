let cards = [
  {
    author: "tagesschlau",
    image: "img/posts (1).jpg",
    profilImage: "img/monalisa.jpg",
    description: "Heute im Tagesjornal",
    location: "München",
    likes: 3812,
    timeAgo: "VOR 2 STUNDEN",
  },
  {
    author: "fabi.z",
    image: "img/posts (2).jpg",
    profilImage: "img/monalisa.jpg",
    description: "New Post online!",
    location: "",
    likes: 341,
    timeAgo: "VOR 4 STUNDEN",
  },
  {
    author: "pz.rs3",
    image: "img/posts (3).jpg",
    profilImage: "img/monalisa.jpg",
    description: "",
    location: "Regensburg",
    likes: 98,
    timeAgo: "VOR 5 STUNDEN",
  },
  {
    author: "ines.glas",
    image: "img/posts (4).jpg",
    profilImage: "img/monalisa.jpg",
    description: "Hello Friends :)",
    location: "Abensberg",
    likes: 6,
    timeAgo: "VOR 6 STUNDEN",
  },
  {
    author: "jessy.n",
    profilImage: "img/monalisa.jpg",
    image: "img/posts (5).jpg",
    description: "New Day!",
    location: "Regensburg",
    likes: 39,
    timeAgo: "VOR 2 TAGEN",
  },
  {
    author: "njetflix",
    image: "img/posts (6).jpg",
    profilImage: "img/monalisa.jpg",
    description:
      "die neue Staffel - Developer für Quereinsteiger! Nicht verpassen",
    location: "",
    likes: 2385,
    timeAgo: "VOR 2 TAGEN",
  },
];

let stories = [
  {
    author: "pz.rs3",
    image: "img/monalisa.jpg",
  },
  {
    author: "ines.glas",
    image: "img/monalisa.jpg",
  },
  {
    author: "jessi.n",
    image: "img/monalisa.jpg",
  },
  {
    author: "tagesschlau",
    image: "img/monalisa.jpg",
  },
  {
    author: "pz.rs3",
    image: "img/monalisa.jpg",
  },
  {
    author: "ines.glas",
    image: "img/monalisa.jpg",
  },
  {
    author: "jessi.n",
    image: "img/monalisa.jpg",
  },
  {
    author: "tagesschlau",
    image: "img/monalisa.jpg",
  },
];

function init() {
  renderNewStorys();
  renderPosts();
}

function renderNewStorys() {
  let storiesContent = document.getElementById("newStoryContainer");
  storiesContent.innerHTML = "";

  for (let i = 0; i < stories.length; i++) {
    const story = stories[i];

    document.getElementById("newStoryContainer").innerHTML += /*html*/ `
          <div class="storys-friends">
          <img class="post-img" src="${story["image"]}">
          <div>${story["author"]}</div>
              </div>
    `;
  }
}

function renderPosts() {
  let content = document.getElementById("card");
  content.innerHTML = "";

  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];

    document.getElementById("card").innerHTML += /*html*/ `
    <div class="post">
          <div class="post-header">
            <div class="post-header-left">
              <div> <img class="author-img" src="img/monalisa.jpg" alt=""></div>

              <div class="author-location-container">  

                 <div>${card["author"]}</div>
                 <div class="locations" >${card["location"]}</div>

              </div>
            </div>
              <p class="points-text"> <b>...</b></p>
          </div>
    

        <img class="post-img" src="${card["image"]}">
        <div class="action-buttons">
        <div class="action-buttons-left">
          <img class="like-withe" id="likeWithe${i}" onclick="likeRed(${i})" src="img/heart.png" alt="">
          <img class="like-red d-none" id="likeRed${i}" onclick="likeWithe(${i})" src="img/heart-red.ico" alt="">
          <img src="img/chat_bubble_icon_176160.png" alt="">
          <img src="img/send.png" alt="">
        </div>

        <img class="action-button-right" id="bookWhite${i}" onclick="bookBlack(${i})" src="img/bookmark-white (1).png" alt="">
          <img class="action-button-right-black d-none" id="bookBlack${i}" onclick="bookWhite(${i})" src="img/bookmark-black.png" alt="">
          
      </div>
        
        <p class="likes-author"> <b>Gefällt ${card["likes"]} Mal</b></p>
        <p class="likes-author"> <b> ${card["author"]} </b> ${card["description"]}</p>

        <p class="time-ago">${card["timeAgo"]}</p>
        <div class="post-comment-container"> 
          <img class="comment-smiley" src="img/emoticon-30-24.ico" alt="">
          <input placeholder="Kommentieren ..."class="comment-input" type="text"> 
          <button id="postButton" onclick="post()" class="post-button">Posten</button>
        </div>

     </div>`;
  }
}

function likeRed(i) {
  document.getElementById(`likeRed${i}`).classList.remove("d-none");
  document.getElementById(`likeWithe${i}`).classList.add("d-none");
}

function likeWithe(i) {
  document.getElementById(`likeRed${i}`).classList.add("d-none");
  document.getElementById(`likeWithe${i}`).classList.remove("d-none");
}

function bookBlack(i) {
  document.getElementById(`bookBlack${i}`).classList.remove("d-none");
  document.getElementById(`bookWhite${i}`).classList.add("d-none");
}

function bookWhite(i) {
  document.getElementById(`bookBlack${i}`).classList.add("d-none");
  document.getElementById(`bookWhite${i}`).classList.remove("d-none");
}
