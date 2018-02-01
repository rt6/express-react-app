# A simple react web app
Built using
- Node Express
- React
- Semantic UI

## Deploy production React App to AWS
1. Build production version of react app to build directory
```sh
npm run build
```

2. Setup AWS S3 bucket and cloud front (aws cdn)

3. Upload contents of build directory to AWS S3

4. Setup Route 53 to map to S3 bucket

## Deploy production React App on EC2 or local machine
```sh
npm run build
npm install -g serve
serve -s build
```
