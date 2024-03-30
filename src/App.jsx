
const ProductCard = ({ image, name, price, salePrice, rating, isSale, isPopular }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <div className="bg-gray-300 h-48"></div>
        {isSale && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full">
            Sale
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <div className="flex items-center mb-2">
          {isPopular ? (
            <div className="flex items-center mr-2">
              <svg
                className="w-4 h-4 fill-current text-yellow-500 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg
                className="w-4 h-4 fill-current text-yellow-500 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg
                className="w-4 h-4 fill-current text-yellow-500 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg
                className="w-4 h-4 fill-current text-yellow-500 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg
                className="w-4 h-4 fill-current text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            </div>
          ) : rating ? (
            <div className="flex items-center mr-2">
              {[...Array(rating)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 fill-current text-yellow-500 mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
          ) : null}
          {salePrice && <span className="text-gray-500 line-through">${salePrice}</span>}
        </div>
        <div className="text-lg font-bold mb-4">
          {salePrice ? (
            <span className="text-red-500">${price}</span>
          ) : (
            <span>${price}</span>
          )}
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          {salePrice ? 'Add to cart' : 'View options'}
        </button>
      </div>
    </div>
  );
};

const App = () => {
  const products = [
    {
      name: 'Fancy Product',
      price: '$40.00 - $80.00',
    },
    {
      name: 'Special Item',
      rating: 5,
      salePrice: '$20.00',
      price: '$18.00',
      isSale: true,
    },
    {
      name: 'Sale Item',
      salePrice: '$50.00',
      price: '$25.00',
      isSale: true,
    },
    {
      name: 'Popular Item',
      price: '$40.00',
      isPopular: true,
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <header className="bg-gray-800 text-white py-4 mb-8">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="text-lg font-semibold">Start Bootstrap</div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Shop
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex items-center">
            <div className="bg-white text-gray-800 flex gap-4 items-center rounded-full px-3 py-1 mr-4">
              Cart
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
	<path fill="currentColor" d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25c0-.05.01-.09.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2" />
</svg>
            </div>
            
          </div>
        </div>
      </header>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Shop in style</h1>
        <p className="text-gray-600 mb-8">With this shop homepage template</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              price={product.price}
              salePrice={product.salePrice}
              rating={product.rating}
              isSale={product.isSale}
              isPopular={product.isPopular}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;