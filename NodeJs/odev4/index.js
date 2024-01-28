const fs = require('fs');


//!dosya okuma
fs.readFile('employees.json','utf8',(err,data)=> {
    err && console.log(err);

    console.log(data);
    console.log('dosya okundu')
    
    updateData(data)
})

function updateData(data) {
    const newData = '{"name": "new employee", "salary": 3000}'

    fs.writeFile('employees.json',newData,'utf8',(err)=> {
        if(err) {
            console.log(err)
            return
        } 

        console.log('Veri güncellendi')
    })
}

//!dosya silmek

// fs.unlink('employees.json',(err)=> {
//     if(err) {
//         console.log(err)
//         return
//     }
//     console.log('dosya silindi')
// })