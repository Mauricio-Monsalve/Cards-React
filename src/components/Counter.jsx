import React from 'react';
import '../styles/Counter.css';

class Counter extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <button className='Counter' onClick={this.props.manejarClick}>Add</button>
        );
    }
}

export default Counter;