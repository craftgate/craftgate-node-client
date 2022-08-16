import BaseAdapter from './adapter/BaseAdapter';
import FileReportingAdapter from './adapter/FileReportingAdapter';
import InstallmentAdapter from './adapter/InstallmentAdapter';
import OnboardingAdapter from './adapter/OnboardingAdapter';
import PayByLinkApiAdapter from './adapter/PayByLinkApiAdapter';
import PaymentAdapter from './adapter/PaymentAdapter';
import PaymentReportingAdapter from './adapter/PaymentReportingAdapter';
import SettlementAdapter from './adapter/SettlementAdapter';
import SettlementReportingAdapter from './adapter/SettlementReportingAdapter';
import WalletAdapter from './adapter/WalletAdapter';
import {ClientCreationOptions} from './lib/HttpClient';

export default class CraftgateAdapter extends BaseAdapter {
  private _installmentAdapter: InstallmentAdapter;
  private _onboardingAdapter: OnboardingAdapter;
  private _paymentAdapter: PaymentAdapter;
  private _walletAdapter: WalletAdapter;
  private _settlement: SettlementAdapter;
  private _settlementReporting: SettlementReportingAdapter;
  private _paymentReporting: PaymentReportingAdapter;
  private _payByLink: PayByLinkApiAdapter;
  private _fileReporting: FileReportingAdapter;

  constructor(options: ClientCreationOptions) {
    super(options);
    this._installmentAdapter = new InstallmentAdapter(options);
    this._onboardingAdapter = new OnboardingAdapter(options);
    this._paymentAdapter = new PaymentAdapter(options);
    this._walletAdapter = new WalletAdapter(options);
    this._settlement = new SettlementAdapter(options);
    this._settlementReporting = new SettlementReportingAdapter(options);
    this._paymentReporting = new PaymentReportingAdapter(options);
    this._payByLink = new PayByLinkApiAdapter(options);
    this._fileReporting = new FileReportingAdapter(options);
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

  settlement(): SettlementAdapter {
    return this._settlement;
  }

  settlementReporting(): SettlementReportingAdapter {
    return this._settlementReporting;
  }

  paymentReporting(): PaymentReportingAdapter {
    return this._paymentReporting;
  }

  payByLink(): PayByLinkApiAdapter {
    return this._payByLink;
  }

  fileReporting(): FileReportingAdapter {
    return this._fileReporting;
  }
}
