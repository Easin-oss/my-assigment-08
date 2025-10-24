import React from 'react';
import { Link } from 'react-router-dom';
import { appData } from '../data';
import heroBannerImage from '../assets/hero.png'; 
const styles = {
  page: {
    fontFamily: 'sans-serif',
  },
 
  banner: {
    textAlign: 'center',
    padding: '50px 20px',
    backgroundColor: '#f4f4f4',
  },
  bannerImage: {
    width: '100%',
    maxWidth: '384px',
    margin: '0 auto 32px auto',
  },
  bannerTitle: {
    fontSize: '36px',
    fontWeight: '700',
    margin: '0 0 16px 0',
  },
  bannerSubtitle: {
    fontSize: '18px',
    color: '#555',
    margin: '0 0 32px 0',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
  },
 
  button: {
    padding: '12px 24px',
    borderRadius: '8px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    fontSize: '16px',
  },
  buttonPrimary: {
    backgroundColor: '#1f2937',
    color: 'white',
  },
  buttonSecondary: {
    backgroundColor: 'white',
    color: '#1f2937',
    border: '2px solid #e5e7eb',
  },
 
  statesSection: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: '40px 20px',
    backgroundColor: 'white',
  },
  stateCard: {
    textAlign: 'center',
    margin: '10px',
  },
  stateH3: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#3b82f6',
    margin: '0 0 4px 0',
  },
  stateP: {
    margin: 0,
    color: '#555',
  },
 
  topAppsSection: {
    padding: '40px 20px',
    backgroundColor: '#f4f4f4',
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '32px',
    fontWeight: '700',
    margin: '0 0 32px 0',
  },
  appGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  showAllContainer: {
    textAlign: 'center',
    marginTop: '30px',
  },
  
  appCard: {
    border: '1px solid #ccc',
    padding: '10px',
    margin: '10px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    backgroundColor: 'white',
  },
  appCardImage: {
    width: '100%',
    height: '160px',
    objectFit: 'cover',
    borderRadius: '4px',
  },
  appCardTitle: {
    marginTop: '10px',
    marginBottom: '5px',
    fontSize: '18px',
    fontWeight: '600',
  },
  appCardP: {
    margin: '0 0 5px 0',
    fontSize: '14px',
    color: '#555',
  },
  appCardRating: {
    margin: 0,
    fontSize: '14px',
    color: '#111',
  },
};

const AppCard = ({ app }) => {
  return (
    <div style={styles.appCard}>
      <img src={app.image} alt={app.title} style={styles.appCardImage} />
      <h3 style={styles.appCardTitle}>{app.title}</h3>
      <p style={styles.appCardP}>Downloads: {app.downloads.toLocaleString()}</p>
      <p style={styles.appCardRating}>Rating: {app.ratingAvg} ★</p>
    </div>
  );
};

const Home = () => {
  const topApps = appData.slice(0, 8); 

  

  return (
    <div style={styles.page}>
    
      <section style={styles.banner}>
        
        <img 
          src={heroBannerImage} 
          alt="Hero IO Banner" 
          style={styles.bannerImage} 
        />
        
        <h1 style={styles.bannerTitle}>Welcome to Hero IO</h1>
        <p style={styles.bannerSubtitle}>Your new store for the best apps.</p>
        <div style={styles.buttonContainer}>
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <button style={{...styles.button, ...styles.buttonPrimary}}>App Store</button>
          </a>
          <a href="https://play.google.com/store/" target="_blank" rel="noopener noreferrer">
            <button style={{...styles.button, ...styles.buttonSecondary}}>Play Store</button>
          </a>
        </div>
      </section> 

      
      <section style={styles.statesSection}>
        <div style={styles.stateCard}>
          <h3 style={styles.stateH3}>1M+</h3>
          <p style={styles.stateP}>Active Users</p>
        </div>
        <div style={styles.stateCard}>
          <h3 style={styles.stateH3}>500k+</h3>
          <p style={styles.stateP}>Downloads</p>
        </div>
        <div style={styles.stateCard}>
          <h3 style={styles.stateH3}>10k+</h3>
          <p style={styles.stateP}>Positive Reviews</p>
        </div>
      </section>
      
     
      <section style={styles.topAppsSection}>
        <h2 style={styles.sectionTitle}>Top Apps</h2>
        <div style={styles.appGrid}>
          {topApps.map(app => (
            <Link key={app.id} to={`/app/${app.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <AppCard app={app} />
            </Link>
          ))}
        </div>
        <div style={styles.showAllContainer}>
          <Link to="/apps">
            
            <button style={{...styles.button, ...styles.buttonPrimary}}>Show All Apps</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;