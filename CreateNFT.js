export const createNFT = `

import BasicNFT from 0x01

transaction (url: String){

  prepare(acct: AuthAccount) {
  
    acct.save(<-BasicNFT.createNFT(url: url), to: /storage/BasicNFTPath)
    acct.link<&BasicNFT.NFT{BasicNFT.NFTPublic}>(/public/BasicNFTPath, target: /storage/BasicNFTPath)
  
  }

  execute {
    log("NFT Created!")
  }
}
`