import axios from "axios";
let offset = 0;
let pokemonId = 0;
export default async function fetchHeroes(callback) {
    try {
        const heroesList = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=12&offset=' + offset)
        offset += 12;
        let temp = [];
        for (let i = 0; i < heroesList.data.results.length; i++) {
            pokemonId++;
            heroesList.data.results[i].id = pokemonId;

            const herostats = await axios.get('https://pokeapi.co/api/v2/pokemon/' + heroesList.data.results[i].id)
            heroesList.data.results[i].features = herostats.data;

            temp = [...temp, heroesList.data.results[i]];
        }
        callback(temp);
    } catch (error) {
        console.log("Не удалось получить данные с сервера!");
    }
}