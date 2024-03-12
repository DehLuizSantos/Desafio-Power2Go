import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ContriesCardWrapper = styled.div`
  ${({ theme }) => css`
    width: 320px;
    height: 150px;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 20px;
    border-radius: 5px;
    background-color: ${theme.colorScheme === 'dark' ? theme.white : theme.colors.dark['9']};
    margin: 0 auto;
    box-shadow: ${theme.colorScheme === 'dark'
      ? 'rgba(250,250,250,0.25) 0px 0px 2px 2px'
      : 'rgba(50, 50, 105, 0.25) 0px 0px 2px 2px'};
    @media (min-width: ${theme.breakpoints.md}px) {
      margin: 0;
    }

    img {
      height: 58px;
      width: 110px;
      object-fit: fill;
    }
  `}
`;

export const CardText = styled.div`
  ${({ theme }) => css`
    h3 {
      color: ${theme.colorScheme === 'dark' ? theme.colors.dark['9'] : theme.white};
      font-size: ${theme.fontSizes.md};
    }

    p {
      color: ${theme.colorScheme === 'dark' ? theme.colors.dark['9'] : theme.colors.gray['1']};
      font-size: ${theme.fontSizes.sm};
    }
  `}
`;
