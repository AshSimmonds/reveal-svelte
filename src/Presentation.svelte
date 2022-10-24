<script>
    import Title from "./slides/Title.svelte"
    import Love from "./slides/Love.svelte"
    import GettingStarted from "./slides/GettingStarted.svelte"
    import AutoAnimate from "./slides/examples/AutoAnimate.svelte"
    import Backgrounds from "./slides/examples/Backgrounds.svelte"
    import Barebones from "./slides/examples/Barebones.svelte"
    import LayoutHelpers from "./slides/examples/LayoutHelpers.svelte"
    import Markdown from "./slides/examples/Markdown.svelte"
    import Math from "./slides/examples/Math.svelte"
    import Media from "./slides/examples/Media.svelte"
    import Transitions from "./slides/examples/Transitions.svelte"

    import DataTest01 from "./slides/DataTest01.svelte"

    import Final from "./slides/Final.svelte"

    const partner = ["dude", "sweet"]

    const throwawayApiKey = import.meta.env.VITE_THROWAWAY_BLUEDWARF_RECOMBOBULATOR_BASE_KEY
    // used for temporary testing, only has access to a single base

    const someStuff = getStuff()

    async function getStuff() {
        const staticStuff = {
            id: 666,
            stuff: "things",
            subThings: [
                {
                    id: 1,
                    name: "some stuff",
                    description: "some stuff description",
                },
                {
                    id: 2,
                    name: "some other stuff",
                    description: "some other stuff description",
                },
            ],
        }

        let headersList = {
            Accept: "*/*",
            Authorization: `Bearer ${throwawayApiKey}`,
        }

        let response = await fetch(
            "https://api.airtable.com/v0/appvvqr9kvHiSFbfT/asdf/recyNdg321hBbl7XU",
            {
                method: "GET",
                headers: headersList,
            }
        )

        let data = await response.json()

        console.log(`data: ${JSON.stringify(data, null, 4)}`)

        return data
    }
</script>

<Title />
<Love {partner} />
<!-- <GettingStarted/> -->
<!-- <AutoAnimate/> -->
<!-- <Backgrounds/> -->
<!-- <Barebones/> -->
<!-- <LayoutHelpers/> -->
<!-- <Markdown/> -->
<!-- <Math/> -->
<!-- <Media/> -->
<!-- <Transitions/> -->

<!-- <Final {#await someStuff} asdf {:then someStuff} /> -->


{#await someStuff}
.
{:then someStuff}
<DataTest01 theReference={someStuff.fields.reference} />
<Final {someStuff} />
{/await}

