// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0;

contract SolutionManufacturing {

    uint public ElevatorCab = 0;
    uint public Doors = 0;
    uint public Controller = 0;
    uint public ControlPanel = 0;
    uint public Display = 0;
    uint public MusicSystem = 0;
    
    struct Products{
        
        address productId;
        bytes32 commandId;
        uint64 elevatorCab;
        uint64 doors;
        uint64 controller;
        uint64 controlPanel;
        uint64 display;
        uint64 musicSystem;
    }
    uint64 public productListCount = 0;
    
    mapping(uint64 => Products) public products;
    
    address public myAddress = address(this);
    
    function getContractAddress()public view returns(address){
        return address(this);
    }
    
    Products[] productList;
    
    
        // INHERITANCE	         ITEM		              CALCULUS		   TOTAL
        // ElevatorCab  	aluminiumBars	            10 per cab	         80
        // ElevatorCab  	stainlessSteelSheets	    8 per cab	         64
        // ElevatorCab	    interiorLightBulbs      	4 per cab	         32
        
        // Doors	        aluminiumBars		        6 per doors     	 48
        // Doors    	    stainlessSteelSheets        2 per doors     	 16
        // Doors		     bumperRubberBands	        2 per doors          16
        
        // Controller	    displayLeds 	            1 per controller      8
        // Controller	    stainlessSteelSheets		1 per controller	  8
        
        // ControlPanel	    displayLeds		            1 per panel		      8
        // ControlPanel	        Springs		            5 per panel  	     40

        
        // Display		    displayLeds		            1 per display		 48
        // Display		    interiorLightBulbs          2 per display		 96

        
        // MusicSystem	        speakers	            2 per musicsystem	 16
        // MusicSystem		interiorLightBulbs          2 per musicsystem	 96
        
        //*** for each 11 stainlessSteelSheets, we build 1 ElevatorCab,so 1 of each other items to ***//
        
    function getUniqueHash(uint64 elevatorCab, uint64 doors, uint64 controller, uint64 controlPanel, uint64 display, uint64 musicSystem) private pure returns (bytes32){
        return keccak256(abi.encode(elevatorCab, doors,controller, controlPanel, display, musicSystem));   
    }

    function getCommand(uint64 aluminiumBars, uint64 stainlessSteelSheets, uint64 bumperRubberBands, uint64 displayLeds, uint64 springs, uint64 speakers) public returns (uint64, uint64, uint64, uint64, uint64, uint64){
        
        uint64 nbElevator = stainlessSteelSheets / 11 ;
        uint64 nbDoors;
        if (bumperRubberBands >= nbElevator * 2){
            nbDoors = nbElevator * 2 ;
        }
        uint64 nbController;
        if (displayLeds >= nbElevator){
            nbController = nbElevator ;
        }
        uint64 nbControlPanel;
        if (springs >= nbElevator * 5){
            nbControlPanel = nbElevator;
        }
        uint64 nbDisplay = nbElevator * 8 ;
        uint64 nbMusicSystem = speakers / 2 ;
    
        Products memory new_product;
        new_product.productId = msg.sender;
        new_product.elevatorCab = nbElevator;
        new_product.doors = nbDoors;
        new_product.controller = nbController;
        new_product.controlPanel = nbControlPanel;
        new_product.display = nbDisplay;
        new_product.musicSystem = nbMusicSystem;

        ElevatorCab = new_product.elevatorCab;
        Doors = new_product.doors;
        Controller = new_product.controller;
        ControlPanel = new_product.controlPanel;
        Display = new_product.display;
        MusicSystem = new_product.musicSystem;

        bytes32 commandId = getUniqueHash(new_product.elevatorCab, new_product.doors, new_product.controller, new_product.controlPanel, new_product.display, new_product.musicSystem);
        new_product.commandId = commandId;
        productListCount++;
        products[productListCount] = new_product;
        productList.push(new_product);
        return (new_product.elevatorCab, new_product.doors, new_product.controller, new_product.controlPanel, new_product.display, new_product.musicSystem);
    }
}