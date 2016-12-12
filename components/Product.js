import React from 'react';
import ReactDOM from 'react-dom';
 
class Product extends React.Component {
  render() {
    return (
      <ul>
        <li>{this.props.name}</li>
        <li>{this.props.producer}</li>
        <li>{this.props.hasWatermark}</li>
        <li>{this.props.color}</li>
        <li>{this.props.weight}</li>
      </ul>
    );
  }
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf([
    'white', 'egg-shell-white', 'salmon'
  ]).isRequired,
  weight: (props, propName) => {
    const weight = props[propName];

    if(!weight){
      return "weight is required"
    }

    const okayWeight = weight > 80 && weight < 300;

    if(!okayWeight){
      return "weight must be between 80 and 300"
    }
  }
};

Product.defaultProps = {
  hasWatermark: false
}

module.exports = Product;