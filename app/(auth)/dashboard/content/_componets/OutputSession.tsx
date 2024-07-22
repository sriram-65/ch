import React, { useEffect, useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

interface props{
  aiOutput:string
}


function OutputSession({aiOutput}:props) {

    const editorRef:any=useRef()

    useEffect(()=>{
      const editorInstance = editorRef.current.getInstance();
      editorInstance.setMarkdown(aiOutput)
    },[aiOutput])
  return (
    <div className='bg-white shadow-lg border'>
        <div className='flex justify-center items-center p-5'>
            <h2 className='font-bold text-2xl'>
                AI Generated
            </h2>
            <Button className='ml-5'><Copy/> Copy</Button>
        </div>
        <Editor
     ref={editorRef}
     initialValue="Ai Generated Content will Be Display in this Area"
     height="500px"
    
    initialEditType="wysiwyg"
    useCommandShortcut={true}
    onChange={()=>console.log(editorRef.current.getInstance().getMarkdown())}
  />
    </div>
  )
}

export default OutputSession