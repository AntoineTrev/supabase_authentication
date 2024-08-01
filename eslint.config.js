import globals from "globals";
import ESLint  from "@eslint/js";
import TSESLint from "typescript-eslint";
// import pluginVue from "eslint-plugin-vue";
// import ESLintConfigPrettier  from "eslint-config-prettier";

export default TSESLint.config(
    // {
    //     ignores: ['{dist,public}/**/*', 'node_modules']
    // },
    ESLint.configs.recommended,
    ...TSESLint.configs.strict,
    ...TSESLint.configs.stylistic,
    // ...pluginVue.configs["flat/recommended"],
    // {
    //     files: ["**/*.vue", "**/*.js", "**/*.ts", "**/*.jsx", "**/*.tsx"],
    //     linterOptions: {
    //         reportUnusedDisableDirectives: true,
    //     },
    //     languageOptions: {
    //         ecmaVersion: 2020,
    //         globals: {
    //             ...globals.browser,
    //             ...globals.node
    //         },
    //         parser: TSESLint.parser,
    //         parserOptions: {
    //             project: './tsconfig.json',
    //             extraFileExtensions: ['.vue'],
    //             sourceType: 'module',
    //         },
    //     },
    //     plugins: {
    //         "@typescript-eslint": TSESLint.plugin,
    //     },
    //     rules: {},
    // },
    // ESLintConfigPrettier,
)