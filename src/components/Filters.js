import React, { Component } from 'react';
import '../css/Buttons.css'

class Filters extends Component {
    render(){
        return(
            <div className="Filters">
                <div className="holder">
                    {/* <h2>Filter by Role</h2> */}
                    <div className="buttons">
                        <button onClick={() => this.props.role  ("Warrior")}  >Warrior</button>
                        <button onClick={() => this.props.role  ("Support")}  >Support</button>
                        <button onClick={() => this.props.role  ("Assassin")} >Assassin</button>
                        <button onClick={() => this.props.role      ("Specialist")}>Specialist</button>
                    </div>
                </div>
                <div className="holder">
                    {/* <h2>Filter by Type</h2> */}
                    <div className="buttons">
                        <button onClick={() => this.props.type("Melee") }>Melee</button>
                        <button onClick={() => this.props.type  ("Ranged")}>Ranged</button>
                    </div>
                </div>
                <div className="holder">
                    {/* <h2>Filter by Franchise</h2> */}
                <div className="buttons">
                    <button onClick={() => this.props.franchise ("Warcraft")}>Warcraft</button>
                    <button onClick={() => this.props.franchise ("Starcraft")}>Starcraft</button>
                    <button onClick={() => this.props.franchise ("Overwatch")}>Overwatch</button>
                    <button onClick={() => this.props.franchise ("Diablo")}>Diablo</button>
                    <button onClick={() => this.props.franchise ("Blizzard")}>Blizzard</button>
                </div>
                </div>
                <div>
                    <button onClick={() => this.props.reset()}>Reset</button>
                </div>
            </div>
        )
    }
}

export default Filters;