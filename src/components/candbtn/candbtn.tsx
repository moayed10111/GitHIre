// import "./candbtn.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import Candidate from "../../interfaces/Candidate.interface";

interface CandidateBtnsProps {
  candidate: Candidate;
}

const CandidateBtns: React.FC<CandidateBtnsProps> = ({ candidate }) => {
  const onDecline = () => {
    window.location.reload();
  };

  const onAccept = () => {
    const savedCandidates = JSON.parse(
      localStorage.getItem("savedCandidates") || "[]"
    );
    savedCandidates.push(candidate);
    localStorage.setItem("savedCandidates", JSON.stringify(savedCandidates));
    window.location.reload();
  };

  return (
    <div className="btn-container" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <button className="decline" onClick={onDecline}>
        <FontAwesomeIcon className="icon" icon={faMinus} />
      </button>
      <button className="accept" onClick={onAccept}>
        <FontAwesomeIcon className="icon" icon={faPlus} />
      </button>
    </div>
  );
};

export default CandidateBtns;