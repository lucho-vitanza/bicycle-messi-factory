// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

contract Attribute {
    string[] private model = [
        "Mountain",
        "Road",
        "Hybrid",
        "Touring",
        "Crusier",
        "Overall",
        "Fixed_Gear",
        "Folding",
        "Tandem",
        "Recumbent",
        "Cargo",
        "Fatbike"
    ];

    string[] private mark = [
        "Benotto",
        "Giant",
        "BMX",
        "AluBike",
        "Specialized",
        "Merida",
        "Mercurio"
    ];

    string[] private color = [
        "Black",
        "Blue",
        "Gray",
        "Heather",
        "PastelBlue",
        "PastelGreen",
        "PastelOrange",
        "PastelRed",
        "PastelYellow",
        "Pink",
        "Red",
        "White"
    ];


    function getModel(uint idx) public view returns (string memory) {
        return model[idx];
    }

    function getMark(uint idx) public view returns (string memory) {
        return mark[idx];
    }

    function getColor(uint idx) public view returns (string memory) {
        return color[idx];
    }

}