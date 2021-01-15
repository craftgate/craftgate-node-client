import BaseAdapter from './adapter/BaseAdapter';
import InstallmentAdapter from './adapter/InstallmentAdapter';
import OnboardingAdapter from './adapter/OnboardingAdapter';
import PaymentAdapter from './adapter/PaymentAdapter';
import WalletAdapter from "./adapter/WalletAdapter";

import {ClientCreationOptions} from './lib/HttpClient';

export default class CraftgateAdapter extends BaseAdapter {
  private _installmentAdapter: InstallmentAdapter;
  private _onboardingAdapter: OnboardingAdapter;
  private _paymentAdapter: PaymentAdapter;
  private _walletAdapter: WalletAdapter;

  constructor(options: ClientCreationOptions) {
    super(options);
    this._installmentAdapter = new InstallmentAdapter(options);
    this._onboardingAdapter = new OnboardingAdapter(options);
    this._paymentAdapter = new PaymentAdapter(options);
    this._walletAdapter = new WalletAdapter(options);
  }

  installment(): InstallmentAdapter {
    return this._installmentAdapter;
  }

  onboarding(): OnboardingAdapter {
    return this._onboardingAdapter;
  }

  payment(): PaymentAdapter {
    return this._paymentAdapter;
  }

  wallet(): WalletAdapter {
    return this._walletAdapter;
  }
}
