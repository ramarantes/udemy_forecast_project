import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';


class WeatherList extends Component{

    constructor(props)
    {
        super(props);

        this.renderWeather = this.renderWeather.bind(this);
    }

    RenderData(data)
    {
        // console.log('renderdata',data);
        return(data.main.temp);
    }

    renderWeather(cityData){
        const temps = cityData.list.map(this.RenderData);
        const press = cityData.list.map(press => press.main.pressure);
        const humid = cityData.list.map(humd => humd.main.humidity);


        console.log(temps);

        return(
            <tr key={cityData.city.id}>
                <td >{cityData.city.name}</td>
                <td><Chart data = {temps} color="orange" /></td>
                <td><Chart data = {press} color="blue"/></td>
                <td><Chart data = {humid} color="yellow"/></td>
                
            </tr>
        )
    }
    
    

    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                            <th>City</th>
                            <th>Temperature</th>
                            <th>Pressure</th>
                            <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.Weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}



function mapStateToProps({Weather}){
    return {Weather}; //same as {weather : weather}
}

export default connect(mapStateToProps)(WeatherList);