import { faker } from '@faker-js/faker';

const generateUserGrowthData = () => {
  const data = [];
  const startDate = new Date(2023, 0, 1);
  let totalUsers = 10000;
  let activeUsers = 8000;

  for (let i = 0; i < 12; i++) {
    const month = new Date(startDate.getFullYear(), startDate.getMonth() + i, 1);
    totalUsers += faker.number.int({ min: 500, max: 2000 });
    activeUsers += faker.number.int({ min: 300, max: 1500 });

    data.push({
      month: month.toLocaleString('default', { month: 'short' }),
      totalUsers,
      activeUsers,
    });
  }

  return data;
};

const generateRevenueData = () => {
  return [
    { name: 'Subscriptions', value: faker.number.int({ min: 500000, max: 1000000 }) },
    { name: 'Advertisements', value: faker.number.int({ min: 100000, max: 500000 }) },
    { name: 'Merchandise', value: faker.number.int({ min: 50000, max: 200000 }) },
  ];
};

const generateTopSongs = () => {
  return Array.from({ length: 5 }, () => ({
    name: faker.music.songName(),
    artist: faker.person.fullName(),
    streams: faker.number.int({ min: 100000, max: 1000000 }),
  }));
};

const generateRecentStreams = () => {
  return Array.from({ length: 100 }, () => ({
    id: faker.string.uuid(),
    songName: faker.music.songName(),
    artist: faker.person.fullName(),
    dateStreamed: faker.date.recent({ days: 30 }).toISOString(),
    streamCount: faker.number.int({ min: 1, max: 100 }),
    userId: faker.string.uuid(),
  }));
};

export const generateMockData = () => {
  return {
    totalUsers: faker.number.int({ min: 100000, max: 500000 }),
    activeUsers: faker.number.int({ min: 50000, max: 200000 }),
    totalStreams: faker.number.int({ min: 1000000, max: 5000000 }),
    revenue: faker.number.int({ min: 1000000, max: 5000000 }),
    topArtist: faker.person.fullName(),
    userGrowth: generateUserGrowthData(),
    revenueDistribution: generateRevenueData(),
    topSongs: generateTopSongs(),
    recentStreams: generateRecentStreams(),

    genreDistribution: [
        { id: 'Pop', value: 30 },
        { id: 'Rock', value: 25 },
        { id: 'Hip Hop', value: 20 },
        { id: 'Electronic', value: 15 },
        { id: 'Country', value: 10 }
      ]
  };
};