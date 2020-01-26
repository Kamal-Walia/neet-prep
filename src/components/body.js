import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryPie,
  VictoryGroup
} from "victory";
import "../assets/css/body.css";
import { data, videoData } from "../data";
import Video from "./video";

class Body extends React.Component {
  render() {
    return (
      <div>
        <h3>Stats for this test</h3>
        <div>
          <div>
            <VictoryChart
              theme={VictoryTheme.material}
              domainPadding={{ x: 20, y: 5 }}
              height={250}
            >
              <VictoryGroup offset={20} colorScale={"qualitative"}>
                {data.map(score => (
                  <VictoryBar
                    responsive={false}
                    barRatio={0.8}
                    domain={{ y: [0, 20] }}
                    data={score}
                  />
                ))}
              </VictoryGroup>
            </VictoryChart>
          </div>
          <div className="colorBox">
            <span>
              <span
                style={{
                  backgroundColor: "#334d5c",
                  height: 20,
                  width: 20,
                  display: "inline-block"
                }}
              ></span>
              <span style={{ marginLeft: 10, marginRight: 10 }}>
                Your Current Score
              </span>
            </span>
            <span>
              <span
                style={{
                  backgroundColor: "#45b29d",
                  height: 20,
                  width: 20,
                  display: "inline-block"
                }}
              ></span>
              <span style={{ marginLeft: 10 }}>Your Previous Score</span>
            </span>
          </div>
        </div>
        <div>
          <h4>Your Top Scoring Areas:</h4>
          <div>
            <VictoryPie
              data={data[0]}
              height={200}
              width={200}
              style={{
                labels: { fontSize: 5 }
              }}
            />
          </div>
        </div>
        <div>
          <span>
            <h4>Suggested Videos For You</h4>
          </span>
          {videoData.map(video => (
            <Video
              src={video.src}
              title={video.title}
              subtitle={video.subtitle}
              videoLength={video.videoLength}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Body;
