import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}  >
      <Head>
        <title>Offesive Gaming</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header className={styles.header}>

        
        <nav className={styles.nav}>
          <a href="/" className='site-title'>
          Offesive Gaming

          </a>
          <ul>
            <li>
            <a href="/Vision">Vision</a>
            </li>
             <li>
            <a href="/Culture">Culture</a>
            </li>
            <li>
            <a href="/Games">Games</a>
            </li>
            <li>
            <a href="/Turku">Turku</a>
            </li>
          
          
          
          </ul>
          
        </nav>

      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Offesive Gaming
        </h1>

        <p className={styles.description}>
          Our Games. 
          
        </p>

        <div className={styles.grid} >
        <h2>Orkki peli &rarr;</h2>
            
          <a href="https://orkkypely.offensivegames.dy.fi/">
            <Image src="/peli.png" alt="peli" className={styles.card} width={600} height={200} />
            
          </a>

        
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://bevyengine.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/bevy.png" alt="bevy Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
