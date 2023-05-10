// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

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
        Drivetraing,
        Chain,
        
}