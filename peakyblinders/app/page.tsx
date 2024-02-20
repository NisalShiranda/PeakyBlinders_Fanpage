import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="hero-section relative">
        <Image className='w-full bg-cover bg-center'
          src="/hero1.jpg"
          width={5000000}
          height={500000}
          alt="Picture of the author"
          quality={100}
        />
      <div className=" absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center ">
        <p className="hero  text-gray-200 text-center text-5xl font-thin min-[375px]:text-6xl min-[425px]:text-7xl min-[500px]:text-8xl sm:text-9xl min-[900px]:text-[150px] lg:text-[200px] xl:text-[250px] 2xl:text-[300px] ">Peaky Blinders</p>
        <p className=" text-[10px] font-thin text-gray-400 text-center px-10 sm:text-md md:text-lg lg:text-xl xl:text-2xl ">Welcome, Peaky Blinders enthusiasts, to a place where the razor-sharp style meets the gritty streets of Birmingham! This is your ultimate destination for all things Peaky Blinders, a fan page dedicated to celebrating the gripping saga of the Shelby family.</p>
        
      </div>
    </div>

    <div className="hero-section relative">
        <Image className='w-full bg-cover bg-center'
          src="/hero2.jpg"
          width={5000000}
          height={500000}
          alt="Picture of the author"
          quality={100}
        />
      <div className=" absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center ">
        <p className="hero  text-gray-200 text-center text-5xl font-thin min-[375px]:text-6xl min-[425px]:text-7xl min-[500px]:text-8xl sm:text-9xl min-[900px]:text-[150px] lg:text-[200px] xl:text-[250px] 2xl:text-[300px] ">Peaky Blinders</p>
        <p className=" text-[10px] font-thin text-gray-400 text-center px-10 sm:text-md md:text-lg lg:text-xl xl:text-2xl ">Welcome, Peaky Blinders enthusiasts, to a place where the razor-sharp style meets the gritty streets of Birmingham! This is your ultimate destination for all things Peaky Blinders, a fan page dedicated to celebrating the gripping saga of the Shelby family.</p>
        
      </div>
    </div>
    
    
    </>
    
  );
}
