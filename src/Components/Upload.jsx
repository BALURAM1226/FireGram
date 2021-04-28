import React , { useState } from 'react';
import Progress from  "../Components/Progress";


const Upload = () => {

const [file, setFile] = useState(null);
const [error, Seterror] = useState(null);


  const changeHandler =(event) =>{
    let selected = event.target.files[0];
    if(selected){
      setFile(selected);
      Seterror('');
    }else{
      setFile(null);
      Seterror('please select the image ');

    }

  };
  return (
    <>
    <form>
    <label>
    <input type="file"  onChange={changeHandler} multiple/>
    <span>+</span>
    </label>
    <div className ="output">
    {file && <div>{file.name} </div>}
    { file && <Progress file={file} setFile={setFile} /> }

    </div>
    </form>
</>

  );
}

export default Upload;