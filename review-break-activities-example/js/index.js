/*
Enter JS here

HTML for list topic list item
<li class="list-group-item">
    NEW TOPIC HERE
</li>
*/

let topicList = document.querySelector(".topics-list");
let topicForm = document.querySelector(".new-topic-form");

console.log(topicList);
console.log(topicForm);

const addTopicToPage = function (topicName, theTopicList) {
    let newTopicElement = `<li class="list-group-item">
        ${topicName}
    </li>`;
    theTopicList.innerHTML += newTopicElement;
}

const eventHandler = function (event) {
    event.preventDefault();

    let input = event.target.elements["new-topic"];
    let inputValue = input.value;

    if (inputValue === "") {
        input.classList.add("is-invalid");
    } else {
        input.classList.remove("is-invalid");
        addTopicToPage(inputValue, topicList);
    }
}

topicForm.addEventListener("submit", eventHandler);