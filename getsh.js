//This function makes a call to the sneakerheads api using javascript fetch
//upon submitting the form, the function is called
// this code is intentionally kept simple to follow (I hope)
function getSH() {
    let numberSH = document.getElementById('number').value;
    
if(numberSH == ''){return false;}//Don't submit if "number" field is left blank
    let url = `https://api.sneakerheads.xyz/sneaker/${numberSH}`;
    fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then((res) => {
            return res.json()
        })
        .then((data) => {let nft = data;
            console.log(nft.attributes);

            //let result = `<span><strong>${nft.description}</strong></span><br>`;
            let result = ``;
            //for(x in data){console.log(x);}
  
            result += `<div class="card">
                        <div class="card-img"><img src="https://storage.googleapis.com/nftimagebucket/tokens/0x8dc7b6ec6fafa36085ee9ec8e39112428d3360aa/preview/${numberSH}.png" alt="" title="sneakerhead ${numberSH}"></div>`;
                        //https://storage.googleapis.com/nftimagebucket/tokens/0x8dc7b6ec6fafa36085ee9ec8e39112428d3360aa/preview/${numberSH}.png
           
            result += `<figcaption style="padding:4px;">${nft.name}</figcaption>`

            result += `<table>`; //Start table and head row
            (nft.attributes).forEach((attr) => {
                result += `<tr><td id="tdleft">${attr.trait_type}</td><td id="tdright">${attr.value}</td></tr>`; // add trait_type as column headings row
            })

            result += `</table></div>`; // end row and table
          
            result += `</div>`; // close the "card-wrapper" div
            let oldCard = document.getElementById("result").firstChild;

            let newCard = document.createElement("div");
            newCard.classList.add("card-wrapper");
            newCard.innerHTML = result;
            let parentDiv = document.getElementById("result");
            parentDiv.insertBefore(newCard, oldCard);

            document.getElementById('number').value = '';
         })
        .catch(err => console.log('Request Failed', err));

    return false;
}

function clearPage(){
    document.getElementById('result').innerHTML = '';
    return false;
}