import React from "react";
import "./styles/footer.css";

export default function Footer(props) {
  return (
    <footer>
      <div class='large-text'>
        <center>
          <p>
            The Unframed Festival is an autonomous self organised project of the
            Unframed Society.
          </p>
          <br />
          <br />
          <a href='http://www.facebook.com/UnframedFestival/'>
            <img
              alt='facebook'
              src='http://www.unframedfestival.de/images/ico/social/facebook-3-48.png'
            />
          </a>
          &nbsp; &nbsp;&nbsp;
          <a href='http://www.instagram.com/unframed_festival/'>
            <img
              alt='instagram'
              src='http://www.unframedfestival.de/images/ico/social/instagram-48.png'
            />
          </a>
          <br />
          <br />
          <br />
          <p>
            This website was built with Love on React using TableTop and
            Masonry.
          </p>
        </center>
      </div>
    </footer>
  );
}
