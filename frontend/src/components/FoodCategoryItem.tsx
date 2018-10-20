import * as React from 'react';
import styled from 'styled-components';

class FoodCategoryItem extends React.PureComponent<FoodCategoryItemProps> {

  render() {
    const {foodIcon, foodName, type} = this.props;
    return (
      <label className="btn shadow-none">
        <input type={type} checked autoComplete="off"/>
        <FoodIcon>{foodIcon}</FoodIcon>
        <br/>
        <small>{foodName}</small>
      </label>
    );
  }
}

const FoodIcon = styled.span`
            width: 20vw;
            color: #3B653D;
            text-align: center;
`;

interface FoodCategoryItemProps {
  foodIcon: string;
  foodName: string;
  type: string;
}

export default FoodCategoryItem;
