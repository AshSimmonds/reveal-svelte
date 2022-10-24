<script>
    export let someStuff
</script>

<section>
    <h2>Final page</h2>

    <pre>
        {#each someStuff as item}
            <p>{JSON.stringify(item, null, 4)}</p>
        {/each}
    </pre>
</section>

<style>
</style>
