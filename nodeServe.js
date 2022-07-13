const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// 获取上传文件大小,假如100M,默认每次上传10M,需要上传10次,使用slice对文件流进行分割,给每个切片添加一个标识(文件名+索引值)
// 将切片传给服务器,给每个切片添加监听事件,对已经上传的文件用localStorage进行存储,但是要换了浏览器就不行了,可以利用数据库存储,
// 如何暂停,使用请求的abort方法实现暂停




