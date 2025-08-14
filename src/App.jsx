import ProductCard from "./components/ProductCard"

import './styles/main.css'

function App() {
  
  const products = [
    {
      name: "Introduction to Next.js",
      description: 'The perfect guide for developers who want to build fast, scalable, and SEO-friendly web applications. This beginner-friendly book covers everything from setting up your first Next.js project to deploying a production-ready app.',
      image: '/products/book-1/intro-to-next-js.png',
      slug: 'intro-to-next-js',
      price: 349.00,
      currency: 'php'
    },{
      name: "Reactivate",
      description: 'Your practical guide to mastering React.js, the powerful JavaScript library trusted by developers worldwide. Whether you’re a beginner exploring React for the first time or an intermediate developer leveling up your skills, this book walks you through building fast, interactive, and maintainable web applications step-by-step.',
      image: '/products/book-2/reactivate.png',
      slug: 'intro-to-next-js',
      price: 299.00,
      currency: 'php'
    },{
      name: "Leveling up the web with Node.js",
      description: 'Unlock the full potential of modern web development with Node.js. Leveling Up the Web with Node.js is your practical guide to building fast, scalable, and efficient backend applications that power today’s most dynamic websites. From setting up your environment to deploying production-ready servers, this book walks you through real-world examples, performance tips, and best practices. Whether you’re a beginner stepping into server-side JavaScript or an experienced developer aiming to sharpen your skills, this resource equips you to create web experiences that truly stand out.',
      image: '/products/book-3/node.png',
      slug: 'intro-to-next-js',
      price: 399.00,
      currency: 'php'
    }
  ]

  const handleMouseMove = e => {
    const maxWidth = window.innerWidth
    const maxHeight = document.documentElement.scrollHeight
    const mouseX = e.pageX
    const mouseY = e.pageY

    const percentX = mouseX * 100 / maxWidth
    const percentY = mouseY * 100 / maxHeight

    document.documentElement.style.setProperty("--light-x", `${percentX}%`);
    document.documentElement.style.setProperty("--light-y", `${percentY}%`);
  }

  return (
    <div className="app" onMouseMove={handleMouseMove}>
      <header>
        <h1>Books That Spark Ideas</h1>
        <h2>Discover inspiring tech guides, written by the legendary tech authors of Cordova Public College</h2>
      </header>
      <section className="products">
      {
        products.map((product, i) => (
          <ProductCard 
            key={`${product.slug}-${i}`}
            image={product.image}
            name={product.name}
            price={product.price}
            description={product.description}
            product={product}
          />
        ))
      }
      </section>
    
    </div>
  )
}

export default App
