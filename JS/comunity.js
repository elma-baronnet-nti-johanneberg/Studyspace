// Min egen kod: 

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// gör så att man kan trycka på hamburgarmenyn och den kommer fram
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
})
// gör så att man kan ta bort menyn när man trycker på hamburgarmenyn igen
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", ()=>{
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

// kod anpassad från chat gpt: 
document.getElementById("postButton").addEventListener("click", function () {
    let postText = document.getElementById("postInput").value;
    
    if (postText.trim() === "") {
        alert("Du kan inte posta ett tomt inlägg!");
        return;
    }

    let postContainer = document.createElement("div");
    postContainer.classList.add("post");

    let postContent = document.createElement("p");
    postContent.innerText = postText;
    postContainer.appendChild(postContent);

    // Kommentar-sektion
    let commentSection = document.createElement("div");
    commentSection.classList.add("comment-section");

    let commentList = document.createElement("div"); // Plats för kommentarer

    let commentInput = document.createElement("input");
    commentInput.type = "text";
    commentInput.placeholder = "Skriv en kommentar...";
    
    let commentButton = document.createElement("button");
    commentButton.innerText = "Kommentera";
    commentButton.classList.add("button");

    commentButton.addEventListener("click", function () {
        let commentText = commentInput.value;
        if (commentText.trim() === "") {
            alert("Du kan inte skicka en tom kommentar!");
            return;
        }

        let comment = document.createElement("p");
        comment.classList.add("comment");
        comment.innerText = commentText;
        commentList.appendChild(comment);
        commentInput.value = "";
    });

    commentSection.appendChild(commentList); // Lägg kommentarer först
    commentSection.appendChild(commentInput);
    commentSection.appendChild(commentButton);

    postContainer.appendChild(commentSection);
    document.getElementById("postsContainer").appendChild(postContainer);
    
    // Rensa inputfältet efter postning
    document.getElementById("postInput").value = "";
});
