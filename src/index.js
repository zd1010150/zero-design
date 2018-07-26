import React, { Component } from 'react'
import PropTypes from 'prop-types'
import antd from 'antd';
const Row = antd.Row;
const Col = antd.Col;
import styles from './styles.css'

export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      text
    } = this.props

    return (
      <div className={styles.test}>
        <Row>
          <Col span={18} push={6}>col-18 col-push-6</Col>
          <Col span={6} pull={18}>col-6 col-pull-18</Col>
        </Row>
      </div>
    )
  }
}
