import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import connectDB from './db/db.js'
import { getEmployees } from './routes/getEmployees.js'
import { createEmployee } from './routes/createEmployee.js'
import { deleteEmployee } from './routes/deleteEmployee.js'
import { getEmployeeById } from './routes/getEmployeeById.js'
import { searchEmployee } from './routes/searchEmployee.js'
import { updateEmployee } from './routes/updateEmployee.js'


const app = express();
const port = process.env.PORT || 8000
app.use(cors())
app.use(express.json())



connectDB();
// .then(()=>{
//     console.log(`db connected sucessfull`);
    
// })
// .catch((err) => {
//     console.log(`MongoDB Connection Failed`, err);
// })

// app.get("/",(req, res)=>{
//     res.send("wekcome")
// })
// app.get("/arsul",(req, res) =>{
//     res.send("hello");
// });

//middlewares
app.use('/employee', getEmployees);
app.use('/employee', getEmployeeById);
app.use('/employee', deleteEmployee);
app.use('/employee', updateEmployee);
app.use('/employee', createEmployee);
app.use('/searchemployee', searchEmployee)


app.listen(port,()=>{
    console.log(`Server listening on http://localhost:${port}`);
    
});

