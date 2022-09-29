import { BigDecimal } from '@graphprotocol/graph-ts'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

export const ADDRESS_LOCK = '0xffffffffffffffffffffffffffffffffffffffff'

export const DMM_DYNAMIC_FEE_FACTORY_ADDRESS = '0x878dfe971d44e9122048308301f540910bbd934c'
export const DMM_STATIC_FEE_FACTORY_ADDRESS = '0x1c758af0688502e49140230f6b0ebd376d429be5'
export const DMM_STATIC_FEE_FACTORY_LEGACY_ADDRESS = ''

export const ETH_PRICING_POOLS = '0xec303ce1edbebf7e71fc7b350341bb6a6a7a6381'

// minimum liquidity required to count towards tracked volume for pairs with small # of Lps
export let MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString('4000')

// minimum liquidity for price to get tracked
export let MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString('13') // default is 2

export const WRAPPED_NATIVE_ADDRESS = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'

export const KNC_ADDRESS = '0xfe56d5892bdffc7bf58f2e84be1b2c32d21c308b'
export const KNC_NAME = 'Kyber Network'
export const KNC_SYMBOL = 'KNC'

export const KNCL_ADDRESS = '0x7b2810576aa1cce68f2b118cef1f36467c648f92'
export const KNCL_NAME = 'Kyber Network Legacy'
export const KNCL_SYMBOL = 'KNCL'

export let FACTORY_BPS = BigDecimal.fromString('10000')

export let NETWORK = 'bsc'

export let WHITELISTED_TOKENS = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c,0xe9e7cea3dedca5984780bafc599bd69add087d56,0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d,0x55d398326f99059ff775485246999027b3197955,0xfe56d5892bdffc7bf58f2e84be1b2c32d21c308b,0x2170ed0880ac9a755fd29b2688956bd959f933f8'
