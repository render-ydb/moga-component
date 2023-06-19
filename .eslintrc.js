module.exports = {
    root: true,
    env: {
        browser: true,
        commonjs: true,
        es6: true
    },
    rules: {
        "quotes":["error","double"]
    },
    extends: "eslint:recommended",
    parser: "babel-eslint",
    parserOptions: {
        ecmaVersion: 7,
        sourceType: "module"
    },
    plugins: [
        "react"
    ]
}
