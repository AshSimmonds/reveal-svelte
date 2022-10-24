<script>
    export let someStuff

    const throwawayApiKey = import.meta.env
        .VITE_THROWAWAY_BLUEDWARF_RECOMBOBULATOR_BASE_KEY
    // used for temporary testing, only has access to a single base

    let theReference

    theReference =
        someStuff && someStuff.fields ? someStuff.fields.reference : ""

    async function updateReference() {
        let headersList = {
            Accept: "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            Authorization: "Bearer " + throwawayApiKey,
            "Content-Type": "application/json",
        }

        let bodyContent = JSON.stringify({
            fields: {
                reference: theReference,
            },
        })

        let response = await fetch(
            "https://api.airtable.com/v0/appvvqr9kvHiSFbfT/asdf/recyNdg321hBbl7XU/",
            {
                method: "PATCH",
                body: bodyContent,
                headers: headersList,
            }
        )

        let data = await response.text()

        console.log(`data`, JSON.stringify(data, null, 4))

        console.log("theReference: ", theReference)
    }

    console.log(`someStuff: ${JSON.stringify(someStuff, null, 4)}`)
</script>

<section>
    <h2>{theReference}</h2>

    <input type="text" bind:value={theReference} on:change={updateReference} />
</section>
