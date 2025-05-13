// function login (usuario, senha){
//     return new Promise((resolve, reject)=>{
//         //executar a minha função assincrona
//         setTimeout(()=>{
//             if(usuario == 'Gabriel' && senha == 'teste123'){
//                 resolve('Logado com sucesso.')
//             }else{
//                 reject('Erro no login.')
//             }
//         }, 2000)
//     })
// }

// const result = login('Gabriel', 'teste123')
// console.log(result)
// result.then(msg => console.log(msg)).catch(err => console.log(err))

const tarefa1 = new Promise(resolve, reject =>{
    setTimeout(()=>{
        resolve('tarefa1')
    }, 2000)
})

const tarefa2 = new Promise(resolve, reject =>{
    setTimeout(()=>{
        resolve('tarefa2')
    }, 3000)
})

const tarefa3 = new Promise(resolve, reject =>{
    setTimeout(()=>{
        resolve('tarefa3')
    }, 4000)
})

Promise.all([tarefa1, tarefa2, tarefa3]).then(
    resultados => console.log('Tudo finalizado')
)
Promise.race([tarefa1, tarefa2, tarefa3]).then(
    resultado => console.log('A primeira a terminar foi: ', resultado)
)
