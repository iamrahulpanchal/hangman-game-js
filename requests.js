// HTTP Request

const getPuzzle = (noOfWords) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${noOfWords}`).then((response) => {
        if(response.status === 200) {
            return response.json();
        } else {
            throw new Error(`Unable to fetch puzzle`);
        }
    }).then((data) => {
        return data.puzzle;
    });
}
