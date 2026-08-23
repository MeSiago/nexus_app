const path = require("node:path");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  presets: ["next/babel"],
  plugins: [
    [
      "@stylexjs/babel-plugin",
      {
        dev: isDevelopment,
        runtimeInjection: false,
        enableInlinedConditionalMerge: true,
        treeshakeCompensation: true,
        aliases: { "@/*": [path.join(__dirname, "*")] },
        unstable_moduleResolution: { type: "commonJS" },
      },
    ],
  ],
};
