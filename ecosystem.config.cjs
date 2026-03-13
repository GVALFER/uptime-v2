module.exports = {
  apps: [
    {
      name: "uptime-api",
      script: "dist/src/index.js",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "300M",
      env: {
        NODE_ENV: "production",
        UPTIME_HOST: "0.0.0.0",
        UPTIME_PORT: "3105"
      }
    }
  ]
};
