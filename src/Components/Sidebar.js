import React from "react";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import TvIcon from "@mui/icons-material/Tv";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";
import Image from "../Components/image.png";
import CloseIcon from "@mui/icons-material/Close";

import { useAppContext } from "./ContextLib";

export default function Sidebar() {
  const { sidebarShow, setSidebarShow } = useAppContext();
  const [active, setActive] = React.useState(0);
  const [firstButtons] = React.useState([
    {
      name: "Discover",
      Icon: <SearchIcon />,
    },
    { name: "Play List", Icon: <PlaylistPlayIcon /> },
    { name: "Movie", Icon: <LiveTvIcon /> },
    { name: "Tv Shows", Icon: <TvIcon /> },
    { name: "My List", Icon: <FormatListBulletedIcon /> },
    { name: "Watch Letter", Icon: <WatchLaterOutlinedIcon /> },
    { name: "Recommended", Icon: <FavoriteBorderIcon /> },
    { name: "Settings", Icon: <SettingsOutlinedIcon /> },
    { name: "Logout", Icon: <LogoutIcon /> },
  ]);
  const activeButton = (index) => {
    console.log(index);
    setActive(index);
  };
  const [screenWidth, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      console.log("screenWidth", screenWidth);
      if (screenWidth < 900) {
        setSidebarShow(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [screenWidth]);
  return (
    <div>
      {" "}
      <div
        className="sidebar"
        style={{
          display: !sidebarShow && "none",
        }}
      >
        <div className="closeIcon">
          <CloseIcon
            style={{
              fontSize: "30px",
              color: "#d4d7dd",
              display: !sidebarShow && "none",
            }}
            onClick={() => {
              setSidebarShow(false);
              console.log("sidebarShow_sidebar", sidebarShow);
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div>
            <div
              style={{
                marginTop: "42px",
                height: "91px",
                width: "91px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={Image}
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "contain",
                  borderRadius: "50%",
                }}
              />
            </div>
          </div>
        </div>
        <p
          style={{
            paddingTop: "11px",
            fontFamily: "Open Sans",
            fontSize: "20px",
            fontWeight: 600,
            color: "#d4d7dd",
            textAlign: "center",
          }}
        >
          Eric Hoffman
        </p>
        <hr
          style={{ color: "#394B61", border: "1px solid", marginTop: "20px" }}
        />
        <div style={{ paddingTop: "10px" }}>
          {firstButtons.map((items, i) => (
            <>
              <div
                onClick={() => activeButton(i)}
                style={{
                  marginTop: "24px",
                  display: "flex",
                  paddingRight: "124px",
                  borderRight: active == i ? "3px solid" : "0px solid",
                  color: active == i ? "#00E0FF" : "#d4d7dd",
                }}
              >
                <div
                  style={{
                    marginLeft: "52px",
                    paddingRight: "14px",
                    color: active == i ? "#00E0FF" : "#d4d7dd",
                  }}
                >
                  {items.Icon}
                </div>

                <div
                  style={{
                    minWidth: "95px",
                    fontFamily: "Open Sans",
                    fontSize: "15px",
                    fontWeight: 600,
                    color: active == i ? "#00E0FF" : "#d4d7dd",
                  }}
                >
                  {items.name}
                </div>
              </div>
              {(i == 4 || i == 6) && (
                <hr
                  style={{
                    color: "#394B61",
                    border: "1px solid",
                    marginTop: "26px",
                  }}
                />
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
