import react from 'react';


function Card(props){

  return(
  <>
    <div  className="card">
    <div className="cards">
      <img src={props.img} alt=""dark/>
      <p>{props.para} </p>
  <h3>{props.sname}</h3>
      <a href={props.link} target="_blank">
        <button >Watch Now</button>
      </a>
    </div>
  </div>
</>
  );



}
export default Card;