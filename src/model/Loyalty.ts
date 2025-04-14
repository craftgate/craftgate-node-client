import LoyaltyType from './LoyaltyType';

export type Loyalty = {
  type: LoyaltyType;
  reward?: {
    cardRewardMoney?: number;
    firmRewardMoney?: number;
    milRewardMoney?: number;
    totalRewardMoney?: number;
  };
  message?: string;
};
