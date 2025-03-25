const root = document.querySelector("#root");

document.addEventListener("DOMContentLoaded", () => {
const fetchDataButton = document.getElementById('fetch-data-btn');
const dataContainer = document.getElementById('data-container');

// Initialize Web Worker
const worker = new Worker('webworker.js');

fetchDataButton.addEventListener('click', () => {
    fetchDataButton.disabled = true;
    dataContainer.textContent = "Loading data...";
    
    // Fetching data
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => {
            worker.postMessage(data);
        })
        .catch(error => {
            dataContainer.textContent = `Error: ${error.message}`;
        });
});

// Web Worker message handler
worker.onmessage = (event) => {
    const { title, body } = event.data;
    dataContainer.innerHTML = `<h2>${title}</h2><p>${body}</p>`;
    fetchDataButton.disabled = false;
};
});

function main() {

    console.log("Test")
    const title = document.createElement("h1");
    const subtitle = document.createElement("h3");

    title.textContent = "The Abquanta Initiative";
    subtitle.textContent = "Manifesto: The Fragile Web of Consciousness, Desire, and Ideology Introduction: The Illusion of Autonomy In this manifesto, I intend to challenge the traditional conceptions of human emotions, identity, and autonomy through a rigorous analysis of the unconscious mind and its role in shaping our daily lives, both as individuals and as members of a broader societal system. As a schizophrenic actor, filmmaker, and student of psychology, I straddle the worlds of internal chaos and external perception, presenting an intimate understanding of the fragmentation of consciousness, and how ideology capitalizes on this disarray to sustain power. Drawing upon Derridean deconstruction, Slavoj Žižek’s critique of ideology, and Robert Sapolsky’s insights on determinism, we will unveil the disturbing truth: our desires, beliefs, and identities are not expressions of an inner freedom, but rather the products of a deeply orchestrated system from which we cannot easily escape.The Unconscious: A Terrain of Primal Fear and Desire Sigmund Freud once described the unconscious as a repository of repressed desires, traumas, and primal fears. In many ways, this dimension of the mind operates as a hidden stage where the scripts of our actions are written without our conscious participation. For Derrida, the play of différance exposes the instability of meaning, showing how language, thought, and action are haunted by the unconscious structures that evade presence. Similarly, human emotions — often idealized as the authentic expressions of the self — are actually heavily mediated by unconscious processes."
    root.appendChild(title);
    root.appendChild(subtitle);
}

main();

