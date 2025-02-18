const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function sumOfARow(arr: number[][], rowIdx: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (arr.length > rowIdx) {
                let sum = 0;
                console.log(`Computing sum of row ${rowIdx} ... `);
                for (let i = 0; i < arr[rowIdx].length; i++) {
                    sum += arr[rowIdx][i];
                }
                resolve(sum);
            }
            else {
                reject(`Row Index ${rowIdx} must be within 0 and ${arr.length}`);
            }}, 
        0);
    });
}

// Using Promise.all
// let rowSumPromises: Promise<number>[] = [];
// for (let x = 0; x < array2D_1.length; x++) {
//     rowSumPromises.push(sumOfARow(array2D_1, x));
// }
// Promise.all(rowSumPromises)
//     .then((rowSums) => {
//         let sum = 0;
//         console.log('Computing sum of all rows ... ');
//         rowSums.forEach(rowSum => {
//             sum += rowSum;
//         });
//         console.log(`Sum = ${sum}`);
//     })
//     .catch((error) => console.log(`Error Msg: ${error}`));

// console.log('Computing sum of 2D array ... ');


// Simplify Promise.all
// Use async await instead
async function sumOfArrayAsync() {
    try {
        console.log('Computing sum of 2D array ...');
        let rowSumPromisesArray: Promise<number>[] = [];
        for (let x = 0; x < array2D_1.length; x++) {
            rowSumPromisesArray.push(sumOfARow(array2D_1, x));
        }
        let totalSum = 0;
        for await (const rowSum of rowSumPromisesArray) {
            totalSum += rowSum;
        }
        console.log(`Sum = ${totalSum}`);
    } catch (error) {
        console.error(`Error Msg: ${error}`);
    }
}
sumOfArrayAsync();