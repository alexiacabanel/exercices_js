const countBuildingsWithSunsetView = (heights) => {
    let count = 0; // Initialiser le compteur de bâtiments avec vue sur le coucher du soleil
    const buildingsWithSunsetView = []; // Initialiser la liste des bâtiments avec vue sur le coucher du soleil
    
    // Parcourir chaque bâtiment dans la liste
    for (let i = 0; i < heights.length; i++) {
        const currentHeight = heights[i];
        
        // Parcourir les bâtiments avec vue sur le coucher du soleil déjà trouvés
        while (buildingsWithSunsetView.length > 0 && currentHeight >= buildingsWithSunsetView[buildingsWithSunsetView.length - 1]) {
            // Retirer les bâtiments qui ont une hauteur inférieure ou égale au bâtiment actuel
            buildingsWithSunsetView.pop();
        }
        
        // Ajouter le bâtiment actuel à la liste des bâtiments avec vue sur le coucher du soleil
        buildingsWithSunsetView.push(currentHeight);
    }
    
    return buildingsWithSunsetView.length; // Retourner le nombre de bâtiments avec vue sur le coucher du soleil
};

// Exemples d'utilisation
console.log(countBuildingsWithSunsetView([3, 7, 8, 3, 6, 1])); // Résultat attendu : 3
console.log(countBuildingsWithSunsetView([1, 4, 5, 8])); // Résultat attendu : 1
