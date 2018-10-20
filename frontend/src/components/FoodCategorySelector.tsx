import * as React from 'react';
import styled from 'styled-components';
import {foodCategories} from './foodCategories';
import FoodCategoryItem from './FoodCategoryItem';

class FoodCategorySelector extends React.PureComponent<FoodCategorySelectorProps> {

  render() {
    const {type, selected, toggle} = this.props;

    return (
      <CategorySlider className={`categories-slider d-flex btn-group btn-group-toggle`}
                      data-toggle="buttons">
        {foodCategories.map(foodCategory =>
          <FoodCategoryItem key={foodCategory.foodName}
                            foodIcon={foodCategory.foodIcon}
                            foodName={foodCategory.foodName}
                            selected={selected.includes(foodCategory.foodName.toUpperCase())}
                            toggle={toggle}
                            type={type}/>)}
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
  selected: string[];
  toggle: (name: string) => void;
}

export default FoodCategorySelector;
