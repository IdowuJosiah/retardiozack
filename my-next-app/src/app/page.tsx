"use client"
import { useState, useRef } from "react";
import Image from "next/image";
import styles from "./page.module.scss";
import NavigationBar from "@/components/navbar/navbar";
import './globals.css'
import Footer from "@/components/footer/footer";
import MemeOne from '../../public/WhatsApp Image 2024-11-01 at 13.51.31.jpeg'
import MemeTwo from '../../public/WhatsApp Image 2024-11-01 at 13.51.31 (1).jpeg'
import MemeThree from '../../public/WhatsApp Image 2024-11-01 at 13.51.32.jpeg'
import MemeFour from '../../public/WhatsApp Image 2024-11-01 at 13.51.32 (1).jpeg'
import MemeFive from '../../public/WhatsApp Image 2024-11-01 at 13.51.33.jpeg'
import MemeSix from '../../public/WhatsApp Image 2024-11-01 at 13.51.34.jpeg'
import MemeSeven from '../../public/WhatsApp Image 2024-11-01 at 13.51.34 (1).jpeg'
import MemeEight from '../../public/WhatsApp Image 2024-11-01 at 13.51.35.jpeg'
import MemeNine from '../../public/WhatsApp Image 2024-10-29 at 20.37.29.jpeg'
import SlideOutWords from "@/components/slide-text/slide-text";
import Steps from "@/components/steps/steps";



export default function Home() {
  const words = ['Hello there', ' Retardio Welcomes you', 'To the Whimsical Land '];
  const [showMainContent, setShowMainContent] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <>
     {!showMainContent ? (
      <SlideOutWords 
        words={words} 
        onComplete={() => setShowMainContent(true)} 
      />
    ) : (
      

        <div className={styles.container}> 
          <NavigationBar/>
          <div className={styles.banner__section} id="home">
            {/* <video className={styles.banner__image} src={BannerVideo} alt=''/> */}
            <video
              ref={videoRef}
              className={styles.banner__video}
              width="100%"
              height="100%"
              src='WhatsApp Video 2024-11-01 at 13.54.00.mp4'
              loop // Ensure the video repeats when it finishes
              muted
              autoPlay
              // onEnded={handleVideoEnd} // Reset to paused state when video ends
            >
            </video>
            <div className={styles.banner__section__overlay}>
              <p>Hey its zack</p>
              <p className={styles.ma}>It&apos;s RETARDIO. GON TAKE YOU TO MEDIEVAL FUTURE</p>
              <span>Let&apos;s create your own WHIMSICAL adventure.</span>

              <div className={styles.cta__buttons}>
                <button className={styles.buy__button}><a style={{textDecoration:"none", color:"inherit"}} href="https://jup.ag/swap/SOL-8SuMAjoZeLGaaekNHP235Dv4soXsrcseFXefT3A9pump">Buy Now</a> </button>
                <button className={styles.get__button}> <a style={{textDecoration:"none", color:"inherit"}} href="https://dexscreener.com/solana/gq3wzaougwmpcsvxzvyjlkipf7bri3nw8rupilsxfs8w">Get on Dex</a></button>
              </div>
            </div>
          </div>

          <div className={styles.about__section} id="about">
            <header>Discover the Power of the Retardio The Great</header>
          
          <b>About RETARDIO</b>
            <p>

              In a universe filled with complex algorithms and serious blockchains, Retardio struts in with a crooked smile, a silly hat, and a heart full of mischief. Born from the world of internet humor and fueled by the spirit of the underdog, Retardio is the meme coin that’s proud to be a little… different. If life’s moving too fast, don’t worry – Retardio takes its time, waddling along the blockchain like a lovable goof, winning hearts and wallets with its unconventional charm.
            </p>
             
              <b>The Comedy of Crypto</b>
              <p>

                As the wise (and slightly clumsy) Captain Clunk, Retardio’s visionary founder, once said: “Not all who stumble are lost – some are just having fun!” Retardio thrives on unpredictability, reminding us all that you don’t have to be the fastest or the flashiest to make a splash in the crypto pond. Built on the principle that slapstick is strategy, Retardio offers a fresh, carefree take on tokenomics where every bump and slip is a reason to laugh, not panic.
              </p>

              <b>Vision and Potential</b>
              <p>

                Retardio envisions a world where crypto isn’t about perfection, but personality. Sure, other tokens promise "efficiency" and "optimization," but Retardio knows the real treasure is in the journey – no matter how many banana peels you trip over along the way! With a loyal community that thrives on the meme’s chaotic energy, Retardio is here to prove that taking it slow and enjoying the ride can be just as rewarding as chasing the moon.</p>
           
          
            
            <b>Technological Hilarity</b>
            <p>

              Unlike your typical blockchain powerhouse, Retardio’s tech is as quirky as its name. We’ve embraced the Proof-of-Dawdle mechanism, where transactions are validated not by speed, but by the patience of the community. And no, Retardio doesn’t promise lightning-fast speeds – it’s more like a comical unicycle, wobbly but always moving forward. With Retardio, you never know what’s around the corner, but it’s bound to be a good time!
            </p>  

          </div>

          <div className={styles.meme__gallery} id="gallery">
            <div className={styles.meme}>
              <Image src={MemeOne} alt="#"/>
             </div>

             <div className={styles.meme}>
              <Image src={MemeTwo} alt="#"/>
             </div>

             <div className={styles.meme}>
              <Image src={MemeThree} alt="#"/>
             </div>

             <div className={styles.meme}>
              <Image src={MemeFour} alt="#"/>
             </div>

             <div className={styles.meme}>
              <Image src={MemeFive} alt="#"/>
             </div>

             <div className={styles.meme}>
              <Image src={MemeSix} alt="#"/>
             </div>

              <div className={styles.meme}>
                  <Image src={MemeSeven} alt="#"/>
              </div>

              <div className={styles.meme}>
                  <Image src={MemeEight} alt="#"/>
              </div>

              <div className={styles.meme}>
                  <Image src={MemeNine} alt="#"/>
              </div>
             

          </div>

          <Steps/>

          <Footer/>
        </div>
      )}

    </>
  );
}
