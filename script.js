import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    stages: [
      { duration: '10s', target: 100 }, // below normal load
      { duration: '10s', target: 1000 },
      { duration: '10s', target: 10000 },
    ],
};


export default function () {
  const url = 'http://localhost:4201/api/mutant';
  const payload = JSON.stringify({
    "dna":["AAAT","ATTA","ACCG","GGGG"]
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  http.post(url, payload, params);
  sleep(1);
}