import React from 'react';
import styled from '@emotion/styled';
import {ReactComponent as DurianpayIcon} from '../../images/DurianPay.svg';
import {ReactComponent as DocsIcon} from '../../images/docs.svg';

const Wrapper = styled.div({
  display: 'flex',
  fontSize: 24
});

const StyledDocsIcon = styled(DocsIcon)({
  height: '0.7857142857em',
  marginTop: '0.07142857143em'
});

export default function Logo() {
  return (
    <Wrapper>
      <DurianpayIcon />
      <StyledDocsIcon />
    </Wrapper>
  );
}