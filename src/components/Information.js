import React from 'react';
import axios from 'axios';

class Information extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            players: []
        }
        this.url = 'http://api.football-data.org/v2/teams/' + props.match.params.id;
        this.getPlantilla();
    }

    async getPlantilla() {
        let plant = await axios.get(this.url, {
            headers: {
                'X-Auth-Token': '0c5f1408ad9d4716b67b707c99c3d77f'
            }
        })
        console.log(plant)
        this.setState(
            {players: plant.data.squad}
        )
    }

    render() {
        if (this.players === []) {
            return (
                <div>Loading...</div>
            )
        } else {
            return (
                <div style={{paddingLeft: '100px', textColor: 'red'}}>
                    <ul>
                        {this.state.players.map((p) =>
                            <div className="card-body ">
                                <div className="card mxw">
                                    <div>{p.name}</div>
                                    <div>{p.position}</div>
                                </div>
                            </div>)}
                    </ul>
                </div>
            )
        }
    }
}

export default Information;