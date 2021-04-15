pragma solidity >=0.5.0;
pragma experimental ABIEncoderV2;


contract MaterialProvider {
    
    struct Materials{
        address materialId;
        bytes32 commandId;
        uint aluminiumBars;
        uint stainlessSteelSheets;
        uint bumperRubberBands;
        uint interiorLightBulbs;
        uint displayLeds;
        uint springs;
        uint speakers;
        
    }
    
    uint public materialListCount = 0;
    
    mapping(uint => Materials) public materials;
    
   
    
    Materials[] materialList;

   
    function getMaterials(uint index) public view returns (uint, uint, uint, uint, uint, uint, uint){
        require(materials[index].materialId != address(0), "List doesn't exist");
        return (materials[index].aluminiumBars, materials[index].stainlessSteelSheets, materials[index].bumperRubberBands, materials[index].interiorLightBulbs, materials[index].displayLeds, materials[index].springs, materials[index].speakers);
    }
    
    function getUniqueHash(uint amountOfControllers , uint amountOfShafts, uint amountOfDoors, uint amountOfButtons, uint amountOfDisplays, uint amountOfSpeakers) private pure returns (bytes32){
        return keccak256(abi.encode(amountOfControllers , amountOfShafts, amountOfDoors, amountOfButtons, amountOfDisplays, amountOfSpeakers));
    }
    function getAddress() public view returns (address){
        return msg.sender;
    }
        
     function createMaterials() public returns (uint){
        // Fake variables from ProjectOffice
        uint amountOfShafts = 7;
        uint amountOfControllers = 2;
        uint amountOfDoors = 12;
        uint amountOfButtons = 24;
        uint amountOfDisplays = 10;
        uint amountOfSpeakers = 16;
        
        Materials memory new_material;
        bytes32 commandId = getUniqueHash(amountOfControllers , amountOfShafts, amountOfDoors, amountOfButtons, amountOfDisplays, amountOfSpeakers);
        new_material.materialId = msg.sender;
        new_material.commandId = commandId;
        new_material.aluminiumBars = amountOfShafts*4;
        new_material.stainlessSteelSheets = amountOfShafts*6 + amountOfDoors*2;
        new_material.bumperRubberBands = amountOfDoors*2;
        new_material.interiorLightBulbs = amountOfShafts*4;
        new_material.speakers = amountOfSpeakers *4;
        new_material.displayLeds = amountOfButtons + amountOfDisplays + amountOfControllers ;
        new_material.springs = amountOfDoors*2;
        materialListCount++;
        materials[materialListCount] = new_material;
        materialList.push(new_material);
        return materialListCount;
     }
}