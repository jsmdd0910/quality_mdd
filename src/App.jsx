// function App() {
//   return(
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//         <div className="bg-white p-6 rounded-xl shadow-lg">
//             <h1 className="text-2xl font-bold text-blue-500">
//               Universidad Nacional Amazónica de Madre de Dios
//             </h1>
//             <p className="text-gray-600">Desarrollador FrontEnd</p>
//         </div>
//     </div>
//   )
// }
// export default App

import UseCard from './components/CardUser'
function App(){
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
        <div className='bg-white p-6 rounded-xl shadow-lg'></div>
        <UseCard/>
    </div>
  )
}
export default App;