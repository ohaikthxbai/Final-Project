import React from 'react';
import './Create.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Bracket from '../Bracket/Bracket';


class Create extends React.Component {
    render() {
        return (
            <div className="row">
                <div id="bracket-form" >
                    <h3>Create Bracket</h3>
                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s4">
                                    <input id="name" type="text" className="validate"></input>
                                    <label for="tournament">Tournament Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s4">
                                    <input id="tournament_type" disabled value="Single Elimination Only" type="text" className="validate"></input>
                                    <label for="type">Tournament Type</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s4">
                                    <input id="bracket_size" type="number" className="validate"></input>
                                    <label for="bracket_size">Bracket Size</label>
                                </div>
                            </div>
                            <a href="#" id="render" className="waves-effect waves-light btn pink darken-4 modal-action modal-close">Generate Bracket</a>
                        </form>
                    </div>
                </div>
                <Bracket />

            </div>
            
        )
    }
}

export default Create;