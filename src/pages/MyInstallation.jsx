import React from 'react';
import { Link } from 'react-router-dom'; 
import { useInstallation } from '../hooks/useInstallation';
import { appData } from '../data';
import toast from 'react-hot-toast';
import downloadIcon from '../assets/icon-downloads.png'; 


const styles = {
  page: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 24px',
    fontFamily: 'sans-serif',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  headerH1: {
    fontSize: '36px',
    fontWeight: '800',
    margin: '0 0 8px 0',
  },
  headerP: {
    fontSize: '18px',
    color: '#555',
    margin: 0,
  },
  noAppsContainer: {
    textAlign: 'center',
    padding: '60px 20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
  },
  noAppsH2: {
    fontSize: '24px',
    marginBottom: '16px',
  },
  browseButton: {
    backgroundColor: '#1f2937',
    color: 'white',
    padding: '12px 24px',
    borderRadius: '8px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    fontSize: '16px',
  },
  
  appGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '32px',
  },
 
  card: {
    width: '250px', 
    border: '1px solid #e5e7eb',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    textDecoration: 'none',
    color: 'inherit',
    transition: 'all 0.3s ease',
  },
  cardImage: {
    width: '100%',
    height: '192px',
    objectFit: 'cover',
  },
  cardContent: {
    padding: '20px',
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: '700',
    margin: '0 0 8px 0',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  stat: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginTop: '12px',
    color: '#4b5563',
    fontSize: '14px',
  },
  icon: {
    width: '16px',
    height: '16px',
  },
  star: {
    color: '#f59e0b',
    fontSize: '16px',
  },
  ratingText: {
    fontWeight: '600',
    color: '#1f2937',
  },
  uninstallButton: {
    backgroundColor: '#ef4444', 
    color: 'white',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '8px',
    fontWeight: '500',
    fontSize: '14px',
    cursor: 'pointer',
    width: '100%',
    marginTop: '16px',
  }
};



const MyInstallation = () => {
  const { installedIds, uninstallApp } = useInstallation();

  const installedApps = appData.filter(app => installedIds.includes(app.id));

  const handleUninstall = (appId) => {
    uninstallApp(appId);
    toast.error('App uninstalled.');
  };

  return (
    <div style={styles.page}> 
      <div style={styles.header}>
        <h1 style={styles.headerH1}>My Installed Apps</h1>
        <p style={styles.headerP}>You have {installedApps.length} app(s) installed.</p>
      </div>

      {installedApps.length === 0 ? (
        <div style={styles.noAppsContainer}>
          <h2 style={styles.noAppsH2}>No Apps Installed</h2>
          <p style={{ color: '#555', marginBottom: '24px' }}>You haven't installed any apps yet. Go explore!</p>
          <Link to="/apps">
            <button style={styles.browseButton}>Browse Apps</button>
          </Link>
        </div>
      ) : (
        <div style={styles.appGrid}>
          {installedApps.map(app => (
            <div key={app.id} style={styles.card}>
              
              <img 
                src={app.image} 
                alt={app.title} 
                style={styles.cardImage}
              />
              <div style={styles.cardContent}>
                <h3 style={styles.cardTitle}>{app.title}</h3>
                
                <div style={styles.stat}>
                  <img src={downloadIcon} alt="downloads" style={styles.icon} /> 
                  <span>{app.downloads.toLocaleString()}</span>
                </div>
                
                <div style={styles.stat}>
                  <span style={styles.star}>★</span> 
                  <span style={styles.ratingText}>{app.ratingAvg}</span>
                </div>

                
                <button 
                  onClick={() => handleUninstall(app.id)}
                  style={styles.uninstallButton}
                >
                  Uninstall
                </button>
              </div>
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyInstallation;