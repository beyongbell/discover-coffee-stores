import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Banner from '@/components/banner';
import Card from '@/components/card';

import coffeeStores from "../data/coffee-stores.json";

export default function Home() {
  const handleOnBannerButtonClick = () => {
    console.log('Banner button clicked!');
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Banner buttonText="View stores nearby" handleOnClick={handleOnBannerButtonClick} />
        <div className={styles.heroImage}>
          <Image src="/static/hero-image.png" width={700} height={400} alt="Hero Image" />
        </div>
        <div className={styles.cardLayout}>
          {coffeeStores.map((coffeeStore) => {
            return (
              <Card
                name={coffeeStore.name}
                imgUrl="/static/hero-image.png"
                href="/coffee-store/darkhose-coffee"
                className={styles.card}
              />
            );
          })}
        </div>
      </main>
    </div>
  )
}
