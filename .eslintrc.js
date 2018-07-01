module.exports = {
    extends: "airbnb-base",
    // plugins: ["mocha"],
    env: {
        es6: true
    },
    rules: {
        "no-extend-native": "off",
        "func-names": "off",
        "no-param-reassign": "off",
    },
    overrides: [{
        files: [
            "**/*Spec.js"
        ],
        env: {
            mocha: true
        },
        plugins: ["mocha"],
        rules: {
            "mocha/no-exclusive-tests": "error"
        }
    }],

};