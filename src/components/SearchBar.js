import React, { Component } from 'react'
import { Input } from 'antd'
const Search = Input.Search

export default class SearchBar extends Component {

  render() {
    return (
        <div className="search-bar">
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          onSearch={value => this.props.handleSearch(value)}
        />
        </div>
    )
  }
}

