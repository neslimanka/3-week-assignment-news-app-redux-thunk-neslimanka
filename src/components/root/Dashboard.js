
import React, { Component } from 'react'
import {  Container} from 'reactstrap'
import Categories from '../categories/Categories'


export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Container>
                <Categories/>
                </Container>
                     
              
            </div>
        )
    }
}