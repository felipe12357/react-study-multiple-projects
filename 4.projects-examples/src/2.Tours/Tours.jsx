import './tours.css';
import { useState, useEffect, Fragment } from 'react';
import Loading from './Loading';
import TourCard from './TourCard';


const Tours = () => {
    let [tourList,setTours] = useState([]);
    const [isLoading,setIsLoading] = useState(false)
    const url = 'https://course-api.com/react-tours-project';

    const deleteTourFunction = (id)=> {
        setTours(tourList.filter((tour)=> tour.id !== id));
    } 

    const loadTourList = async()=>{
        setIsLoading(true);
        const response = await fetch(url);
        const tourListResponse = await response.json();
        setTours(tourListResponse);
        setIsLoading(false);
    }

    useEffect(()=>{
        loadTourList();
    },[])

  return (
    <Fragment>
        { tourList.length === 0 ? 
            <Fragment><h2>No Tours Left</h2> <button className='btn-green' onClick={loadTourList}>Refresh</button></Fragment> :
            <Fragment>
                <h2> Our Tours</h2>
                <div className='title-underline'></div>
            </Fragment>
        }
        {isLoading ? <Loading/> : (
            <div className='tour-list-content'>
                {tourList.map(tour => <TourCard key={tour.id} {...tour} deleteTourFunction={deleteTourFunction}/>)}
            </div>
        )}
    </Fragment>
  )
}

export default Tours