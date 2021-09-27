export const fetchOffers = async (title?: string) => {
    let offers = []
    let headers = {"Content-Type": "application/json"};
    let url = title ? `http://localhost:3001/offers?title=${title}` : 'http://localhost:3001/offers'
    let fetchedOffers = fetch(url, {
      headers
    })
        .then(successResponse => {
            if (successResponse.status !== 200) {
              return null;
            } else {
              return successResponse.json();
            }
          })
        .catch(err => {
            console.log('error: ' + err);
        });

    offers.push(fetchedOffers)
    let results = await Promise.all(offers);

return results;
}