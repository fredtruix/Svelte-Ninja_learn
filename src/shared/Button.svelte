<script>
export let type = 'secondary';
export let flat = false;
export let inverse = false;
export let width;
</script>


<button class={type} class:flat={flat} style="width:{width}%" on:click class:inverse={inverse}>
    <slot></slot>
</button>


<style>
    button{
        border:0;
        cursor: pointer;
        border-radius: 6px;
        padding: 8px 12px;
        font-weight: bold;
        box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
      
    }

    .primary{
        background-color: #cd2a2a;
        color: white;
    }

    .secondary{
        background-color: #35a47d;
        color: white;
    }

    .flat{
        box-shadow: none;
    }

    .primary.inverse{
        color: #cd2a2a;
        background-color: white;
        border: 2px solid #cd2a2a;

    }

    .secondary.inverse{
        color: #35a47d;
        background-color: white;
        border: 2px solid #35a47d;
    }

</style>