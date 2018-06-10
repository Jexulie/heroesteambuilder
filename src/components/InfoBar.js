import React, { Component } from 'react';
import '../css/Info.css'

class InfoBar extends Component {
  render() {

    // check for composition of team
    // make info bar better -> add constructor / state ...

    let mt = this.props.myteam;
    let ot = this.props.opteam;

    let tankAlert = ""
    let supportAlert = ""

    let myteamTotalHealth = 0
    let myteamTotalDps = 0
    let myteamComposition = []

    let otteamTotalHealth = 0
    let otteamTotalDps = 0
    let otteamComposition = []

    if(mt.length >= 1){
      for(let i in mt){
        myteamTotalHealth += mt[i].Health
        myteamTotalDps += (mt[i].Damage * mt[i].AtkSpeed)
        myteamComposition.push(mt[i].Role)
      }
    }

    if(ot.length >= 1){
      for(let i in ot){
        otteamTotalHealth += ot[i].Health
        otteamTotalDps += (ot[i].Damage * ot[i].AtkSpeed)
        otteamComposition.push(ot[i].Role)
      }
    }

    if(!myteamComposition.includes("Warrior")){
      tankAlert = "You Need A Warrior In Your Team!"
    }

    if(!myteamComposition.includes("Support")){
      supportAlert = "You Need A Support In Your Team!"
    }

    let my;
    let other;

    if(this.props.myteam.length > 0){
      my = (
        <div className="myteam">
          <p><span className="warn">{tankAlert}</span></p>
          <p><span className="warn">{supportAlert}</span></p>
          <p>Team Total Hp: {myteamTotalHealth.toFixed(0)}</p>
          <p>Team Total Dps: {myteamTotalDps.toFixed(2)}</p>
          {/* <p>{myteamComposition}</p> */}
        </div>
      )
    }

    if(this.props.opteam.length > 0){
      other = (
        <div className="otteam">
          <p>Other Team Total Hp: {otteamTotalHealth.toFixed(0)}</p>
          <p>Other Team Total Dps: {otteamTotalDps.toFixed(2)}</p>
          {/* <p>{otteamComposition}</p> */}
        </div>
      )
    }
    
    return (
      <div className="InfoBar">
        {my}
        {other}        
      </div>
    );
  }
}

export default InfoBar;