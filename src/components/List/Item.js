import React from 'react';
import { Link } from 'react-router-dom';

const Item = props => (
    <Link className="list__item"
          to={`/users/${props.user.id}`}>
        {props.user.name}
    </Link>
);
export default Item;