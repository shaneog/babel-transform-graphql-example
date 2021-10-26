const path = require("path");
const fs = require("fs");
const babel = require("@babel/core");
const babelPreset = require("../.babelrc");

const graphqlInput = fs.readFileSync(
  path.join(__dirname, "./fixtures/graphql.js")
);

describe("My Babel preset", () => {
  test.only("transpiles GraphQL code properly", () => {
    const output = babel.transform(graphqlInput, {
      configFile: false,
      envName: "production",
      presets: [babelPreset],
    });

    expect(output.code).toMatchSnapshot();
  });
});
