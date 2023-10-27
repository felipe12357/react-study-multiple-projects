
import PropTypes from 'prop-types';
import SingleColor from './SingleColor';

const ColorList = ({colorList}) => {
  return (
    <div className='color-container'>
        { colorList.map( (color,index) => <SingleColor key={index} index={index} hex={color.hex} weight={color.weight}></SingleColor> )}
    </div>
  )
}

ColorList.propTypes = {
    colorList:PropTypes.array
};
export default ColorList