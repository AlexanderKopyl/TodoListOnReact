import React, {Component} from 'react';

import './serch-panel.css';

export default class SerchPanel extends Component{

    state = {
      trim: ''
    };

    onChangeOninput = (e) => {
        const trim = e.target.value;

        this.setState({trim});
        this.props.onSerchItem(trim);
    };


    render() {
        // const {onSerchItem} = this.props;

        return <input
            className="form-control serch-input"
            placeholder="serch"
            onChange={this.onChangeOninput}
        />;
    }


}



