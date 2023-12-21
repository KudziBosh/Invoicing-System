import React from "react";

function Table({list}) {
  return (
    <div className="my-5">
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
                  </tr>
                </tbody>
              
            </React.Fragment>
          ))}
          </table>
    </div>
  );
}

export default Table;
