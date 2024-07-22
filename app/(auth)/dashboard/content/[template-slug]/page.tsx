"use client"
import React, { useState } from 'react'
import FormSection from '../_componets/FormSection'
import OutputSession from '../_componets/OutputSession'
import { TEMPLATE } from '../../_components/TempleliteListSection'
import templete from '@/app/(data)/templete'

import { chatSession } from '@/utils/AiModel'
interface PROPS{
    params:{
        'template-slug':string,
    }
}
function CreateNewContent(props:PROPS) {
   const selectedTemplate:TEMPLATE|undefined=templete?.find((item)=>item.slug==props.params['template-slug'])

   const [loading , setLoading] = useState(false)
   const [aioutput,setAioutput] = useState <string>('')
   const generateAIcontent = async (formData:any)=>{


    setLoading(true)
      const selectedPrompt = selectedTemplate?.aiPrompt


      const FinalAIprompt = JSON.stringify(formData)+","+ selectedPrompt

      const result = await chatSession.sendMessage(FinalAIprompt)
      console.log(result.response.text())
      setAioutput(result?.response.text())
      setLoading(false)
   }
  return (
    <>
     <div className='grid grid-cols-1 md:grid-cols-2 gap-10 p-5'>
         {/* FormSection */}
         <FormSection 
         selectedTemplate={selectedTemplate}
         userFormInput={(v:any)=>generateAIcontent(v)}
         loading={loading}
         />
         {/* For OUTPUT SESSION */}
         <OutputSession aiOutput={aioutput} />
     </div>
    </>
  )
}

export default CreateNewContent