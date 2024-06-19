# FrontEnd Challenge - QikServe

## Challenge
Develop a restaurant application where users can access each item and add them to their cart.

## My Solution
Initially, I focused on designing the application layout to gain an overview of my progress. Separating the aesthetic development from the logic was essential to maintain clarity.

Once the layout was defined, I proceeded with implementing the application's logic. I created mock data for restaurant products, which is stored in the `products.json` file.

To fetch data from the JSON file, I implemented the `fetchProducts` function, which asynchronously retrieves and returns a list of products from a local JSON file.

```javascript
const fetchProducts = async () => {
    const response = await fetch('src/data/produtos.json')
    const data = await response.json()

    return data.products
}

```

Additionally, I created a utility function formatCurrency to format numerical values into a specified currency format ('pt-br').

```javascript
const formatCurrency = (value, currency) => {
    return value.toLocaleString('pt-br', { style: 'currency', currency})
  }
}
```

For managing application state and data, I developed a Context API. This included defining a React component called Provider, which uses the context (AppContext) to provide state management for products, loading indicators, cart items, and cart visibility using React's useState hook.

For other components, I utilized the AppContext to access and modify states related to application products. The useEffect hook was employed to fetch products asynchronously using the fetchProducts function. This ensured that the component updated the products and loading states accordingly. During loading, a loading animation is displayed, and once products are loaded, they are rendered using the ProductCard component.

Functions for interacting with the shopping cart were also implemented. handleRemoveItem removes a specific item from the cart based on its uniqueId, while handleAddCart adds a new item to the cart, generating a unique identifier for the item.

```javascript
const handleRemoveItem = () => {
  const updatedItems = cartItems.filter((item) => item.uniqueId != uniqueId)
  setCartItems(updatedItems)
}

const handleAddCart = () => {
  const newItem = { ...data, uniqueId: Date.now() + Math.random() }
  setCartItems([...cartItems, newItem])
}
```

### Technologies Used
- React
- React Hooks
- react-router-dom
- react-icons
- prop-types

### Challenges Faced
Implementing unique routes for each product (/product/:id) posed a significant challenge. This required ensuring that each product detail page dynamically fetched and displayed the corresponding data from the products.json file. Using React Router (react-router-dom), I had to manage navigation and ensure that the correct product data was retrieved based on the dynamic route parameters.

Effectively managing state across different components using the Context API (AppContext) was another key challenge. Integrating state management with React's useState and useContext hooks allowed for centralized control over critical application states such as product information, cart items, and loading indicators. Ensuring synchronization and proper updates across components, especially when adding items to the cart using setCartItems, required careful consideration of state immutability and component re-rendering.

## Running the Project
1. Clone the repository

```bash
  git clone [link_desse_repo]
```

2. Install dependencies
```bash
  npm install
```

3. Run the project
```bash
  npm run dev
```
