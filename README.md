# Page Pulse API

Production-grade URL Audit Service that analyzes websites and provides performance and metadata insights.

Built for Digital Heroes Training Task

## Live URL

https://page-pulse-grmx.onrender.com

---

## Features

- URL auditing service
- Input validation
- Request timeout handling
- Redirect support
- Concurrency limiting
- Configurable response caching
- Client-based rate limiting
- Structured logging with request IDs
- Health monitoring endpoint
- Automated testing
- GitHub Actions CI
- Docker support

---

# Tech Stack

- Node.js
- TypeScript
- Express.js
- Axios
- Cheerio
- Pino Logger
- Jest
- Render Deployment

---

# API Contract

## 1. Health Check

### GET `/health`

Checks service availability.

### Response

```json
{
  "status": "UP",
  "timestamp": "2026-07-24T12:00:00.000Z"
}
```

---

## 2. URL Audit

### POST `/audit`

Audits a given website URL.

### Request

```json
{
  "url": "https://example.com"
}
```

### Success Response

```json
{
  "url": "https://example.com",
  "status": 200,
  "responseTime": 245,
  "title": "Example Domain",
  "contentLength": 1256,
  "headers": {}
}
```

---

## Error Response

Example:

```json
{
  "error": "Invalid URL",
  "message": "Please provide a valid URL"
}
```

---

# Environment Variables

Create a `.env` file:

```env
PORT=3000

REQUEST_TIMEOUT=5000

CACHE_TTL=300

CONCURRENCY_LIMIT=10

RATE_LIMIT_WINDOW_MS=60000

RATE_LIMIT_MAX=100
```

---

# Running Locally

## Install dependencies

```bash
npm install
```

## Development mode

```bash
npm run dev
```

## Production build

```bash
npm run build
```

## Start server

```bash
npm start
```

---

# Testing

Run:

```bash
npm test
```

Current test coverage includes:

- Health endpoint validation
- Audit endpoint behavior
- API response verification

---

# CI/CD

GitHub Actions automatically runs:

- Dependency installation
- TypeScript build
- Test execution

on every push and pull request.

---

# Production Design

The service uses:

- In-memory caching for repeated URL audits
- Rate limiting to prevent abuse
- Concurrency control to protect resources
- Request IDs for request tracing
- Structured logs for debugging

---

# Docker Support

Build image:

```bash
docker build -t page-pulse .
```

Run:

```bash
docker run -p 3000:3000 page-pulse
```

---

## Footer Credit

Built for Digital Heroes Training Task

https://digitalheroesco.com