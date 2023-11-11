import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Portfolio.css";
import AOS from "aos";
import "aos/dist/aos.css";
import PayPal from "../../Features/PayPal/PayPal";
import ButtonPay from "../../Features/ButtonPay/ButtonPay";

export const Portfolio = () => {
  return (
    <div className="containerPortfolio">
      <h3>Portfolio</h3>
      <br />
      <div className="boxPortfolio">
        <Card
          sx={{ maxWidth: 345 }}
          className="w3-center w3-animate-left"
          data-aos="fade-right"
        >
          <CardMedia
            className=" w3-hover-opacity"
            sx={{ height: 140, width: 350 }}
            image="../../../img/moviePic.png"
            title="moviePic"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              movieApp
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Upload new movie, updates on a weekly basis and includes trailers
              that are available to watch.{" "}
            </Typography>
          </CardContent>
          <CardActions>
            <div className="btn">
              <a href="https://juda-star.github.io/MoviesApp/">
                <Button size="small">Demo</Button>
              </a>

              {/* <Button w3-btn w3-blue size="small">
                 <ButtonPay/>
              </Button> */}
            </div>
          </CardActions>
        </Card>

        <Card
          className="box w3-center w3-animate-bottom"
          sx={{ maxWidth: 345 }}
          data-aos="fade-up"
        >
          <CardMedia
            className=" w3-hover-opacity"
            sx={{ height: 140, width: 350 }}
            image="../../../img/perfumeShop.jpeg"
            title="moviePic"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Ecommerce Website
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We feel good when we smell good, try new perfumes on half the price.
            </Typography>
          </CardContent>
          <CardActions>
            <a href="http://linkedin.com/in/yehooda-ishta-ba9a9a202">
              <Button size="small">Demo</Button>
            </a>
            {/* <Button size="small">Buy</Button> */}
          </CardActions>
        </Card>

        {/* <Card
          sx={{ maxWidth: 345 }}
          className="w3-center w3-animate-right "
          data-aos="fade-left"
        >
          <CardMedia
            className=" w3-hover-opacity"
            sx={{ height: 140, width: 350 }}
            image="../../../img/TechCarrierProject.jpeg"
            title="TechCarrierProject"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Tech-Career Hackathon
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Model site for students. Student can take class missons from the cloud, see
              events and their grades.
            </Typography>
          </CardContent>
          <CardActions>
            <a href="http://linkedin.com/in/yehooda-ishta-ba9a9a202">
              <Button size="small">Demo</Button>
            </a>
          </CardActions>
        </Card> */}
      </div>
    </div>
  );
};
