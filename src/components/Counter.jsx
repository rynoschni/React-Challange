import React, { useState } from 'react';

const Counter = props =>{
  const[num, setNum] = useState(0);

  const _handleSubtract = (event) => {
    
    setNum(num -1);
  }

  const _handleAdd = (event) =>{

    setNum(num +1);
  }
  return(
    <>
      <h1>Counter</h1>
      <form>
        <button type='button' onClick={(event) => _handleSubtract(event)}>Decrease</button>
        <p>{num}</p>
        <button type='button' onClick={(event) => _handleAdd(event)}>Increase</button>
      </form>
    </>
  )
}

export default Counter;
