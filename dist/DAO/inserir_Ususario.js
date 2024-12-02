export function inser(name, email, password) {
    var User = [];
    if (localStorage.hasOwnProperty("user")) {
        User = JSON.parse(localStorage.getItem("user"));
    }
    var id = User.length + 1;
    User.push({ id: id, nome: name, email: email, password: password });
    localStorage.setItem("user", JSON.stringify(User));
}
