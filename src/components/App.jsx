import React from 'react';
import '../styles/App.css';
import Card from './Card.jsx';

class App extends React.Component {
    render() {
        return(
            <>
                <h1>A ver</h1>
                <div className='container'>
                    <Card titulo="Manzana" foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi14bAcYgeUowPVT4j12e8ZOSKfA4Kuyt4kg&s" descripcion="New Yorkina"/>
                    <Card titulo="Sandia" foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Tvr7dsM9BrZBJgrZfzhr45IbI1ZFfuGNHg&s" descripcion="Bola de 8 kilos"/>
                    <Card titulo="Fresa" foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr28Hi_lBboWHv-jR_fiZ3Q1oYth7-65kZtw&s" descripcion="Traicionera"/>
                </div>
            </>
        );
    }
}

export default App;