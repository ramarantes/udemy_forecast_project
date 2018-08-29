import { combineReducers } from 'redux';
import CounterReducer from './reducer_counter';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
  state: (state = {}) => state,
  counter: CounterReducer,
  Weather: WeatherReducer
});

export default rootReducer;
