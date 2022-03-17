import { BigDecimal } from '@graphprotocol/graph-ts'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

export const ADDRESS_LOCK = '0xffffffffffffffffffffffffffffffffffffffff'

export const FACTORY_ADDRESS = '0x51e8d106c646ca58caf32a47812e95887c071a62'

export const ETH_PRICING_POOLS = '0xfba13b2a525d2b11c6c138a3a31040a663921213'

// minimum liquidity required to count towards tracked volume for pairs with small # of Lps
export let MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString('1')

// minimum liquidity for price to get tracked
export let MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString('0') // default is 2

export const WRAPPED_NATIVE_ADDRESS = '0x82af49447d8a07e3bd95bd0d56f35241523fbab1'
export const DAI_ADDRESS = '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1'
export const USDC_ADDRESS = '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8'
export const USDT_ADDRESS = '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9'
export const WETH_ADDRESS = ''

export const KNC_ADDRESS = ''
export const KNC_NAME = 'Kyber Network'
export const KNC_SYMBOL = 'KNC'

export const KNCL_ADDRESS = ''
export const KNCL_NAME = 'Kyber Network Legacy'
export const KNCL_SYMBOL = 'KNCL'
export const WHITELIST_TOKENS = ''

export let FACTORY_BPS = BigDecimal.fromString('10000')

export let NETWORK = 'arbitrum'
