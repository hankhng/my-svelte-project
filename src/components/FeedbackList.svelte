<script lang="ts">
  import { FeedbackStore } from '../stores'
  import { fade, scale } from 'svelte/transition'
  import FeedbackItem from './FeedbackItem.svelte'
  // import { onDestroy, onMount } from 'svelte'
  // let feedback = []

  // const unsubscribe = FeedbackStore.subscribe((value) => {
  //   feedback = value
  // })

  // onMount(() => {
  //   return () => {
  //     unsubscribe()
  //   }
  // })

  // onDestroy(() => {
  //   unsubscribe()
  // })
</script>

{#if $FeedbackStore.length === 0}
  <p>No feedback yet. Add some!</p>
{/if}

<!-- Importing $FeedbackStore is the short hand way and will automatically do all the commented code above -->
{#each $FeedbackStore as item (item.id)}
  <div in:scale out:fade={{ duration: 500 }}>
    <!-- <div transition:fade> -->
    <FeedbackItem {item} />
  </div>
{/each}
