// ================= CONFIG =================
// ================= SUPABASE =================
const config = window.TEAM_SCHEDULE_SHARED_CONFIG;

// NEVER redeclare
const supabase = window.__SUPABASE_CLIENT__ || window.supabase.createClient(
  config.supabase.url,
  config.supabase.anonKey
);

window.__SUPABASE_CLIENT__ = supabase;

let state = {
  events: [],
  teams: []
};

// ================= INIT =================
init();

async function init() {
  try {
    const { data } = await supabase
      .from(config.supabase.table)
      .select("*")
      .eq("board_id", config.boardId)
      .single();

    if (data && data.shared_state) {
      state = data.shared_state;
    }
  } catch (err) {
    console.log("No previous data");
  }

  renderAll();
}

// ================= SAVE =================
async function save() {
  await supabase.from(config.supabase.table).upsert({
    board_id: config.boardId,
    shared_state: state,
    updated_at: new Date()
  });
}

// ================= UPDATE =================
function update() {
  save();
  renderAll();
}

// ================= EVENT MODAL =================
const eventDialog = document.getElementById("eventDialog");
const openEventBtn = document.getElementById("openEventModalBtn");
const eventForm = document.getElementById("eventForm");

openEventBtn.onclick = () => eventDialog.showModal();

eventForm.onsubmit = function (e) {
  e.preventDefault();

  const name = document.getElementById("eventName").value;

  state.events.push({
    id: crypto.randomUUID(),
    name
  });

  eventDialog.close();
  eventForm.reset();
  update();
};

// ================= TEAM MODAL =================
const teamDialog = document.getElementById("teamDialog");
const openTeamBtn = document.getElementById("openTeamModalBtn");
const teamForm = document.getElementById("teamForm");

openTeamBtn.onclick = () => teamDialog.showModal();

let tempMembers = [];

document.getElementById("addMemberBtn").onclick = () => {
  const input = document.getElementById("memberInput");
  if (!input.value) return;

  tempMembers.push({
    id: crypto.randomUUID(),
    name: input.value
  });

  input.value = "";
  renderTempMembers();
};

function renderTempMembers() {
  const container = document.getElementById("memberChipList");

  container.innerHTML = tempMembers.map(m => `
    <div class="chip">
      ${m.name}
      <button onclick="removeTempMember('${m.id}')">×</button>
    </div>
  `).join("");
}

function removeTempMember(id) {
  tempMembers = tempMembers.filter(m => m.id !== id);
  renderTempMembers();
}

teamForm.onsubmit = function (e) {
  e.preventDefault();

  const name = document.getElementById("teamName").value;

  state.teams.push({
    id: crypto.randomUUID(),
    name,
    members: tempMembers
  });

  tempMembers = [];
  teamDialog.close();
  teamForm.reset();
  update();
};

// ================= DELETE =================
function deleteEvent(id) {
  state.events = state.events.filter(e => e.id !== id);
  update();
}

function deleteTeam(id) {
  state.teams = state.teams.filter(t => t.id !== id);
  update();
}

function deleteMember(teamId, memberId) {
  const team = state.teams.find(t => t.id === teamId);
  if (!team) return;

  team.members = team.members.filter(m => m.id !== memberId);
  update();
}

// ================= ADD MEMBER =================
function addMemberToTeam(teamId) {
  const name = prompt("Enter member name");
  if (!name) return;

  const team = state.teams.find(t => t.id === teamId);

  team.members.push({
    id: crypto.randomUUID(),
    name
  });

  update();
}

// ================= RENDER =================
function renderAll() {
  renderEvents();
  renderTeams();
}

// ================= RENDER EVENTS =================
function renderEvents() {
  const container = document.getElementById("eventGrid");
  container.innerHTML = "";

  if (state.events.length === 0) {
    container.innerHTML = `<div class="empty-state">No events yet</div>`;
    return;
  }

  state.events.forEach(event => {
    const div = document.createElement("div");
    div.className = "event-card";

    div.innerHTML = `
      <h3>${event.name}</h3>
      <button class="btn btn--ghost" onclick="deleteEvent('${event.id}')">Delete</button>
    `;

    container.appendChild(div);
  });
}

// ================= RENDER TEAMS =================
function renderTeams() {
  const container = document.getElementById("teamGrid");
  container.innerHTML = "";

  if (state.teams.length === 0) {
    container.innerHTML = `<div class="empty-state">No teams yet</div>`;
    return;
  }

  state.teams.forEach(team => {
    const div = document.createElement("div");
    div.className = "team-card";

    div.innerHTML = `
      <h3>${team.name}</h3>

      <button class="btn btn--secondary" onclick="addMemberToTeam('${team.id}')">
        + Add Member
      </button>

      <button class="btn btn--ghost" onclick="deleteTeam('${team.id}')">
        Delete Team
      </button>

      <div class="chip-list">
        ${team.members.map(member => `
          <div class="chip">
            ${member.name}
            <button onclick="deleteMember('${team.id}', '${member.id}')">×</button>
          </div>
        `).join("")}
      </div>
    `;

    container.appendChild(div);
  });
}