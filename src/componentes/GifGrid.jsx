import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'
import { GifItem } from './GifItem'

const GifGrid = ({category}) => {

const [images, setImages] = useState([])

const getImages = async() => {
const newImages = await getGifs(category);
setImages(newImages);

}


    useEffect( () => {
    getImages();
}, [])


  return (
    <div>
        <h3>{category}</h3>
       <div className='card-grid'>
        {
images.map(( image) => (
<GifItem 
key={image.id}
{...image}
/>
   
)
)}

</div>
        
       
    </div>
  )
}

export default GifGrid