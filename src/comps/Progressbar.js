import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage'
import {motion} from 'framer-motion'

function Progressbar({file,setFile}) {
    const {url,progress} = useStorage(file)
    useEffect(() => {
        if(url){
            setFile(null)
        }
    },[url,setFile])
    return (
        <motion.div initial={{width:0}} animate={{width:progress+'%'}} className='progress-bar'></motion.div>
    )
}

export default Progressbar
