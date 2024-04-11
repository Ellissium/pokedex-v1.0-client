export default function getSortedHeroes(heroes, selectedSort) {
    if (selectedSort === "") {
        return heroes;
    } else {
        let hasProp = false;
        let sortedHeroes = [];
        heroes.forEach(element => {
            hasProp = element.features.types.some(element => {
                if (element.type.name === selectedSort) {
                    return true;
                }
            });
            if (hasProp)
                sortedHeroes.push(element)
        })
        return sortedHeroes;
    }
}