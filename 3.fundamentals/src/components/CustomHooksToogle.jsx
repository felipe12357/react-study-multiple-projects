import { Fragment } from "react"
import UseCustomHookToogle from "./UseCustomHookToogle"


const CustomHooksToogle = () => {
    const {show,toggle} =UseCustomHookToogle(false)
  return (
    <Fragment>
        <div>CustomHooks Example</div>
        <div>
            {(show)? 'Enabled' : 'Disabled'}
            <button onClick={()=>toggle(!show)}>change</button>
        </div>
    </Fragment>
  )
}

export default CustomHooksToogle