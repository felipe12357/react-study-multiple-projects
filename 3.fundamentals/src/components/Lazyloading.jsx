import React, { Suspense, lazy, useState } from 'react'
const LazyloadingDependContent = lazy(()=>import('./LazyloadingDependContent'));

const Lazyloading = () => {
    const [show,setShow] = useState(false);
  return (
    <div style={{textAlign:'justify'}}><h2>Lazyloading</h2>
            <p>Aca tenemos 2 funciones  q trabajan en conjunto para utlizar lazy loading</p>
            <p>lazy se utiliza al importar el componente, notese en el network que lazyLoading no se carga al inicio en el tab de network</p>
            <p>suspense q envuelve al componente q se va a cargar y  tiene como parametro fallback que indica q mostrar mientras el contenido carga</p>

            <button className='button-small' onClick={()=>setShow(!show)}>
                {(show) ? 'Ocultar' : 'Mostrar'}
            </button>

       { (show) && <Suspense fallback={<div>loading content...</div>}>
             <LazyloadingDependContent></LazyloadingDependContent>
        </Suspense> }
    </div>
  )
}

export default Lazyloading