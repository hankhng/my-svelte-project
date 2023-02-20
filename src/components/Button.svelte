<script lang='ts'>
  export let style: 'primary' | 'secondary' = 'primary';
  export let type: 'button' | 'submit' | 'reset' = 'button';
  export let disabled = false;
</script>

<button
  type={type} disabled={disabled} class={style}>
  <slot></slot>
</button>

<style>
  button {
    color: #fff;
    border: 0;
    border-radius: 8px;
    width: 100px;
    height: 40px;
    cursor: pointer;
  }

  .primary {
    background-color: purple;
  }

  .secondary {
    background-color: gray;
  }

  button:disabled {
  background-color: gray;
  cursor: not-allowed;
  opacity: 0.5;
}

button:hover {
  transform: scale(0.98);
  opacity: 0.9;
}

button:disabled:hover {
  transform: none;
  opacity: 0.5;
}


</style>