export function confirm(name, password) {
    const User = JSON.parse(localStorage.getItem("user"));
    const contaSelecionada = User.find(c => c.nome === name && c.password === password);
    if (contaSelecionada) {
        alert("Conta Encontrada");
        const authToken = 'seu_token_gerado'; // Exemplo de token
        sessionStorage.setItem('authToken', authToken); // Armazenando no localStorage
        window.location.href = "../html/exe.html";
    }
    else {
        alert("Não encontrado");
    }
}
