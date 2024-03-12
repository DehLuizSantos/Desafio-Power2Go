import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ContriesByRegionWrapper = styled.div`
  ${() => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
  `}
`;
