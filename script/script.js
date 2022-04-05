for(var i = 1; i < 250; i++){
fetch("https://pokeapi.co/api/v2/pokemon/" + i).then(resposta => {
    return resposta.json()
}).then(corpo => {

        let section = document.querySelector('section');

        let pokemon = document.createElement('div');
        pokemon.classList.add('pokemon');
        
        let pokemonName = document.createElement('p');
        let pokemonParagrafo = document.createElement('p');
        let pokemonParagrafo1 = document.createElement('p');
        let pokemonSpan = document.createElement('span');
        let pokemonImg = document.createElement('img');

        pokemonName.innerHTML = corpo.name.toUpperCase();

        pokemonParagrafo.innerHTML = "Altura: " + corpo.height;
        pokemonParagrafo1.innerHTML = corpo.id;
        pokemonSpan.innerHTML = "Peso: " + corpo.weight;
        pokemonImg.setAttribute('src', corpo.sprites.front_default);

        pokemon.appendChild(pokemonName);
        pokemon.appendChild(pokemonParagrafo);
        pokemon.appendChild(pokemonParagrafo1);        
        pokemon.appendChild(pokemonSpan);
        pokemon.appendChild(pokemonImg);
        section.appendChild(pokemon);
        
    })
}