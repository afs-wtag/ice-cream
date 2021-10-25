import React, { Component } from 'react';
import Builder from '../../components/Builder/Builder';
import IceCream from '../../components/IceCream/IceCream';
import classes from './IceCreamBuilder.module.css';

export default class IceCreamBuilder extends Component {
    // class property
    state = {
        items: {
            vanilla: 45,
            chocolate: 50,
            lemon: 35,
            orange: 40,
            strawberry: 60,
        },
        scoops: [],
        totalPrice: 0,
    };

    render() {
        const { items, totalPrice, scoops } = this.state;
        return(
            <div className={['container', classes.container].join(' ')}>
                <IceCream items={items}/>
                <Builder />
            </div>
        );
    }
}