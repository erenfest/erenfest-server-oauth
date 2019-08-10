import { STATUS_CODE } from '../../constants'

export class StatusCode {
  /**
   * 100 Continue
   * [[RFC7231, Section 6.2.1](https://tools.ietf.org/html/rfc7231#section-6.2.1)]
   */
  public static get Continue() {
    return new StatusCode(STATUS_CODE.CONTINUE)
  }

  /**
   * 101 Switching Protocols
   * [[RFC7231, Section 6.2.2](https://tools.ietf.org/html/rfc7231#section-6.2.2)]
   */
  public static get SwitchingProtocol() {
    return new StatusCode(STATUS_CODE.SWITCHING_PROTOCOL)
  }

  /**
   * 102 Processing
   * [[RFC2518](https://tools.ietf.org/html/rfc2518)]
   */
  public static get Processing() {
    return new StatusCode(STATUS_CODE.PROCESSING)
  }

  /**
   * 200 OK
   * [[RFC7231, Section 6.3.1](https://tools.ietf.org/html/rfc7231#section-6.3.1)]
   */
  public static get Ok() {
    return new StatusCode(STATUS_CODE.OK)
  }

  /**
   * 201 Created
   * [[RFC7231, Section 6.3.2](https://tools.ietf.org/html/rfc7231#section-6.3.2)]
   */
  public static get Created() {
    return new StatusCode(STATUS_CODE.CREATED)
  }

  /**
   * 202 Accepted
   * [[RFC7231, Section 6.3.3](https://tools.ietf.org/html/rfc7231#section-6.3.3)]
   */
  public static get Accepted() {
    return new StatusCode(STATUS_CODE.ACCEPTED)
  }

  /**
   * 203 Non-Authoritative Information
   * [[RFC7231, Section 6.3.4](https://tools.ietf.org/html/rfc7231#section-6.3.4)]
   */
  public static get NonAuthoritativeInformation() {
    return new StatusCode(STATUS_CODE.NON_AUTHORITATIVE_INFORMATION)
  }

  /**
   * 204 No Content
   * [[RFC7231, Section 6.3.5](https://tools.ietf.org/html/rfc7231#section-6.3.5)]
   */
  public static get NoContent() {
    return new StatusCode(STATUS_CODE.NO_CONTENT)
  }

  /**
   * 205 Reset Content
   * [[RFC7231, Section 6.3.6](https://tools.ietf.org/html/rfc7231#section-6.3.6)]
   */
  public static get ResetContent() {
    return new StatusCode(STATUS_CODE.RESET_CONTENT)
  }

  /**
   * 206 Partial Content
   * [[RFC7233, Section 4.1](https://tools.ietf.org/html/rfc7233#section-4.1)]
   */
  public static get PartialContent() {
    return new StatusCode(STATUS_CODE.PARTIAL_CONTENT)
  }

  /**
   * 207 Multi-Status
   * [[RFC4918](https://tools.ietf.org/html/rfc4918)]
   */
  public static get MultiStatus() {
    return new StatusCode(STATUS_CODE.MULTI_STATUS)
  }

  /**
   * 208 Already Reported
   * [[RFC5842](https://tools.ietf.org/html/rfc5842)]
   */
  public static get AlreadyReported() {
    return new StatusCode(STATUS_CODE.ALREADY_REPORTED)
  }

  /**
   * 226 IM Used
   * [[RFC3229](https://tools.ietf.org/html/rfc3229)]
   */
  public static get ImUsed() {
    return new StatusCode(STATUS_CODE.IM_USED)
  }

  /**
   * 300 Multiple Choices
   * [[RFC7231, Section 6.4.1](https://tools.ietf.org/html/rfc7231#section-6.4.1)]
   */
  public static get MultipleChoices() {
    return new StatusCode(STATUS_CODE.MULTIPLE_CHOICES)
  }

  /**
   * 301 Moved Permanently
   * [[RFC7231, Section 6.4.2](https://tools.ietf.org/html/rfc7231#section-6.4.2)]
   */
  public static get MovedPermanently() {
    return new StatusCode(STATUS_CODE.MOVED_PERMANENTLY)
  }

  /**
   * 302 Found
   * [[RFC7231, Section 6.4.3](https://tools.ietf.org/html/rfc7231#section-6.4.3)]
   */
  public static get Found() {
    return new StatusCode(STATUS_CODE.FOUND)
  }

  /**
   * 303 See Other
   * [[RFC7231, Section 6.4.4](https://tools.ietf.org/html/rfc7231#section-6.4.4)]
   */
  public static get SeeOther() {
    return new StatusCode(STATUS_CODE.SEE_OTHER)
  }

  /**
   * 304 Not Modified
   * [[RFC7232, Section 4.1](https://tools.ietf.org/html/rfc7232#section-4.1)]
   */
  public static get NotModified() {
    return new StatusCode(STATUS_CODE.NOT_MODIFIED)
  }

  /**
   * 305 Use Proxy
   * [[RFC7231, Section 6.4.5](https://tools.ietf.org/html/rfc7231#section-6.4.5)]
   */
  public static get UseProxy() {
    return new StatusCode(STATUS_CODE.USE_PROXY)
  }

  /**
   * 307 Temporary Redirect
   * [[RFC7231, Section 6.4.7](https://tools.ietf.org/html/rfc7231#section-6.4.7)]
   */
  public static get TemporaryRedirect() {
    return new StatusCode(STATUS_CODE.TEMPORARY_REDIRECT)
  }

  /**
   * 308 Permanent Redirect
   * [[RFC7238](https://tools.ietf.org/html/rfc7238)]
   */
  public static get PermanentRedirect() {
    return new StatusCode(STATUS_CODE.PERMANENT_REDIRECT)
  }

  /**
   * 400 Bad Request
   * [[RFC7231, Section 6.5.1](https://tools.ietf.org/html/rfc7231#section-6.5.1)]
   */
  public static get BadRequest() {
    return new StatusCode(STATUS_CODE.BAD_REQUEST)
  }

  /**
   * 401 Unauthorized
   * [[RFC7235, Section 3.1](https://tools.ietf.org/html/rfc7235#section-3.1)]
   */
  public static get UnAuthorized() {
    return new StatusCode(STATUS_CODE.UNAUTHORIZED)
  }

  /**
   * 402 Payment Required
   * [[RFC7231, Section 6.5.2](https://tools.ietf.org/html/rfc7231#section-6.5.2)]
   */
  public static get PaymentRequired() {
    return new StatusCode(STATUS_CODE.PAYMENT_REQUIRED)
  }

  /**
   * 403 Forbidden
   * [[RFC7231, Section 6.5.3](https://tools.ietf.org/html/rfc7231#section-6.5.3)]
   */
  public static get Forbidden() {
    return new StatusCode(STATUS_CODE.FORBIDDEN)
  }

  /**
   * 404 Not Found
   * [[RFC7231, Section 6.5.4](https://tools.ietf.org/html/rfc7231#section-6.5.4)]
   */
  public static get NotFound() {
    return new StatusCode(STATUS_CODE.NOT_FOUND)
  }

  /**
   * 405 Method Not Allowed
   * [[RFC7231, Section 6.5.5](https://tools.ietf.org/html/rfc7231#section-6.5.5)]
   */
  public static get MethodNotAllowed() {
    return new StatusCode(STATUS_CODE.METHOD_NOT_ALLOWED)
  }

  /**
   * 406 Not Acceptable
   * [[RFC7231, Section 6.5.6](https://tools.ietf.org/html/rfc7231#section-6.5.6)]
   */
  public static get NotAcceptable() {
    return new StatusCode(STATUS_CODE.NOT_ACCEPTABLE)
  }

  /**
   * 407 Proxy Authentication Required
   * [[RFC7235, Section 3.2](https://tools.ietf.org/html/rfc7235#section-3.2)]
   */
  public static get ProxyAuthenticationRequired() {
    return new StatusCode(STATUS_CODE.PROXY_AUTHENTICATION_REQUIRED)
  }

  /**
   * 408 Request Timeout
   * [[RFC7231, Section 6.5.7](https://tools.ietf.org/html/rfc7231#section-6.5.7)]
   */
  public static get RequestTimeout() {
    return new StatusCode(STATUS_CODE.REQUEST_TIMEOUT)
  }

  /**
   * 409 Conflict
   * [[RFC7231, Section 6.5.8](https://tools.ietf.org/html/rfc7231#section-6.5.8)]
   */
  public static get Conflict() {
    return new StatusCode(STATUS_CODE.CONFLICT)
  }

  /**
   * 410 Gone
   * [[RFC7231, Section 6.5.9](https://tools.ietf.org/html/rfc7231#section-6.5.9)]
   */
  public static get Gone() {
    return new StatusCode(STATUS_CODE.GONE)
  }

  /**
   * 411 Length Required
   * [[RFC7231, Section 6.5.10](https://tools.ietf.org/html/rfc7231#section-6.5.10)]
   */
  public static get LengthRequired() {
    return new StatusCode(STATUS_CODE.LENGTH_REQUIRED)
  }

  /**
   * 412 Precondition Failed
   * [[RFC7232, Section 4.2](https://tools.ietf.org/html/rfc7232#section-4.2)]
   */
  public static get PreconditionFailed() {
    return new StatusCode(STATUS_CODE.PRECONDITION_FAILED)
  }

  /**
   * 413 Payload Too Large
   * [[RFC7231, Section 6.5.11](https://tools.ietf.org/html/rfc7231#section-6.5.11)]
   */
  public static get PayloadTooLarge() {
    return new StatusCode(STATUS_CODE.PAYLOAD_TOO_LARGE)
  }

  /**
   * 414 URI Too Long
   * [[RFC7231, Section 6.5.12](https://tools.ietf.org/html/rfc7231#section-6.5.12)]
   */
  public static get UriTooLong() {
    return new StatusCode(STATUS_CODE.URI_TOO_LONG)
  }

  /**
   * 415 Unsupported Media Type
   * [[RFC7231, Section 6.5.13](https://tools.ietf.org/html/rfc7231#section-6.5.13)]
   */
  public static get UnsupportedMediaType() {
    return new StatusCode(STATUS_CODE.UNSUPPORTED_MEDIA_TYPE)
  }

  /**
   * 416 Range Not Satisfiable
   * [[RFC7233, Section 4.4](https://tools.ietf.org/html/rfc7233#section-4.4)]
   */
  public static get RangeNotSatisfiable() {
    return new StatusCode(STATUS_CODE.RANGE_NOT_SATISFIABLE)
  }

  /**
   * 417 Expectation Failed
   * [[RFC7231, Section 6.5.14](https://tools.ietf.org/html/rfc7231#section-6.5.14)]
   */
  public static get ExpectationFailed() {
    return new StatusCode(STATUS_CODE.EXPECTATION_FAILED)
  }

  /**
   * 418 I'm a teapot
   * curiously not registered by IANA but [RFC2324](https://tools.ietf.org/html/rfc2324)]
   */
  public static get ImATeapot() {
    return new StatusCode(STATUS_CODE.IM_A_TEAPOT)
  }

  /**
   * 421 Misdirected Request
   * [RFC7540, Section 9.1.2](http://tools.ietf.org/html/rfc7540#section-9.1.2)
   */
  public static get MisdirectedRequest() {
    return new StatusCode(STATUS_CODE.MISDIRECTED_REQUEST)
  }

  /**
   * 422 Unprocessable Entity
   * [[RFC4918](https://tools.ietf.org/html/rfc4918)]
   */
  public static get UnprocessableEntity() {
    return new StatusCode(STATUS_CODE.UNPROCESSABLE_ENTITY)
  }

  /**
   * 423 Locked
   * [[RFC4918](https://tools.ietf.org/html/rfc4918)]
   */
  public static get Locked() {
    return new StatusCode(STATUS_CODE.LOCKED)
  }

  /**
   * 424 Failed Dependency
   * [[RFC4918](https://tools.ietf.org/html/rfc4918)]
   */
  public static get FailedDependency() {
    return new StatusCode(STATUS_CODE.FAILED_DEPENDENCY)
  }

  /**
   * 426 Upgrade Required
   * [[RFC7231, Section 6.5.15](https://tools.ietf.org/html/rfc7231#section-6.5.15)]
   */
  public static get UpgradeRequired() {
    return new StatusCode(STATUS_CODE.UPGRADE_REQUIRED)
  }

  /**
   * 428 Precondition Required
   * [[RFC6585](https://tools.ietf.org/html/rfc6585)]
   */
  public static get PreconditionRequired() {
    return new StatusCode(STATUS_CODE.PRECONDITION_REQUIRED)
  }

  /**
   * 429 Too Many Requests
   * [[RFC6585](https://tools.ietf.org/html/rfc6585)]
   */
  public static get TooManyRequests() {
    return new StatusCode(STATUS_CODE.TOO_MANY_REQUESTS)
  }

  /**
   * 431 Request Header Fields Too Large
   * [[RFC6585](https://tools.ietf.org/html/rfc6585)]
   */
  public static get RequestHeaderFieldsTooLarge() {
    return new StatusCode(STATUS_CODE.REQUEST_HEADER_FIELDS_TOO_LARGE)
  }

  /**
   * 451 Unavailable For Legal Reasons
   * [[RFC7725](http://tools.ietf.org/html/rfc7725)]
   */
  public static get UnavailableForLegalReasons() {
    return new StatusCode(STATUS_CODE.UNAVAILABLE_FOR_LEGAL_REASONS)
  }

  /**
   * 500 Internal Server Error
   * [[RFC7231, Section 6.6.1](https://tools.ietf.org/html/rfc7231#section-6.6.1)]
   */
  public static get InternalServerError() {
    return new StatusCode(STATUS_CODE.INTERNAL_SERVER_ERROR)
  }

  /**
   * 501 Not Implemented
   * [[RFC7231, Section 6.6.2](https://tools.ietf.org/html/rfc7231#section-6.6.2)]
   */
  public static get NotImplemented() {
    return new StatusCode(STATUS_CODE.NOT_IMPLEMENTED)
  }

  /**
   * 502 Bad Gateway
   * [[RFC7231, Section 6.6.3](https://tools.ietf.org/html/rfc7231#section-6.6.3)]
   */
  public static get BadGateway() {
    return new StatusCode(STATUS_CODE.BAD_GATEWAY)
  }

  /**
   * 503 Service Unavailable
   * [[RFC7231, Section 6.6.4](https://tools.ietf.org/html/rfc7231#section-6.6.4)]
   */
  public static get ServiceUnavailable() {
    return new StatusCode(STATUS_CODE.SERVICE_UNAVAILABLE)
  }

  /**
   * 504 Gateway Timeout
   * [[RFC7231, Section 6.6.5](https://tools.ietf.org/html/rfc7231#section-6.6.5)]
   */
  public static get GatewayTimeout() {
    return new StatusCode(STATUS_CODE.GATEWAY_TIMEOUT)
  }

  /**
   * 505 HTTP Version Not Supported
   * [[RFC7231, Section 6.6.6](https://tools.ietf.org/html/rfc7231#section-6.6.6)]
   */
  public static get HttpVersionNotSupported() {
    return new StatusCode(STATUS_CODE.HTTP_VERSION_NOT_SUPPORTED)
  }

  /**
   * 506 Variant Also Negotiates
   * [[RFC2295](https://tools.ietf.org/html/rfc2295)]
   */
  public static get VariantAlsoNegotiates() {
    return new StatusCode(STATUS_CODE.VARIANT_ALSO_NEGOTIATES)
  }

  /**
   * 507 Insufficient Storage
   * [[RFC4918](https://tools.ietf.org/html/rfc4918)]
   */
  public static get InsufficientStorage() {
    return new StatusCode(STATUS_CODE.INSUFFICIENT_STORAGE)
  }

  /**
   * 508 Loop Detected
   * [[RFC5842](https://tools.ietf.org/html/rfc5842)]
   */
  public static get LoopDetected() {
    return new StatusCode(STATUS_CODE.LOOP_DETECTED)
  }

  /**
   * 510 Not Extended
   * [[RFC2774](https://tools.ietf.org/html/rfc2774)]
   */
  public static get NotExtended() {
    return new StatusCode(STATUS_CODE.NOT_EXTENDED)
  }

  /**
   * 511 Network Authentication Required
   * [[RFC6585](https://tools.ietf.org/html/rfc6585)]
   */
  public static get NetworkAuthenticationRequired() {
    return new StatusCode(STATUS_CODE.NETWORK_AUTHENTICATION_REQUIRED)
  }

  private constructor(private _statusCode = STATUS_CODE.OK) {}

  public get raw() {
    return {
      statusCode: this._statusCode,
      description: this.description
    }
  }

  public get statusCode() {
    return this._statusCode
  }

  public get description() {
    return STATUS_CODE[this._statusCode]
  }

  public get isInformational() {
    const statusCode = this._statusCode
    return 100 <= statusCode && statusCode < 200
  }

  public get isSuccess() {
    const statusCode = this._statusCode
    return 200 <= statusCode && statusCode < 300
  }

  public get isRedirection() {
    const statusCode = this._statusCode
    return 300 <= statusCode && statusCode < 400
  }

  public get isClientError() {
    const statusCode = this._statusCode
    return 400 <= statusCode && statusCode < 500
  }

  public get isServerError() {
    const statusCode = this._statusCode
    return 500 <= statusCode && statusCode < 600
  }

  public updateCode(statusCode: STATUS_CODE) {
    this._statusCode = statusCode
  }
}
