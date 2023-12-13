
import {Grocery} from './Grocery';
import LoadingModal from './LoadingModal';
import {UseFetchReactQueryCustomHook} from './ReactQueryCustomHooks';

const GroceriesList = () => {

  const {taskList,isLoading} = UseFetchReactQueryCustomHook('tasks')

  return (
      (isLoading) ? <LoadingModal />:
      <div className='grocery'> 
        { taskList.map(grocery =><Grocery key={grocery.id} {...grocery} ></Grocery>) } 
      </div>
  )
}

export default GroceriesList

