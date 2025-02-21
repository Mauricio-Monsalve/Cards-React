import React from 'react';
import '../styles/Card.css';
import Counter from './Counter.jsx';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {contador: 0};
        this.sumar = this.adicionar.bind(this);
        // this.sumar = () => {
        //     this.setState(
        //         {contador: this.state.contador + 1}
        //     );
        // }
    }
    adicionar() {
        this.setState(
            {contador: this.state.contador + 1}
        );
    }
    render() {
        return(
            <div className='Card'>
                <h2>{this.props.titulo}</h2>
                <img src={this.props.foto} alt={this.props.titulo} />
                <p>{this.props.descripcion}</p>
                <Counter manejarClick={this.sumar}/>
                <span>Has comprado {this.state.contador}</span>
            </div>
        );
    }
}

export default Card;