import React from 'react';
import axios from 'axios';
import List from './List';
import ligaapi from './ligaapi'


class Liga extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            equipos: null
        }
        this.league = props.location.pathname
        this.getEquipos();
    }

    async getEquipos() {
        let lig = ligaapi.selectLeague(this.league);
        let equip = await axios.get('http://api.football-data.org/v2/competitions/' + lig + '/teams', {
            headers: {
                'X-Auth-Token': '0c5f1408ad9d4716b67b707c99c3d77f'
            }
        });
        this.setState({
            equipos: equip.data.teams
        })
    }

    render() {
        if (this.state.equipos == null) {
            return (
                <div>Loading...</div>
            )
        } else {
            return (
                <div style={{paddingLeft: '350px', maxHeight: '150px', maxWidth: '1200px'}}>
                    {this.state.equipos.map((e, i) => <List key={i} {...e} />)}
                </div>
            )
        }
    }
}

export default Liga;