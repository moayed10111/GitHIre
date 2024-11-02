// TODO: Create an interface for the Candidate objects returned by the API
export default interface Candidate {
    name?: string;
    login: string;
    location?: string;
    company?: string;
    bio?: string;
    email?: string;
    avatar_url: string;
  }

  