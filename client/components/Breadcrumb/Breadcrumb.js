import './Breadcrumb.scss';
import { withRouter } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import PropTypes from 'prop-types'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

@connect(
  state => {
    return {
      breadcrumb: state.user.breadcrumb
    }
  }
)
@withRouter
export default class BreadcrumbNavigation extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    breadcrumb: PropTypes.array
  }
  render () {
    console.log(this.props.breadcrumb);
    const getItem = this.props.breadcrumb.map((item, index) => {
      console.log(item);
      if (item.fref) {
        return (<Breadcrumb.Item key={index}><Link to={item.href}>{item.name}</Link></Breadcrumb.Item>);
      } else {
        return (<Breadcrumb.Item key={index}>{item.name}</Breadcrumb.Item>);
      }
    })
    return (<div className="breadcrumb-container">
      <Breadcrumb>
        {getItem}
      </Breadcrumb>
    </div>);
  }
}
