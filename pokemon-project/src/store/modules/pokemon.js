export default {
    actions: {
        async fetchRandomPokemon(ctx) {
            const fetchResult = await fetch("https://pokeapi.co/api/v2/pokemon/");
            const pokemons = await fetchResult.json();

            const randomNumber = Math.floor(Math.random() * 19);

            const randomPokemonName = await pokemons.results[randomNumber].name;
            const randomPokemonAbilitiesURL = await pokemons.results[randomNumber].url;

            const fetchRandomPokemonAbilitiesResult = await fetch(randomPokemonAbilitiesURL);
            const randomPokemonAbilities = await fetchRandomPokemonAbilitiesResult.json();
            
            const pokemon = {
                name: randomPokemonName.toUpperCase(),
                abilities: randomPokemonAbilities.abilities,
                baseExperience: randomPokemonAbilities.base_experience,
                height: randomPokemonAbilities.height,
                heldItems: randomPokemonAbilities.held_items.length
            };

            ctx.commit('updatePokemon', pokemon);
        }
    },
    mutations: {
        updatePokemon(state, pokemon) {
            state.randomPokemon = pokemon;
        }
    },
    state: {
        randomPokemon: null
    },
    getters: {
        getRandomPokemon(state) {
            return state.randomPokemon
        }
    }
}