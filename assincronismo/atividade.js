function prepararMacarrao(callback) {
    setTimeout(() => {
        console.log("Macarrão preparado!")
        callback()
    }, 1000)
}

function ferverAgua(callback) {
    setTimeout(() => {
        console.log("Água fervida!")
        callback()
    }, 2000)
}

function cozinharMacarrao(callback) {
    setTimeout(() => {
        console.log("Macarrão cozido!")
        callback()
    }, 3000)
}

function escorrerAgua(callback) {
    setTimeout(() => {
        console.log("Água escorrida!")
        callback()
    }, 4000)
}

function servirPrato(callback) {
    setTimeout(() => {
        console.log("Prato servido!")
        callback()
    }, 5000)
}

// Iniciando o famoso Callback Hell
prepararMacarrao(() => {
    ferverAgua(() => {
        cozinharMacarrao(() => {
            escorrerAgua(() => {
                servirPrato(() => {
                    console.log("Bom apetite!")
                })
            })
        })
    })
})
