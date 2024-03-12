import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const HeaderWrapper = styled.header`
  ${({ theme }) => css`
    padding: 20px;
    height: 50px;
    width: 100%;
    background-color: ${theme.colorScheme === 'dark' ? '#BD93F9' : '#33AA95'};
    position: fixed;
    top: 0;
  `}
`;

export const ContainerHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    height: 100%;
    margin: 0 auto;

    button {
    }

    h1 {
      color: ${theme.colorScheme === 'dark' ? theme.colors.gray['2'] : theme.colors.dark['9']};
      font-size: ${theme.fontSizes.lg};
    }
  `}
`;
