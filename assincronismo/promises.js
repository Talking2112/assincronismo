function login (usuario, senha){
    return new Promise((resolve, reject)=>{
        //executar a minha função assincrona
        setTimeout(()=>{
            if(usuario == 'Gabriel' && senha == 'teste123'){
                resolve('Logado com sucesso.')
            }else{
                reject('Erro no login.')
            }
        }, 2000)
    })
}

const result = login('Gabriel', 'teste123')
console.log(result)
result.then(msg => console.log(msg)).catch(err => console.log(err))