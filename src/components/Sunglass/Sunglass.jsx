// import React from 'react';
import './Sunglass.css';

import { add, multiply } from '../../Utils/calculator'
import Watch from '../Watch/Watch'
//import add from '../../Utils/calculator';


const first = 55;
const second = 15;
const sum = add(first + second);
console.log(sum);

const mul = multiply(first + second);
console.log(mul);

const Sunglass = () => {
    return (
        <div>
            {/* <Watch></Watch> */}
        </div>
    );
};

export default Sunglass;