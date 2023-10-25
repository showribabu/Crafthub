const express =require( 'express');
const { userRegister, userLogin, findAll, findUserByName, findUserBySkills, findUserByExperience, findUserByArea, findUserByAreaBySkill, updatePasswordMail, updatePasswordByPhonenumber, updateDetails, deleteUser } = require('./db').default;

const api=express();
const url=require("url");
const cors =require("cors");



api.get('/userRegister',async function(req,res){

    const data=url.parse(req.url,true);
    
    var query={};
    const result=await userRegister(query);
    res.send(result);
});

api.get('/userLogin',async function(req,res){

    const data=url.parse(req.url,true);
    var query={};
    const result=await userLogin(query);
    res.send(result);
})

api.get('/userLogin',async function(req,res){

    const data=url.parse(req.url,true);
    var query={};
    const result=await userLogin(query);
    res.send(result);
})

api.get('/findAll',async function(req,res){

    
    const result=await findAll();
    res.send(result);
})

api.get('/findUserByName',async function(req,res){

    const data=url.parse(req.url,true);
    var query={};
    const result=await findUserByName(query);
    res.send(result);
})

api.get('/findUserBySkills',async function(req,res){

    const data=url.parse(req.url,true);
    var query={};
    const result=await findUserBySkills(query);
    res.send(result);
})

api.get('/findUserByExperience',async function(req,res){

    const data=url.parse(req.url,true);
    var query={};
    const result=await findUserByExperience(query);
    res.send(result);
})

api.get('/findUserByArea',async function(req,res){

    const data=url.parse(req.url,true);
    var query={};
    const result=await findUserByArea(query);
    res.send(result);
})

api.get('/findUserByCategory',async function(req,res){

    const data=url.parse(req.url,true);
    var query={};
    const result=await findUserByCategory(query);
    res.send(result);
})

api.get('/findUserByAreaBySkill',async function(req,res){

    const data=url.parse(req.url,true);
    var query={};
    const result=await findUserByAreaBySkill(query);
    res.send(result);
})

api.get('/updatePasswordMail',async function(req,res){

    const data=url.parse(req.url,true);
    var query={};
    const result=await updatePasswordMail(query);
    res.send(result);
})

api.get('/updatePasswordByPhonenumber',async function(req,res){

    const data=url.parse(req.url,true);
    var query={};
    const result=await updatePasswordByPhonenumber(query);
    res.send(result);
})

api.get('/updateDetails',async function(req,res){

    const data=url.parse(req.url,true);
    var query={};
    const result=await updateDetails(query);
    res.send(result);
})


api.get('/deleteUser',async function(req,res){

    const data=url.parse(req.url,true);
    var query={};
    const result=await deleteUser(query);
    res.send(result);
})




api.listen(2000,function(){
    console.log('Server started');

})

