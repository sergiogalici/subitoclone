import styled, { css } from 'styled-components'

export type StyledImageProps = {
  borderRadius?: number
}

export const StyledImage = styled.img<StyledImageProps>`
  ${({ borderRadius, theme }) =>
    borderRadius &&
    css`
      border-radius: ${theme.radii[borderRadius]}px;
    `};
  width: 100%;
  height: 100%;
  object-fit: cover;
`
