// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0;

contract ProjectOffice {

   // List of components
    struct ComponentStruct {
        uint256 amountOfShafts;
        uint256 amountOfControllers;
        uint256 amountOfDoors;
        uint256 amountOfButtons;
        uint256 amountOfDisplays;
        uint256 amountOfSpeakers;
    }

    bytes32[] public orderIndex;
    mapping(uint => ComponentStruct) componentStructs;
    uint public orderCount;

    function getContractAddress()public view returns(address){
        return address(this);
    }

    function newOrder (uint batteries, uint columns, uint elevators, uint floors) public returns(uint,uint,uint,uint,uint,uint) {
        uint totalColumns = columns* batteries;
        uint totalElevators = elevators*totalColumns;
        uint id = orderCount++;

        componentStructs[id].amountOfShafts = totalElevators;
        componentStructs[id].amountOfControllers = batteries;
        componentStructs[id].amountOfDoors = totalElevators*2;
        componentStructs[id].amountOfButtons = floors*totalElevators;
        componentStructs[id].amountOfDisplays = floors+totalElevators;
        componentStructs[id].amountOfSpeakers = (totalElevators*2)+floors;

        return (componentStructs[id].amountOfShafts,componentStructs[id].amountOfControllers,componentStructs[id].amountOfDoors,componentStructs[id].amountOfButtons,componentStructs[id].amountOfDisplays,componentStructs[id].amountOfSpeakers);
    }
}