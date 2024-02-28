import TableCard from "./components/Card"

function App() {

  return (
    <div className="shadow-md py-6 w-[90%] m-auto  mt-4 rounded-lg">
      <h1 className="text-2xl font-medium pl-16 py-2 text-gray-500">Today's Appoinments List</h1>
      <TableCard />
    </div>
  )
}
// box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
export default App
