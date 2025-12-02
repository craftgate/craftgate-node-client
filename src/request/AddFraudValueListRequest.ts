import FraudOperation from '../model/FraudOperation';

type AddCardFingerprintFraudValueListRequest = {
  label?: string;
  durationInSeconds?: number;
  operationId?: string;
  operation?: FraudOperation;
};

export default AddCardFingerprintFraudValueListRequest;
