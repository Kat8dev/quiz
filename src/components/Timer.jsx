import { useEffect } from 'react';
import styled from 'styled-components';

const TimerStyled = styled.div`
  box-shadow: 0px 3px 5px -3px rgba(0, 0, 0, 0.75);
  width: 70px;
  height: 70px;
  background: inherit;
  border: 4px solid #006d77;;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 22px;
  font-weight: bold;
  color: #006d77;
`

export default function Timer({second, setSecond, setGameOver, ...rest}) {

  useEffect(() => {
    if (second >= 0) {
      const interval = setInterval(() => setSecond(second - 1), 1000);
      return () => clearInterval(interval);
    } else {
      setGameOver(prev => !prev)
    }
  }, [second, setSecond, setGameOver]);

  return <TimerStyled {...rest}>{second}</TimerStyled>;
}
