<script lang="ts">
  import { FeedbackStore } from '../stores'
  import Card from './Card.svelte'
  export let item: { id: number; rating: number; text: string }

  const handleDelete = (itemId: number) => {
    FeedbackStore.update((items) => {
      return items.filter((item) => item.id != itemId)
    })
  }
</script>

<Card>
  <div class="num-display">
    {item.rating}
  </div>
  <button class="close" on:click={() => handleDelete(item.id)}>X</button>
  <div class="text-display">
    {item.text}
  </div>
</Card>

<style>
  .num-display {
    position: absolute;
    top: -10px;
    left: -10px;
    width: 30px;
    height: 30px;
    background: pink;
    color: purple;
    border: 1px solid black;
    border-radius: 50%;
    padding: 10px;
    text-align: center;
    font-size: 19px;
  }
  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    background: none;
    border: none;
  }
  .text-display {
    font-size: 19px;
  }
</style>
