import styled from "styled-components";


export const Container = styled.header`
  margin-bottom: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img{
    width: 8rem;
  }

  > div{
    background: none;
    border: none;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg{
      flex-shrink: 0;
      fill: ${({ theme }) => theme.colors.white};
      width: 2.875rem;
      height: 2.875rem;
    }
  }
`
