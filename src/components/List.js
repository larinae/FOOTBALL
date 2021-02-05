import React from 'react';
import {Link} from 'react-router-dom'

function List(props) {
    return (
        <div className="card transparent">
            <div className="card mb-3 mxw">
                <div className="row no-gutters ">
                    <div className="col-md-4">
                        <img src={props.crestUrl} className="card-img"/>
                    </div>
                    <div className="card-body" style={{marginTop: '50px'}}>
                        <div>{props.name}</div>
                        <div>{props.venue}</div>
                        <div>
                            <Link to={"/information/" + props.id}>More detailed</Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default List;