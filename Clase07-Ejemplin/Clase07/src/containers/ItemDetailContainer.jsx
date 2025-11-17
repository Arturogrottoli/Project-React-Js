import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader.jsx'
import ItemDetail from './ItemDetail.jsx'
// Firestore: lectura de un documento por id
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../services/firebase.js'

export default function ItemDetailContainer(){
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        // ¿Qué estamos haciendo?
        // - Obtenemos el id de la URL (/item/:id)
        // - Armamos la referencia al documento /items/:id
        // - Le pedimos a Firestore ese documento y revisamos si existe
        const ref = doc(db, 'items', id);
        const snap = await getDoc(ref);
        // Si existe, convertimos el snapshot en un objeto {id, ...data()}
        setProduct(snap.exists() ? { id: snap.id, ...snap.data() } : null);
      } catch (e){
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) return <Loader />;
  if (!product) return <p>Producto no encontrado</p>;
  return <ItemDetail product={product}/>;
}
