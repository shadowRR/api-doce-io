'use strict';

const hooks = require( 'feathers-hooks' );

exports.before = {
    all: [],
    find: [
        hooks.disable()
    ],
    get: [
        hooks.disable()
    ],
    create: [],
    update: [],
    patch: [
        hooks.disable()
    ],
    remove: []
};

exports.after = {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
};
