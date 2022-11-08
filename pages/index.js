import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
  const homepageStyles = { 
        //backgroundColor: "red" 
    };

  return ( 
    <>
        <CSSReset />
        <div style={homepageStyles}>
            <Menu />
            <Header />
            <Timeline playlists={config.playlists} />
        </div>
    </>

  );
}

export default HomePage;

const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .user-info {
    margin-top: 50px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
  }
`;

function Header() {
  return (
    <div>
      <StyledHeader>
        <section className="user-info">
          <img src={`https://github.com/${config.github}.png`} />
          <div>
            <h2>{config.name}</h2>
            <h2>{config.role}</h2>
          </div>
        </section>
      </StyledHeader>
    </div>
  );
}

function Timeline(props) {
  console.log("Dentro do componente", props);
  const playlistNames = Object.keys(props.playlists);

  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName];
        console.log(videos);
        return (
          <section>
            <h2>{playlistName}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url}>
                    <img src={video.thumb} />
                    <span>{video.title}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}
