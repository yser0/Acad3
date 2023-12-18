const fs = require('fs');

// Specify the path to your IdentityManagement.json file
const filePath = '/mnt/c/Users/ADS/Projet_Blockchain/build/contracts/IdentityManagement.json'; // Update with your file path

// Read the JSON file
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    try {
        const contractData = JSON.parse(data);
        const abi = contractData.abi;

        // Save the ABI to a separate file (optional)
        fs.writeFile('contractABI.json', JSON.stringify(abi, null, 2), err => {
            if (err) {
                console.error('Error writing ABI to file:', err);
                return;
            }
            console.log('ABI has been extracted and saved to contractABI.json');
        });

        // Log the ABI to the console
        console.log('ABI:', abi);
    } catch (error) {
        console.error('Error parsing JSON:', error);
    }
});

