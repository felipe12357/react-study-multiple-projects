
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

const SingleColor = ({hex,weight,key}) => {

    const handleClick=async(color)=>{
        if(navigator.clipboard){
            await navigator.clipboard.writeText(color);
            toast.success('color copied to clipboard')
        }
        else
            toast.error('Clipboard not available')
    }
  return (
    <span  onClick={()=>handleClick(hex)}
                        className={key < 5 ? 'colorElement' : 'colorElement light-text'} 
                        style={{backgroundColor:hex}}>
                        {hex} - {weight}
                </span>
  )
}
SingleColor.propTypes = {
    hex:PropTypes.string,
    weight:PropTypes.string,
    key:PropTypes.number
};
export default SingleColor