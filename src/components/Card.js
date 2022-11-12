import React from 'react'
//image link https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?cs=srgb&dl=pexels-pixabay-38568.jpg&fm=jpg
function Card() {
  return (
    <div class="card" >
    <img src="https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?cs=srgb&dl=pexels-pixabay-38568.jpg&fm=jpg" class="card-img-top" alt="..."/>  {/* image tag needs closing otherwise it show the error */}
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <button class="btn btn-warning">Go somewhere</button>  
      {/* we use button in place of ahref */}
    </div>
  </div>
  );
}

export default Card