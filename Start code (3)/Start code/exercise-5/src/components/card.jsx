export default function Card({cards}) {
 return (
  <li className="flex flex-col h-80 w-50  justify-center items-center bg-gray-300 rounded-2xl border-gray-600 shadow-lg shadow-black/30 mt-1.5 border-1/2">
    <div className="h-50 w-50 p-3">
       <img className="h-full w-full object-cover" src={cards.src} alt={cards.alt} />
    </div>
    <div className="flex flex-col flex-1 justify-center items-center">
        <h1 >{cards.Name}</h1>
        <h1 className="">{cards.Gender}</h1>
        <h1 className="text-emerald-500">{cards.Class}</h1>
        <h1>{cards.Hobbie}</h1>
    </div>
  </li>
 );
}