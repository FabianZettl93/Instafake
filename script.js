let posts = [
  {
    author: "tagesschlau",
    image: "xxxxx",
    description: "Heute im Tagesjornal",
    location: "München",
  },
  {
    author: "fabi.z",
    image: "xxxxx",
    description: "New Post online!",
    location: "",
  },
  {
    author: "pz.rs3",
    image: "",
    description: "",
    location: "Regensburg",
  },
  {
    author: "ines.glas",
    image: "xxxxx",
    description: "Hello Friends :)",
    location: "Abensberg",
  },
  {
    author: "jessy.n",
    image: "xxxxx",
    description: "New Day!",
    location: "Regensburg",
  },
  {
    author: "njetflix",
    image: "xxxxx",
    description:
      "die neue Staffel - Developer für Quereinsteiger! Nicht verpassen",
    location: "",
  },
];

function show(params) {
  let content = document.getElementById("content");
  content.innerHTML = "";

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];

    document.getElementById("content").innerHTML += `
    <div class="onlypost">
        <img src"${post["image"]}">
        <div>${post["author"]}</div>
        <div>${post["discription"]}</div>
    </div>`;
  }
}
