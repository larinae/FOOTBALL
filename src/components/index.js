import React from 'react';
import Button from 'react-bootstrap/Button'
import Header from "./Header";

class index extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
       <div>  <Header />
        <div style={{ marginTop: 50 }}>
           <Button href='/laliga' block>La Liga</Button>
           <Button href='/premierle' block>Premier League</Button>
           <Button href='/seriea' block>Serie A</Button>
           <Button href='/bundesliga' block>Bundesliga</Button>
           <Button href='/ligue1' block>Ligue 1</Button>
           <Button href='/premeriali' block>Primeira Liga</Button>
           <Button href='/eredivisie' block>Eredivisie</Button>
       </div>
       </div>
      );
    }
  }
  
 export default index;