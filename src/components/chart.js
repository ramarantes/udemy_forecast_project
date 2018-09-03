import _ from 'lodash';
import React, {Component} from 'react'
import {SparklinesLine ,Sparklines, SparklinesReferenceLine} from 'react-sparklines'

function average(data){
    return _.round(_.sum(data)/data.length);
}

const Chart = ({data,color,units}) =>{
    const defaultSparkHeight = 100;
    const defaultSparkWidth = 180;

    return ( <div><Sparklines 
        height={defaultSparkHeight} 
        width={defaultSparkWidth} 
        data={data}> 
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="avg" />
    </Sparklines>
    <div>{average(data)} {units}</div>
    </div>)

};

export default Chart;