import React, { Component } from "react";
import propTypes from 'prop-types';

class SubTitle extends Component {
  render() {
    const { subTitle } = this.props;
    return (
      <div className="h-content-subtitle">
        <h4><em>{subTitle}</em></h4>
      </div>
    )
  }
};

SubTitle.propTypes = {
  subTitle: propTypes.string,
}.isRequired;

export default SubTitle;