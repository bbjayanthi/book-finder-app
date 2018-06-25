import React, { Component } from 'react'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'

export default class SearchComponent extends Component {
  render() {
    return (
      <div>
        <SearchBar handleSearch={this.props.handleSearch} />

        <div className="search-results">
          <SearchResults searchResults={this.props.searchResults} />
        </div>
      </div>
    )
  }
}

