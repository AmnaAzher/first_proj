
import React, {useState} from 'react';


function ColorPicker(){

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  /*page reload krna pr rha hai cause theme change detect krne wala koi event handler nhi hai. */

  /*useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme : dark)');
    const handleChange = (e) => {
      setPrefersDark(e.matches);
      setcolor(e.matches? '#242424' : '#ffffff');
    };

    mediaQuery.addEventListener('change', handleChange);
    return() => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  },[]);*/ 
  //ye daala tha check krne k liye but it's not working. poora seekhne k baad will work on this

  const [color, setcolor] = useState(prefersDark? '#242424' : '#ffffff');

  function handleColorChange(event){
    setcolor(event.target.value);
  }
  return(
    <div className='color-picker-container'>
      <h1 style={{color: prefersDark? '#ffffff' : '#242424'}}>Color Picker</h1>
      <div style = {{backgroundColor: prefersDark}}> 
      {/* with any css property in js we need to make it in 
      object. hence we enclose it in double curly braces*/}
      <p style={{fontWeight: 'bold', fontSize: '20px', fontFamily: 'Times New Roman', color: 'red'}}>
        Selected Color: {color}</p>
      </div>
      
      <label className='firstLabel' style={{fontWeight: 'bold', fontSize: '20px', marginRight: '10px', 
      color: prefersDark? '#ffffff' : '#242424'}}>
        Select a Color: 
      </label>
      <input type='color' value={color} onChange={handleColorChange}/>
      <div className='colorDisplayer' style={{backgroundColor: color}}></div>
    </div>
  );
}

export default ColorPicker