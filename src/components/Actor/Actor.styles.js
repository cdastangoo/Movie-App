import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
  padding: 5px;
  background: var(--darkGray);
  color: var(--white);
  border-radius: 20px;
  h3 {
    margin: 10px 0 0 0;
  }
  p {
    margin: 5px 0;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 15px;
  transition: all 0.3s;
  animation: fadeIn 0.5s;
  
  :hover {
    opacity: 0.8;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;