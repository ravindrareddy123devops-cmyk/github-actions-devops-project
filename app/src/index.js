const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Application Health Endpoint (Used by ALB & K8s Liveness Probe)
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
    version: process.env.APP_VERSION || '1.0.0'
  });
});

// Prometheus Metrics Endpoint (Mock)
app.get('/metrics', (req, res) => {
  res.type('text/plain').send(`
# HELP http_requests_total Total number of HTTP requests
# TYPE http_requests_total counter
http_requests_total{method="GET",handler="/health"} 42
process_uptime_seconds ${process.uptime()}
  `);
});

// Sample Business Logic Endpoint
app.get('/api/v1/users', (req, res) => {
  res.json([
    { id: 'usr-1', name: 'DevOps Engineer', role: 'Administrator' },
    { id: 'usr-2', name: 'Cloud Architect', role: 'Maintainer' }
  ]);
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server started and running on port ${PORT}`);
  });
}

module.exports = app;