// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0;

contract MaterialProvider {

    struct Materials{
        uint aluminiumBars;
        uint stainlessSteelSheets;
        uint bumperRubberBands;
        uint interiorLightBulbs;
        uint displayLeds;
        uint springs;
        uint speakers;
    }

    uint public materialListCount;

    mapping(uint => Materials) public materials;
    Materials[] materialList;

    function createMaterials(uint amountOfShafts, uint amountOfControllers, uint amountOfDoors, uint amountOfButtons, uint amountOfDisplays, uint amountOfSpeakers) public returns (uint,uint,uint,uint,uint,uint,uint){
        Materials memory new_material;

        new_material.aluminiumBars = amountOfShafts*16;
        new_material.stainlessSteelSheets = amountOfShafts*5 + amountOfDoors;
        new_material.bumperRubberBands = amountOfDoors*2;
        new_material.interiorLightBulbs = amountOfShafts*12;
        new_material.speakers = amountOfSpeakers *4;
        new_material.displayLeds = amountOfButtons + amountOfDisplays + amountOfControllers ;
        new_material.springs = amountOfDoors*2;

        materialListCount++;
        materials[materialListCount] = new_material;
        materialList.push(new_material);

        return (new_material.aluminiumBars,new_material.stainlessSteelSheets,new_material.bumperRubberBands,new_material.interiorLightBulbs,new_material.speakers,new_material.displayLeds,new_material.springs);
    }
}
