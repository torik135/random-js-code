function addRow(triangle) {
    // get the last item
    const prev = triangle[triangle.length - 1];
    // row start with 1 and end with 1
    const newRow = [1];

    // iter
    for (let i = 0; i < prev.length - 1; i++) {
        // curr = 1 to data length
        const curr = prev[i];
        // next = curr data + 1
        const next = prev[i + 1];
        // new row  = ex. curr = 1, next = 1 + 1 = 2 newrow = push 3 {1 + 2}
        newRow.push(curr + next);
        console.log(curr, next, newRow);
    }

    newRow.push(1);
    console.log("newRow[RETURN]: ", newRow);
    return triangle.push(newRow);
}

function gen(numRows) {
    const triangle = [[1], [1, 1]];

    if (numRows === 0) {
        return [];
    } else if (numRows === 1) {
        return [[1]];
    } else if (numRows === 2) {
        return [[1], [1, 1]];
    } else {
        for (let i = 2; i < numRows; i++) {
            console.log("triangle: ", triangle);
            console.log("generate: ", addRow(triangle));
            addRow(triangle);
        }
    }
    return triangle;
}

console.log("GEN: ", gen(3));
