// усе для запипу на сервер 1 пост 1 гет

const BASE_URL = 'https://portfolio-js.b.goit.study/api';

const params = {
  get: 'reviews',
  post: 'requests',
};

export async function searchReviews() {
  try {
    const response = await fetch(`${BASE_URL}/${params.get}`);

    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error; // Перенаправлення помилки для обробки на вищих рівнях
  }
}
