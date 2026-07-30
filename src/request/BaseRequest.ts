/**
 * Base shape for request objects sent to the Craftgate API. `HttpClient` strips these
 * properties off the body and query string before signing.
 */
type BaseRequest = {
  /** Optional key, sent as the `x-idempotency-key` header so a mutating call can be safely retried. */
  idempotencyKey?: string;
};

export default BaseRequest;
