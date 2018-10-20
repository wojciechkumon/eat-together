import * as React from 'react';
import styled from 'styled-components';
import FoodCategoryItem from "./FoodCategoryItem";

const foodCategories = [
  {foodIcon: '🥟', foodName: 'Duplings'},
  {foodIcon: '🍰', foodName: 'Cake'},
  {foodIcon: '🥩', foodName: 'Steak'},
  {foodIcon: '🍔', foodName: 'Burger'},
  {foodIcon: '🥢', foodName: 'Asian'},
  {foodIcon: '🥗', foodName: 'Vege'},
  {foodIcon: '🥣', foodName: 'Soup'},
  {foodIcon: '🍝', foodName: 'Pasta'},
];

class FoodCategorySelector extends React.PureComponent<FoodCategorySelectorProps> {

  render() {
    const {type} = this.props;

    return (
      <CategorySlider className="categories-slider d-flex btn-group btn-group-toggle"
                      data-toggle="buttons">
        {foodCategories.map(function (foodCategory) {
          return <FoodCategoryItem foodIcon={foodCategory.foodIcon} foodName={foodCategory.foodName} type={type}/>;
        })}
      </CategorySlider>
    )
  }
}

const CategorySlider = styled.div`
            overflow-x: auto;
            overflow-y: hidden;
            overflow-scrolling: touch;
        `;

interface FoodCategorySelectorProps {
  type: string;
}

export default FoodCategorySelector;
