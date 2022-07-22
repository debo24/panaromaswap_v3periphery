import { abi as POOL_ABI } from '@panaromaswap/v3-core/artifacts/contracts/PanaromaswapV3Pool.sol/PanaromaswapV3Pool.json'
import { Contract, Wallet } from 'ethers'
import { IPanaromaswapV3Pool } from '../../typechain'

export default function poolAtAddress(address: string, wallet: Wallet): IPanaromaswapV3Pool {
  return new Contract(address, POOL_ABI, wallet) as IPanaromaswapV3Pool
}
