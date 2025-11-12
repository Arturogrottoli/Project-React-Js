import React from 'react'



const ItemListContainer = ({ greeting }) => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h3>{greeting}</h3>
    </div>
  );
};

export default ItemListContainer;