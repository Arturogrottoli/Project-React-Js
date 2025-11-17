import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader.jsx'
import EmptyState from '../components/EmptyState.jsx'
import ItemList from './ItemList.jsx'
// Firestore: lectura de colección con filtro opcional
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../services/firebase.js'

export default function ItemListContainer({ greeting }){
  const { cid } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        // Conceptos clave:
        // - Colección: conjunto de documentos (ej: 'items')
        // - Documento: un registro con campos (ej: title, price, stock, category, image)
        // - Query: consulta que puede filtrar/ordenar/limitar documentos de una colección

        // ref: referencia a la colección 'items'
        const ref = collection(db, 'items');
        // q: si hay categoría en la URL, filtramos por 'category' == cid (por ej: 'zapatillas')
        const q = cid ? query(ref, where('category', '==', cid)) : ref;
        // snap: resultado de la consulta; contiene docs y metadatos
        const snap = await getDocs(q);
        // Normalizamos cada doc del snapshot en un objeto plano con su id y data
        const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        setProducts(list);
      } catch (e){
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, [cid]);

  if (loading) return <Loader/>;
  if (!products.length) return <EmptyState title="Sin productos" subtitle="Prueba con otra categoría"/>;

  return (
    <section>
      {greeting && <h2>{greeting}</h2>}
      <ItemList products={products} />
    </section>
  );
}
