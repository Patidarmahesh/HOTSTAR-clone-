import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Error404() {
  return (
    <section
      style={{
        height: "713px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:"radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
      }}
    >
      <div className="container rounded bg-black">
        <div className="error-inner text-center wow fadeInUp delay-0-2s">
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.WLEoi2OjXiyKSkEq4RNeSwHaE6&pid=Api&P=0&h=180"
            alt="Error"
            className="w-50 pt-5 pb-2"
            style={{ borderRadius: "1.5rem" }}
          />
          <div
            className="section-title mt-50 mb-40"
            style={{ color: "white", fontWeight: "bold" }}
          >
            <h2>OPPS! This Page Are Can’t Be Found</h2>
          </div>
          <Link to="/">
            <Button
              variant="outlined"
              size="large"
              sx={{ marginBottom: "2rem", color: "white" }}
            >
              GO TO LOGIN
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
