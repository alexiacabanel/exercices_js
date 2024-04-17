const hasSumPair = (arr, k) => {
    const complements = new Set(); // Créer un ensemble pour stocker les compléments nécessaires pour obtenir la somme k

    // Parcourir chaque élément du tableau
    for (let num of arr) {
        // Vérifier si le complément de l'élément actuel existe déjà dans l'ensemble
        if (complements.has(num)) {
            return true; // Si c'est le cas, on a trouvé une paire
        }
        
        const complement = k - num;
        
        if (!complements.has(complement)) {
            // Ajouter le complément nécessaire pour obtenir la somme k à l'ensemble
            complements.add(complement);
        }
    }

    return false; // Si on ne trouve aucune paire, retourner false
};

// Exemple d'utilisation
console.log(hasSumPair([10, 15, 3, 7], 17)); // Résultat attendu : true
console.log(hasSumPair([1, 8, 10, 21], 19)); // Résultat attendu : false
