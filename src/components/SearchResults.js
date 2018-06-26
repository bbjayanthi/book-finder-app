import React, { Component } from 'react'
import CollapsibleRow from './CollapsibleRow'
import DefaultRow from './DefaultRow'
import NewResults from './NewResults'

export default class SearchResults extends Component {
  render() {
    const books = this.props.searchResults.map(function(result, index) {
      const authors = (result.authors ? result.authors.toString() : "")
      const Title = () => {
        return (
          <div>
            <h3 className="title">{result.title}</h3>
            <span className="author">{authors}</span>
          </div>
        )
      }

      return (
        <div key={index}>
          {result.description ? (
            <CollapsibleRow heading={<Title />} description={result.description}/>
          ) : (
            <DefaultRow heading={<Title />}/>
          )
        }
        </div>
      )
    })

    return (
      <div>
        <NewResults fetchResults={this.props.fetchResults} />
        <div>{books}</div>
        <NewResults fetchResults={this.props.fetchResults} />
      </div>
    )
  }
}

