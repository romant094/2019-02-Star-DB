import React, { Component } from 'react';

export default class PersonDetails extends Component {
    render() {
        return (
            <div className="person-details card">
                <img src="https://starwars-visualguide.com/assets/img/characters/3.jpg" alt="" className="person-image" />
                <div className="card-body">
                    <h4>R2-D2</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><span>Gender</span>Male<span></span></li>
                        <li className="list-group-item"><span>Birth year</span><span>43</span></li>
                        <li className="list-group-item"><span>Eye color</span><span>red</span></li>
                    </ul>
                </div>
            </div>
        )
    }
}