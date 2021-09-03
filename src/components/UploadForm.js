import { useState } from 'react';
import ProgressBar from './ProgressBar';
import useStorage from "../hooks/useStorage";
const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');
    const types = ['image/png', 'image/jpeg']

    const { progress, url , error:uploadError } = useStorage(file);
    function changeHandler(event) {
        let selected = event.target.files[0];
        console.log(selected.name)
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');

        }
        else {
            setFile(null);
            setError('Please select an image with a type (png , jpeg)');
        }
    }

    return (
        <form>
            <label>
                <input type="file" onChange={changeHandler} />
                <span>+</span>
            </label>
            <div className="output">
                   {error && <div className="error"> {error} </div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile}/>}
         </div>
        </form>
    )
}

export default UploadForm
