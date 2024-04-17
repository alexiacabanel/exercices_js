const merge = (left, right) => {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Tant qu'il reste des éléments dans les deux tableaux
    while (leftIndex < left.length && rightIndex < right.length) {
        // Comparer les éléments des deux tableaux
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Ajouter les éléments restants des deux tableaux
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

const mergeSort = (arr) => {
    // Cas de base : si le tableau est vide ou a une seule valeur, il est déjà trié
    if (arr.length <= 1) {
        return arr;
    }

    // Trouver le milieu du tableau
    const middle = Math.floor(arr.length / 2);

    // Diviser le tableau en deux moitiés
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    // Appeler récursivement mergeSort sur les deux moitiés
    return merge(mergeSort(left), mergeSort(right));
};

// Fonction pour lire un fichier et trier son contenu avec mergeSort
const fs = require('fs');

const fileName = process.argv[2]; // Nom du fichier passé en paramètre
const numbers = fs.readFileSync(fileName, 'utf8').split(' ').map(Number);

const sortedNumbers = mergeSort(numbers);

console.log(`Tri fusion: ${sortedNumbers.length} comparaisons - [${sortedNumbers}]`);
