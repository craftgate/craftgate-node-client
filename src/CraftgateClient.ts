import BankAccountTrackingAdapter from './adapter/BankAccountTrackingAdapter';
import BaseAdapter from './adapter/BaseAdapter';
import BkmExpressPaymentAdapter from './adapter/BkmExpressPaymentAdapter';
import FileReportingAdapter from './adapter/FileReportingAdapter';
import FraudAdapter from './adapter/FraudAdapter';
import HookAdapter from './adapter/HookAdapter';
import InstallmentAdapter from './adapter/InstallmentAdapter';
import JuzdanPaymentAdapter from './adapter/JuzdanPaymentAdapter';
import MasterpassPaymentAdapter from './adapter/MasterpassPaymentAdapter';
import MerchantAdapter from './adapter/MerchantAdapter';
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
  private _fraudAdapter: FraudAdapter;
  private _hookAdapter: HookAdapter;
  private _masterpassPaymentAdapter: MasterpassPaymentAdapter;
  private _bankAccountTrackingAdapter: BankAccountTrackingAdapter;
  private _merchantAdapter: MerchantAdapter;
  private _juzdanPaymentAdapter: JuzdanPaymentAdapter;
  private _bkmExpressPaymentAdapter: BkmExpressPaymentAdapter;

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
    this._fraudAdapter = new FraudAdapter(options);
    this._hookAdapter = new HookAdapter(options);
    this._masterpassPaymentAdapter = new MasterpassPaymentAdapter(options);
    this._bankAccountTrackingAdapter = new BankAccountTrackingAdapter(options);
    this._merchantAdapter = new MerchantAdapter(options);
    this._juzdanPaymentAdapter = new JuzdanPaymentAdapter(options);
    this._bkmExpressPaymentAdapter = new BkmExpressPaymentAdapter(options);
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

  fraud(): FraudAdapter {
    return this._fraudAdapter;
  }

  hook(): HookAdapter {
    return this._hookAdapter;
  }

  masterpass(): MasterpassPaymentAdapter {
    return this._masterpassPaymentAdapter;
  }

  bankAccountTracking(): BankAccountTrackingAdapter {
    return this._bankAccountTrackingAdapter;
  }

  merchant(): MerchantAdapter {
    return this._merchantAdapter;
  }

  juzdan(): JuzdanPaymentAdapter {
    return this._juzdanPaymentAdapter;
  }

  bkmExpress(): BkmExpressPaymentAdapter {
    return this._bkmExpressPaymentAdapter;
  }
}
