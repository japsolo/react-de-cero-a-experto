import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const container = document.getElementById('root');

const list = <ul>
  <li>Item 01</li>
  <li>Item 02</li>
  <li>Item 03</li>
  <li>Item 04</li>
</ul>;

let visitor = {
  name: 'Jane Doe', 
  age: 15,
};

let pStyles = {
  fontSize: '16px',
  textAlign: 'center',
  color: 'olive'
}

ReactDOM.render(
  <StrictMode>
    <h2 className="main-title"> 
      Hello { visitor.name }   
      { visitor.age > 18 ? '. Welcome!' : '. Sorry, You cant get in' }
    </h2>
    <br />
    <p style={ pStyles }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nemo vel quidem et, aliquid iure dolore similique soluta dignissimos illum quod laborum quis, error magnam fugit repellendus ratione eligendi dolorum.</p>
    { list }
  </StrictMode>, 
  container
);
