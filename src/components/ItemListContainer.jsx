import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import LoaderComponent from "./LoaderComponent"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../service/firebase"

const ItemListContainer = ({ mensaje }) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const { type } = useParams()

    useEffect(() => {
        setLoading(true)

        const prodCollection = type 
            ? query(collection(db, "products"), where("category", "==", type))
            : collection(db, "products")

        getDocs(prodCollection)
            .then((res) => {
                const list = res.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }))
                setData(list)
            })
            .catch((error) => console.error("Error al obtener los productos:", error))
            .finally(() => setLoading(false))
    }, [type])

    return (
        <>
            {loading ? (
                <LoaderComponent />
            ) : (
                <>
                    <h1 className="text-center">
                        {mensaje}{" "}
                        {type && (
                            <span style={{ textTransform: "capitalize" }}>
                                {type}
                            </span>
                        )}
                    </h1>
                    <ItemList data={data} />
                </>
            )}
        </>
    )
}

export default ItemListContainer
