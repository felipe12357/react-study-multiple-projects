
import { Fragment } from 'react';
import PropTypes from 'prop-types';
import avatar from '../assets/default-avatar.svg';
const VanillaIncompleteApiResponseChild = ({ name,nickName ="dafault value",images}) => {

    //other option:
   // const img = images && images[0] && images[0].small && images[0].small.url;
   const img = images?.[0]?.small?.url || avatar;
  return (
    <Fragment>
        <div>VanillaIncompleteApiResponseChild</div>
        {name} - {nickName} - <img src={img} style={{width:'50px'}}></img>
    </Fragment>
  )
}

VanillaIncompleteApiResponseChild.propTypes = {
    name: PropTypes.string,
    nickName: PropTypes.string,
    images: PropTypes.array,
};
export default VanillaIncompleteApiResponseChild