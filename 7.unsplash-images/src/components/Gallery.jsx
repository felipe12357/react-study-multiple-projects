import React from 'react'
import { UseFetchReactQueryCustomHook } from '../QueryHoooks/';
import { useAppGlobalContext } from '../GlobalContext';
import  LoadingModal from './LoadingModal';
const Gallery = () => {

  const {currentSearch} = useAppGlobalContext();
  //importante!, al cambiar el valor del current search este lo toma automaticamente por lo tanto
  //no es necesario utilizar useeffect para disparar el cambio
  const {imageList,isLoading} = UseFetchReactQueryCustomHook('images',currentSearch);

  return (
    <>
      {
        (isLoading) ? <LoadingModal />: 
          (imageList.length===0) ? 'Not results Found' :
          <section className="gallery-container">
            {imageList.map(image => <img src={image.urls.raw} alt={image.description} key={image.id} />)}
          </section>
      }
    </>
  )
}

export default Gallery