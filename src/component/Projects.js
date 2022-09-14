import React from "react";
import Button from "@mui/material/Button";
import "./Projects.css";
import dietapp from "../image/diet app.png";
import blog from "../image/blog.png";
import movielist from "../image/movielist.png";
import chat from "../image/chat.png";
import food from "../image/food.png";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import GitHubIcon from "@mui/icons-material/GitHub";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import Typography from "@mui/material/Typography";
import { Skills } from "./Skills";
import Popover from "@mui/material/Popover";
import EmailIcon from "@mui/icons-material/Email";
import LockOpenRoundedIcon from "@mui/icons-material/LockOpenRounded";
const data = [
  {
    name: "Diet Suggestion App",
    image: dietapp,
    liveLink: "https://dietsuggestionapp.netlify.app/",
    gitFrontLink: "https://github.com/arthi35/dietfrontend.git",
    gitBackLink: "https://github.com/arthi35/Dietbackend.git",
    discription:
      "This is an Diet Suggestion App in this user can add and delete their diet food ,and also user can use this app according to their body type and user can also check their BMI ",
    by: ["ReactJS", "Nodejs", "Express", "MongoDB"],
   
  },
  {
    name: "Blog Application",
    image: blog,
    liveLink: "https://starlit-babka-57fe76.netlify.app",
    gitFrontLink: "https://github.com/arthi35/frontend.git",
    gitBackLink: "https://github.com/arthi35/blog-bd.git",
    discription:
      "This is a Blog-App in this user can create ,edit and delete their blog with authentication of User Login and Register",
    by: ["ReactJS", "Nodejs", "Express", "Redux","MongoDB"],
    
  },
  {
    name: "Chat Application",
    image: chat,
    liveLink: "https://gilded-haupia-ca307c.netlify.app",
    gitFrontLink: "https://github.com/arthi35/chat-app-frontend.git",
    gitBackLink: "https://github.com/arthi35/Chat-app-backend.git",
    discription:
      "Developed an Chat Application With authentication of User Login and Register.This Application contains various chat rooms ",
    by: ["ReactJS", "Nodejs", "Express", "MongoDB", "Mongoose"],
   
  },
  {
    name: "Food Ordering Website",
    image: food,
    liveLink: "https://amazing-otter-8680bc.netlify.app",
    gitFrontLink: "https://github.com/arthi35/food-project-front.git",
    gitBackLink: "https://github.com/arthi35/food-project-back.git",
    discription:
      "Developed an Food Ordering Website With authentication of User Login and Register. The Application has all the necessary features like add to cart and integrated with Stripe Payment Gateway.",
    by: ["ReactJS", "Nodejs", "Redux","Bootstrap","Express", "MongoDB",  "Stripe"],
    
  },
  
  
];
export const Projects = ({ select, setSelect }) => {
  return (
    <div
      className="project_container"
      id="Project"
      onMouseOver={() => setSelect([false, false, true, false])}
    >
      <p className="project_heading">My WORKS</p>
      <p className="project_line">
        Here's some of my projects that I have worked on.
      </p>
      <div className="Project_cardContainer">
        {data.map((d, index) => (
          <ProjectCard
            key={index}
            name={d.name}
            image={d.image}
            liveLink={d.liveLink}
            gitFrontLink={d.gitFrontLink}
            gitBackLink={d.gitBackLink}
            discription={d.discription}
            by={d.by}
            Email={d.Email}
            pass={d.pass}
          />
        ))}
      </div>
    </div>
  );
};

function ProjectCard({
  name,
  image,
  liveLink,
  gitFrontLink,
  gitBackLink,
  discription,
  by,
  Email,
  pass,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <Card sx={{ width: 540, backgroundColor: "rgba(8, 46, 78)" }}>
      <Card
        style={{
          // width: 540,
          // height: 540,
          backgroundColor: "rgba(8, 46, 78)",
          color: "black",
          p: "10px",
        }}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          // height="300"
          style={{ objectFit: "cover" }}
          image={image}
        />
      </Card>

      <Card style={{ backgroundColor: "rgba(8, 46, 78)", color: "black" }}>
        <CardContent>
          <Typography
            gutterBottom
            className="project_title"
            // variant="h5"
            style={{ color: "rgba(234, 180, 30)" }}
            component="div"
          >
            {name}
          </Typography>
          <Typography
            variant="subtitle1"
            className="project_discription"
            // style={{

            // }}
          >
            {discription}
          </Typography>
        </CardContent>
        <CardActions>
          {by.map((s, index) => (
            <p className="project_skill">{s}</p>
          ))}
        </CardActions>
        <CardActions>
          <a href={liveLink} target="_blank">
            <Button
              className="project_btn"
              aria-owns={open ? "mouse-over-popover" : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
              // onMouseLeave={handlePopoverClose}
            >
              Live <ChevronRightOutlinedIcon className="projectIcon" />
            </Button>
          </a>
          {/* <Popover
            id="mouse-over-popover"
            // onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
            sx={{}}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            onClose={handlePopoverClose} */}
            {/* // disableRestoreFocus
          > */}
            {/* <Typography
              className="project_popover"
              sx={{
                p: 1,
                textAlign: "center",
                backgroundColor: "rgba(234, 180, 30)",
                color: "rgba(8, 46, 78)",
              }}
            >
              Credential
            </Typography>
            <Typography
              className="project_popover"
              sx={{
                p: 1,
                backgroundColor: "rgba(234, 180, 30)",
                color: "rgba(8, 46, 78)",
                alignItems: "center",
                display: "flex",
                gap: "10px",
              }}
            >
              <EmailIcon /> {Email}
            </Typography>
            <Typography
              className="project_popover"
              sx={{
                p: 1,
                backgroundColor: "rgba(234, 180, 30)",
                color: "rgba(8, 46, 78)",
                alignItems: "center",
                display: "flex",
                gap: "10px",
              }}
            >
              <LockOpenRoundedIcon /> {pass}
            </Typography> */}
          {/* </Popover> */}
          <a href={gitFrontLink} target="_blank">
            <Button className="project_btn">
              client <GitHubIcon className="projectIcon" />
            </Button>
          </a>
          <a href={gitBackLink} target="_blank">
            <Button className="project_btn">
              server <GitHubIcon className="projectIcon" />
            </Button>
          </a>
        </CardActions>
      </Card>
    </Card>
  );
}

function ProjectRow({
  name,
  image,
  liveLink,
  gitFrontLink,
  gitBackLink,
  discription,
  by,
}) {
  console.log(image);
  return (
    <div className="projectRow">
      <div className="projectRow_text">
        <div className="project_name">
          <h4>{name}</h4>
        </div>
        <div className="project_description">
          <p>{discription}</p>
        </div>
        <div className="project_by">
          <p>{by} </p>
        </div>
        <div className="project_buttons">
          <a href={liveLink} target="_blank">
            <Button className="project_button" variant="contained">
              Live
            </Button>
          </a>
          <a href={gitFrontLink} target="_blank">
            <Button className="project_button" variant="contained">
              Git FrontEnd
            </Button>
          </a>
          <a href={gitBackLink} target="_blank">
            <Button className="project_button" variant="contained">
              Git BackEnd
            </Button>
          </a>
        </div>
      </div>
      <div className="ProjectRow_image">
        <img className="Project_image" src={image} alt={name} />
      </div>
    </div>
  );
}

//   {
//     name: "Movie List",
//     image: movielist,
//     liveLink: "https://zealous-fermi-d50937.netlify.app",
//     gitFrontLink: "https://github.com/vinuppriyaB/react-movielist",
//     gitBackLink: "https://github.com/vinuppriyaB/node-movieproject",
//     discription:
//       "This project is my first full stack project ,where I learnt API calls, CRUD operation.Here we can edit,delete,add the movie details and display all details about movie.",
//     by: "Createdby ReactJS,Nodejs,Express,MongoDB,Mongoose ",
//   },
