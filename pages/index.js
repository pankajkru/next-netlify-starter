import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>nobrandTrust – Coming Soon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        
        {/* Logo */}
        <img
          src="/logo-nbt.png"
          alt="nobrandTrust Logo"
          style={{ maxWidth: '220px', marginBottom: '20px' }}
        />

        {/* Brand Name */}
        <h1 style={{ color: '#ff8c00', fontSize: '36px', margin: '10px 0' }}>
          nobrandTrust
        </h1>

        {/* Coming Soon */}
        <p style={{ fontSize: '22px', color: '#555' }}>
          🚧 Coming Soon 🚧
        </p>

      </main>

      <Footer />
    </div>
  )
}

