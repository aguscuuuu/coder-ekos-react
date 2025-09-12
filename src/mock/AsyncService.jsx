const productos = [
    {
        id: '01',
        name: 'Collar 1',
        description: 'Collar de acero inoxidable con dije de cruz',
        stock: 25,
        precio: 2500,
        img: null,
        category: 'Nuevos',
    },
    {
        id: '02',
        name: 'Collar 2',
        description: 'Collar de acero inoxidable con piedra rosa',
        stock: 18,
        precio: 3200,
        img: null,
        category: 'Más vendidos',
    }
]

let error = false;
export const getProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(error){
                reject('Hubo un error. Intente más tarde')
            }else{
                resolve
            }
        }, 2000)
    })
}