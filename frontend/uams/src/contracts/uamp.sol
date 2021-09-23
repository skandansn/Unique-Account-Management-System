pragma solidity ^0.5.0;

contract AccountManagement {
    string public name;
    uint public total=0;
    // string public hashval;
    mapping(uint => string) public accounts;
    

    constructor() public {
        name="UAMS";
    }
        event AccountCreated(
        string name,
        uint id
    );

        function createAccount(string memory _name,uint _id) public
    {
            require(bytes(_name).length >0);
            require(abi.encodePacked(accounts[_id]).length == 0,"Account already exists for you");
      
            accounts[_id]=_name;
            total++;
            emit AccountCreated(accounts[_id],_id);
           
    }

         function checkLogin (string memory _name,uint _id) public view returns(bool)
    {
        require(bytes(_name).length >0);
        return (keccak256(abi.encodePacked((_name))) == keccak256(abi.encodePacked((accounts[_id]))));
    }

}