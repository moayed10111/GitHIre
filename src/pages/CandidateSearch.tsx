import { useState, useEffect } from "react";
import { searchGithub, searchGithubUser } from "../api/API";
import CandidateCard from "../components/candidate/Card";
import Candidate from "../interfaces/Candidate.interface";

const useCandidateData = () => {
  const [candidateData, setCandidateData] = useState<Candidate | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const selectRandomUser = (users: { login: string }[]) =>
    users[Math.floor(Math.random() * users.length)].login;

  useEffect(() => {
    const fetchCandidateData = async () => {
      try {
        const users = await searchGithub();
        if (users.length === 0) throw new Error("No users found.");

        const randomUser = selectRandomUser(users);
        const data = await searchGithubUser(randomUser);
        setCandidateData(data);
      } catch (error) {
        setError((error as Error).message || "Error fetching candidate data.");
      } finally {
        setLoading(false);
      }
    };

    fetchCandidateData();
  }, []);

  return { candidateData, loading, error };
};

const CandidateSearch = () => {
  const { candidateData, loading, error } = useCandidateData();

  return (
    <div>
      <h1>Candidate Search</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {candidateData && <CandidateCard {...candidateData} />}
    </div>
  );
};

export default CandidateSearch;

