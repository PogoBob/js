// Задача 1
function bubbleSort(arr) {
    var n = arr.length;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Пример для Задачи 1
var arr1 = [64, 34, 25, 12, 22, 11, 90];
console.log("Задача 1: Сортировка пузырьком");
console.log("Исходный массив:", arr1);
console.log("Отсортированный массив:", bubbleSort(arr1));

// Задача 2
function countDuplicateElements(arr) {
    var countDict = {};
    for (var i = 0; i < arr.length; i++) {
        var num = arr[i];
        if (countDict[num]) {
            countDict[num]++;
        } else {
            countDict[num] = 1;
        }
    }

    var result = {};
    for (var key in countDict) {
        if (countDict[key] > 1) {
            result[key] = countDict[key];
        }
    }
    return result;
}

// Пример для Задачи 2
var arr2 = [1, 2, 3, 4, 5, 2, 3, 4, 6];
console.log("\nЗадача 2: Повторяющиеся элементы");
console.log("Исходный массив:", arr2);
console.log("Повторяющиеся элементы:", countDuplicateElements(arr2));

// Задача 3
function maxOfMinInRows(matrix) {
    var minOfRows = matrix.map(function(row) {
        return Math.min.apply(null, row);
    });
    return Math.max.apply(null, minOfRows);
}

// Пример для Задачи 3
var matrix3 = [
    [3, 5, 1],
    [7, 2, 8],
    [4, 6, 9]
];
console.log("\nЗадача 3: Наибольший из минимальных элементов строк матрицы");
console.log("Результат:", maxOfMinInRows(matrix3));

// Задача 4
class Vector {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    add(other) {
        return new Vector(this.x + other.x, this.y + other.y, this.z + other.z);
    }

    subtract(other) {
        return new Vector(this.x - other.x, this.y - other.y, this.z - other.z);
    }

    multiply(scalar) {
        return new Vector(this.x * scalar, this.y * scalar, this.z * scalar);
    }

    dotProduct(other) {
        return this.x * other.x + this.y * other.y + this.z * other.z;
    }

    componentMultiply(other) {
        return new Vector(this.x * other.x, this.y * other.y, this.z * other.z);
    }

    length() {
        return Math.sqrt(this.x**2 + this.y**2 + this.z**2);
    }
}

// Пример для Задачи 4
var vectorA = new Vector(1, 2, 3);
var vectorB = new Vector(4, 5, 6);
console.log("\nЗадача 4: Операции с векторами");
console.log("Вектор A:", vectorA);
console.log("Вектор B:", vectorB);
console.log("Сумма A + B:", vectorA.add(vectorB));
console.log("Разность A - B:", vectorA.subtract(vectorB));
console.log("Произведение A * 2:", vectorA.multiply(2));
console.log("Длина вектора A:", vectorA.length());
console.log("Скалярное произведение A и B:", vectorA.dotProduct(vectorB));

// Задача 5
function cyclicShift(arr, k) {
    var n = arr.length;
    k = k % n;
    return arr.slice(k).concat(arr.slice(0, k));
}

// Пример для Задачи 5
var arr5 = [1, 2, 3, 4, 5];
var k5 = 4;
console.log("\nЗадача 5: Циклический сдвиг массива");
console.log("Исходный массив:", arr5);
console.log("Циклический сдвиг влево на", k5, "элемента(ов):", cyclicShift(arr5, k5));