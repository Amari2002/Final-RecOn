document.addEventListener("DOMContentLoaded", function () {
    const members = ["John Doe", "Jane Smith", "Alice Johnson"];
    const events = ["Annual General Meeting", "Tech Workshop", "Networking Night"];
    
    const memberList = document.getElementById("member-list");
    const eventList = document.getElementById("event-list");
    
    members.forEach(member => {
        let li = document.createElement("li");
        li.textContent = member;
        memberList.appendChild(li);
    });
    
    events.forEach(event => {
        let li = document.createElement("li");
        li.textContent = event;
        eventList.appendChild(li);
    });
});
