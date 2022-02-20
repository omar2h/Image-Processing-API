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
* **fs-extra**
* **express-validator**
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
## Resources
[A better Project structure](https://medium.com/codechef-vit/a-better-project-structure-with-express-and-node-js-c23abc2d736f)

[fs-extra](https://github.com/jprichardson/node-fs-extra/tree/7edcb16a06e041826af3303f961866bf3b243dae)

[express-validator](https://express-validator.github.io/docs/check-api.html)

