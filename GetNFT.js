export const getNFT = `
import BasicNFT from 0x01

pub fun main(account: Address): AnyStruct {


  let publicReference = getAccount(account).getCapability(/public/BasicNFTPath)
                                    .borrow<&BasicNFT.NFT{BasicNFT.NFTPublic}>()
                                    ?? panic("No NFT reference found here!")

  return [publicReference.getID(), publicReference.getURL()]
}
`
