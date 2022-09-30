import React from 'react'

function Error({errorM}) {
    if(errorM.code==="file-invalid-type"){
        return <p className='text-xl text-red-400'>😔File Not Valid choose from .png .jpg or .jpeg</p>
    }
    if(errorM.code ==="too-many-files"){
        return <p className='text-xl text-red-400'>😔Maximum two files are allowed</p>
    }
 
}

export default Error