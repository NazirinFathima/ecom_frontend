import axios from "axios";

const url = "https://ecom-back-end.up.railway.app";

export async function getHomeCarousels(type) {
  const response = await axios.get(url + "/carousels/" + type);
  if (response && response.data) {
    return response?.data;
  }
  return null;
}
export async function getHomeProducts(type) {
  const response = await axios.get(url + "/products/" + type);
  if (response && response.data) {
    return response?.data;
  }
  return null;
}

export async function getProduct(id) {
  const response = await axios.get(url + "/product/" + id);
  if (response && response.data) {
    return response?.data;
  }
  return null;
}

export async function submitOrder(orderDetails) {
  const response = await axios.post(url + "/submitOrder/", orderDetails);
  if (response && response.data) {
    return response?.data;
  }
  return null;
}

export async function getOrders(email) {
  const response = await axios.get(url + "/order/" + email);
  if (response && response.data) {
    return response?.data;
  }
  return null;
}

export async function getProducts() {
  const response = await axios.get(url + "/products");
  if (response && response.data) {
    return response?.data;
  }
  return null;
}