import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } },

    rules: {
      // Aquí puedes añadir tus reglas


      "indent": [
        "error",
        2
      ],

      "semi": ["error", "always"], // Requerir punto y coma al final de las líneas
    },

  },

  pluginJs.configs.recommended,
];