import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <p className="item-list-container__greeting">{greeting}</p>
    </div>
  )
}

export default ItemListContainer
