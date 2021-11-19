import React from 'react';
import { calcTime, convertCurrency } from '../../helpers';
import { Wrapper, Content } from './MovieInfoBar.styles';

const MovieInfoBar = ({ time, budget, revenue}) => (
  <Wrapper>
    <Content>
      <div className="col">
        <p>Running time: {calcTime(time)}</p>
      </div>
      <div className="col">
        <p>Budget: {convertCurrency(budget)}</p>
      </div>
      <div className="col">
        <p>Revenue: {convertCurrency(revenue)}</p>
      </div>
    </Content>
  </Wrapper>
);

export default MovieInfoBar;