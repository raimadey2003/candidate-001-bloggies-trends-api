# candidate-001-bloggies-trends-api

Trend Scraper module for Bloggies Viral Engine

## 🧩 Module Overview

This API fetches the top-10 trending topics from:
- Twitter (X)
- Reddit
- Google Trends

### Endpoint
---


Returns an array like:


```json
[
  { "source": "Twitter", "topic": "#Budget2025" },
  { "source": "Reddit", "topic": "r/AskReddit: Strangest Habit" },
  ...
]
```
### ⚙️ Ecosystem Integration
---
✅ Calls POST /api/award-credit (mocked with graceful error handling if API unreachable)

✅ Raffle widget auto-loads via <script> on page load (fails silently if unreachable)

### 🛠️ Setup Instructions
----
```
git clone https://github.com/raimadey2003/candidate-001-bloggies-trends-api.git
cd candidate-001-bloggies-trends-api
npm install
npm run dev
```
###🌐 Public Deployment
---
candidate-001-bloggies-trends-api.vercel.app

Deployed on Vercel


