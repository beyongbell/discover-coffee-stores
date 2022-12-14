import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Banner from '@/components/banner';
import Card from '@/components/card';

import coffeeStores from "../data/coffee-stores.json";

export async function getStaticProps(context) {
  return {
    props: {
      coffeeStores,
    },
  };
}

export default function Home(props) {
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
                key={coffeeStore.id}
                name={coffeeStore.name}
                imgUrl={coffeeStore.imgUrl}
                href={`/coffee-store/${coffeeStore.id}`}
                className={styles.card}
              />
            );
          })}
        </div>
      </main>
    </div>
  )
}
