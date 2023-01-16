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

function show() {
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
          <img src="img/heart.png" alt="">
          <img src="img/chat_bubble_icon_176160.png" alt="">
          <img src="img/send.png" alt="">
        </div>
        <div class="action-button-right"><img src="img/bookmark-white (1).png" alt=""></div>
      </div>
        
        <p class="likes-author"> Gefällt ${card["likes"]} Mal</p>
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
