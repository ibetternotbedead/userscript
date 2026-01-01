// ==UserScript==
// @name         TaskTime
// @namespace    https://diligentrobots.io/
// @version      1.0.0
// @description  Overlay
// @match        https://fleet.diligentrobots.io/static/robodash/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/ibetternotbedead/userscript/main/script.js
// @downloadURL  https://raw.githubusercontent.com/ibetternotbedead/userscript/main/script.js

// ==/UserScript==
const siteList = [
  {
    name: "UChicago",
    number: "23",
    projectX: "diligent-robotics",
    env: "prod-2",
    "3pod": "Pod A",
    "4pod": "Pod D",
    "5pod": "Pod E",
    "6pod": "Pod F",
    "7pod": "Pod B",
  },
  {
    name: "Rochester General",
    number: "27",
    projectX: "diligent-robotics-project-1",
    env: "prod-2",
    "3pod": "Pod C",
    "4pod": "Pod C",
    "5pod": "Pod E",
    "6pod": "Pod F",
    "7pod": "Pod G",
  },
  {
    name: "Cedars",
    number: "3",
    projectX: "project-3",
    env: "prod-2",
    "3pod": "Pod A",
    "4pod": "Pod A",
    "5pod": "Pod A",
    "6pod": "Pod A",
    "7pod": "Pod A",
  },
  {
    name: "UTSW-Dallas",
    number: "15",
    projectX: "diligent-robotics",
    env: "prod-2",
    "3pod": "Pod A",
    "4pod": "Pod D",
    "5pod": "Pod D",
    "6pod": "Pod D",
    "7pod": "Pod D",
  },
  {
    name: "Endeavor Elmhurst",
    number: "8",
    projectX: "diligent-robotics",
    env: "prod-2",
    "3pod": "Pod B",
    "4pod": "Pod B",
    "5pod": "Pod B",
    "6pod": "Pod B",
    "7pod": "Pod E",
  },
  {
    name: "Northwestern Main",
    number: "12",
    projectX: "diligent-robotics",
    env: "prod-2",
    "3pod": "Pod B",
    "4pod": "Pod B",
    "5pod": "Pod E",
    "6pod": "Pod E",
    "7pod": "Pod F",
  },
  {
    name: "Valley Health VA",
    number: "18",
    projectX: "diligent-robotics-project-1",
    env: "prod-3",
    "3pod": "Pod C",
    "4pod": "Pod A",
    "5pod": "Pod C",
    "6pod": "Pod C",
    "7pod": "Pod F",
  },
  {
    name: "CHLA",
    number: "14",
    projectX: "project-3",
    env: "prod-2",
    "3pod": "Pod A",
    "4pod": "Pod A",
    "5pod": "Pod A",
    "6pod": "Pod A",
    "7pod": "Pod A",
  },
  {
    name: "Montage",
    number: "17",
    projectX: "project-3",
    env: "prod-2",
    "3pod": "Pod A",
    "4pod": "Pod A",
    "5pod": "Pod A",
    "6pod": "Pod A",
    "7pod": "Pod B",
  },
  {
    name: "Northwestern Central Dupage",
    number: "38",
    projectX: "diligent-robotics",
    env: "prod-1",
    "3pod": "Pod B",
    "4pod": "Pod B",
    "5pod": "Pod B",
    "6pod": "Pod E",
    "7pod": "Pod F",
  },
  {
    name: "El Paso Children",
    number: "43",
    projectX: "diligent-robotics-project-2",
    env: "prod-1",
    "3pod": "Pod B",
    "4pod": "Pod D",
    "5pod": "Pod D",
    "6pod": "Pod D",
    "7pod": "Pod C",
  },
  {
    name: "ThedaCare Neenah",
    number: "32",
    projectX: "diligent-robotics",
    env: "prod-2",
    "3pod": "Pod B",
    "4pod": "Pod B",
    "5pod": "Pod B",
    "6pod": "Pod B",
    "7pod": "Pod B",
  },
  {
    name: "UTHSA",
    number: "41",
    projectX: "diligent-robotics",
    env: "prod-1",
    "3pod": "Pod B",
    "4pod": "Pod D",
    "5pod": "Pod D",
    "6pod": "Pod D",
    "7pod": "Pod D",
  },
  {
    name: "Christiana Care",
    number: "6",
    projectX: "diligent-robotics-project-1",
    env: "prod-2",
    "3pod": "Pod C",
    "4pod": "Pod C",
    "5pod": "Pod C",
    "6pod": "Pod E",
    "7pod": "Pod C",
  },
  {
    name: "Carilion New River Valley",
    number: "45",
    projectX: "diligent-robotics-project-1",
    env: "prod-1",
    "3pod": "Pod C",
    "4pod": "Pod C",
    "5pod": "Pod C",
    "6pod": "Pod E",
    "7pod": "Pod G",
  },
  {
    name: "THE Ohio State University",
    number: "36",
    projectX: "diligent-robotics-project-1",
    env: "prod-1",
    "3pod": "Pod C",
    "4pod": "Pod C",
    "5pod": "Pod C",
    "6pod": "Pod C",
    "7pod": "Pod C",
  },
  {
    name: "Rochester Unity",
    number: "28",
    projectX: "diligent-robotics-project-1",
    env: "prod-3",
    "3pod": "Pod C",
    "4pod": "Pod C",
    "5pod": "Pod E",
    "6pod": "Pod F",
    "7pod": "Pod G",
  },
  {
    name: "Antelope Valley",
    number: "30",
    projectX: "project-3",
    env: "prod-2",
    "3pod": "Pod A",
    "4pod": "Pod A",
    "5pod": "Pod A",
    "6pod": "Pod A",
    "7pod": "Pod A",
  },
  {
    name: "Shannon Health",
    number: "4",
    projectX: "diligent-robotics",
    env: "prod-2",
    "3pod": "Pod A",
    "4pod": "Pod D",
    "5pod": "Pod D",
    "6pod": "Pod C",
    "7pod": "Pod D",
  },
  {
    name: "Providence St John",
    number: "40",
    projectX: "project-3",
    env: "prod-2",
    "3pod": "Pod A",
    "4pod": "Pod A",
    "5pod": "Pod A",
    "6pod": "Pod A",
    "7pod": "Pod A",
  },
  {
    name: "Mary Washington",
    number: "5",
    projectX: "diligent-robotics-project-1",
    env: "prod-2",
    "3pod": "Pod C",
    "4pod": "Pod C",
    "5pod": "Pod C",
    "6pod": "Pod C",
    "7pod": "Pod C",
  },
  {
    name: "UTMB",
    number: "21",
    projectX: "diligent-robotics",
    env: "prod-2",
    "3pod": "Pod C",
    "4pod": "Pod D",
    "5pod": "Pod D",
    "6pod": "Pod D",
    "7pod": "Pod D",
  },
  {
    name: "Endeavor Edward",
    number: "9",
    projectX: "diligent-robotics",
    env: "prod-2",
    "3pod": "Pod B",
    "4pod": "Pod B",
    "5pod": "Pod B",
    "6pod": "Pod B",
    "7pod": "Pod E",
  },
  {
    name: "Endeavor Highland Park",
    number: "29",
    projectX: "diligent-robotics",
    env: "prod-2",
    "3pod": "Pod B",
    "4pod": "Pod B",
    "5pod": "Pod B",
    "6pod": "Pod B",
    "7pod": "Pod E",
  },
  {
    name: "Mosaic St Joseph",
    number: "35",
    projectX: "diligent-robotics",
    env: "prod-1",
    "3pod": "Pod B",
    "4pod": "Pod B",
    "5pod": "Pod B",
    "6pod": "Pod B",
    "7pod": "Pod B",
  },
  {
    name: "UTSW Cancer Center",
    number: "44",
    projectX: "diligent-robotics",
    env: "prod-1",
    "3pod": "Pod A",
    "4pod": "Pod D",
    "5pod": "Pod D",
    "6pod": "Pod D",
    "7pod": "Pod D",
  },
  {
    name: "Capital Factory",
    number: "52",
    projectX: "diligent-robotics",
    env: "prod-",
    "3pod": "Pod B",
    "4pod": "Pod B",
    "5pod": "Pod E",
    "6pod": "Pod E",
    "7pod": "Pod F",
  },
  {
    name: "CHOP",
    number: "1",
    projectX: "diligent-robotics-project-1",
    env: "prod-1",
    "3pod": "Pod C",
    "4pod": "Pod C",
    "5pod": "Pod C",
    "6pod": "Pod F",
    "7pod": "Pod C",
  },
];
const buttonConfig = [
  { label: "All Mbot for Pod:" },
  {
    label: "Jira Forms",
    url: "https://diligentrobots.atlassian.net/jira/software/c/projects/DRM/form",
  },
  {
    label: "Incident Form",
    url: "https://diligentrobots.atlassian.net/jira/software/c/projects/DRM/form/560?from=directory",
  },
  {
    label: "Call Request",
    url: "https://diligentrobots.atlassian.net/jira/software/c/projects/DRM/form/529?from=directory",
  },
  {
    label: "Run books",
    url: "https://coda.io/d/Runbooks_d_A2-DtqJJR/Ops-Runbooks-Home-Page_su20ZBgR#Runbooks-Red-Team-View_tuyi_4z_",
  },
  {
    label: "ROC Coda",
    url: "https://coda.io/d/Robot-Operations-Center_dgAVnlqszp4/Autonomy-Phase_suLdgQth#_luqu3x52",
  },
  {
    label: "Common Commands",
    url: "https://docs.google.com/spreadsheets/d/1QBRl09EXI7lTIgEuPoGXlo6VBzPPFHLnVk-4JE6p5kg/edit?gid=1844596694#gid=1844596694",
  },
  {
    label: "Autoprio History",
    url: "https://apps.diligentrobots.io:4060/robotExclusions.html",
  },
  {
    label: "PD Templates",
    url: "https://docs.google.com/spreadsheets/d/1c1NRAQMzTWoAIGQ0XuMZxjXr0y7nWCqtGBzRRq7HF_c/edit?gid=0#gid=0",
  },
];

const COLORS = {
  primary: "#70c2de",
  backgroundDark: "#343a40",
  backgroundDarker: "#2e2e2e",
  white: "#ffffff",
  black: "#000000",
  warning: "#fff700",
  failure: "#ff0000",
  safe: "#17ff5d",
  secondary: "#22616d",
  risk: "#ff7708",
};

let permission = await Notification.requestPermission();
let SCRIPT_ENABLED = true;
let behaviorTimerMap = new Map();
const DEBUG = true;
const safeAuxPercent = 50;
const warningAuxPercent = 40;
const safeFetchPercent = 75;
const warningFetchPercent = 69;
const SCRIPT_ATTR = "data-script-added";
const baseMbotUrl = "https://sitexx.diligentrobots.io/app/mbot";
const TableContext = { table: null, tbody: null, rows: [] };
const timerMap = new Map();
const ORIGINAL_ORDER = new WeakMap();
const POD_MODAL_ID = "pod-selection-overlay";
const SIDEBAR_CONTAINER_ATTR = "data-script-sidebar";
const siteMappings = siteList.reduce((acc, site) => {
  if (!acc[site.pod]) acc[site.pod] = [];
  acc[site.pod].push(site);
  return acc;
}, {});
const filterState = {
  activePods: new Set(),
  tsOnly: false,
  selectedPodType: "4pod",
  siteMappings: {},
  robotStatus: { IDLE: false, OVERRIDE: false },
};
const DataStore = {
  robots: new Map(),
  derived: { elevator: new Set(), busy: new Set(), estop: new Set() },
  timers: new Map(),
  lastUpdated: 0,
};

function log(...args) {
  if (!DEBUG) return;
  console.log("[SCRIPT]", ...args);
}

const PIPELINE = [
  (rowModels) => rearrangePhaseTime(rowModels),     
  (rowModels, store) => insertElementsIntoRow(rowModels, store),
  (rowModels, store) => buttonColors.run(rowModels, store),
  (rowModels, store) => applyAllFilters(rowModels, store),
  (rowModels) => changeTimesColors(rowModels),
  () => redFailureColor(),
  () => insertMasterToggle(),
  () => createHeaderRow(),
  () => createControlBarUI(),
  () => injectAnimations(),
  () => insertSidebarLinks(),
];


function runPipeline() {
  refreshTableContext();

  if (!TableContext.rows.length) {
    log("No rows found to inject buttons/SOC");
    return;
  }

  const rowModels = buildRowModels(TableContext).filter((r) => r.robotId);
  if (!rowModels.length) {
    log("No valid robot rows found");
    return;
  }

  PIPELINE.forEach((fn) => fn(rowModels, DataStore));
}

setInterval(async () => {
  if (!SCRIPT_ENABLED) return;
  await updateRobotData();
  runPipeline();
}, 1000);

function toggleScript(enable) {
  SCRIPT_ENABLED = enable;

  if (enable) {
    log("→ STARTING script");
    startScript();
  } else {
    log("→ STOPPING script");
    stopScript();
    document.querySelectorAll("tr.activity_tableRow__qiRKF").forEach((row) => {
      const cells = row.querySelectorAll("td");
      if (cells.length >= 7) {
        [cells[2], cells[3], cells[4]].forEach((cell) => {
          cell.style.color = "";
          cell.style.fontWeight = "";
        });
      }
    });
  }
}

function startScript() {
  runPipeline();
}

function stopScript() {
  const removed = document.querySelectorAll(`[${SCRIPT_ATTR}]`);
  removed.forEach((el) => el.remove());

  if (filterState) {
    filterState.activePods?.clear();
    filterState.tsOnly = false;
    filterState.robotStatus = {};
  }
}

function insertMasterToggle() {
  const SCRIPT_MT = "insertedMT";
  if (document.querySelector(`[${SCRIPT_MT}]`)) return;
  const toggle = document.createElement("button");
  toggle.id = "scriptToggleButton";
  toggle.setAttribute(SCRIPT_MT, "true");
  toggle.textContent = SCRIPT_ENABLED ? "Turn Off" : "Turn On";
  toggle.style = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 12px 18px;
    background: #333;
    color: white;
    border-radius: 8px;
    z-index: 999999;
    cursor: pointer;
    font-size: 14px;
  `;

  toggle.onclick = () => {
    const newState = !SCRIPT_ENABLED;
    toggleScript(newState);
    toggle.textContent = newState ? "Turn Off" : "Turn On";
  };

  document.body.appendChild(toggle);
}

function refreshTableContext() {
  TableContext.table = document.querySelector("table");
  TableContext.tbody = TableContext.table?.querySelector("tbody") || null;

  if (!TableContext.tbody) {
    TableContext.rows = [];
    return;
  }

  TableContext.rows = Array.from(
    TableContext.tbody.querySelectorAll("tr")
  ).filter(tr => tr.querySelectorAll("td").length >= 5);
}


function parseRow(row) {
  if (!row) return null;

  const cells = Array.from(row.querySelectorAll("td"));
  const buttonContainer = row.querySelector(".button-container");
  const getCellText = (index) => cells[index]?.textContent.trim() || "";

  let auxSoc = null,
    fetchSoc = null;
  const socCell = cells[2];
  if (socCell) {
    auxSoc = socCell.querySelector(".aux-soc")?.textContent.trim() || null;
    fetchSoc = socCell.querySelector(".fetch-soc")?.textContent.trim() || null;
  }

  return {
    row,
    buttonContainer,
    cells,
    siteName: getCellText(0),
    robotId: getCellText(1).replace(/\D/g, ""),
    socCell,
    auxSoc,
    fetchSoc,
    status: getCellText(3),
    taskTime: getCellText(4),
    phaseTime: getCellText(5), 
    phase: getCellText(6), 
    pickup: getCellText(7),
    dropoff: getCellText(8),
    location: getCellText(9),
    from: getCellText(10),
    to: getCellText(11),
  };
}

function buildRowModels(context) {
  return context.rows.map(parseRow);
}

function getRowContext(rowModel) {
  const { siteName, botNumber } = rowModel;
  const siteNumber = getSiteNumber(siteName) || "UnknownNumber";

  return { baseMbotUrl, siteName, siteNumber, botNumber };
}

function getSiteNumber(siteName) {
  for (const pod in siteMappings) {
    if (!siteMappings.hasOwnProperty(pod)) continue;
    const site = siteMappings[pod].find((s) => s.name === siteName);
    if (site) return site.number;
  }
  return null;
}

function getSiteByName(siteName) {
  for (const pod in siteMappings) {
    if (!siteMappings.hasOwnProperty(pod)) continue;
    const site = siteMappings[pod].find((s) => s.name === siteName);
    if (site) return site;
  }
}

function getSiteNameFromRow(row) {
  const tdWithTitle = row.querySelector("td[title]");
  return tdWithTitle ? tdWithTitle.getAttribute("title") : "";
}

function getSessionId() {
  if (!SCRIPT_ENABLED) return null;
  const sessionId = localStorage.getItem("persist:app");
  if (sessionId) {
    const parsed = JSON.parse(sessionId);
    return parsed.sessionId?.replace(/"/g, "") || null;
  }
  return window.sessionId || null;
}

async function fetchRobotData(sessionId) {
  const response = await fetch(
    "https://apps.diligentrobots.io:5001/asyncCall",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sessionId }),
    }
  );

  if (!response.ok) return null;
  const data = await response.json();
  if (!Array.isArray(data?.robots)) return null;
  return data.robots;
}

async function updateRobotData() {
  const sessionId = getSessionId();
  if (!sessionId) return;

  const robots = await fetchRobotData(sessionId);
  if (!robots) return;

  const robotMap = new Map();
  const elevator = new Set();
  const busy = new Set();
  const estop = new Set();
  const timers = new Map();

  robots.forEach((robot) => {
    const match = robot.robotId.match(/moxi(\d+)/);
    if (!match) return;
    const id = match[1];
    const mapId = robot.map_frame_id?.match(/map(\d+)_/)?.[1] ?? null;

    const state = {
      auxSoc: robot?.aux_battery?.soc ?? null,
      fetchSoc: robot?.fetch_battery?.soc ?? null,
      taskStatus: robot?.task_status ?? "",
      semanticRoom: robot?.semantic_room ?? "",
      mapFrameId: mapId,
      currentActionInfo: robot?.current_action_info ?? {},
    };

    robotMap.set(id, state);

    if (
      state.taskStatus === "BUSY" &&
      (robot.triggered_alerts?.elevator_await_ask_user ||
        robot.triggered_alerts?.stair_detector)
    ) {
      elevator.add(id);
    }

    if (robot.aggregated_estop_state?.hardware_estop?.value === true) {
      estop.add(id);
    }

    if (state.currentActionInfo?.type) {
      const prev = DataStore.timers.get(id);
      timers.set(id, {
        type: state.currentActionInfo.type,
        timestamp:
          prev?.type === state.currentActionInfo.type
            ? prev.timestamp
            : Date.now(),
      });
    }
  });

  for (const [id, r] of robotMap.entries()) {
    if (r.taskStatus !== "BUSY") continue;
    for (const [otherId, o] of robotMap.entries()) {
      if (
        id !== otherId &&
        o.taskStatus === "BUSY" &&
        o.semanticRoom === r.semanticRoom &&
        o.mapFrameId === r.mapFrameId
      ) {
        busy.add(id);
        busy.add(otherId);
      }
    }
  }

  DataStore.robots = robotMap;
  DataStore.derived = { elevator, busy, estop };
  DataStore.timers = timers;
  DataStore.lastUpdated = Date.now();
}

const buttonColors = {
  run(rowModels, store) {
    const {
      elevator = new Set(),
      busy = new Set(),
      estop = new Set(),
    } = store.derived || {};
    const robots = store.robots || new Map();

    rowModels.forEach(({ row, robotId }) => {
      if (!row || !robotId) return;

      const fc = row.querySelector(".fc-button");
      const dd = row.querySelector(".dd-button");
      if (!fc || !dd) return;

      if (estop.has(robotId)) {
        fc.textContent = "E";
        fc.style.backgroundColor = COLORS.failure;
        return;
      }

      fc.textContent = "FC";
      fc.style.backgroundColor = COLORS.secondary;

      const data = robots.get(robotId);
      if (!data) return;

      if (elevator.has(robotId)) {
        dd.style.backgroundColor = COLORS.failure;
        if (busy.has(robotId)) dd.style.border = "2px solid yellow";
        return;
      }

      const type = data.currentActionInfo?.type;

      if (type) {
        const prev = behaviorTimerMap.get(robotId);
        behaviorTimerMap.set(robotId, {
          type,
          timestamp: prev?.type === type ? prev.timestamp : Date.now(),
        });
      }

      if (type === "takeelevator") {
        dd.style.backgroundColor = COLORS.white;
        dd.style.color = COLORS.black;
        return;
      }
    });
  },
};

function rearrangePhaseTime(rowModels) {
  rowModels.forEach((rowModel) => {
    const { row, cells } = rowModel;
    if (!row || !cells?.length) return;

    const phaseCell = cells[6];    
    const phaseTimeCell = cells[5]; 

    if (phaseCell && phaseTimeCell) {
      row.insertBefore(phaseTimeCell, phaseCell);
      const newCells = Array.from(row.querySelectorAll("td"));
      rowModel.cells = newCells;
      rowModel.taskTime = newCells[4]?.textContent.trim() || "";
      rowModel.phaseTime = newCells[5]?.textContent.trim() || "";
      rowModel.phase = newCells[6]?.textContent.trim() || "";
    }
  });
}


function insertElementsIntoRow(rowModels = TableContext.rows.map(parseRow)) {
  rowModels.forEach((rowModel) => {
    const { row, robotId, siteName, cells } = rowModel;
    if (!row || !robotId) return;
    if (row.querySelector(".button-container")) return;

    const site = getSiteByName(siteName);
    const siteNumber = getSiteNumber(siteName) || "xx";
    const botNumber = robotId;

    const tdContainer = document.createElement("td");
    tdContainer.style.display = "flex";
    tdContainer.style.alignItems = "center";
    tdContainer.style.marginRight = "10px";
    tdContainer.setAttribute(SCRIPT_ATTR, "true");

    const container = document.createElement("div");
    container.className = "button-container";
    container.style.display = "flex";
    container.style.alignItems = "center";
    container.style.marginRight = "10px";
    container.setAttribute(SCRIPT_ATTR, "true");

    const createBtn = (label, className, bgColor, onClick) => {
      const btn = document.createElement("button");
      btn.textContent = label;
      btn.className = className + " animated-button";
      btn.setAttribute(SCRIPT_ATTR, "true");
      Object.assign(btn.style, {
        padding: "10px 20px",
        cursor: "pointer",
        marginRight: "10px",
        fontSize: "14px",
        fontWeight: "bold",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        textAlign: "center",
        boxSizing: "border-box",
        minWidth: "60px",
        border: "none",
        color: COLORS.white,
        backgroundColor: bgColor,
        borderRadius: "5px",
        position: "relative",
      });
      btn.addEventListener("click", onClick);
      container.appendChild(btn);
      return btn;
    };

    // --- DD Button ---
    createBtn("DD", "dd-button", COLORS.backgroundDark, () => {
      if (site?.projectX) {
        window.open(
          `https://automate.dronedeploy.com/project/${site.projectX}/robots/moxi${botNumber}/dashboard/`,
          "_blank",
          "noopener,noreferrer,width=860,height=540"
        );
      }
    });

    // --- FC Button ---
    const fcBtn = createBtn("FC", "fc-button", COLORS.secondary, () => {
      const robotData = DataStore.robots.get(robotId);
      if (robotData?.mapFrameId) {
        const env = site?.env || "cloud";
        window.open(
          `https://diligentrobots-${env}.fetchcore-cloud.com/management/#/maps/${robotData.mapFrameId}/published/robots`,
          "_blank"
        );
      }
    });

    // --- MB Button ---
    createBtn("MB", "mbot-button", COLORS.primary, () => {
      window.open(
        baseMbotUrl.replace("xx", siteNumber),
        "_blank",
        "noopener,noreferrer,width=860,height=540"
      );
    });

    // --- SOC cells ---
    let socWrapper = row.querySelector(".soc-wrapper");
    if (!socWrapper) {
      socWrapper = document.createElement("td");
      socWrapper.className = "soc-wrapper";
      socWrapper.style.display = "flex";
      socWrapper.style.alignItems = "center";
      socWrapper.style.justifyContent = "center";
      socWrapper.setAttribute(SCRIPT_ATTR, "true");
      row.insertBefore(socWrapper, row.children[2] || null);
    }

    const auxSocDiv = document.createElement("div");
    auxSocDiv.className = "soc-cell aux-soc";
    const fetchSocDiv = document.createElement("div");
    fetchSocDiv.className = "soc-cell fetch-soc";
    socWrapper.appendChild(auxSocDiv);
    socWrapper.appendChild(fetchSocDiv);

    const robotData = DataStore.robots.get(robotId) || {};
    const auxPercent = (robotData?.auxSoc || 0) * 100;
    const fetchPercent = (robotData?.fetchSoc || 0) * 100;

    [auxSocDiv, fetchSocDiv].forEach((div) =>
      Object.assign(div.style, {
        cursor: "pointer",
        width: "40px",
        height: "40px",
        margin: "0 2px",
        borderRadius: "5px",
        display: "inline-block",
        textAlign: "center",
        lineHeight: "40px",
        fontSize: "18px",
        fontWeight: "bold",
        backgroundColor: "transparent",
      })
    );

    auxSocDiv.textContent = `${auxPercent.toFixed(0)}%`;
    auxSocDiv.style.color =
      auxPercent > safeAuxPercent
        ? COLORS.safe
        : auxPercent > warningAuxPercent
        ? COLORS.warning
        : COLORS.failure;

    fetchSocDiv.textContent = `${fetchPercent.toFixed(0)}%`;
    fetchSocDiv.style.color =
      fetchPercent > safeFetchPercent
        ? COLORS.safe
        : fetchPercent > warningFetchPercent
        ? COLORS.warning
        : COLORS.failure;

    const firstCell =
      row.querySelector("td.activity_firstCol__scW3o") || row.firstChild;
    firstCell.parentNode.insertBefore(container, firstCell);

    const failed = !!rowModel.row.querySelector('div[title*="FAILED"]');

    if (failed) {
      createBtn("IC", "ic-button", "#007bff", () => {
        navigator.clipboard.writeText(
          `${rowModel.siteName} Site${siteNumber} SN${rowModel.robotId} - `
        );
        window.open(
          "https://diligentrobots.atlassian.net/jira/software/c/projects/DRM/form/560",
          "_blank",
          "noopener,noreferrer,width=800,height=600"
        );
      });
    } else {
      rowModel.buttonContainer?.querySelector(".ic-button")?.remove();
    }

    const phaseText = rowModel.phase?.toLowerCase() || "";
    const phaseTimeText = rowModel.phaseTime || "";

    const parseMinutes = (txt) => {
      const m = txt.match(/(\d+)\s*m/i);
      return m ? Number(m[1]) : 0;
    };

    const phaseMinutes = parseMinutes(phaseTimeText);

    let needsCS = false;
    let reasonText = "";

    if (phaseText.includes("loading") && phaseMinutes > 1) {
      const unit = rowModel.pickup || "UnknownUnit";
      needsCS = true;
      reasonText = `Unit ${unit} needs to load`;
    } else if (phaseText.includes("unloading") && phaseMinutes > 1) {
      const unit = rowModel.pickup || "UnknownUnit";
      needsCS = true;
      reasonText = `Unit ${unit} needs to unload`;
    } else if (phaseMinutes > 45) {
      needsCS = true;
      reasonText = `Long task time (${phaseMinutes}m)`;
    }

    const existingCS = rowModel.buttonContainer?.querySelector(".cs-button");

    if (needsCS) {
      if (!existingCS) {
        createBtn("CS", "cs-button", "#007bff", () => {
          navigator.clipboard.writeText(
            `${rowModel.siteName} Site${siteNumber} SN${rowModel.robotId} - ${reasonText}`
          );
          window.open(
            "https://diligentrobots.atlassian.net/jira/software/c/projects/DRM/form/529",
            "_blank",
            "noopener,noreferrer,width=800,height=600"
          );
        });
      }
    } else {
      existingCS?.remove();
    }

    const siteCell = rowModel.row.querySelector("td.activity_firstCol__scW3o");
    if (siteCell && !siteCell.dataset.scriptBound) {
      siteCell.dataset.scriptBound = "true";

      siteCell.addEventListener("click", () => {
        if (
          !rowModel.buttonContainer?.querySelector(".ic-button") &&
          !rowModel.buttonContainer?.querySelector(".ic2-button")
        ) {
          const icBtn = createBtn("IC", "ic2-button", "#007bff", () => {
            navigator.clipboard.writeText(
              `${rowModel.siteName} Site${siteNumber} SN${rowModel.robotId} - `
            );
            window.open(
              "https://diligentrobots.atlassian.net/jira/software/c/projects/DRM/form/560",
              "_blank",
              "noopener,noreferrer,width=800,height=600"
            );
          });
          setTimeout(() => icBtn?.remove(), 3000);
        }

        if (
          !rowModel.buttonContainer?.querySelector(".cs-button") &&
          !rowModel.buttonContainer?.querySelector(".cs2-button")
        ) {
          const csBtn = createBtn("CS", "cs2-button", "#007bff", () => {
            const phaseText = rowModel.phase?.toLowerCase() || "";
            const phaseMinutes = (() => {
              const m = (rowModel.phaseTime || "").match(/(\d+)\s*m/i);
              return m ? Number(m[1]) : 0;
            })();

            let reasonText = "";
            if (phaseText.includes("loading") && phaseMinutes > 25) {
              reasonText = `Unit ${
                rowModel.pickup || "UnknownUnit"
              } needs to load`;
            } else if (phaseText.includes("unloading") && phaseMinutes > 25) {
              reasonText = `Unit ${
                rowModel.pickup || "UnknownUnit"
              } needs to unload`;
            } else if (phaseMinutes > 45) {
              reasonText = `Long task time (${phaseMinutes}m)`;
            }

            navigator.clipboard.writeText(
              `${rowModel.siteName} Site${siteNumber} SN${rowModel.robotId} - ${reasonText}`
            );
            window.open(
              "https://diligentrobots.atlassian.net/jira/software/c/projects/DRM/form/529",
              "_blank",
              "noopener,noreferrer,width=800,height=600"
            );
          });
          setTimeout(() => csBtn?.remove(), 3000);
        }
      });
    }
  });
}

function changeTimesColors(rowModels) {
  if (!rowModels) {
    rowModels = Array.from(document.querySelectorAll("tr.activity_tableRow__qiRKF")).map(parseRow);
  }

  rowModels.forEach((rowModel) => {
    const { row, cells } = rowModel;
    if (!row || !cells?.length) return;
    const taskTimeCell = cells[4] || null;
    const phaseTimeCell = cells[5] || null;

    if (!taskTimeCell || !phaseTimeCell) return;

    if (!ORIGINAL_ORDER.has(row)) {
      ORIGINAL_ORDER.set(row, Array.from(cells));
    }

    if (SCRIPT_ENABLED) {
      const colorRules = [
        { cell: taskTimeCell, warn: 30, fail: 60 },
        { cell: phaseTimeCell, warn: 15, fail: 20 },
      ];

      colorRules.forEach(({ cell, warn, fail }) => {
        const minutes = parseInt((cell.textContent || "").match(/^(\d+)/)?.[1] || "0", 10);
        if (minutes > fail) cell.style.color = COLORS.failure;
        else if (minutes > warn) cell.style.color = COLORS.warning;
        else cell.style.color = COLORS.white;
        cell.style.fontWeight = "bold";
      });
    } else {
      if (ORIGINAL_ORDER.has(row)) {
        ORIGINAL_ORDER.get(row).forEach((c) => row.appendChild(c));
      }
      [taskTimeCell, phaseTimeCell].forEach((cell) => {
        if (cell) {
          cell.style.color = "";
          cell.style.fontWeight = "";
        }
      });
    }

    rowModel.phaseTime = phaseTimeCell.textContent.trim();
    rowModel.phase = cells[6]?.textContent.trim() || "";
  });
}

function redFailureColor() {
  if (document.querySelector(`style[${SCRIPT_ATTR}]`)) return;
  const style = document.createElement("style");
  style.setAttribute(SCRIPT_ATTR, "true");
  style.textContent = `
    .activity_tableRow__qiRKF:has(div[title*="FAILED"]) {
      --bs-table-bg: #b93333 !important;
    }
  `;
  document.head.appendChild(style);
}

function createHeaderRow() {
  const SCRIPT_NS = "insertedrow";
  if (document.querySelector(`[${SCRIPT_NS}]`)) return;
  const table = document.querySelector("table");
  if (!table) return console.warn("Table not found, cannot create header row");

  const thead = table.querySelector("thead");
  if (!thead) return console.warn("Thead not found, cannot create header row");

  const theadRow = thead.querySelector("tr");
  if (!theadRow)
    return console.warn("Header row not found, cannot create header row");

  const controlHeader = document.createElement("th");
  controlHeader.setAttribute(SCRIPT_NS, "true");
  const controlButton = document.createElement("button");
  controlButton.className = "activity_tableHeadButton__uGLCO";
  controlButton.textContent = "Controls";
  controlButton.setAttribute(SCRIPT_ATTR, "true");
  controlHeader.appendChild(controlButton);
  controlHeader.setAttribute(SCRIPT_ATTR, "true");
  theadRow.insertBefore(controlHeader, theadRow.firstChild);

  const headers = theadRow.querySelectorAll("th");
  const socHeader = document.createElement("th");
  const socButton = document.createElement("button");
  socHeader.setAttribute(SCRIPT_ATTR, "true");
  socButton.id = "soc-sort-button";
  socButton.className = "activity_tableHeadButton__uGLCO";
  socButton.textContent = "SOC";

  const arrowSpan = document.createElement("span");
  arrowSpan.setAttribute(SCRIPT_ATTR, "true");
  arrowSpan.className = "activity_directionArrow__FSdXF";
  arrowSpan.textContent = "↓";
  socButton.appendChild(arrowSpan);

  socHeader.appendChild(socButton);
  theadRow.insertBefore(socHeader, headers[3]);
}

function applyButtonStyles(btn) {
  btn.style.zIndex = 9999;
  btn.style.padding = "10px 20px";
  btn.style.backgroundColor = COLORS.primary;
  btn.style.color = COLORS.white;
  btn.style.border = "none";
  btn.style.borderRadius = "5px";
  btn.style.cursor = "pointer";
  btn.style.fontWeight = "bold";
  btn.style.fontSize = "14px";
  btn.style.boxShadow = "0px 2px 5px rgba(0,0,0,0.3)";
}

function createPodButton(podName, container) {
  const button = document.createElement("button");
  button.classList.add("pod-button");
  button.textContent = podName;
  button.classList.add("animated-button");
  button.setAttribute(SCRIPT_ATTR, "true");
  applyButtonStyles(button);

  button.style.color = COLORS.backgroundDarker;

  let isActive = false;

  button.addEventListener("click", () => {
    isActive = !isActive;
    if (isActive) {
      filterState.activePods.add(podName);
      button.classList.add("animated-button");
      button.style.backgroundColor = COLORS.secondary;
      button.style.border = `2px solid ${COLORS.secondary}`;
      button.style.color = COLORS.backgroundDarker;
    } else {
      filterState.activePods.delete(podName);
      button.classList.add("animated-button");
      button.style.backgroundColor = COLORS.primary;
      button.style.border = "none";
      button.style.color = COLORS.backgroundDarker;
    }
    applyAllFilters();
  });

  button.addEventListener("mouseover", () => {
    if (!isActive) button.style.backgroundColor = COLORS.backgroundDark;
  });

  button.addEventListener("mouseout", () => {
    if (!isActive) button.style.backgroundColor = COLORS.primary;
  });

  container.appendChild(button);
}

function createPodButtonsFromStructure(container) {
  const seenPods = new Set();
  siteList.forEach((site) => {
    const podName = site[filterState.selectedPodType];
    if (podName && !seenPods.has(podName)) {
      seenPods.add(podName);
    }
  });

  const pods = Array.from(seenPods).sort();
  pods.forEach((pod) => createPodButton(pod, container));
}

function createPodSelector(containerElement) {
  if (document.getElementById("label")) return;
  const label = document.createElement("label");
  label.textContent = "Pod Structure:";
  label.style.marginRight = "6px";
  label.style.color = COLORS.white;
  label.style.fontWeight = "500";
  label.setAttribute(SCRIPT_ATTR, "true");

  const select = document.createElement("select");
  select.id = "pod-selector";
  select.style.padding = "4px 8px";
  select.style.border = `1px solid ${COLORS.primary}`;
  select.style.borderRadius = "4px";
  select.style.backgroundColor = COLORS.secondary;
  select.style.color = COLORS.white;
  select.style.fontSize = "0.9rem";
  select.style.cursor = "pointer";
  select.style.outline = "none";
  select.style.boxShadow = `inset 0 1px 2px ${COLORS.black}`;
  select.setAttribute(SCRIPT_ATTR, "true");

  ["3pod", "4pod", "5pod", "6pod", "7pod"].forEach((pod) => {
    const option = document.createElement("option");
    option.value = pod;
    option.textContent = pod.toUpperCase();
    option.setAttribute(SCRIPT_ATTR, "true");
    if (pod === "4pod") option.selected = true;
    select.appendChild(option);
  });

  select.addEventListener("change", (e) => {
    const selected = e.target.value;
    filterState.selectedPodType = selected;
    filterState.activePods.clear();

    containerElement
      .querySelectorAll(".pod-button")
      .forEach((btn) => btn.remove());

    createPodButtonsFromStructure(containerElement);

    applyAllFilters();
  });

  containerElement.appendChild(label);
  containerElement.appendChild(select);
}

function createTSButton(container) {
  const button = document.createElement("button");
  button.textContent = "TS";
  button.classList.add("animated-button");
  button.classList.add("ts-button");
  button.setAttribute(SCRIPT_ATTR, "true");

  applyButtonStyles(button);

  button.style.position = "static";
  button.style.color = COLORS.backgroundDarker;

  button.addEventListener("click", () => {
    filterState.tsOnly = !filterState.tsOnly;
    button.style.backgroundColor = filterState.tsOnly
      ? COLORS.secondary
      : COLORS.primary;
    button.style.border = filterState.tsOnly
      ? `2px solid ${COLORS.secondary}`
      : "none";
    applyAllFilters();
  });

  button.addEventListener("mouseover", () => {
    if (!filterState.tsOnly)
      button.style.backgroundColor = COLORS.backgroundDark;
  });

  button.addEventListener("mouseout", () => {
    if (!filterState.tsOnly) button.style.backgroundColor = COLORS.primary;
  });

  container.appendChild(button);
}

function createIdleButton(container) {
  const button = document.createElement("button");
  button.textContent = "IDLE";
  button.classList.add("idle-button", "animated-button");
  button.setAttribute(SCRIPT_ATTR, "true");
  applyButtonStyles(button);

  let isActive = false;

  filterState.robotStatus = filterState.robotStatus || {};
  filterState.robotStatus.OVERRIDE = false;

  button.style.backgroundColor = COLORS.primary;
  button.style.color = COLORS.backgroundDarker;
  button.style.border = "none";

  button.addEventListener("click", () => {
    isActive = !isActive;

    filterState.robotStatus.OVERRIDE = isActive;

    button.style.backgroundColor = isActive ? COLORS.secondary : COLORS.primary;
    button.style.border = isActive ? `2px solid ${COLORS.secondary}` : "none";

    applyAllFilters();
  });

  button.addEventListener("mouseover", () => {
    if (!isActive) button.style.backgroundColor = COLORS.backgroundDark;
  });

  button.addEventListener("mouseout", () => {
    if (!isActive) button.style.backgroundColor = COLORS.primary;
  });

  container.appendChild(button);
}

function createControlBarUI() {
  const SCRIPT_UI = "insertedui";
  if (document.querySelector(`[${SCRIPT_UI}]`)) return;

  const logoutBtn = Array.from(document.querySelectorAll("button"))
    .find(b => b.textContent.trim().toLowerCase() === "log out");

  const logoutCol = logoutBtn?.closest(".col-2, .col");
  if (logoutCol) logoutCol.remove();

  const headerRow = logoutBtn?.closest(".row.w-100")
    || document.querySelector(".row.w-100");

  if (!headerRow) return;

  const controlBar = document.createElement("div");
  controlBar.id = "control-bar";
  controlBar.setAttribute(SCRIPT_UI, "true");
  controlBar.setAttribute(SCRIPT_ATTR, "true");

  Object.assign(controlBar.style, {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "6px 12px",
    backgroundColor: COLORS.backgroundDarker,
    border: `1px solid ${COLORS.secondary}`,
    borderRadius: "6px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.4)",
    fontFamily: "inherit",
    fontSize: "0.9rem",
    flexWrap: "wrap",
    marginLeft: "auto",
    zIndex: "1000",
  });

  createPodSelector(controlBar);
  createTSButton(controlBar);
  createPodButtonsFromStructure(controlBar);
  createIdleButton(controlBar);

  headerRow.appendChild(controlBar);
}


function showNotification(message) {
  let container = document.getElementById("notification-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "notification-container";
    container.style.position = "fixed";
    container.style.top = "100px";
    container.style.left = "50%";
    container.style.transform = "translateX(-50%)";
    container.style.zIndex = "9999";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    container.style.gap = "10px";
    container.setAttribute(SCRIPT_ATTR, "true");
    document.body.appendChild(container);
  }

  const notification = document.createElement("div");
  notification.innerText = message;
  notification.setAttribute(SCRIPT_ATTR, "true");

  Object.assign(notification.style, {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    color: COLORS.white,
    padding: "10px 20px",
    borderRadius: "5px",
    minWidth: "200px",
    textAlign: "center",
    pointerEvents: "auto",
  });

  container.appendChild(notification);
}

function injectAnimations() {
  if (document.getElementById("custom-animations")) return;
  const style = document.createElement("style");
  style.id = "custom-animations";
  style.textContent = `
    :root {
      --color-primary: #2a2d36;
      --color-secondary: #569cd6;
      --color-bg-dark: #1b1c1f;
      --color-success: #4caf50;
      --color-failure: #f44336;
    }

    .animated-button {
      transition:
        background-color 0.25s ease,
        transform 0.15s ease,
        box-shadow 0.3s ease;
    }

    .animated-button:hover {
      background-color: var(--color-bg-dark);
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.4);
    }

    .animated-button:active {
      transform: scale(0.97);
      box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    }

    .animated-button.active {
      background-color: var(--color-secondary) !important;
      box-shadow: 0 0 10px var(--color-secondary);
    }

    .fade-in {
      animation: fadeIn 0.4s ease forwards;
    }

    .slide-up {
      animation: slideUp 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes slideUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .modal-overlay {
      animation: fadeIn 0.3s ease forwards;
    }
    .modal-content {
      animation: slideUp 0.3s ease forwards;
    }
  `;
  document.head.appendChild(style);
}

function applyAllFilters(rowModels, store) {
  if (!SCRIPT_ENABLED) return;

  const { robots, derived, timers } = store;
  const { elevator, busy, estop } = derived;

  const podToSites = siteList.reduce((acc, site) => {
    const pod = site[filterState.selectedPodType];
    if (!acc[pod]) acc[pod] = new Set();
    acc[pod].add(site.name);
    return acc;
  }, {});

  rowModels.forEach((rowModel) => {
    const {
      row,
      robotId,
      siteName,
      statusCell,
      taskTimeCell,
      phaseCell,
      phaseTimeCell,
    } = rowModel;

    if (!row || !robotId) {
      row.style.display = "none";
      return;
    }

    const robot = robots.get(robotId);
    if (!robot) {
      row.style.display = "none";
      return;
    }


    let matchesPod = filterState.activePods.size === 0;

    if (!matchesPod) {
      for (const pod of filterState.activePods) {
        if (podToSites[pod]?.has(siteName)) {
          matchesPod = true;
          break;
        }
      }
    }


    let matchesTS = true;

    if (filterState.tsOnly) {
      const aux = (robot.auxSoc ?? 1) * 100;
      const fetch = (robot.fetchSoc ?? 1) * 100;

      const lowAux = aux < 40;
      const lowFetch = fetch < 70;

      const failed = row.querySelector('div[title*="FAILED"]') !== null;
      const offline = row.querySelector('div[title*="OFFLINE"]') !== null;

      const longSameAction = (() => {
        const timer = timers.get(robotId);
        if (!timer) return false;
        return Date.now() - timer.timestamp > 900000;
      })();

      const elevatorIssue = elevator.has(robotId);
      const estopIssue = estop.has(robotId);

      matchesTS =
        lowAux ||
        lowFetch ||
        failed ||
        offline ||
        longSameAction ||
        elevatorIssue ||
        estopIssue;
    }

    let matchesIdle = true;
    let matchesOffline = true;
    let matchesDash = true;

    if (filterState.robotStatus?.IDLE === false) {
      matchesIdle = robot.taskStatus !== "IDLE";
    }

    if (robot.taskStatus === "OFFLINE") {
      matchesOffline = false;
    }

    if (phaseCell && phaseCell.textContent.trim() === "-") {
      matchesDash = false;
    }

    if (filterState.robotStatus?.OVERRIDE) {
      row.style.display = matchesPod && matchesTS ? "table-row" : "none";
      return;
    }

    row.style.display =
      matchesPod && matchesTS && matchesIdle && matchesOffline && matchesDash
        ? "table-row"
        : "none";
  });
}

function closePodModal() {
  const existing = document.getElementById(POD_MODAL_ID);
  if (existing) existing.remove();
}

function createPodSelectionModal() {
  if (document.getElementById(POD_MODAL_ID)) return;

  const overlay = document.createElement("div");
  overlay.id = POD_MODAL_ID;
  overlay.setAttribute(SCRIPT_ATTR, "true");

  const modal = document.createElement("div");
  const modalContent = document.createElement("div");
  const closeButton = document.createElement("button");

  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  overlay.style.zIndex = "999";
  overlay.style.display = "flex";
  overlay.style.alignItems = "center";
  overlay.style.justifyContent = "center";

  modal.style.backgroundColor = COLORS.backgroundDarker;
  modal.style.padding = "20px";
  modal.style.borderRadius = "10px";
  modal.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
  modal.style.width = "300px";
  modal.style.textAlign = "center";

  const infoText = document.createElement("p");
  infoText.textContent = `Open all MBot sites for selected ${filterState.selectedPodType.toUpperCase()}:`;
  infoText.style.color = COLORS.white;
  infoText.style.marginBottom = "15px";
  infoText.style.fontFamily = "Arial, sans-serif";
  infoText.style.fontSize = "18px";
  infoText.style.fontWeight = "500";
  infoText.style.textShadow = "1px 1px 2px rgba(0, 0, 0, 0.5)";
  infoText.style.lineHeight = "1.5";
  modalContent.appendChild(infoText);

  const siteMappings = siteList.reduce((acc, site) => {
    const podName = site[filterState.selectedPodType];
    if (!acc[podName]) acc[podName] = [];
    acc[podName].push(site);
    return acc;
  }, {});

  Object.keys(siteMappings)
    .sort()
    .forEach((pod) => {
      const button = document.createElement("button");
      button.textContent = pod;
      button.style.backgroundColor = COLORS.primary;
      button.style.color = COLORS.white;
      button.style.border = "none";
      button.style.borderRadius = "5px";
      button.style.margin = "10px";
      button.style.cursor = "pointer";
      button.style.padding = "10px 15px";
      button.style.width = "80%";
      button.style.fontSize = "16px";
      button.style.fontWeight = "bold";
      button.setAttribute(SCRIPT_ATTR, "true");

      button.addEventListener("click", () => {
        openMBOTForPod(pod, siteMappings[pod]);
        closePodModal();
      });

      modalContent.appendChild(button);
    });

  closeButton.textContent = "Close";
  closeButton.style.backgroundColor = COLORS.black;
  closeButton.style.color = COLORS.white;
  closeButton.style.border = "none";
  closeButton.style.borderRadius = "5px";
  closeButton.style.cursor = "pointer";
  closeButton.style.padding = "10px 15px";
  closeButton.style.marginTop = "15px";

  closeButton.addEventListener("click", closePodModal);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closePodModal();
  });

  const escHandler = (e) => {
    if (e.key === "Escape") {
      closePodModal();
      window.removeEventListener("keydown", escHandler);
    }
  };
  window.addEventListener("keydown", escHandler);

  modalContent.appendChild(closeButton);
  modal.appendChild(modalContent);
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
}

function openMBOTForPod(podName, sitesForPod) {
  const baseMbotUrl = "https://sitexx.diligentrobots.io/app/mbot";

  if (!Array.isArray(sitesForPod)) return;

  sitesForPod.forEach((site) => {
    if (!site.number) {
      console.error(`Site number not found for site: ${site.name}`);
      return;
    }

    window.open(
      baseMbotUrl.replace("xx", site.number),
      "_blank",
      "noopener,noreferrer,width=800,height=600"
    );
  });
}

function insertSidebarLinks() {
  if (document.querySelector(`[${SIDEBAR_CONTAINER_ATTR}]`)) return;

  const activityLink = Array.from(document.querySelectorAll('a[href]'))
    .find(a => a.getAttribute("href") === "/static/robodash/activity/");

  if (!activityLink) {
    log("Sidebar activity link not found");
    return;
  }

  function createButton(text, url) {
    const button = document.createElement("button");
    button.textContent = text;

    Object.assign(button.style, {
      width: "78px",
      height: "80px",
      fontSize: "14px",
      fontWeight: "bold",
      backgroundColor: COLORS.backgroundDarker,
      color: COLORS.white,
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    });

    button.setAttribute(SCRIPT_ATTR, "true");

    if (text === "All Mbot for Pod:") {
      button.addEventListener("click", () => {
        closePodModal();
        createPodSelectionModal();
      });
    } else if (url) {
      button.addEventListener("click", () => {
        const features =
          text === "Incident Form" || text === "Call Request"
            ? "noopener,noreferrer,width=800,height=600"
            : "noopener,noreferrer";

        window.open(url, "_blank", features);
      });
    }

    return button;
  }

  const container = document.createElement("div");
  container.setAttribute(SIDEBAR_CONTAINER_ATTR, "true");
  container.setAttribute(SCRIPT_ATTR, "true");

  Object.assign(container.style, {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginTop: "12px",
  });

  buttonConfig.forEach(({ label, url }) => {
    container.appendChild(createButton(label, url));
  });

  activityLink.parentElement.appendChild(container);
}
