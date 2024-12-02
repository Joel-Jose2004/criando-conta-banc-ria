export function criar(nome, novo_sal) {
    const novoNome = nome;
    const novoSaldo = novo_sal;
    if (novoSaldo < 20000) {
        alert("Não pode abrir conta com saldo inicial menor que 20.000.");
        return;
    }
    if (!novoNome) {
        alert("Preencha todos os campos.");
        return;
    }
    const contas = JSON.parse(localStorage.getItem("conta") || "[]");
    // Gerar ID do novo usuário (baseado no tamanho do array de contas)
    const id = contas.length + 1;
    // Gerar número da conta (usando o timestamp para garantir unicidade)
    const numeroConta = `${Date.now()}`;
    const Conta = parseFloat(numeroConta.toString());
    // Criar o objeto Conta
    const novaConta = {
        id: contas.length + 1, // ID da conta
        num_conta: Conta, // Número da conta
        saldo: novoSaldo, // Saldo inicial
    };
    // Criar o objeto Usuario com a conta
    const novoUsuario = {
        id,
        nome: novoNome,
        conta: [novaConta], // Adiciona a conta ao array de contas do usuário
    };
    // Adiciona o novo usuário ao array de contas no localStorage
    contas.push(novoUsuario);
    localStorage.setItem("conta", JSON.stringify(contas));
    alert("Conta criada com sucesso!");
    window.location.href = "gerir_conta.html";
}
