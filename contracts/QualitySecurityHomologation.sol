// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Quality {
    
    address qualityId = msg.sender;
    
    struct QualityTest{
        uint commandId;
        string object;
        uint objectCount;
        string employee;
        uint testDate;
        
    }
    
    struct Certificate{
        uint certificateId;
        string certificateType;
        string employeeCertificate;
        uint certificateDate;

    }
    
    struct Permit{
        uint permitId;
        string permitType;
        string employeePermit;
        uint permitDate;
    }

    uint private commandID = 1;
    
    QualityTest[] qualityList;
    
    Certificate[] certificateList;
    
    Permit[] permitList;
    
    function testDoor(uint number) private{
        QualityTest memory new_quality;
        new_quality.commandId = commandID;
        new_quality.object = "Door";
        new_quality.objectCount = number;
        new_quality.employee = "Eric";
        new_quality.testDate = block.timestamp;
        commandID++;
        qualityList.push(new_quality);
        
    }
    
    function testCable(uint number) private{
        QualityTest memory new_quality;
        new_quality.commandId = commandID;
        new_quality.object = "Cable";
        new_quality.objectCount = number;
        new_quality.employee = "Ines";
        new_quality.testDate = block.timestamp;
        commandID++;
        qualityList.push(new_quality);
    }
    
    function testBrake(uint number) private{
        QualityTest memory new_quality;
        new_quality.commandId = commandID;
        new_quality.object = "Brake";
        new_quality.objectCount = number;
        new_quality.employee = "Claude";
        new_quality.testDate = block.timestamp;
        commandID++;
        qualityList.push(new_quality);
    }
    
    function genRandom() private view returns (uint) {
        uint rand = uint(keccak256(abi.encode(block.timestamp)));
        return uint(rand % (10 ** 20));
    }
    
    
    function makeCertificate(uint number) private{
        for(uint i=0; i<number; i++){
            Certificate memory new_certificate;
            new_certificate.certificateId = genRandom();
            new_certificate.certificateType = "Column";
            new_certificate.employeeCertificate = "Tommy";
            new_certificate.certificateDate = block.timestamp + i;
            certificateList.push(new_certificate);
        }
    }
    
    function makePermit(uint number) private{
        for(uint i=0; i<number; i++){
            Permit memory new_permit;
            new_permit.permitId = genRandom();
            new_permit.permitType = "Battery";
            new_permit.employeePermit = "Felix";
            new_permit.permitDate = block.timestamp + i;
            permitList.push(new_permit);
        }
        
    }
    
    function GetQuality() public view returns(QualityTest[] memory){
        return qualityList;
    }
    
    function GetCertificate() public view returns(Certificate[] memory){
        return certificateList;
    }
    
    function GetPermit() public view returns(Permit[] memory){
        return permitList;
    }
    
    function GetQualityIndex(uint index) public view returns(QualityTest memory){
        return qualityList[index];
    }
    
    function GetCertificateIndex(uint index) public view returns(Certificate memory){
        return certificateList[index];
    }
    
    function GetPermitIndex(uint index) public view returns(Permit memory){
        return permitList[index];
    }
    
    
     function createQuality(uint door, uint cable, uint brake, uint battery, uint column) public{
         testDoor(door);
         testCable(cable);
         testBrake(brake);
         makeCertificate(column);
         makePermit(battery);
         
         
     }
    

}
