import {User} from "./User";

export interface EventToCreate {
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
  meals: Meal[]
}

export interface MyEvent {
  organizer: User;
  event: Event;
}

export interface Event {
  id: number;
  name: string;
  description: string;
  estimatedPrice: number;
  currency: string;
  maxParticipants: number;
  cuisines: Cuisine[];
  dateTime: string;
  address: {
    streetWithNumber: string;
    city: string;
    phoneNumber: string;
    zip: string;
    country: string;
  }
  latitude: number;
  longitude: number;
  meals: FullMeal[];
  participants: User[];
}

export interface Meal {
  name: string;
  ingredients: string;
  intolerances: string[];
}

export interface FullMeal {
  name: string;
  ingredients: string;
  intolerances: Intolerance[];
}

interface Cuisine {
  id: number;
  cuisineType: string;
}

interface Intolerance {
  id: number;
  intoleranceType: string;
}
