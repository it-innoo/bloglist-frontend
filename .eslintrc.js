module.exports = {
    "env": {
        "node": true,
        "es6": true,
        "jest": true
    },
    "extends": "react-app",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        "no-underscore-dangle": ["error", { "allow": ["_id", "__v"] }],
        "no-param-reassign": ["error", { "props": false }],
        "no-console": 0
    }
};