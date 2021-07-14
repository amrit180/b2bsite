import { Link } from "react-router-dom";
import "../styles/Header.css";
const Header = (props) => (
  <>
    <div className="navbarMain universalCenter fixed-top">
      <div className="universalBetween container">
        <div className="universalCenter">
          <div className="me-5">
            <img
              src="https://res.cloudinary.com/dydwwknyv/image/upload/v1624347345/zmoqpindbciaahzkpjak.png"
              style={{ height: "50px", width: "50px" }}
            />
          </div>
          <div>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
        </div>

        <div>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                My Network
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Campaign
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="nav justify-content-center universalFlex">
            <li className="nav-item">
              <div class="dropdown">
                <button
                  className=" dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ border: "none", backgroundColor: "#fff" }}
                >
                  <img
                    src="https://res.cloudinary.com/dydwwknyv/image/upload/v1624346689/iw2pdkrp6e7ry9l3zqgw.jpg"
                    style={{
                      height: "40px",
                      width: "40px",
                      borderRadius: "50%",
                    }}
                  />
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Link
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </>
);
export default Header;
