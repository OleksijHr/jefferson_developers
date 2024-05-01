export function sendFormDataToServer(email, comment) {
  const formData = new FormData();
  formData.append('email', email);
  formData.append('comment', comment);;
  return fetch('https://portfolio-js.b.goit.study/api/requests', {
    method: 'POST',
    body: convertFormData(formData),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to submit request');
      }
      return response.json();
    })
    .catch(error => {
      throw new Error('An error occurred: ' + error.message);
    });
}
const convertFormData = formData => {
    const object = {};
  formData.forEach((value, key) =>  {
    object[key] = value;
  });
  return JSON.stringify(object);
};
