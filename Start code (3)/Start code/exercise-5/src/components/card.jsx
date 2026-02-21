export default function Card({cards}) {
 return (
  <li>
    <img src={cards.src} alt={cards.alt} />
    
  </li>
 );
}