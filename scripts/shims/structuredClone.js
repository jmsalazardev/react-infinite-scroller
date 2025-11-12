if (typeof global.structuredClone === 'undefined') {
    try {
        const v8 = require('v8');
        /* Use v8 serialize/deserialize which behaves like structuredClone */
        global.structuredClone = (obj) => v8.deserialize(v8.serialize(obj));
    } catch (e) {
        /* Fallback to JSON (loses functions, symbols, etc) */
        global.structuredClone = (obj) => JSON.parse(JSON.stringify(obj));
    }
}