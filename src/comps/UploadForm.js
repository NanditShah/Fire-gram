import React, { useState } from 'react'
import Progressbar from './Progressbar'
function UploadForm() {

    const [file,setFile] = useState(null)
    const [error,setError] = useState(null)
    const types = ['image/png','image/jpeg','image/gif']
    const handleChange = (e) => {
        let selected = e.target.files[0]
        if(selected && types.includes(selected.type)){
            setFile(selected)
            setError('')
        }else{
            setFile(null)
            setError('Please select an image file (JPEG or PNG or GIF)')

        }
    }
    return (
        <div>
            <form>
            <label>
                <input type='file' onChange = {handleChange}/>
                <span>+</span>
            </label>
                <div className='output'>
                    {error && <div className='error'>{error}</div>}
                    {file && <div>{file.name}</div>}
                    {file && <Progressbar file={file} setFile={setFile}/>}
                </div>
            </form>
        </div>
    )
}

export default UploadForm
