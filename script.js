let cards = [
  {
    author: "smf",
    image: "img/posts (1).jpg",
    profilImage: "img/20220418_133141.jpg",
    description: "Ready to hit the street in 2023.. braaap",
    location: "München",
    likes: 3812,
    timeAgo: "VOR 2 STUNDEN",
    comment: [],
  },
  {
    author: "fabi.z",
    image: "img/posts (2).jpg",
    profilImage: "img/IMG-20220306-WA0010.jpg",
    description: "New Post online!",
    location: "",
    likes: 341,
    timeAgo: "VOR 4 STUNDEN",
    comment: [],
  },
  {
    author: "pz.rs3",
    image: "img/posts (3).jpg",
    profilImage: "img/20211212_141251.jpg",
    description: "",
    location: "Regensburg",
    likes: 98,
    timeAgo: "VOR 5 STUNDEN",
    comment: [],
  },
  {
    author: "ines.glas",
    image: "img/posts (4).jpg",
    profilImage: "img/IMG-20211128-WA0031.jpg",
    description: "Hello Friends :)",
    location: "Abensberg",
    likes: 6,
    timeAgo: "VOR 6 STUNDEN",
    comment: [],
  },
  {
    author: "jessy.n",
    profilImage: "img/IMG-20211128-WA0051.jpg",
    image: "img/posts (5).jpg",
    description: "New Day!",
    location: "Regensburg",
    likes: 39,
    timeAgo: "VOR 2 TAGEN",
    comment: [],
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
    comment: [],
  },
];

let stories = [
  {
    author: "pz.rs3",
    image: "img/20211212_141251.jpg",
  },
  {
    author: "ines.glas",
    image: "img/IMG-20211128-WA0031.jpg",
  },
  {
    author: "jessi.n",
    image: "img/IMG-20211128-WA0051.jpg",
  },
  {
    author: "tagesschlau",
    image: "img/20220418_133141.jpg",
  },
  {
    author: "pz.rs3",
    image: "img/20211212_141251.jpg",
  },
  {
    author: "ines.glas",
    image: "img/IMG-20211128-WA0031.jpg",
  },
  {
    author: "fabi.z",
    image: "img/IMG-20220306-WA0010.jpg",
  },
  {
    author: "tagesschlau",
    image: "img/20220418_133141.jpg",
  },
];

let rightSubs = [
  {
    image: "img/20211121_143846.jpg",
    author: "Hannes.n",
  },
  {
    image: "img/20211030_171552.jpg",
    author: "marcow",
  },
  {
    image: "img/_DSC3735.jpg",
    author: "christio.pohl",
  },
  {
    image: "img/20210925_235018.jpg",
    author: "georg.l",
  },
  {
    image: "img/20210706_192739.jpg",
    author: "nico.sdl",
  },
];

function init() {
  renderNewStorys();
  renderPosts();
  renderRightSide();
}

function renderRightSide() {
  let newFollowers = document.getElementById("newFollowers");
  newFollowers.innerHTML = "";

  for (let i = 0; i < rightSubs.length; i++) {
    const rightSub = rightSubs[i];

    document.getElementById("newFollowers").innerHTML += /*html*/ `
   <div class="righteside" id="rightSide">
              <div class="rightesidesubcontainer" id="rightSideSubContainer">
                <div class="acc-name">
              <img src="${rightSub["image"]}">
             
              <div>${rightSub["author"]}</div>
                  </div>
              </div>
              <span  id="folgen${i}" class="text-blue">Folgen</span>
              

            </div>
    `;
  }
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
              <div> <img class="author-img" src="${card["profilImage"]}" alt=""></div>

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

        <div class="comments-design" id="comments${i}"> </div>   
                

        <p class="time-ago">${card["timeAgo"]}</p>
        <div class="post-comment-container"> 
          <img class="comment-smiley" src="img/emoticon-30-24.ico" alt="">
          <input id="commentText${i}" placeholder="Kommentieren ..."class="comment-input" type="text"> 
          <button id="postButton" onclick=addComment(${i}) class="post-button">Posten</button>
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

function addComment(index) {
  let commentText = document.getElementById(`commentText${index}`);
  cards[index]["comment"].push(commentText.value);
  renderPosts();
  commentText.value = "";
  renderComment(index);
}

function renderComment(index) {
  let comments = document.getElementById(`comments${index}`);

  for (let j = 0; j < cards[index]["comment"].length; j++) {
    const comment = cards[index]["comment"][j];
    comments.innerHTML += `<div> <b>fabi.z</b>  ${comment}</div>`;
  }
}
