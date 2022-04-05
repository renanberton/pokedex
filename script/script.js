for(var i = 1; i < 300; i++){
    fetch("https://pokeapi.co/api/v2/pokemon/" + i).then(resposta => {
        return resposta.json()
    }).then(corpo => {        
        let section = document.querySelector('section');
        
        let pokemon = document.createElement('div');
        pokemon.classList.add('pokemon');
        pokemon.style=`order: ${corpo.id}`;
        
        let pokemonName = document.createElement('p');
        let pokemonSpan = document.createElement('span');
        let pokemonImg = document.createElement('img');
        
        section.appendChild(pokemon);        
        pokemonName.innerHTML = corpo.name.toUpperCase();
        
        pokemonSpan.innerHTML = corpo.types[0].type.name.toUpperCase();
        pokemonImg.setAttribute('src', corpo.sprites.front_default);
        
        pokemon.appendChild(pokemonName);
        pokemon.appendChild(pokemonImg);
        pokemon.appendChild(pokemonSpan);
    })
}