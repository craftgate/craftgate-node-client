import LoyaltyType from './LoyaltyType';

export type Loyalty = {
  type: LoyaltyType;
  reward?: {
    cardRewardMoney?: number;
    firmRewardMoney?: number;
    totalRewardMoney?: number;
  };
  message?: string;
};
