import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const FooterWrapper = styled.footer`
  ${({ theme }) => css`
    position: fixed;
    bottom: 0;
    background-color: ${theme.colorScheme === 'dark' ? '#BD93F9' : '#33AA95'};
    width: 100%;
    padding: 10px 0;

    @media (min-width: ${theme.breakpoints.md}px) {
      height: 50px;
      padding: 0;
    }
  `}
`;

export const FooterContainer = styled.div`
  ${({ theme }) => css`
    height: 100%;
    max-width: 1100px;
    margin: 0 auto;
    text-align: center;

    @media (min-width: ${theme.breakpoints.md}px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    span {
      font-size: ${theme.fontSizes.xs};
      color: ${theme.colorScheme === 'dark' ? theme.white : theme.colors.dark['9']};

      @media (min-width: ${theme.breakpoints.md}px) {
        font-size: ${theme.fontSizes.md};
      }
    }

    .social-media-wrapper {
      display: flex;
      align-items: center;
      gap: 5px;
      justify-content: center;
    }
  `}
`;
