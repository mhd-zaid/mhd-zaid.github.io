// check if element given is
// of type JSON
let isJSON = (item) => {
    if (!item) return false;
    item = typeof item !== "string"
         ? JSON.stringify(item)
         : item;
    try {
        item = JSON.parse(item);
    } catch (e) {
        return false;
    }

    return typeof item === "object" && item !== null;
}

/**
 * Transform json file in an object 
 * @param json : "key" => [lat, long]
 * @return obj[]: object composed of a name, a localisation
 * and a radius 
 */
let JSONtoObject = (json) => {
    if (!json || !isJSON(json)) return;
    const obj = [];
    for (let name in json) {
        obj.push({
            name: name,
            desc: json[name][0],
            localisation: L.latLng(json[name][1][0], json[name][1][1]),
            radius: 1000
        });
    }
    return obj;
}
/**
 * Do the ajax request to get the data
 * async is false (deprecated) but needed 
 * to not return null
 * @param path : where is the data 
 */
let getData = (path) => {
    if (!path) return;
    let data = null;
    $.ajax({
        url: path,
        dataType: 'json',
        async: false,
        success: (response) => {
            data = JSONtoObject(response);
        },
        error: (err) => {
            if (err) throw err;
        },
        timeout: 3000
    });
    return data;
}

// Return a random place
let getRandomData = () => {
    const places = getData("http://localhost:8080/data")
    const max = places.length;
    let idx = Math.floor(Math.random() * Math.floor(max));
    return places[idx];
}