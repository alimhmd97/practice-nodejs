import express from'express';
import router from './router';

const app = express();
app.get('/',(req,res)=>{
    console.log('hello from express');
    res.status(200);
    res.json({message:'Hello'});
})
export{app}; 
app.use('/api',router)