//This function makes a call to the sneakerheads api using javascript fetch
//upon submitting the form, the function is called
// this code is intentionally kept simple to follow (I hope)

function getSH() {
    let numberSH = document.getElementById('number').value;

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
        .then((data) => {

            let result = `<div class="card-wrapper">`;

            Object.entries(data).forEach(([key, value]) => {

                 // if (key == "description") { // I do not need this  data
                //     result += `<span><strong></strong></span>`
                // }
                if (key == "image") {
                    result += `<div class="card">
                                 <div class="card-img"><img src="${value}" alt="" title="sneakerhead ${numberSH}"></div>`;
                }
                else if (key == "name") {
                    result += `<div><span style="padding:4px;">${value}</span><br></div>`
                }
                else if (key == "attributes") {

                    result += `<table>` //Start table and head row
                    value.forEach((attr) => {
                        result += `<tr><td id="tdleft">${attr.trait_type}</td><td id="tdright">${attr.value}</td></tr>`; // add trait_type as column headings row
                    })

                    
                    result += `</table></div>`; // end row and table
                }
            })
            result += `</div>`; // close the "card-wrapper" div
            document.getElementById('result').innerHTML += result; // send to html page
            document.getElementById('number').value = '';
            console.log(result);
        })
        .catch(err => console.log('Request Failed', err));

    return false;
}