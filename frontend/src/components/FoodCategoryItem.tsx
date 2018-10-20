import * as React from 'react';
import styled from 'styled-components';

class FoodCategoryItem extends React.PureComponent<{}, FoodCategoryItemState> {
  state = {
    foodIcon: '',
    foodName: ''
  };

  render() {
    return (
      <label className="btn shadow-none active">
        <input type="checkbox" checked autoComplete="off"/>
        <FoodIcon>{this.state.foodIcon}</FoodIcon>
        <br/>
        <small>{this.state.foodName}</small>
      </label>
    );
  }
}

const FoodIcon = styled.span`
            width: 20vw;
            color: #3B653D;
            text-align: center;
`;

interface FoodCategoryItemState {
  foodIcon: string;
  foodName: string;
}

export default FoodCategoryItem;
