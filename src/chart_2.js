import React, {Component} from 'react'
import { VegaLite } from 'react-vega'

import chart from './chart_2.json'

console.log(chart)
console.log(chart["datasets"])


const spec = chart;

class Chart2 extends Component {
    render(){

        return(
            <div>
              <VegaLite spec={spec} />
            </div>
        )
    }
    
}

export default Chart2;
