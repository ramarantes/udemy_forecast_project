import React from 'react'

export default function(state)
{
    console.log('entered_at_reducer_counter');
    if(state == null)
        return (0);
    return (state + 1);
}