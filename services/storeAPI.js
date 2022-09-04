const API_URL = 'https://front-test-api.herokuapp.com/api/';

export async function getProducts() {
  const options = {};
  const res = await fetch(`${API_URL}product/`, options);
  return res.json();
}

export async function getProductDetails(pid) {
  const options = {};
  const res = await fetch(`${API_URL}product/${pid}/`, options);
  return res.json();
}

export async function addToCart({id, colorCode, storageCode}) {
  const options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id,
      colorCode,
      storageCode
    })
  };
  const res = await fetch(`${API_URL}cart/`, options);
  return res.json();
}