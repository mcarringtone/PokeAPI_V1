fetch("https://pokeapi.co/api/v2/pokemon/40/")
  .then((response) => response.json())
  .then((data) => generatePokemon(data));

const generatePokemon = (data) => {
  console.log(data);
  let pokeData = data;

  let img = document.createElement("img");
  let movesDiv = document.createElement("div");
  let movesDiv2 = document.createElement("div");
  let movesDiv3 = document.createElement("div");
  let movesDiv4 = document.createElement("div");
  let buttonRight = document.createElement("button");
  let buttonLeft = document.createElement("button");
  document.querySelector(".pokeImg").appendChild(img);

  let pokeImg = document.querySelector(".pokeImg");
  img.src = data.sprites.front_default;
  img.width = 200;
  img.height = 200;
  let contain = document.querySelector(".container");
  document.querySelector(".container").appendChild(buttonRight);
  document.querySelector(".container").appendChild(movesDiv);
  document.querySelector(".container").appendChild(movesDiv2);
  document.querySelector(".container").appendChild(movesDiv3);
  document.querySelector(".container").appendChild(movesDiv4);
  document.querySelector(".container").appendChild(buttonLeft);
  buttonRight.appendChild(document.createTextNode("right"));
  buttonLeft.appendChild(document.createTextNode("left"));

  // Removes the quotations for the object
  movesDiv.textContent = JSON.stringify(pokeData.moves[0].move.name).replace(
    /"/g,
    ""
  );
  movesDiv2.textContent = JSON.stringify(pokeData.moves[1].move.name).replace(
    /"/g,
    ""
  );
  movesDiv3.textContent = JSON.stringify(pokeData.moves[2].move.name).replace(
    /"/g,
    ""
  );
  movesDiv4.textContent = JSON.stringify(pokeData.moves[2].move.name).replace(
    /"/g,
    ""
  );

  contain.classList.add("center");
  pokeImg.classList.add("pokeCenter");
  buttonLeft.addEventListener("click", function () {
    let;
  });
  buttonRight.addEventListener("click", function () {
    alert("right works");
  });
};
