export default function Skills() {
  const icons = [
    "cplusplus/cplusplus-original.svg",
    "csharp/csharp-original.svg",
    "git/git-original.svg",
    "java/java-original.svg",
    "javascript/javascript-original.svg",
    "kotlin/kotlin-original.svg",
    "php/php-original.svg",
    "python/python-original.svg",
    "visualstudio/visualstudio-plain.svg",
    "react/react-original.svg",
    "vite/vite-original.svg",
    "html5/html5-original.svg",
    "bootstrap/bootstrap-original.svg",
    "nodejs/nodejs-original.svg",
    "mysql/mysql-original.svg",
    "firebase/firebase-plain.svg",
    "flask/flask-original.svg",
    "premierepro/premierepro-original.svg",
    "photoshop/photoshop-original.svg",
    "figma/figma-original.svg",
    "docker/docker-original.svg",
    "huggingface/huggingface-original.svg",
    "kubernetes/kubernetes-plain.svg"
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
