import React from 'react';
import './Create.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


class Create extends React.Component {
    render() {
        return (
            <div className="row">
                <h3>Create Bracket</h3>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s4">
                                <input id="tournament" type="text" className="validate"></input>
                                <label for="tournament">Tournament Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s4">
                                <input id="type" type="text" className="validate"></input>
                                <label for="type">Single Elimination</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s4">
                                <input id="bracket_size" type="number" className="validate"></input>
                                <label for="bracket_size">Bracket Size</label>
                            </div>
                        </div>
                        <a href="#!" className="waves-effect waves-light btn pink darken-4 modal-action modal-close">Generate Bracket</a>
                    </form>
                </div>
            </div>
        )
    }
}

export default Create;