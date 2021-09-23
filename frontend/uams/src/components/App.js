import React, { Component } from 'react';
import Web3 from 'web3';
import './App.css';
import Navbar from './Navbar.js';
import Main from './Main.js';
import AccountManagement from '../abis/AccountManagement.json';
import Identicon from 'identicon.js';

class App extends Component {

  async componentWillMount()
  {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3()
  {

      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable()
      }
      else if (window.web3)
      {
        window.web3=new Web3(window.web3.currentProvider)
      }
      else {
        window.alert('None ether broswe.')
      }
    }  

    async loadBlockchainData()
    {
      const web3=window.web3
    // load acc
    const accounts=await web3.eth.getAccounts()
    this.setState({account:accounts[0]})
    // netid
    const networkId=await web3.eth.net.getId()
    const networkData=AccountManagement.networks[networkId]
    if(networkData)
    {
      const accountManagement = new web3.eth.Contract(AccountManagement.abi,networkData.address)
      this.setState({accountManagement:accountManagement})
    //   const postCount=await accountManagement.methods.postCount().call()
    //   this.setState({postCount})
    //   //load posts
    //   for(var i=1;i<=postCount;i++)
    //   {
    //     const post = await accountManagement.methods.posts(i).call()
    //     this.setState({
    //       posts:[...this.state.posts,post]
    //     })
    //   }
    //   this.setState({loading:false})
    //   console.log({posts:this.state.posts})
    // }
    // else
    // {
    //   window.alert("Setup smart contract for deployed betwrk")
    }
    // address
    // abi
    }

    createAccount(uname,uid)
    {
      this.state.accountManagement.methods.createAccount(uname,uid).send({from:this.state.account}).once('receipt',(receipt)=> {
        // this.setState({loading:false})
        console.log(receipt);
      })
    }

    checkLogin (uname,uid)
    {
      // this.state.accountManagement.methods.checkLogin(uname,uid).call().then(console.log)
        this.state.accountManagement.methods.checkLogin(uname,uid).call().then(function(res){

            if (res==true)
            {
                alert("Loggin you in")
            }
            else
            {
                alert("No account found. create a account first")
            }
        });
    }
    // tipPost(id,tipAmount)
    // {
    //   this.setState({loading:true})
    //   this.state.accountManagement.methods.tipPost(id).send({from:this.state.account,value:tipAmount}).once('receipt',(receipt)=> {
    //     this.setState({loading:false})
    //   })
    // }

    constructor(props)
    {
      super(props)
      this.state = {
        account: '',
        accountManagement:null,
        // postCount:0,
        // posts: [],
        // loading: false
      }
      this.createAccount=this.createAccount.bind(this)
      this.checkLogin=this.checkLogin.bind(this)

    }






  render() {
    return (
      <div>
<Navbar accounts={this.state.account}/>
<div className="text=center mt-5"></div> : <Main  createAccount={this.createAccount} checkLogin={this.checkLogin}/>

      
        </div>
    );
  }
}

export default App;
