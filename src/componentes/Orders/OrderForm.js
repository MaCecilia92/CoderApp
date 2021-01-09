import React from 'react';

export default function OrderForm({addOrder, orderId}) {
    return (
        <div>
             <form onSubmit={addOrder}>
                
                <div className="form-group d-flex align-items-start flex-column ">
                    <label>Nombre</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Ingresa tu nombre" name="name" />
                </div>
                <div className="form-group d-flex align-items-start flex-column">
                    <label>Apellido</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Ingresa tu apellido" name="apellido" />
                </div>
                <div className="form-group d-flex align-items-start flex-column">
                    <label>Email</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Un email válido por favor!" name="email" />
                </div>
                <div className="form-group d-flex align-items-start flex-column">
                    <label>Dirección</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Dirección de facturación" name="direccion" />
                </div>
                <div className="form-group d-flex align-items-start flex-column">
                    <label>Provincia</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Provincia en donde residís" name="provincia" />
                </div>
                <div className="form-group d-flex align-items-start flex-column">
                    <label>Ciudad</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Ingresá la Ciudad" name="ciudad" />
                </div>
                <div className="form-group d-flex align-items-start flex-column">
                    <label>Teléfono</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Compartinos un número de contacto" name="telefono" />
                </div>
                <div>
            <div className="mt-5">
            {orderId >= 0? <span>No se ha generado el comprobante</span> : (<span>{orderId }</span>)}   
            <button type="submit" className="btn btn-primary">Crear orden de compra</button>
        </div>
            </div>
            </form>
            
        </div>
    )
}
