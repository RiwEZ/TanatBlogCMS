module.exports = {
  apps: [
    {
      name: "app",
      script: "./server.js",
      instance: "max",
      exec_moode: "cluster",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
