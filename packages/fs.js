const fs= require('fs');
const path= require('path');


//create a folder

// fs.mkdir(path.join(__dirname,'/test'),function(err){
//     if(err) throw err;
//     console.log("folder got created")
// })

fs.writeFileSync(path.join(__dirname,'test','hello.txt'),'hello world2',(err)=>{
 
    if(err) throw err;
    console.log("write sucessful")
    })

    fs.appendFileSync(path.join(__dirname,'test','hello.txt'),'avenger',function(err){
            if(err) throw err;
            console.log("append sucessful")
        })
fs.readFileSync(path.join(__dirname,'test','hello.txt'),'utf8',(err,data)=>{
    if(err) throw err;
      console.log(data)
})

fs.rename(path.join(__dirname,'test','hello.txt'),path.join(__dirname,'test','swadhin.txt'),(err)=>{
    if(err) throw err;
      console.log("rename succesfull")
})