module.exports = {
    env: {
        "browser": true,
        "es2021": true
    },
    extends: [
        // Use this approach for our recommended rules configuration
        'plugin:@builder.io/mitosis/recommended',
      ],
    overrides: [
    ],
    plugins: ['@builder.io/mitosis'],
    parserOptions: {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    rules: {
        // Use this to configure rules individually
        '@builder.io/mitosis/css-no-vars': 'error',
      },
}
