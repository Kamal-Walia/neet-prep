import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryPie,
  VictoryGroup
} from "victory";
import '../assets/css/body.css';

const data = [
  [
    { x: "Logic", y: 16 },
    { x: "Aptitude", y: 14 },
    { x: "English", y: 15 },
    { x: "Chemistry", y: 13 }
  ],
  [
    { x: "Logic", y: 15 },
    { x: "Aptitude", y: 16 },
    { x: "English", y: 18 },
    { x: "Chemistry", y: 11 }
  ]
];

const videoData = [
  {
    src:
      "https://www.buytestseries.com/images/OnlineCourses/NEET-Video-Lectures-Complete-Chemistry-18-NEETPrep.jpg",
    title: "Complete Chemistry",
    subtitle: "Complete Chemistry 2018",
    videoLength: "00:50:55 mins"
  },
  {
    src:
      "https://www.buytestseries.com/images/OnlineCourses/NEET-Video-Lectures-Complete-Course-19-NEETPrep-Online.png",
    title: "Neet Full Course",
    subtitle: "Complete Course for NEET",
    videoLength: "8:00:00 hrs"
  },
  {
    src: "https://www.buytestseries.com/images/OnlineCourses/NEET-Video-Lectures-Complete-Physics-19-USB-NEETPrep.jpg",
    title: "Crack NEET In The Last 4 Months",
    subtitle: "Best Revision Strategy for NEET",
    videoLength: "00:50:55 mins"
  }
];

const Video = props => {
  return (
    <div className="videoContainer">
      <div>
        <img src={props.src} alt="neetprep video" height={150} width={200} />
      </div>
      <div className="videoTextContainer">
        <p>{props.title}</p>
        <p>{props.subtitle}</p>
        <p>{props.videoLength}</p>
      </div>
    </div>
  );
};

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
                <VictoryBar
                  responsive={false}
                  barRatio={0.8}
                  domain={{ y: [0, 20] }}
                  data={data[0]}
                />
                <VictoryBar
                  responsive={false}
                  barRatio={0.8}
                  domain={{ y: [0, 20] }}
                  data={data[1]}
                />
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
