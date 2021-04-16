// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0;

contract ProjectOffice {

    uint public amountOfShafts = 0;
    uint public amountOfControllers = 0;
    uint public amountOfDoors = 0;
    uint public amountOfButtons = 0;
    uint public amountOfDisplays = 0;
    uint public amountOfSpeakers = 0;

    function newOrder (uint batteries, uint columns, uint elevators, uint floors) public {
        uint totalColumns = columns* batteries;
        uint totalElevators = elevators*totalColumns;

        amountOfShafts = totalElevators;
        amountOfControllers = batteries;
        amountOfDoors = totalElevators*2;
        amountOfButtons = floors*totalElevators;
        amountOfDisplays = floors+totalElevators;
        amountOfSpeakers = (totalElevators*2)+floors;
    }
}