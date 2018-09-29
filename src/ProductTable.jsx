import React, {Component} from 'react';
import {css} from 'emotion';

export class ProductTable extends Component {

  render() {

    let color = "green";
    const green = css`
      border: 1px solid ${color};
      padding: 10px;
      margin-top: 10px
    `

    return (
      <div className={green}>
        Name
        Price
        <ul>
          {data.map( (e,i) => <li key={i}>{e.name} {e.price}</li> )}
        </ul>
      </div>
    )
    
  }

}

