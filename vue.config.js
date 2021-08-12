module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    host: '0.0.0.0',
    hot: true,
    disableHostCheck: true,
    proxy: {
      "/api": {
        target:
          "https://win2019-vs-dotnet-iis-integrations-virt.apps.openshift.rhcasalab.com",
        logLevel: "debug",
        changeOrigin: true,
        secure: false,
      },
    },
  },
};
