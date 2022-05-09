//functions to add images/items
function newImg(source, left, bottom) {
  let image = document.createElement("img");
  image.src = source;
  image.style.position = "fixed";
  image.style.left = left + "px";
  image.style.bottom = bottom + "px";
  document.body.append(image);
  return image;
}

function newItem(source, left, bottom) {
  let item = newImg(source, left, bottom);
  item.addEventListener("dblclick", function () {
    item.remove();
  });
}

function backgroundBoxes(source, left, bottom, userWidth, userHeight) {
  for (let i = 0; i < userWidth; i++) {
    for (let j = 0; j < userHeight; j++) {
      newImg(source, left + i * 100, bottom + j * 100);
    }
  }
}

//Call functions to create game
backgroundBoxes(
  "./assets/grass.png",
  0,
  0,
  window.innerWidth / 100,
  window.innerHeight / 100
);
backgroundBoxes(
  "./assets/sky.png",
  0,
  window.innerHeight * 0.75,
  window.innerWidth / 100,
  window.innerHeight / 100
);

newImg("./assets/green-character.gif", 100, 100);
newImg("./assets/pine-tree.png", 450, 200);
newImg("./assets/tree.png", 200, 300);
newImg("./assets/pillar.png", 350, 100);
newImg("./assets/crate.png", 150, 200);
newImg("./assets/well.png", 500, 425);

newItem("./assets/sword.png", 500, 405);
newItem("./assets/sheild.png", 165, 185);
newItem("./assets/staff.png", 600, 100);
