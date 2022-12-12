import { Component } from 'react';
import PropTypes from 'prop-types';
import { Message } from './Notification.styled';

export class Notification extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
  };

  render() {
    return <Message>{this.props.message}</Message>;
  }
}
