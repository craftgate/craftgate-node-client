export type Reward = {
  type: 'REWARD_MONEY';
  reward: {
    cardRewardMoney?: number;
    firmRewardMoney?: number;
  };
};

export type Loyalty = Reward;
