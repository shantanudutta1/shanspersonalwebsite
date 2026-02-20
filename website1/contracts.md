# LiltStack Website - Backend Integration Contracts

## Overview
This document outlines the API contracts and integration plan to connect the frontend with backend functionality.

## Current Mock Data (to be replaced)
Location: `/app/frontend/src/mock.js`

### Mock Data Structure:
1. **Services** - 6 service offerings with title, description, and icon
2. **Projects** - 4 case studies with challenge, solution, and results
3. **Testimonials** - 3 client testimonials with quotes and author details
4. **Stats** - 4 statistical metrics (50+ clients, 200+ tools, 3.5x ROI, 98% satisfaction)

## API Endpoints to Implement

### 1. GET `/api/services`
**Purpose**: Fetch all services
**Response**:
```json
[
  {
    "id": "string",
    "title": "string",
    "description": "string",
    "icon": "string"
  }
]
```

### 2. GET `/api/projects`
**Purpose**: Fetch all case studies/projects
**Response**:
```json
[
  {
    "id": "string",
    "title": "string",
    "company": "string",
    "challenge": "string",
    "solution": "string",
    "result": "string",
    "category": "string"
  }
]
```

### 3. GET `/api/testimonials`
**Purpose**: Fetch all client testimonials
**Response**:
```json
[
  {
    "id": "string",
    "quote": "string",
    "author": "string",
    "role": "string",
    "company": "string"
  }
]
```

### 4. POST `/api/contact`
**Purpose**: Handle contact form submissions
**Request Body**:
```json
{
  "name": "string",
  "email": "string",
  "company": "string (optional)",
  "message": "string"
}
```
**Response**:
```json
{
  "success": true,
  "message": "Contact form submitted successfully"
}
```

## MongoDB Collections

### 1. `services`
- Fields: id, title, description, icon, createdAt, updatedAt

### 2. `projects`
- Fields: id, title, company, challenge, solution, result, category, createdAt, updatedAt

### 3. `testimonials`
- Fields: id, quote, author, role, company, createdAt, updatedAt

### 4. `contacts`
- Fields: id, name, email, company, message, status (new/read/responded), createdAt, respondedAt

## Frontend Integration Changes

### Files to Update:
1. `/app/frontend/src/components/Services.js` - Replace mock import with API call
2. `/app/frontend/src/components/Projects.js` - Replace mock import with API call
3. `/app/frontend/src/components/Testimonials.js` - Replace mock import with API call
4. `/app/frontend/src/components/Contact.js` - Connect form to POST endpoint

### Integration Pattern:
- Use React `useEffect` hook to fetch data on component mount
- Add loading states while fetching
- Add error handling for failed requests
- Use axios (already installed) for API calls
- Use REACT_APP_BACKEND_URL environment variable for base URL

## Implementation Steps

1. **Backend Setup**:
   - Create Pydantic models for all collections
   - Implement GET endpoints for services, projects, testimonials
   - Implement POST endpoint for contact form
   - Add initial seed data to MongoDB from mock.js

2. **Frontend Integration**:
   - Create API utility functions in `/app/frontend/src/api/`
   - Replace mock imports with API calls in components
   - Add loading and error states to components
   - Test all API integrations

3. **Testing**:
   - Verify all GET endpoints return correct data
   - Test contact form submission
   - Ensure error handling works correctly
   - Verify loading states display properly
