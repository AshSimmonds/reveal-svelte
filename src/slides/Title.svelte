<script>
    import { onMount } from 'svelte';

    const timeoutTime = 3333
    let title;
    onMount(() => {
        let timeout;
        title = new Promise(resolve => {
            timeout = setTimeout(() => resolve('What is Recombobulator?'), timeoutTime);
        });
        () => clearTimeout(timeout);
    });
</script>

<section >
    <h2>
        {#await title}
            Wait a sec... (arbitrary delay of {timeoutTime}ms)
        {:then result}
            {result}
        {/await}
    </h2>

</section>
