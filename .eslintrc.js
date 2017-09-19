module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "jquery": true,
    },
    "globals": {
        "_": true,
        "$": true,
    },
    "parser": "babel-eslint",
    "rules": {
        "indent": [2, 4],
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        "react/jsx-tag-spacing": 0,
        "linebreak-style": ["error", "windows"],
        "semi": ["error", "never"],
        "class-methods-use-this": [0],
        "import/first": 0,
        "import/extensions": 0,
        "import/no-unresolved": 0,
        "import/no-extraneous-dependencies": 0,
        "import/prefer-default-export": 0,
        "react/prop-types": 0,
        "arrow-body-style": 0,
        "one-var": 0,
    },
    "extends": ["airbnb", 'plugin:react/recommended']
};