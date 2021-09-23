import React, { Component } from 'react';
import logo from '../logo.png';
import './App.css';

class Main extends Component {
  render() {
    return (
      <div>
        <nav className="navbar  fixed-top  flex-md-nowrap p-0 shadow">
        </nav>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                <div>
                <form onSubmit={(event) => {
                  event.preventDefault()
                  var unameC = this.unameC.value
                  var uidC= this.uidC.value
                  this.props.createAccount(unameC,uidC)
                  console.log(unameC,uidC)
                }}>
                      <div className="form-group mr-sm-2">
                          <input id="unameC"
                          type="text"
                          className="form-control"
                          placeholder="Username"
                          ref={(input)=>{this.unameC=input}}
                          required>
                          </input>
                          <input id="uidC"
                          type="number"
                          className="form-control"
                          placeholder="ID"
                          ref={(input)=>{this.uidC=input}}
                          required>
                          </input>
                      </div>
                      <button type="submit">Register</button>
                  </form>
                </div>
                <div>
                  <br></br>
                <form onSubmit={(event) => {
                  event.preventDefault()
                  var uname = this.uname.value
                  var uid= this.uid.value
                  this.props.checkLogin(uname,uid)
                  console.log(uid,uname)
                }}>
                      <div className="form-group mr-sm-2">
                          <input id="uname"
                          type="text"
                          className="form-control"
                          placeholder="Username"
                          ref={(input)=>{this.uname=input}}
                          required>
                          </input>
                          <input id="uid"
                          type="number"
                          className="form-control"
                          placeholder="ID"
                          ref={(input)=>{this.uid=input}}
                          required>
                          </input>
                      </div>
                      <button type="submit">Login</button>
                  </form>
                </div>
                  
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
