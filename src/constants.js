import {
  AutoAwesome,
  Bloodtype,
  FamilyRestroom,
  Fort,
  LiveTv,
  LocalMovies,
  MenuBook,
  MoodBad,
  Pool,
  Reorder,
  StarPurple500,
} from '@mui/icons-material';

export const iconComponents = {
  AutoAwesome,
  StarPurple500,
  MenuBook,
  FamilyRestroom,
  Pool,
  LiveTv,
  LocalMovies,
  Reorder,
  Fort,
  Bloodtype,
  MoodBad,
};

export const TOP_LISTS = [
  {
    title: 'Топ 100 популярных фильмов',
    icon: 'AutoAwesome',
    url: '/popular',
  },
  {
    title: 'Топ 250 лучших фильмов',
    icon: 'StarPurple500',
    url: '/best',
  },
  {
    title: 'Вампиры',
    icon: 'Bloodtype',
    url: '/vampire',
  },

  {
    title: 'Комиксы',
    icon: 'MenuBook',
    url: '/comics',
  },
  {
    title: 'Семейные',
    icon: 'FamilyRestroom',
    url: '/family',
  },
  {
    title: 'Зомби',
    icon: 'MoodBad',
    url: 'zombie',
  },
  {
    title: 'Катастрофы',
    icon: 'Pool',
    url: 'catastrophe',
  },
  {
    title: 'Популярные сериалы',
    icon: 'LiveTv',
    url: '/popular-serials',
  },
];

export const MOVIE_LISTS = [
  {
    title: 'Фильмы',
    icon: 'LocalMovies',
    url: '/films',
  },
  {
    title: 'Сериалы',
    icon: 'Reorder',
    url: '/serials',
  },
  {
    title: 'Мультфильмы',
    icon: 'Fort',
    url: '/cartoons',
  },
];
