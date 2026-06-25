export enum OrderingRule {
  ON_US = 'ON_US',
  LOW_COMMISSION_RATE = 'LOW_COMMISSION_RATE',
  IN_ORDER = 'IN_ORDER'
}

type RoutingOptions = {
  orderingRule?: OrderingRule;
  posAliases?: string[];
  ignoreAdvancedPosRoutingRules?: boolean;
};

export default RoutingOptions;
