// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const result = await fetch("http://localhost:8080/products");
    const data = await result.json();
    resolve({ data });
  });
}

export function filterProducts(filter) {
  let queryString = "";
  for (let key in filter) {
    queryString += `${key}=${filter[key]}&`;
  }
  console.log(queryString, "wyue");
  return new Promise(async (resolve) => {
    const result = await fetch("http://localhost:8080/products?" + queryString);
    const data = await result.json();
    console.log(data + "hsjklfh");
    resolve({ data });
  });
}
