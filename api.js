const express=require('express');
const 
    {   userRegister,
        userLogin,
        findAll,
        findUserByName,
        findUserBySkills,
        findUserByExperience,
        findUserByArea,
        findUserByAreaBySkill,
        updatePasswordMail,
        updatePasswordByPhonenumber,
        updateDetails,
        deleteUser
    }=require('./db.js');

const api=express();
const url=require('url');



// cors policy..

const cors=require('cors');

const policy={
    origin:'http://localhost:4200',
    methods:'GET,POST',
    credentials:true,
    optionsSuccess:204

}

api.use(cors(policy));




// ===============================================

api.use(express.static('./..assets'));

const multer=require('multer');
const path=require('path');
const bodyparser=require('body-parser');

api.use(bodyparser.urlencoded({extended:false}));
api.use(bodyparser.json);

var storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./..assets");
    },
    filename:function(req,file,cb){
    
        cb(null,Date.now()+path.extname(file.originalname));
    }
})

var upload=multer({storage:storage}).single('file');




api.post('/file',function(req,res){

    alert('Yes reached to it');

    upload(req,res,(err)=>{
        if(err){
            console.log(err);
        }
    })

});




// ================================================









api.get('/userRegister',async function(req,res){

    const data=url.parse(req.url,true);
        // {'username':'','usermail':'','userpassword':'','cuserpassword':'','phonenumber':'','profilephoto':'', 'age':'', 'area':'', 'skills':'', 'experience':'', 'workphotos':'' }

    var query=
    {'username':data.query.username,'usermail':data.query.usermail,'userpassword':data.query.userpassword,'cuserpassword':data.query.cuserpassword,'phonenumber':data.query.phonenumber,'profilephoto':data.query.profilephoto, 'age':data.query.age, 'area':data.query.area, 'skills':data.query.skills, 'experience':data.query.experience, 'workphotos':data.query.workphotos};
    const result=await userRegister(query);

    console.log('data returned');
    res.send(result);


})

api.get('/userLogin',async function(req,res){

    const data=url.parse(req.url,true);
    // {'username':'','password':''}

    var query={'username':data.query.username,'userpassword':data.query.userpassword};
    const result=await userLogin(query);
    res.send(result);
})

api.get('/findAll',async function(req,res){

    const result=await findAll();
    res.send(result);
})

api.get('/findUserByName',async function(req,res){

    const data=url.parse(req.url,true);
    var query={'username':data.query.username};
    const result=await findUserByName(query);
    res.send(result);
})

api.get('/findUserBySkills',async function(req,res){

    const data=url.parse(req.url,true);
    var query={'skills':data.query.skills};
    const result=await findUserBySkills(query);
    res.send(result);
})

api.get('/findUserByExperience',async function(req,res){

    const data=url.parse(req.url,true);
    var query={'experience':data.query.experience};
    const result=await findUserByExperience(query);
    res.send(result);
})

api.get('/findUserByArea',async function(req,res){

    const data=url.parse(req.url,true);
    var query={'area':data.query.area};
    const result=await findUserByArea(query);
    res.send(result);
})

api.get('/findUserByAreaBySkill',async function(req,res){

    const data=url.parse(req.url,true);
    var query={'area':data.query.area,'skills':data.query.skills};
    const result=await findUserByAreaBySkill(query);
    res.send(result);
})

api.get('/updatePasswordMail',async function(req,res){

    const data=url.parse(req.url,true);
    var query={'usermail':data.query.usermail,'password':data.query.password};
    const result=await updatePasswordMail(query);
    res.send(result);
})

api.get('/updatePasswordByPhonenumber',async function(req,res){

    const data=url.parse(req.url,true);
    var query={'phonenumber':data.query.phonenumber,'usermail':data.query.usermail};
    const result=await updatePasswordByPhonenumber(query);
    res.send(result);
})

api.get('/updateDetails',async function(req,res){

    const data=url.parse(req.url,true);
    // {'username':'', 'usermail':'', 'phonenumber':'', 'profilePhoto':'', 'age':'', 'area':'', 'skills':'','experience':''}

    var query={'username':data.query.username, 'usermail':data.query.usermail, 'phonenumber':data.query.phonenumber, 'profilePhoto':data.query.profilephoto, 'age':data.query.age, 'area':data.query.area, 'skills':data.query.skills,'experience':data.query.experience};
    const result=await updateDetails(query);
    res.send(result);
})


api.get('/deleteUser',async function(req,res){

    const data=url.parse(req.url,true);
    var query={'username':data.query.username};
    const result=await deleteUser(query);
    res.send(result);
})




api.listen(2000,function(){
    console.log('Server started');

})

