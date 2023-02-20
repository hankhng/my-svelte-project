<script lang='ts'>
  import { createEventDispatcher } from 'svelte';
  export let selected: number

  const dispatch = createEventDispatcher();

const onChange = (e: Event) => {
    const selectedValue = (e.currentTarget as HTMLInputElement).value;
    const selectedNumber = Number(selectedValue);
    dispatch('rating-selected', selectedNumber);
  }
</script>


<div class="rating">
  <ul>
    {#each [1,2,3,4,5,6,7,8,9,10] as number}
      <li>
        <input type="radio" bind:group={selected} value={number} on:change={onChange}>
        {number}
      </li>
    {/each}
  </ul>
</div>

<style>
  .rating {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px 0;
  }

  .rating input {
    margin-right: 5px;
  }

  .rating ul {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .rating li {
    position: relative;
    /* background: lightgray; */
    padding: 10px;
    text-align: center;
    /* border-radius: 50%; */
    font-size: 19px;
    /* border: 1px solid #eee; */
    transition: 0.3s;
  }

  .rating li:label {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    color: blueviolet;
  }

  .rating li:hover {
    color: blue;
    cursor: pointer;
  }
</style>