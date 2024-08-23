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
    value: 'TOP_POPULAR_MOVIES',
  },
  {
    title: 'Топ 250 лучших фильмов',
    icon: 'StarPurple500',
    url: '/best',
    value: 'TOP_250_MOVIES',
  },
  {
    title: 'Вампиры',
    icon: 'Bloodtype',
    url: '/vampire',
    value: 'VAMPIRE_THEME',
  },

  {
    title: 'Комиксы',
    icon: 'MenuBook',
    url: '/comics',
    value: 'COMICS_THEME',
  },
  {
    title: 'Семейные',
    icon: 'FamilyRestroom',
    url: '/family',
    value: 'FAMILY',
  },
  {
    title: 'Романтика',
    icon: 'VolunteerActivism',
    url: '/romantic',
    value: 'LOVE_THEME',
  },
  {
    title: 'Зомби',
    icon: 'MoodBad',
    url: '/zombie',
    value: 'ZOMBIE_THEME',
  },
  {
    title: 'Катастрофы',
    icon: 'Pool',
    url: '/catastrophe',
    value: 'CATASTROPHE_THEME',
  },
  {
    title: 'Популярные сериалы',
    icon: 'LiveTv',
    url: '/popular-serials',
    value: 'POPULAR_SERIES',
  },
];

export const MOVIE_LISTS = [
  // {
  //   title: 'Фильмы',
  //   icon: 'LocalMovies',
  //   url: '/films',
  // },
  // {
  //   title: 'Сериалы',
  //   icon: 'Reorder',
  //   url: '/serials',
  // },
  // {
  //   title: 'Мультфильмы',
  //   icon: 'Fort',
  //   url: '/cartoons',
  // },
];
