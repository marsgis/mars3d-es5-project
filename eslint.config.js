const js = require("@eslint/js")
const globals = require("globals")
const html = require("eslint-plugin-html")
const babelParser = require("@babel/eslint-parser")
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended")

const sharedGlobals = {
  ...globals.browser,
  currentPath: "readonly",
  globalMsg: "readonly",
  globalAlert: "readonly",
  globalNotify: "readonly",
  showLoading: "readonly",
  hideLoading: "readonly",
  Cesium: "readonly",
  mars3d: "readonly",
  es5widget: "readonly",
  sendAjax: "readonly",
  L: "readonly",
  mars2d: "readonly",
  localforage: "readonly",
  turf: "readonly",
  THREE: "readonly",
  Ammo: "readonly",
  echarts: "readonly",
  Terraformer: "readonly",
  AMap: "readonly",
  BMap: "readonly",
  kgUtil: "readonly",
  shpUtil: "readonly",
  netcdfjs: "readonly",
  ol: "readonly",
  olcs: "readonly",
  mapv: "readonly",
  map: "readonly",
  $: "writable",
  haoutil: "writable",
  toastr: "writable",
  layer: "writable",
  JB: "writable",
  jeDate: "writable",
  kriging: "writable"
}

module.exports = [
  {
    ignores: [
      "lib/**",
      "dist/**",
      "node_modules/**",
      "**/*.sh",
      "**/*.md",
      "**/*.woff",
      "**/*.ttf",
      ".vscode/**",
      ".idea/**",
      "src/widgets/**/*.js",
      "public/lib/**",
      "public/temp/**",
      "src/common/*.js",
      "docs/**",
      ".husky/**",
      ".local/**",
      "bin/**",
      "Dockerfile"
    ]
  },
  js.configs.recommended,
  {
    files: ["**/*.{js,html}"],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        sourceType: "module",
        babelOptions: {
          babelrc: false,
          configFile: false,
          presets: ["@babel/preset-env"]
        }
      },
      globals: sharedGlobals
    },
    plugins: {
      html
    },
    rules: {
      "no-unused-vars": "off",
      "prefer-regex-literals": "off",
      "comma-dangle": "off",
      eqeqeq: "off",
      "no-var": "off",
      "no-useless-assignment": "off",
      camelcase: "off",
      indent: "off",
      quotes: ["error", "double", { avoidEscape: true, allowTemplateLiterals: true }],
      curly: ["error", "all"],
      "padded-blocks": "off",
      "consistent-return": "off",
      "default-case": "off",
      "block-scoped-var": "error",
      "guard-for-in": "off",
      "constructor-super": "error",
      "dot-location": ["off", "property"],
      "comma-style": ["error", "last"],
      "space-before-function-paren": "off",
      "object-curly-newline": ["error", { multiline: true, consistent: true }],
      "object-shorthand": "off",
      "computed-property-spacing": ["error", "never"],
      "no-debugger": "warn",
      "no-console": "off",
      "no-trailing-spaces": "off",
      "no-prototype-builtins": "off",
      "no-template-curly-in-string": "off",
      "no-mixed-spaces-and-tabs": "error",
      "no-new": "error",
      "no-new-wrappers": "error",
      "no-self-assign": "error",
      "no-self-compare": "error",
      "no-case-declarations": "error",
      "no-extend-native": "error",
      "no-extra-bind": "error",
      "no-extra-label": "error",
      "no-fallthrough": "error",
      "no-floating-decimal": "error",
      "no-global-assign": "error",
      "no-multi-str": "error",
      "no-const-assign": "error",
      "no-dupe-class-members": "error",
      "no-duplicate-imports": "off",
      "no-useless-constructor": "off",
      "no-useless-escape": "off",
      "no-dupe-keys": "error",
      "no-func-assign": "error",
      "no-nested-ternary": "error",
      "no-multiple-empty-lines": ["error", { max: 4 }],
      "new-cap": "off"
    }
  },
  {
    files: ["gulpfile.js", "build/**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.node
      }
    }
  },
  eslintPluginPrettierRecommended
]
