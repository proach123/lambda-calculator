import React , {useState} from "react";
import { numbers } from '../../../data';
import NumbersButton from './NumberButton';

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = (props) => {
  const [numberState] = useState(numbers)
  // STEP 2 - add the imported data to state
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       numberState.map((elem)=>{
         console.log(elem, 11111)
         return <NumbersButton key={elem} number={elem} />

       })
       }
    </div>
  );
};

export default Numbers
