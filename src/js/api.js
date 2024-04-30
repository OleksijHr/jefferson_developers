// усе для запипу на сервер 1 пост 1 гет


const BASE_URL = "https://portfolio-js.b.goit.study/api";

const params = {
    get: "reviews",
    post: "requests"
}

//                                          REVIEWS SECTION

export async function searchReviews() {
    return await fetch(`${BASE_URL}/${params.get}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
             return response.json();
    })
};
