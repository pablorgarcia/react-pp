import React, {Component} from 'react';
import {css} from 'emotion';

export class SearchBar extends Component {

  render() {

    let color = "blue";
    const blue = css`
      border: 1px solid ${color};
      padding: 10px
    `

    return (
      <div className={blue}>
        <input type="search" /* onChange={} */ />
        <input type="checkbox"/>
        <label>Only show product in stock</label>
      </div>
    )
    
  }

}

