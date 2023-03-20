/** @type {import('eslint').Linter.Config} */
module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "prettier",
        "plugin:@shopify/typescript",
        "plugin:@shopify/react",
        "plugin:@shopify/prettier",
        "plugin:@shopify/node",
        // "plugin:@shopify/jest",
        "@remix-run/eslint-config",
        "@remix-run/eslint-config/node",
        "airbnb",
        "plugin:react/jsx-runtime",
    ],
    parserOptions: {
        ecmaFeatures: {
            legacyDecorators: true,
            jsx: true,
            project: "./tsconfig.json",
        },
    },
    plugins: ["@typescript-eslint", "import", "react-hooks"],
    rules: {
        "import/no-unresolved": "error",
        "import/named": "error", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md
        "import/namespace": "error", // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
        "import/default": "error",
        "import/export": "error",
        "max-len": "off",
        "no-debugger": "error",
        "no-undef": "error",
        "react/button-has-type": ["error", {}], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
        "react/prop-types": "off", // No need since we are using typescript
        "react/display-name": "off", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
        "react/no-unescaped-entities": "off", // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
        "no-console": "error",
        "no-eval": "error",
        "object-shorthand": ["error", "always", { avoidQuotes: true }],
        "no-alert": "error",
        "prefer-const": "error",
        "no-await-in-loop": "error",
        "import/newline-after-import": "error",
        "padding-line-between-statements": [
            "error",
            { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
            {
                blankLine: "any",
                prev: ["const", "let", "var"],
                next: ["const", "let", "var"],
            },
        ],
        "one-var": ["error", "never"],
        "no-empty-function": "error",
        "no-lone-blocks": "error",
        "no-return-await": "error", // https://eslint.org/docs/rules/no-return-await
        "no-useless-concat": "error",
        "require-await": "error",
        "vars-on-top": "error",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-unused-vars": [
            "error",
            { ignoreRestSiblings: true },
        ],
        "@typescript-eslint/no-use-before-define": [
            "error",
            { functions: false, classes: true, variables: false },
        ],
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/ban-ts-ignore": "off",
        "@typescript-eslint/explicit-member-accessibility": "off",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-var-requires": "off",
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
        "import/order": [
            "error",
            {
                groups: ["external", "internal"],
                "newlines-between": "always",
                alphabetize: {
                    order:
                        "asc" /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
                    caseInsensitive: true /* ignore case. Options: [true, false] */,
                },
            },
        ],
        "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
        "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
        "@babel/object-curly-spacing": "off",
        "@typescript-eslint/object-curly-spacing": "off",
        "@typescript-eslint/quotes": "off",
        quotes: "off",
        "import/extensions": "off",
    },
    overrides: [
        {
            files: ["*.ts"],
            rules: {
                "@typescript-eslint/no-var-requires": "error",
                "@typescript-eslint/explicit-function-return-type": [
                    "error",
                    { allowExpressions: true },
                ],
                "@typescript-eslint/explicit-member-accessibility": ["error"],
            },
        },
    ],
};