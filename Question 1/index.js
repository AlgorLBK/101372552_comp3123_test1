function lowerCaseWords(array) {
    function filterArray(word) {
        return typeof(word) == 'string'
    }
    function toLower(word) {
        let result = []
        for (letter of word) {
            result.push(letter.toLowerCase())
        }
        let output = result.join('') 
        return output
    }
    return new Promise((resolve, reject) => {
        if (!Array.isArray(array)) {
        reject(new Error('Please, make sure your input is an array !'))
        return
        }
    let filteredArray = []
    filteredArray = array.filter(filterArray)
    filteredArray = filteredArray.map(toLower)
    resolve(filteredArray)    
    })
}

var my = [true, 'AlgOr', 15, 156, 'LOMBAKO', 'konga']
lowerCaseWords(my).then((result) => {
    console.log(result) 
}).catch((error) => {
    console.log(`Error: ${error}`)
})