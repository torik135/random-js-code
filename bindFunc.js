/**
 * Create function that copy the functionality of Function.prototype.bind.
 */

function bindFunc(fn, context) {
    const result = (...args) => fn.apply(context, args);
    return result;
}

const bindExp = (fn, context) => (...args) => fn.apply(context, args);

function logging() {
    console.log(this);
};

const bindExample = bindFunc(logging, { x: true });
console.log(bindExample.call({ b: true }));

const bindExample2 = bindExp(logging, { x: true });
console.log(bindExample2.call({ b: true }));
