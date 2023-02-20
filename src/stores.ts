import { writable } from 'svelte/store'

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 5,
    text: 'This is a test feedback',
  },
])
