import React, { useState } from 'react'
import {useDropzone} from 'react-dropzone';
import addFileIcon from './image/addFileIcon.svg'
import Error from './utility/Error';


function DragNDrop() {
    const[files, setFiles] = useState([]);

    const{getRootProps, getInputProps, acceptedFiles, fileRejections } = useDropzone(
        {
            maxFiles:2,
            accept:{
                "image/png":[".png",".jpg",'.jpeg',]
            },

            onDrop:(acceptedFiles) =>{
                setFiles(
                    acceptedFiles.map((file)=>Object.assign(file,{ preview: URL.createObjectURL(file), })),
                    


                )
            }

        }
    )

  return (
    <section className="text-center my-5 ">

        <div {...getRootProps(
            {className:"text-center cursor-pointer"}
        )}>
            <input {...getInputProps()}/>
            <img className=' mx-auto h-40 ' src={addFileIcon} alt="addfile" />
            <p className='text-xl font-semibold'>Drop a file here</p>
        </div>

        <div className="flex justify-center flex-wrap "> 
        {
            files.map((file)=>(
                <div className="image-preview m-2 p-4 w-40 h-40 " key={file.name}>
                    <img src={file.preview} alt="thumnail"
                    className='w-auto h-full rounded-md'
                    onLoad={
                        ()=>{
                            URL.revokeObjectURL(file.preview)
                        }
                    }
                    />
                </div>
            ))
        }
        </div>

        <div className="filesAccepted">
            {
                acceptedFiles[0]? <p  className='text-green-500 text-2xl'>🙂 Files accepted </p>: ''
            }
        </div>


        <div className="fileNotAccepted">
            {
                fileRejections[0]? <Error errorM = {fileRejections[0].errors[0]} /> : ''
            }
            
        </div>

    </section>
  )
}

export default DragNDrop