import React, { Component } from 'react';
import SwapiService from '../../services/swapi';
import Spinner from '../spinner';

export default class RandomPlanet extends Component {
    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true
    }

    constructor() {
        super();
        this.updatePlanet();
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        });
    }

    updatePlanet() {
        const id = Math.floor(Math.random() * 25 + 2);
        this.swapiService.getPlanet(id)
            .then(this.onPlanetLoaded);
    }

    render() {
        const { planet, loading } = this.state;
        return (
            <div className="random-planet jumbotron rounded">
                {
                    loading
                        ? <Spinner />
                        : <PlanetView planet={planet} />
                }
            </div>
        )
    }
};

const PlanetView = ({planet}) => {
    const { id, name, population, rotationPeriod, diameter } = planet;
    return (
        <>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="" className="planet-image" />
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><span className="term">Population</span><span>{population}</span></li>
                    <li className="list-group-item"><span className="term">Rotation period</span><span>{rotationPeriod}</span></li>
                    <li className="list-group-item"><span className="term">Diameter</span><span>{diameter}</span></li>
                </ul>
            </div>
        </>
    )
}