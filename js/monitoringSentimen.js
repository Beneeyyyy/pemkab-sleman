const SentimentUI = {
    allData: [
        {
            user: "@warga_sleman",
            time: "9 Feb, 08.30",
            text: "Jalan di Desa Sinduharjo rusak parah, mohon segera diperbaiki @pemkabsleman",
            eng: "245 engagement",
            loc: "Sinduharjo, Ngaglik",
            sentiment: "Negatif",
            tags: ["#SlemanBerbenah", "#JalanRusak"],
            platform: "Tiktok", icon: "fa-tiktok", color: "#000000"
        },
        {
            user: "@info_sleman",
            time: "9 Feb, 10.15",
            text: "Alhamdulillah air bersih sudah mengalir kembali di wilayah kami. Terima kasih PDAM Sleman!",
            eng: "512 engagement",
            loc: "Mlati",
            sentiment: "Positif",
            tags: ["#SlemanHebat", "#AirBersih"],
            platform: "Instagram", icon: "fa-instagram", color: "#E4405F"
        },
        {
            user: "Tribun Jogja",
            time: "8 Feb, 14.30",
            text: "Pemkab Sleman Resmikan Taman Edukasi di Cangkringan",
            eng: "3,240 engagement",
            loc: "Cangkringan",
            sentiment: "Positif",
            tags: ["#BeritaSleman", "#TamanEdukasi"],
            platform: "Portal Berita", icon: "fa-newspaper", color: "#2563EB"
        },
        {
            user: "@sleman_update",
            time: "9 Feb, 11.00",
            text: "Tumpukan sampah di Pasar Godean mulai mengeluarkan bau tidak sedap. @DLHSleman mohon tindak lanjutnya.",
            eng: "892 engagement",
            loc: "Godean",
            sentiment: "Negatif",
            tags: ["#DaruratSampah", "#Sleman"],
            platform: "Facebook", icon: "fa-facebook", color: "#1877F2"
        },
        {
            user: "@traveler_jogja",
            time: "9 Feb, 12.45",
            text: "Wisata Tebing Breksi hari ini cerah banget! Fasilitasnya makin lengkap dan bersih. Keren Sleman!",
            eng: "1,2k engagement",
            loc: "Prambanan",
            sentiment: "Positif",
            tags: ["#TebingBreksi", "#WonderfulSleman"],
            platform: "Instagram", icon: "fa-instagram", color: "#E4405F"
        },
        {
            user: "Sleman TV",
            time: "9 Feb, 13.20",
            text: "Liputan Khusus: Pembangunan Flyover Gejayan Tahap Akhir.",
            eng: "5,4k engagement",
            loc: "Depok",
            sentiment: "Netral",
            tags: ["#Infrastruktur", "#SlemanTV"],
            platform: "Youtube", icon: "fa-youtube", color: "#FF0000"
        },
        {
            user: "@mahasiswa_jogja",
            time: "8 Feb, 22.15",
            text: "Lampu jalan di area Selokan Mataram banyak yang mati, bahaya buat yang pulang malam.",
            eng: "156 engagement",
            loc: "Caturtunggal",
            sentiment: "Negatif",
            tags: ["#LampuMati", "#SlemanRawan"],
            platform: "Tiktok", icon: "fa-tiktok", color: "#000000"
        },
        {
            user: "@kuliner_sleman",
            time: "9 Feb, 09.00",
            text: "Rekomendasi sarapan enak di daerah Tempel. Harganya murah pelayanan ramah!",
            eng: "2,1k engagement",
            loc: "Tempel",
            sentiment: "Positif",
            tags: ["#KulinerSleman", "#Foodie"],
            platform: "Instagram", icon: "fa-instagram", color: "#E4405F"
        },
        {
            user: "Harian Jogja",
            time: "9 Feb, 07.45",
            text: "BPBD Sleman Himbau Warga Waspada Cuaca Ekstrem Pekan Ini.",
            eng: "1,1k engagement",
            loc: "Sleman",
            sentiment: "Netral",
            tags: ["#CuacaEkstrem", "#InfoSleman"],
            platform: "Portal Berita", icon: "fa-newspaper", color: "#2563EB"
        },
        {
            user: "@petani_modern",
            time: "8 Feb, 16.00",
            text: "Panen raya padi di Seyegan melimpah, harga gabah stabil. Matur nuwun Gusti.",
            eng: "342 engagement",
            loc: "Seyegan",
            sentiment: "Positif",
            tags: ["#Pertanian", "#SlemanMandiri"],
            platform: "Facebook", icon: "fa-facebook", color: "#1877F2"
        },
        {
            user: "@netizen_kritis",
            time: "9 Feb, 14.10",
            text: "Kenapa perizinan gedung di area resapan air makin mudah ya? Tolong diperhatikan ekologinya.",
            eng: "678 engagement",
            loc: "Pakem",
            sentiment: "Negatif",
            tags: ["#Lingkungan", "#SaveSleman"],
            platform: "Tiktok", icon: "fa-tiktok", color: "#000000"
        },
        {
            user: "@jogja24jam",
            time: "9 Feb, 15.30",
            text: "Lalu lintas pagi ini di perempatan Monjali terpantau padat merayap.",
            eng: "4,5k engagement",
            loc: "Ngaglik",
            sentiment: "Netral",
            tags: ["#LaluLintas", "#InfoCegatan"],
            platform: "Instagram", icon: "fa-instagram", color: "#E4405F"
        },
        {
            user: "@penduduk_asli",
            time: "9 Feb, 08.00",
            text: "Pungutan liar di area parkir Kaliurang masih saja ada. Merusak citra wisata Sleman!",
            eng: "921 engagement",
            loc: "Kaliurang",
            sentiment: "Negatif",
            tags: ["#SlemanDaruratPungli", "#Pariwisata"],
            platform: "Facebook", icon: "fa-facebook", color: "#1877F2"
        },
        {
            user: "Vlog Sleman",
            time: "8 Feb, 19.00",
            text: "Review Pasar Malam Denggung: Jajanan melimpah, wajib mampir!",
            eng: "12k engagement",
            loc: "Tridadi",
            sentiment: "Positif",
            tags: ["#PasarMalam", "#SlemanAsyik"],
            platform: "Youtube", icon: "fa-youtube", color: "#FF0000"
        },
        {
            user: "@pajak_sleman",
            time: "9 Feb, 09.30",
            text: "Bayar PBB sekarang lebih mudah lewat aplikasi Sleman Pintar. Yuk taat pajak!",
            eng: "112 engagement",
            loc: "Sleman",
            sentiment: "Positif",
            tags: ["#PajakSleman", "#SlemanPintar"],
            platform: "Instagram", icon: "fa-instagram", color: "#E4405F"
        },
        {
            user: "Radar Jogja",
            time: "9 Feb, 10.00",
            text: "Pemerintah Kabupaten Sleman Raih Penghargaan Pelayanan Publik Terbaik.",
            eng: "2,3k engagement",
            loc: "Beran",
            sentiment: "Positif",
            tags: ["#PrestasiSleman", "#HumasSleman"],
            platform: "Portal Berita", icon: "fa-newspaper", color: "#2563EB"
        },
        {
            user: "@relawan_hijau",
            time: "9 Feb, 16.45",
            text: "Aksi bersih-bersih sungai di area Kalasan. Mari jaga air kita tetap jernih.",
            eng: "430 engagement",
            loc: "Kalasan",
            sentiment: "Positif",
            tags: ["#GoGreen", "#SlemanSehat"],
            platform: "Tiktok", icon: "fa-tiktok", color: "#000000"
        },
        {
            user: "@supir_truk",
            time: "8 Feb, 05.00",
            text: "Jalan arah Prambanan banyak lubang tertutup genangan air, hati-hati lur.",
            eng: "76 engagement",
            loc: "Prambanan",
            sentiment: "Negatif",
            tags: ["#LaluLintas", "#HatiHati"],
            platform: "Facebook", icon: "fa-facebook", color: "#1877F2"
        },
        {
            user: "@umkm_sleman",
            time: "9 Feb, 11.20",
            text: "Pelatihan digital marketing buat UMKM Sleman gratis! Sangat membantu kami yang baru mulai.",
            eng: "289 engagement",
            loc: "Sleman",
            sentiment: "Positif",
            tags: ["#UMKMBangkit", "#SlemanEkonomi"],
            platform: "Instagram", icon: "fa-instagram", color: "#E4405F"
        },
        {
            user: "Kabar Sleman",
            time: "9 Feb, 17.00",
            text: "Update: Penutupan jalan sementara di area Denggung untuk acara festival budaya.",
            eng: "1,5k engagement",
            loc: "Tridadi",
            sentiment: "Netral",
            tags: ["#BudayaSleman", "#InfoJalan"],
            platform: "Portal Berita", icon: "fa-newspaper", color: "#2563EB"
        }
    ],

    leaders: [
        { name: "@sleman_viral", f: "45,200 followers", e: "5,280 engagement", s: "Negatif" },
        { name: "@info_sleman", f: "32,100 followers", e: "3,850 engagement", s: "Positif" },
        { name: "@warga_sleman", f: "28,400 followers", e: "2,450 engagement", s: "Netral" },
        { name: "@komunitas_sleman", f: "19,800 followers", e: "1,920 engagement", s: "Positif" }
    ],

    trending: [
        { tag: "#JalanRusak", val: 413 },
        { tag: "#SlemanBerbenah", val: 570 },
        { tag: "#LampuMati", val: 429 },
        { tag: "#AirBersih", val: 125 },
        { tag: "#SlemanHebat", val: 249 }
    ],

    init() {
        // Render semua bagian saat pertama kali dimuat
        this.renderFeed(this.allData);
        this.renderSidebar();
        this.setupEventListeners();
    },

    setupEventListeners() {
        const platformF = document.getElementById('platform-filter');
        const sentimentF = document.getElementById('sentiment-filter');
        const searchF = document.getElementById('search-filter');

        const applyFilters = () => {
            const platformValue = platformF.value;
            const sentimentValue = sentimentF.value;
            const searchValue = searchF.value.toLowerCase();

            const filteredData = this.allData.filter(item => {
                const matchPlatform = platformValue === 'all' || item.platform === platformValue;
                const matchSentiment = sentimentValue === 'all' || item.sentiment === sentimentValue;
                const matchSearch = item.text.toLowerCase().includes(searchValue) ||
                    item.user.toLowerCase().includes(searchValue);
                return matchPlatform && matchSentiment && matchSearch;
            });

            this.renderFeed(filteredData);
            this.updateSummaryStats(filteredData);
        };

        if (platformF) platformF.addEventListener('change', applyFilters);
        if (sentimentF) sentimentF.addEventListener('change', applyFilters);
        if (searchF) searchF.addEventListener('input', applyFilters);
    },

    renderFeed(data) {
        const feedArea = document.getElementById('live-feed-render-area');
        if (!feedArea) return;

        if (data.length === 0) {
            feedArea.innerHTML = `<div class="glass" style="padding: 40px; text-align: center; color: var(--text-muted);">Data tidak ditemukan...</div>`;
            return;
        }

        feedArea.innerHTML = data.map((p, i) => `
            <div class="post-card animate-up" style="animation-delay: ${0.1 * i}s">
                <span class="sentiment-badge badge-${p.sentiment.toLowerCase()}">${p.sentiment}</span>
                <div style="display: flex; gap: 16px;">
                    <div class="flex-center" style="width: 40px; height: 40px; background: #F1F5F9; border-radius: 8px; color: ${p.color}">
                        <i class="fa-brands ${p.icon}"></i>
                    </div>
                    <div style="flex: 1;">
                        <div style="font-weight: 700;">${p.user}</div>
                        <div class="text-muted" style="font-size: 0.75rem; margin-bottom: 12px;">${p.time}</div>
                        <p style="font-size: 0.9rem; margin-bottom: 12px;">${p.text}</p>
                        <div class="flex-between" style="font-size: 0.8rem; color: var(--text-muted);">
                            <span><i class="fa-solid fa-chart-line"></i> ${p.eng}</span>
                            <span><i class="fa-solid fa-location-dot"></i> ${p.loc}</span>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    },

    renderSidebar() {
        // Render Opinion Leaders - Bagian yang kosong di image_84dc19.png
        const leadersArea = document.getElementById('leaders-render-area');
        if (leadersArea) {
            leadersArea.innerHTML = this.leaders.map(l => `
                <div class="flex-between" style="padding: 12px 0; border-bottom: 1px solid var(--border-color);">
                    <div>
                        <div style="font-weight: 600; font-size: 0.9rem;">${l.name}</div>
                        <div class="text-muted" style="font-size: 0.7rem;">${l.f}</div>
                        <div class="text-muted" style="font-size: 0.7rem;"><i class="fa-solid fa-arrow-trend-up"></i> ${l.e}</div>
                    </div>
                    <span class="sentiment-badge badge-${l.s.toLowerCase()}" style="position:static;">${l.s}</span>
                </div>
            `).join('');
        }

        // Render Trending Topics - Bagian yang kosong di image_84dc19.png
        const trendingArea = document.getElementById('trending-render-area');
        if (trendingArea) {
            trendingArea.innerHTML = this.trending.map(t => `
                <div class="flex-between" style="padding: 10px 0;">
                    <span style="color:var(--primary-color); font-weight:600; cursor:pointer;">${t.tag}</span>
                    <span class="text-muted" style="font-weight:700;">${t.val}</span>
                </div>
            `).join('');
        }
    },

    updateSummaryStats(filteredData) {
        // Mengupdate angka "Total Posts" secara dinamis berdasarkan filter
        const totalPostsEl = document.querySelector('.sentiment-mini-card:nth-child(1) .mini-value');
        if (totalPostsEl) totalPostsEl.innerText = filteredData.length;
    }
};

// Inisialisasi saat DOM siap
document.addEventListener('DOMContentLoaded', () => SentimentUI.init());