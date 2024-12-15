export default function SkillCard({ darkMode, category, icons }) {
  return (
    <div
      className={`h-[280px] w-full mx-auto ${darkMode ? 'bg-[#202020]' : 'bg-white shadow-xl'} flex flex-col justify-center items-center gap-8 rounded-md border border-violet-600`}
    >
      <h1 className="text-2xl lg:text-3xl mx-auto font-poppins font-bold text-violet-600 ">
        {category}
      </h1>

      <div className="grid grid-cols-3 gap-4">
        {icons.map((icon, index) => (
          <img
            key={index}
            src={icon.link}
            className="w-[50px] h-[50px]  xl:w-[60px] xl:h-[60px] border border-violet-600 rounded-full p-2"
          />
        ))}
      </div>
    </div>
  );
}
