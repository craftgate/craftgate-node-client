type ProviderError = {
  errorCode?: string;
  errorMessage?: string;
};

type ErrorResponse = {
  errorCode: string;
  errorDescription: string;
  providerError?: ProviderError;
};

export default class CraftgateError extends Error {
  private _errorCode: string;
  private _errorDescription: string;
  private _providerError?: ProviderError;
  private _errorData: any;

  constructor({ errorCode, errorDescription, providerError, ...rest }: ErrorResponse) {
    super(errorDescription);

    this._errorCode = errorCode;
    this._errorDescription = errorDescription;
    this._providerError = providerError;
    this._errorData = rest;

    Object.setPrototypeOf(this, CraftgateError.prototype);
  }

  getErrorCode(): string {
    return this._errorCode;
  }

  getErrorDescription(): string {
    return this._errorDescription;
  }

  getProviderError(): ProviderError | undefined {
    return this._providerError;
  }

  getErrorData(): any {
    return this._errorData;
  }

  toString(): string {
    let message = `CraftgateError: ${this._errorCode} - ${this._errorDescription}`;
    if (this._providerError) {
      message += ` (Provider: ${this._providerError.errorCode} - ${this._providerError.errorMessage})`;
    }
    return message;
  }
}

