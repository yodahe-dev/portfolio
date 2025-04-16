fetch("projects.json")
  .then(res => res.json())
  .then(projects => {
    const container = document.getElementById("project-list");
    projects.forEach(p => {
      const techList = p.tech.map(t => `<span class="text-xs bg-gray-700 px-2 py-1 rounded mr-1">${t}</span>`).join('');
      container.innerHTML += `
        <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-yellow-400 transition duration-300 min-w-[400px] max-w-sm flex flex-col">
          <img src="${p.image}" alt="${p.title}" class="w-full h-48 object-cover">
          <div class="p-4 flex-1 flex flex-col justify-between">
            <div>
              <h3 class="text-xl font-semibold mb-2 text-yellow-300">${p.title}</h3>
              <p class="text-sm mb-2 text-gray-300 line-clamp-3">${p.description}</p>
              <div class="mb-3">${techList}</div>
            </div>
          </div>
        </div>
      `;
    });
  })
  .catch(err => console.error("Failed to load projects:", err));
