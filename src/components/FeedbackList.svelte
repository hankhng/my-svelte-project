<script lang="ts">
  import { fade, scale } from "svelte/transition";
  import FeedbackItem from "./FeedbackItem.svelte";
  export let feedback = [];
</script>

{#if feedback.length === 0}
  <p>No feedback yet. Add some!</p>
{/if}

{#each feedback as item (item.id)}
  <div in:scale out:fade="{{ duration: 500 }}">
  <!-- <div transition:fade> -->
    <FeedbackItem {item} on:delete-feedback/>
  </div>
{/each}