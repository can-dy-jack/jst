export function filter(predicateFn, array) {
    if (len(array) === 0) return []; 
    const firstItem = head(array);
    const filteredFirst = predicateFn(firstItem) ? [firstItem] : [];
    return concat(filteredFirst, filter(predicateFn, tail(array)));
}
export function map(fn, array) {
    if(length(array) === 0) return [];
    return [fn(head(array))].concat(map(fn, tail(array)));
}
export function reduce(reducerFn, initialValue, array) {
    if (length(array) === 0) return initialValue;
    const newInitialValue = reducerFn(initialValue, head(array));
    return reduce(reducerFn, newInitialValue, tail(array));
}

// helper functions
export function len(arr) {
    return arr.length;
}
export function concat(arr1, arr2) {
    return arr1.concat(arr2);
}
export function head(arr) {
    return arr[0];
}
export function tail(arr) {
    return arr.slice(1);
}
