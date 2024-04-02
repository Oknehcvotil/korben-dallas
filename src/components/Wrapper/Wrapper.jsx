import React from 'react';
import { Container } from './Wrapper.styled';
import PropTypes from 'prop-types';

const Wrapper = ({ children, style = {} }) => {
  return <Container style={style}>{children}</Container>;
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

export default Wrapper;
