import React, { Component } from 'react'

export default class DefaultRow extends Component {

  render() {
    return (

      <div className="ant-collapse ant-collapse-borderless">
        <div className="ant-collapse-item ant-collapse-item-active">
          <div className="ant-collapse-header">
            {this.props.heading}
          </div>
        </div>
      </div>

                
    )
  }
}

