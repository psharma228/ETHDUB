# ETHDUB
Prototyping in ETH Dublin 2023

1. Connect your Wallet to login (publisher / reader)
2. Mint your NFT (only Publisher)
3. Pending - Put the NFT for SALE
4. Pending - Put the NFT for Lending
5. Pending - Buy the NFT (reader only)


Welcome to DPUB a decentralised publishing platform harnessing the technology of blockchain.

As part of the user journey for this hackathon we have implemented the below functions 

	1.	Connect your Wallet to login (publisher/reader): This function relies on Ethereum wallet integration, essentially using a user’s wallet as their identity. When a user connects their wallet, typically via a Web3 provider like MetaMask, the app interacts with the Ethereum blockchain on their behalf. The wallet holds the user’s Ethereum private keys, enabling them to sign transactions and interact with smart contracts.
	2.	Mint your NFT (only Publisher): Minting an NFT involves creating a new token on the Ethereum blockchain. This is done by calling a mint function in a deployed ERC-721 smart contract, which assigns a unique identifier to the new token. 
We are storing the content of the NFT on IPFS.
The minting process also typically involves creating metadata that describes the NFT’s properties. Currently we are using three fields for metadata:
1. Name 
2. Description
3. Base URI 

	3.	Put the NFT for SALE: This function will involve interacting with a marketplace smart contract, where a publisher can list their NFT for sale by specifying a price. Listing an NFT usually involves calling an approve function in the NFT contract to allow the marketplace contract to transfer the NFT on behalf of the user when a sale happens.

	4.	Put the NFT for Lending: This process involves transferring temporary ownership of the NFT, which can be facilitated by a lending-specific smart contract. The lender allows the contract to manage their NFT, and the contract ensures the NFT returns to the original owner once the lending period ends or certain conditions are met.

	5.	Buy the NFT (reader only): Buying an NFT involves sending a transaction to the marketplace contract to call a buy function. This function requires the specified price in Ether, transfers ownership of the NFT from the seller to the buyer, and transfers the Ether from the buyer to the seller.

To monitor the performance of our smart contract we are using Starton .
Starton provides with critical data and metrics about the behavior and usage of our contracts. Here’s a breakdown of the data we are monitoring:

	•	“Smart contract deployed”: This indicates that a new smart contract has been successfully created and added to the blockchain. It’s ready to be interacted with and start executing based on its coded terms.
	•	“Number of transactions”: This metric tracks how many transactions have been executed by the smart contract. This can give you an idea of the contract’s activity level and how frequently its terms are being met.
	•	“Number of files”: If the smart contracts involve file management in any way, this data point could be tracking the number of files currently stored or managed by the contract.
	•	“Storage used”: This measures the amount of data storage space the smart contract is using. It could indicate the complexity of the contract or the volume of data it’s handling.

In terms of service usage, we are monitoring the following elements:

	•	“IPFS”: The InterPlanetary File System (IPFS) is a protocol designed to create a permanent and decentralized method of storing and sharing files.
	•	“Write”: This refers to instances where data is written to the blockchain as part of the smart contract’s execution.
	•	“Deploy”: This tracks when new instances of the smart contract are deployed to the blockchain.
	•	“Read”: This denotes instances where data is read from the blockchain as part of the smart contract’s operations.
	•	“Events”: In the context of smart contracts, “events” are mechanisms that facilitate communication between smart contracts and the user interfaces. We can use for debugging during development.

By monitoring these data points, we can gain a comprehensive understanding of our smart contract’s performance, usage, and impact on our system’s resources.

Sample :

<img width="1602" alt="Screenshot 2023-05-28 at 11 20 58" src="https://github.com/D-PUB/ETHDUB/assets/12585792/75d67283-b4a3-4746-8706-7002a786a412">


----------- Dashboard -----------

<img width="1592" alt="Screenshot 2023-05-28 at 11 18 56" src="https://github.com/D-PUB/ETHDUB/assets/12585792/a671be46-adfa-458d-8ce2-bb7c65feafed">
