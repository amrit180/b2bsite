import { FiBookmark, FiShare2 } from "react-icons/fi";

const Card = (props) => (
  <>
    <div class="card mt-5" style={{ maxWidth: "500px" }}>
      <img
        src="https://res.cloudinary.com/dydwwknyv/image/upload/v1621869929/afblng2ttsbmcpa5l9ss.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content. Do excepteur culpa dolor mollit sunt irure
          officia laborum. Dolor ullamco cillum aute tempor amet. Eiusmod anim
          aute est eiusmod laboris reprehenderit eiusmod minim duis proident
          cupidatat reprehenderit. Laboris fugiat aute irure amet fugiat enim
          fugiat magna aliqua cupidatat consequat velit dolore et. Minim
          exercitation reprehenderit adipisicing pariatur.
        </p>
        <hr />
        <div className="universalAround">
          <FiBookmark size={25} />
          <FiShare2 size={25} />
        </div>
      </div>
    </div>
  </>
);
export default Card;
