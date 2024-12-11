import PropTypes from 'prop-types';
const Product = (props) => {
  return (
    <div>
      <p>{props.title}</p>
    <p>{props.price}</p>
    </div>
  );
}

Product.propTypes = {
    title: PropTypes.string.isRequired,  // Define title prop validation
    price: PropTypes.number.isRequired,  // Define title prop validation
  };

export default Product;
