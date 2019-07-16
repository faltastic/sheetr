import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import "./styles/about.scss";

export default function About() {
  return (
    <section className="about large-text">
      <Grid fluid>
        <Row>
          <Col xs={12} md={8} mdOffset={2}>
            <h2> About the Project</h2>
            <p>
              Lorem ipsum dolor sit amet, sit rutrum cursus dictumst feugiat
              magna. Tempus eget luctus morbi luctus libero, aliquam sem, vitae
              hac eu velit, feugiat nullam mi. Faucibus est sem penatibus sed,
              suscipit aliquam libero maecenas, suspendisse turpis cras wisi
              donec. Mauris orci sagittis cras nec, in lectus quis pellentesque
              purus, ac faucibus suscipit faucibus eget hendrerit at, laoreet
              torquent nec, rutrum ut dui viverra maecenas ante.
            </p>
            <p>
              {" "}
              Vestibulum vestibulum aut feugiat vestibulum aliquet nam, faucibus
              diam proin tincidunt consectetuer aenean, libero ante pulvinar
              sem, eget nam mattis a conubia vehicula, porta nonummy curabitur
              nam amet mi integer. Orci amet nostra vel, magnis ornare leo
              voluptatem consequat vitae ipsum, semper integer aliquam. Nibh
              urna euismod in morbi habitasse, repellat semper nostra ante sed
              elementum, ipsum ligula ullamcorper sit dapibus, ut sapien in.
              Neque vitae nullam sed aute nec, vitae ligula pretium pellentesque
              quis at velit, facilisis in viverra turpis condimentum vel, varius
              leo hendrerit porta nec. Dignissim mi sagittis porttitor feugiat
              phasellus, neque elit in tristique in quisque, suspendisse auctor
              metus cras vel dapibus, interdum odio semper.{" "}
            </p>

            <p>
              Porttitor phasellus placerat eros consectetuer ligula, wisi donec
              nulla wisi leo erat nulla. Luctus pellentesque tempor dolor, odio
              metus ac urna. Elit in mauris wisi, et turpis massa commodo a
              curabitur quis, consequat mauris nunc in eros in. Arcu morbi,
              accumsan ut rhoncus nullam adipiscing dolor vivamus, nulla magna
              molestiae gravida velit donec, class sit lacinia quis, aliquam
              consectetuer augue ultrices ullamcorper eget ac. Tellus erat sit
              ridiculus a aut est, nonummy sed elementum neque in erat.
            </p>
            <h2> About Us </h2>
            <p>
              Massa vivamus tellus ut. Aliquam tempor, vel sodales odio etiam
              elit ante ultrices, feugiat vestibulum tortor et penatibus elit
              purus, diam wisi wisi elit ut felis ornare. Sapien penatibus quis
              consectetuer eros purus, mi nulla volutpat pede, vehicula nostrum
              donec tristique pellentesque dolor mollis. Rhoncus nonummy,
              dignissim diam proin nisl tristique, non pretium sagittis eu, pede
              dapibus lorem dolor eget ultrices bibendum.
            </p>
            <p>
              Suspendisse dui elementum iaculis, duis non exercitationem sit
              sapien, sed id nonummy ut dignissim sed, dui odio morbi suscipit
              malesuada erat magna, tincidunt quis mauris. Placerat nibh natoque
              erat praesent massa purus, at vehicula nisl enim aenean fermentum,
              a mi mi a. Libero est, et convallis erat, faucibus et diam.
              Sodales adipiscing sit vivamus accumsan. Ut leo nisi arcu et. Ut
              ultrices elementum, aliquam vitae adipiscing amet, eros at eget
              tellus urna dictum suspendisse, aliquam neque platea nonummy
              tempor. Vel justo amet sagittis nibh dapibus suscipit, ipsum et
              vel eros, aliquam aenean amet ante urna at fusce, vitae nec velit
              justo sed, conubia nisl non quam duis. Dolor justo in id a.
            </p>

            <p class="highlighted">
              * +++++++ We do not tolerate any kind of sexism, racism and other
              forms of discrimination ++++++
            </p>
            <h2>Contact </h2>
            <p>
              If you have any questions or requests don’t hesitate to contact
              us:
            </p>
            <p>
              Demo Address
              <br /> @ Demo Place
              <br />
              Demostr. 1
              <br />
              12435 Berlin
              <br />
              <br />
              Email: demo [at] mail [punkt] net
              <br />
              <br />
            </p>
          </Col>
        </Row>
      </Grid>
    </section>
  );
}
