import React, { Component } from 'react';
import '../css/Heroes.css'

class Heroes extends Component {

  render() {

    // TODO: bug adding same hero to both team || Reset Teams maybe?

    document.addEventListener('contextmenu', event => event.preventDefault());


    let heroesList = this.props.list.map(item => {
        return (
            <li key={item.id}>
                <div>
                    {/* Add overlay */}
                    <img 
                    src={item.img} 
                    alt={item.Name}
                    title="Left Click to Add Your Team, Right Click to Add Opponent Team."
                    onContextMenu={() => this.props.oppicked(item)}
                    onClick={() => this.props.picked(item)}/>
                    <p>{item.Name}</p>
                </div>
            </li>
        )
    })

    return (
      <div className="Heroes">
        <div className="HeroesHolder">
            <ul>
                {heroesList}
            </ul>
        </div>
      </div>
    );
  }
}

export default Heroes;
