module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        '@ecomfe/eslint-config',
        '@ecomfe/eslint-config/typescript',
        '@ecomfe/eslint-config/react',
    ],
    rules: {
        'no-use-before-define': 'off',
    }
};
