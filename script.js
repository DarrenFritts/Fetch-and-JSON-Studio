// TODO: add code here
// alert("script.js file is attached");
window.addEventListener("load", function() {
    this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            // console.log(json);
            let counter = document.getElementById("counter");
            let count = 0;
            const container = document.getElementById("container");
            for (let i = 0; i < json.length; i++) {
                count = count + 1;
                container.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                        <li>Hours in space: ${json[i].hoursInSpace}</li>
                        <li>Active: ${json[i].active}</li>
                        <li>Skills: ${json[i].skills}</li>
                    </ul>
                </div>
                <img class="avatar" src="${json[i].picture}">
            </div>
            `;
            // bonus mission # 3
            counter.innerHTML = count;
            };
            // bonus mission # 1 --- ???
            // bonus mission # 2 --- ???
        });
    });
});