// ========== MANAJEMEN ISU PUBLIK ==========

// Issue Management Data
let issuesData = [
  {
    id: 1,
    title: "Antrian Panjang RSUD Sleman Viral di TikTok",
    description: "Video viral menunjukkan antrian panjang di RSUD Sleman dengan 50K views dalam 2 jam. Warga mengeluh pelayanan sangat lambat dan tidak terorganisir.",
    severity: "critical",
    status: "open",
    source: "TikTok",
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 jam lalu
    assignedTo: "Dinas Kesehatan",
    timeline: [
      { time: new Date(Date.now() - 2 * 60 * 60 * 1000), text: "Issue terdeteksi di TikTok", type: "detection" },
      { time: new Date(Date.now() - 1.5 * 60 * 60 * 1000), text: "Analisis dampak potensial", type: "analysis" }
    ]
  },
  {
    id: 2,
    title: "Keluhan Sampah Tidak Terangkut di Depok",
    description: "Warga Depok mengeluh sampah tidak terangkut selama 3 hari. Foto-foto beredar di grup WhatsApp dengan banyak keluhan.",
    severity: "high",
    status: "progress",
    source: "WhatsApp",
    createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 jam lalu
    assignedTo: "DLH",
    timeline: [
      { time: new Date(Date.now() - 4 * 60 * 60 * 1000), text: "Issue terdeteksi di WhatsApp", type: "detection" },
      { time: new Date(Date.now() - 3.5 * 60 * 60 * 1000), text: "Eskalasi ke DLH Depok", type: "escalation" },
      { time: new Date(Date.now() - 2 * 60 * 60 * 1000), text: "Tim DLH menuju lokasi", type: "action" }
    ]
  },
  {
    id: 3,
    title: "Jalan Berlubang di Kaliurang",
    description: "Pengemudi melaporkan jalan berlubang parah di Jalan Kaliurang KM 12. Potensi bahaya kecelakaan tinggi.",
    severity: "medium",
    status: "resolved",
    source: "Twitter",
    createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 jam lalu
    assignedTo: "Dinas PU",
    timeline: [
      { time: new Date(Date.now() - 6 * 60 * 60 * 1000), text: "Laporan di Twitter", type: "detection" },
      { time: new Date(Date.now() - 5.5 * 60 * 60 * 1000), text: "Verifikasi lokasi", type: "verification" },
      { time: new Date(Date.now() - 4 * 60 * 60 * 1000), text: "Perbaikan dimulai", type: "action" },
      { time: new Date(Date.now() - 2 * 60 * 60 * 1000), text: "Jalan sudah diperbaiki", type: "resolution" }
    ]
  },
  {
    id: 4,
    title: "Permintaan Informasi Beasiswa",
    description: "Warga menanyakan jadwal pendaftaran beasiswa Pemkab Sleman melalui media sosial.",
    severity: "low",
    status: "closed",
    source: "Instagram",
    createdAt: new Date(Date.now() - 8 * 60 * 60 * 1000), // 8 jam lalu
    assignedTo: "Dinas Pendidikan",
    timeline: [
      { time: new Date(Date.now() - 8 * 60 * 60 * 1000), text: "Pertanyaan di Instagram", type: "detection" },
      { time: new Date(Date.now() - 7.5 * 60 * 60 * 1000), text: "Informasi disampaikan", type: "response" },
      { time: new Date(Date.now() - 7 * 60 * 60 * 1000), text: "Issue closed", type: "closure" }
    ]
  },
  {
    id: 5,
    title: "Kelistrikan Padam di Area Berbah",
    description: "Laporan pemadaman listrik massal di Kecamatan Berbah selama 3 jam. Mempengaruhi 500+ rumah tangga.",
    severity: "high",
    status: "open",
    source: "Facebook",
    createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000), // 1 jam lalu
    assignedTo: "PLN",
    timeline: [
      { time: new Date(Date.now() - 1 * 60 * 60 * 1000), text: "Laporan masuk via Facebook", type: "detection" },
      { time: new Date(Date.now() - 0.5 * 60 * 60 * 1000), text: "Koordinasi dengan PLN", type: "coordination" }
    ]
  }
];

// Filter and sort state
let issueCurrentFilter = 'all';
let issueCurrentSort = 'newest';

// Initialize Issue Management
function initIssueManagement() {
  updateIssueStatistics();
  renderIssueList();
}

// Update Statistics
function updateIssueStatistics() {
  const stats = {
    critical: 0,
    high: 0,
    medium: 0,
    low: 0,
    open: 0,
    progress: 0,
    resolved: 0,
    closed: 0
  };

  issuesData.forEach(issue => {
    stats[issue.severity]++;
    stats[issue.status]++;
  });

  // Update severity counts
  document.getElementById('criticalCount').textContent = stats.critical;
  document.getElementById('highCount').textContent = stats.high;
  document.getElementById('mediumCount').textContent = stats.medium;
  document.getElementById('lowCount').textContent = stats.low;

  // Update status counts
  document.getElementById('totalCount').textContent = issuesData.length;
  document.getElementById('openCount').textContent = stats.open;
  document.getElementById('progressCount').textContent = stats.progress;
  document.getElementById('resolvedCount').textContent = stats.resolved;
  document.getElementById('closedCount').textContent = stats.closed;
}

// Render Issue List
function renderIssueList() {
  // Clear all status sections
  const statusSections = ['open', 'progress', 'resolved', 'closed'];
  statusSections.forEach(status => {
    const container = document.getElementById(`${status}IssuesList`);
    if (container) {
      container.innerHTML = '';
    }
    const countElement = document.getElementById(`${status}SectionCount`);
    if (countElement) {
      countElement.textContent = '0';
    }
  });

  // Group issues by status
  const groupedIssues = {
    open: [],
    progress: [],
    resolved: [],
    closed: []
  };

  issuesData.forEach(issue => {
    if (groupedIssues[issue.status]) {
      groupedIssues[issue.status].push(issue);
    }
  });

  // Sort issues within each group
  statusSections.forEach(status => {
    groupedIssues[status] = sortIssuesArray(groupedIssues[status], issueCurrentSort);
  });

  // Show/hide sections based on current filter
  if (issueCurrentFilter === 'all') {
    // Show all sections
    statusSections.forEach(status => {
      const section = document.getElementById(`${status}Issues`);
      if (section) {
        section.style.display = 'block';
      }
    });
    
    // Render all issues in their respective sections
    statusSections.forEach(status => {
      const container = document.getElementById(`${status}IssuesList`);
      const countElement = document.getElementById(`${status}SectionCount`);
      
      if (container) {
        if (groupedIssues[status].length === 0) {
          container.innerHTML = `
            <div style="text-align: center; padding: 40px; color: #94a3b8;">
              <i class="fa-solid fa-inbox" style="font-size: 2rem; margin-bottom: 12px; opacity: 0.5;"></i>
              <p>Tidak ada isu dengan status ${status}</p>
            </div>
          `;
        } else {
          groupedIssues[status].forEach(issue => {
            const issueCard = createIssueCard(issue);
            container.appendChild(issueCard);
          });
        }
      }
      
      if (countElement) {
        countElement.textContent = groupedIssues[status].length;
      }
    });
  } else {
    // Hide all sections first
    statusSections.forEach(status => {
      const section = document.getElementById(`${status}Issues`);
      if (section) {
        section.style.display = 'none';
      }
    });
    
    // Show only selected section
    const selectedSection = document.getElementById(`${issueCurrentFilter}Issues`);
    if (selectedSection) {
      selectedSection.style.display = 'block';
      
      const container = document.getElementById(`${issueCurrentFilter}IssuesList`);
      if (container) {
        if (groupedIssues[issueCurrentFilter].length === 0) {
          container.innerHTML = `
            <div style="text-align: center; padding: 40px; color: #94a3b8;">
              <i class="fa-solid fa-inbox" style="font-size: 2rem; margin-bottom: 12px; opacity: 0.5;"></i>
              <p>Tidak ada isu dengan status ${issueCurrentFilter}</p>
            </div>
          `;
        } else {
          groupedIssues[issueCurrentFilter].forEach(issue => {
            const issueCard = createIssueCard(issue);
            container.appendChild(issueCard);
          });
        }
      }
      
      const countElement = document.getElementById(`${issueCurrentFilter}SectionCount`);
      if (countElement) {
        countElement.textContent = groupedIssues[issueCurrentFilter].length;
      }
    }
  }
}

// Create Issue Card
function createIssueCard(issue) {
  const card = document.createElement('div');
  card.className = `issue-card severity-${issue.severity}`;
  card.onclick = () => showIssueDetail(issue.id);

  const severityBadge = `<span class="issue-badge issue-severity-badge ${issue.severity}">${issue.severity}</span>`;
  const statusBadge = `<span class="issue-badge issue-status-badge ${issue.status}">${getStatusText(issue.status)}</span>`;

  card.innerHTML = `
    <div class="issue-header">
      <div class="issue-title">${issue.title}</div>
      <div class="issue-badges">
        ${severityBadge}
        ${statusBadge}
      </div>
    </div>
    <div class="issue-description">${issue.description}</div>
    <div class="issue-meta">
      <div class="issue-source">
        <i class="fa-brands ${getSourceIcon(issue.source)}"></i>
        ${issue.source}
      </div>
      <div class="issue-timestamp">
        <i class="fa-solid fa-clock"></i>
        ${formatTime(issue.createdAt)}
      </div>
    </div>
    ${issue.timeline.length > 0 ? `
      <div class="issue-timeline">
        ${issue.timeline.slice(-2).map(item => `
          <div class="timeline-item">
            <div class="timeline-marker ${getTimelineMarkerClass(item.type)}"></div>
            <div class="timeline-content">
              <div class="timeline-text">${item.text}</div>
              <div class="timeline-time">${formatTime(item.time)}</div>
            </div>
          </div>
        `).join('')}
      </div>
    ` : ''}
    <div class="issue-actions">
      <button class="issue-action-btn primary" onclick="event.stopPropagation(); updateIssueStatus(${issue.id}, 'progress')">
        <i class="fa-solid fa-play"></i> Proses
      </button>
      <button class="issue-action-btn success" onclick="event.stopPropagation(); updateIssueStatus(${issue.id}, 'resolved')">
        <i class="fa-solid fa-check"></i> Selesai
      </button>
      <button class="issue-action-btn" onclick="event.stopPropagation(); updateIssueStatus(${issue.id}, 'closed')">
        <i class="fa-solid fa-times"></i> Tutup
      </button>
    </div>
  `;

  return card;
}

// Helper Functions
function getStatusText(status) {
  const statusMap = {
    'open': 'Open',
    'progress': 'On Progress',
    'resolved': 'Resolved',
    'closed': 'Closed'
  };
  return statusMap[status] || status;
}

function getSourceIcon(source) {
  const iconMap = {
    'TikTok': 'fa-tiktok',
    'Twitter': 'fa-twitter',
    'Instagram': 'fa-instagram',
    'Facebook': 'fa-facebook',
    'WhatsApp': 'fa-whatsapp'
  };
  return iconMap[source] || 'fa-globe';
}

function getTimelineMarkerClass(type) {
  const classMap = {
    'detection': 'critical',
    'escalation': 'status-change',
    'action': 'status-change',
    'resolution': 'resolution',
    'closure': 'resolution'
  };
  return classMap[type] || '';
}

function formatTime(date) {
  const now = new Date();
  const diff = now - date;
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor(diff / (1000 * 60));

  if (minutes < 60) {
    return `${minutes} menit lalu`;
  } else if (hours < 24) {
    return `${hours} jam lalu`;
  } else {
    return date.toLocaleDateString('id-ID');
  }
}

// Filter Functions
function filterIssues(status) {
  issueCurrentFilter = status;
  
  // Update tab active state
  document.querySelectorAll('.issue-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.status === status);
  });
  
  renderIssueList();
}

function filterIssuesByStatus(status) {
  if (status === 'all') {
    return issuesData;
  }
  return issuesData.filter(issue => issue.status === status);
}

function searchIssues() {
  const searchTerm = document.getElementById('issueSearch').value.toLowerCase();
  
  if (!searchTerm) {
    renderIssueList();
    return;
  }

  // Filter issues based on current filter
  let filteredIssues = issueCurrentFilter === 'all' 
    ? issuesData 
    : issuesData.filter(issue => issue.status === issueCurrentFilter);

  // Apply search filter
  filteredIssues = filteredIssues.filter(issue => 
    issue.title.toLowerCase().includes(searchTerm) ||
    issue.description.toLowerCase().includes(searchTerm) ||
    issue.assignedTo.toLowerCase().includes(searchTerm)
  );

  // Render filtered issues
  if (issueCurrentFilter === 'all') {
    // Show all sections with filtered issues
    const statusSections = ['open', 'progress', 'resolved', 'closed'];
    const groupedIssues = {
      open: [],
      progress: [],
      resolved: [],
      closed: []
    };

    filteredIssues.forEach(issue => {
      if (groupedIssues[issue.status]) {
        groupedIssues[issue.status].push(issue);
      }
    });

    statusSections.forEach(status => {
      const section = document.getElementById(`${status}Issues`);
      if (section) {
        section.style.display = 'block';
      }
      
      const container = document.getElementById(`${status}IssuesList`);
      const countElement = document.getElementById(`${status}SectionCount`);
      
      if (container) {
        if (groupedIssues[status].length === 0) {
          container.innerHTML = `
            <div style="text-align: center; padding: 40px; color: #94a3b8;">
              <i class="fa-solid fa-search" style="font-size: 2rem; margin-bottom: 12px; opacity: 0.5;"></i>
              <p>Tidak ada isu "${searchTerm}" di status ${status}</p>
            </div>
          `;
        } else {
          groupedIssues[status].forEach(issue => {
            const issueCard = createIssueCard(issue);
            container.appendChild(issueCard);
          });
        }
      }
      
      if (countElement) {
        countElement.textContent = groupedIssues[status].length;
      }
    });
  } else {
    // Show only selected section with filtered issues
    const container = document.getElementById(`${issueCurrentFilter}IssuesList`);
    if (container) {
      if (filteredIssues.length === 0) {
        container.innerHTML = `
          <div style="text-align: center; padding: 40px; color: #94a3b8;">
            <i class="fa-solid fa-search" style="font-size: 2rem; margin-bottom: 12px; opacity: 0.5;"></i>
            <p>Tidak ada isu "${searchTerm}" dengan status ${issueCurrentFilter}</p>
          </div>
        `;
      } else {
        filteredIssues.forEach(issue => {
          const issueCard = createIssueCard(issue);
          container.appendChild(issueCard);
        });
      }
      
      const countElement = document.getElementById(`${issueCurrentFilter}SectionCount`);
      if (countElement) {
        countElement.textContent = filteredIssues.length;
      }
    }
  }
}

// Sort Functions
function sortIssues(sortBy) {
  issueCurrentSort = sortBy;
  renderIssueList();
}

function sortIssuesArray(issues, sortBy) {
  const sorted = [...issues];
  
  switch(sortBy) {
    case 'newest':
      return sorted.sort((a, b) => b.createdAt - a.createdAt);
    case 'oldest':
      return sorted.sort((a, b) => a.createdAt - b.createdAt);
    case 'severity':
      const severityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
      return sorted.sort((a, b) => severityOrder[a.severity] - severityOrder[b.severity]);
    case 'status':
      const statusOrder = { open: 0, progress: 1, resolved: 2, closed: 3 };
      return sorted.sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);
    default:
      return sorted;
  }
}

// Update Issue Status
function updateIssueStatus(issueId, newStatus) {
  const issue = issuesData.find(i => i.id === issueId);
  if (!issue) return;

  const oldStatus = issue.status;
  issue.status = newStatus;

  // Add timeline entry
  const timelineEntry = {
    time: new Date(),
    text: `Status diubah dari ${getStatusText(oldStatus)} ke ${getStatusText(newStatus)}`,
    type: 'status-change'
  };
  issue.timeline.push(timelineEntry);

  // Update statistics and re-render
  updateIssueStatistics();
  renderIssueList();

  // Show notification
  showNotification(`Status isu "${issue.title}" diubah ke ${getStatusText(newStatus)}`, 'success');
}

// Show Issue Detail Modal
function showIssueDetail(issueId) {
  const issue = issuesData.find(i => i.id === issueId);
  if (!issue) return;

  const modal = document.createElement('div');
  modal.className = 'issue-modal';
  modal.onclick = (e) => {
    if (e.target === modal) modal.remove();
  };

  modal.innerHTML = `
    <div class="issue-modal-content">
      <div class="issue-modal-header">
        <h2 class="issue-modal-title">Detail Isu</h2>
        <button class="issue-modal-close" onclick="this.closest('.issue-modal').remove()">
          <i class="fa-solid fa-times"></i>
        </button>
      </div>
      
      <div class="issue-form-group">
        <label class="issue-form-label">Judul Isu</label>
        <input type="text" class="issue-form-input" value="${issue.title}" readonly>
      </div>
      
      <div class="issue-form-group">
        <label class="issue-form-label">Deskripsi</label>
        <textarea class="issue-form-textarea" readonly>${issue.description}</textarea>
      </div>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
        <div class="issue-form-group">
          <label class="issue-form-label">Severity</label>
          <select class="issue-form-select">
            <option value="critical" ${issue.severity === 'critical' ? 'selected' : ''}>Kritis</option>
            <option value="high" ${issue.severity === 'high' ? 'selected' : ''}>Tinggi</option>
            <option value="medium" ${issue.severity === 'medium' ? 'selected' : ''}>Sedang</option>
            <option value="low" ${issue.severity === 'low' ? 'selected' : ''}>Rendah</option>
          </select>
        </div>
        
        <div class="issue-form-group">
          <label class="issue-form-label">Status</label>
          <select class="issue-form-select">
            <option value="open" ${issue.status === 'open' ? 'selected' : ''}>Open</option>
            <option value="progress" ${issue.status === 'progress' ? 'selected' : ''}>On Progress</option>
            <option value="resolved" ${issue.status === 'resolved' ? 'selected' : ''}>Resolved</option>
            <option value="closed" ${issue.status === 'closed' ? 'selected' : ''}>Closed</option>
          </select>
        </div>
      </div>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
        <div class="issue-form-group">
          <label class="issue-form-label">Sumber</label>
          <input type="text" class="issue-form-input" value="${issue.source}" readonly>
        </div>
        
        <div class="issue-form-group">
          <label class="issue-form-label">Ditugaskan ke</label>
          <input type="text" class="issue-form-input" value="${issue.assignedTo}" readonly>
        </div>
      </div>
      
      <div class="issue-form-group">
        <label class="issue-form-label">Timeline Perkembangan</label>
        <div style="max-height: 200px; overflow-y: auto; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px;">
          ${issue.timeline.map(item => `
            <div class="timeline-item">
              <div class="timeline-marker ${getTimelineMarkerClass(item.type)}"></div>
              <div class="timeline-content">
                <div class="timeline-text">${item.text}</div>
                <div class="timeline-time">${formatTime(item.time)}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
      
      <div class="issue-form-actions">
        <button class="btn-generate" onclick="this.closest('.issue-modal').remove()">Tutup</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
}

// Show Add Issue Modal
function showAddIssueModal() {
  const modal = document.createElement('div');
  modal.className = 'issue-modal';
  modal.onclick = (e) => {
    if (e.target === modal) modal.remove();
  };

  modal.innerHTML = `
    <div class="issue-modal-content">
      <div class="issue-modal-header">
        <h2 class="issue-modal-title">Tambah Isu Baru</h2>
        <button class="issue-modal-close" onclick="this.closest('.issue-modal').remove()">
          <i class="fa-solid fa-times"></i>
        </button>
      </div>
      
      <form onsubmit="addNewIssue(event, this)">
        <div class="issue-form-group">
          <label class="issue-form-label">Judul Isu *</label>
          <input type="text" name="title" class="issue-form-input" required placeholder="Masukkan judul isu">
        </div>
        
        <div class="issue-form-group">
          <label class="issue-form-label">Deskripsi *</label>
          <textarea name="description" class="issue-form-textarea" required placeholder="Jelaskan detail isu yang terjadi"></textarea>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          <div class="issue-form-group">
            <label class="issue-form-label">Severity *</label>
            <select name="severity" class="issue-form-select" required>
              <option value="">Pilih severity</option>
              <option value="critical">Kritis</option>
              <option value="high">Tinggi</option>
              <option value="medium">Sedang</option>
              <option value="low">Rendah</option>
            </select>
          </div>
          
          <div class="issue-form-group">
            <label class="issue-form-label">Sumber *</label>
            <select name="source" class="issue-form-select" required>
              <option value="">Pilih sumber</option>
              <option value="TikTok">TikTok</option>
              <option value="Twitter">Twitter</option>
              <option value="Instagram">Instagram</option>
              <option value="Facebook">Facebook</option>
              <option value="WhatsApp">WhatsApp</option>
            </select>
          </div>
        </div>
        
        <div class="issue-form-group">
          <label class="issue-form-label">Ditugaskan ke *</label>
          <select name="assignedTo" class="issue-form-select" required>
            <option value="">Pilih unit</option>
            <option value="Dinas Kesehatan">Dinas Kesehatan</option>
            <option value="DLH">DLH</option>
            <option value="Dinas PU">Dinas PU</option>
            <option value="Dinas Pendidikan">Dinas Pendidikan</option>
            <option value="Satpol PP">Satpol PP</option>
            <option value="PLN">PLN</option>
          </select>
        </div>
        
        <div class="issue-form-actions">
          <button type="button" class="btn-secondary" onclick="this.closest('.issue-modal').remove()">Batal</button>
          <button type="submit" class="btn-generate">Tambah Isu</button>
        </div>
      </form>
    </div>
  `;

  document.body.appendChild(modal);
}

// Add New Issue
function addNewIssue(event, form) {
  event.preventDefault();
  
  const formData = new FormData(form);
  const newIssue = {
    id: Date.now(),
    title: formData.get('title'),
    description: formData.get('description'),
    severity: formData.get('severity'),
    status: 'open',
    source: formData.get('source'),
    createdAt: new Date(),
    assignedTo: formData.get('assignedTo'),
    timeline: [
      {
        time: new Date(),
        text: `Issue baru ditambahkan dari ${formData.get('source')}`,
        type: 'detection'
      }
    ]
  };

  issuesData.unshift(newIssue);
  updateIssueStatistics();
  renderIssueList();
  
  // Close modal
  form.closest('.issue-modal').remove();
  
  // Show notification
  showNotification(`Isu baru "${newIssue.title}" berhasil ditambahkan!`, 'success');
}

// Show notification function
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  const bgColor = type === 'success' ? '#dcfce7' : type === 'warning' ? '#fef3c7' : '#dbeafe';
  const textColor = type === 'success' ? '#166534' : type === 'warning' ? '#92400e' : '#1e40af';
  const icon = type === 'success' ? '✅' : type === 'warning' ? '⚠️' : 'ℹ️';
  
  notification.style.cssText = `
    position: fixed; top: 20px; right: 20px;
    background: ${bgColor}; color: ${textColor};
    padding: 15px 20px; border-radius: 8px;
    border-left: 4px solid ${type === 'success' ? '#16a34a' : type === 'warning' ? '#d97706' : '#2563eb'};
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    z-index: 3000; max-width: 400px;
    font-size: 0.9rem; font-weight: 500;
    animation: slideIn 0.3s ease-out;
  `;
  
  notification.innerHTML = `${icon} ${message}`;
  document.body.appendChild(notification);
  
  // Auto remove after 4 seconds
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease-out';
    setTimeout(() => notification.remove(), 300);
  }, 4000);
}

// Update switchView to initialize issue management
document.addEventListener('DOMContentLoaded', function() {
  const originalSwitchView = window.switchView || function() {};
  window.switchView = function(viewId) {
    originalSwitchView(viewId);
    
    if (viewId === 'issues') {
      setTimeout(() => {
        initIssueManagement();
      }, 100);
    }
  };
});
