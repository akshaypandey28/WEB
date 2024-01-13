import './item.css'
function Item(props){
    const ItemName=props.Name;
    return (
        <div>
            <p className="Nirma">{ItemName}</p>
            {props.children}
        </div>
    );
}
export default Item;