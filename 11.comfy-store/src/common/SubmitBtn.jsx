import React from 'react'
import {useNavigation} from 'react-router-dom';
const SubmitBtn = ({label}) => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';
  return (
    <button type="submit" className='btn btn-primary btn-block'>
       { 
            (isSubmitting) ? (
                <> <span className="loading loading-spinner loading-md"></span> <span>Loading</span> </>  )
            :label
        }
    </button>
  )
}

export default SubmitBtn