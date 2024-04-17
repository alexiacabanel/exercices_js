const hasSumPair = (arr, k) => {
    // Parcourir tous les éléments de la liste
    for (let i = 0; i < arr.length; i++) {
        // Parcourir tous les éléments restants après l'élément actuel
        for (let j = i + 1; j < arr.length; j++) {
            // Vérifier si la somme de l'élément actuel et de l'élément restant est égale à k
            if (arr[i] + arr[j] === k) {
                return true; // Si c'est le cas, on a trouvé une paire
            }
        }
    }
    return false; // Si on ne trouve aucune paire, retourner false
};

// Exemple d'utilisation
console.log(hasSumPair([10, 15, 3, 7], 17)); // Résultat attendu : true
console.log(hasSumPair([1, 8, 10, 21], 19)); // Résultat attendu : false
