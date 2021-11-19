import styled from 'styled-components';

export const Wrapper = styled.div`
  background: var(--darkGray);
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  margin: 0 auto;
  .text-link {
    text-decoration: inherit;
  }
`;

export const Text = styled.div`
  h1 {
    font-size: var(--fontXL);
    @media (max-width: 768px) {
      font-size: var(--fontLarge);
    }
  }
`;

export const LogoImg = styled.img`
  width: 120px;
  @media (max-width: 500px) {
    width: 80px;
  }
`;