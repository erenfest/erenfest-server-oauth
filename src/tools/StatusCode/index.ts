import { STATUS_CODE_ENUM } from '../../constants'

const STATUS_CODE = Symbol('statusCode')

export class StatusCode {
  /**
   * 100 Continue
   * [[RFC7231, Section 6.2.1](https://tools.ietf.org/html/rfc7231#section-6.2.1)]
   */
  static get Continue() {
    return new StatusCode(STATUS_CODE_ENUM.CONTINUE)
  }

  /**
   * 101 Switching Protocols
   * [[RFC7231, Section 6.2.2](https://tools.ietf.org/html/rfc7231#section-6.2.2)]
   */
  static get SwitchingProtocol() {
    return new StatusCode(STATUS_CODE_ENUM.SWITCHING_PROTOCOL)
  }

  /**
   * 102 Processing
   * [[RFC2518](https://tools.ietf.org/html/rfc2518)]
   */
  static get Processing() {
    return new StatusCode(STATUS_CODE_ENUM.PROCESSING)
  }

  /**
   * 200 OK
   * [[RFC7231, Section 6.3.1](https://tools.ietf.org/html/rfc7231#section-6.3.1)]
   */
  static get Ok() {
    return new StatusCode(STATUS_CODE_ENUM.OK)
  }

  /**
   * 201 Created
   * [[RFC7231, Section 6.3.2](https://tools.ietf.org/html/rfc7231#section-6.3.2)]
   */
  static get Created() {
    return new StatusCode(STATUS_CODE_ENUM.CREATED)
  }

  /**
   * 202 Accepted
   * [[RFC7231, Section 6.3.3](https://tools.ietf.org/html/rfc7231#section-6.3.3)]
   */
  static get Accepted() {
    return new StatusCode(STATUS_CODE_ENUM.ACCEPTED)
  }

  /**
   * 203 Non-Authoritative Information
   * [[RFC7231, Section 6.3.4](https://tools.ietf.org/html/rfc7231#section-6.3.4)]
   */
  static get NonAuthoritativeInformation() {
    return new StatusCode(STATUS_CODE_ENUM.NON_AUTHORITATIVE_INFORMATION)
  }

  /**
   * 204 No Content
   * [[RFC7231, Section 6.3.5](https://tools.ietf.org/html/rfc7231#section-6.3.5)]
   */
  static get NoContent() {
    return new StatusCode(STATUS_CODE_ENUM.NO_CONTENT)
  }

  /**
   * 205 Reset Content
   * [[RFC7231, Section 6.3.6](https://tools.ietf.org/html/rfc7231#section-6.3.6)]
   */
  static get ResetContent() {
    return new StatusCode(STATUS_CODE_ENUM.RESET_CONTENT)
  }

  /**
   * 206 Partial Content
   * [[RFC7233, Section 4.1](https://tools.ietf.org/html/rfc7233#section-4.1)]
   */
  static get PartialContent() {
    return new StatusCode(STATUS_CODE_ENUM.PARTIAL_CONTENT)
  }

  /**
   * 207 Multi-Status
   * [[RFC4918](https://tools.ietf.org/html/rfc4918)]
   */
  static get MultiStatus() {
    return new StatusCode(STATUS_CODE_ENUM.MULTI_STATUS)
  }

  /**
   * 208 Already Reported
   * [[RFC5842](https://tools.ietf.org/html/rfc5842)]
   */
  static get AlreadyReported() {
    return new StatusCode(STATUS_CODE_ENUM.ALREADY_REPORTED)
  }

  /**
   * 226 IM Used
   * [[RFC3229](https://tools.ietf.org/html/rfc3229)]
   */
  static get ImUsed() {
    return new StatusCode(STATUS_CODE_ENUM.IM_USED)
  }

  /**
   * 300 Multiple Choices
   * [[RFC7231, Section 6.4.1](https://tools.ietf.org/html/rfc7231#section-6.4.1)]
   */
  static get MultipleChoices() {
    return new StatusCode(STATUS_CODE_ENUM.MULTIPLE_CHOICES)
  }

  /**
   * 301 Moved Permanently
   * [[RFC7231, Section 6.4.2](https://tools.ietf.org/html/rfc7231#section-6.4.2)]
   */
  static get MovedPermanently() {
    return new StatusCode(STATUS_CODE_ENUM.MOVED_PERMANENTLY)
  }

  /**
   * 302 Found
   * [[RFC7231, Section 6.4.3](https://tools.ietf.org/html/rfc7231#section-6.4.3)]
   */
  static get Found() {
    return new StatusCode(STATUS_CODE_ENUM.FOUND)
  }

  /**
   * 303 See Other
   * [[RFC7231, Section 6.4.4](https://tools.ietf.org/html/rfc7231#section-6.4.4)]
   */
  static get SeeOther() {
    return new StatusCode(STATUS_CODE_ENUM.SEE_OTHER)
  }

  /**
   * 304 Not Modified
   * [[RFC7232, Section 4.1](https://tools.ietf.org/html/rfc7232#section-4.1)]
   */
  static get NotModified() {
    return new StatusCode(STATUS_CODE_ENUM.NOT_MODIFIED)
  }

  /**
   * 305 Use Proxy
   * [[RFC7231, Section 6.4.5](https://tools.ietf.org/html/rfc7231#section-6.4.5)]
   */
  static get UseProxy() {
    return new StatusCode(STATUS_CODE_ENUM.USE_PROXY)
  }

  /**
   * 307 Temporary Redirect
   * [[RFC7231, Section 6.4.7](https://tools.ietf.org/html/rfc7231#section-6.4.7)]
   */
  static get TemporaryRedirect() {
    return new StatusCode(STATUS_CODE_ENUM.TEMPORARY_REDIRECT)
  }

  /**
   * 308 Permanent Redirect
   * [[RFC7238](https://tools.ietf.org/html/rfc7238)]
   */
  static get PermanentRedirect() {
    return new StatusCode(STATUS_CODE_ENUM.PERMANENT_REDIRECT)
  }

  /**
   * 400 Bad Request
   * [[RFC7231, Section 6.5.1](https://tools.ietf.org/html/rfc7231#section-6.5.1)]
   */
  static get BadRequest() {
    return new StatusCode(STATUS_CODE_ENUM.BAD_REQUEST)
  }

  /**
   * 401 Unauthorized
   * [[RFC7235, Section 3.1](https://tools.ietf.org/html/rfc7235#section-3.1)]
   */
  static get UnAuthorized() {
    return new StatusCode(STATUS_CODE_ENUM.UNAUTHORIZED)
  }

  /**
   * 402 Payment Required
   * [[RFC7231, Section 6.5.2](https://tools.ietf.org/html/rfc7231#section-6.5.2)]
   */
  static get PaymentRequired() {
    return new StatusCode(STATUS_CODE_ENUM.PAYMENT_REQUIRED)
  }

  /**
   * 403 Forbidden
   * [[RFC7231, Section 6.5.3](https://tools.ietf.org/html/rfc7231#section-6.5.3)]
   */
  static get Forbidden() {
    return new StatusCode(STATUS_CODE_ENUM.FORBIDDEN)
  }

  /**
   * 404 Not Found
   * [[RFC7231, Section 6.5.4](https://tools.ietf.org/html/rfc7231#section-6.5.4)]
   */
  static get NotFound() {
    return new StatusCode(STATUS_CODE_ENUM.NOT_FOUND)
  }

  /**
   * 405 Method Not Allowed
   * [[RFC7231, Section 6.5.5](https://tools.ietf.org/html/rfc7231#section-6.5.5)]
   */
  static get MethodNotAllowed() {
    return new StatusCode(STATUS_CODE_ENUM.METHOD_NOT_ALLOWED)
  }

  /**
   * 406 Not Acceptable
   * [[RFC7231, Section 6.5.6](https://tools.ietf.org/html/rfc7231#section-6.5.6)]
   */
  static get NotAcceptable() {
    return new StatusCode(STATUS_CODE_ENUM.NOT_ACCEPTABLE)
  }

  /**
   * 407 Proxy Authentication Required
   * [[RFC7235, Section 3.2](https://tools.ietf.org/html/rfc7235#section-3.2)]
   */
  static get ProxyAuthenticationRequired() {
    return new StatusCode(STATUS_CODE_ENUM.PROXY_AUTHENTICATION_REQUIRED)
  }

  /**
   * 408 Request Timeout
   * [[RFC7231, Section 6.5.7](https://tools.ietf.org/html/rfc7231#section-6.5.7)]
   */
  static get RequestTimeout() {
    return new StatusCode(STATUS_CODE_ENUM.REQUEST_TIMEOUT)
  }

  /**
   * 409 Conflict
   * [[RFC7231, Section 6.5.8](https://tools.ietf.org/html/rfc7231#section-6.5.8)]
   */
  static get Conflict() {
    return new StatusCode(STATUS_CODE_ENUM.CONFLICT)
  }

  /**
   * 410 Gone
   * [[RFC7231, Section 6.5.9](https://tools.ietf.org/html/rfc7231#section-6.5.9)]
   */
  static get Gone() {
    return new StatusCode(STATUS_CODE_ENUM.GONE)
  }

  /**
   * 411 Length Required
   * [[RFC7231, Section 6.5.10](https://tools.ietf.org/html/rfc7231#section-6.5.10)]
   */
  static get LengthRequired() {
    return new StatusCode(STATUS_CODE_ENUM.LENGTH_REQUIRED)
  }

  /**
   * 412 Precondition Failed
   * [[RFC7232, Section 4.2](https://tools.ietf.org/html/rfc7232#section-4.2)]
   */
  static get PreconditionFailed() {
    return new StatusCode(STATUS_CODE_ENUM.PRECONDITION_FAILED)
  }

  /**
   * 413 Payload Too Large
   * [[RFC7231, Section 6.5.11](https://tools.ietf.org/html/rfc7231#section-6.5.11)]
   */
  static get PayloadTooLarge() {
    return new StatusCode(STATUS_CODE_ENUM.PAYLOAD_TOO_LARGE)
  }

  /**
   * 414 URI Too Long
   * [[RFC7231, Section 6.5.12](https://tools.ietf.org/html/rfc7231#section-6.5.12)]
   */
  static get UriTooLong() {
    return new StatusCode(STATUS_CODE_ENUM.URI_TOO_LONG)
  }

  /**
   * 415 Unsupported Media Type
   * [[RFC7231, Section 6.5.13](https://tools.ietf.org/html/rfc7231#section-6.5.13)]
   */
  static get UnsupportedMediaType() {
    return new StatusCode(STATUS_CODE_ENUM.UNSUPPORTED_MEDIA_TYPE)
  }

  /**
   * 416 Range Not Satisfiable
   * [[RFC7233, Section 4.4](https://tools.ietf.org/html/rfc7233#section-4.4)]
   */
  static get RangeNotSatisfiable() {
    return new StatusCode(STATUS_CODE_ENUM.RANGE_NOT_SATISFIABLE)
  }

  /**
   * 417 Expectation Failed
   * [[RFC7231, Section 6.5.14](https://tools.ietf.org/html/rfc7231#section-6.5.14)]
   */
  static get ExpectationFailed() {
    return new StatusCode(STATUS_CODE_ENUM.EXPECTATION_FAILED)
  }

  /**
   * 418 I'm a teapot
   * curiously not registered by IANA but [RFC2324](https://tools.ietf.org/html/rfc2324)]
   */
  static get ImATeapot() {
    return new StatusCode(STATUS_CODE_ENUM.IM_A_TEAPOT)
  }

  /**
   * 421 Misdirected Request
   * [RFC7540, Section 9.1.2](http://tools.ietf.org/html/rfc7540#section-9.1.2)
   */
  static get MisdirectedRequest() {
    return new StatusCode(STATUS_CODE_ENUM.MISDIRECTED_REQUEST)
  }

  /**
   * 422 Unprocessable Entity
   * [[RFC4918](https://tools.ietf.org/html/rfc4918)]
   */
  static get UnprocessableEntity() {
    return new StatusCode(STATUS_CODE_ENUM.UNPROCESSABLE_ENTITY)
  }

  /**
   * 423 Locked
   * [[RFC4918](https://tools.ietf.org/html/rfc4918)]
   */
  static get Locked() {
    return new StatusCode(STATUS_CODE_ENUM.LOCKED)
  }

  /**
   * 424 Failed Dependency
   * [[RFC4918](https://tools.ietf.org/html/rfc4918)]
   */
  static get FailedDependency() {
    return new StatusCode(STATUS_CODE_ENUM.FAILED_DEPENDENCY)
  }

  /**
   * 426 Upgrade Required
   * [[RFC7231, Section 6.5.15](https://tools.ietf.org/html/rfc7231#section-6.5.15)]
   */
  static get UpgradeRequired() {
    return new StatusCode(STATUS_CODE_ENUM.UPGRADE_REQUIRED)
  }

  /**
   * 428 Precondition Required
   * [[RFC6585](https://tools.ietf.org/html/rfc6585)]
   */
  static get PreconditionRequired() {
    return new StatusCode(STATUS_CODE_ENUM.PRECONDITION_REQUIRED)
  }

  /**
   * 429 Too Many Requests
   * [[RFC6585](https://tools.ietf.org/html/rfc6585)]
   */
  static get TooManyRequests() {
    return new StatusCode(STATUS_CODE_ENUM.TOO_MANY_REQUESTS)
  }

  /**
   * 431 Request Header Fields Too Large
   * [[RFC6585](https://tools.ietf.org/html/rfc6585)]
   */
  static get RequestHeaderFieldsTooLarge() {
    return new StatusCode(STATUS_CODE_ENUM.REQUEST_HEADER_FIELDS_TOO_LARGE)
  }

  /**
   * 451 Unavailable For Legal Reasons
   * [[RFC7725](http://tools.ietf.org/html/rfc7725)]
   */
  static get UnavailableForLegalReasons() {
    return new StatusCode(STATUS_CODE_ENUM.UNAVAILABLE_FOR_LEGAL_REASONS)
  }

  /**
   * 500 Internal Server Error
   * [[RFC7231, Section 6.6.1](https://tools.ietf.org/html/rfc7231#section-6.6.1)]
   */
  static get InternalServerError() {
    return new StatusCode(STATUS_CODE_ENUM.INTERNAL_SERVER_ERROR)
  }

  /**
   * 501 Not Implemented
   * [[RFC7231, Section 6.6.2](https://tools.ietf.org/html/rfc7231#section-6.6.2)]
   */
  static get NotImplemented() {
    return new StatusCode(STATUS_CODE_ENUM.NOT_IMPLEMENTED)
  }

  /**
   * 502 Bad Gateway
   * [[RFC7231, Section 6.6.3](https://tools.ietf.org/html/rfc7231#section-6.6.3)]
   */
  static get BadGateway() {
    return new StatusCode(STATUS_CODE_ENUM.BAD_GATEWAY)
  }

  /**
   * 503 Service Unavailable
   * [[RFC7231, Section 6.6.4](https://tools.ietf.org/html/rfc7231#section-6.6.4)]
   */
  static get ServiceUnavailable() {
    return new StatusCode(STATUS_CODE_ENUM.SERVICE_UNAVAILABLE)
  }

  /**
   * 504 Gateway Timeout
   * [[RFC7231, Section 6.6.5](https://tools.ietf.org/html/rfc7231#section-6.6.5)]
   */
  static get GatewayTimeout() {
    return new StatusCode(STATUS_CODE_ENUM.GATEWAY_TIMEOUT)
  }

  /**
   * 505 HTTP Version Not Supported
   * [[RFC7231, Section 6.6.6](https://tools.ietf.org/html/rfc7231#section-6.6.6)]
   */
  static get HttpVersionNotSupported() {
    return new StatusCode(STATUS_CODE_ENUM.HTTP_VERSION_NOT_SUPPORTED)
  }

  /**
   * 506 Variant Also Negotiates
   * [[RFC2295](https://tools.ietf.org/html/rfc2295)]
   */
  static get VariantAlsoNegotiates() {
    return new StatusCode(STATUS_CODE_ENUM.VARIANT_ALSO_NEGOTIATES)
  }

  /**
   * 507 Insufficient Storage
   * [[RFC4918](https://tools.ietf.org/html/rfc4918)]
   */
  static get InsufficientStorage() {
    return new StatusCode(STATUS_CODE_ENUM.INSUFFICIENT_STORAGE)
  }

  /**
   * 508 Loop Detected
   * [[RFC5842](https://tools.ietf.org/html/rfc5842)]
   */
  static get LoopDetected() {
    return new StatusCode(STATUS_CODE_ENUM.LOOP_DETECTED)
  }

  /**
   * 510 Not Extended
   * [[RFC2774](https://tools.ietf.org/html/rfc2774)]
   */
  static get NotExtended() {
    return new StatusCode(STATUS_CODE_ENUM.NOT_EXTENDED)
  }

  /**
   * 511 Network Authentication Required
   * [[RFC6585](https://tools.ietf.org/html/rfc6585)]
   */
  static get NetworkAuthenticationRequired() {
    return new StatusCode(STATUS_CODE_ENUM.NETWORK_AUTHENTICATION_REQUIRED)
  }

  [STATUS_CODE]: STATUS_CODE_ENUM

  private constructor(statusCode = STATUS_CODE_ENUM.OK) {
    this[STATUS_CODE] = statusCode
  }

  get raw() {
    return {
      statusCode: this[STATUS_CODE],
      description: this.description
    }
  }

  get statusCode() {
    return this[STATUS_CODE]
  }

  get description() {
    return STATUS_CODE_ENUM[this[STATUS_CODE]]
  }

  get isInformational() {
    const statusCode = this[STATUS_CODE]
    return 100 <= statusCode && statusCode < 200
  }

  get isSuccess() {
    const statusCode = this[STATUS_CODE]
    return 200 <= statusCode && statusCode < 300
  }

  get isRedirection() {
    const statusCode = this[STATUS_CODE]
    return 300 <= statusCode && statusCode < 400
  }

  get isClientError() {
    const statusCode = this[STATUS_CODE]
    return 400 <= statusCode && statusCode < 500
  }

  get isServerError() {
    const statusCode = this[STATUS_CODE]
    return 500 <= statusCode && statusCode < 600
  }

  updateCode(statusCode: STATUS_CODE_ENUM) {
    this[STATUS_CODE] = statusCode
  }
}
