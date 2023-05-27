const express = require('express')
const multer = require('multer') //used to upload the file
const cors = require('cors');
const axios = require('axios')
const app = express()
const port=process.env.PORT || 5000

app.use(express.json())

const upload = multer({
    limits:{
        fileSize:1000000 //file size in bytes
    }
})

const starton = axios.create({
    baseURL: "https://api.starton.io/v3",
    headers: {
        "x-api-key": "sk_live_110a0787-44e7-4642-b1da-d160533c70ce",
    },
  })

  app.post('/upload',cors(),upload.single('file'),async(req,res)=>{
   
    let data = new FormData();
    const blob = new Blob([req.file.buffer],{type:req.file.mimetype});
    data.append("file",blob,{filename:req.file.originalnam})
    data.append("isSync","true");
    //const publisherAddress = req.receiver;
    console.log(" Publisher Address: "+req.body.receiver);
    console.log("----------------------")
    async function uploadPDFOnIpfs(){
        const ipfsPDF = await starton.post("/ipfs/file", data, {
            headers: { "Content-Type": `multipart/form-data; boundary=${data._boundary}` },
          })
          return ipfsPDF.data;
    }
    async function uploadMetadataOnIpfs(imgCid){
        const metadataJson = {
            name: `Test DPUB NFT`,
            description: `Published your book - your NFT is created !`,
            image: `ipfs://ipfs/${imgCid}`,
        }
        const ipfsMetadata = await starton.post("/ipfs/json", {
            name: "My NFT metadata Json",
            content: metadataJson,
            isSync: true,
        })
        return ipfsMetadata.data;
    }
    
    const SMART_CONTRACT_NETWORK="ethereum-goerli"
    const SMART_CONTRACT_ADDRESS="0x1Ad13DCEe0Eaa459CAEECae10D6a01AEAba4B808"
    const WALLET_IMPORTED_ON_STARTON="0x0C6B61D1fC47A6f3e4fD984CB87badc34bDB2c4f";
    async function mintNFT(receiverAddress,metadataCid){
        const nft = await starton.post(`/smart-contract/${SMART_CONTRACT_NETWORK}/${SMART_CONTRACT_ADDRESS}/call`, {
            functionName: "mint",
            signerWallet: WALLET_IMPORTED_ON_STARTON,
            speed: "low",
            params: [receiverAddress, metadataCid],
        })
        return nft.data;
    }
    const RECEIVER_ADDRESS = req.body.receiver;//"0xAf6efCCf52c8a073863568eaa3d04D8A81c2dAda"
    const ipfsPDFData = await uploadPDFOnIpfs();
    const ipfsMetadata = await uploadMetadataOnIpfs(ipfsPDFData.cid);
    const nft = await mintNFT(RECEIVER_ADDRESS,ipfsMetadata.cid)
    console.log(nft)
    console.log("---------------------------------")
    res.status(201).json({
        transactionHash:nft.transactionHash,
        cid:ipfsPDFData.cid
    })
  })
  app.listen(port,()=>{
    console.log('Server is running on port '+ port);
  })