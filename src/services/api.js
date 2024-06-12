export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MjQ4ZDQ4YjE5YmVjZjZhNGVlZTUzNzI0OTA4Yjg2OCIsInN1YiI6IjY2Njk2ODA4MjI0ZTEzNDkwZmE2ZGM0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VoNeggAP416o4W5fv3XRosj8CdkiGHB1pOYxJ8029hw',
  },
};

export async function getTrandingMovie() {
  try {
    const res = await fetch(
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
      options
    );
    const data = await res.json();
    return data;
  } catch (err) {
    return console.error(err);
  }
}

export async function getReviewMovie(movie_id) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/reviews?language=en-US&page=1`,
      options
    );
    const data = await res.json();
    return data;
  } catch (err) {
    return console.error(err);
  }
}

export async function getCreditsMovie(movie_id) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/credits?language=en-US`,
      options
    );
    const data = await res.json();
    return data;
  } catch (err) {
    return console.error(err);
  }
}

export async function getDetailsMovie(movie_id) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`,
      options
    );
    const data = await res.json();
    return data;
  } catch (err) {
    return console.error(err);
  }
}

export async function getSearchMovie(query) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      options
    );
    const data = await res.json();
    return data;
  } catch (err) {
    return console.error(err);
  }
}
