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
      slug: 'reactivate',
      price: 299.00,
      currency: 'php'
    },{
      name: "Leveling up the web with Node.js",
      description: 'Unlock the full potential of modern web development with Node.js. Leveling Up the Web with Node.js is your practical guide to building fast, scalable, and efficient backend applications that power today’s most dynamic websites. From setting up your environment to deploying production-ready servers, this book walks you through real-world examples, performance tips, and best practices. Whether you’re a beginner stepping into server-side JavaScript or an experienced developer aiming to sharpen your skills, this resource equips you to create web experiences that truly stand out.',
      image: '/products/book-3/node.png',
      slug: 'node-js',
      price: 399.00,
      currency: 'php'
    },{
      name: "Cascade Mastery: Crafting Beautiful, Responsive, and Modern Web Designs with CSS",
      description: 'Master the art of modern web design with this comprehensive CSS guide. Learn how to build responsive, visually stunning, and user-friendly websites using the latest CSS techniques. From layouts and animations to design best practices, this resource is perfect for beginners and experienced developers aiming to elevate their design skills.',
      image: '/products/book-4/css.png',
      slug: 'css',
      price: 299.00,
      currency: 'php'
    },{
      name: "Mastering HTML: Building the Foundations of the Web",
      description: 'Lay the groundwork for your web development journey with this essential HTML guide. Designed for beginners and aspiring developers, this book walks you through the fundamentals of structuring web pages, using semantic tags, and creating a solid foundation for responsive and accessible websites. A must-have resource for anyone who wants to start building the web from the ground up.',
      image: '/products/book-5/html.png',
      slug: 'html',
      price: 179.00,
      currency: 'php'
    },{
      name: "JavaScript Essentials: Powering Interactivity on the Web",
      description: 'Bring your websites to life with the power of JavaScript. This book covers the core concepts of JavaScript—from variables and functions to DOM manipulation and event handling—giving you the tools to create interactive, dynamic, and user-friendly web applications. Perfect for beginners and aspiring developers, it’s your step-by-step guide to mastering the language that powers the modern web.',
      image: '/products/book-6/js.png',
      slug: 'js',
      price: 249.00,
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
