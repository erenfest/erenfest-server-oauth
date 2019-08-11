export type ContentTypeEnum = typeof ContentTypeEnum[keyof typeof ContentTypeEnum]

export const ContentTypeEnum = Object.freeze({
  Json: 'application/json',
  MessagePack: 'application/x-msgpack'
})
