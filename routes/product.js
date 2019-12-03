const express=require('express');
const db=require('../db');
const utils=require('../util');

const router=express.Router()

router.get('/',(request,response)=>
{
    const connection=db.connect();
    const statement='select id,title,discription,price from product';
    connection.query(statement,(error,data)=>
    {
        connection.end();
        response.send(utils.createResult(error,data));
    });
});
router.post('/',(request,response)=>
{
    const{title,description,price}=request.body;
    const connection=db.connect();
    const statement=`insert into product(title,discription,price) values('${title}','${discription}',${price})`;
    connection.query(statement,(error,data)=>
    {
        connection.end();
        response.send(utils.createResult(error,data));
    });
});
module.exports=router;
