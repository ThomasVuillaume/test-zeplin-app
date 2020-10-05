import React from 'react';
import PropTypes from 'prop-types';

/**
 * An awesome button, that can rotate. Because it's cool.
 */
export default class AwButton extends React.Component {
    // Cette syntaxe nous assure que `this` est bien lié dans la méthode handleClick.  // Attention : cette syntaxe est encore *expérimentale*.  handleClick = () => {    console.log('this vaut :', this);  }
    render() {
      return (
        <button
          className={this.props.stylish}
          disabled={this.props.disabled}
          onClick={this.handleClick}>
          {this.props.label}
        </button>
      );
    }
  }

  AwButton.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
  };