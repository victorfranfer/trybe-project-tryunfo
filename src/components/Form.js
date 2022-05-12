import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <section>
        <input type='text' data-testid="name-input"></input>
        <input type='textarea' data-testid="description-input"></input>
      </section>
    )
  }
}