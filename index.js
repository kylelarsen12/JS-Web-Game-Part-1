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

function newItem(url, left, bottom) {
  let item = newImg(url, left, bottom);
  item.addEventListener("dblclick", function () {
    item.remove();
  });
}

newImg("./assets/green-character.gif", 100, 100);
newImg("./assets/pine-tree.png", 450, 200);
newImg("./assets/tree.png", 200, 300);
newImg("./assets/pillar.png", 350, 100);
newImg("./assets/crate.png", 150, 200);
newImg("./assets/well.png", 500, 425);

/*
let sword = document.createElement("img");
sword.src = "./assets/sword.png";
sword.style.position = "fixed";
sword.style.left = "500px";
sword.style.bottom = "405px";
document.body.append(sword);

sword.addEventListener("click", function () {
  sword.remove();
});
*/

newItem("./assets/sword.png", 500, 405);
newItem("./assets/sheild.png", 165, 185);
newItem("./assets/staff.png", 600, 100);
