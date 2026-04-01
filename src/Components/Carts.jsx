import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  const handleDelete = (item) => {
    const filtered = carts.filter((c) => c.id !== item.id);
    setCarts(filtered);
    toast.warning(`Removed ${item.name} from cart`);
  };

  const handlePayment = () => {
    if (carts.length === 0) return toast.error("Cart is empty!");
    setCarts([]);
    toast.success("Payment Successful!");
  };

  return (
    <div className="pb-40 max-w-5xl mx-auto px-4 mt-10">
      <h1 className="text-3xl font-bold mb-6">Your Selected Tools</h1>

      {carts.length === 0 ? (
        <div className="text-center py-20 border-2 border-dashed rounded-2xl">
          <p className="text-2xl font-medium text-gray-400">
            Your cart is empty
          </p>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {carts.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border p-4 rounded-xl bg-white shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.icon}
                    alt=""
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <h2 className="text-xl font-bold">{item.name}</h2>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-500">
                      {item.tag}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-8">
                  <div className="text-xl font-bold">
                    ${item.price}{" "}
                    <span className="text-sm font-normal text-gray-400">
                      /{item.period}
                    </span>
                  </div>
                  <button
                    onClick={() => handleDelete(item)}
                    className="bg-red-100 text-red-600 p-2 rounded-full hover:bg-red-500 hover:text-white transition-all cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between bg-gray-900 text-white p-6 mt-8 rounded-2xl">
            <span className="text-2xl">Total Amount:</span>
            <span className="text-3xl font-bold">${totalPrice.toFixed(2)}</span>
          </div>

          <button
            onClick={handlePayment}
            className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl text-xl font-bold transition-all"
          >
            Confirm & Pay Now
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
