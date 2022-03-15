import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
import {HEADER_HEIGHT} from '../utils';
import {breakpoints} from 'gatsby-theme-apollo-core';

const Wrapper = styled.header({
  position: 'sticky',
  top: 0,
  left: 0,
  zIndex: 1
});

const InnerWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  height: HEADER_HEIGHT,
  className: "innerWrapper",
  padding: '0 40px',
  backgroundColor: 'white',
  borderBottom: '1px solid #eee',
  zIndex: 10,
  [breakpoints.md]: {
    padding: '0 24px'
  }
});

export default function Header(props) {
  return (
    <Wrapper>
      {props.beforeContent}
      <InnerWrapper>
        <div className="header-elements">
            <a href="https://durianpay.id/docs/api">API Reference</a>
            <a href="https://durianpay.id/">Products</a>
            <a href="https://dashboard.durianpay.id/#/login">Login</a>
            <a className="button" href="https://dashboard.durianpay.id/#/signup">Signup</a>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
}

Header.propTypes = {
  beforeContent: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired
};