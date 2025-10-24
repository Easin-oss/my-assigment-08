import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom'; 
import { appData } from '../data';
import { useInstallation } from '../hooks/useInstallation'; 
import toast from 'react-hot-toast'; 
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const styles = {
  page: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '40px 24px',
    fontFamily: 'sans-serif',
  },
  header: {
    display: 'flex',
    gap: '32px',
    marginBottom: '48px',
    
  },
  image: {
    width: '192px',
    height: '192px',
    borderRadius: '24px',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    objectFit: 'cover',
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: '40px',
    fontWeight: '800',
    margin: '0 0 8px 0',
  },
  company: {
    fontSize: '18px',
    color: '#555',
    margin: '0 0 24px 0',
  },
  stats: {
    display: 'flex',
    gap: '24px',
    color: '#333',
    marginBottom: '24px',
  },
  
  installButton: {
    backgroundColor: '#10b981',
    color: 'white',
    padding: '12px 40px',
    fontSize: '18px',
    fontWeight: '600',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },

  disabledButton: {
    backgroundColor: '#9ca3af', 
    color: '#e5e7eb',
    padding: '12px 40px',
    fontSize: '18px',
    fontWeight: '600',
    border: 'none',
    borderRadius: '8px',
    cursor: 'not-allowed',
  },
  sectionTitle: {
    fontSize: '24px',
    fontWeight: '700',
    margin: '0 0 16px 0',
    borderBottom: '1px solid #e5e7eb',
    paddingBottom: '8px',
  },
  chartContainer: {
    marginTop: '50px',
    marginBottom: '48px',
  },
  chartWrapper: {
    width: '100%',
    height: '300px',
  },
  descriptionContainer: {
    marginTop: '40px',
  },
  descriptionText: {
    lineHeight: '1.7',
    color: '#333',
    margin: '0 0 16px 0',
  },
  detailsText: {
    marginTop: '20px',
    color: '#444',
  }
};



const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const app = appData.find(a => a.id === appId);

  
  const { installApp, isInstalled } = useInstallation();

  const handleInstall = () => {
    installApp(appId);
    toast.success(`${app.title} installed successfully!`);
  };

 
  if (!app) {
    return (
      <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'sans-serif' }}>
        <h2>App Not Found</h2>
        <p>Sorry, we couldn't find an app with that ID.</p>
        <Link to="/" style={{color: '#3b82f6', textDecoration: 'none'}}>Go Home</Link>
      </div>
    );
  }

  const alreadyInstalled = isInstalled(appId);

  return (
    <div style={styles.page}>
      
    
      <section style={styles.header}>
        <img src={app.image} alt={app.title} style={styles.image} />
        <div style={styles.details}>
          <h1 style={styles.title}>{app.title}</h1>
          <p style={styles.company}>{app.companyName}</p>
          <div style={styles.stats}>
            <span>Rating: <strong>{app.ratingAvg} ★</strong> ({app.reviews} reviews)</span>
            <span>Downloads: <strong>{app.downloads.toLocaleString()}</strong></span>
          </div>
          <button 
            onClick={handleInstall} 
            disabled={alreadyInstalled}
           
            style={alreadyInstalled ? styles.disabledButton : styles.installButton}
          >
            {alreadyInstalled ? 'Installed' : 'Install'}
          </button>
        </div>
      </section>

     
      <section style={styles.chartContainer}>
        <h2 style={styles.sectionTitle}>Review Snapshot</h2>
        <div style={styles.chartWrapper}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart 
              data={app.ratings}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      
      <section style={styles.descriptionContainer}>
        <h2 style={styles.sectionTitle}>Description</h2>
        <p style={styles.descriptionText}>{app.description}</p>
        <div style={styles.detailsText}>
          <strong>Size:</strong> {app.size} MB
        </div>
      </section>

    </div>
  );
};

export default AppDetails;