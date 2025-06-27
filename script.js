const textarea = document.getElementById("autoTextarea");
const post= document.getElementById("post");

    textarea.addEventListener("input", () => {
      textarea.style.height = "auto"; // Reset height
      textarea.style.height = textarea.scrollHeight + "px"; // Set to content height
    

if (textarea.value.trim() !== "") {
    post.style.opacity= 1;
} else {
    
}
});