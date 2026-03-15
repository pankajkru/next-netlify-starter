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
        textAlign: 'center',
        padding: '20px'
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
          🚧 Website & Mobile App Coming Soon 🚧
        </p>

        {/* Order Section */}
        <div style={{ marginTop: '25px' }}>
          <p style={{ fontSize: '18px', fontWeight: '500' }}>
            We are currently taking orders through
          </p>

          <p style={{ fontSize: '20px', color: '#ff8c00', fontWeight: 'bold' }}>
            📞 Call / WhatsApp: 7766844229
          </p>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/917766844229"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              marginTop: '10px',
              padding: '12px 22px',
              backgroundColor: '#25D366',
              color: '#fff',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: 'bold'
            }}
          >
            Chat on WhatsApp
          </a>

      </main>

      <Footer />
    </div>
  )
}
