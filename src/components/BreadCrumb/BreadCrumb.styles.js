import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70px;
  background: var(--medGray);
  color: var(--white);
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: var(--maxWidth);
  padding: 0 20px;
  .text-link {
    text-decoration: inherit;
  }
  
  span {
    padding-right: 10px;
    font-size: var(--fontMed);
    color: var(--white);
    text-decoration: none !important;
    
    @media (max-width: 768px) {
      font-size: var(--fontSmall);
    }
  }
`;