const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://127.0.0.1:27017");
const dbName = "craftshub";
const collectionName = "crafts";

async function userRegister(query) {
    // {'username':'','usermail':'','userpassword':'','phonenumber':'','profilePhoto':'', 'age':'', 'area':'', 'skills':'', 'experience':'', 'workphotos':'' }
    await client.connect();
    const db = client.db(dbName);
    const coll = db.collection(collectionName);
    if (query.password === query.cpassword) {
        const res1 = await coll.find({ mail: query.mail }).toArray();
        if (res1.length == 0) {
            const res2 = await coll.find({ username: query.username }).toArray();
            if (res2.length == 0) {
                await coll.insertOne(query);
                return { message: "User regisered" };
            } else {
                return { message: "Username already Taken" };
            }
        } else {
            return { message: "Already Exists" };
        }
    } else {
        return { message: "Password not matched." };
    }
}

async function userLogin(query) {
    // {'username':'','password':''}
    await client.connect();
    const db = client.db(dbName);
    const coll = db.collection(collectionName);
    const res1 = await coll.find({ username: query.username }).toArray();
    if (res1.length > 0) {
        if (res1[0].password == query.password) {
            return { message: "Login Successful" };
        } else {
            return { message: "Invalid Login" };
        }
    } else {
        return { message: "No users Found, Register First." };
    }
}

async function findAll() {
    await client.connect();
    const db = client.db(dbName);
    const coll = db.collection(collectionName);
    const res1 = await coll.find().toArray();
    if (res1.length > 0) {
        return { message: res1 };
    } else {
        return { message: "No Users" };
    }
}

async function findUserByName(query) {
    // {'username':''}
    await client.connect();
    const db = client.db(dbName);
    const coll = db.collection(collectionName);
    const res1 = await coll.find({ username: query.username }).toArray();
    if (res1.length > 0) {
        return { message: res1 };
    } else {
        return { message: "No user" };
    }
}

async function findUserBySkills(query) {
    //{'skills':}
    await client.connect();
    const db = client.db(dbName);
    const coll = db.collection(collectionName);
}

async function findUserByExperience(query) {
    // {'experience':''}
    await client.connect();
    const db = client.db(dbName);
    const coll = db.collection(collectionName);
    const res1=await coll.find({experience:query.experience}).toArray();
    if(res1.length>0){
        return {'message':res1};
    }else{
        return {'message':'No user with that experience.'}
    }
}

async function findUserByCategory(query) {
    // {'category':''}
    await client.connect();
    const db = client.db(dbName);
    const coll = db.collection(collectionName);
    const res1=await coll.find({category:query.category}).toArray();
    if(res1.length>0){
        return {'message':res1};
    }else{
        return {'message':'No user with that category.'}
    }
}

async function findUserByArea(query) {
    // {'area':''}
    await client.connect();
    const db = client.db(dbName);
    const coll = db.collection(collectionName);
    const res1=await coll.find({area:query.area}).toArray();
    if(res1.length>0){
        return {'message':res1};
    }else{
        return {'message':'No user in that area.'}
    }
}

async function findUserByAreaBySkill(query) {
    // {'area':'','skills':''}
    await client.connect();
    const db = client.db(dbName);
    const coll = db.collection(collectionName);
    const res1=await coll.find({area:query.area}).toArray();
    if(res1.length>0){
        const res2=await coll.find({skill:query.skill}).toArray();
        if(res2.length>0){
            return {'message':res2};
        }else{
            return {'message':`No user with that skill:${query.skill} in area ${query.area}`};
        }
    }else{
        return {'message':'No user in that area.'}
    }
    
}

async function updatePasswordMail(query) {
    // {'usermail':''}
    await client.connect();
    const db = client.db(dbName);
    const coll = db.collection(collectionName);
    const res1 = await coll.find({ mail: query.mail }).toArray();

    if (res1.length > 0) {
        if (res1[0].password == query.password) {
            return { message: "Password Exist, give another password" };
        } else {
            const res2 = await coll.updateOne(
                { mail: query.mail },
                { $set: { password: query.password } }
            );
            return { message: "Password Updated." };
        }
    } else {
        return { message: "No such user exist." };
    }
}

async function updatePasswordByPhonenumber(query) {
    // {'phonenumber':}
    await client.connect();
    const db = client.db(dbName);
    const coll = db.collection(collectionName);
    const res1 = await coll.find({ phone: query.phone }).toArray();

    if (res1.length > 0) {
        if (res1[0].password == query.password) {
            return { message: "Password Exist, give another password" };
        } else {
            const res2 = await coll.updateOne(
                { phone: query.phone },
                { $set: { password: query.password } }
            );
            return { message: "Password Updated." };
        }
    } else {
        return { message: "No such user exist." };
    }
}

async function updateDetails(query) {
    // {'username':'', 'usermail':'', 'phonenumber':'', 'profilePhoto':'', 'age':'', 'area':'', 'skills':'','experience':''}
    await client.connect();
    const db = client.db(dbName);
    const coll = db.collection(collectionName);
    const res1 = await coll.find({ username: query.username }).toArray();

    if (res1.length > 0) {
        const res2 = await coll.updateOne(
            { username: query.username },
            {
                $set: {
                    password: query.password,
                    mail: query.mail,
                    phone: query.phone,
                    photo: query.photo,
                    age: query.age,
                    area: query.area,
                    skills: query.skills,
                    experience: query.experience,
                },
            }
        );
        return { message: "User details Updated." };
    } else {
        return { message: "No users to update." };
    }
}

async function deleteUser(query) {
    // {'username':'','userpassword':''}

    await client.connect();
    const db = client.db(dbName);
    const coll = db.collection(collectionName);
    const res1 = await coll.find({username: query.username}).toArray();
    if (res1.length != 0) {
        const delRes = await coll.deleteOne(query);
        return { "deleted :": query };
    } else {
        return { message: "No such record" };
    }
}

export default {
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
    deleteUser,
    findUserByCategory
};
