const http = require('http');

const server = http.createServer((req,res)=> {

    const url = req.url

   if(url ==='/') {
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write('<h1>Ana Sayfa ya hoşgeldiniz</h1>')
   }else if(url ==='/about') {
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write('HAkkımızda sayfasına hoşgeldiniz')
   }else if(url ==='/contact') {
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write('iletişim sayfasına hoşgeldiniz')
   }else {
    res.writeHead(404,{'Content-Type':'text/html'})
    res.write('404')
   }


    console.log('Bir istek gönderildi')
   
    res.end()

})

const port = 3000;

server.listen(port,()=> {
    console.log(`Sunucu port ${port} de başlatıldı`)

})

// yeni bir  şey yazıldığında ctrl+c ile önce server durdurulur sonra tekrar başlatılır.