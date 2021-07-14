import { FiBookmark, FiShare2 } from "react-icons/fi";

const ProfileCard = () => (
  <>
    <div class="card mt-5" style={{ width: "270px" }}>
      <div className="mb-3" style={{ height: "135px", width: "100%" }}>
        <div
          style={{ height: "75px", width: "100%", backgroundColor: "#0093dc" }}
        ></div>
        <img
          src="https://res.cloudinary.com/dydwwknyv/image/upload/v1621869929/afblng2ttsbmcpa5l9ss.jpg"
          class="card-img-top"
          style={{
            position: "absolute",
            height: "55px",
            width: "55px",
            top: "50px",
            left: "40%",
            borderRadius: "50%",
            border: "2px #fff solid",
          }}
          alt="..."
        />
        <div style={{ height: "60px", width: "100%", backgroundColor: "#fff" }}>
          <p className="h5 mt-4 text-center pt-2">
            {" "}
            amritanshu singh
            <br />
            <span className="h6 "> student at techno main salt lake</span>
          </p>
        </div>
      </div>
      <hr />
      <div className="container-fluid">
        <p style={{ fontSize: "14px", fontWeight: "600" }}>
          Connections{" "}
          <span style={{ float: "right" }} className="h6 ">
            82
          </span>
        </p>
      </div>
      <hr />
      <div className="container-fluid">
        <p style={{ fontSize: "14px", fontWeight: "600" }}>
          My Items{" "}
          <span style={{ float: "right" }} className="h6">
            <FiBookmark />
          </span>
        </p>
      </div>
    </div>
  </>
);
export default ProfileCard;
