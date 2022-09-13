// Примерный вид объекта пользователя(ваш вариант может отличаться):
// {
// name: '', //имя пользователя
// password: '', //пароль от аккаунта
// age: '', //возраст пользователя
// isLogin: false, //авторизован/неавторизован
// }
// возможные методы(ваш вариант может отличаться)
// checkUniqueUsername() //проверка на уникальность юзернейма
// checkPasswords() //сравнение правильности паролей при регистрации
// registerUser() //регистрация юзера
// checkUsersPassword() //проверка пароля от аккаунта пользователя
// loginUser() //авторизация пользователя
// updateUserAccount() //изменение аккаунта(данных) пользователя
// logoutUser() //вызод из аккаунта
// deleteUser() //удаление пользователя

//Все пользователи
let users = [
  {
    name: "ww",
    password: "22",
    age: "32",
  },
  {
    name: "ww3",
    password: "233",
    age: "23",
  },
];
//Все пользователи

//Текущий аккаунт
let user = {
  name: "", //имя пользователя
  password: "", //пароль от аккаунта
  age: "", //возраст пользователя
  isLogin: false, //авторизован/неавторизован
};
//Текущий аккаунт

let emptyUser = {
  name: "", //имя пользователя
  password: "", //пароль от аккаунта
  age: "", //возраст пользователя
  isLogin: false, //авторизован/неавторизован
};

function login() {
  if (user.isLogin === false) {
    let checkUser = {
      name: prompt("Enter your login"),
      password: prompt("Enter password"),
      age: prompt("Enter your age"),
    };
    if (
      users.find(
        item =>
          item.name == checkUser.name &&
          item.password == checkUser.password &&
          item.age == checkUser.age
      ) != undefined
    ) {
      alert("You're in!");
      user.name = checkUser.name;
      user.password = checkUser.password;
      user.age = checkUser.age;
      user.isLogin = true;
    } else {
      alert("Wrong login, password or age");
    }
  } else {
    alert("You're already logged in!");
  }
  statusBar();
}

function registration() {
  let userRegistration = {
    name: "", //имя пользователя
    password: "", //пароль от аккаунта
    age: "", //возраст пользователя
  };
  if (user.isLogin == true) {
    alert(
      "You're already logged in! Log out of your account if you want to register a new one"
    );
  } else {
    let registrationName = prompt("Enter new name");
    let checkName = users.find(item => item.name == registrationName);
    if (checkName === undefined) {
      let registrationPassword = prompt("Enter password");
      let confirmPassword = prompt("Repeat password");
      if (registrationPassword == confirmPassword) {
        let registrationAge = prompt("Enter your age");
        userRegistration.name = registrationName;
        userRegistration.password = confirmPassword;
        userRegistration.age = registrationAge;
        users.push(userRegistration);
        alert("You signed up!");
        console.log(users);
      } else {
        alert("Passwords do not match");
      }
    } else if (registrationName === null) {
    } else {
      alert("This name is already taken!");
      registration();
    }
  }
}

function statusBar() {
  document.getElementById("user__info_name").innerHTML = "Name : " + user.name;
  document.getElementById("user__info_age").innerHTML = "Age : " + user.age;
  document.getElementById("user__info_password").innerHTML =
    "Password : " + user.password;
  document.getElementById("user__info_status").innerHTML =
    "isLogin : " + user.isLogin;
}
function logOut() {
  user = emptyUser;
  statusBar();
}
function edit() {
  if (user.isLogin == false) {
    alert("Login if you want to change your information");
  } else {
    let editingVar = prompt("What do you want to change?(name, password, age)");
    if (editingVar == "name") {
      let newName = prompt("Set new name");
      user.name = newName;
      statusBar();
      users.push(user);
    } else if (editingVar == "password") {
      let newPassword = prompt("Set new password");
      user.password = newPassword;
      statusBar();
      users.push(user);
    } else if (editingVar == "age") {
      let newAge = prompt("Set new age");
      user.age = newAge;
      statusBar();
      users.push(user);
    }
  }
}
function deleteUser() {
  if (user.isLogin == false) {
    alert("Login for this function!");
  } else {
    let passwordCheck = prompt("Введите пароль");
    if (passwordCheck === user.password) {
      users.splice(
        users.findIndex(item => item.name == user.name),
        1
      );
      logOut();
    }
  }
}
