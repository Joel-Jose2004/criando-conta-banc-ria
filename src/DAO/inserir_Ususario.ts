

export function inser(name:string,email:string,password:string): void {
    
    var User = [];
    if (localStorage.hasOwnProperty("user")) {
        User = JSON.parse(localStorage.getItem("user") as string)
    }

    var id = User.length + 1;
    User.push({ id: id, nome: name, email: email, password: password });

    localStorage.setItem("user", JSON.stringify(User));
}