import React,{Component} from 'react';
import './item-status-filter.css';


export default class BtnGroup extends Component{


    render() {

        return (
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn  btn-info">All</button>
                <button type="button" className="btn btn-dark">Active</button>
                <button type="button" className="btn btn-dark">Done</button>
            </div>
        );
    }
};





