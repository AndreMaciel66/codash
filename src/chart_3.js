import React, {Component} from 'react'
import { VegaLite } from 'react-vega'

import chart from './deaths_by_state.json'

console.log(chart)
console.log(chart["datasets"])


const spec = chart;

class Chart3 extends Component {
    render(){

        return(
            <div>
              <VegaLite spec={spec} />
            </div>
        )
    }
    
}

export default Chart3;
