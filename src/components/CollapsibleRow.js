import React, { Component } from 'react'
import { Collapse } from 'antd';
const Panel = Collapse.Panel;


export default class CollapsibleRows extends Component {

  render() {
    return (
      <Collapse bordered={false}>
      <Panel header={this.props.heading}>
        <p style={{ paddingLeft: 24 }}>{this.props.description}</p>
      </Panel>
    </Collapse>
    )
  }
}

