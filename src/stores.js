import { writable } from 'svelte/store';

const throwawayApiKey = import.meta.env
.VITE_THROWAWAY_BLUEDWARF_RECOMBOBULATOR_BASE_KEY
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


export const theData = writable(someStuff);
