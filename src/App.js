// import React, { useState, useEffect } from 'react';
// // Importing user components
// import Vendor from './components/users/Vendor';
// import Cart from './components/users/Cart';
// import GuestList from './components/users/GuestList';
// import OrderStatus from './components/users/OrderStatus';
// import Payment from './components/users/Payment';
// // Importing admin components (commented out for now)
// import MaintenanceMenu from './components/admin/MaintenanceMenu';
// import AddMembership from './components/admin/AddMembership';
// import UpdateMembership from './components/admin/UpdateMembership';
// import UserManagement from './components/admin/UserManagement';
// import VendorManagement from './components/admin/VendorManagement';
// //import VendorMainPage from './components/admin/VendorMainPage';
// // Vendor
// import InsertItem from './components/vender/InsertItem';
// import DeleteItem from './components/vender/DeleteItem';
// import ProductStatus from './components/vender/ProductStatus';
// import RequestItem from './components/vender/RequestItem';
// import ViewProduct from './components/vender/ViewProduct';
// import UserRequest from './components/vender/UserRequest';


// import Login from './components/Authentication/Login';
// import SignUp from './components/Authentication/SignUp';

// // import ProductList from './components/products/ProductList';
// // import ProductDetails from './components/products/ProductDetails';


// const [userId, setUserId] = useState('user123'); // Example user ID, replace with actual auth logic
// const [cartItems, setCartItems] = useState([]); // Set this based on the cart

// function App() {
//   const [currentPage, setCurrentPage] = useState(window.location.pathname);
//  // const [selectedProductId, setSelectedProductId] = useState(null);

//   // This function will help with navigating
//   const navigate = (path) => {
//     window.history.pushState({}, '', path); // Change the URL without reloading the page
//     setCurrentPage(path); // Update the page content based on the new URL
//   };

//   useEffect(() => {
//     const handlePopState = () => {
//       setCurrentPage(window.location.pathname); // Sync page state with browser navigation
//     };
    
//     window.addEventListener('popstate', handlePopState);
    
//     return () => {
//       window.removeEventListener('popstate', handlePopState);
//     };
//   }, []);

//   return (
//     <div className="container mt-5">
//       <h1 className="text-center">Event  Management systemm</h1>
      
//       <div className="d-flex justify-content-around mt-4">
//         <button onClick={() => navigate('/vendor')} className="btn btn-primary">Vendor</button>
//         <button onClick={() => navigate('/cart')} className="btn btn-primary">Cart</button>
//         <button onClick={() => navigate('/guest-list')} className="btn btn-primary">Guest List</button>
//         <button onClick={() => navigate('/order-status')} className="btn btn-primary">Order Status</button>
//         <button onClick={() => navigate('/maintenance-menu')} className="btn btn-danger">Admin</button>
//       </div>

//       <div>
//       {/* Authentication Pages */}
//       {currentPage === '/login' && <Login />}
//       {currentPage === '/register' && <SignUp />}


//         {currentPage === '/vendor' && <Vendor />}
//         {currentPage === '/cart' && <Cart />}
//         {currentPage === '/guest-list' && <GuestList />}
//         {currentPage === '/order-status' && <OrderStatus />}
//         {currentPage === '/payment' && <Payment />}
        
//         {/* Admin Pages (Commented out for now) */}
//         {currentPage === '/maintenance-menu' && <MaintenanceMenu />}
//         {currentPage === '/add-membership' && <AddMembership />}
//         {currentPage === '/update-membership' && <UpdateMembership />}
//         {currentPage === '/user-management' && <UserManagement />}
//         {currentPage === '/vendor-management' && <VendorManagement />}

//         {/* Vendor Pages (Commented out for now) */}
//         {/* {currentPage === '/vendor-main' && <VendorMainPage />} */}
//         {currentPage === '/insert-item' && <InsertItem />}
//         {currentPage === '/delete-item' && <DeleteItem />}
//         {currentPage === '/product-status' && <ProductStatus />}
//         {currentPage === '/request-item' && <RequestItem />}
//         {currentPage === '/view-product' && <ViewProduct />}
//         {currentPage === '/user-request' && <UserRequest />}


//         {/* Product Management */}
//         {/* {currentPage === '/products' && <ProductList onProductClick={navigateToProduct} />}
//         {currentPage === `/product/${selectedProductId}` && <ProductDetails productId={selectedProductId} />} */}
//       </div>
//     </div>
//   );
// }

// export default App;


// import React, { useState, useEffect } from 'react';
// // Importing user components
// import Vendor from './components/users/Vendor';
// import Cart from './components/users/Cart';
// import GuestList from './components/users/GuestList';
// import OrderStatus from './components/users/OrderStatus';
// import Payment from './components/users/Payment';
// // Importing admin components (commented out for now)
// import MaintenanceMenu from './components/admin/MaintenanceMenu';
// import AddMembership from './components/admin/AddMembership';
// import UpdateMembership from './components/admin/UpdateMembership';
// import UserManagement from './components/admin/UserManagement';
// import VendorManagement from './components/admin/VendorManagement';
// // Vendor
// import InsertItem from './components/vender/InsertItem';
// import DeleteItem from './components/vender/DeleteItem';
// import ProductStatus from './components/vender/ProductStatus';
// import RequestItem from './components/vender/RequestItem';
// import ViewProduct from './components/vender/ViewProduct';
// import UserRequest from './components/vender/UserRequest';

// import Login from './components/Authentication/Login';
// import SignUp from './components/Authentication/SignUp';

// //import { fetchCartItems } from './api'; // Assuming you have an API function to fetch the cart items

// function App() {
//   const [currentPage, setCurrentPage] = useState(window.location.pathname);
//  // const [userId, setUserId] = useState('user123'); // Example user ID, replace with actual auth logic
//  const [userId] = useState('user123'); // Hardcoded user ID for now
//   const [cartItems, setCartItems] = useState([]); // Set this based on the cart
  
//   // Function to navigate between pages
//   const navigate = (path) => {
//     window.history.pushState({}, '', path);
//     setCurrentPage(path);
//   };

//   // Fetch cart items when the userId changes or on initial render
//   useEffect(() => {
//     const loadCartItems = async () => {
//       try {
//         const items = await fetchCartItems(userId); // Fetch cart items from API
//         setCartItems(items); // Update cartItems state
//       } catch (error) {
//         console.error('Failed to fetch cart items', error);
//       }
//     };

//     loadCartItems();
//   }, [userId]);

//   return (
//     <div className="container mt-5">
//       <h1 className="text-center">Event Management System</h1>
      
//       <div className="d-flex justify-content-around mt-4">
//         <button onClick={() => navigate('/vendor')} className="btn btn-primary">Vendor</button>
//         <button onClick={() => navigate('/cart')} className="btn btn-primary">Cart</button>
//         <button onClick={() => navigate('/guest-list')} className="btn btn-primary">Guest List</button>
//         <button onClick={() => navigate('/order-status')} className="btn btn-primary">Order Status</button>
//         <button onClick={() => navigate('/maintenance-menu')} className="btn btn-danger">Admin</button>
//       </div>

//       <div>
//         {/* Authentication Pages */}
//         {currentPage === '/login' && <Login />}
//         {currentPage === '/register' && <SignUp />}
        
//         {/* User Pages */}
//         {currentPage === '/vendor' && <Vendor />}
//         {currentPage === '/cart' && <Cart userId={userId} cartItems={cartItems} />}  {/* Pass cartItems to Cart component */}
//         {currentPage === '/guest-list' && <GuestList />}
//         {currentPage === '/order-status' && <OrderStatus />}
//         {currentPage === '/payment' && <Payment />}

//         {/* Admin Pages */}
//         {currentPage === '/maintenance-menu' && <MaintenanceMenu />}
//         {currentPage === '/add-membership' && <AddMembership />}
//         {currentPage === '/update-membership' && <UpdateMembership />}
//         {currentPage === '/user-management' && <UserManagement />}
//         {currentPage === '/vendor-management' && <VendorManagement />}

//         {/* Vendor Pages */}
//         {currentPage === '/insert-item' && <InsertItem />}
//         {currentPage === '/delete-item' && <DeleteItem />}
//         {currentPage === '/product-status' && <ProductStatus />}
//         {currentPage === '/request-item' && <RequestItem />}
//         {currentPage === '/view-product' && <ViewProduct />}
//         {currentPage === '/user-request' && <UserRequest />}
//       </div>
//     </div>
//   );
// }

// export default App;




import React, { useState, useEffect } from 'react';
// Importing user components
import Vendor from './components/users/Vendor';
import Cart from './components/users/Cart';
import GuestList from './components/users/GuestList';
import OrderStatus from './components/users/OrderStatus';
import Payment from './components/users/Payment';
// Importing admin components (commented out for now)
import MaintenanceMenu from './components/admin/MaintenanceMenu';
import AddMembership from './components/admin/AddMembership';
import UpdateMembership from './components/admin/UpdateMembership';
import UserManagement from './components/admin/UserManagement';
import VendorManagement from './components/admin/VendorManagement';
// Vendor
import InsertItem from './components/vender/InsertItem';
import DeleteItem from './components/vender/DeleteItem';
import ProductStatus from './components/vender/ProductStatus';
import RequestItem from './components/vender/RequestItem';
import ViewProduct from './components/vender/ViewProduct';
import UserRequest from './components/vender/UserRequest';

import Login from './components/Authentication/Login';
import SignUp from './components/Authentication/SignUp';

import { viewCart } from './api'; // Assuming viewCart is implemented in api.js
import Navbar from './components/Navbar';

function App() {
  const [currentPage, setCurrentPage] = useState(window.location.pathname);
  const [userId] = useState('user123'); // Hardcoded user ID for now
  const [cartItems, setCartItems] = useState([]);

  // Function to navigate between pages
  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPage(path);
  };

  // Fetch cart items when the userId changes or on initial render
  useEffect(() => {
    const loadCartItems = async () => {
      try {
        const items = await viewCart(userId); // Fetch cart items from API
        setCartItems(items); // Update cartItems state
      } catch (error) {
        console.error('Failed to fetch cart items', error);
      }
    };

    loadCartItems();
  }, [userId]);

  return (
    <div className="container mt-5">
      <h1 className="text-center">Event Management System</h1>
      <Navbar/>
      <div className="d-flex justify-content-around mt-4">
        <button onClick={() => navigate('/vendor')} className="btn btn-primary">Vendor</button>
        <button onClick={() => navigate('/cart')} className="btn btn-primary">Cart</button>
        <button onClick={() => navigate('/guest-list')} className="btn btn-primary">Guest List</button>
        <button onClick={() => navigate('/order-status')} className="btn btn-primary">Order Status</button>
        <button onClick={() => navigate('/maintenance-menu')} className="btn btn-danger">Admin</button>
      </div>

      <div>
        {/* Authentication Pages */}
        {currentPage === '/login' && <Login />}
        {currentPage === '/register' && <SignUp />}
        
        {/* User Pages */}
        {currentPage === '/vendor' && <Vendor />}
        {currentPage === '/cart' && <Cart userId={userId} cartItems={cartItems} />}  {/* Pass cartItems to Cart component */}
        {currentPage === '/guest-list' && <GuestList />}
        {currentPage === '/order-status' && <OrderStatus />}
        {currentPage === '/payment' && <Payment />}

        {/* Admin Pages */}
        {currentPage === '/maintenance-menu' && <MaintenanceMenu />}
        {currentPage === '/add-membership' && <AddMembership />}
        {currentPage === '/update-membership' && <UpdateMembership />}
        {currentPage === '/user-management' && <UserManagement />}
        {currentPage === '/vendor-management' && <VendorManagement />}

        {/* Vendor Pages */}
        {currentPage === '/insert-item' && <InsertItem />}
        {currentPage === '/delete-item' && <DeleteItem />}
        {currentPage === '/product-status' && <ProductStatus />}
        {currentPage === '/request-item' && <RequestItem />}
        {currentPage === '/view-product' && <ViewProduct />}
        {currentPage === '/user-request' && <UserRequest />}
      </div>
    </div>
  );
}

export default App;
