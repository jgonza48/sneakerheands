
function getNft() {
    let shUrl = `https://api.nftport.xyz/v0/nfts/0x8dC7b6EC6FafA36085EE9ec8e39112428D3360aa?chain=ethereum&page_number=1&page_size=50&include=metadata&refresh_metadata=false`;
    let userWallet = document.getElementById('number').value;
    let userUrl = 'https://api.nftport.xyz/v0/accounts/0xA85A33d337CbA704923C579DE748BDa2F5232e04?chain=ethereum&page_size=50&include=metadata';

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: '7fd4440e-2fc4-4ed3-87cc-4bc2bc735dd1'
        }
      };
      
      fetch(userUrl, options)
        .then(response => response.json())
        .then(response => {console.log(response);
            const nfts = response.nfts;
            let result = `<ul style="width:300px;">`;
            nfts.forEach(e => {
                if (e.name != null) {result += `<li class="card"><img src="${e.cached_file_url}" alt=""></li>`;} 
            });
            result += `</ul>`;
            document.getElementById('result').innerHTML = result;

        }
            )
        .catch(err => console.error(err));

        return false;
}

