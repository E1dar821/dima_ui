
function App() {

  return (
    <div className=" shadow-xl w-100 h-52 p-5 m-auto mt-[40vh]  rounded-md hover:shadow-2xl transition-[0.3ms] "> <div>
    <div className="flex items-center">
    <img className = "rounded-full w-24 h-24 mr-4 "src="https://cdnn21.img.ria.ru/images/07e7/0c/0e/1915754527_0:153:3125:1911_1920x0_80_0_0_0f238f81ded340d5be913352a94b8fc7.jpg" alt="" />
    <div className= "">
      <h2 className="font-bold text-2xl">Pisyakov Andreev</h2>
      <h3 className="text-gray-500 text-xl">back-end passive</h3>
    </div>
    </div>
    </div> 
    <p className ="">Разрабатываю современные интерфейсы для реакт!</p>
    <div className="flex justify-between gap-2">
      <button className="bg-[skyblue] rounded-md text-xl w-1/2 hover:bg-[blue] hover:text-[white] transition-[0.3ms]">Add Friend</button>
      <button className="text-[green] border rounded-md  text-xl w-1/2 hover:bg-[green] hover:text-[white] transition-[0.3ms]">Sent Message</button>
    </div>
    </div>
  )
}

export default App
