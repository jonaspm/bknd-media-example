import { Api } from "bknd/client";

// Use relative URL (empty string) so API calls go to the same origin as the frontend
// This avoids CORS issues when frontend and backend are on the same host
export const api = new Api({
  host: "http://localhost:4321",
});