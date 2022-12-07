import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './Context';
import Counter from './Counter';

class Player extends PureComponent {

  static propTypes = {
    //Properties
    index: PropTypes.number.isRequired
  };

  render() {
    //distructing assignment
    const { 
      score,
      index
    } = this.props;

    return (
      <div className="player">
        <Consumer>
          { ({ actions, players }) => (
            <span className="player-name">
              <button className="remove-player" onClick={() => actions.removePlayer(players[index].id)}>✖</button>
              { name }
          </span>
          )}
        </Consumer>

        <Counter index={index} />
      </div>
    );
  }
}

export default Player;