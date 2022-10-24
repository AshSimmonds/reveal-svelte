<script>
    import { onMount } from 'svelte';

    let title;
    onMount(() => {
        let timeout;
        title = new Promise(resolve => {
            timeout = setTimeout(() => resolve('What is Recombobulator?'), 3333);
        });
        () => clearTimeout(timeout);
    });
</script>

<section>
    <h2>
        {#await title}
            Wait a sec...
        {:then result}
            {result}
        {/await}
    </h2>

</section>
