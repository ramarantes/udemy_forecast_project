import React, {Component} from 'react'
import {SparklinesLine ,Sparklines} from 'react-sparklines'

const Chart = ({data,color}) =>{
    const defaultSparkHeight = 25;
    const defaultSparkWidth = 90;

    return ( <Sparklines height={defaultSparkHeight} width={defaultSparkWidth} data={data}> 
        <SparklinesLine color={color} />
    </Sparklines>)

};

export default Chart;