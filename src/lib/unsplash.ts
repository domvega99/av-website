import "server-only";

const headers = {
  Authorization: `Client-ID IrlsykKF6zMESgUhoNlRsrmA3OhEjhudcCkeLnVa3Nw`,
};

export const getPhotos = async () => {
  const url = new URL("https://api.unsplash.com/photos");

  url.searchParams.set("per_page", "9");
  url.searchParams.set("order_by", "popular");

  return await fetch(url, {
    headers,
    next: {
      revalidate: 86400,
    },
  });
};

export const getPhoto = async (id: string) => {
  return await fetch(`https://api.unsplash.com/photos/${id}`, {
    headers,
    next: {
      revalidate: 86400,
    },
  });
};