<script>
  export let average;
  export let count;
</script>

<div class="feedback-stats">
  <h4>{count} Reviews</h4>
  <h4>Ratings average: {average.toFixed(1)}</h4>
</div>

<style>
  .feedback-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 1rem 0;
  }
</style>