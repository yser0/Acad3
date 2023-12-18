const fs = require('fs'); // Module pour interagir avec le système de fichiers

// Chemin vers le fichier JSON du contrat déployé
const filePath = '/mnt/c/Users/ADS/Projet_Blockchain/build/contracts/IdentityManagement.json'; // Assure-toi que le chemin soit correct

// Lecture du fichier JSON
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Erreur lors de la lecture du fichier :', err);
        return;
    }

    try {
        const contractData = JSON.parse(data);
        // Récupération de l'adresse du contrat déployé sur un réseau spécifique (par exemple, le réseau de développement)
        const deployedNetwork = contractData.networks['<ID_DU_RESEAU>']; // Remplace <ID_DU_RESEAU> par l'identifiant du réseau, par exemple '5777' pour Ganache

        if (deployedNetwork) {
            const contractAddress = deployedNetwork.address;
            console.log('Adresse du contrat déployé:', contractAddress);
        } else {
            console.log('Le contrat n\'a pas été déployé sur ce réseau.');
        }
    } catch (error) {
        console.error('Erreur lors de l\'analyse du fichier JSON :', error);
    }
});