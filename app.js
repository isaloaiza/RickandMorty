document.addEventListener("DOMContentLoaded", () => {
    const charactersContainer = document.getElementById("characters");
  
    fetch("https://rickandmortyapi.com/api/character")
      .then(response => response.json())
      .then(data => {
        const characters = data.results;
  
        characters.forEach(character => {
          const characterCard = document.createElement("div");
          characterCard.classList.add("character-card");
  
          const characterImage = document.createElement("img");
          characterImage.src = character.image;
          characterImage.alt = character.name;
          characterImage.classList.add("character-image");
  
          const characterName = document.createElement("p");
          characterName.textContent = character.name;
          characterName.classList.add("character-name");
  
          const characterStatus = document.createElement("p");
          characterStatus.textContent = `${character.status}-${character.species}`;
          characterStatus.classList.add("character-status");


          characterCard.appendChild(characterImage);
          characterCard.appendChild(characterName);
          characterCard.appendChild(characterStatus);
         
  
          charactersContainer.appendChild(characterCard);
        });
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  });