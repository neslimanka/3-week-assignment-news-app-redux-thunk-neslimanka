
import React, { Component } from 'react'
import { Row,Col} from 'reactstrap'
import Categories from '../categories/Categories'


export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col >
                     <Categories/>
                    </Col>
                    
                  
                </Row>
            </div>
        )
    }
}