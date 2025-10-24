import { useState, useEffect } from 'react';

const getInstalledApps = () => {
  const installed = localStorage.getItem('installedApps');
  return installed ? JSON.parse(installed) : [];
};

export const useInstallation = () => {
  const [installedIds, setInstalledIds] = useState(getInstalledApps());

  useEffect(() => {
    localStorage.setItem('installedApps', JSON.stringify(installedIds));
  }, [installedIds]);

  const installApp = (appId) => {
    if (!installedIds.includes(appId)) {
      setInstalledIds(prevIds => [...prevIds, appId]);
    }
  };

  const uninstallApp = (appId) => {
    setInstalledIds(prevIds => prevIds.filter(id => id !== appId));
  };

  const isInstalled = (appId) => {
    return installedIds.includes(appId);
  };

  return { installApp, uninstallApp, isInstalled, installedIds };
};