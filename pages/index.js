import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Banner from '@/components/banner';
import Card from '@/components/card';

import coffeeStoresData from "../data/coffee-stores.json";
import { fetchCoffeeStores } from "../lib/coffee-stores";

import useTrackLocation from "../hooks/use-track-location";

export async function getStaticProps(context) {
  const coffeeStores = await fetchCoffeeStores();
  return {
    props: {
      coffeeStores,
    },
  };
}

export default function Home(props) {
  const { handleTrackLocation, latLong, locationErrorMsg, isFindingLocation } = useTrackLocation();

  console.log({ latLong, locationErrorMsg });

  const handleOnBannerButtonClick = () => {
    console.log('Banner button clicked!');
    handleTrackLocation();
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Banner 
          buttonText={isFindingLocation ? "Locating..." : "View stores nearby"} 
          handleOnClick={handleOnBannerButtonClick} 
        />
        {locationErrorMsg && <p>Something went wrong: {locationErrorMsg}</p>}
        <div className={styles.heroImage}>
          <Image src="/static/hero-image.png" width={700} height={400} alt="Hero Image" />
        </div>
        <div className={styles.sectionWrapper}>
          {props.coffeeStores.length > 0 && (
            <>
              <h2 className={styles.heading2}>Toronto stores</h2>
              <div className={styles.cardLayout}>
                {props.coffeeStores.map((coffeeStore) => {
                  return (
                    <Card
                      key={coffeeStore.id}
                      name={coffeeStore.name}
                      imgUrl={
                        coffeeStore.imgUrl ||
                        "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                      }
                      href={`/coffee-store/${coffeeStore.id}`}
                      className={styles.card}
                    />
                  );
                })}
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  )
}
