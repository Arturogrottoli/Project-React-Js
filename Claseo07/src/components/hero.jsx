import { useEffect, useState } from 'react'

const slides = ['/img/hero1.jpg', '/img/hero2.jpg', '/img/hero3.jpg']

export default function Hero() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI(p => (p + 1) % slides.length), 4000)
    return () => clearInterval(t)
  }, [])

  const scrollToCatalog = (e) => {
    e.preventDefault()
    document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      {slides.map((src, idx) => (
        <img key={src} src={src} alt="" className={`hero-slide ${idx === i ? 'active' : ''}`} />
      ))}
      <div className="hero-overlay">
        <h1>Tu viaje comienza aquí</h1>
        <p>Ofertas y atención inmediata</p>
        <a href="#catalogo" className="btn primary" onClick={scrollToCatalog}>Ver catálogo</a>
      </div>
    </section>
  )
}
