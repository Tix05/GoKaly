import { Button } from "primereact/button"
import { useEffect, useState } from "react"
import { useLanguage } from "../../utils/LangConfig"
import { motion } from 'framer-motion'

import CardResto from "../../components/user/Homepage/CardResto"
import CardInfo from "../../components/user/Homepage/CardInfo"
import CardIdealResto from "../../components/user/Homepage/CardIdealResto"
import BannerStat from "../../components/user/Homepage/BannerStat"
import DoubleBanner from "../../components/user/Homepage/DoubleBanner"
import BannerMobile from "../../components/user/Homepage/BannerMobile"

import banner from "../../assets/banners/img-banner.jpg"
import banner1 from "../../assets/banners/img-banner1.jpg"
import banner2 from "../../assets/banners/img-banner2.jpg"
import banner3 from "../../assets/banners/img-banner3.jpg"
import promo from "../../assets/promo.jpg"
import tendm from "../../assets/brand/tendm.png"
import brew from "../../assets/brand/brew.png"
import bissap from "../../assets/brand/bissap.png"
import bucky from "../../assets/brand/bucky.png"
import burger from "../../assets/burger.jpg"
import tacos from "../../assets/tacos.jpg"
import glace from "../../assets/glace.jpg"
import pizza from "../../assets/pizza.jpg"
import grillade from "../../assets/grillade.jpg"
import malagasy from "../../assets/cuisine-malagasy.jpg"
import indienne from "../../assets/cuisine-indienne.jpg"
import chinoise from "../../assets/cuisine-chinoise.jpg"
import italienne from "../../assets/cuisine-italienne.jpg"
import patisserie from "../../assets/patisserie.jpg"
import machu from "../../assets/brand/machu.png"
import colbert from "../../assets/brand/colbert.png"
import caramiel from "../../assets/brand/caramiel.png"
import bread from "../../assets/brand/bread.png"

const Home = () => {
  const { t } = useLanguage()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const bannerImages = [banner, banner1, banner2, banner3]

  const restos = [
    {
      id: 1,
      nom: 'TEND M',
      description: "Cuisine Chinoise, Pizzeria, Grillade, Malagasy",
      rating: 4.5,
      image: tendm,
    },
    {
      id: 2,
      nom: 'Brew Lounge',
      description: "Des plats uniques 100% sans porc",
      rating: 4.8,
      image: brew,
    },
    {
      id: 3,
      nom: 'Bissap',
      description: "Cuisine Indienne, Malagasy, Européenne",
      rating: 3.7,
      image: bissap,
    },
    {
      id: 4,
      nom: 'Bucky Burger',
      description: "Fast-food : BURGER - TACOS - BUCKETS - FRITE",
      rating: 4,
      image: bucky,
    },
  ]

  const idealRestos = [
    {
      id: 1,
      nom: 'Machu Picchu',
      description: "Pâtisserie & salon de thé",
      rating: 3.8,
      image: machu,
    },
    {
      id: 2,
      nom: 'La Pâtisserie Colbert',
      description: "Pâtisserie - Chocolaterie",
      rating: 4.8,
      image: colbert,
    },
    {
      id: 3,
      nom: 'Caramiel by Sandie',
      description: "Pâtisserie - Salon de thé ",
      rating: 4,
      image: caramiel,
    },
    {
      id: 4,
      nom: 'Bread Mafan\'',
      description: "Pâtisserie, Boulangerie, Salon de Thé",
      rating: 4.5,
      image: bread,
    },
  ]

  const foodCategories = [
    {
      id: 1,
      nom: 'Burger',
      image: burger,
    },
    {
      id: 2,
      nom: 'Tacos',
      image: tacos,
    },
    {
      id: 3,
      nom: 'Glace',
      image: glace,
    },
    {
      id: 4,
      nom: 'Pizza',
      image: pizza,
    },
    {
      id: 5,
      nom: 'Grillade',
      image: grillade,
    },
  ]

  const foodSpecialties = [
    {
      id: 1,
      nom: 'Malagasy',
      image: malagasy,
    },
    {
      id: 2,
      nom: 'Indienne',
      image: indienne,
    },
    {
      id: 3,
      nom: 'Chinoise',
      image: chinoise,
    },
    {
      id: 4,
      nom: 'Italienne',
      image: italienne,
    },
    {
      id: 5,
      nom: 'Patisserie',
      image: patisserie,
    },
  ]

  const sectionVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerImages.length)
    }, 10000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="space-y-8 mt-18 mb-16">
      {/* Banner */}
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
                {t('homeWelcome')} <span className="font-satisfy text-5xl">GoKaly</span> , <br />
                <span className="text-xl font-normal w-96">
                  {t('homeSubtitle')}
                </span>
              </h1>
              <p className="text-white mt-4 font-poppins text-xs w-96">
                {t('homeDescription')}
              </p>
              <Button
                label={t('homeDiscover')}
                className="font-poppins text-sm border border-none outline outline-none bg-brick text-white rounded-3xl py-2 px-12 shadow mt-8"
              />
            </div>

            <div className="triple-border-container mt-10">
              <img src={promo} alt="burger" className="rounded-full object-cover w-72 h-72" />
            </div>
          </div>
        </div>
      </section>
      {/* Banner */}

      {/* Cards */}
      <section className="">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <CardInfo />
        </motion.div>
      </section>
      {/* Cards */}

      {/* Ideals */}
      <section className="px-40 pt-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <CardIdealResto restos={idealRestos} />
        </motion.div>
      </section>
      {/* Ideals */}

      {/* Double Banner*/}
      <section className="px-40 pt-12">
        <DoubleBanner />
      </section>
      {/* Double Banner*/}

      {/* Popular restaurants */}
      <section className="px-40 pt-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <CardResto restos={restos} />
        </motion.div>
      </section>
      {/* Popular restaurants */}

      {/* Category */}
      <section className="pt-16 px-40">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={sectionVariants}
        >
          <h2 className="text-2xl font-satisfy text-center mb-4">{t('homeCategoryTitle')}</h2>
          <p className="text-center text-xs mx-28 font-poppins">
            {t('homeCategoryDescription')}
          </p>
          <div className="category-scroll-container mt-8">
            <div className="category-scroll-content">
              {[...foodCategories, ...foodCategories].map((category, index) => (
                <div key={`${category.id}-${index}`} className="category-item cursor-pointer">
                  <img
                    src={category.image}
                    alt={category.nom}
                    className="category-image"
                  />
                  <p className="category-name">{category.nom}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="category-scroll-container mt-8">
            <div className="category-scroll-content category-scroll-reverse">
              {[...foodSpecialties, ...foodSpecialties].map((specialty, index) => (
                <div key={`${specialty.id}-${index}`} className="category-item cursor-pointer">
                  <img
                    src={specialty.image}
                    alt={specialty.nom}
                    className="category-image"
                  />
                  <p className="category-name">{specialty.nom}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
      {/* Category */}

      {/* Stat */}
      <section className="pt-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={sectionVariants}
        >
          <BannerStat />
        </motion.div>
      </section>
      {/* Stat */}

      {/* Mobile */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <BannerMobile />
      </motion.div>
      {/* Mobile */}
    </div>
  )
}

export default Home
