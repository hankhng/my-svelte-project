<script lang="ts">
  import { FeedbackStore } from '../stores'
  import { v4 as uuidv4 } from 'uuid'
  import Card from './Card.svelte'
  import Button from './Button.svelte'
  import RatingSelect from './RatingSelect.svelte'

  let text: string = ''
  let buttonDisabled: boolean = true
  let textMinLength: number = 10
  let message: string | null = null
  let rating: number = 10

  const handleSelect = (e: CustomEvent) => (rating = e.detail)

  const handleInput = () => {
    if (text.length >= textMinLength) {
      buttonDisabled = false
      message = null
    } else {
      buttonDisabled = true
      message = `Please enter at least ${textMinLength} characters`
    }
  }

  const handleSubmit = () => {
    if (text.trim().length > textMinLength) {
      const data = {
        id: uuidv4(),
        rating,
        text,
      }
      text = ''
      buttonDisabled = true
      message = null
      rating = 10
      FeedbackStore.update((store) => [data, ...store])
    }
  }
</script>

<Card>
  <h2>How would you rate your service with us?</h2>
  <RatingSelect selected={rating} on:rating-selected={handleSelect} />
  <form on:submit|preventDefault={handleSubmit}>
    <div class="input-group">
      <input
        type="text"
        on:input={handleInput}
        bind:value={text}
        placeholder="Please submit your review here"
      />
      <Button disabled={buttonDisabled} type={'submit'}>Send</Button>
    </div>
    {#if message}
      <div class="message">
        {message}
      </div>
    {/if}
  </form>
</Card>

<style>
  .input-group {
    display: flex;
    align-items: center;
  }

  .input-group input {
    flex: 1;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    margin-right: 10px;
    font-size: 1rem;
  }

  .input-group input:focus {
    border-color: #333;
  }

  .message {
    color: purple;
    font-size: 1rem;
    margin-top: 0.5rem;
  }
</style>
