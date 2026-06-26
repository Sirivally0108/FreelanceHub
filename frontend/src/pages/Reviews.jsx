import { useEffect, useState } from "react";
import axios from "axios";

function Reviews() {

  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?.user_id;

  const [reviews, setReviews] = useState([]);

  useEffect(() => {

    axios
      .get(`http://localhost:5000/api/reviews/${userId}`)
      .then(res => setReviews(res.data.data))
      .catch(console.log);

  }, []);

  const avg =
    reviews.length > 0
      ? (
          reviews.reduce((s, r) => s + Number(r.rating), 0) /
          reviews.length
        ).toFixed(1)
      : 0;

  return (

    <div style={styles.page}>

      <h1>⭐ Reviews & Ratings</h1>

      <div style={styles.summary}>

        <h2>{avg} ⭐</h2>

        <p>{reviews.length} Reviews Received</p>

      </div>

      {
        reviews.length === 0 ?

        <div style={styles.empty}>
          No Reviews Yet
        </div>

        :

        reviews.map(review => (

          <div
            key={review.review_id}
            style={styles.card}
          >

            <h3>
              Rating : ⭐ {review.rating}
            </h3>

            <p>{review.review_text}</p>

          </div>

        ))

      }

    </div>

  );

}

const styles={

page:{
padding:"30px",
background:"#eef7ff",
minHeight:"100vh"
},

summary:{
background:"#0284c7",
color:"white",
padding:"25px",
borderRadius:"15px",
marginBottom:"25px",
textAlign:"center"
},

card:{
background:"white",
padding:"20px",
borderRadius:"12px",
marginBottom:"15px",
boxShadow:"0 4px 10px rgba(0,0,0,.1)"
},

empty:{
background:"white",
padding:"40px",
textAlign:"center",
borderRadius:"12px"
}

};

export default Reviews;