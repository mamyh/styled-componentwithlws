import React, { useReducer } from 'react';

const initial ={
    count:0,
    count1:0
}
function reducer(state,action   ){
     switch(action.type){
         case 'increment':
             return {...state,count : state.count + action.value};
         case 'decrement':
             return {...state,count: state.count - action.value};
         default:
             return state;
     }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initial)
  return (
    <div>

        <div>Counter {state.count}</div>
        <button onClick={()=>dispatch({type:'increment',value:1})}>increment by one</button>
        <button onClick={()=>dispatch({type:'decrement',value:1})}>decrement by one</button>
        <div>Counter2 {state.count1}</div>
        <button onClick={()=>dispatch({type:'increment',value:5})}>increment by five</button>
        <button onClick={()=>dispatch({type:'decrement',value:5})}>increment by five</button>
    </div>
    )
}

export default Counter