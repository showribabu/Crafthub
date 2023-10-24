const {MongoClient}=require('mongodb');

const client=new MongoClient('mongodb://127.0.0.1:27017');

const dbName='craftshub';
const collectionName='crafts';


async function userRegister(query)
{
    // {'username':'','usermail':'','userpassword':'','phonenumber':'','profilePhoto':'', 'age':'', 'area':'', 'skills':'', 'experience':'', 'workphotos':'' }

    await client.connect();
    const db=client.db(dbName);
    const coll=db.collection(collectionName);
    
}

async function userLogin(query)
{
    // {'username':'','password':''}
    await client.connect();
    const db=client.db(dbName);
    const coll=db.collection(collectionName);
}

async function findAll()
{

}

async function findUserByName(query)
{
    // {'username':''}
    await client.connect();
    const db=client.db(dbName);
    const coll=db.collection(collectionName);

}


async function findUserBySkills(query)
{
    //{'skills':}
    await client.connect();
    const db=client.db(dbName);
    const coll=db.collection(collectionName);
}


async function findUserByExperience(query)
{
    // {'experience':''}
    await client.connect();
    const db=client.db(dbName);
    const coll=db.collection(collectionName);
}


async function findUserByArea(query)
{
    // {'area':''}
    await client.connect();
    const db=client.db(dbName);
    const coll=db.collection(collectionName);
}


async function findUserByAreaBySkill(query)
{
        // {'area':'','skills':''}
    await client.connect();
    const db=client.db(dbName);
    const coll=db.collection(collectionName);

}


async function updatePasswordMail(query)
{
    // {'usermail':''}
    await client.connect();
    const db=client.db(dbName);
    const coll=db.collection(collectionName);
}


async function updatePasswordByPhonenumber(query)
{
    // {'phonenumber':}
    await client.connect();
    const db=client.db(dbName);
    const coll=db.collection(collectionName);
}


async function updateDetails(query)
{
    // {'username':'', 'usermail':'', 'phonenumber':'', 'profilePhoto':'', 'age':'', 'area':'', 'skills':'','experience':''}
    await client.connect();
    const db=client.db(dbName);
    const coll=db.collection(collectionName);
}


async function deleteUser(query)
{
    // {'username':'','userpassword':''}

    await client.connect();
    const db=client.db(dbName);
    const coll=db.collection(collectionName);

}

module.exports={

    userRegister,
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
    

}







