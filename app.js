const STORAGE_KEY = "site-materials-prototype-v1";

const roles = {
  admin: {
    title: "Administrator Dashboard",
    heroTitle: "Approvals, expenses, and controls",
    heroText: "Approve purchase orders, simulate payments, inspect reports, and monitor the project budget.",
    nav: [
      ["dashboard", "D", "Dashboard"],
      ["approvals", "A", "Approvals"],
      ["projects", "P", "Projects"],
      ["expenses", "E", "Expenses"],
      ["reports", "R", "Reports"],
      ["suppliers", "S", "Suppliers"],
      ["audit", "L", "Audit Trail"]
    ]
  },
  site: {
    title: "Site Manager Dashboard",
    heroTitle: "Stock movement and BOQ progress",
    heroText: "Request materials, confirm deliveries, issue stock for site work, and record damage or loss.",
    nav: [
      ["dashboard", "D", "Dashboard"],
      ["inventory", "I", "Inventory"],
      ["boq", "B", "BOQ Schedule"],
      ["use", "U", "Use Material"],
      ["receive", "G", "Receive Delivery"],
      ["damage", "X", "Damage/Loss"],
      ["reports", "R", "Reports"],
      ["audit", "L", "Audit Trail"]
    ]
  },
  procurement: {
    title: "Procurement Officer Dashboard",
    heroTitle: "Needed items to purchase orders",
    heroText: "Review site requests, compare supplier options, create POs, and track procurement status.",
    nav: [
      ["dashboard", "D", "Dashboard"],
      ["needed", "N", "Needed Items"],
      ["create-po", "O", "Create PO"],
      ["suppliers", "S", "Suppliers"],
      ["history", "H", "Purchase History"],
      ["audit", "L", "Audit Trail"]
    ]
  }
};

const starterData = {
  activeRole: "admin",
  activeView: "dashboard",
  project: {
    id: "project-1",
    projectName: "Lusaka Clinic Extension",
    clientName: "Manda Health Trust",
    location: "Lusaka, Zambia",
    startDate: "2026-06-10",
    expectedEndDate: "2027-02-20",
    totalBudget: 1450000,
    status: "ACTIVE"
  },
  boq: [
    {
      id: "boq-1",
      code: "FW-001",
      description: "Foundation Works",
      category: "Substructure",
      plannedQuantity: 1,
      unit: "lot",
      estimatedTotalCost: 238000,
      status: "ACTIVE"
    },
    {
      id: "boq-2",
      code: "MW-004",
      description: "Masonry Walls",
      category: "Superstructure",
      plannedQuantity: 1,
      unit: "lot",
      estimatedTotalCost: 312000,
      status: "ACTIVE"
    }
  ],
  requirements: [
    {
      id: "mat-1",
      boqId: "boq-1",
      materialName: "Cement",
      materialType: "Consumable",
      requiredQuantity: 500,
      unit: "bags",
      estimatedUnitCost: 120,
      quantityProcured: 160,
      quantityReceived: 120,
      quantityUsed: 45,
      status: "IN_USE"
    },
    {
      id: "mat-2",
      boqId: "boq-1",
      materialName: "Rebar Y12",
      materialType: "Consumable",
      requiredQuantity: 240,
      unit: "lengths",
      estimatedUnitCost: 88,
      quantityProcured: 80,
      quantityReceived: 80,
      quantityUsed: 20,
      status: "PARTIALLY_RECEIVED"
    },
    {
      id: "mat-3",
      boqId: "boq-2",
      materialName: "Concrete Blocks",
      materialType: "Consumable",
      requiredQuantity: 4200,
      unit: "blocks",
      estimatedUnitCost: 9,
      quantityProcured: 0,
      quantityReceived: 0,
      quantityUsed: 0,
      status: "NEEDED"
    },
    {
      id: "mat-4",
      boqId: "boq-2",
      materialName: "Wheelbarrow",
      materialType: "Reusable Tool",
      requiredQuantity: 8,
      unit: "units",
      estimatedUnitCost: 650,
      quantityProcured: 8,
      quantityReceived: 8,
      quantityUsed: 0,
      status: "RECEIVED"
    }
  ],
  inventory: [
    {
      id: "inv-1",
      requirementId: "mat-1",
      itemName: "Cement",
      itemType: "Consumable",
      unit: "bags",
      quantityRequired: 500,
      quantityInStock: 73,
      quantityUsed: 45,
      quantityDamaged: 2,
      quantityLost: 0,
      minimumStockLevel: 90,
      status: "LOW_STOCK"
    },
    {
      id: "inv-2",
      requirementId: "mat-2",
      itemName: "Rebar Y12",
      itemType: "Consumable",
      unit: "lengths",
      quantityRequired: 240,
      quantityInStock: 58,
      quantityUsed: 20,
      quantityDamaged: 2,
      quantityLost: 0,
      minimumStockLevel: 30,
      status: "AVAILABLE"
    },
    {
      id: "inv-3",
      requirementId: "mat-4",
      itemName: "Wheelbarrow",
      itemType: "Reusable Tool",
      unit: "units",
      quantityRequired: 8,
      quantityInStock: 7,
      quantityUsed: 0,
      quantityDamaged: 1,
      quantityLost: 0,
      minimumStockLevel: 2,
      status: "AVAILABLE"
    }
  ],
  requests: [
    {
      id: "req-1",
      requirementId: "mat-3",
      requestedQuantity: 2200,
      reason: "Masonry work starts after foundation curing.",
      requiredDate: "2026-07-04",
      requestedBy: "Site Manager",
      status: "NEEDED"
    }
  ],
  suppliers: [
    {
      id: "sup-1",
      name: "BuildRight Supplies",
      contact: "Grace Phiri",
      phone: "+260 977 410 201",
      email: "sales@buildright.example",
      location: "Lusaka",
      rating: 4.8,
      deliveryDays: 2,
      status: "ACTIVE"
    },
    {
      id: "sup-2",
      name: "Copperbelt Hardware",
      contact: "Moses Banda",
      phone: "+260 966 221 890",
      email: "orders@copperbelt.example",
      location: "Kitwe",
      rating: 4.3,
      deliveryDays: 4,
      status: "ACTIVE"
    },
    {
      id: "sup-3",
      name: "Metro Civil Traders",
      contact: "Nelly Chola",
      phone: "+260 955 881 170",
      email: "hello@metrocivil.example",
      location: "Lusaka",
      rating: 4.6,
      deliveryDays: 3,
      status: "ACTIVE"
    }
  ],
  supplierItems: [
    { supplierId: "sup-1", itemName: "Cement", itemType: "Consumable", unit: "bags", currentPrice: 118, qualityRating: 4.7, deliveryTimeDays: 2, guarantee: "48 hour replacement" },
    { supplierId: "sup-2", itemName: "Cement", itemType: "Consumable", unit: "bags", currentPrice: 114, qualityRating: 4.2, deliveryTimeDays: 4, guarantee: "7 day defects only" },
    { supplierId: "sup-1", itemName: "Concrete Blocks", itemType: "Consumable", unit: "blocks", currentPrice: 8.8, qualityRating: 4.5, deliveryTimeDays: 2, guarantee: "Breakage over 3 percent credited" },
    { supplierId: "sup-3", itemName: "Concrete Blocks", itemType: "Consumable", unit: "blocks", currentPrice: 8.4, qualityRating: 4.4, deliveryTimeDays: 3, guarantee: "Quantity variance credited" },
    { supplierId: "sup-2", itemName: "Rebar Y12", itemType: "Consumable", unit: "lengths", currentPrice: 86, qualityRating: 4.4, deliveryTimeDays: 4, guarantee: "Mill certificate supplied" }
  ],
  purchaseOrders: [
    {
      id: "po-1",
      number: "PO-0001",
      supplierId: "sup-1",
      createdBy: "Procurement Officer",
      status: "SUBMITTED_FOR_APPROVAL",
      submittedAt: "2026-06-21",
      approvedBy: "",
      approvedAt: "",
      rejectionReason: "",
      items: [{ requirementId: "mat-1", itemName: "Cement", quantity: 160, unit: "bags", unitPrice: 118 }]
    },
    {
      id: "po-2",
      number: "PO-0002",
      supplierId: "sup-2",
      createdBy: "Procurement Officer",
      status: "RECEIVED",
      submittedAt: "2026-06-13",
      approvedBy: "Administrator",
      approvedAt: "2026-06-14",
      rejectionReason: "",
      items: [{ requirementId: "mat-2", itemName: "Rebar Y12", quantity: 80, unit: "lengths", unitPrice: 86 }]
    }
  ],
  payments: [],
  receipts: [],
  expenses: [
    {
      id: "exp-1",
      poId: "po-2",
      supplierId: "sup-2",
      category: "MATERIALS",
      description: "Rebar Y12 order PO-0002",
      amount: 6880,
      paymentMethod: "MOBILE_MONEY",
      transactionReference: "MM-204811",
      createdAt: "2026-06-14"
    }
  ],
  usage: [
    {
      id: "use-1",
      inventoryId: "inv-1",
      boqId: "boq-1",
      quantityUsed: 45,
      unit: "bags",
      usedBy: "Site Manager",
      note: "Foundation blinding and column bases.",
      date: "2026-06-19"
    }
  ],
  adjustments: [
    {
      id: "adj-1",
      inventoryId: "inv-3",
      type: "DAMAGED",
      quantity: 1,
      reason: "Bent frame after heavy loading.",
      recordedBy: "Site Manager",
      createdAt: "2026-06-18"
    }
  ],
  audit: [
    { id: "log-1", user: "Administrator", action: "Created project Lusaka Clinic Extension.", module: "Projects", createdAt: "2026-06-02 09:00" },
    { id: "log-2", user: "Procurement Officer", action: "Submitted PO-0001 for approval.", module: "Procurement", createdAt: "2026-06-21 11:14" },
    { id: "log-3", user: "Site Manager", action: "Used 45 bags of Cement.", module: "Material Usage", createdAt: "2026-06-19 15:25" }
  ]
};

let state = loadState();

const el = {
  roleSelect: document.querySelector("#roleSelect"),
  roleNav: document.querySelector("#roleNav"),
  resetBtn: document.querySelector("#resetBtn"),
  pageTitle: document.querySelector("#pageTitle"),
  heroTitle: document.querySelector("#heroTitle"),
  heroText: document.querySelector("#heroText"),
  projectName: document.querySelector("#projectName"),
  alerts: document.querySelector("#alerts"),
  cards: document.querySelector("#cards"),
  view: document.querySelector("#view")
};

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : structuredClone(starterData);
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function money(value) {
  return `K${Number(value || 0).toLocaleString("en-US", { maximumFractionDigits: 2 })}`;
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function nowStamp() {
  const date = new Date();
  return `${date.toISOString().slice(0, 10)} ${date.toTimeString().slice(0, 5)}`;
}

function uid(prefix) {
  return `${prefix}-${Math.random().toString(16).slice(2, 8)}`;
}

function logAction(user, module, action) {
  state.audit.unshift({ id: uid("log"), user, module, action, createdAt: nowStamp() });
}

function supplierName(id) {
  return state.suppliers.find((supplier) => supplier.id === id)?.name || "Unknown supplier";
}

function requirement(id) {
  return state.requirements.find((item) => item.id === id);
}

function boqName(id) {
  return state.boq.find((item) => item.id === id)?.description || "Unassigned";
}

function poTotal(po) {
  return po.items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
}

function inventoryForRequirement(requirementId) {
  return state.inventory.find((item) => item.requirementId === requirementId);
}

function completion(req) {
  return Math.min(100, Math.round((req.quantityUsed / req.requiredQuantity) * 100));
}

function setStatusFromStock(item) {
  item.status = item.quantityInStock <= item.minimumStockLevel ? "LOW_STOCK" : "AVAILABLE";
}

function render() {
  const role = roles[state.activeRole];
  if (!role.nav.some(([view]) => view === state.activeView)) {
    state.activeView = "dashboard";
  }

  el.roleSelect.value = state.activeRole;
  el.pageTitle.textContent = role.title;
  el.heroTitle.textContent = role.heroTitle;
  el.heroText.textContent = role.heroText;
  el.projectName.textContent = state.project.projectName;
  renderNav(role);
  renderAlerts();
  renderCards();
  renderView();
  saveState();
}

function renderNav(role) {
  el.roleNav.innerHTML = role.nav
    .map(([view, icon, label]) => `
      <button type="button" class="${state.activeView === view ? "active" : ""}" data-view="${view}">
        <span class="nav-icon" aria-hidden="true">${icon}</span>
        ${label}
      </button>
    `)
    .join("");
}

function renderAlerts() {
  const alerts = [];
  const lowStock = state.inventory.filter((item) => item.quantityInStock <= item.minimumStockLevel);
  const pending = state.purchaseOrders.filter((po) => po.status === "SUBMITTED_FOR_APPROVAL");
  const deliveries = state.purchaseOrders.filter((po) => po.status === "APPROVED" || po.status === "ORDERED");
  const unOrdered = state.requests.filter((request) => request.status === "NEEDED");

  if (lowStock.length) alerts.push(`${lowStock.length} stock item needs attention: ${lowStock.map((item) => item.itemName).join(", ")}.`);
  if (pending.length) alerts.push(`${pending.length} purchase order is waiting for administrator approval.`);
  if (deliveries.length) alerts.push(`${deliveries.length} approved order is pending delivery confirmation.`);
  if (unOrdered.length) alerts.push(`${unOrdered.length} needed item is still not ordered.`);

  el.alerts.innerHTML = alerts.map((alert) => `<div class="alert"><strong>${alert}</strong><span>In-app alert</span></div>`).join("");
}

function renderCards() {
  const totalExpenses = state.expenses.reduce((sum, item) => sum + item.amount, 0);
  const budgetRemaining = state.project.totalBudget - totalExpenses;
  const pendingPOs = state.purchaseOrders.filter((po) => po.status === "SUBMITTED_FOR_APPROVAL").length;
  const needed = state.requests.filter((request) => request.status === "NEEDED").length;
  const approvedPOs = state.purchaseOrders.filter((po) => ["APPROVED", "ORDERED", "RECEIVED"].includes(po.status)).length;
  const boqAvg = Math.round(state.requirements.reduce((sum, item) => sum + completion(item), 0) / state.requirements.length);

  const map = {
    admin: [
      ["Active Projects", "1"],
      ["Pending Purchase Orders", pendingPOs],
      ["Total Expenses", money(totalExpenses)],
      ["Budget Remaining", money(budgetRemaining)],
      ["Recent Payments", state.payments.length]
    ],
    site: [
      ["Stock Items", state.inventory.length],
      ["Low Stock", state.inventory.filter((item) => item.status === "LOW_STOCK").length],
      ["Needed Items", needed],
      ["Pending Deliveries", state.purchaseOrders.filter((po) => po.status === "APPROVED" || po.status === "ORDERED").length],
      ["BOQ Completion", `${boqAvg}%`]
    ],
    procurement: [
      ["Needed Items", needed],
      ["Draft POs", state.purchaseOrders.filter((po) => po.status === "DRAFT").length],
      ["Submitted POs", pendingPOs],
      ["Approved POs", approvedPOs],
      ["Supplier Options", state.supplierItems.length]
    ]
  };

  el.cards.innerHTML = map[state.activeRole]
    .map(([label, value]) => `<article class="metric-card"><span>${label}</span><strong>${value}</strong></article>`)
    .join("");
}

function renderView() {
  const viewMap = {
    dashboard: renderDashboard,
    approvals: renderApprovals,
    projects: renderProjects,
    expenses: renderExpenses,
    reports: renderReports,
    suppliers: renderSuppliers,
    audit: renderAudit,
    inventory: renderInventory,
    boq: renderBoq,
    use: renderUseMaterial,
    receive: renderReceiveDelivery,
    damage: renderDamageLoss,
    needed: renderNeeded,
    "create-po": renderCreatePO,
    history: renderPurchaseHistory
  };
  el.view.innerHTML = viewMap[state.activeView]();
  applySearchFilter();
}

function statusClass(status) {
  if (["APPROVED", "RECEIVED", "PAID", "AVAILABLE", "ACTIVE", "COMPLETED"].includes(status)) return "good";
  if (["REJECTED", "LOW_STOCK", "DAMAGED", "LOST"].includes(status)) return "bad";
  return "warn";
}

function statusPill(status) {
  return `<span class="status ${statusClass(status)}">${status.replaceAll("_", " ")}</span>`;
}

function emptyState() {
  return document.querySelector("#emptyStateTemplate").innerHTML;
}

function renderDashboard() {
  const shortcuts = roles[state.activeRole].nav
    .filter(([view]) => ["inventory", "needed", "approvals", "reports"].includes(view))
    .slice(0, 3);

  return `
    <section class="panel">
      <div class="panel-header">
        <div>
          <h2>Inventory & Procurement Control</h2>
          <p class="small">Table-first workspace for the current role.</p>
        </div>
        <div class="action-row">
          ${shortcuts.map(([view, , label]) => `<button class="secondary-button" data-view-shortcut="${view}" type="button">${label}</button>`).join("")}
        </div>
      </div>
      ${renderOperationsTable()}
    </section>
    <section class="grid-2">
      <article class="panel">
        <div class="panel-header">
          <div>
            <h2>Workflow Snapshot</h2>
            <p class="small">The prototype data follows the core materials lifecycle.</p>
          </div>
        </div>
        ${renderRequirementsTable(state.requirements)}
      </article>
      <article class="panel">
        <h2>Recent Activity</h2>
        ${renderAuditList(6)}
      </article>
    </section>
  `;
}

function renderOperationsTable() {
  const rows = state.requirements.map((item) => {
    const inventory = inventoryForRequirement(item.id);
    const request = state.requests.find((entry) => entry.requirementId === item.id);
    const order = state.purchaseOrders.find((po) => po.items.some((poItem) => poItem.requirementId === item.id));
    const stock = inventory ? `${inventory.quantityInStock} ${inventory.unit}` : "-";
    const desired = `${item.requiredQuantity} ${item.unit}`;
    const available = inventory ? Math.max(0, inventory.quantityInStock - inventory.minimumStockLevel) : 0;
    return `
      <tr>
        <td><input type="checkbox" aria-label="Select ${item.materialName}" /></td>
        <td><strong>${item.materialName}</strong><div class="table-meta">${item.materialType}</div></td>
        <td>#${item.id.toUpperCase()}</td>
        <td><div class="progress"><span style="width:${completion(item)}%"></span></div></td>
        <td>${stock}</td>
        <td>${available} ${item.unit}</td>
        <td>${desired}</td>
        <td>${inventory?.minimumStockLevel ?? "-"} ${item.unit}</td>
        <td>${money(item.estimatedUnitCost)}</td>
        <td>${request ? statusPill(request.status) : statusPill(item.status)}</td>
        <td>${order?.number || "-"}</td>
        <td class="action-row">
          <button class="icon-button" data-action="mark-needed" data-id="${item.id}" title="Mark needed" type="button"><span>N</span></button>
        </td>
      </tr>
    `;
  }).join("");

  return `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th><input type="checkbox" aria-label="Select all" /></th>
            <th>Name</th>
            <th>ID</th>
            <th>BOQ Level</th>
            <th>On Hand</th>
            <th>Available</th>
            <th>Desired</th>
            <th>Minimum</th>
            <th>Unit Cost</th>
            <th>Status</th>
            <th>PO</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

function renderProjects() {
  return `
    <section class="panel">
      <div class="panel-header">
        <div>
          <h2>${state.project.projectName}</h2>
          <p class="small">${state.project.clientName} - ${state.project.location}</p>
        </div>
        ${statusPill(state.project.status)}
      </div>
      <div class="metric-grid">
        <article class="metric-card"><span>Start Date</span><strong>${state.project.startDate}</strong></article>
        <article class="metric-card"><span>Expected End</span><strong>${state.project.expectedEndDate}</strong></article>
        <article class="metric-card"><span>Total Budget</span><strong>${money(state.project.totalBudget)}</strong></article>
        <article class="metric-card"><span>BOQ Items</span><strong>${state.boq.length}</strong></article>
        <article class="metric-card"><span>Material Needs</span><strong>${state.requirements.length}</strong></article>
      </div>
    </section>
  `;
}

function renderBoq() {
  return `
    <section class="grid-2">
      <article class="panel">
        <div class="panel-header">
          <div>
            <h2>BOQ / Material Schedule</h2>
            <p class="small">Required quantity, procurement, usage, and completion are linked here.</p>
          </div>
        </div>
        ${renderRequirementsTable(state.requirements)}
      </article>
      <article class="panel">
        <h2>Add Material Need</h2>
        <form id="addNeedForm" class="form-grid">
          <label class="field">
            <span class="field-label">BOQ item</span>
            <select class="select" name="boqId">${state.boq.map((item) => `<option value="${item.id}">${item.description}</option>`).join("")}</select>
          </label>
          <label class="field">
            <span class="field-label">Material</span>
            <input class="input" name="materialName" required placeholder="Sand" />
          </label>
          <label class="field">
            <span class="field-label">Type</span>
            <select class="select" name="materialType">
              <option>Consumable</option>
              <option>Reusable Tool</option>
              <option>Equipment / Rental</option>
            </select>
          </label>
          <label class="field">
            <span class="field-label">Required quantity</span>
            <input class="input" name="requiredQuantity" type="number" min="1" value="100" />
          </label>
          <label class="field">
            <span class="field-label">Unit</span>
            <input class="input" name="unit" required placeholder="tons" />
          </label>
          <label class="field">
            <span class="field-label">Estimated unit cost</span>
            <input class="input" name="estimatedUnitCost" type="number" min="0" value="50" />
          </label>
          <button class="primary-button" type="submit">Add requirement</button>
        </form>
      </article>
    </section>
  `;
}

function renderRequirementsTable(items) {
  return `
    <div class="table-wrap">
      <table>
        <thead><tr><th>Material</th><th>BOQ item</th><th>Required</th><th>Received</th><th>Used</th><th>Completion</th><th>Status</th><th></th></tr></thead>
        <tbody>
          ${items.map((item) => `
            <tr>
              <td><strong>${item.materialName}</strong><div class="table-meta">${item.materialType}</div></td>
              <td>${boqName(item.boqId)}</td>
              <td>${item.requiredQuantity} ${item.unit}</td>
              <td>${item.quantityReceived} ${item.unit}</td>
              <td>${item.quantityUsed} ${item.unit}</td>
              <td><div class="progress" title="${completion(item)}%"><span style="width:${completion(item)}%"></span></div><div class="table-meta">${completion(item)}%</div></td>
              <td>${statusPill(item.status)}</td>
              <td><button class="secondary-button" data-action="mark-needed" data-id="${item.id}" type="button">Mark needed</button></td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderInventory() {
  return `
    <section class="panel">
      <div class="panel-header">
        <div>
          <h2>Inventory</h2>
          <p class="small">Current stock, shortage, usage, damage, and loss.</p>
        </div>
      </div>
      ${renderInventoryTable()}
    </section>
  `;
}

function renderInventoryTable() {
  return `
    <div class="table-wrap">
      <table>
        <thead><tr><th>Item</th><th>Required</th><th>In stock</th><th>Used</th><th>Damaged</th><th>Lost</th><th>Shortage</th><th>Status</th></tr></thead>
        <tbody>
          ${state.inventory.map((item) => {
            const shortage = Math.max(0, item.quantityRequired - item.quantityInStock - item.quantityUsed);
            return `
              <tr>
                <td><strong>${item.itemName}</strong><div class="table-meta">${item.itemType}</div></td>
                <td>${item.quantityRequired} ${item.unit}</td>
                <td>${item.quantityInStock} ${item.unit}</td>
                <td>${item.quantityUsed} ${item.unit}</td>
                <td>${item.quantityDamaged} ${item.unit}</td>
                <td>${item.quantityLost} ${item.unit}</td>
                <td>${shortage} ${item.unit}</td>
                <td>${statusPill(item.status)}</td>
              </tr>
            `;
          }).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderUseMaterial() {
  return `
    <section class="grid-2">
      <article class="panel">
        <h2>Use Material</h2>
        <form id="useMaterialForm" class="form-grid">
          <label class="field full">
            <span class="field-label">Inventory item</span>
            <select class="select" name="inventoryId">
              ${state.inventory.map((item) => `<option value="${item.id}">${item.itemName} - ${item.quantityInStock} ${item.unit} in stock</option>`).join("")}
            </select>
          </label>
          <label class="field">
            <span class="field-label">Quantity used</span>
            <input class="input" name="quantityUsed" type="number" min="1" value="1" />
          </label>
          <label class="field">
            <span class="field-label">Usage date</span>
            <input class="input" name="date" type="date" value="${today()}" />
          </label>
          <label class="field full">
            <span class="field-label">Usage note</span>
            <textarea class="textarea" name="note">Issued for today site activity.</textarea>
          </label>
          <button class="primary-button" type="submit">Record usage</button>
        </form>
      </article>
      <article class="panel">
        <h2>Usage History</h2>
        ${renderUsageTable()}
      </article>
    </section>
  `;
}

function renderUsageTable() {
  if (!state.usage.length) return emptyState();
  return `
    <div class="table-wrap">
      <table>
        <thead><tr><th>Date</th><th>Item</th><th>Quantity</th><th>BOQ</th><th>Note</th></tr></thead>
        <tbody>
          ${state.usage.map((item) => {
            const inventory = state.inventory.find((inv) => inv.id === item.inventoryId);
            return `<tr><td>${item.date}</td><td>${inventory?.itemName || "Unknown"}</td><td>${item.quantityUsed} ${item.unit}</td><td>${boqName(item.boqId)}</td><td>${item.note}</td></tr>`;
          }).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderDamageLoss() {
  return `
    <section class="grid-2">
      <article class="panel">
        <h2>Record Damage or Loss</h2>
        <form id="damageForm" class="form-grid">
          <label class="field full">
            <span class="field-label">Inventory item</span>
            <select class="select" name="inventoryId">
              ${state.inventory.map((item) => `<option value="${item.id}">${item.itemName}</option>`).join("")}
            </select>
          </label>
          <label class="field">
            <span class="field-label">Type</span>
            <select class="select" name="type">
              <option>DAMAGED</option>
              <option>LOST</option>
              <option>STOLEN</option>
              <option>WASTED</option>
              <option>FOUND</option>
              <option>CORRECTION</option>
            </select>
          </label>
          <label class="field">
            <span class="field-label">Quantity</span>
            <input class="input" name="quantity" type="number" min="1" value="1" />
          </label>
          <label class="field full">
            <span class="field-label">Reason</span>
            <textarea class="textarea" name="reason">Site adjustment note.</textarea>
          </label>
          <button class="primary-button" type="submit">Record adjustment</button>
        </form>
      </article>
      <article class="panel">
        <h2>Adjustment History</h2>
        ${renderAdjustmentTable()}
      </article>
    </section>
  `;
}

function renderAdjustmentTable() {
  if (!state.adjustments.length) return emptyState();
  return `
    <div class="table-wrap">
      <table>
        <thead><tr><th>Date</th><th>Item</th><th>Type</th><th>Quantity</th><th>Reason</th></tr></thead>
        <tbody>
          ${state.adjustments.map((item) => {
            const inventory = state.inventory.find((inv) => inv.id === item.inventoryId);
            return `<tr><td>${item.createdAt}</td><td>${inventory?.itemName || "Unknown"}</td><td>${statusPill(item.type)}</td><td>${item.quantity}</td><td>${item.reason}</td></tr>`;
          }).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderNeeded() {
  return `
    <section class="panel">
      <div class="panel-header">
        <div>
          <h2>Needed Items Queue</h2>
          <p class="small">Submitted site needs awaiting supplier selection and purchase order creation.</p>
        </div>
      </div>
      ${renderRequestsTable(true)}
    </section>
  `;
}

function renderRequestsTable(showActions) {
  if (!state.requests.length) return emptyState();
  return `
    <div class="table-wrap">
      <table>
        <thead><tr><th>Material</th><th>Quantity</th><th>Reason</th><th>Required date</th><th>Status</th>${showActions ? "<th></th>" : ""}</tr></thead>
        <tbody>
          ${state.requests.map((request) => {
            const req = requirement(request.requirementId);
            return `
              <tr>
                <td><strong>${req?.materialName || "Unknown"}</strong><div class="table-meta">${req?.materialType || ""}</div></td>
                <td>${request.requestedQuantity} ${req?.unit || ""}</td>
                <td>${request.reason}</td>
                <td>${request.requiredDate}</td>
                <td>${statusPill(request.status)}</td>
                ${showActions ? `<td><button class="primary-button" data-action="quick-po" data-id="${request.id}" type="button">Create PO</button></td>` : ""}
              </tr>
            `;
          }).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderCreatePO() {
  const neededRequests = state.requests.filter((request) => request.status === "NEEDED");
  const first = neededRequests[0];
  const req = first ? requirement(first.requirementId) : null;
  const options = req ? supplierOptions(req.materialName) : [];
  return `
    <section class="grid-2">
      <article class="panel">
        <h2>Create Purchase Order</h2>
        ${neededRequests.length ? `
          <form id="poForm" class="form-grid">
            <label class="field full">
              <span class="field-label">Needed item</span>
              <select class="select" name="requestId">
                ${neededRequests.map((request) => {
                  const item = requirement(request.requirementId);
                  return `<option value="${request.id}">${item.materialName} - ${request.requestedQuantity} ${item.unit}</option>`;
                }).join("")}
              </select>
            </label>
            <label class="field full">
              <span class="field-label">Supplier</span>
              <select class="select" name="supplierItemIndex">
                ${options.map((item, index) => `<option value="${index}">${supplierName(item.supplierId)} - ${money(item.currentPrice)} per ${item.unit}, ${item.deliveryTimeDays} days</option>`).join("")}
              </select>
            </label>
            <button class="primary-button" type="submit">Submit PO for approval</button>
          </form>
        ` : emptyState()}
      </article>
      <article class="panel">
        <h2>Supplier Options</h2>
        ${req ? renderSupplierOptions(req.materialName) : emptyState()}
      </article>
    </section>
  `;
}

function supplierOptions(itemName) {
  return state.supplierItems.filter((item) => item.itemName.toLowerCase() === itemName.toLowerCase());
}

function renderSupplierOptions(itemName) {
  const options = supplierOptions(itemName);
  if (!options.length) return emptyState();
  return `
    <div class="table-wrap">
      <table>
        <thead><tr><th>Supplier</th><th>Price</th><th>Delivery</th><th>Quality</th><th>Guarantee</th></tr></thead>
        <tbody>
          ${options.map((item) => `<tr><td>${supplierName(item.supplierId)}</td><td>${money(item.currentPrice)}</td><td>${item.deliveryTimeDays} days</td><td>${item.qualityRating}</td><td>${item.guarantee}</td></tr>`).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderApprovals() {
  const submitted = state.purchaseOrders.filter((po) => po.status === "SUBMITTED_FOR_APPROVAL");
  return `
    <section class="panel">
      <div class="panel-header">
        <div>
          <h2>Approval Queue</h2>
          <p class="small">Approve or reject submitted purchase orders. Approval simulates payment and records project expense.</p>
        </div>
      </div>
      ${renderPurchaseOrdersTable(submitted, true)}
    </section>
  `;
}

function renderPurchaseHistory() {
  return `
    <section class="panel">
      <div class="panel-header">
        <div>
          <h2>Purchase History</h2>
          <p class="small">All purchase orders across the prototype project.</p>
        </div>
      </div>
      ${renderPurchaseOrdersTable(state.purchaseOrders, false)}
    </section>
  `;
}

function renderPurchaseOrdersTable(orders, approvalActions) {
  if (!orders.length) return emptyState();
  return `
    <div class="table-wrap">
      <table>
        <thead><tr><th>PO</th><th>Supplier</th><th>Items</th><th>Total</th><th>Status</th><th>Submitted</th><th></th></tr></thead>
        <tbody>
          ${orders.map((po) => `
            <tr>
              <td><strong>${po.number}</strong></td>
              <td>${supplierName(po.supplierId)}</td>
              <td>${po.items.map((item) => `${item.itemName}: ${item.quantity} ${item.unit}`).join("<br>")}</td>
              <td>${money(poTotal(po))}</td>
              <td>${statusPill(po.status)}</td>
              <td>${po.submittedAt}</td>
              <td class="action-row">
                ${approvalActions ? `
                  <button class="primary-button" data-action="approve-po" data-id="${po.id}" type="button">Approve</button>
                  <button class="danger-button" data-action="reject-po" data-id="${po.id}" type="button">Reject</button>
                ` : ""}
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderReceiveDelivery() {
  const receivable = state.purchaseOrders.filter((po) => po.status === "APPROVED" || po.status === "ORDERED");
  return `
    <section class="panel">
      <div class="panel-header">
        <div>
          <h2>Receive Delivery</h2>
          <p class="small">Inventory increases only after site delivery is confirmed.</p>
        </div>
      </div>
      ${receivable.length ? renderReceivableTable(receivable) : emptyState()}
    </section>
  `;
}

function renderReceivableTable(orders) {
  return `
    <div class="table-wrap">
      <table>
        <thead><tr><th>PO</th><th>Supplier</th><th>Item</th><th>Ordered</th><th>Receive</th><th>Rejected</th><th></th></tr></thead>
        <tbody>
          ${orders.map((po) => po.items.map((item, index) => `
            <tr>
              <td>${po.number}</td>
              <td>${supplierName(po.supplierId)}</td>
              <td>${item.itemName}</td>
              <td>${item.quantity} ${item.unit}</td>
              <td><input class="input" data-receive-qty="${po.id}-${index}" type="number" min="0" value="${item.quantity}" /></td>
              <td><input class="input" data-reject-qty="${po.id}-${index}" type="number" min="0" value="0" /></td>
              <td><button class="primary-button" data-action="receive-item" data-id="${po.id}" data-index="${index}" type="button">Confirm</button></td>
            </tr>
          `).join("")).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderSuppliers() {
  return `
    <section class="grid-2">
      <article class="panel">
        <h2>Suppliers</h2>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Supplier</th><th>Contact</th><th>Location</th><th>Rating</th><th>Delivery</th><th>Status</th></tr></thead>
            <tbody>
              ${state.suppliers.map((supplier) => `<tr><td><strong>${supplier.name}</strong><div class="table-meta">${supplier.email}</div></td><td>${supplier.contact}<div class="table-meta">${supplier.phone}</div></td><td>${supplier.location}</td><td>${supplier.rating}</td><td>${supplier.deliveryDays} days avg</td><td>${statusPill(supplier.status)}</td></tr>`).join("")}
            </tbody>
          </table>
        </div>
      </article>
      <article class="panel">
        <h2>Supplier Item Glossary</h2>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Item</th><th>Supplier</th><th>Price</th><th>Quality</th></tr></thead>
            <tbody>
              ${state.supplierItems.map((item) => `<tr><td>${item.itemName}</td><td>${supplierName(item.supplierId)}</td><td>${money(item.currentPrice)} / ${item.unit}</td><td>${item.qualityRating}</td></tr>`).join("")}
            </tbody>
          </table>
        </div>
      </article>
    </section>
  `;
}

function renderExpenses() {
  const total = state.expenses.reduce((sum, item) => sum + item.amount, 0);
  return `
    <section class="panel">
      <div class="panel-header">
        <div>
          <h2>Project Expenses</h2>
          <p class="small">Budget remaining: ${money(state.project.totalBudget - total)}</p>
        </div>
      </div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Date</th><th>Description</th><th>Supplier</th><th>Category</th><th>Payment</th><th>Amount</th></tr></thead>
          <tbody>
            ${state.expenses.map((expense) => `<tr><td>${expense.createdAt}</td><td>${expense.description}</td><td>${supplierName(expense.supplierId)}</td><td>${expense.category}</td><td>${expense.paymentMethod}<div class="table-meta">${expense.transactionReference}</div></td><td>${money(expense.amount)}</td></tr>`).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderReports() {
  const totalExpenses = state.expenses.reduce((sum, item) => sum + item.amount, 0);
  return `
    <section class="grid-2">
      <article class="panel">
        <h2>Inventory Report</h2>
        ${renderInventoryTable()}
      </article>
      <article class="panel">
        <h2>Expense Report</h2>
        <div class="metric-grid">
          <article class="metric-card"><span>Total Budget</span><strong>${money(state.project.totalBudget)}</strong></article>
          <article class="metric-card"><span>Total Expenses</span><strong>${money(totalExpenses)}</strong></article>
          <article class="metric-card"><span>Remaining</span><strong>${money(state.project.totalBudget - totalExpenses)}</strong></article>
        </div>
        <h2>BOQ Progress Report</h2>
        ${renderRequirementsTable(state.requirements)}
      </article>
    </section>
  `;
}

function renderAudit() {
  return `
    <section class="panel">
      <div class="panel-header">
        <div>
          <h2>Audit Trail</h2>
          <p class="small">Important actions are logged as workflow events happen.</p>
        </div>
      </div>
      ${renderAuditList(50)}
    </section>
  `;
}

function renderAuditList(limit) {
  const logs = state.audit.slice(0, limit);
  if (!logs.length) return emptyState();
  return `<ul class="audit-list">${logs.map((item) => `<li><strong>${item.action}</strong><span class="small">${item.createdAt} - ${item.user} - ${item.module}</span></li>`).join("")}</ul>`;
}

function markNeeded(id) {
  const req = requirement(id);
  if (!req) return;
  const existing = state.requests.find((request) => request.requirementId === id && request.status === "NEEDED");
  if (!existing) {
    state.requests.unshift({
      id: uid("req"),
      requirementId: id,
      requestedQuantity: Math.max(1, req.requiredQuantity - req.quantityProcured),
      reason: "Required for upcoming BOQ activity.",
      requiredDate: today(),
      requestedBy: "Site Manager",
      status: "NEEDED"
    });
  }
  req.status = "NEEDED";
  logAction("Site Manager", "Requests", `Marked ${req.materialName} as needed.`);
}

function createPOFromRequest(requestId, supplierItemIndex = 0) {
  const request = state.requests.find((item) => item.id === requestId);
  if (!request || request.status !== "NEEDED") return;
  const req = requirement(request.requirementId);
  const option = supplierOptions(req.materialName)[supplierItemIndex] || supplierOptions(req.materialName)[0];
  if (!option) return;

  const po = {
    id: uid("po"),
    number: `PO-${String(state.purchaseOrders.length + 1).padStart(4, "0")}`,
    supplierId: option.supplierId,
    createdBy: "Procurement Officer",
    status: "SUBMITTED_FOR_APPROVAL",
    submittedAt: today(),
    approvedBy: "",
    approvedAt: "",
    rejectionReason: "",
    items: [{
      requirementId: req.id,
      itemName: req.materialName,
      quantity: request.requestedQuantity,
      unit: req.unit,
      unitPrice: option.currentPrice
    }]
  };

  state.purchaseOrders.unshift(po);
  request.status = "ORDERED";
  req.status = "PROCUREMENT_PENDING";
  req.quantityProcured += request.requestedQuantity;
  logAction("Procurement Officer", "Procurement", `Created ${po.number} for ${req.materialName}.`);
}

function approvePO(id) {
  const po = state.purchaseOrders.find((item) => item.id === id);
  if (!po) return;
  po.status = "APPROVED";
  po.approvedBy = "Administrator";
  po.approvedAt = today();

  const amount = poTotal(po);
  const payment = {
    id: uid("pay"),
    poId: po.id,
    supplierId: po.supplierId,
    amount,
    paymentMethod: "MOBILE_MONEY",
    transactionReference: `MM-${Math.floor(100000 + Math.random() * 899999)}`,
    status: "PAID",
    paidBy: "Administrator",
    paidAt: today()
  };
  state.payments.unshift(payment);
  state.receipts.unshift({
    id: uid("rec"),
    receiptNumber: `RC-${String(state.receipts.length + 1).padStart(4, "0")}`,
    poId: po.id,
    paymentId: payment.id,
    supplierId: po.supplierId,
    amount,
    createdAt: today()
  });
  state.expenses.unshift({
    id: uid("exp"),
    poId: po.id,
    supplierId: po.supplierId,
    category: "MATERIALS",
    description: `${po.items.map((item) => item.itemName).join(", ")} order ${po.number}`,
    amount,
    paymentMethod: payment.paymentMethod,
    transactionReference: payment.transactionReference,
    createdAt: today()
  });
  logAction("Administrator", "Approvals", `Approved ${po.number} and recorded payment ${payment.transactionReference}.`);
}

function rejectPO(id) {
  const po = state.purchaseOrders.find((item) => item.id === id);
  if (!po) return;
  po.status = "REJECTED";
  po.rejectionReason = "Rejected in prototype review.";
  po.items.forEach((item) => {
    const req = requirement(item.requirementId);
    const request = state.requests.find((entry) => entry.requirementId === item.requirementId);
    if (req) req.quantityProcured = Math.max(0, req.quantityProcured - item.quantity);
    if (request) request.status = "NEEDED";
  });
  logAction("Administrator", "Approvals", `Rejected ${po.number}.`);
}

function receiveItem(poId, index, received, rejected) {
  const po = state.purchaseOrders.find((item) => item.id === poId);
  if (!po) return;
  const poItem = po.items[index];
  const req = requirement(poItem.requirementId);
  if (!req) return;

  req.quantityReceived += received;
  req.status = received >= poItem.quantity && rejected === 0 ? "RECEIVED" : "PARTIALLY_RECEIVED";

  let inventory = inventoryForRequirement(req.id);
  if (!inventory) {
    inventory = {
      id: uid("inv"),
      requirementId: req.id,
      itemName: req.materialName,
      itemType: req.materialType,
      unit: req.unit,
      quantityRequired: req.requiredQuantity,
      quantityInStock: 0,
      quantityUsed: 0,
      quantityDamaged: 0,
      quantityLost: 0,
      minimumStockLevel: Math.max(1, Math.round(req.requiredQuantity * 0.15)),
      status: "AVAILABLE"
    };
    state.inventory.unshift(inventory);
  }
  inventory.quantityInStock += received;
  inventory.quantityDamaged += rejected;
  setStatusFromStock(inventory);

  po.status = received >= poItem.quantity && rejected === 0 ? "RECEIVED" : "PARTIALLY_RECEIVED";
  logAction("Site Manager", "Receiving", `Received ${received} ${req.unit} of ${req.materialName} from ${po.number}.`);
}

function recordUsage(formData) {
  const inventory = state.inventory.find((item) => item.id === formData.get("inventoryId"));
  if (!inventory) return;
  const qty = Number(formData.get("quantityUsed"));
  if (qty <= 0 || qty > inventory.quantityInStock) {
    window.alert("Quantity must be greater than 0 and not more than current stock.");
    return;
  }
  const req = requirement(inventory.requirementId);
  inventory.quantityInStock -= qty;
  inventory.quantityUsed += qty;
  setStatusFromStock(inventory);
  if (req) {
    req.quantityUsed += qty;
    req.status = completion(req) >= 100 ? "COMPLETED" : "IN_USE";
  }
  state.usage.unshift({
    id: uid("use"),
    inventoryId: inventory.id,
    boqId: req?.boqId || "",
    quantityUsed: qty,
    unit: inventory.unit,
    usedBy: "Site Manager",
    note: formData.get("note"),
    date: formData.get("date")
  });
  logAction("Site Manager", "Material Usage", `Used ${qty} ${inventory.unit} of ${inventory.itemName}.`);
}

function recordDamage(formData) {
  const inventory = state.inventory.find((item) => item.id === formData.get("inventoryId"));
  if (!inventory) return;
  const qty = Number(formData.get("quantity"));
  const type = formData.get("type");
  if (qty <= 0) return;
  if (["DAMAGED", "WASTED"].includes(type)) inventory.quantityDamaged += qty;
  if (["LOST", "STOLEN"].includes(type)) inventory.quantityLost += qty;
  if (!["FOUND", "CORRECTION"].includes(type)) inventory.quantityInStock = Math.max(0, inventory.quantityInStock - qty);
  setStatusFromStock(inventory);
  state.adjustments.unshift({
    id: uid("adj"),
    inventoryId: inventory.id,
    type,
    quantity: qty,
    reason: formData.get("reason"),
    recordedBy: "Site Manager",
    createdAt: today()
  });
  logAction("Site Manager", "Adjustments", `Recorded ${type.toLowerCase()} for ${qty} ${inventory.unit} of ${inventory.itemName}.`);
}

function addRequirement(formData) {
  const requiredQuantity = Number(formData.get("requiredQuantity"));
  const estimatedUnitCost = Number(formData.get("estimatedUnitCost"));
  const item = {
    id: uid("mat"),
    boqId: formData.get("boqId"),
    materialName: formData.get("materialName"),
    materialType: formData.get("materialType"),
    requiredQuantity,
    unit: formData.get("unit"),
    estimatedUnitCost,
    quantityProcured: 0,
    quantityReceived: 0,
    quantityUsed: 0,
    status: "IDENTIFIED"
  };
  state.requirements.unshift(item);
  logAction("Site Manager", "BOQ", `Added material requirement ${item.materialName}.`);
}

el.roleSelect.addEventListener("change", (event) => {
  state.activeRole = event.target.value;
  state.activeView = "dashboard";
  render();
});

el.roleNav.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-view]");
  if (!button) return;
  state.activeView = button.dataset.view;
  render();
});

el.resetBtn.addEventListener("click", () => {
  state = structuredClone(starterData);
  saveState();
  render();
});

el.view.addEventListener("click", (event) => {
  const shortcut = event.target.closest("button[data-view-shortcut]");
  if (shortcut) {
    const next = shortcut.dataset.viewShortcut;
    if (roles[state.activeRole].nav.some(([view]) => view === next)) {
      state.activeView = next;
    }
    render();
    return;
  }

  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const action = button.dataset.action;
  const id = button.dataset.id;

  if (action === "mark-needed") markNeeded(id);
  if (action === "quick-po") createPOFromRequest(id);
  if (action === "approve-po") approvePO(id);
  if (action === "reject-po") rejectPO(id);
  if (action === "receive-item") {
    const index = Number(button.dataset.index);
    const received = Number(document.querySelector(`[data-receive-qty="${id}-${index}"]`)?.value || 0);
    const rejected = Number(document.querySelector(`[data-reject-qty="${id}-${index}"]`)?.value || 0);
    receiveItem(id, index, received, rejected);
  }
  render();
});

el.view.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);

  if (form.id === "useMaterialForm") recordUsage(formData);
  if (form.id === "damageForm") recordDamage(formData);
  if (form.id === "addNeedForm") addRequirement(formData);
  if (form.id === "poForm") createPOFromRequest(formData.get("requestId"), Number(formData.get("supplierItemIndex")));
  form.reset();
  render();
});

document.querySelector("#globalSearch").addEventListener("input", applySearchFilter);

function applySearchFilter() {
  const query = document.querySelector("#globalSearch").value.trim().toLowerCase();
  const rows = el.view.querySelectorAll("tbody tr");
  rows.forEach((row) => {
    row.style.display = !query || row.textContent.toLowerCase().includes(query) ? "" : "none";
  });
}

render();
