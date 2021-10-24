import React from 'react';
import classes from './Builder.module.css';
import Items from './Items/Items';

const Builder = () => {
    return (
        <div>
            <div className={classes.builder}>
                <h3>Build your own Ice Cream Sundae</h3>
                <Items />
                <button type="button" className={[classes.order, 'rounded'].join(' ')}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default Builder;