import React, { Component } from 'react'
import CollapsibleRow from './CollapsibleRow'
import DefaultRow from './DefaultRow'

export default class SearchResults extends Component {
  render() {
    const books = this.props.searchResults.map(function(result, index) {
      let heading = `${result.authors.toString()} - ${result.title}`;
      return (
        <div key={index}>
          {result.description ? (
            <CollapsibleRow heading={heading} description={result.description}/>
          ) : (
            <DefaultRow heading={heading}/>
          )
        }
        </div>
      )
    })

    return (
      <div>{books}</div>
    )
  }
}

