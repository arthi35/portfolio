import React, { useState, useEffect } from "react";
import "./Header.css";
import { useHistory } from "react-router";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
export function Header({ select, setSelect }) {
  console.log(select);
  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="nav_bar">
      <div className="header">
        <div className="header_left">
          <p>
            <span className="about_span">A</span>RTHI
            {/* <span className="about_span"> </span> */}
          </p>
        </div>

        <div className="header__right bigscreen">
          <a href="#Home">
            <div
              className={select[0] ? "heading select " : "heading "}
              onClick={() => {
                setSelect([true, false, false, false]);
              }}
            >
              HOME
            </div>
          </a>
          <a href="#About">
            <div
              className={select[1] ? "heading select" : "heading"}
              onClick={() => {
                setSelect([false, true, false, false]);
              }}
            >
              ABOUT
            </div>
          </a>
          <a href="#Project">
            <div
              className={select[2] ? "heading select" : "heading"}
              onClick={() => {
                setSelect([false, false, true, false]);
              }}
            >
              PROJECT
            </div>
          </a>
          <a href="#Contact">
            <div
              className={select[3] ? "heading select" : "heading"}
              onClick={() => {
                setSelect([false, false, false, true]);
              }}
            >
              CONTACT
            </div>
          </a>
        </div>
        <div className="smallscreen">
          <MoreVertIcon
            className="More_icon"
            variant="contained"
            onClick={handleClick}
            style={{ backgroundColor: "rgba(234, 180, 30)", color: "white" }}
          />

          <Popover
            className="popover"
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <List
              className="popover_list"
              sx={{
                width: "500px",
                bgcolor: "rgba(234, 180, 30)",
                color: "rgba(8, 46, 78)",

                fontWeight: "bold",
              }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton
                onClick={() => {
                  handleClose();
                }}
              >
                <a href="#Home">
                  <div
                    className={select[0] ? "tittle selected " : "tittle "}
                    onClick={() => {
                      setSelect([true, false, false, false]);
                    }}
                  >
                    Home
                  </div>
                </a>
              </ListItemButton>
              <ListItemButton
                onClick={() => {
                  handleClose();
                }}
              >
                <a href="#About">
                  <div
                    className={select[1] ? "tittle selected" : "tittle"}
                    onClick={() => {
                      setSelect([false, true, false, false]);
                    }}
                  >
                    About
                  </div>
                </a>
              </ListItemButton>

              <ListItemButton
                onClick={() => {
                  handleClose();
                }}
              >
                <a href="#Project">
                  <div
                    className={select[2] ? "tittle selected" : "tittle"}
                    onClick={() => {
                      setSelect([false, false, true, false]);
                    }}
                  >
                    PROJECT
                  </div>
                </a>
              </ListItemButton>

              <ListItemButton
                onClick={() => {
                  handleClose();
                }}
              >
                <a href="#Contact">
                  <div
                    className={select[3] ? "tittle selected" : "tittle"}
                    onClick={() => {
                      setSelect([false, false, false, true]);
                    }}
                  >
                    CONTACT
                  </div>
                </a>
              </ListItemButton>
            </List>
          </Popover>
        </div>
      </div>
    </div>
  );
}
