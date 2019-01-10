import React,{Component} from 'react';
import './item-status-filter.css';


export default class BtnGroup extends Component{

    buttons = [
        {name:'all', label: 'All'},
        {name:'done',label: 'Done'},
        { name:'active', label: 'Active'}
    ];






    render() {
        const {filter,onSerchButtons} = this.props;

        const buttons = this.buttons.map(({name,label}) => {
            const isActive = filter === name;
            const clazz = isActive ? 'btn-info' : 'btn-dark';

            return (
                <button
                    type="button"
                    key={name}
                    className={ `btn ${clazz}` }
                    onClick={()=>onSerchButtons({name})}
                >{label}</button>
            );
        });
        return (

            <div className="btn-group" role="group" aria-label="Basic example">
                {buttons}
            </div>
        );
    }
};





