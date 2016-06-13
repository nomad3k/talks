import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router';

class Position extends Component {
  render() {
    const { position } = this.props;
    return (
      <div>
        {position.get('code')}
        {position.get('title')}
        <Link className='mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised mdl-button--colored' to={`/position/${position.get('id')}`}>
          View &raquo;
        </Link>
        <ul>
          {position.get('reports').map( p =>
            <li>
              <Position position={p} />
            </li>
          )}
        </ul>
      </div>
    );
  }
}

Position.propTypes = {
  position: PropTypes.object.isRequired,
};

export default Position;
