import React, { Component } from 'react'
import googleBooks from 'google-books-search'
import { Layout } from 'antd'
import './App.css'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'

const { Header } = Layout;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      searchResults: [
      ],
      options: {
        offset: 0
      }
    }
  }

  fetchResults = (value) => {
    let offsetValue = this.state.options.offset
    if(value === 1 && offsetValue > 0) {
      offsetValue -= 10
    } else if(value === 2) {
      offsetValue += 10
    }
    const newOptions = {
      offset: offsetValue
    }
    this.setState({options : newOptions})
    this.handleSearch(this.state.searchValue)
  }

  handleSearch = (value) => {
    this.setState({searchValue : value}, function() {
      googleBooks.search(value, this.state.options, (error, results) => {
        if(! error) {
          this.setState({searchResults : results})
        } else {
          console.log(error)
        }
      })
    }) 
  }

  render() {
    return (
      <div className="App">
        <Header className="App-header">
          <h2 className="App-title">GOOGLE BOOK FINDER</h2>
        </Header>
        <div className="search">
          <div>
            <SearchBar handleSearch={this.handleSearch.bind(this)} />
            {this.state.searchResults.length > 0 &&
              <div className="search-results">
                <SearchResults offset={this.state.options.offset} searchResults={this.state.searchResults} fetchResults={this.fetchResults.bind(this)} />
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
