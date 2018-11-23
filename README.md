## Project setup
```
npm install
```
npm run fix-memory-limit // 增加内存

// 这时会报错 require('../package.json').engines.node --max-old-space-size=2048 
删掉多余的 --max-old-space-size=2048

