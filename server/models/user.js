const users = [
    {
       
       Username: "bpsat66" ,
       Email: "bpsat@gmail.com",
       pswd:"1234"
    },
    {
      Username: "pipon" ,
      Email: "bpsat@gmail.com",
      pswd:"vhhhv"
    }
       
];
let getUsers = () => users;

function login(user) {
  /* user {
     Username: "pipon" ,
    Email: "bpsat@gmail.com",
    pswd:vhhhv
  } */
  let cUser = users.filter(u => u.userName == user.userName);
  if(!cUser[0]) throw Error("Username does not exist!");
  let eUser = users.filter(u => u.Email == user.Email);
  if(!cUser[0].Email != user.Email ) throw Error("mail does not exist!");

  if(cUser[0].password != user.password) throw Error("Password is incorrect!");

  return cUser[0];
}

function randomFunction() {
  return "Hello World!";
}
module.exports = {getUsers };