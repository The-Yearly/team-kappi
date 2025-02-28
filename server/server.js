const express=require("express")
const mysql=require("mysql2")
const cors=require("cors")
const app=express()
const cred={ host: "localhost",user: "root",password: "Arduino1",database:"olabs"}
app.use(express.json())
app.use(cors())
function connectMaria(){
    con = mysql.createConnection(cred);
    con.connect(function(Err){
        if(Err){
            setTimeout(connectMaria,5000)
        }else{
            console.log("Connected With Maria ;)")
        }
    })
};
connectMaria()
app.use(cors());
app.get("/test",(req,res)=>{
    res.json({message:"Hi ;)"})
})
app.post("/addUser",(req,res)=>{
    const data=req.body
    con.query('SELECT * FROM users WHERE email = ?', [data.email], (err, result) => {
        if (err) return res.status(500).send('Database error');
        if (result.length > 0) return res.status(200).send('User already exists');
        con.query(
          'INSERT INTO users (email, name, image) VALUES (?, ?, ?)',
          [data.email, data.name, data.image],
          (err) => {
            if (err) return res.status(500).send('Failed to insert user');
            return res.status(200).send('User added');
          }
        );
    })
})
app.listen(8000,()=>{
    console.log("Server Is Starting ;)")
})