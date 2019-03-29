import React from 'react';
import { Link } from 'react-router-dom';

const Item = props => (
    <Link className={`list__item ${props.isEven ? 'list__item--even' : 'list__item--odd'}`}
         to={`/${props.number}`}>
        {`${props.number} (${props.isEven ? 'even' : 'odd'})`}
    </Link>
);
export default Item;