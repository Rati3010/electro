// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise(async (resolve) =>
   { const result = await fetch('http://localhosts:8080')
    const data = await result.json();
    resolve({data})
  }
  );
}
