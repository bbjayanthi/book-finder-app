import React, { Component } from 'react'
import googleBooks from 'google-books-search'
import { Layout } from 'antd'
import './App.css'
import SearchComponent from './components/SearchComponent'

const { Header } = Layout;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
      ]
    }
  }

  handleSearch = (value) => {
    googleBooks.search(value, (error, results) => {
      if(! error) {
        this.setState({searchResults : results})
      } else {
        console.log(error)
      }
    }) 
  }

  render() {
    return (
      <div className="App">
        <Header className="App-header">
          <h1 className="App-title">GOOGLE BOOK FINDER</h1>
        </Header>
        <div className="search">
          <SearchComponent searchResults={this.state.searchResults} handleSearch={this.handleSearch} />
        </div>
      </div>
    );
  }
}

export default App;
