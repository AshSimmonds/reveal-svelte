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

    import Final from "./slides/Final.svelte"

    const partner = ["dude", "sweet"]

    const someStuff = [
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
    ]
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

<Final {someStuff} />
