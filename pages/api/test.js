import * as fs from "node:fs";
export default function handler(req, res) {
    fs.readdir("data",(err, data)=>{
        console.log('');
        res.status(200).json(data);
    })
  
}
