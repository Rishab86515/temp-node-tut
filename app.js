
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
console.log('started a first task')
const first =readFile('./content/first.txt','utf8',(err,result)=>{
  if(err)
  {
    console.log(err)
    return
  }
  const first=result;
  console.log(first)
  readFile('./content/second.txt','utf8',(err,result)=>{
    if(err)
    {
      console.log(err)
      return
    }
    const second=result;
  console.log(second)
  writeFile('./content/result-async.txt',
  `here is the result: ${first},${second}`,(err,result)=>{
    if(err){
      console.log(err)
    return 
    }
    else
    console.log(result)
  })
  })
})
console.log('Starting the next task')
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


/*
const _ = require('lodash')

const items=[1,[2,[3,[4]]]]
const newItems=_.flattenDeep(items)
console.log(newItems)
*/

/*
some git thngs
.gitignore is a file which ignores which files not to push
git init
git add .
git commit -m "first commit"


git remote add origin https://github.com/Rishab86515/temp-node-tut.git
git branch -M main
git push -u origin main
*/


/*
how to run clone
git clone https://github.com/Rishab86515/temp-node-tut.git

npm install
*/
/*
dev dependinecied(we use it only during making not in production)
testing packages
npm i nodemon -D   ->saving it as a dev dependies

*/
console.log('hello pople')

/*we added in package-json in scripts
"start":"node app.js",           //npm start
  "dev":"nodemon app.js"
  npm run dev
   */

  // npm unistall name

/*
global dep
better use npx
*/








//Event Loop


//the event loop is what allows node.jd to perform non-blocking I/0 operation depite the fact that JS iss single-threaded -y offloading operations to the system kernel whenver posible


//call stack
// w offload things from call stack to mesage queue using async
//message queue

/*
setInterval(() => {
  console.log('hello world')
}, 1000)
console.log('I will run first')
//setInterval is ascynronus
*/

/*
//HTTP Module
const http=require('http');
const server=http.createServer((req,res)=>{
  console.log('request event')
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

server.listen(5000,()=>{
  console.log('Server listening on port:5000....')
})
*/
/*
//just showing why async is nessary
const http=require('http');
const server=http.createServer((req,res)=>{
  if (req.url === '/') {
    res.end('Welcome to our home page')
  } else if (req.url === '/about') {
    //Blocking code
    for(let i=0;i<1000;i++){
      for(let j=0;j<1000;j++)
      {
        console.log(`${i} ${j}`)
      }
    }
    res.end('Here is our short history')
  } else {
    res.end('Error page')
  }
})
server.listen(5000,()=>{
  console.log('Server Listerning on port 5000...')
})
*/



/*

CONVERTNG THE CALLBACKS TO ASYN AWAIT

const {readFile,writeFile}=require('fs');
/*
//basically we don't need to write this getText also
//there is a functon in utils promisify that does all
//the work for us
const getText=(path)=>{
  return new Promise((resolve,reject)=>{
    readFile(path,'utf8',(err,data)=>{
      if(err){
        reject(err)
      }else{
        resolve(data)
      }
    })
  }
  )}
*//*
//getText('./content/first.txt')
//  .then(result=>console.log(result))
//  .catch(err=>console.log(err))
const util=require('util');
const readFilePromise=util.promisify(readFile)
const writeFilePromise=util.promisify(writeFile)
const start=async()=>{
  try{
  const first=await readFilePromise('./content/first.txt','utf8')
  const second=await readFilePromise('./content/second.txt','utf8')
  await writeFilePromise('./content/result-asynawait',
  `This is Awesome:${first} ${second}`,{flag:'a'})
  console.log(first)
  console.log(second)
  }
  catch(error){
    console.log(error)
  }
}
start()
*/



/*
//EVENTS
const EventEmitter=require('events')
const customEmitter=new EventEmitter();
//on->-listen for an event
//emit->emit an event
customEmitter.on('response',()=>{
  console.log(`data recived`)
})
// we can have as many functions wich are listenting for the same event and doing other stuff
customEmitter.on('response',(name,id)=>{
  console.log(`some othewr logic ${name} ${id}`)
})
//we first listen to the event and then emit it the order matters

customEmitter.emit('response','john',34)

//bunch of inbuilt modules use event
*/


//STREAMS
/* 
Four differet types of streams
->writeable
->readable
->duplex(both write and readable)
->transform
*/
//creating a big file
/*
const{writeFileSync}=require('fs')
for(let i=0;i<10000;i++){
writeFileSync('./content/big.txt',`hello world ${i}\n`,{flag:'a'})
}*/


/*
const {createReadStream}=require('fs');
const stream=createReadStream('./content/big.txt');
// default 64kb
// last buffer- remainder
// highWaterMark - control size
// const stream= createReadStream('./content/big.txt',{highWaterMark:90000})
// controls the size of buffer

// const stream= createReadStream('./content/big.txt',{encoding:'utf8'})
stream.on('data',(result)=>{
  console.log(result)
})
stream.on('error',(err)=>console.log(err))
*/





/*
var http = require('http')
var fs = require('fs')

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
    fileStream.on('open', () => {
      fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
      res.end(err)
    })
  })
  .listen(5000)
*/
