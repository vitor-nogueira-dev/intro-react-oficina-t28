import React, { Component } from "react";
import propTypes from 'prop-types';

class Title extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className="h-content-title">
        <h1>{title}</h1>
      </div>
    )
  }
};

Title.propTypes = {
  title: propTypes.string,
}.isRequired;


export default Title;