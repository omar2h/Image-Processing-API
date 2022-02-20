# Image-Processing-API
## Overview
This is the first project of udacity's advanced full-stack web development nanodegree. It is a simple placeholder API that allows us to place images into our frontend with the size set via url parameters.
## Requirements
* **Node.js**
### List of all dependencies used
* **TypeScript**
* **express**
* **ts-node-dev**
* **eslint**
* **prettier**
* **eslint-config-prettier eslint-plugin-prettier**
* **jasmine**
* **SuperTest**
* **sharp**
## Build, start and Test
### 1. Install all dependencies
```
npm install
```
### 2. Build
```
npm run build
```
### 3. Start
``` 
npm run start
```
### 4. Test
```
npm run test
```
## Endpoints
Endpoint to resize image
```
http://localhost:3000/api/images
```
As an example:
```
http://localhost:3000/api/images?filename=fjord&width=100&height=200
```
