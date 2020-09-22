// HTTP Request

const getPuzzleAsync = async (noOfWords) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${noOfWords}`);
    if(response.status === 200) {
        const data = await response.json();
        return data.puzzle;
    } else {
        throw new Error (`Bad Request`);
    }
};


// const getPuzzle = (noOfWords) => {
//     return fetch(`http://puzzle.mead.io/puzzle?wordCount=${noOfWords}`).then((response) => {
//         if(response.status === 200) {
//             return response.json();
//         } else {
//             throw new Error(`Unable to fetch puzzle`);
//         }
//     }).then((data) => {
//         return data.puzzle;
//     });
// }
