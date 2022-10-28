<script>
    import reveal from "reveal.js"
import logo from "../../assets/blue_dwarf_space_letterhead_logo.png"

    export let someStuff

    const throwawayApiKey = import.meta.env
        .VITE_THROWAWAY_BLUEDWARF_RECOMBOBULATOR_BASE_KEY
    // used for temporary testing, only has access to a single base

    let theNuclearPowerSauce

    theNuclearPowerSauce =
        someStuff && someStuff.fields ? someStuff.fields.nuclear : 0

    async function updateNuclear(newNuclear) {

        theNuclearPowerSauce = newNuclear

        let headersList = {
            Accept: "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            Authorization: "Bearer " + throwawayApiKey,
            "Content-Type": "application/json",
        }

        let bodyContent = JSON.stringify({
            fields: {
                reference: theNuclearPowerSauce,
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

        console.log("theNuclearPowerSauce: ", theNuclearPowerSauce)

        // reveal.right()
    }

    console.log(`someStuff: ${JSON.stringify(someStuff, null, 4)}`)
</script>

<section data-auto-animate data-auto-animate-unmatched="fade">
    <h3>Let us animate stuff</h3>
    <p>This will fade out</p>
    <img src={logo} alt="logo" style="height: 100px;" />
</section>
<section data-auto-animate data-auto-animate-unmatched="fade">
    <h3>Let us animate stuff</h3>
    <p style="opacity: 0.2; margin-top: 100px;">This will fade out</p>
    <p>This element is unmatched so will pop in</p>
    <img src={logo} alt="logo" style="height: 150px;" />
</section>

<section data-auto-animate>
    <p
        data-id="text-props"
        style="background: #555; line-height: 1em; letter-spacing: 0em;"
    >
        Line Height & Letter Spacing
    </p>
</section>
<section data-auto-animate>
    <p
        data-id="text-props"
        style="background: #555; line-height: 3em; letter-spacing: 0.2em;"
    >
        Line Height & Kerning
    </p>
</section>



<section>
    <section data-auto-animate>
        <h3>Swapping list items</h3>
        <ul>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
        </ul>
    </section>
    <section data-auto-animate>
        <h3>Swapping list items</h3>
        <ul>
            <li>Two</li>
            <li>One</li>
            <li>Three</li>
        </ul>
    </section>
    <section data-auto-animate>
        <h3>Swapping list items</h3>
        <ul>
            <li>Two</li>
            <li>Three</li>
            <li>One</li>
        </ul>
    </section>
</section>

<section data-auto-animate style="height: 600px">
    <h3 style="opacity: 0.3; font-size: 18px;">Declaration about your payload</h3>
    <h2 data-id="title" style="margin-top: 260px;">Nuclear Power Sauce</h2>
    <div
        data-id="1"
        style="background: {theNuclearPowerSauce === 1 ? "cyan" : "grey"}; position: absolute; top: 150px; left: 16%; width: 60px; height: 60px; cursor: pointer;"
        on:click={() => (
            updateNuclear(1))
            }
    ></div>
    <div
        data-id="2"
        style="background: {theNuclearPowerSauce === 2 ? "magenta" : "grey"}; position: absolute; top: 150px; left: 36%; width: 60px; height: 60px; cursor: pointer;"
        on:click={() => (theNuclearPowerSauce = 2)}
    ></div>
    <div
        data-id="3"
        style="background: {theNuclearPowerSauce === 3 ? "yellow" : "grey"}; position: absolute; top: 150px; left: 56%; width: 60px; height: 60px; cursor: pointer;"
        on:click={() => (theNuclearPowerSauce = 3)}
    ></div>
    <div
        data-id="4"
        style="background: {theNuclearPowerSauce === 4 ? "red" : "grey"}; position: absolute; top: 150px; left: 76%; width: 60px; height: 60px; cursor: pointer;"
        on:click={() => (theNuclearPowerSauce = 4)}
    ></div>
</section>
<section data-auto-animate style="height: 600px">
    <h3 style="opacity: 0.3; font-size: 18px;">Declaration about your payload</h3>
    <h2 data-id="title" style="margin-top: 500px">Nuclear Power Source</h2>
    <div
        data-id="1"
        style="background: {theNuclearPowerSauce === 1 ? "cyan" : "grey"}; position: absolute; bottom: 190px; left: 16%; width: 60px; height: 60px;"
    />
    <div
        data-id="2"
        style="background: {theNuclearPowerSauce === 2 ? "magenta" : "grey"}; position: absolute; bottom: 190px; left: 36%; width: 60px; height: 160px;"
    />
    <div
        data-id="3"
        style="background: {theNuclearPowerSauce === 3 ? "yellow" : "grey"}; position: absolute; bottom: 190px; left: 56%; width: 60px; height: 260px;"
    />
    <div
        data-id="4"
        style="background: {theNuclearPowerSauce === 4 ? "red" : "grey"}; position: absolute; bottom: 190px; left: 76%; width: 60px; height: 360px;"
    />
</section>
<section data-auto-animate style="height: 600px">
    <h3 style="opacity: 0.3; font-size: 18px;">SLIDE 3</h3>
    <h2 data-id="title" style="margin-top: 500px; opacity: 0;">
        With Auto Animate
    </h2>
    <div
        data-id="1"
        style="background: cyan; position: absolute; top: 50%; left: 50%; width: 400px; height: 400px; margin: -200px 0 0 -200px; border-radius: 400px;"
    />
    <div
        data-id="2"
        style="background: magenta; position: absolute; top: 50%; left: 50%; width: 300px; height: 300px; margin: -150px 0 0 -150px; border-radius: 400px;"
    />
    <div
        data-id="3"
        style="background: yellow; position: absolute; top: 50%; left: 50%; width: 200px; height: 200px; margin: -100px 0 0 -100px; border-radius: 400px;"
    />
    <div
        data-id="4"
        style="background: red; position: absolute; top: 50%; left: 50%; width: 100px; height: 100px; margin: -50px 0 0 -50px; border-radius: 400px;"
    />
</section>
<section data-auto-animate style="height: 600px">
    <h3 style="opacity: 0.3; font-size: 18px;">SLIDE 3</h3>
    <h2 data-id="title" style="margin-top: 500px; opacity: 0;">
        With Auto Animate
    </h2>
    <div
        data-id="1"
        style="background: red; position: absolute; top: 250px; left: 16%; width: 60px; height: 60px;"
    />
    <div
        data-id="2"
        style="background: yellow; position: absolute; top: 250px; left: 36%; width: 60px; height: 60px;"
    />
    <div
        data-id="3"
        style="background: magenta; position: absolute; top: 250px; left: 56%; width: 60px; height: 60px;"
    />
    <div
        data-id="4"
        style="background: cyan; position: absolute; top: 250px; left: 76%; width: 60px; height: 60px;"
    />
</section>

<section data-auto-animate data-auto-animate-id="a">
    <h2>data-auto-animate-id="a"</h2>
    <h3>A1</h3>
</section>
<section data-auto-animate data-auto-animate-id="a">
    <h2>data-auto-animate-id="a"</h2>
    <h3>A1</h3>
    <h3>A2</h3>
</section>
<section data-auto-animate data-auto-animate-id="b">
    <h2>data-auto-animate-id="b"</h2>
    <h3>B1</h3>
</section>
<section data-auto-animate data-auto-animate-id="b">
    <h2>data-auto-animate-id="b"</h2>
    <h3>B1</h3>
    <h3>B2</h3>
</section>

<section>
    <section id="stacked-slide-1" data-auto-animate>
        <a href="#/stacked-slide-1">Slide 1</a><br />
        <a href="#/stacked-slide-2">Slide 2</a><br />
        <a href="#/stacked-slide-3">Slide 3</a><br />
        <a href="#/stacked-slide-4">Slide 4</a><br />
        <div
            data-id="anim"
            style="background: indigo; padding: 8px; width: 50px; height: 50px; position: absolute; left: 0px;"
        >
            A
        </div>
    </section>
    <section id="stacked-slide-2" data-auto-animate>
        <a href="#/stacked-slide-1">Slide 1</a><br />
        <a href="#/stacked-slide-2">Slide 2</a><br />
        <a href="#/stacked-slide-3">Slide 3</a><br />
        <a href="#/stacked-slide-4">Slide 4</a><br />
        <div
            data-id="anim"
            style="background: indigo; padding: 8px; width: 50px; height: 50px; position: absolute; left: 25%;"
        >
            A
        </div>
    </section>
    <section id="stacked-slide-3" data-auto-animate>
        <a href="#/stacked-slide-1">Slide 1</a><br />
        <a href="#/stacked-slide-2">Slide 2</a><br />
        <a href="#/stacked-slide-3">Slide 3</a><br />
        <a href="#/stacked-slide-4">Slide 4</a><br />
        <div
            data-id="anim"
            style="background: indigo; padding: 8px; width: 50px; height: 50px; position: absolute; left: 50%;"
        >
            A
        </div>
    </section>
    <section id="stacked-slide-4" data-auto-animate>
        <a href="#/stacked-slide-1">Slide 1</a><br />
        <a href="#/stacked-slide-2">Slide 2</a><br />
        <a href="#/stacked-slide-3">Slide 3</a><br />
        <a href="#/stacked-slide-4">Slide 4</a><br />
        <div
            data-id="anim"
            style="background: indigo; padding: 8px; width: 50px; height: 50px; position: absolute; left: 75%;"
        >
            A
        </div>
    </section>
</section>
