import { Button } from "primereact/button"
import { useEffect, useState } from "react"

import banner from "../../assets/banners/img-banner.jpg"
import banner1 from "../../assets/banners/img-banner1.jpg"
import banner2 from "../../assets/banners/img-banner2.jpg"
import banner3 from "../../assets/banners/img-banner3.jpg"
import promo from "../../assets/promo.jpg"

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const bannerImages = [banner, banner1, banner2, banner3]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerImages.length)
    }, 10000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="space-y-8 mt-18">
      <section className="mb-8">
        <div className="relative h-[30rem]">
          {bannerImages.map((image, index) => (
            <div
              key={index}
              className={`banner-slide ${currentImageIndex === index ? 'active' : ''}`}
            >
              <img
                src={image}
                alt={`banner-${index + 1}`}
                className={`object-cover w-full h-[30rem]`}
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-neutral-800 bg-opacity-70"></div>
          <div className="absolute inset-0 flex items-center justify-center space-x-3">
            <div className="w-[55%]">
              <h1 className="text-3xl text-white font-bold">
                Bienvenue sur <span className="font-satisfy text-5xl">GoKaly</span> , <br />
                <span className="text-xl font-normal w-96">
                  La plateforme de référencement culinaire à Madagascar
                </span>
              </h1>
              <p className="text-white mt-4 font-poppins text-xs w-96">
                Explorez, réserver vos tables et commandez vos menus dans vos restaurants préférés en quelques clics.
              </p>
              <Button
                label="Découvrir"
                className="font-poppins text-sm border border-none outline outline-none bg-brick text-white rounded-3xl py-2 px-12 shadow mt-8"
              />
            </div>

            <div className="triple-border-container mt-10">
              <img src={promo} alt="burger" className="rounded-full object-cover w-72 h-72" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
