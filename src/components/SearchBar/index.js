import React, { useState, useEffect, useRef } from 'react';
import { Wrapper, Content } from './SearchBar.styles';
import searchIcon from '../../images/search-icon.svg';

const SearchBar = ({ setSearchTerm }) => {
  const [text, setText] = useState("");
  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchTerm(text);
    }, 500);
    return () => clearTimeout();
  }, [setSearchTerm, text]);

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt='search-icon' />
        <input
            type='text'
            placeholder='Search Movie'
            onChange={e => setText(e.currentTarget.value)}
            value={text}
        />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;