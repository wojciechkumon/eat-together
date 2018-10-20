import {Meal} from "./Meal";

export interface Event {
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

