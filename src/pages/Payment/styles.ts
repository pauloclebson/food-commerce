import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 58.75rem;
  padding: 2rem;
  margin: 0 auto;
`

export const Inner = styled.main`
  background: ${({ theme }) => theme.colors.black};
  padding: 2rem;
  border-radius: 8px;
`
