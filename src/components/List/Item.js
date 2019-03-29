import React from 'react';

const Item = props => (
    <div className={`list__item ${props.isEven ? 'list__item--even' : 'list__item--odd'}`}
         onClick={event => props.onNumberSelected(props.number)}>
        {`${props.number} (${props.isEven ? 'even' : 'odd'})`}
    </div>
);
export default Item;