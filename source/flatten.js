'use strict';

/**
 * Функция, преобразующая вложенный массив в плоский массив
 * @param {Array} array - массив чисел
 * 
 * @example
 * // returns [1, 2, 3, 4]
 * flatten([1, [2, [3, 4]]]);
 * 
 * @returns {Array}
 */

const flatten = array => {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        Array.isArray(array[i]) ? arr = arr.concat(flatten(array[i])) : arr.push(array[i]);
    }
    return arr;
};
