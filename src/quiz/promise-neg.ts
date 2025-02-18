const array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

function checkNegativeRowInArray(row: number[], rowIdx: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Checking negatives in row ${rowIdx} ...`);
            if (row.some(num => num < 0)) {
                console.log(`Row ${rowIdx} has a negative number:`, row);
            }
            resolve();
        }, 0);
    });
}

// Using promise.all
// console.log('Checking for negative numbers in 2D array...');
// let negCheckPromises: Promise<void>[] = [];
// for (let x = 0; x < array2D_3.length; x++) {
//     negCheckPromises.push(checkNegativeRowInArray(array2D_3[x], x));
// }

// Promise.all(negCheckPromises)
//     .then(() => {
//         console.log('All rows checked.');
//     })
//     .catch((error) => console.log(`Error Msg: ${error}`));

// Simplify promise.all
// Use async await instead
async function checkAllRowsAsync() {
    try {
        console.log('Checking for negative numbers in 2D array...');
        let negCheckPromises: Promise<void>[] = array2D_3.map((row, index) =>
            checkNegativeRowInArray(row, index)
        );

        for await (const _ of negCheckPromises) {
            // This ensures each check completes sequentially, though it's not necessary.
        }

        console.log('All rows checked.');
    } catch (error) {
        console.error(`Error Msg: ${error}`);
    }
}

checkAllRowsAsync();
