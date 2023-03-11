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
                // if (key == "description") {
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

                    result += `<table><tr><th>Sneaker Number</th><th>Background</th><th>Pin</th><th>Lace</th><th>Level</th></tr><tr>`
                    value.forEach((att) => {
                        result += `<td>${att.value}</td>`;
                    })
                    result += `</tr></table>`;
                }

                result += `</div>`;
                document.getElementById('result').innerHTML = result;

            })


        })
        .catch(err => console.log('Request Failed', err));

    return false;
}