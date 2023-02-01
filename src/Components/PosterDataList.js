import React from "react";
import { Grid, Button } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

export default function PosterDataList({ showlistItem }) {
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress(showlistItem.imdbRating * 10);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 7,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#00E0FF" : "#308fe8",
    },
  }));

  return (
    <div data-aos="zoom-in">
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#394B61",
          borderRadius: "11px",
        }}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={3.3}
            lg={3.3}
            style={{ minWidth: "330px", maxHeight: "389px" }}
          >
            <img
              src={showlistItem.Poster}
              style={{
                maxHeight: "100%",
                width: "100%",
                borderRadius:
                  window.innerWidth < 600
                    ? "11px 11px 0px 0px"
                    : "11px 0px 0px 11px",
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={8}
            lg={8}
            style={{ minHeight: "389px", minWidth: "330px" }}
          >
            <div
              style={{
                height: "100%",
                width: "100%",
              }}
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <div
                style={{
                  paddingTop: "23px",
                  paddingLeft: window.innerWidth < 600 ? "25px" : "35.22px",
                  paddingBottom: window.innerWidth < 600 && "25px",
                }}
              >
                <span
                  style={{
                    fontFamily: "Open Sans",
                    fontSize: "30px",
                    fontWeight: 700,
                    color: "#d4d7dd",
                  }}
                >
                  {showlistItem.Title}
                </span>
                <div
                  style={{
                    marginTop: "23px",
                  }}
                >
                  <Grid container>
                    <Grid
                      md={2}
                      lg={2}
                      style={{ marginTop: "7px", Width: "111px" }}
                    >
                      <BorderLinearProgress
                        variant="determinate"
                        value={progress}
                        style={{ width: "111px" }}
                      />
                    </Grid>
                    <Grid
                      item
                      md={1}
                      lg={1}
                      style={{
                        marginLeft: "10px",
                        fontFamily: "Open Sans",

                        fontWeight: 700,
                        color: "#d4d7dd",
                      }}
                    >
                      {showlistItem.imdbRating}
                    </Grid>
                  </Grid>
                </div>
                <div
                  style={{
                    marginTop: "24px",
                  }}
                >
                  <Grid container>
                    <Grid item x md={2} lg={2}>
                      <span
                        style={{
                          fontFamily: "Open Sans",
                          fontSize: "16px",
                          fontWeight: 600,
                          color: "#d4d7dd",
                        }}
                      >
                        Year:
                      </span>
                    </Grid>
                    <Grid
                      item
                      md={2}
                      lg={2}
                      style={{
                        marginLeft: "10px",
                        fontFamily: "Open Sans",
                        fontWeight: 700,
                        color: "#d4d7dd",
                      }}
                    >
                      {showlistItem.Year}
                    </Grid>
                  </Grid>
                </div>
                <div
                  style={{
                    marginTop: "10px",
                  }}
                >
                  <Grid container>
                    <Grid item md={2} lg={2}>
                      <span
                        style={{
                          fontFamily: "Open Sans",
                          fontSize: "16px",
                          fontWeight: 600,
                          color: "#d4d7dd",
                        }}
                      >
                        Running Time:
                      </span>
                    </Grid>
                    <Grid
                      item
                      md={2}
                      lg={2}
                      style={{
                        marginLeft: "10px",
                        fontFamily: "Open Sans",
                        fontWeight: 700,
                        color: "#d4d7dd",
                      }}
                    >
                      {showlistItem.Runtime}
                    </Grid>
                  </Grid>
                </div>
                <div
                  style={{
                    marginTop: "10px",
                  }}
                >
                  <Grid container>
                    <Grid item md={2} lg={2}>
                      <span
                        style={{
                          fontFamily: "Open Sans",
                          fontSize: "16px",
                          fontWeight: 600,
                          color: "#d4d7dd",
                        }}
                      >
                        Directed by:
                      </span>
                    </Grid>
                    <Grid
                      item
                      md={4}
                      lg={4}
                      style={{
                        marginLeft: "10px",
                        fontFamily: "Open Sans",
                        fontWeight: 700,
                        color: "#d4d7dd",
                      }}
                    >
                      {showlistItem.Director}
                    </Grid>
                  </Grid>
                </div>
                <div
                  style={{
                    marginTop: "10px",
                  }}
                >
                  <Grid container>
                    <Grid item md={2} lg={2}>
                      <span
                        style={{
                          fontFamily: "Open Sans",
                          fontSize: "16px",
                          fontWeight: 600,
                          color: "#d4d7dd",
                        }}
                      >
                        Language:
                      </span>
                    </Grid>
                    <Grid
                      item
                      md={6}
                      lg={6}
                      style={{
                        marginLeft: "10px",
                        fontFamily: "Open Sans",
                        fontWeight: 700,
                        color: "#d4d7dd",
                      }}
                    >
                      {showlistItem.Language}
                    </Grid>
                  </Grid>
                </div>
                <div
                  style={{
                    marginTop: "20px",
                    height: "40px",

                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Open Sans",
                      fontWeight: 400,
                      fontSize: "14px",
                      color: "#d4d7dd",
                    }}
                  >
                    {showlistItem.Plot}
                  </span>
                </div>
                <div
                  style={{
                    marginTop: "21px",
                    display: window.innerWidth > 600 && "flex",
                  }}
                >
                  <div>
                    <Button
                      variant="contained"
                      style={{
                        width: "154px",
                        height: "38px",
                        color: "black",
                        fontWeight: 700,
                        textTransform: "none",
                        backgroundColor: "#00E0FF",
                      }}
                    >
                      Play Movie
                    </Button>
                  </div>

                  <div>
                    <Button
                      variant="outlined"
                      style={{
                        marginLeft: window.innerWidth > 600 && "16px",
                        marginTop: window.innerWidth < 600 && "16px",
                        width: "154px",
                        height: "38px",
                        color: "#00E0FF",
                        fontWeight: 700,
                        textTransform: "none",
                        border: "1px solid #00E0FF",
                      }}
                    >
                      Watch Trailer
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
