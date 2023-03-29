import { Injectable } from '@nestjs/common';

const movies = [
  {
    id: 'tt0055867',
    title: 'Costantino il grande (1961)',
    director: 'Lionello De Felice',
    genre: ['Adventure', 'Drama', 'History', 'Romance', 'War'],
    posterUrl:
      'https://boomerangdb.nyc3.cdn.digitaloceanspaces.com/posters/webp/PublicDomainJadranPicturesandJoniaPicturesConstantineandtheCross1962.webp',
    reviewCounts: 581,
    reviewScore: 5.9,
  },
  {
    id: 'tt0021502',
    title: 'Under Texas Skies (1930)',
    director: 'J.P. McGowan',
    genre: [''],
    posterUrl:
      'https://boomerangdb.nyc3.cdn.digitaloceanspaces.com/posters/webp/UnderTexasSkies.webp',
    reviewCounts: 46,
    reviewScore: 5.4,
  },
  {
    id: 'tt0025699',
    title: 'Randy Rides Alone (1934)',
    director: 'Harry L. Fraser',
    genre: ['Action', 'Mystery', 'Romance', 'Western'],
    posterUrl:
      'https://boomerangdb.nyc3.cdn.digitaloceanspaces.com/posters/webp/RandyRidesAlone.webp',
    reviewCounts: 201,
    reviewScore: 5.3,
  },
  {
    id: 'tt0028725',
    title: 'Clipped Wings (1937)',
    director: 'Stuart Paton',
    genre: ['Action', 'Adventure', 'Crime', 'Romance', 'Thriller', 'War'],
    posterUrl:
      'https://boomerangdb.nyc3.cdn.digitaloceanspaces.com/posters/webp/clipped_wings.webp',
    reviewCounts: 297,
    reviewScore: 4.3,
  },
  {
    id: 'tt0048818',
    title: 'Yellowneck (1955)',
    director: 'R. John Hugh',
    genre: ['Adventure', 'Drama', 'War', 'Western'],
    posterUrl:
      'https://boomerangdb.nyc3.cdn.digitaloceanspaces.com/posters/webp/Yellowneck1955cosmo.webp',
    reviewCounts: 353,
    reviewScore: 4.3,
  },
];

@Injectable()
export class MovieService {}
