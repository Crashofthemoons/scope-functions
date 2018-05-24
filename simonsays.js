const locations = [[1,1], [6,2], [1,3], [2,1], [2,2], [2,3]]
let k = '';
for (k = 0; k < locations.length; k++) {
    const currentLocation = locations[k]

    if (currentLocation[0] > 2) {
        console.log("This location is invalid")
    } 
    
}
console.log(`There were ${[k]} locations displayed`)
