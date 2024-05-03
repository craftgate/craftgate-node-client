import MerchantApiCredential from './dto/MerchantApiCredential';

type CreateMerchantResponse = {
  id: number;
  name: string;
  merchantApiCredentials: MerchantApiCredential[];
};

export default CreateMerchantResponse;
