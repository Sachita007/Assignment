# Blog Analytics API with Expiring Cache

This API allows clients to fetch blog analytics and perform blog searches, offering efficient results retrieval through a caching mechanism.

## Features

- Fetch blog analytics including:
  - Total number of blogs.
  - Blog with the longest title.
  - Number of blogs containing the word "privacy" in their titles.
  - Array of unique blog titles.
  
- Search for blogs based on a query string.
  
- In-built caching mechanism using a custom-built expiring cache with `lodash.memoize` to ensure performance while maintaining data freshness.

## Getting Started

### Prerequisites

- Node.js installed.
- Packages: `lodash`, `axios`, and `express`.

### Installation

1. Clone the repository.
2. Install the dependencies:
\```bash
npm install
\```
3. Start the server:
\```bash
node app.js
\```

## API Endpoints

1. **Blog Analytics**: 
   - **Endpoint**: `/api/blog-stats`
   - **Method**: `GET`
   - **Description**: Retrieves various blog analytics.
   
2. **Blog Search**:
   - **Endpoint**: `/api/blog-search?query=<SEARCH_TERM>`
   - **Method**: `GET`
   - **Description**: Searches for blogs based on the provided query string. The search is case-insensitive.
   
## Caching Mechanism

To ensure quick response times, a custom-built expiring cache utility was developed around `lodash.memoize`. The cache currently has a default TTL (time-to-live) of 60 seconds, meaning that the results of any API call are stored for 60 seconds. If the same request is made within this period, the cached result is returned, eliminating the need for data re-fetching and re-analysis. After the TTL, the cache for that particular request is cleared, ensuring data freshness for subsequent calls.


