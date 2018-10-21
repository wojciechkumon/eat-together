import * as React from 'react';
import {appConfig} from '../config/appConfig';
import {checkStatus, withToken} from '../utils/api';
import {copy} from '../utils/copy';
import FoodCategorySelector from './FoodCategorySelector';
import {intolerancesTypes} from './intolerancesTypes';
import {Meal} from './Event';

class NewEventModal extends React.PureComponent<{}, NewEventModalState> {
  state = {
    page: 1,
    name: 'Jack\'s Brunch',
    description: 'Keep it simple, keep it vege. Just spring rolls and peanut butter cup pie for dessert',
    estimatedPrice: 6.00,
    currency: 'USD',
    maxParticipants: 4,
    cuisines: ['ASIAN', 'VEGE', 'CAKE'],
    dateTime: '2018-10-23T10:00',
    streetWithNumber: 'aleja Niepodległości 213',
    city: 'Warszawa',
    phoneNumber: '790458470',
    zip: '02-086',
    country: 'Polska',
    meals: [{
      name: 'Spring rolls',
      ingredients: 'rice paper,cabbage,onion,carrot,red pepper,soy noodles',
      intolerances: ['LACTO', 'GLUTEN', 'NUTS', 'FISH']
    }, {
      name: 'Peanut butter cup pie',
      ingredients: 'graham crackers,coconut oil,sugar,coconut milk,peanut butter',
      intolerances: ['LACTO', 'FISH']
    }]
  };

  submit = e => {
    e.preventDefault();
    const {name, description, estimatedPrice, currency, maxParticipants, dateTime, streetWithNumber, city, zip, cuisines, phoneNumber, country, meals} = this.state;

    fetch(new Request(withToken(appConfig.api.events), {
      method: 'POST',
      body: JSON.stringify({
        name,
        description,
        estimatedPrice: Math.round(estimatedPrice * 100),
        currency,
        maxParticipants,
        cuisines,
        dateTime,
        streetWithNumber,
        city,
        phoneNumber,
        zip,
        country,
        meals: meals.filter(meal => meal.name)
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }))
      .then(checkStatus)
      .then(response => {
        (window as any).$('#new-event-modal').modal('hide');
      })
      .catch(() => console.error('error'));
  };

  toggleCheckbox = (foodName: string) => {
    const upFoodName = foodName.toUpperCase();
    const cuisines: string[] = this.state.cuisines;
    if (cuisines.includes(upFoodName)) {
      this.setState({cuisines: cuisines.filter(name => name !== upFoodName)})
    } else {
      this.setState({cuisines: cuisines.concat([upFoodName])})
    }
  };

  render() {
    const {page, name, description, estimatedPrice, currency, maxParticipants, dateTime, phoneNumber, streetWithNumber, country, city, zip, cuisines} = this.state;
    const meals: Meal[] = this.state.meals;
    const mealIndex = page - 2;
    if (mealIndex >= 0 && !meals[mealIndex]) {
      meals[mealIndex] = {
        name: '',
        ingredients: '',
        intolerances: []
      };
    }


    return (
      <div id="new-event-modal" className="modal fade" tabIndex={-1} role="dialog">
        <div className="modal-dialog m-0 mw-100" role="document">
          <div className="modal-content">
            <div className="modal-header background-et">
              <h6 className="modal-title text-white">Cook food and make friends!</h6>
              <button type="button" className="close text-white" data-dismiss="modal"
                      aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form onSubmit={this.submit}>
              <div className="modal-body h-100 flex-grow-1">
                {page === 1 &&

                <div id="new-item-modal-form" className="flex-column justify-content-center">

                  <div className="form-group">
                    <label htmlFor="event-name">Event name</label>
                    <input value={name}
                           onChange={e => this.setState({name: e.target.value})}
                           type="text" className="form-control" id="event-name" aria-describedby=""
                           placeholder="eg Sushi Kushi"/>
                    <small>Use creative name to attract guests</small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="event-name">Description</label>
                    <textarea value={description}
                              onChange={e => this.setState({description: e.target.value})}
                              className="form-control" id="event-description" rows={4}
                              aria-describedby=""
                              placeholder="eg Sushi Kushi"/>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-6 form-group">
                      <label htmlFor="event-name">Price</label>
                      <div className="input-group">
                        <input value={estimatedPrice}
                               onChange={e => this.setState({estimatedPrice: parseFloat(e.target.value)})}
                               type="number" className="form-control" step={0.10} min={0}
                               aria-label="money" aria-describedby="basic-addon2"/>
                        <select value={currency}
                                onChange={e => this.setState({currency: e.target.value})}
                                className="form-control p-0">
                          <option>USD</option>
                          <option>EUR</option>
                          <option>PLN</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 form-group">
                      <label htmlFor="numberOfParticipants">How many people?</label>
                      <div className="btn-group btn-group-toggle d-flex justify-content-between"
                           data-toggle="buttons">
                        <input value={maxParticipants}
                               onChange={e => this.setState({maxParticipants: parseInt(e.target.value)})}
                               type="number" className="form-control" name="participants" min="1"
                               max="100" step={1}/>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col form-group">
                      <label htmlFor="date-time-input">When?</label>
                      <input value={dateTime}
                             onChange={e => this.setState({dateTime: e.target.value})}
                             id="date-time-input" className="form-control p-1 mb-3"
                             type="datetime-local"
                             name="date-time"/>
                      <input value={phoneNumber}
                             onChange={e => this.setState({phoneNumber: e.target.value})}
                             className="form-control p-1" type="text"
                             placeholder="Phone"/>
                    </div>
                    <div className="col form-group">
                      <label htmlFor="date-time-input">Where?</label>
                      <input value={streetWithNumber}
                             onChange={e => this.setState({streetWithNumber: e.target.value})}
                             className="form-control p-1" type="text"
                             placeholder="Street and Number"/>
                      <div className="input-group">
                        <input value={zip}
                               onChange={e => this.setState({zip: e.target.value})}
                               className="form-control p-1" type="text" placeholder="00-000"/>
                        <input value={city}
                               onChange={e => this.setState({city: e.target.value})}
                               className="form-control p-1" type="text" placeholder="City"/>
                      </div>
                      <input value={country}
                             onChange={e => this.setState({country: e.target.value})}
                             className="form-control p-1" type="text"
                             placeholder="Country"/>
                    </div>
                  </div>
                  <label htmlFor="event-category">Categories</label>
                  <FoodCategorySelector type="checkbox" selected={cuisines}
                                        toggle={this.toggleCheckbox}/>
                </div>
                }
                {
                  page > 1 &&
                  <div id="new-item-modal-form" className="flex-column justify-content-center">
                    <h4>Meal #{page - 1}</h4>
                    <div className="form-group">
                      <label htmlFor="event-name">Name</label>
                      <input value={meals[mealIndex].name}
                             onChange={e => {
                               const mealsCopy = copy(meals);
                               mealsCopy[mealIndex].name = e.target.value;
                               this.setState({meals: mealsCopy});
                             }}
                             type='text' className='form-control'
                             aria-describedby=''
                             placeholder='eg Sushi'/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="event-name">Ingredients</label>
                      <input value={meals[mealIndex].ingredients}
                             onChange={e => {
                               const mealsCopy = copy(meals);
                               mealsCopy[mealIndex].ingredients = e.target.value;
                               this.setState({meals: mealsCopy});
                             }}
                             type='text' className='form-control'
                             aria-describedby=''
                             placeholder='eg bread, chicken'/>
                    </div>
                    <div className="form-group">
                      {intolerancesTypes.map(intoleranceType =>
                        <div key={intoleranceType.name} className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input"
                                 checked={meals[mealIndex].intolerances.includes(intoleranceType.name.toUpperCase())}
                                 onChange={() => {
                                   const mealsCopy = copy(meals);
                                   if (mealsCopy[mealIndex].intolerances.includes(intoleranceType.name.toUpperCase())) {
                                     mealsCopy[mealIndex].intolerances = mealsCopy[mealIndex].intolerances.filter(x => x !== intoleranceType.name.toUpperCase());
                                   } else {
                                     mealsCopy[mealIndex].intolerances = mealsCopy[mealIndex].intolerances.concat([intoleranceType.name.toUpperCase()]);
                                   }
                                   this.setState({meals: mealsCopy});
                                 }}
                                 id={intoleranceType.name}/>
                          <label className="custom-control-label"
                                 htmlFor={intoleranceType.name}>{intoleranceType.text}</label>
                        </div>
                      )}
                    </div>
                  </div>
                }
                <div className="modal-footer d-flex justify-content-between">
                  {page > 1
                    ?
                    <button type="button"
                            onClick={() => this.setState({page: this.state.page - 1})}
                            className="btn-outline-info btn btn-secondary">Back
                    </button>
                    :
                    <button type="button" className="btn-outline-info btn btn-danger"
                            data-dismiss="modal">Cancel
                    </button>
                  }

                  <button className="btn btn-outline-success" type="button"
                          onClick={() => this.setState({page: this.state.page + 1})}>Next Meal
                  </button>
                  {page > 1 &&
                  <button type="submit" className="btn btn-outline-success">Finish</button>
                  }
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

interface NewEventModalState {
  page: number;
  name: string;
  description: string;
  estimatedPrice: number;
  currency: string;
  maxParticipants: number;
  cuisines: string[];
  dateTime: string;
  streetWithNumber: string;
  city: string;
  phoneNumber: string;
  zip: string;
  country: string;
  meals: Meal[];
}

export default NewEventModal;
