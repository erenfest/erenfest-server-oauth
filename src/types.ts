export interface ApiGatewayEvent {
  path: string
  httpMethod: string
  headers: null | any
  queryStringParameters: null | any
  body: null | string
}

export type Packet = Readonly<{
  statusCode: number
  multiValueHeaders: Record<string, readonly any[]>
  body: string
}>

export interface PacketFactory {
  readonly toPacket: () => Packet
}

export type Handler = Readonly<{
  request: import('./tools/createHandler/Request').Request & {
    readonly auth: import('./middleware/validateRefreshToken/Auth').Auth
  }
  response: import('./tools/createHandler/Response').Response
}>
