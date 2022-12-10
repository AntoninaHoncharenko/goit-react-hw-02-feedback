import { Component } from 'react';
import PropTypes from 'prop-types';
import { SectionWrap, Title } from './Section.styled';

export class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <SectionWrap>
        <Title>{title}</Title>
        {children}
      </SectionWrap>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};
