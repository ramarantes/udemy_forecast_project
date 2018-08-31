import React, {Component} from 'react'
import {SparklinesLine ,Sparklines, SparklinesReferenceLine} from 'react-sparklines'

const Chart = ({data,color}) =>{
    const defaultSparkHeight = 100;
    const defaultSparkWidth = 180;

    return ( <div style={{width:defaultSparkWidth, height:defaultSparkHeight}}><Sparklines 
        height={defaultSparkHeight} 
        width={defaultSparkWidth} 
        data={data}> 
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="avg" />
    </Sparklines>
    </div>)

};

export default Chart;