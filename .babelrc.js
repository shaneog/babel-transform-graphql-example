module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV);
  
  const presets = [
    ["@babel/preset-react", { development: false }],
  ];
  const plugins = ["import-graphql"];

  return {
    presets,
    plugins,
  };
};
