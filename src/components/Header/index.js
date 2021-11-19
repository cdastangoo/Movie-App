import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Content, Text, LogoImg } from './Header.styles';
import Logo from '../../images/tmdb_logo.svg';

const Header = () => (
  <Wrapper>
    <Content>
      <Link to='/' className="text-link">
        <Text>
          <h1>React Movie DB</h1>
        </Text>
      </Link>
      <LogoImg src={Logo} alt='tmdb-logo' />
    </Content>
  </Wrapper>
);

export default Header;