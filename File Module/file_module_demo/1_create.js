const fs=require('fs');
const content=fs.writeFileSync('demo.txt', 'Hello, World!');
console.log('File created successfully!',content);