

let error = false;
export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(error){
                reject('Hubo un error. Intente más tarde.')
            }else{
                resolve(products)
            }
        }, 2000)
    })
}

export const getOneProduct = (id) => {
    return new Promise ((resolve) =>{
        setTimeout  (() => {
            let prod = products.find((prod) => prod.id === id)
            resolve(prod)
        }, 2000)
    })
}