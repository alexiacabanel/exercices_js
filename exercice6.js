const countBuildingsWithSunsetView = (heights) => {
    let count = 0; // Initialiser le compteur de bâtiments avec vue sur le coucher du soleil
    let maxHeight = 0; // Initialiser la hauteur maximale rencontrée
    
    // Parcourir chaque bâtiment dans la liste en commençant par le dernier
    for (let i = heights.length - 1; i >= 0; i--) {
        const currentHeight = heights[i];
        
        // Si la hauteur actuelle est plus grande que la hauteur maximale rencontrée
        if (currentHeight > maxHeight) {
            count++; // Incrémenter le compteur
            maxHeight = currentHeight; // Mettre à jour la hauteur maximale rencontrée
        }
    }
    
    return count; // Retourner le nombre de bâtiments avec vue sur le coucher du soleil
};

// Exemples d'utilisation
console.log(countBuildingsWithSunsetView([3, 7, 8, 3, 6, 1])); // Résultat attendu : 3
console.log(countBuildingsWithSunsetView([1, 4, 5, 8])); // Résultat attendu : 1
