import {useState} from "react";
import Web3 from "web3";
const FileUpload=()=>{
const [file,setFile]=useState(null);
const [cid,setCid]=useState("");
const [transaction,setTransaction]=useState("");
const [isMinted, setIsMinted] = useState(false);

    const handleSubmit =async(event)=>{
        event.preventDefault();
         try{
             if(file){
                 const formData = new FormData();
                 if(window.ethereum){
                    const provider = window.ethereum;
                    await provider.request({ method: "eth_requestAccounts" });
                    const web3 = new Web3(provider);
                    const userAccount = await web3.eth.getAccounts();
                    const chainId = await web3.eth.getChainId();
                    const account = userAccount[0];
                    console.log(" userAccount "+userAccount);
                    console.log(" chainId "+chainId);
                    console.log(" account "+account);
                    formData.append("receiver",account);
                 }
                 formData.append("file",file);
                 const response = await fetch('http://localhost:5000/upload',{
                     method:'POST',
                     body:formData
                 }).then(response=>response.json())
                 .then(data=>{ 
                    setCid(data.cid);
                    setTransaction(data.transactionHash)
                   console.log(data.cid)
                   console.log(data.transactionHash)
                   setIsMinted(true);
                })
                 .catch(error=>{
                     console.error(error);
                 })
             }
         }catch(error){
            alert(error);
         }
    }
    const retreieveFile=(event)=>{
        try{
            const data = event.target.files[0];
            setFile(data);
            event.preventDefault();
        }catch(error){
            alert("Retrieve File Does Not Worked");
        }
    }
return<>
 <div className="img-ctr">
    {cid && <a href={`https://${cid}.ipfs.dweb.link`}><img src={`https://${cid}.ipfs.dweb.link`} height={"250px"} /></a>}
    </div>
    <div className="transaction">
     {transaction && <a href={`https://goerli.etherscan.io/tx/${transaction}`}>Transaction Details</a>}
</div>
 {!isMinted && <div className="form">
    <form onSubmit={handleSubmit}>
    <input type="file" className="choose" onChange={retreieveFile}/>
    <button className="btn">Mint</button>
    </form>
    </div>}
    
    {isMinted && ( // Render list button if minted
        <div className="list-button">
          <button className="btn">List</button>
        </div>
      )}
</>
}
export default FileUpload;