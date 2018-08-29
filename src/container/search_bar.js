import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchWeather} from '../actions/index';
import {bindActionCreators} from 'redux';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {term: ''};
         this.onInputChange = this.onInputChange.bind(this);
         this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        this.setState({term: event.target.value});
    }

    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    }

    render(){
    return(
        <form className="input-group" onSubmit={this.onFormSubmit}>
        <input
            placeholder="Get a five-day forecast in your favorite cities"
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange}
        />
        <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">submit</button>
        </span>
        <div>{this.props.counter}</div>
        </form>
    );
}
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather},dispatch);
}

function mapStateToProps(state){
    return{
        counter: state.counter
    };
}


export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);