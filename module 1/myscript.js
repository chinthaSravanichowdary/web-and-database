class User
{
     constructor( username , Email, Password) {
     this.Username = username ;
     this.Username = Email;
      
     this.UserPassword = Password;
     }

     getUsername(){
          return `${this.Username}`;
     }
     
     getUsername(){
        return`${this.Email}`;
     }
     getUserPassword(){
          return`${this.UserPassword}`;
     }
     setUsername(name){
          this.Username = name;
     }
     setUserPassword(Email){
        this.Email = Email;
     }
     setUserPassword(Password){
          this.UserPassword = Password;
     }
}
// class User
// {
//      constructor( username , Email , Password) {
//      this.Username = username ;
//       this.Email = Email
//      this.Password = Password;
//      }

//      getUsername(){
//           return `${this.Username}`;
//      }
//      getUserEmail(){
//           return `${this.Email}`;
//      }
     
//      getUserPassword(){
//           return`${this.Password}`;
//      }
//      setUsername(name){
//           this.Username = name;
//      }
//      setUserEmail(Email){
//           this.Email = Email;
//      }
     
//      setUserPassword(Password){
//           this.UserPassword = Password;
//      }
// }
// const p1 = new User("sravani","sravani55@gmail.com","55@sravs");
// console.log(p1);
// console.log(p1.getUsername());
// console.log(p1.getUserEmail());
// console.log(p1.getUserPassword());

// class User
// {
//      constructor( username , Password) {
//      this.Username = username ;
      
//      this.UserPassword = Password;
//      }

//      getUsername(){
//           return `${this.Username}`;
//      }
     
//      getUserPassword(){
//           return`${this.UserPassword}`;
//      }
//      setUsername(name){
//           this.Username = name;
//      }
     
//      setUserPassword(Password){
//           this.UserPassword = Password;
//      }
// }

let regForm = document.getElementById("reg-form")  
if(regForm) { regForm.addEventListener("submit",register) }
function register(e){
     e.preventDefault();
     let username = document.getElementById("username").value
     let pswd = document.getElementById("pswd").value
     let user1 = new User( username, pswd)
     console.log(user1)
}

let loginForm = document.getElementById("login-form")  
if(loginForm) { loginForm.addEventListener("submit",login) }
function login(e) {
     e.preventDefault();
     let username = document.getElementById("username").value
     let pswd = document.getElementById("pswd").value
     let mail = document.getElementById("mail").value
     let user1 = new User( username, pswd ,mail )
     console.log(user1)

}



let postForm = document.getElementById("post-form")
if(postForm) {postForm.addEventListener("submit", post)}
function post(e){
     e.preventDefault();
     let Artname = document.getElementById("artname").value
     let Fullname = document.getElementById("fullname").value
     let Subject = document.getElementById("subject").value
     let post1 = {
          artname: Artname,
          fullName: Fullname,
          subject: Subject
     }
     // let post2 = new Post(artname, fullname, subject)
     console.log(post1)
}



