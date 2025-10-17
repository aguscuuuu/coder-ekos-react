import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../service/firebase'
import EmptyCart from './EmptyCart'
import { useForm } from 'react-hook-form'

const Checkout = () => {

    const [orderId, setOrderId] = useState(null)
    const { cart, total, clear } = useContext(CartContext)
    const { register, handleSubmit, formState: { errors }, getValues } = useForm()

    const finalizarCompra = (dataForm) => {
        const order = {
            comprador: {
                name: dataForm.name,
                lastname: dataForm.lastname,
                address: dataForm.address,
                email: dataForm.email
            },
            compras: cart,
            total: total(),
            fecha: serverTimestamp()
        }

        const ventas = collection(db, "orders")
        addDoc(ventas, order)
            .then((res) => {
                setOrderId(res.id)
                clear()
            })
            .catch((error) => console.log(error))
    }
    if (!cart.length && !orderId) {
        return <EmptyCart />
    }
    return (
        <div className="checkout-container">
            {
                orderId ? (
                    <div>
                        <h2>¡Realizaste tu compra correctamente!</h2>
                        <h3>ID de la compra: {orderId}</h3>
                    </div>
                ) : (
                    <>
                        <h1>Complete el formulario con sus datos</h1>
                        <form className="checkout-form" onSubmit={handleSubmit(finalizarCompra)}>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Ingrese su nombre"
                                    {...register("name", { required: true, minLength: 3 })}
                                />
                                <span className={`error-message ${errors?.name ? "active" : ""}`}>
                                    {errors?.name?.type === "required" && "Por favor complete el campo."}
                                    {errors?.name?.type === "minLength" && "El nombre debe contener mínimo 3 caracteres."}
                                </span>
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Ingrese su apellido"
                                    {...register("lastname", { required: true, minLength: 2 })}
                                />
                                <span className={`error-message ${errors?.lastname ? "active" : ""}`}>
                                    {errors?.lastname?.type === "required" && "Por favor complete el campo."}
                                    {errors?.lastname?.type === "minLength" && "El apellido debe contener mínimo 2 caracteres."}
                                </span>
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Ingrese su dirección"
                                    {...register("address", { required: true, minLength: 10, maxLength: 25 })}
                                />
                                <span className={`error-message ${errors?.address ? "active" : ""}`}>
                                    {errors?.address?.type === "required" && "Por favor complete el campo."}
                                    {errors?.address?.type === "minLength" && "La dirección debe contener mínimo 10 caracteres."}
                                    {errors?.address?.type === "maxLength" && "La dirección es demasiado larga."}
                                </span>
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="email"
                                    placeholder="Ingrese su correo"
                                    {...register("email", { required: true })}
                                />
                                <span className={`error-message ${errors?.email ? "active" : ""}`}>
                                    {errors?.email?.type === "required" && "Por favor complete el campo."}
                                </span>
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="email"
                                    placeholder="Repita su correo"
                                    {...register("secondemail", {
                                        required: true,
                                        validate: { equalsMails: mail2 => mail2 === getValues().email }
                                    })}
                                />
                                <span className={`error-message ${errors?.secondemail ? "active" : ""}`}>
                                    {errors?.secondemail?.type === "required" && "Por favor complete el campo."}
                                    {errors?.secondemail?.type === "equalsMails" && "Los correos deben ser iguales."}
                                </span>
                            </div>
                            <button type="submit" className="btn-submit">Comprar</button>
                        </form>
                    </>
                )
            }
        </div>
    )
}

export default Checkout
