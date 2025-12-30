import {LoyaltyData} from './LoyaltyData';
import {LoyaltyParams} from './LoyaltyParams';
import LoyaltyType from './LoyaltyType';

export type Loyalty = {
  type: LoyaltyType;
  reward?: {
    cardRewardMoney?: number;
    firmRewardMoney?: number;
    mileRewardMoney?: number;
    totalRewardMoney?: number;
  };
  message?: string;
  loyaltyParams?: LoyaltyParams;
  loyaltyData?: LoyaltyData;
};
