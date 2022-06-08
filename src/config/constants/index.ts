import { BigDecimal } from '@graphprotocol/graph-ts'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

export const ADDRESS_LOCK = '0xffffffffffffffffffffffffffffffffffffffff'

export const DMM_DYNAMIC_FEE_FACTORY_ADDRESS = '0x0639542a5cd99bd5f4e85f58cb1f61d8fbe32de9'
export const DMM_STATIC_FEE_FACTORY_ADDRESS = '0xb332f6145a5b064f58ff9793ba3523245f8fafac'

export const ETH_PRICING_POOLS = '0x568618004062e83fc286fb322f80a4f2814e80a7|0x26b8d1680b8450dda51fa7d4753cdca9766717bd|0xb26a8395ba1997a4c9a47d1589234bcd3ff468f3'

// minimum liquidity required to count towards tracked volume for pairs with small # of Lps
export let MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString('1')

// minimum liquidity for price to get tracked
export let MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString('0') // default is 2

export const WRAPPED_NATIVE_ADDRESS = '0xc778417e063141139fce010982780140aa0cd5ab'

export const KNC_ADDRESS = '0x8b4ddf9f13f382aff76d262f6c8c50e6d7961b94'
export const KNC_NAME = 'Kyber Network'
export const KNC_SYMBOL = 'KNC'

export const KNCL_ADDRESS = '0x7b2810576aa1cce68f2b118cef1f36467c648f92'
export const KNCL_NAME = 'Kyber Network Legacy'
export const KNCL_SYMBOL = 'KNCL'

export let FACTORY_BPS = BigDecimal.fromString('10000')

export let NETWORK = 'ropsten'

export let WHITELISTED_TOKENS = '0xc778417e063141139fce010982780140aa0cd5ab,0xad6d458402f60fd3bd25163575031acdce07538d,0x068b43f7f2f2c6a662c36e201144ae45f7a1c040,0x65bd1f48f1dd07bb285a3715c588f75684128ace,0x8b4ddf9f13f382aff76d262f6c8c50e6d7961b94'
