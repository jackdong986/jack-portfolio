export default function Skills() {
  const icons = [
    "html5/html5-original.svg",
    "css3/css3-original.svg",
    "javascript/javascript-original.svg",
    "react/react-original.svg",
    "python/python-original.svg",
    "java/java-original.svg",
    "mysql/mysql-original-wordmark.svg",
    "firebase/firebase-plain.svg",
    "kotlin/kotlin-original.svg",
    "c/c-original.svg",
    "csharp/csharp-original.svg",
    "figma/figma-original.svg"
  ];

  return (
    <section>
      <h2>🛠️ Languages & Tools</h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {icons.map((icon) => (
          <img
            key={icon}
            width="50"
            src={`https://raw.githubusercontent.com/devicons/devicon/master/icons/${icon}`}
          />
        ))}
      </div>
    </section>
  );
}
