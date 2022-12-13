import { Component } from 'react';
import PropTypes from 'prop-types';
import { Title } from './Section.styled';

export class Section extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element,
  };

  render() {
    const { title, children } = this.props;
    return (
      <section>
        <Title>{title}</Title>
        {children}
      </section>
    );
  }
}
