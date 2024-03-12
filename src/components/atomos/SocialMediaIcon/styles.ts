import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const SocialMediaWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colorScheme === 'dark'
      ? theme.colors.violet['5']
      : theme.colors.green['9']};
    padding: 10px;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
      opacity: 0.5;
    }

    button {
      width: 20px;
      height: 20px;
    }
  `}
`;
