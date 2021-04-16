// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.5.0;
pragma experimental ABIEncoderV2;

contract QualitySecurity {
    
    address qualityId = msg.sender;
    
    struct QualityTest{
        uint qualityTestId;
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

    uint qualityTestId = 1;
    
    QualityTest[] qualityList;
    
    Certificate[] certificateList;
    
    Permit[] permitList;
    
    string[] employeeList = ["Felix","Claude","Tommy","Ines","Eric","Christiane"];
    uint employeeNumber = 0;


    function selectEmployee() private returns(string memory){
        string memory employee = employeeList[employeeNumber];
        employeeNumber++;
        if (employeeNumber > 5) {
            employeeNumber = 0;
        }
        return employee;
    }
    
    function makeTest(string memory item,uint number) private{
        QualityTest memory new_quality;
        new_quality.qualityTestId = qualityTestId;
        new_quality.object = item;
        new_quality.objectCount = number;
        new_quality.employee = selectEmployee();
        new_quality.testDate = block.timestamp;
        qualityTestId++;
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
            new_certificate.employeeCertificate = selectEmployee();
            new_certificate.certificateDate = block.timestamp + i;
            certificateList.push(new_certificate);
        }
    }
    
    function makePermit(uint number) private{
        for(uint i=0; i<number; i++){
            Permit memory new_permit;
            new_permit.permitId = genRandom();
            new_permit.permitType = "Battery";
            new_permit.employeePermit = selectEmployee();
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
        makeTest("Door",door);
        makeTest("Brake",brake);
        makeTest("Cable",cable);
        makeCertificate(column);
        makePermit(battery);
         
         
     }
    

}