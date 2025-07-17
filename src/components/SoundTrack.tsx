import "./SoundTrack.css";

interface SoundTrackProps {
  src1: string;
  src2?: string;
  src3?: string;
  did1?: string;
  did2?: string;
  did3?: string;
}

const SoundTrack = ({
  src1,
  src2,
  src3,
  did1,
  did2,
  did3,
}: SoundTrackProps) => {
  return (
    <div className="sound-grid">
      <div className="audio1">
        <audio className="audio-element" controls src={src1}></audio>
        <p className="did">{did1}</p>
      </div>
      {src2 && (
        <div className="audio2">
          <audio className="audio-element" controls src={src2}></audio>
          <p className="did">{did2}</p>
        </div>
      )}
      {src3 && (
        <div className="audio3">
          <audio className="audio-element" controls src={src3}></audio>
          <p className="did">{did3}</p>
        </div>
      )}
    </div>
  );
};

export default SoundTrack;
