// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0;

contract ProjectOffice {

    uint public Shafts = 0;
    uint public Controllers = 0;
    uint public Doors = 0;
    uint public Buttons = 0;
    uint public Displays = 0;
    uint public Speakers = 0;

    function newOrder (uint batteries, uint columns, uint elevators, uint floors) public {
        uint totalColumns = columns* batteries;
        uint totalElevators = elevators*totalColumns;

        Shafts = totalElevators;
        Controllers = batteries;
        Doors = totalElevators*2;
        Buttons = floors*totalElevators;
        Displays = floors+totalElevators;
        Speakers = (totalElevators*2)+floors;
    }
}