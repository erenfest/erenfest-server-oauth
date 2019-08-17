export type ProviderEnum = typeof ProviderEnum[keyof typeof ProviderEnum]

export const ProviderEnum = Object.freeze({
  Erenfest: 'Erenfest'
} as const)
