module.exports = {
  apps: [{
    name: 'blog-platform-backend',
    script: 'src/server.js',
    instances: 'max',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
      PORT: 5000
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
}; 