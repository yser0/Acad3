// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract IdentityManagement {
    struct Document {
        bytes32 documentHash;
        bool validated;
        address validatedBy;
    }

    mapping(address => mapping(bytes32 => Document)) public userDocuments;

    event DocumentAdded(address indexed user, bytes32 documentHash);
    event DocumentValidated(address indexed user, bytes32 documentHash, address indexed validator);
    event PermissionGranted(address indexed user, bytes32 documentHash);
    event PermissionRevoked(address indexed user, bytes32 documentHash);

    function addDocumentHash(bytes32 documentHash) public {
        userDocuments[msg.sender][documentHash] = Document(documentHash, false, address(0));
        emit DocumentAdded(msg.sender, documentHash);
    }

    function validateDocument(address user, bytes32 documentHash) public {
        require(msg.sender == user || userDocuments[user][documentHash].validatedBy == address(0), "Document already validated");
        userDocuments[user][documentHash].validated = true;
        userDocuments[user][documentHash].validatedBy = msg.sender;
        emit DocumentValidated(user, documentHash, msg.sender);
    }

    function grantPermission(address user, bytes32 documentHash) public {
        require(userDocuments[msg.sender][documentHash].validated, "Document not validated");
        userDocuments[user][documentHash].validated = true;
        userDocuments[user][documentHash].validatedBy = msg.sender;
        emit PermissionGranted(user, documentHash);
    }

    function revokePermission(address user, bytes32 documentHash) public {
        require(userDocuments[msg.sender][documentHash].validated, "Document not validated");
        userDocuments[user][documentHash].validated = false;
        userDocuments[user][documentHash].validatedBy = address(0);
        emit PermissionRevoked(user, documentHash);
    }
}
