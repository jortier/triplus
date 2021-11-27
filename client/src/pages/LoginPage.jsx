import React from 'react';
import { Container } from '../styles/common/index';
import styled from 'styled-components';
import LoginTemplete from '../components/login/LoginTemplete';

const PageContainer = styled(Container)`
  max-width: ${({ theme }) => theme.size.maxWidth};
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

export default function LoginPage() {
  return (
    <PageContainer>
      <LoginTemplete />
    </PageContainer>
  );
}
