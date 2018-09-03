import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

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
        const {lon,lat} = cityData.city.coord;
        

        console.log(temps);

        return(
            <tr key={cityData.city.id}>
                <td ><GoogleMap  lon={lon} lat={lat} /></td>
                <td><Chart data = {temps} color="orange" units="k"/></td>
                <td><Chart data = {press} color="yellow" units="hPa" /></td>
                <td><Chart data = {humid} color="green" units="%"/></td>
                
            </tr>
        )
    }
    
    

    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                            <th>City</th>
                            <th>Temperature (K)</th>
                            <th>Pressure (hPa)</th>
                            <th>Humidity (%)</th>
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