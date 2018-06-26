import React, { Component } from 'react'
import { Button, Icon } from 'antd'

export default class NewResults extends Component {
  render() {
    return (
      <div className="pagination">
        <Button.Group>
          <Button disabled={this.props.offset === 0 ? "true" : ""} onClick={() => this.props.fetchResults(1)} type="primary">
            <Icon type="left" />
          </Button>
          <span className="pagination-label">Showing {this.props.offset} to {this.props.offset + 10}</span>
          <Button onClick={() => this.props.fetchResults(2)} type="primary">
            <Icon type="right" />
          </Button>
        </Button.Group>
      </div>
    )
  }
}