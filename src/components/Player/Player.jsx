import { useRef } from 'react';
import Buttons from './Buttons/Buttons';

const Player = ({ source }) => {
  const playerRef = useRef();
  const play = () => playerRef.current.play();
  const pause = () => playerRef.current.pause();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 25,
      }}
    >
      <video
        ref={playerRef}
        src={source}
        style={{ maxWidth: 600, marginTop: 30 }}
      >
        Sorry, your browser does not support embedded videos.
      </video>
      <Buttons play={play} pause={pause} ref={playerRef} />
    </div>
  );
};

export default Player;
