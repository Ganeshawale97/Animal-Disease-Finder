# JeevRaksha Backend — 4.1

Backend foundation for the JeevRaksha 4.0 prototype.

## Current scope

- Node.js + Express API
- Environment configuration
- CORS configuration
- Helmet security headers
- JSON request parsing
- API health endpoint
- Basic 404 and error handling

## Run locally

Requirements:
- Node.js 20+

From the `backend` directory:

```bash
npm install
npm run dev
```

The API starts on:

`http://localhost:5000`

Test:

`GET /api/health`

Expected response:

```json
{
  "status": "ok",
  "project": "JeevRaksha",
  "version": "4.1.0"
}
```

## Next backend milestones

1. Database configuration
2. PostgreSQL schema
3. Authentication
4. Animal CRUD API
5. Health/vaccination/reminder APIs
6. Frontend API integration

The 4.0 prototype remains unchanged.
