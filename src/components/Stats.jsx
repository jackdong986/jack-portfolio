export default function Stats() {
  return (
    <section style={{ textAlign: "center" }}>
      <h2>📊 GitHub Stats</h2>

      <img
        height="160"
        src="https://github-readme-stats.vercel.app/api/top-langs?username=jackdong986&show_icons=true&layout=compact&theme=tokyonight"
      />

      <img
        height="160"
        src="https://github-readme-stats.vercel.app/api?username=jackdong986&show_icons=true&theme=tokyonight"
      />

      <img
        src="https://github-readme-streak-stats.herokuapp.com/?user=jackdong986&theme=tokyonight"
        style={{ marginTop: "1rem" }}
      />
    </section>
  );
}
