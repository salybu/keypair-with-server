import { useState } from 'react';

const useWalletTab = () => {
  const [tab, setTab] = useState<number>(1);

  const handleChange = (e: React.SyntheticEvent, newTab: number): void => {
    setTab(newTab);
  };

  return { tab, handleChange };
};

export default useWalletTab;
