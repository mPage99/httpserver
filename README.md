# TypeScript HTTP Server

A lightweight, TypeScript-based HTTP server implementation built from scratch using Node.js TCP sockets. This server demonstrates low-level HTTP protocol handling without relying on Express or similar frameworks.

## ✨ Features

- 🔧 Built with TypeScript for type safety
- 🔌 Raw TCP socket handling using Node.js `net` module
- 📝 HTTP request parsing and response generation
- 🏗️ Modular architecture with separate request/response handling
- 💪 Strong typing with TypeScript interfaces

## 🛠️ Tech Stack

### Backend
- Node.js with TypeScript
- Native `net` module for TCP connections
- Custom HTTP protocol implementation
- Modern ES modules
- 
## 🚧 Coming Soon

Planned features and improvements to expand the server's functionality:

- 🧭 Route matching for dynamic paths (e.g. `/`, `/about`, `/contact`)
- ❌ 404 and 405 status code handling
- 🗂 Static file serving (HTML, CSS, JS) from a `public/` directory
- 🔍 Query parameter parsing (`/hello?name=Mike`)
- 🔀 Method-based routing support (`GET`, `POST`, etc.)
- 🔐 Simulated middleware-style request handling (e.g. logging, auth stubs)
- 🧪 Unit tests for core modules (`Request`, `Response`, routing)

Stay tuned as the project evolves into a more fully-featured web server.
## 📦 Project Structure
```
httpserver/
├── src/
│   ├── index.ts           # Main server entry point
│   ├── Request.ts         # HTTP request parsing logic (RequestObjI, RequestObj)
│   └── Response.ts        # HTTP response generation (generateResponse)
├── package.json           # Node dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── tslint.json            # Linting rules
```

## 🔧 Setup Instructions

1. Install dependencies:
``` 
bash npm install
```
2. Run the server:
```
bash npm start
``` 

Server runs at: `http://localhost:8124`

## 🚀 Development

This project uses:
- TypeScript 5.8.3
- Node.js types (@types/node 24.0.4)
- TSLint for code quality

## 🔍 Implementation Details

The server implements:
- TCP socket connection handling
- HTTP request parsing
- Response generation
- Error handling
- Custom request/response interfaces

## 📝 License

MIT

Built with 💻 and TypeScript
```
