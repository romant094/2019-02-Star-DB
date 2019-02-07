import React, { Component } from 'react';
import SwapiService from '../../services/swapi';

export default class RandomPlanet extends Component {
    swapiService = new SwapiService();

    state = {
        id: null,
        name: null,
        population: null,
        rotationPeriod: null,
        diameter: null
    }

    constructor() {
        super();
        this.updatePlanet();
    }

    updatePlanet() {
        const id = Math.floor(Math.random() * 25 + 2);
        this.swapiService.getPlanet(id)
            .then((planet) => {
                this.setState({
                    name: planet.name,
                    population: planet.population,
                    rotationPeriod: planet.rotation_period,
                    diameter: planet.diameter,
                    id
                })
            })
    }

    render() {
        const { id, name, population, rotationPeriod, diameter } = this.state;

        return (
            <div className="random-planet jumbotron rounded">
                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="" className="planet-image" />
                <div>
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><span className="term">Population</span><span>{population}</span></li>
                        <li className="list-group-item"><span className="term">Rotation period</span><span>{rotationPeriod}</span></li>
                        <li className="list-group-item"><span className="term">Diameter</span><span>{diameter}</span></li>
                    </ul>
                </div>
            </div>
        )
    }
};