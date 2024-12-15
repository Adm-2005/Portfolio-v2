export default function Card({
  darkMode,
  imgURL,
  name,
  degree,
  major,
  grade,
  status,
}) {
  return (
    <div
      className={`flex flex-1 flex-col px-auto w-full h-500px mx-auto rounded-md pb-4 ${darkMode ? 'bg-[#202020]' : 'bg-white shadow-xl'}`}
    >
      <img src={imgURL} className="h-[280px]  rounded-t-md "></img>
      <h1 className="px-4 mt-4 text-xl font-bold">{degree}</h1>
      <h2 className="px-4 text-lg font-semibold">{name}</h2>
      <h3 className="px-4 ">Major: {major}</h3>
      <h3 className="px-4 ">
        {grade} | {status}
      </h3>
    </div>
  );
}
