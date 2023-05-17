//1.Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.
console.log("=============1==============")

function printMin(a, b) {
        if (a > b) {
            console.log(b);
        } else if (a === b) {
            console.log("The numbers are equal.");
        } else {
            console.log(a);
        }
    }
    printMin(25, 8)
    printMin(3, 1)
    printMin(15, -15)
    printMin(5, 5)


    // 2. Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.
console.log("=============2==============")
    function giveEven(a, b) {
        const arr = []
    
        if (a < b) {
            for (let i = b; i > a; i--) {
                if (i % 2 === 0) {
                    arr.push(i)
                }
            }
        } else {
            for (let i = b; i < a; i++) {
                if (i % 2 === 0) {
                    arr.unshift(i)
                }
            }
        }
        return arr
    }
    console.log(giveEven(25, 48))
    console.log(giveEven(7, 29))
   


    //3.  Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.
console.log("=============3==============")
    function power(a, b = 2) { 
                return a**b
            }
            const result = power(3)
            console.log(result)
            console.log(power(2))
            console.log(power(18))
            console.log(power(6))
            console.log(power(12))
        

    // 4.Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.
console.log("=============4==============")
    function sumN(n) {
        let sum = 0
        for (let i = 1; i <= n; i++) {
            sum += i
        }
        return sum
    }
    console.log(sumN(3))
 
    

    // 5. Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).
console.log("=============5==============")
    function giveSum(n, m) {
        let sumEven = 0
        let sumOdd = 0
        for (let i = n; i <= m; i++) {
            if (i % 2 === 0) {
                sumEven += i
            } else {
                sumOdd += i
            }
        }
        return {
            sumEven,
            sumOdd
        }
    }
    console.log(giveSum(6, 23))
    

//6. Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов. 
//Пример: [ 'one', 'two', 'three' ] => 'three'

console.log("=============6==============")
function array(arr) {
    let max = arr[0].length
       if (arr.length === 0) {
        return null}
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i].length) {
            max = arr[i]
        } else if (arr[i].length === arr[i].length) {
          arr[i] === arr[0]      
         }
    }
     return max
}
console.log(array(["one", "two", "three", "four"]))




    