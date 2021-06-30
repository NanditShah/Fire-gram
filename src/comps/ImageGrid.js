import React from 'react'
import useFirestore from '../hooks/useFirestore';
import {motion} from 'framer-motion'


const ImgaeGrid = ({setSelectedImage}) => {
    const {docs} = useFirestore('images');
    return(
        <div className='img-grid'>
        {docs && docs.map(doc => (
            <motion.div 
            whileHover = {{opacity:1}}
            layout
            onClick = {() => setSelectedImage(doc.url)}  key={doc.id} className='img-wrap'>
                <motion.img 
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay:1}}
                src={doc.url} alt='uploaded-pic' />
            </motion.div>
        ))}
        </div>
    )
}

export default ImgaeGrid;