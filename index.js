function newImg(source, position, left, bottom) {
  let image = document.createElement("img");
  image.src = source;
  image.style.position = position;
  image.style.left = left;
  image.style.bottom = bottom;
  document.body.append(image);
}

/*
let greenCharacter = document.createElement("img");
greenCharacter.src = "assets/green-character.gif";
greenCharacter.style.position = "fixed";
greenCharacter.style.left = "100px";
greenCharacter.style.bottom = "100px";
document.body.append(greenCharacter);


//create pine tree
let pineTree = document.createElement("img");
pineTree.src = "./assets/pine-tree.png";
pineTree.style.position = "fixed";
pineTree.style.left = "450px";
pineTree.style.bottom = "200px";
document.body.append(pineTree);
*/

//Add images using newImg function
newImg("./assets/green-character.gif", "fixed", "100px", "100px");
newImg("./assets/pine-tree.png", "fixed", "450px", "200px");
newImg("./assets/tree.png", "fixed", "200px", "300px");
newImg("./assets/pillar.png", "fixed", "350px", "100px");
newImg("./assets/crate.png", "fixed", "150px", "200px");
newImg("./assets/well.png", "fixed", "500px", "425px");
