import { useMemo } from 'react';
import styled from 'styled-components';

const PriceListStyled = styled.div`
  flex: 2;
  width: 300px;
  background-color: #0047ab;
  padding: 2rem;
`;

const PriceBox = styled.div`
  div {
    &.active {
      background-color: red;
    }
    display: flex;
    gap: 2rem;
    .level {
      width: 30px;
      display: flex;
      justify-content: flex-end;
    }
    .whiteFont {
      color: white;
    }
    .goldenFont {
      color: #e18c1d;
    }
  }
`;

const asignStyle = (level) => {
  if (level.toString() === '5') {
    return 'whiteFont';
  } else if (level.toString() === '10') {
    return 'whiteFont';
  } else if (level.toString() === '15') {
    return 'whiteFont';
  } else {
    return 'goldenFont';
  }
};

export default function PriceList({ questionNumber }) {
  const prices = useMemo(
    () =>
      [
        { id: '15', level: '1', price: '$100' },
        { id: '14', level: '2', price: '$200' },
        { id: '13', level: '3', price: '$300' },
        { id: '12', level: '4', price: '$500' },
        { id: '11', level: '5', price: '$1,000' },
        { id: '10', level: '6', price: '$2,000' },
        { id: '9', level: '7', price: '$5,000' },
        { id: '8', level: '8', price: '$12,000' },
        { id: '7', level: '9', price: '$25,000' },
        { id: '6', level: '10', price: '$50,000' },
        { id: '5', level: '11', price: '$75,000' },
        { id: '4', level: '12', price: '$150,000' },
        { id: '3', level: '13', price: '$325,000' },
        { id: '2', level: '14', price: '$500,000' },
        { id: '1', level: '15', price: '$1 MILLION' },
      ].reverse(),
    []
  );
  return (
    <PriceListStyled>
      <PriceBox>
        {prices.reverse().map((p) => {
          const style = asignStyle(p.level);
          return (
            <div key={p.id} className={questionNumber === p.id ? 'active' : ''}>
              <div className="level">
                <h4 className={style}>{p.level}</h4>
              </div>
              <div>
                <h4 className={style}>{p.price}</h4>
              </div>
            </div>
          );
        })}
      </PriceBox>
    </PriceListStyled>
  );
}
