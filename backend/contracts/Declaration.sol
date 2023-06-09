// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;


struct Bike {
    uint quantity;
    uint8 model;
    address owner;
    State state;
}

struct Part {
        uint id;
        Kind kind;
        uint8 model;
        uint8 mark;
        uint8 color;
        State state;
}

enum State { 
        Available, 
        UnderConstruction, 
        Unavailable 
}
    
enum Kind {
        Frame,
        Wheel,
        Drivetrain,
        Cabling,
        Peripheral
}


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