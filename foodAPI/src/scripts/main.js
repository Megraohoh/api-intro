const $ = require("jquery")

$.ajax("http://localhost:8088/food")
.then(response => {
    console.log(response)
})
.then(() => {
    $.ajax({
        url: "http://localhost:8088/food/6CBIqur",
        method: "PUT",
        data: {
            "name": "Red curry",
            "type": "curry",
            "ethnicity": "thai",
            "sideDishes": [
              "Chicken satee",
              "Samosa"
            ]
        }
    })
})