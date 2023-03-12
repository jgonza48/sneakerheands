//This function makes a call to the sneakerheads api using javascript fetch
//upon submitting the form, the function is called

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

            let result = `<div class="card-wrapper" style="display:inline-block;">`;

            Object.entries(data).forEach(([key, value]) => {

                console.log(`${key}: ${value}`);
                // if (key == "description") { // I do not need this  data
                //     result += `<span><strong></strong></span>`
                // }
                if (key == "image") {
                    result += `<div class="card">
                                 <div class="card-img"><img src="${value}" alt="" title=""></div>`;
                }
                if (key == "name") {
                    result += `<span style="padding:4px;">${value}</span><br>`
                }
                if (key == "attributes") {

                    result += `<table><tr>` //Start table and head row
                    value.forEach((attr) => {
                        result += `<th>${attr.trait_type}</th>`; // add trait_type as column headings row
                    })
                    result += `</tr><tr>` // end headings row start data row.

                    value.forEach((att) => {
                        result += `<td>${att.value}</td>`; // add trait value as data row
                    })
                    result += `</tr></table>`; // end row and table
                }
                result += `</div>`; // close the "card-wrapper" div
                document.getElementById('result').innerHTML = result; // send to html page
            })
        })
        .catch(err => console.log('Request Failed', err));

    return false;
}