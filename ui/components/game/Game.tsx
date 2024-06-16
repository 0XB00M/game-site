'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';


interface Props {
  tab: string;
}

const Game: React.FC<Props> = ({ tab }) => {

  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  // const data = [
  //   {
  //     provider: '',
  //     providerName: '',
  //     gameType: [],
  //     logoURL: '',
  //     logoMobileURL: '',
  //     logoTransparentURL: '',
  //     image: {
  //       vertical: '',
  //       horizontal: '',
  //       banner: ''
  //     },
  //     status: ''
  //   }
  // ]

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api-test.ambexapi.com/api/v1/ext/gameList/664DF64C2EA2D0B684D1F1F7/testopuplunarr`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            agentUsername: 'testopuplunarr',
            key: 'OdcwK_23oCJl9IQBLQRZn',
            tab,
            web: 'sportbook101',
          }),
        });
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();

        
        setGames(data.data);
        setLoading(false);
        console.log(games);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [tab]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      
    </div>
  );
};

export default Game;