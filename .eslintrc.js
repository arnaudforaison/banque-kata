module.exports = {
    "root": true,
    "env": {
        "es6": true,
        "node": true,
        "mocha": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            2,
            { 
              "SwitchCase": 1
            }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single", { "allowTemplateLiterals": true }
        ],
        "semi": [
            "error",
            "never"
        ],
        "space-before-function-paren": 1
    }
};