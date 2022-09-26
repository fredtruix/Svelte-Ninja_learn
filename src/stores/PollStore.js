// @ts-ignore
import { writable } from "svelte/store";

// @ts-ignore
// @ts-ignore
const PollStore = writable(
    [
        {
          id: 1,
          question: 'Python or JavaScript?',
          answerA: 'Python',
          answerB: 'JavaScript',
          votesA: 9,
          votesB: 15,
        },
      ]
);


export default PollStore;