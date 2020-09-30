import React from 'react';
export default class AwButton extends React.Component {
    // Cette syntaxe nous assure que `this` est bien lié dans la méthode handleClick.  // Attention : cette syntaxe est encore *expérimentale*.  handleClick = () => {    console.log('this vaut :', this);  }
    render() {
      return (
        <button onClick={this.handleClick}>
          Clique ici
        </button>
      );
    }
  }