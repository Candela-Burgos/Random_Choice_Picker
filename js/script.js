const tagsElem = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus();

const createTags = (input) => {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  if (input === "") {
    tagsElem.style.display = "none";
  } else {
    tagsElem.style.display = "inline-block";
    tagsElem.innerHTML = "";
    tags.forEach((tag) => {
      const tagElem = document.createElement("span");
      tagElem.classList.add("tag");
      tagElem.innerText = tag;
      tagsElem.appendChild(tagElem);
    });
  }
};

const chooseRandomTag = () => {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
};

const randomSelectTag = () => {
  const interval = setInterval(() => {
    const randomTag = chooseRandomTag();

    if (randomTag !== undefined) {
      randomTag.classList.add("highlight");

      setTimeout(() => {
        randomTag.classList.remove("highlight");
      }, 100);
    }
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = chooseRandomTag();

      randomTag.classList.add("highlight");
    }, 100);
  }, 3000);
};

textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);

  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);

    randomSelectTag();
  }
});
