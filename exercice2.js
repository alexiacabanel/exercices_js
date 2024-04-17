const countBuildingsWithSunsetView = (heights) => {
    let count = 0; // Initialiser le compteur de bâtiments avec vue sur le coucher du soleil
    
    // Parcourir chaque bâtiment dans la liste
    for (let i = 0; i < heights.length; i++) {
        let hasSunsetView = true; // Supposer initialement que le bâtiment a une vue sur le coucher du soleil
        
        // Parcourir les bâtiments à l'ouest du bâtiment actuel
        for (let j = i + 1; j < heights.length; j++) {
            // Vérifier si un bâtiment à l'ouest est plus haut que le bâtiment actuel
            if (heights[j] >= heights[i]) {
                hasSunsetView = false; // Si c'est le cas, le bâtiment n'a pas de vue sur le coucher du soleil
                break; // Sortir de la boucle dès qu'on trouve un bâtiment plus haut
            }
        }
        
        // Si le bâtiment a une vue sur le coucher du soleil, incrémenter le compteur
        if (hasSunsetView) {
            count++;
        }
    }
    
    return count; // Retourner le nombre de bâtiments avec vue sur le coucher du soleil
};

// Exemples d'utilisation
console.log(countBuildingsWithSunsetView([3, 7, 8, 3, 6, 1])); // Résultat attendu : 3
console.log(countBuildingsWithSunsetView([1, 4, 5, 8])); // Résultat attendu : 1
