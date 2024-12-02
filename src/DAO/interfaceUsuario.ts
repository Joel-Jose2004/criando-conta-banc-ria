export interface Conta{
    id:number,  
    saldo:number,
    num_conta:number
}

export interface Usuario{
    id:number,
    nome:string,
    conta:Conta[]

}