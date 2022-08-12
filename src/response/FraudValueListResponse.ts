import FraudValue from './dto/FraudValue';

type FraudValueListResponse = {
  name: string;
  values: FraudValue[];
};

export default FraudValueListResponse;
