
import { useState } from 'react'

const UseCustomHookToogle = (defaultValue) => {

  const [show,setShow]=useState(defaultValue);
  const toggle = () =>setShow(!show);

  return {show,toggle}
}

export default UseCustomHookToogle