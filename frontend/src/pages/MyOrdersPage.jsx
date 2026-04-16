import { useEffect, useState } from 'react'

const MyOrdersPage = () => {

   const [orders, setOrders] = useState([]);

   useEffect(() => {
      // Fetch user's orders from the backend API
      setTimeout(() => {
         const mockOrders = [
            {
               _id: "123",
               createdAt: new Date(),
               shippingAddress: {
                  city: "New York",
                  country: "USA"
               },
               orderItems: [
                  {
                     productName: "Casual Shirt",
                     image: "https://picsum.photos/500/500?random=7",
                  }
               ],
               totalPrice: 39.99,
               isPaid: true,
            },
            {
               _id: "124",
               createdAt: new Date(),
               shippingAddress: {
                  city: "Los Angeles",
                  country: "USA"
               },
               orderItems: [
                  {
                     productName: "Denim Jeans",
                     image: "https://picsum.photos/500/500?random=8",
                  }
               ],
               totalPrice: 59.99,
               isPaid: false,
            }
         ]
         setOrders(mockOrders);
      }
      )

   }, [])

   return (
      <div className='max-w-7xl mx-auto p-4 sm:p-6'>
         <h2 className='text-xl sm:text-2xl font-bold mb-6'>My Orders</h2>
         <div className="relative shadow-md sm-rounded-lg overflow-hidden">
            <table className="min-w-full text-left text-gray-500">
               <thead className='bg-gray-100 text-xs uppercase text-gray-700'>
                  <tr>
                     <th className="py-2 px-4 sm:py-3">Image</th>
                     <th className="py-2 px-4 sm:py-3">Order ID</th>
                     <th className="py-2 px-4 sm:py-3">Created</th>
                     <th className="py-2 px-4 sm:py-3">Shipping Address</th>
                     <th className="py-2 px-4 sm:py-3">Items</th>
                     <th className="py-2 px-4 sm:py-3">Price</th>
                     <th className="py-2 px-4 sm:py-3">Status</th>
                  </tr>
               </thead>
               <tbody className="">
                  {orders.length > 0 ? (
                     orders.map((order) => (
                        <tr key={order._id} className="border-b border-gray-100 cursor-pointer">
                           <td className='py-2 px-2 sm:py-4 sm:px-4'>
                              <img src={order.orderItems[0].image} alt={order.orderItems[0].productName} className="w-10 h-10 sm:w-14 sm:h-14 object-cover rounded-lg" />
                           </td>
                           <td className="py-2 px-4 sm:py-3">#{order._id}</td>
                           <td className="py-2 px-4 sm:py-3">
                              {new Date(order.createdAt).toLocaleDateString()}{" "}
                              <br />
                              {new Date(order.createdAt).toLocaleTimeString()}</td>
                           <td className="py-2 px-4 sm:py-3 text-gray-700">
                              {order?.shippingAddress?.city && order?.shippingAddress?.country
                                 ? `${order.shippingAddress.city}, ${order.shippingAddress.country}`
                                 : "N/A"
                              }
                           </td>
                           <td className="py-2 px-4 sm:py-3">{order.orderItems.length}</td>
                           <td className="py-2 px-4 sm:py-3">${order.totalPrice.toFixed(2)}</td>
                           <td className="py-2 px-4 sm:py-3">
                              <span
                                 className={`inline-flex items-center gap-1.5 rounded-lg text-sm border py-2 px-2 sm:py-1 font-semibold ${order.isPaid
                                    ? 'bg-green-50 text-green-600 border-green-200'
                                    : 'bg-red-50 text-red-600 border-red-200'
                                    }`}
                              >
                                 {order.isPaid ? 'Paid' : 'Unpaid'}
                              </span>
                           </td>
                        </tr>
                     ))
                  ) : (
                     <tr>
                        <td colSpan="7" className="px-4 py-0-4 text-center text-gray-500">
                           You have no orders.
                        </td>
                     </tr>
                  )}
               </tbody>
            </table>
         </div>
      </div>
   )
}

export default MyOrdersPage