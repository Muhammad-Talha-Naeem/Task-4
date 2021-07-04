let array = ["tag1", "tag2", "tag3", "tag4", "tag5"];
window.print = (array) => {
    let ul = document.createElement(`ul`)
    document.querySelector(`body`).appendChild(ul);
    if (array.length < 1) {
        ul.innerHTML = "There are no tags ";
    } else {
        array.map(inp => {
            let li = document.createElement(`li`);
            li.innerHTML = inp;
            ul.appendChild(li)
        });
    }
}