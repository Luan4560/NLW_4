import styled from 'styled-components';
import {colors} from '../../styles/colors'

export const Container = styled.header`
  display: flex;
  align-items: center;
  
  span {
    font-size: 1rem;
  }

  > div {
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background-color: ${colors.gray_line};
    margin: 0 1.5rem;
    position: relative;

    > div {
      height: 4px;
      border-radius: 4px;
      background-color: ${colors.green};
    }

    .current-experience {
      position: absolute;
      top: 12px;
      transform: translateX(-50%)
    }
  }
`