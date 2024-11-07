import { useState } from "react";

const InputAmount = () => {
  const [quantity, setQuantity] = useState(0);

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex items-center justify-center space-x-2 flex-1">
      <button
        className=" hover:bg-gray-300 px-3 py-2 rounded-lg bg-black text-xl"
        onClick={decreaseQuantity}
      >
        -
      </button>
      <span className="px-3 py-2 border-black border-2 rounded-lg flex-1 text-center">
        {quantity}
      </span>
      <button
        className=" hover:bg-gray-300 px-3 py-2 rounded-lg bg-black text-xl"
        onClick={increaseQuantity}
      >
        +
      </button>
    </div>
  );
};

export default InputAmount;
