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
        <Image className='hero-section w-full bg-cover bg-center'
          src="/hero2.jpg"
          width={5000000}
          height={500000}
          alt="Picture of the author"
          quality={100}
        />
      <div className=" absolute inset-0 bg-black bg-opacity-75  flex flex-col items-center justify-center  ">
        <p className="hero  text-gray-200 text-center text-2xl  min-[375px]:text-3xl min-[425px]:text-4xl min-[500px]:text-5xl sm:text-6xl min-[900px]:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[100px] ">MAIN CAST</p>
        <div className="flex flex-row justify-center items-center gap-2 pt-1 md:gap-4 sm:pt-5 lg:gap-6 xl:gap-10 2xl:gap-14">
          <div className="bg-white h-24 w-16 sm:w-24 sm:h-36 md:w-32 md:h-48 lg:w-44 lg:h-64 xl:w-52 xl:h-80 2xl:w-64 2xl:h-96 ">
            <div>
            <Image className=' p-0.5'
            src="/p1.jpeg"
            width={5000000}
            height={500000}
            alt="Picture of the author"
            quality={100}
            />
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <p className=" text-[6px] sm:text-xs md:text-sm lg:text-lg xl:text-3xl">Cillian Murphy</p>
              <p className="hero text-[6px] sm:text-[8px] xl:text-2xl ">Tommy Shelby</p>
            </div>
          </div>
          <div  className="bg-white h-24 w-16 sm:w-24 sm:h-36 md:w-32 md:h-48 lg:w-44 lg:h-64 xl:w-52 xl:h-80 2xl:w-64 2xl:h-96">
            <div>
            <Image className=' p-0.5'
            src="/person2.jpg"
            width={5000000}
            height={500000}
            alt="Picture of the author"
            quality={100}
            />
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <p className=" text-[6px] sm:text-xs md:text-sm lg:text-lg xl:text-3xl">Paul Anderson</p>
              <p className="hero text-[6px] sm:text-[8px] xl:text-2xl ">Arthur Shelby</p>
            </div>
         
          </div>
          <div  className="bg-white h-24 w-16 sm:w-24 sm:h-36 md:w-32 md:h-48 lg:w-44 lg:h-64 xl:w-52 xl:h-80 2xl:w-64 2xl:h-96 ">
            <div>
            <Image className=' p-0.5'
            src="/person3.jpg"
            width={5000000}
            height={500000}
            alt="Picture of the author"
            quality={100}
            />
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <p className=" text-[6px] sm:text-xs md:text-sm lg:text-lg xl:text-3xl">Helen McCrory</p>
              <p className="hero text-[6px] sm:text-[8px] xl:text-2xl ">Polly Gray</p>
            </div>
          
          </div>
          <div  className="bg-white h-24 w-16 sm:w-24 sm:h-36 md:w-32 md:h-48 lg:w-44 lg:h-64 xl:w-52 xl:h-80 2xl:w-64 2xl:h-96">
            <div>
            <Image className=' p-0.5'
            src="/person4.jpg"
            width={5000000}
            height={500000}
            alt="Picture of the author"
            quality={100}
            />
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <p className=" text-[6px] sm:text-xs md:text-sm lg:text-lg xl:text-3xl">Natasha O'Keeffe</p>
              <p className="hero text-[6px] sm:text-[8px] xl:text-2xl ">Lizzie Shelby</p>
            </div>
          
          </div>
        </div>
        
        
      </div>
    </div>
    
    
    </>
    
  );
}
