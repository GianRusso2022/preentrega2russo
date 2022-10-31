const Item = (props) =>{
    return  <div className="m-2">
    <div className="card">
        <img src={props.imagen} alt="imagen" className="card-img-top"/>
        <div className="card-body d-flex justify-content-between">
            <span>{props.titulo}</span>
            <span>${props.precio}</span>
            <button className="btn btn-dark ">Comprar</button>
        </div>
    </div>
</div>
}

export default Item;