import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="hero-section relative">
        <Image className='w-full'
          src="/hero1.jpg"
          width={5000000}
          height={500000}
          alt="Picture of the author"
          quality={100}
        />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-center text-xl">
        <p>Peaky Blinders</p>
      </div>
    </div>
    
    
    </>
    
  );
}
