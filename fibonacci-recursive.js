// Fibonacci
// [0, 1, 1, 2, 3, 5, 8, 13]

// Define Function
function fibonacciElement(n) {
    if (n === 0) {
        return 0;
    };

    if (n === 1) {
        return 1;
    };

    return fibonacciElement(n - 1) + fibonacciElement(n - 2);
};

function fibonacciSeries(n) {
    if (n === 0) {
        return [0];
    };

    if (n === 1) {
        return [0, 1];
    };

    const fibo = fibonacciSeries(n - 1);
    fibo[n] = fibo[n - 1] + fibo[n - 2];
    return fibo;
};

const result = fibonacciSeries(6);
console.log(result);
