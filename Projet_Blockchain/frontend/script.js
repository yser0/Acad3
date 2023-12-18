// Connect to the Ethereum blockchain using Web3.js and MetaMask
const web3 = new Web3(window.ethereum);

// Contract address and ABI (replace with your deployed contract details)
const contractAddress = 'YOUR_CONTRACT_ADDRESS';
const contractABI = []; // Replace with your contract ABI

// Instantiate the contract
const identityContract = new web3.eth.Contract(contractABI, contractAddress);

// Function to add a document hash
async function addDocumentHash(documentHash) {
    // Your logic to interact with the smart contract (use MetaMask for user authentication)
}

// Function to display added documents
function displayDocuments(documents) {
    const documentsList = document.getElementById('documents');
    documentsList.innerHTML = '';

    documents.forEach(document => {
        const listItem = document.createElement('li');
        listItem.textContent = document;
        documentsList.appendChild(listItem);
    });
}

// Event listener for the form submission
document.getElementById('addDocumentForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const documentHash = document.getElementById('documentHash').value;

    // Call the function to add a document hash
    await addDocumentHash(documentHash);

    // Refresh the displayed documents
    const addedDocuments = await getAddedDocuments();
    displayDocuments(addedDocuments);
});

// Function to get added documents from the smart contract
async function getAddedDocuments() {
    // Your logic to retrieve added documents from the smart contract
    return [];
}

// Initial setup
(async function() {
    // Your initial setup code, e.g., fetching and displaying existing documents
    const addedDocuments = await getAddedDocuments();
    displayDocuments(addedDocuments);
})();

//ipfs part

const ipfsClient = require('ipfs-http-client');
const ipfs = ipfsClient({ host: 'localhost', port: '5001', protocol: 'http' });

// Function to add a document hash to IPFS
async function addToIPFS(documentHash) {
    const content = Buffer.from(documentHash);
    const { cid } = await ipfs.add(content);
    return cid.toString();
}

// Example usage: Adding a document hash to IPFS
const hashToAdd = 'YourDocumentHashHere'; // Replace with the actual document hash
addToIPFS(hashToAdd)
    .then(cid => {
        console.log(`Document hash added to IPFS. CID: ${cid}`);
        // You can use this CID to reference the added content on IPFS
    })
    .catch(err => console.error(err));