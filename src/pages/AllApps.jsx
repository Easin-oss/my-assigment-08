import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { appData } from '../data';
import downloadIcon from '../assets/icon-downloads.png'; 
import appErrorImage from '../assets/App-Error.png'; 


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
  controls: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '32px',
    flexWrap: 'wrap', 
    gap: '20px',
  },
  appCount: {
    fontSize: '18px',
    fontWeight: '600',
  },
  searchSort: {
    display: 'flex',
    gap: '16px',
  },
  searchInput: {
    padding: '10px 14px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '16px',
    width: '250px',
  },
  sortSelect: {
    padding: '10px 14px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '16px',
    backgroundColor: 'white', 
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
  
  appGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '32px',
  },
  noAppsContainer: {
    textAlign: 'center',
    padding: '60px 20px',
    width: '100%', 
  },
  noAppsImage: {
    maxWidth: '300px',
    marginBottom: '16px',
  },
  noAppsH2: {
    fontSize: '24px',
    marginBottom: '16px',
  }
};




const AppCard = ({ app }) => {
  return (
    <div style={styles.card}>
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
      </div>
    </div>
  );
};


const AllApps = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('default'); 

  const filteredAndSortedApps = useMemo(() => {
    const filtered = appData.filter(app =>
      app.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sorted = [...filtered].sort((a, b) => {
      if (sortOrder === 'high-low') {
        return b.downloads - a.downloads;
      }
      if (sortOrder === 'low-high') {
        return a.downloads - b.downloads;
      }
      return 0; 
    });

    return sorted;
  }, [searchTerm, sortOrder]);

  return (
    <div style={styles.page}>
    
      <div style={styles.header}>
        <h1 style={styles.headerH1}>All Applications</h1>
        <p style={styles.headerP}>Browse through our complete collection of apps.</p>
      </div>
      <div style={styles.controls}>
        <div style={styles.appCount}>
          <strong>Total Apps: {filteredAndSortedApps.length}</strong>
        </div>
        <div style={styles.searchSort}>
          <input
            type="text"
            placeholder="Search by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.g.target.value)}
            style={styles.searchInput}
          />
          <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} style={styles.sortSelect}>
            <option value="default">Sort by</option>
            <option value="high-low">Downloads (High-Low)</option>
            <option value="low-high">Downloads (Low-High)</option>
          </select>
        </div>
      </div>

      <div style={styles.appGrid}>
        {filteredAndSortedApps.length > 0 ? (
          filteredAndSortedApps.map(app => (
            <Link key={app.id} to={`/app/${app.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <AppCard app={app} />
            </Link>
          ))
        ) : (
          <div style={styles.noAppsContainer}>
            <img src={appErrorImage} alt="No apps found" style={styles.noAppsImage} />
            <h2 style={styles.noAppsH2}>No App Found</h2>
            <p style={{ color: '#555' }}>We couldn't find any apps matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllApps;

