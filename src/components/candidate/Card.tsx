
import "./card.css";
import Candidate from "../../interfaces/Candidate.interface";
import CandidateBtns from "../candbtn/candbtn";
const CandidateCard: React.FC<Candidate> = ({
  name,
  login,
  location,
  email,
  company,
  bio,
  avatar_url,
}) => {
  const candidate = { name, login, location, email, company, bio, avatar_url };
  return (
    <div>
      <div className="container">
        <div className="img-container">
          <img src={avatar_url} alt={login} />
        </div>
        <div className="info-container">
          <h2>
            {name} <span>({login})</span>
          </h2>
          {location && <p>Location: {location}</p>}
          {email && <p>Email: {email}</p>}
          {company && <p>Company: {company}</p>}
          {bio && <p>Bio: {bio}</p>}
        </div>
      </div>
      <CandidateBtns candidate={candidate} />
    </div>
  );
};

export default CandidateCard;