import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../data/products'
import ItemList from './ItemList'
import Hero from './hero'
import OfferHeader from './offerheader'
import FeaturedSection from './featuredSection'

export default function ItemListContainer({ greeting = 'Catálogo' }) {
  const { categoryId } = useParams()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getProducts(categoryId).then(setItems).finally(() => setLoading(false))
  }, [categoryId])

return (
  <section>
    {!categoryId && <Hero />}

    {!categoryId && <OfferHeader />}

    {!categoryId && <FeaturedSection />}

    <div id="catalogo" style={{ marginTop: categoryId ? 0 : '1rem' }}>
      {categoryId && <h1 style={{ marginBottom: '.25rem' }}>Categoría: {categoryId}</h1>}
      {loading ? (
        <div className="grid-cards">
          {Array.from({ length: 4 }).map((_, i) => <div key={i} className="card skeleton" />)}
        </div>
      ) : (
        <ItemList items={items} />
      )}
    </div>
  </section>
)

}
