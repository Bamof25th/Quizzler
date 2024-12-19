import Image from "next/image";
import categories from "../../../public/assets/categories.json";

const CategoryContainer = () => {
  return (
    <>
      <div className="flex flex-col gap-2 max-w-[120px] min-h-[280px] ">
        <div className=" flex  items-center justify-center px-8 py-2 bg-white rounded-lg text-slate-400 font-bold text-lg">
          50
        </div>

        <div className="flex items-center justify-center  px-8 py-2 bg-white rounded-lg text-slate-400 font-bold text-lg">
          Classic
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-2 bg-white rounded-lg p-2">
          {categories.map((category) => (
            <div key={category.id} className="relative cursor-pointer">
              <div className="peer absolute opacity-0 w-full h-full cursor-pointer" />

              <div
                className={`block w-full p-1 rounded-lg
  
                transform-gpu transition-all duration-500 ease-out
  
                hover:translate-y-[-8px] hover:rotate-2
  
                active:translate-y-1 active:rotate-1 active:scale-95
  
                border-2 border-white/20
  
                      backdrop-blur-sm bg-black/80
  
                      hover:bg-black/90
  
                      peer-checked:ring-2 peer-checked:ring-white
  
                      hover:[box-shadow:0_20px_25px_-5px_rgba(0,0,0,0.2),0_0_15px_-3px_rgba(0,0,0,0.1)]
  
                      flex-col items-center gap-3
  
                      overflow-hidden
  
                      before:absolute before:inset-0 
  
                      before:bg-gradient-to-tr before:from-white/0 before:to-white/20 
  
                      before:opacity-0 before:transition-opacity before:duration-500
  
                      hover:before:opacity-100
  
                      peer-checked:bg-opacity-70`}
                style={{
                  borderColor: category.color,
                }}
              >
                <div className="relative z-10 flex flex-col items-center">
                  <Image
                    className="w-6 h-6 drop-shadow-lg 
  
                          transition-all duration-500 ease-out
  
                          group-hover:scale-110 group-hover:rotate-12"
                    src={`/categories-icons/${category.name.toLowerCase()}.svg`}
                    alt=""
                    width={32}
                    height={32}
                    aria-hidden="true"
                  />
                </div>

                <div
                  className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/10 to-transparent
  
                translate-x-[-100%] group-hover:translate-x-[100%] 
  
                transition-transform duration-1000 ease-in-out"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryContainer;
