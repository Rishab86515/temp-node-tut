
/*
//ctrl + j for terminal
const amount=12
if(amount<10)
console.log('small number');
else
console.log('large number');

console.log(`this is first ${amount}`);
*/

// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

/*
console.log(__dirname)
setInterval(() => {
  console.log('hello world')
}, 1000)
*/


/*
LEARNING ABOUT MODULES
const names= require('./names')
const sayHi=require('./utils')
//console.log(names)

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
*/

/*
//OS MODULE
const os=require('os');
// info about currnt user
const user=os.userInfo();
console.log(user);
console.log(`the system uptime is ${os.uptime()} seconds`);

const currentOS={
  name:os.type(),
  release:os.release(),
  totalMem:os.totalmem(),
  freeMem:os.freemem(),
}
console.log(currentOS)
*/

/*
//PATH MODULE
const path=require('path')
console.log(path.sep)
const filePath=path.join('/content','sufolder','test.txt')
console.log(filePath)
const base=path.basename(filePath)
console.log(base)
const abs=path.resolve(__dirname,'content','subfolder','test.txt')
console.log(abs)
*/


//FS MODULE SYNC
/*
const {readFileSync,writeFileSync}=require('fs')
const first =readFileSync('./content/first.txt','utf8')
const second =readFileSync('./content/second.txt','utf8')
writeFileSync(
  './content/result-sync.txt',
  `here is the result: ${first},${second}`,
  //{flag:'a'}
)
console.log(first,second)
*/



/*
//fs module asynk
const {readFile,writeFile}=require('fs')
const first =readFile('./content/first.txt','utf8',(err,result)=>{
  if(err)
  {
    console.log(err)
    return
  }
  const first=result;
  readFile('./content/second.txt','utf8',(err,result)=>{
    if(err)
    {
      console.log(err)
      return
    }
    const second=result;
  console.log(result)
  writeFile(
    './content/result-async.txt',
    `here is the result: ${first},${second}`,
    (err,result)=>{
    if(err){
      console.log(err)
    return 
    }
    else
    console.log(result)
  })
  })
})
//this is using callbacks we wll have to use promises and asyc and await
*/

/*
//HTTP Module
const http=require('http');
const server=http.createServer((req,res)=>{
  //console.log(req)
  if (req.url === '/') {
    res.end('Welcome to our home page')
  } else if (req.url === '/about') {
    res.end('Here is our short history')
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
  }
})

server.listen(5000)
*/


//npm
//modules packages dependies
// npm - global command comes with node
// npm --version

//local dependency-use it only in this particular project
//npm i <packageName>

//global dependency - use it in any project
// npm install -g <packageName>

//package.json - manifest file(stores imp info about projects/packages)
//manual approch (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y(everything default)

const _ = require('lodash')

const items=[1,[2,[3,[4]]]]
const newItems=_.flattenDeep(items)
console.log(newItems)






