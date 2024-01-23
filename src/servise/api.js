import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com';

export const ApiByPhoto = async paramsHits => {
  const params = {
    key: '41261447-8e6e35c805284eb5c4b03f22e',
    image_type: 'photo',
    safesearch: true,
    q: paramsHits.quary,
    per_page: 20,
    page: paramsHits.page,
  };

  try {
    const { data } = await axios.get('/api/', { params });
    return data;
  } catch (error) {
    alert('Error');
  }
};
