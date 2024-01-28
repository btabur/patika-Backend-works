const fs = require('fs');


//!dosya okuma
// fs.readFile('text.txt','utf8',(err,data)=> {
//     err && console.log(err);

//     console.log(data);
//     console.log('dosya okundu')
// })

 //! dosya yazmak

// fs.writeFile('example.txt','kodluyoruzzz', 'utf8',(err)=> {
//     err && console.log(err)

//     console.log('Dosya yazıldı')
// })


// fs.writeFile('example.json','{ "name":"Ahmet", "email":"ahmet@gmail.com"}', 'utf8',(err)=> {
//     err && console.log(err)

//     console.log('Dosya json yazıldı')
// })

 //!veri eklemek
// fs.appendFile('text.txt','\n dosyaya yeni veri ekleme','utf8',(err)=> {
//     err && console.log(err);
//     console.log('yeni veri eklendi')
// })

//!dosya silmek

// fs.unlink('example.json',(err)=> {
//     err && console.log(err)
//     console.log('dosya silindi')
// })

//! klasörler oluşturma

// fs.mkdir('uploads/img',{recursive:true},(err)=> {
//     err && console.log(err)

//     console.log('klasörler oluşturuldu')
// })

//!klasörleri silme

fs.rm ('uploads',{recursive:true},(err)=> {
    err && console.log(err)

    console.log('klasörler silindi')
})
