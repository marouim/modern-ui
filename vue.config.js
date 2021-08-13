module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    host: '0.0.0.0',
    hot: true,
    disableHostCheck: true,
    proxy: {
      "/api": {
        target:
          "https://modern-ui.apps.openshift.rhcasalab.com",
        logLevel: "debug",
        changeOrigin: true,
        secure: false,
      },
    },
  },
};
