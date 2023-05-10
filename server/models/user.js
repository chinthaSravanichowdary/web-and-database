
const con = require("./db_connect");

async function createTable() {
  let sql = `CREATE TABLE IF NOT EXISTS users (
    userID INT NOT NULL AUTO_INCREMENT,
    userName VARCHAR(255) NOT NULL UNIQUE,
    userWeight NUMERIC,
    userHeight NUMERIC,
    password VARCHAR(255) NOT NULL,
    CONSTRAINT userPK PRIMARY KEY(userID)
  );`

  await con.query(sql);  
}

createTable();

// functions to complete CRUD operations
async function getAllUsers() {
  let sql = `SELECT * FROM users;`
  return await con.query(sql);
}



async function userExists(userName) {
  let sql = `
    SELECT * FROM users
    WHERE userName = "${userName}"
  `
  return await con.query(sql);
}


async function register(user) {
  // check to see if username is already in use
  let cUser = await userExists(user.userName);
  if(cUser.length>0) throw Error("Username already exists");

  // create new user
  let sql = `
    INSERT INTO users(userName, password)
    VALUES ("${user.userName}", "${user.password}");
  `
  await con.query(sql)

  // get user to send over
  cUser = await getUser(user)
  console.log(cUser)
  return cUser[0];
}

async function getUser(user) {
  let sql;
  if(user.userID) {
    sql = `
      SELECT * FROM users
      WHERE userID = ${user.userID};
    `
  } else {
    sql = `
      SELECT * FROM users
      WHERE userName = "${user.userName}";
    `
  }

  return await con.query(sql);
}

// edit a username function
async function editUser(user) {
  let cUser = await userExists(user.userName);
  if(cUser.length > 0) throw Error("Username in use!!");

  let sql = `
    UPDATE users 
    SET userName = "${user.userName}"
    WHERE userID = ${user.userID};
  `

  await con.query(sql)
  cUser = await getUser(user)
  return cUser[0]
}

async function deleteUser(user) {
  let sql = `
    DELETE FROM users
    WHERE userID = ${user.userID}
  `
  await con.query(sql);
}
/*
    {
       
       Username: "bpsat66" ,
       Email: "bpsat@gmail.com",
       pswd:"1234"
    }
    {
      Username: "pipon" ,
      Email: "bpsat@gmail.com",
      pswd:"vhhhv"
    
    }*/
  // let getUsers = () => users;

  async function login(user) {
    console.log(user)
    /* user {
       Username: "pipon" ,
      Email: "bpsat@gmail.com",
      pswd:vhhhv
    } */
    let cUser = await userExists(user.Username);
    console.log(cUser)
    if(!cUser[0]) throw Error("Username is in use!");
    // let eUser = users.filter(u => u.Email == user.UserMail);
    if(cUser[0].Email != user.UserMail ) throw Error("mail is in use!");
  
    if(cUser[0].pswd != user.UserPassword) throw Error("Password is incorrect!");
  
    return cUser[0];
  }
  

module.exports = { getAllUsers, login, register, editUser, deleteUser }