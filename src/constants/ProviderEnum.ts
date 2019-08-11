export type ProviderEnum = typeof ProviderEnum[keyof typeof ProviderEnum]

export const ProviderEnum = Object.freeze({
  Google: 'Google',
  Erenfest: 'Erenfest'
} as const)
