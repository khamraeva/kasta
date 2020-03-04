import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { card } from '@fortawesome/free-solid-svg-icons';
// import './payform.css';

export default class PayForm extends Component {
    render() {
        return (
            <div className='container'>
               {/* <i class="fas fa-credit-card"></i> */}
               <FontAwesomeIcon icon={card} />
            </div>
        )
    }
}
