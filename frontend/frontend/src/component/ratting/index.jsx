import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentage = 66;

export default function CircleRatting({ rating }) {
  return (
    <div
      style={{
        height: "40px",
        width: "40px",
        borderRadius: "50%",
        background: "white",
        zIndex:"1",
        position:"absolute",
        marginTop:"-26px",
        marginLeft:"-5px"
      }}
    >
      <CircularProgressbar
        value={rating}
        maxValue={10}
        text={rating}
        styles={buildStyles({
          textSize: "30px",
          pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
        })}
      />
    </div>
  );
}
