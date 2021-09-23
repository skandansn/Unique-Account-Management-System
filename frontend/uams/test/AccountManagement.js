const { assert } = require('chai')

const AccountManagement = artifacts.require('./AccountManagement.sol')
require('chai').use(require('chai-as-promised'))
.should()

contract ('AccountManagement',()=> {
    let accountManagement
    before (async()=>{
        accountManagement=await AccountManagement.deployed()
    })
    describe('deployment',async()=>
    {
    it ('deploys successfully',async()=>{
    const address=await accountManagement.address
    assert.notEqual(address,0x0)
    assert.notEqual(address,'')
    assert.notEqual(address,null)
    assert.notEqual(address,undefined)
    
    })
    it('has a name',async()=> {
        const name=await accountManagement.name()
        assert.equal(name,'UAMS')
    })
    })
    
    describe('accounts',async()=> {
        let result
    
        before (async()=>{
            result=await accountManagement.createAccount('skandan',1)
            })
    
        it('creates accounts',async()=> {
            const event=(result.logs[0].args)
            assert.equal(event.id.toNumber(),1,'id is correct')
            assert.equal(event.name,"skandan",'content is correct')
    
            //failure
             await accountManagement.createAccount('','').should.be.rejected;
        
        })
    
        })
    })
    
    
    
    
    
    // })