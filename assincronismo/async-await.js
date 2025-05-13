function pegarUsuario () {
    return new Promise((resolve, reject)=> {
        setTimeout(
            ()=> {
                resolve('Gabriel Padilha')
            }, 2000)
    })
}

const result = pegarUsuario()
result.then(msg => console.log(msg))

async function mostrarUsuario () {
    try{
    const usuario = await pegarUsuario ()
    console.log(usuario)
    }catch(err){
        console.log(err)
    }
}
mostrarUsuario()