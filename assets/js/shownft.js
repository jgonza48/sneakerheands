fetch("https://api.etherscan.io/api?module=account&action=txlist&address=0x8dC7b6EC6FafA36085EE9ec8e39112428D3360aa&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=FK5ZM117Z1P4QVNFPM7Q1UGQD8NI95P578", {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
    .then((res) => { return res.json() })
    .then((data) => {
      count = 0;
      let result = `<div></div>`;
      nftarray = [];
      data.forEach((nft) => {
        const { 
            blockNumber,
            timeStamp,
            hash,
            nonce,
            blockHash, 
            transactionIndex,
            from,
            to,
            value,
            gas,
            gasPrice,
            isError, 
            txreceipt_status,
            input,
            contractAddress,
            cumulativeGasUsed,
            gasUsed,
            confirmations,
            methodId,
            functionName} = nft
        count++;
        result +=
          `<div class="card" style="display:inline-block; color:white;">
                <span><h5 style="color:white;"> ${blockNumber} </h5></span>      
            </div>`;
        document.getElementById('result').innerHTML = result;
      });
    })
    .catch(err => console.log('Request Failed', err)); // Catch errors