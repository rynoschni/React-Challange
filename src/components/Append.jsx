import React, { useState } from 'react';

const Append = props => {
  const [text, setText] = useState('');
  const [newText, setNewText] = useState([]);

  const _handleChange = (text) =>{
    setText(text);
  }
   const _Append = (event) =>{
    setNewText([...newText,' ',text])
    setText('')
   }

   const _Undo = (event) =>{
     const pop = newText.splice(-2,2)
    setNewText([...newText])
   }

   return(
     <>
      <h1>Append some text!</h1>
      <form>
        <label>
          Some Text: 
          <input type='text' value={text} onChange={(event) => _handleChange(event.target.value)}/>
        </label>
        <button type='button' onClick={(event) => _Append(event)}>Append text</button>
        <button type='button' onClick={(event) => _Undo(event)}>Undo</button>
      </form>
      <h2>{newText}</h2>
     </>
   )

}

export default Append;

