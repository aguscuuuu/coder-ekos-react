const productos = [
    {
        id: '1',
        name: 'Aros N°1',
        stock: 5,
        price: 5000,
        img: 'https://i.postimg.cc/L5Cv9ff8/aros1.webp',
        category: 'aros',
        material: null,
    },
    {
        id: '2',
        name: 'Aros N°2',
        stock: 8,
        price: 2200,
        img: 'https://i.postimg.cc/FRxD6wHc/aros2.webp',
        category: 'aros',
        material: null,
    },
    {
        id: '3',
        name: 'Aros N°3',
        stock: 4,
        price: 8000,
        img: 'https://i.postimg.cc/bvk6xZXm/aros3.webp',
        category: 'aros',
        material: null,
    },
    {
        id: '4',
        name: 'Aros N°4',
        stock: 3,
        price: 1600,
        img: 'https://i.postimg.cc/t4LSnhc1/aros4.webp',
        category: 'aros',
        material: null,
    },
    {
        id: '5',
        name: 'Aros N°5',
        stock: 9,
        price: 3000,
        img: 'https://i.postimg.cc/WzbXcSdy/aros5.webp',
        category: 'aros',
        material: null,
    },
    {
        id: '6',
        name: 'Aros N°6',
        stock: 7,
        price: 2600,
        img: 'https://i.postimg.cc/mD4m8TBB/aros6.webp',
        category: 'aros',
        material: null,
    },
    {
        id: '7',
        name: 'Collar N°1',
        stock: 7,
        price: 3000,
        img: 'https://i.postimg.cc/Z5hVxrmX/collar1.webp',
        category: 'collares',
        material: null,
    },
    {
        id: '8',
        name: 'Collar N°2',
        stock: 9,
        price: 3000,
        img: 'https://i.postimg.cc/5Nzszshw/collar2.webp',
        category: 'collares',
        material: null,
    },
    {
        id: '9',
        name: 'Collar N°3',
        stock: 8,
        price: 2000,
        img: 'https://i.postimg.cc/LXhT8Dkg/collar3.webp',
        category: 'collares',
        material: null,
    },
    {
        id: '10',
        name: 'Collar N°4',
        stock: 3,
        price: 2000,
        img: 'https://i.postimg.cc/Jhpx8vXW/collar4.webp',
        category: 'collares',
        material: null,
    },
    {
        id: '11',
        name: 'Collar N°5',
        stock: 5,
        price: 1000,
        img: 'https://i.postimg.cc/jjxcGtLX/collar5.webp',
        category: 'collares',
        material: null,
    },
    {
        id: '12',
        name: 'Collar N°6',
        stock: 6,
        price: 2000,
        img: 'https://i.postimg.cc/wjcFf7TM/collar6.webp',
        category: 'collares',
        material: null,
    },
    {
        id: '13',
        name: 'Pulsera N°1',
        stock: 3,
        price: 1300,
        img: 'https://i.postimg.cc/CMqGrzc0/pulsera1.webp',
        category: 'pulseras',
        material: null,
    },
    {
        id: '14',
        name: 'Pulsera N°2',
        stock: 7,
        price: 1500,
        img: 'https://i.postimg.cc/B6dxQ0QR/pulsera2.webp',
        category: 'pulseras',
        material: null,
    },
    {
        id: '15',
        name: 'Pulsera N°3',
        stock: 8,
        price: 1700,
        img: 'https://i.postimg.cc/yN8hLjbp/pulsera3.webp',
        category: 'pulseras',
        material: null,
    },
    {
        id: '16',
        name: 'Pulsera N°4',
        stock: 2,
        price: 1600,
        img: 'https://i.postimg.cc/zBLCrB5n/pulsera4.webp',
        category: 'pulseras',
        material: null,
    },
    {
        id: '17',
        name: 'Pulsera N°5',
        stock: 4,
        price: 1200,
        img: 'https://i.postimg.cc/PqVW9ZGX/pulsera5.webp',
        category: 'pulseras',
        material: null,
    },
    {
        id: '18',
        name: 'Pulsera N°6',
        stock: 5,
        price: 4000,
        img: 'https://i.postimg.cc/gj83xTxj/pulsera6.webp',
        category: 'pulseras',
        material: null,
    },
]

let error = false;
export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(error){
                reject('Hubo un error. Intente más tarde.')
            }else{
                resolve(productos)
            }
        }, 2000)
    })
}

export const getOneProduct = (id) => {
    return new Promise ((resolve) =>{
        setTimeout  (() => {
            let prod = productos.find((prod) => prod.id === id)
            resolve(prod)
        }, 2000)
    })
}