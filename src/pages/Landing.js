import { React, useState } from "react";
import ClientDetails from "../components/ClientDetails";
import Dates from "../components/Dates";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainDetails from "../components/MainDetails";
import Notes from "../components/Notes";
import Table from "../components/Table";
import TableForm from "../components/TableForm";

function Landing() {
  const [showInvoice, setShowInvoice] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [website, setWebsite] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");
  const[description, setDespription]= useState("")
  const[quantity,setQuantity]=useState("")
  const[price,setPrice]=useState("")
  const[amount,setAmount]= useState("")
  const[list,setList]= useState([])
  const handlePrint = () => {
    window.print(); 
  };

  return (
    <div className="bg-white rounded shadow m-5 p-5 xl:max-w-4xl xl:mx-auto ">
      {showInvoice ? (
        <div>
          <Header handlePrint={handlePrint} />
          <MainDetails name={name} address={address} />
          <ClientDetails
            clientName={clientName}
            clientAddress={clientAddress}
          />
          <Dates dueDate={dueDate} invoiceNumber={invoiceNumber} invoiceDate={invoiceDate}/>
          <Table description={description} quantity={quantity} setQuantity={setQuantity} price={price} setPrice={setPrice} amount={amount} setAmount={setAmount} list={list} setList={setList} />
          <Notes notes={notes}/>
          <Footer name={name} address={address} website={website} email={email} phone={phone} bankAccount={bankAccount} bankName={bankName}/>
          <button
            onClick={() => setShowInvoice(false)}
            className="w-full bg-blue-200 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
          >
            Edit Invoice
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {/*name, address , email , phone , bank name, bank account number 
          , website client name client address , invoice number , invoice date, due date
          ,notes  */}
          <article className="md:grid grid-cols-2">
          <div className="bg-grey-100  p-2 ">
          <label htmlFor="name" className="block  text-sm font-medium text-gray-900 dark:text-gray-300 pt-1 pb-2">Enter your name</label>
          <input
            type="text"
            id="name"
            name="Name"
            placeholder="Enter Your Name"
            className="relative w-full inline-flex gap-2 items-center border bg-white border-gray-300 p-2 rounded focus:border-gray-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
            </div>
          
           <div className="bg-grey-100  p-2 ">
           <label htmlFor="phone" className="block  text-sm font-medium text-gray-900 dark:text-gray-300 pt-1 pb-2">Enter your Phonenumber</label>
          <input
            type="text"
            id="phone"
            name="Phone"
            placeholder="Enter Your Name"
            className="relative w-full inline-flex gap-2 items-center border bg-white border-gray-300 p-2 rounded focus:border-gray-400"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
            </div>
          </article>
         
          <article className="md:grid grid-cols-3">
          <div className="bg-grey-100  p-2 ">
           <label htmlFor="address" className="block  text-sm font-medium text-gray-900 dark:text-gray-300 pt-1 pb-2">Enter your Address</label>
          <input
            type="text"
            id="address"
            name="Address"
            placeholder="Enter Your Address"
            className="relative w-full inline-flex gap-2 items-center border bg-white border-gray-300 p-2 rounded focus:border-gray-400"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
            </div>
          
           <div className="bg-grey-100  p-2 ">
           <label htmlFor="email" className="block  text-sm font-medium text-gray-900 dark:text-gray-300 pt-1 pb-2">Enter your Email</label>
          <input
            type="email"
            id="email"
            name="Email"
            placeholder="Enter Your Email"
            className="relative w-full inline-flex gap-2 items-center border bg-white border-gray-300 p-2 rounded focus:border-gray-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
            </div>
          
           <div className="bg-grey-100  p-2 ">
           <label htmlFor="bankName" className="block  text-sm font-medium text-gray-900 dark:text-gray-300 pt-1 pb-2">Enter your Bank Name</label>
          <input
            type="text"
            id="bankName"
            name="BankName"
            placeholder="Enter Your Bank's Name"
            className="relative w-full inline-flex gap-2 items-center border bg-white border-gray-300 p-2 rounded focus:border-gray-400"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
          />
            </div>
          </article>
           
           <article className="md:grid grid-cols-2">
           <div className="bg-grey-100  p-2 ">
           <label htmlFor="bankAccount" className="block  text-sm font-medium text-gray-900 dark:text-gray-300 pt-1 pb-2">Enter your Bank Account</label>
          <input
            type="text"
            id="bankAccount"
            name="bankAccount"
            placeholder="Enter Your Bank Account Number"
            className="relative w-full inline-flex gap-2 items-center border bg-white border-gray-300 p-2 rounded focus:border-gray-400"
            value={bankAccount}
            onChange={(e) => setBankAccount(e.target.value)}
          />
            </div>
          
           <div className="bg-grey-100  p-2 ">
           <label htmlFor="website" className="block  text-sm font-medium text-gray-900 dark:text-gray-300 pt-1 pb-2">Enter your website</label>
          <input
            type="text"
            id="website"
            name="website"
            placeholder="Enter Your website"
            className="relative w-full inline-flex gap-2 items-center border bg-white border-gray-300 p-2 rounded focus:border-gray-400"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
            </div>
           </article>
         
           
           <article className="md:grid grid-cols-2 mt-16">
           <div className="bg-grey-100  p-2 ">
           <label htmlFor="clientName" className="block  text-sm font-medium text-gray-900 dark:text-gray-300 pt-1 pb-2">Enter your Client's Name</label>
          <input
            type="text"
            id="clientName"
            name="cientName"
            placeholder="Enter Your Client Name"
            className="relative w-full inline-flex gap-2 items-center border bg-white border-gray-300 p-2 rounded focus:border-gray-400"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />
            </div>
         
           <div className="bg-grey-100  p-2 ">
           <label htmlFor="clientAddress" className="block  text-sm font-medium text-gray-900 dark:text-gray-300 pt-1 pb-2">Enter Client's Address</label>
          <input
            type="text"
            id="bankAccount"
            name="bankAccount"
            placeholder="Enter Client Address"
            className="relative w-full inline-flex gap-2 items-center border bg-white border-gray-300 p-2 rounded focus:border-gray-400"
            value={clientAddress}
            onChange={(e) => setClientAddress(e.target.value)}
          />
            </div>
           </article>
          
           <article className="grid grid-cols-3">
           <div className="bg-grey-100  p-2 ">
           <label htmlFor="invoiceNumber" className="block  text-sm font-medium text-gray-900 dark:text-gray-300 pt-1 pb-2">Enter Invoice Number</label>
          <input
            type="text"
            id="invoiceNumber"
            name="invoiceNumber"
            placeholder="Enter Invoice Number"
            className="relative w-full inline-flex gap-2 items-center border bg-white border-gray-300 p-2 rounded focus:border-gray-400"
            value={invoiceNumber}
            onChange={(e) => setInvoiceNumber(e.target.value)}
          />
            </div>
         
           <div className="bg-grey-100  p-2 ">
           <label htmlFor="invoiceDate" className="block  text-sm font-medium text-gray-900 dark:text-gray-300 pt-1 pb-2">Enter Invoice Date</label>
          <input
            type="date"
            id="invoiceDate"
            name="invoiceDate"
            placeholder="Enter Invoice Date"
            className="relative w-full inline-flex gap-2 items-center border bg-white border-gray-300 p-2 rounded focus:border-gray-400"
            value={invoiceDate}
            onChange={(e) => setInvoiceDate(e.target.value)}
          />
            </div>
          
           <div className="bg-grey-100  p-2 ">
           <label htmlFor="dueDate" className="block  text-sm font-medium text-gray-900 dark:text-gray-300 pt-1 pb-2">Enter your Due Date </label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            placeholder="Enter Due Date"
            className="relative w-full inline-flex gap-2 items-center border bg-white border-gray-300 p-2 rounded focus:border-gray-400"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
            </div>
           </article>
          <article>
            <TableForm description={description} 
            setDescription={setDespription}
            quantity={quantity} setQuantity={setQuantity} price={price} setPrice={setPrice} amount={amount} setAmount={setAmount}
            list={list}
            setList={setList}
            />
          </article>
           
         
          
          
           <div className="bg-grey-100  p-2 ">
           <label htmlFor="bankAccount" className="block  text-sm font-medium text-gray-900 dark:text-gray-300 pt-1 pb-2">Enter Notes</label>
          <textarea
            name="notes"
            id="notes"
            cols="30"
            rows="10"
            placeholder="Additional Notes"
            className="relative w-full inline-flex gap-2 items-center border bg-white border-gray-300 p-2 rounded focus:border-gray-400"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>
            </div>
         
          <button
            onClick={() => setShowInvoice(true)}
            className="w-full bg-blue-200 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
          >
            Preview Invoice
          </button>
        </div>
      )}
    </div>
  );
}

export default Landing;
