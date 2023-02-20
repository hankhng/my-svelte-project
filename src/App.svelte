<script lang="ts">
  import FeedbackForm from "./components/FeedbackForm.svelte";
  import FeedbackList from "./components/FeedbackList.svelte";
  import FeedbackStats from "./components/FeedbackStats.svelte"

  let feedback = []

  $: feedbackSum = feedback.reduce((sum, item) => sum + item.rating, 0);
  $: count = feedback.length
  $: average = count > 0 ? feedbackSum / count : 0

  const addFeedback = (e: CustomEvent) => {
    const item = e.detail;
    feedback = [item, ...feedback];
  }

  const deleteFeedback = (e: CustomEvent<number>) => {
    const itemId = e.detail;
    feedback = feedback.filter(item => item.id != itemId);
  }

</script>

<main>
  <FeedbackForm on:submit-feedback={addFeedback}/>
  <FeedbackStats {count} {average}/>
  <FeedbackList {feedback} on:delete-feedback={deleteFeedback}/>
</main>

<style>
</style>