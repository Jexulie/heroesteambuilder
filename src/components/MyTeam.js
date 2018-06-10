import React, { Component } from 'react';

class MyTeam extends Component {

  render() {

    let teamList = this.props.team.map(item => {
      return(
        <li key={item.id}>
          <div>
            <img src={item.img} alt={item.Name} onClick={() => this.props.remove(item)}/>
            <p>{item.Name}</p>
          </div>
        </li>
      )
    })

    let reset;

    if(this.props.currTeam.length > 0){
      reset = (<button onClick={this.props.resetTeam}>Clear Team</button>)
    }

    return (
      <div className="MyTeam">
        <ul>
          {teamList}
        </ul>
        <div>
          {reset}
        </div>
      </div>
    );
  }
}

export default MyTeam;
