document.addEventListener("DOMContentLoaded", function () {
  console.log(parseLink());
});

const parseLink = () => {
  const body = document.querySelector("body");

  const sections = Array.from(body.querySelectorAll("section")).filter(
    (section) => section.getAttribute("data-id").startsWith("92")
  );

  const articles = sections
    .reduce(
      (acc, section) => [
        ...acc,
        ...Array.from(section.querySelectorAll("article")),
      ],
      []
    )
    .filter((article) => article.getAttribute("data-class").endsWith("45"));

  const divs = articles
    .reduce(
      (acc, article) => [
        ...acc,
        ...Array.from(article.querySelectorAll("div")),
      ],
      []
    )
    .filter((div) => div.getAttribute("data-tag").includes("78"));

  const bolds = divs
    .reduce(
      (acc, div) => [...acc, ...Array.from(div.querySelectorAll("b"))],
      []
    )
    .filter((bold) => bold.getAttribute("class") === "ramp ref");

  const link = bolds.reduce(
    (acc, bold) => acc + bold.getAttribute("value"),
    ""
  );

  return link;
};
