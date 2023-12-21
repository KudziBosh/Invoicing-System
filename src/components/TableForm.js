import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import {AiOutlineDelete} from 'react-icons/ai'

function TableForm({
  description,
  setDescription,
  price,
  setPrice,
  quantity,
  setQuantity,
  amount,
  setAmount,
  setList,
  list,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const newItems = {
      id: uuidv4(),
      description,
      quantity,
      price,
      amount,
    };
    setDescription("");
    setQuantity("");
    setPrice("");
    setAmount("");
    setList([...list, newItems]);
  };
//this function calculates the amount from price and quantity
  useEffect(() => {
    const calculateAmount = (amount) => {
      setAmount(quantity * price);
    };
    calculateAmount(amount);
  }, [amount, price, quantity, setAmount]);

  const deleteRow=(id)=> setList(list.filter((row)=> row.id !== id))
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="bg-grey-100  p-2 ">
          <label
            htmlFor="clientName"
            className="block  text-sm font-medium text-gray-900 dark:text-gray-300 pt-1 pb-2"
          >
            Enter Description
          </label>
          <input
            type="text"
            id="description"
            name="Description"
            placeholder="Enter Description"
            className="relative w-full inline-flex gap-2 items-center border bg-white border-gray-300 p-2 rounded focus:border-gray-400"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="md:grid grid-cols-3">
          <div className="bg-grey-100  p-2 ">
            <label
              htmlFor="clientName"
              className="block  text-sm font-medium text-gray-900 dark:text-gray-300 pt-1 pb-2"
            >
              Quantity
            </label>
            <input
              type="text"
              id="quantity"
              name="Quantity"
              placeholder="Enter Quantity"
              className="relative w-full inline-flex gap-2 items-center border bg-white border-gray-300 p-2 rounded focus:border-gray-400"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="bg-grey-100  p-2 ">
            <label
              htmlFor="clientName"
              className="block  text-sm font-medium text-gray-900 dark:text-gray-300 pt-1 pb-2"
            >
              Enter Price
            </label>
            <input
              type="text"
              id="price"
              name="Price"
              placeholder="Enter Price"
              className="relative w-full inline-flex gap-2 items-center border bg-white border-gray-300 p-2 rounded focus:border-gray-400"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="bg-grey-100  p-2 ">
            <label
              htmlFor="clientName"
              className="block  text-sm font-medium text-gray-900 dark:text-gray-300 pt-1 pb-2"
            >
              Enter Amount
            </label>
            <p>{amount}</p>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-200 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
        >
          Add table item
        </button>
      </form>
      <section>
        <ul className="">
        <table class="w-full text-sm text-left mt-3 text-gray-500 mb-4 dark:text-gray-400 border px-8 relative overflow-x-auto">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr className="bg-gray-100">
                    <th scope="col" class="py-3 px-6  ">
                      <span className="flex flex-row justify-between">
                        Description
                      </span>
                    </th>
                    <th scope="col" class="py-3 px-6  ">
                      <span className="flex flex-row justify-between">
                        Quantity
                      </span>
                    </th>

                    <th scope="col" class="py-3 px-6  ">
                      <span className="flex flex-row justify-between">
                        Price
                      </span>
                    </th>
                    <th scope="col" class="py-3 px-6 ">
                      <span className="flex flex-row justify-between">
                        Amount
                      </span>
                    </th>
                    
                  </tr>
                </thead>
          {list.map(({ id, description, quantity, price, amount }) => (
            <React.Fragment key={id} className=''>
              
                <tbody>
                  <tr>
                    <td class="py-4 px-6">{description}</td>
                    <td class="py-4 px-6">{quantity}</td>
                    <td class="py-4 px-6">{price}</td>
                    <td class="py-4 px-6">{amount}</td>
                    <td><button onClick={()=> deleteRow(id)}><AiOutlineDelete className="text-red-500 font-bold text-xl"/></button></td>
                  </tr>
                </tbody>
              
            </React.Fragment>
          ))}
          </table>
        </ul>
      </section>
    </div>
  );
}

export default TableForm;
