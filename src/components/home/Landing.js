import React, { Component } from 'react';
import Header from '../header/Header';
import Card from '../cards/Cards';
import Item from '../Item/Item';

class Landing extends Component {
    render() {
        return (
            <div>
                <Header />
                <Item />
                <Card />
            </div>

        )
    }
}
export default Landing