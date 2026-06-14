pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

// Data and Core Config
        const theme = { red: 'bg-[#ee5e40]', orange: 'bg-[#f39c12]', green: 'bg-[#7fc265]', blue: 'bg-[#5c8eec]', purple: 'bg-[#a379c9]', yellow: 'bg-[#ecc64d]', pink: 'bg-[#c56eb5]' };

        function getIconSVG(type) {
            const base = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">`;
            const end = `</svg>`;
            switch(type) {
                case 'merge': return `${base}<path d="M15 14l-4-4-4 4"/><path d="M11 10v10"/><path d="M4 4h16v6H4z"/>${end}`;
                case 'split': return `${base}<path d="M9 10L5 14l4 4"/><path d="M5 14h10"/><path d="M15 4h4v16h-4"/>${end}`;
                case 'compress': return `${base}<path d="M4 14l4-4 4 4"/><path d="M8 10v10"/><path d="M20 10l-4-4-4 4"/><path d="M16 6v10"/>${end}`;
                case 'edit': return `${base}<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>${end}`;
                case 'image': return `${base}<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>${end}`;
                case 'sign': return `${base}<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/>${end}`;
                case 'stamp': return `${base}<circle cx="12" cy="12" r="10"/><path d="M14 8l-4 8"/><path d="M10 8l4 8"/>${end}`;
                case 'rotate': return `${base}<path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/>${end}`;
                case 'code': return `${base}<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>${end}`;
                case 'unlock': return `${base}<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>${end}`;
                case 'lock': return `${base}<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>${end}`;
                case 'layers': return `${base}<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 12 12 17 22 12"/><polyline points="2 17 12 22 22 17"/>${end}`;
                case 'wrench': return `${base}<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>${end}`;
                case 'grid': return `${base}<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="12" y1="3" x2="12" y2="21"/>${end}`;
                case 'ocr': return `${base}<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 12h10"/>${end}`;
                case 'crop': return `${base}<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"/><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"/>${end}`;
                default: return `${base}<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>${end}`;
            }
        }

        const toolsData = [
            { title: "Merge PDF", desc: "Combine PDFs in the order you want with the easiest PDF merger available.", color: theme.red, icon: 'merge' },
            { title: "Split PDF", desc: "Separate one page or a whole set for easy conversion into independent PDF files.", color: theme.orange, icon: 'split' },
            { title: "Compress PDF", desc: "Reduce file size while optimizing for maximal PDF quality.", color: theme.green, icon: 'compress' },
            { title: "Edit PDF", desc: "Add text, images, shapes or natively edit existing text on your PDF document.", color: theme.purple, icon: 'edit' },
            { title: "PDF to JPG", desc: "Convert each PDF page into a JPG or extract all images contained in a PDF.", color: theme.yellow, icon: 'image' },
            { title: "JPG to PDF", desc: "Convert JPG images to PDF in seconds. Easily adjust orientation and margins.", color: theme.yellow, icon: 'image' },
            { title: "Sign PDF", desc: "Sign yourself or request electronic signatures from others.", color: theme.blue, icon: 'sign' },
            { title: "Watermark", desc: "Stamp an image or text over your PDF in seconds. Choose the typography, transparency and position.", color: theme.pink, icon: 'stamp' },
            { title: "Rotate PDF", desc: "Rotate your PDFs the way you need them. You can even rotate multiple PDFs at once!", color: theme.purple, icon: 'rotate', extraClass: 'border-purple-300 shadow-[0_0_15px_rgba(163,121,201,0.2)]' },
            { title: "HTML to PDF", desc: "Convert webpages in HTML to PDF. Copy and paste the URL of the page you want and convert it to PDF with a click.", color: theme.blue, icon: 'unlock', comingSoon: true },
            { title: "Unlock PDF", desc: "Remove PDF password security, giving you the freedom to use your PDFs as you want.", color: theme.blue, icon: 'unlock', comingSoon: true },
            { title: "Protect PDF", desc: "Protect PDF files with a password. Encrypt PDF documents to prevent unauthorized access.", color: theme.blue, icon: 'lock', comingSoon: true },
            { title: "Organize PDF", desc: "Sort pages of your PDF file however you like. Delete PDF pages or add PDF pages to your document at your convenience.", color: theme.orange, icon: 'layers', comingSoon: true },
            { title: "Repair PDF", desc: "Repair a damaged PDF and recover data from corrupt PDF. Fix PDF files with our Repair tool.", color: theme.green, icon: 'wrench', comingSoon: true },
            { title: "Page numbers", desc: "Add page numbers into PDFs with ease. Choose your positions, dimensions, typography.", color: theme.purple, icon: 'grid', comingSoon: true },
            { title: "OCR PDF", desc: "Easily convert scanned PDF into searchable and selectable documents.", color: theme.green, icon: 'ocr', comingSoon: true },
            { title: "Crop PDF", desc: "Crop margins of PDF documents or select specific areas, then apply the changes to one page or the whole document.", color: theme.purple, icon: 'crop', comingSoon: true }
        ];

        const categoryFilters = {
            'Organize PDF': ["Merge PDF", "Split PDF", "Organize PDF", "Rotate PDF"],
            'Optimize PDF': ["Compress PDF", "Repair PDF", "OCR PDF"],
            'Convert PDF': ["PDF to JPG", "JPG to PDF", "HTML to PDF"],
            'Edit PDF': ["Edit PDF", "Watermark", "Rotate PDF", "Page numbers", "Crop PDF"],
            'PDF Security': ["Sign PDF", "Unlock PDF", "Protect PDF"]
        };

        const gridContainer = document.getElementById('tools-grid');
        const pageNavButtons = document.querySelectorAll('#page-nav button');

        // Render main view cards
        function renderCards(filterCategory) {
            gridContainer.innerHTML = '';
            let filteredTools = toolsData;

            if (filterCategory !== 'All') {
                const allowedTitles = categoryFilters[filterCategory] || [];
                filteredTools = toolsData.filter(tool => allowedTitles.includes(tool.title));
            }

            filteredTools.forEach(tool => {
                const badgeHtml = tool.comingSoon 
                    ? '<span class="coming-soon-badge absolute top-4 right-4">Coming Soon</span>'
                    : (tool.isNew ? '<span class="absolute top-4 right-4 bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded tracking-wide uppercase" style="font-size:9px">New!</span>' : '');
                const cardHTML = `
                    <a href="#" class="tool-card group rounded-xl p-6 flex flex-col h-full relative cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-blue-500" data-title="${tool.title}">
                        ${badgeHtml}
                        <div class="w-12 h-12 rounded-lg flex items-center justify-center text-white mb-5 ${tool.color} shadow-sm">
                            ${getIconSVG(tool.icon)}
                        </div>
                        <h3 class="text-[17px] font-bold mb-2 leading-tight" style="color: var(--text-primary)">${tool.title}</h3>
                        <p class="text-[13px] leading-relaxed flex-grow" style="color: var(--text-secondary)">${tool.desc}</p>
                    </a>
                `;
                gridContainer.innerHTML += cardHTML;
            });

            if (filteredTools.length === 0) {
                gridContainer.innerHTML = `<div class="col-span-full text-center py-16"><p class="text-gray-500 text-[15px]">No tools available in this category yet.</p></div>`;
            }
        }

        pageNavButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const category = e.target.innerText.trim();
                pageNavButtons.forEach(b => {
                    b.className = "filter-inactive px-5 py-2.5 rounded-full text-[14px] font-semibold tracking-wide transition-all";
                });
                e.target.className = "filter-active px-5 py-2.5 rounded-full text-[14px] font-semibold tracking-wide transition-all";
                renderCards(category);
            });
        });

        renderCards('All');

        // Mega Menu Logic
        const globalHeader = document.getElementById('global-header');
        const megaMenu = document.getElementById('mega-menu');
        const megaMenuGrid = document.getElementById('mega-menu-grid');
        const megaMenuTitle = document.getElementById('mega-menu-title');
        let megaMenuTimeout;

        const showMegaMenu = (category) => {
            clearTimeout(megaMenuTimeout);
            megaMenuTitle.innerText = category;
            
            const allowedTitles = categoryFilters[category] || [];
            const tools = toolsData.filter(tool => allowedTitles.includes(tool.title));
            
            megaMenuGrid.innerHTML = tools.map(tool => `
                <a href="#" class="mega-menu-item group flex items-start p-3 rounded-xl transition-colors" data-title="${tool.title}">
                    <div class="w-10 h-10 rounded-lg flex items-center justify-center text-white shrink-0 mr-4 ${tool.color} shadow-sm group-hover:scale-105 transition-transform">
                        ${getIconSVG(tool.icon)}
                    </div>
                    <div>
                        <h4 class="text-[14px] font-bold transition-colors leading-tight" style="color: var(--text-primary)">${tool.title}</h4>
                        <p class="text-[12px] mt-1 line-clamp-2 leading-snug" style="color: var(--text-muted)">${tool.desc}</p>
                    </div>
                </a>
            `).join('');

            megaMenu.classList.remove('opacity-0', 'invisible', '-translate-y-2');
            megaMenu.classList.add('opacity-100', 'visible', 'translate-y-0');
        };

        const hideMegaMenu = () => {
            megaMenuTimeout = setTimeout(() => {
                megaMenu.classList.add('opacity-0', 'invisible', '-translate-y-2');
                megaMenu.classList.remove('opacity-100', 'visible', 'translate-y-0');
            }, 150);
        };

        document.querySelectorAll('.nav-trigger').forEach(trigger => trigger.addEventListener('mouseenter', (e) => showMegaMenu(e.target.dataset.category)));
        globalHeader.addEventListener('mouseleave', hideMegaMenu);
        megaMenu.addEventListener('mouseenter', () => clearTimeout(megaMenuTimeout));

        // Routing Logic
        const mainView = document.getElementById('main-view');
        const mergeView = document.getElementById('merge-view');
        const splitView = document.getElementById('split-view');
        const compressView = document.getElementById('compress-view');
        const editView = document.getElementById('edit-view'); 
        const p2jView = document.getElementById('pdf-to-jpg-view'); 
        const j2pView = document.getElementById('jpg-to-pdf-view');
        const signView = document.getElementById('sign-view');
        const watermarkView = document.getElementById('watermark-view');
        const rotateView = document.getElementById('rotate-view');
        const unlockView = document.getElementById('unlock-view');
        
        // Modals Logic
        const customAlert = document.getElementById('custom-alert');
        const customAlertBox = document.getElementById('custom-alert-box');
        const customAlertTitle = document.getElementById('custom-alert-title');
        const customAlertMsg = document.getElementById('custom-alert-msg');

        function showCustomAlert(title, msg) {
            customAlertTitle.innerText = title;
            customAlertMsg.innerText = msg;
            customAlert.classList.remove('opacity-0', 'pointer-events-none');
            customAlert.classList.add('opacity-100');
            customAlertBox.classList.remove('scale-95');
            customAlertBox.classList.add('scale-100');
        }

        function hideCustomAlert() {
            customAlert.classList.remove('opacity-100');
            customAlert.classList.add('opacity-0', 'pointer-events-none');
            customAlertBox.classList.remove('scale-100');
            customAlertBox.classList.add('scale-95');
        }

        const pwdPrompt = document.getElementById('password-prompt');
        const pwdPromptBox = document.getElementById('password-prompt-box');
        const pwdInput = document.getElementById('pdf-password-input');
        let pwdCallback = null;

        function showPasswordPrompt(callback) {
            pwdCallback = callback;
            pwdInput.value = '';
            pwdPrompt.classList.remove('opacity-0', 'pointer-events-none');
            pwdPrompt.classList.add('opacity-100');
            pwdPromptBox.classList.remove('scale-95');
            pwdPromptBox.classList.add('scale-100');
            setTimeout(() => pwdInput.focus(), 100);
        }

        function hidePasswordPrompt() {
            pwdPrompt.classList.remove('opacity-100');
            pwdPrompt.classList.add('opacity-0', 'pointer-events-none');
            pwdPromptBox.classList.remove('scale-100');
            pwdPromptBox.classList.add('scale-95');
            if (typeof resetUnlockButton === 'function') resetUnlockButton();
        }

        document.getElementById('submit-password-btn').addEventListener('click', () => {
            const val = pwdInput.value;
            if (val && pwdCallback) {
                hidePasswordPrompt();
                pwdCallback(val);
            }
        });

        // Coming Soon Popup Logic
        const comingSoonPopup = document.getElementById('coming-soon-popup');
        const comingSoonModal = document.getElementById('coming-soon-modal');
        const comingSoonBackdrop = document.getElementById('coming-soon-backdrop');
        const closePopupBtn = document.getElementById('close-popup-btn');

        function showComingSoonPopup() {
            comingSoonPopup.classList.remove('opacity-0', 'pointer-events-none');
            comingSoonPopup.classList.add('opacity-100');
            comingSoonModal.classList.remove('scale-95');
            comingSoonModal.classList.add('scale-100');
        }

        function hideComingSoonPopup() {
            comingSoonPopup.classList.remove('opacity-100');
            comingSoonPopup.classList.add('opacity-0', 'pointer-events-none');
            comingSoonModal.classList.remove('scale-100');
            comingSoonModal.classList.add('scale-95');
        }

        closePopupBtn.addEventListener('click', hideComingSoonPopup);
        comingSoonBackdrop.addEventListener('click', hideComingSoonPopup);

        function openToolView(title) {
            // Intercept for Coming Soon features
            const comingSoonTools = ['HTML to PDF', 'Unlock PDF', 'Protect PDF', 'Organize PDF', 'Repair PDF', 'Page numbers', 'OCR PDF', 'Crop PDF'];
            if (comingSoonTools.includes(title)) {
                showComingSoonPopup();
                return;
            }

            mainView.classList.add('hidden');
            mergeView.classList.add('hidden');
            splitView.classList.add('hidden');
            compressView.classList.add('hidden');
            editView.classList.add('hidden');
            p2jView.classList.add('hidden');
            j2pView.classList.add('hidden');
            signView.classList.add('hidden');
            watermarkView.classList.add('hidden');
            rotateView.classList.add('hidden');
            unlockView.classList.add('hidden');

            if (title === 'Merge PDF') {
                mergeView.classList.remove('hidden');
                resetMergeWorkspace();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (title === 'Split PDF') {
                splitView.classList.remove('hidden');
                resetSplitWorkspace();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (title === 'Compress PDF') {
                compressView.classList.remove('hidden');
                resetCompressWorkspace();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (title === 'Edit PDF') {
                editView.classList.remove('hidden');
                resetEditWorkspace();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (title === 'PDF to JPG') {
                p2jView.classList.remove('hidden');
                resetP2jWorkspace();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (title === 'JPG to PDF') {
                j2pView.classList.remove('hidden');
                resetJ2pWorkspace();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (title === 'Sign PDF') {
                signView.classList.remove('hidden');
                resetSignWorkspace();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (title === 'Watermark') {
                watermarkView.classList.remove('hidden');
                resetWmWorkspace();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (title === 'Rotate PDF') {
                rotateView.classList.remove('hidden');
                resetRotWorkspace();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (title === 'Unlock PDF') {
                unlockView.classList.remove('hidden');
                resetUnlockWorkspace();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                mainView.classList.remove('hidden'); 
            }
        }

        gridContainer.addEventListener('click', (e) => {
            const card = e.target.closest('.tool-card');
            if (!card) return;
            e.preventDefault();
            openToolView(card.dataset.title);
        });

        megaMenuGrid.addEventListener('click', (e) => {
            const item = e.target.closest('.mega-menu-item');
            if (!item) return;
            e.preventDefault();
            hideMegaMenu();
            openToolView(item.dataset.title);
        });

        document.querySelectorAll('.back-btn, #logo-link').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                mergeView.classList.add('hidden');
                splitView.classList.add('hidden');
                compressView.classList.add('hidden');
                editView.classList.add('hidden');
                p2jView.classList.add('hidden');
                j2pView.classList.add('hidden');
                signView.classList.add('hidden');
                watermarkView.classList.add('hidden');
                rotateView.classList.add('hidden');
                unlockView.classList.add('hidden');
                mainView.classList.remove('hidden');
                window.scrollTo({ top: 0, behavior: 'smooth' });
                if(btn.id === 'logo-link') { const btns = document.querySelectorAll('#page-nav button'); btns.forEach(b => b.className = 'filter-inactive px-5 py-2.5 rounded-full text-[14px] font-semibold tracking-wide transition-all'); btns[0].className = 'filter-active px-5 py-2.5 rounded-full text-[14px] font-semibold tracking-wide transition-all'; renderCards('All'); }
            });
        });

        // ==========================================
        // --- MERGE WORKSPACE LOGIC ---
        // ==========================================
        const mergeDropzone = document.getElementById('merge-dropzone');
        const mergeFileInput = document.getElementById('merge-file-input');
        const mergeFileList = document.getElementById('merge-file-list');
        const mergeActionArea = document.getElementById('merge-action-area');
        const doMergeBtn = document.getElementById('do-merge-btn');
        const mergeDownloadBtn = document.getElementById('merge-download-btn');
        const mergeStatus = document.getElementById('merge-status');
        
        let filesMap = new Map(); 
        let fileIdCounter = 0;

        function resetMergeWorkspace() {
            filesMap.clear();
            mergeFileList.innerHTML = '';
            mergeActionArea.classList.add('hidden');
            mergeDownloadBtn.classList.add('hidden');
            mergeStatus.innerText = '';
            mergeFileInput.value = '';
        }

        function handleMergeFiles(files) {
            Array.from(files).forEach(file => {
                if (file.type !== 'application/pdf') return alert(`${file.name} is not a valid PDF file.`);
                const id = fileIdCounter++;
                filesMap.set(id, file);
                
                const li = document.createElement('li');
                li.setAttribute('data-id', id);
                li.className = 'merge-file-item flex items-center rounded-lg p-3 cursor-grab transition-colors group shadow-sm';
                li.innerHTML = `
                    <svg class="w-5 h-5 text-gray-400 mr-3 drag-handle group-hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    <div class="w-8 h-8 bg-red-100 text-red-500 rounded flex items-center justify-center mr-3 shrink-0"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd"></path></svg></div>
                    <span class="flex-grow font-medium text-gray-700 truncate">${file.name}</span>
                    <button class="remove-btn text-gray-400 hover:text-red-500 p-1 rounded transition-colors" title="Remove PDF"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>
                `;
                mergeFileList.appendChild(li);
            });
            if (filesMap.size > 0) mergeActionArea.classList.remove('hidden');
            mergeDownloadBtn.classList.add('hidden');
            mergeStatus.innerText = '';
        }

        mergeFileInput.addEventListener('change', (e) => handleMergeFiles(e.target.files));
        mergeDropzone.addEventListener('dragover', (e) => { e.preventDefault(); mergeDropzone.classList.add('bg-blue-50', 'border-blue-500'); });
        mergeDropzone.addEventListener('dragleave', () => mergeDropzone.classList.remove('bg-blue-50', 'border-blue-500'));
        mergeDropzone.addEventListener('drop', (e) => { e.preventDefault(); mergeDropzone.classList.remove('bg-blue-50', 'border-blue-500'); handleMergeFiles(e.dataTransfer.files); });

        mergeFileList.addEventListener('click', (e) => {
            const removeBtn = e.target.closest('.remove-btn');
            if (removeBtn) {
                const li = removeBtn.closest('li');
                filesMap.delete(parseInt(li.getAttribute('data-id')));
                li.remove();
                if (filesMap.size === 0) mergeActionArea.classList.add('hidden');
            }
        });

        new Sortable(mergeFileList, { animation: 150, ghostClass: 'opacity-50', handle: '.drag-handle', cursor: 'grabbing' });

        doMergeBtn.addEventListener('click', async () => {
            if (filesMap.size < 2) return alert("Please upload at least 2 PDF files to merge.");
            try {
                doMergeBtn.disabled = true;
                doMergeBtn.innerHTML = `<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Merging PDFs...`;
                mergeStatus.innerText = 'Processing your files, please wait...';
                mergeDownloadBtn.classList.add('hidden');

                const { PDFDocument } = PDFLib;
                const mergedPdf = await PDFDocument.create();

                const listItems = mergeFileList.querySelectorAll('li');
                for (let li of listItems) {
                    const file = filesMap.get(parseInt(li.getAttribute('data-id')));
                    const pdf = await PDFDocument.load(await file.arrayBuffer());
                    const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
                    copiedPages.forEach((page) => mergedPdf.addPage(page));
                }

                const mergedPdfBytes = await mergedPdf.save();
                const url = URL.createObjectURL(new Blob([mergedPdfBytes], { type: 'application/pdf' }));
                
                mergeDownloadBtn.href = url;
                mergeDownloadBtn.download = 'Merged_Document.pdf';
                mergeDownloadBtn.classList.remove('hidden');
                mergeDownloadBtn.classList.add('flex'); 
                mergeStatus.innerText = 'Successfully merged! Click the button below to download.';
            } catch (error) {
                console.error("Merge error:", error);
                mergeStatus.innerText = 'An error occurred while merging. Ensure your PDFs are not corrupted or encrypted.';
            } finally {
                doMergeBtn.disabled = false;
                doMergeBtn.innerText = 'Merge PDF';
            }
        });


        // ==========================================
        // --- SPLIT WORKSPACE LOGIC ---
        // ==========================================
        const splitDropzone = document.getElementById('split-dropzone');
        const splitFileInput = document.getElementById('split-file-input');
        const splitUploadText = document.getElementById('split-upload-text');
        const splitUploadSubtext = document.getElementById('split-upload-subtext');
        const splitWorkspace = document.getElementById('split-workspace');
        
        const tabRange = document.getElementById('tab-range');
        const tabPages = document.getElementById('tab-pages');
        const modeRangeView = document.getElementById('split-mode-range');
        const modePagesView = document.getElementById('split-mode-pages');
        
        const rangeRowsContainer = document.getElementById('range-rows-container');
        const addRangeBtn = document.getElementById('add-range-btn');
        const mergeRangesCb = document.getElementById('merge-ranges-checkbox');
        const pagesInput = document.getElementById('pages-input');
        
        const doSplitBtn = document.getElementById('do-split-btn');
        const splitDownloadBtn = document.getElementById('split-download-btn');
        const splitDownloadText = document.getElementById('split-download-text');
        const splitStatus = document.getElementById('split-status');

        let currentSplitFile = null;
        let currentSplitPdfDoc = null; 
        let totalPdfPages = 0;
        let splitMode = 'range'; 

        function resetSplitWorkspace() {
            currentSplitFile = null; currentSplitPdfDoc = null; totalPdfPages = 0;
            splitFileInput.value = ''; splitWorkspace.classList.add('hidden'); splitDownloadBtn.classList.add('hidden'); splitStatus.innerText = '';
            splitUploadText.innerText = 'Click to select a PDF file'; splitUploadSubtext.innerText = 'or drag and drop it here';
            rangeRowsContainer.innerHTML = ''; addRangeRow(); 
            pagesInput.value = ''; mergeRangesCb.checked = false;
        }

        function createRangeRowHTML(maxPage) {
            const div = document.createElement('div');
            div.className = 'range-row flex items-center space-x-3 p-3 rounded-lg shadow-sm';
            div.innerHTML = `
                <div class="flex-grow flex items-center space-x-2">
                    <span class="text-sm font-medium" style="color: var(--text-secondary)">From page</span>
                    <input type="number" min="1" max="${maxPage}" value="1" class="range-start w-16 px-2 py-1.5 rounded text-center focus:outline-none" style="background: var(--surface2); border: 1px solid var(--border); color: var(--text-primary);">
                    <span class="text-sm font-medium" style="color: var(--text-secondary)">to</span>
                    <input type="number" min="1" max="${maxPage}" value="${maxPage}" class="range-end w-16 px-2 py-1.5 rounded text-center focus:outline-none" style="background: var(--surface2); border: 1px solid var(--border); color: var(--text-primary);">
                </div>
                <button class="remove-range-btn text-gray-400 hover:text-red-500 p-1.5 transition-colors hidden" title="Remove Range">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                </button>
            `;
            return div;
        }

        function updateRemoveRangeButtons() {
            const rows = rangeRowsContainer.querySelectorAll('.range-row');
            const btns = rangeRowsContainer.querySelectorAll('.remove-range-btn');
            rows.length > 1 ? btns.forEach(btn => btn.classList.remove('hidden')) : btns.forEach(btn => btn.classList.add('hidden'));
        }

        function addRangeRow() { rangeRowsContainer.appendChild(createRangeRowHTML(totalPdfPages > 0 ? totalPdfPages : 1)); updateRemoveRangeButtons(); }

        rangeRowsContainer.addEventListener('click', (e) => {
            const removeBtn = e.target.closest('.remove-range-btn');
            if (removeBtn) { removeBtn.closest('.range-row').remove(); updateRemoveRangeButtons(); }
        });
        addRangeBtn.addEventListener('click', addRangeRow);

        function setSplitTab(mode) {
            splitMode = mode;
            if (mode === 'range') {
                tabRange.className = "px-6 py-3 font-semibold text-sm border-b-2 border-blue-500 text-blue-500";
                tabPages.className = "px-6 py-3 font-semibold text-sm border-b-2 border-transparent"; tabPages.style.color = "var(--text-secondary)";
                modeRangeView.classList.replace('hidden', 'block'); modePagesView.classList.replace('block', 'hidden');
            } else {
                tabPages.className = "px-6 py-3 font-semibold text-sm border-b-2 border-blue-500 text-blue-500";
                tabRange.className = "px-6 py-3 font-semibold text-sm border-b-2 border-transparent"; tabRange.style.color = "var(--text-secondary)";
                modePagesView.classList.replace('hidden', 'block'); modeRangeView.classList.replace('block', 'hidden');
            }
        }
        tabRange.addEventListener('click', () => setSplitTab('range')); tabPages.addEventListener('click', () => setSplitTab('pages'));

        async function handleSplitFile(file) {
            if (!file || file.type !== 'application/pdf') return alert('Please upload a valid PDF file.');
            try {
                splitStatus.innerText = 'Loading PDF...'; currentSplitFile = file;
                currentSplitPdfDoc = await PDFLib.PDFDocument.load(await file.arrayBuffer());
                totalPdfPages = currentSplitPdfDoc.getPageCount();
                splitUploadText.innerText = file.name; splitUploadSubtext.innerText = `${totalPdfPages} pages`;
                splitWorkspace.classList.remove('hidden'); splitDownloadBtn.classList.add('hidden'); splitStatus.innerText = '';
                rangeRowsContainer.innerHTML = ''; addRangeRow();
            } catch (err) { alert("Failed to read PDF. It might be corrupted or encrypted."); resetSplitWorkspace(); }
        }

        splitFileInput.addEventListener('change', (e) => handleSplitFile(e.target.files[0]));
        splitDropzone.addEventListener('dragover', (e) => { e.preventDefault(); splitDropzone.classList.add('bg-blue-50', 'border-blue-500'); });
        splitDropzone.addEventListener('dragleave', () => splitDropzone.classList.remove('bg-blue-50', 'border-blue-500'));
        splitDropzone.addEventListener('drop', (e) => { e.preventDefault(); splitDropzone.classList.remove('bg-blue-50', 'border-blue-500'); if(e.dataTransfer.files[0]) handleSplitFile(e.dataTransfer.files[0]); });

        function parsePagesString(str, maxPage) {
            const pagesSet = new Set();
            str.split(',').forEach(part => {
                part = part.trim();
                if (!part) return;
                if (part.includes('-')) {
                    const [start, end] = part.split('-').map(Number);
                    if (!isNaN(start) && !isNaN(end) && start <= end) for (let i = start; i <= end; i++) pagesSet.add(i);
                } else {
                    const num = parseInt(part); if (!isNaN(num)) pagesSet.add(num);
                }
            });
            return Array.from(pagesSet).filter(p => p >= 1 && p <= maxPage).map(p => p - 1).sort((a, b) => a - b);
        }

        doSplitBtn.addEventListener('click', async () => {
            if (!currentSplitPdfDoc) return;
            try {
                doSplitBtn.disabled = true;
                doSplitBtn.innerHTML = `<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Splitting PDF...`;
                splitStatus.innerText = 'Processing your document...'; splitDownloadBtn.classList.add('hidden');
                const { PDFDocument } = PDFLib;

                if (splitMode === 'pages') {
                    const pagesToExtract = parsePagesString(pagesInput.value, totalPdfPages);
                    if (!pagesToExtract.length) throw new Error("No valid pages");
                    const newPdf = await PDFDocument.create();
                    const copiedPages = await newPdf.copyPages(currentSplitPdfDoc, pagesToExtract);
                    copiedPages.forEach(page => newPdf.addPage(page));
                    splitDownloadBtn.href = URL.createObjectURL(new Blob([await newPdf.save()], { type: 'application/pdf' }));
                    splitDownloadBtn.download = `Extracted_Pages_${currentSplitFile.name}`;
                    splitDownloadText.innerText = "Download PDF";
                } else {
                    const ranges = Array.from(rangeRowsContainer.querySelectorAll('.range-row')).map(row => {
                        let start = parseInt(row.querySelector('.range-start').value) || 1;
                        let end = parseInt(row.querySelector('.range-end').value) || totalPdfPages;
                        if(start < 1) start = 1; if(end > totalPdfPages) end = totalPdfPages;
                        if(start > end) [start, end] = [end, start];
                        const indices = []; for(let i = start; i <= end; i++) indices.push(i - 1);
                        return { start, end, indices };
                    });
                    if (!ranges.length || !ranges[0].indices.length) throw new Error("No valid ranges");

                    if (mergeRangesCb.checked) {
                        const newPdf = await PDFDocument.create();
                        for (let r of ranges) {
                            const copiedPages = await newPdf.copyPages(currentSplitPdfDoc, r.indices);
                            copiedPages.forEach(p => newPdf.addPage(p));
                        }
                        splitDownloadBtn.href = URL.createObjectURL(new Blob([await newPdf.save()], { type: 'application/pdf' }));
                        splitDownloadBtn.download = `Merged_Ranges_${currentSplitFile.name}`;
                        splitDownloadText.innerText = "Download Merged PDF";
                    } else {
                        splitStatus.innerText = 'Creating ZIP file...';
                        const zip = new JSZip();
                        for (let r of ranges) {
                            const newPdf = await PDFDocument.create();
                            const copiedPages = await newPdf.copyPages(currentSplitPdfDoc, r.indices);
                            copiedPages.forEach(p => newPdf.addPage(p));
                            zip.file(`Range_${r.start}-${r.end}_${currentSplitFile.name}`, await newPdf.save());
                        }
                        splitDownloadBtn.href = URL.createObjectURL(await zip.generateAsync({ type: "blob" }));
                        splitDownloadBtn.download = `Split_Ranges_${currentSplitFile.name.replace('.pdf', '')}.zip`;
                        splitDownloadText.innerText = "Download ZIP File";
                    }
                }
                splitDownloadBtn.classList.remove('hidden'); splitDownloadBtn.classList.add('flex');
                splitStatus.innerText = 'Successfully split! Click below to download.';
            } catch (err) {
                if(err.message !== "No valid pages" && err.message !== "No valid ranges") splitStatus.innerText = 'An error occurred during splitting.';
                else splitStatus.innerText = '';
            } finally {
                doSplitBtn.disabled = false; doSplitBtn.innerText = 'Split PDF';
            }
        });


        // ==========================================
        // --- COMPRESS WORKSPACE LOGIC ---
        // ==========================================
        const compressDropzone = document.getElementById('compress-dropzone');
        const compressFileInput = document.getElementById('compress-file-input');
        const compressUploadText = document.getElementById('compress-upload-text');
        const compressUploadSubtext = document.getElementById('compress-upload-subtext');
        const compressWorkspace = document.getElementById('compress-workspace');
        
        const doCompressBtn = document.getElementById('do-compress-btn');
        const compressDownloadBtn = document.getElementById('compress-download-btn');
        const compressStatus = document.getElementById('compress-status');

        let currentCompressFile = null;

        function resetCompressWorkspace() {
            currentCompressFile = null; compressFileInput.value = '';
            compressWorkspace.classList.add('hidden'); compressDownloadBtn.classList.add('hidden'); compressStatus.innerText = '';
            compressUploadText.innerText = 'Click to select a PDF file'; compressUploadSubtext.innerText = 'or drag and drop it here';
            const defaultRadio = document.querySelector('input[name="compression_level"][value="recommended"]');
            if(defaultRadio) defaultRadio.checked = true;
        }

        function handleCompressFile(file) {
            if (!file || file.type !== 'application/pdf') return alert('Please upload a valid PDF file.');
            currentCompressFile = file;
            compressUploadText.innerText = file.name;
            compressUploadSubtext.innerText = `Current Size: ${(file.size / (1024 * 1024)).toFixed(2)} MB`;
            compressWorkspace.classList.remove('hidden'); compressDownloadBtn.classList.add('hidden'); compressStatus.innerText = '';
        }

        compressFileInput.addEventListener('change', (e) => handleCompressFile(e.target.files[0]));
        compressDropzone.addEventListener('dragover', (e) => { e.preventDefault(); compressDropzone.classList.add('bg-blue-50', 'border-blue-500'); });
        compressDropzone.addEventListener('dragleave', () => compressDropzone.classList.remove('bg-blue-50', 'border-blue-500'));
        compressDropzone.addEventListener('drop', (e) => { e.preventDefault(); compressDropzone.classList.remove('bg-blue-50', 'border-blue-500'); if(e.dataTransfer.files[0]) handleCompressFile(e.dataTransfer.files[0]); });

        doCompressBtn.addEventListener('click', async () => {
            if (!currentCompressFile) return;
            try {
                doCompressBtn.disabled = true;
                doCompressBtn.innerHTML = `<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Compressing...`;
                compressStatus.innerText = 'Optimizing document structure...'; compressDownloadBtn.classList.add('hidden');

                const selectedLevel = document.querySelector('input[name="compression_level"]:checked').value;
                let scale = 1.5, quality = 0.65;
                if (selectedLevel === 'extreme') { scale = 1.0; quality = 0.4; } 
                else if (selectedLevel === 'less') { scale = 2.0; quality = 0.85; }

                const pdf = await pdfjsLib.getDocument(new Uint8Array(await currentCompressFile.arrayBuffer())).promise;
                const newPdf = await PDFLib.PDFDocument.create();
                
                for (let i = 1; i <= pdf.numPages; i++) {
                    compressStatus.innerText = `Compressing page ${i} of ${pdf.numPages}...`;
                    const page = await pdf.getPage(i);
                    const viewport = page.getViewport({ scale });
                    const canvas = document.createElement('canvas');
                    canvas.height = viewport.height; canvas.width = viewport.width;
                    await page.render({ canvasContext: canvas.getContext('2d'), viewport }).promise;
                    
                    const imgImage = await newPdf.embedJpg(canvas.toDataURL('image/jpeg', quality));
                    const originalVp = page.getViewport({ scale: 1.0 });
                    newPdf.addPage([originalVp.width, originalVp.height]).drawImage(imgImage, { x: 0, y: 0, width: originalVp.width, height: originalVp.height });
                }

                compressStatus.innerText = 'Finalizing compressed file...';
                const blob = new Blob([await newPdf.save({ useObjectStreams: true })], { type: 'application/pdf' });
                
                compressDownloadBtn.href = URL.createObjectURL(blob);
                compressDownloadBtn.download = `Compressed_${selectedLevel}_${currentCompressFile.name}`;
                
                const origSize = currentCompressFile.size;
                const percentSaved = Math.round((1 - (blob.size / origSize)) * 100);

                compressDownloadBtn.classList.remove('hidden'); compressDownloadBtn.classList.add('flex');
                
                if (percentSaved > 0) compressStatus.innerHTML = `<span class="text-[#7fc265] font-bold">Successfully compressed!</span> File size reduced by ${percentSaved}% (Now ${(blob.size / (1024 * 1024)).toFixed(2)} MB)`;
                else if (percentSaved < 0) compressStatus.innerHTML = `<span class="text-yellow-600 font-bold">Compression applied, but size increased.</span> (Now ${(blob.size / (1024 * 1024)).toFixed(2)} MB). Original was highly optimized.`;
                else compressStatus.innerHTML = `Successfully processed! (Size remained roughly the same).`;

            } catch (err) { console.error(err); compressStatus.innerText = 'An error occurred. Make sure the PDF is not encrypted.'; } 
            finally { doCompressBtn.disabled = false; doCompressBtn.innerText = 'Compress PDF'; }
        });


        // ==========================================
        // --- EDIT PDF WORKSPACE LOGIC ---
        // ==========================================
        const editDropzone = document.getElementById('edit-dropzone');
        const editFileInput = document.getElementById('edit-file-input');
        const editSetupArea = document.getElementById('edit-setup-area');
        const editWorkspace = document.getElementById('edit-workspace');
        
        // Mode & Navigation
        const tabAnnotate = document.getElementById('tab-annotate');
        const tabEditText = document.getElementById('tab-edit-text');
        const editModeBanner = document.getElementById('edit-mode-banner');
        const pdfTextLayer = document.getElementById('pdf-text-layer');
        const btnPrevPage = document.getElementById('edit-prev-page');
        const btnNextPage = document.getElementById('edit-next-page');
        const pageIndicator = document.getElementById('edit-page-indicator');
        const editSaveBtn = document.getElementById('edit-save-btn');
        const editActionArea = document.getElementById('edit-action-area');
        const editDownloadBtn = document.getElementById('edit-download-btn');
        const editStatus = document.getElementById('edit-status');

        // Properties & Tools
        const editColorInput = document.getElementById('edit-color');
        const editFontSizeInput = document.getElementById('edit-font-size');
        const editFillToggle = document.getElementById('edit-fill-toggle');
        const editOutlineToggle = document.getElementById('edit-outline-toggle');
        const toolBtns = document.querySelectorAll('.tool-btn');
        const editDeleteObjBtn = document.getElementById('edit-delete-obj');
        const addImageInput = document.getElementById('edit-add-image');

        // State
        let editPdfDoc = null; 
        let editPdfFile = null; 
        let fabricCanvas = null;
        let currentEditMode = 'annotate'; 
        let currentTool = 'select';
        let currentPageNum = 1;
        let totalEditPages = 0;
        
        let allPageData = {}; 
        let isRenderingPage = false;
        let currentScale = 1.5;

        function resetEditWorkspace() {
            editPdfFile = null; editPdfDoc = null; allPageData = {};
            currentPageNum = 1; totalEditPages = 0;
            editFileInput.value = ''; 
            editSetupArea.classList.remove('hidden');
            editWorkspace.classList.add('hidden');
            editActionArea.classList.add('hidden');
            if (fabricCanvas) { fabricCanvas.dispose(); fabricCanvas = null; }
            setEditMode('annotate');
        }

        async function handleEditFile(file) {
            if (!file || file.type !== 'application/pdf') return alert('Please upload a valid PDF file.');
            try {
                document.getElementById('edit-upload-text').innerText = 'Loading secure viewer...';
                editPdfFile = file; 
                const buffer = await file.arrayBuffer(); 
                editPdfDoc = await pdfjsLib.getDocument(new Uint8Array(buffer)).promise;
                totalEditPages = editPdfDoc.numPages;
                
                editSetupArea.classList.add('hidden');
                editWorkspace.classList.remove('hidden');
                editActionArea.classList.add('hidden');
                
                initFabricCanvas();
                await renderEditPage(currentPageNum);
            } catch (err) { alert("Failed to read PDF. It might be corrupted or encrypted."); resetEditWorkspace(); }
        }

        editFileInput.addEventListener('change', (e) => handleEditFile(e.target.files[0]));
        editDropzone.addEventListener('dragover', (e) => { e.preventDefault(); editDropzone.classList.add('bg-blue-50', 'border-blue-500'); });
        editDropzone.addEventListener('dragleave', () => editDropzone.classList.remove('bg-blue-50', 'border-blue-500'));
        editDropzone.addEventListener('drop', (e) => { e.preventDefault(); editDropzone.classList.remove('bg-blue-50', 'border-blue-500'); if(e.dataTransfer.files[0]) handleEditFile(e.dataTransfer.files[0]); });

        function initFabricCanvas() {
            fabricCanvas = new fabric.Canvas('pdf-fabric-canvas', {
                selection: true,
                preserveObjectStacking: true
            });
            
            fabricCanvas.on('selection:created', onObjectSelected);
            fabricCanvas.on('selection:updated', onObjectSelected);
            fabricCanvas.on('selection:cleared', () => editDeleteObjBtn.classList.add('hidden'));

            let isDrawingShape = false;
            let shapeObj = null;
            let origX, origY;

            fabricCanvas.on('mouse:down', function(o) {
                if (currentTool === 'select' || currentTool === 'draw') return;
                
                if (currentTool === 'text') {
                    const pointer = fabricCanvas.getPointer(o.e);
                    const text = new fabric.IText('Tap to edit', {
                        left: pointer.x,
                        top: pointer.y,
                        fontFamily: 'sans-serif',
                        fontSize: parseInt(editFontSizeInput.value),
                        fill: getFillColor(),
                        stroke: getStrokeColor(),
                        strokeWidth: editOutlineToggle.checked ? 1 : 0
                    });
                    fabricCanvas.add(text);
                    fabricCanvas.setActiveObject(text);
                    text.enterEditing();
                    text.selectAll();
                    setTool('select'); 
                    return;
                }

                isDrawingShape = true;
                const pointer = fabricCanvas.getPointer(o.e);
                origX = pointer.x;
                origY = pointer.y;

                const commonOpts = {
                    left: origX, top: origY,
                    fill: getFillColor(),
                    stroke: getStrokeColor(),
                    strokeWidth: editOutlineToggle.checked ? 2 : 0,
                    transparentCorners: false
                };

                if (currentTool === 'line') {
                    shapeObj = new fabric.Line([origX, origY, origX, origY], { ...commonOpts, strokeWidth: 3, stroke: editColorInput.value }); 
                } else if (currentTool === 'triangle') {
                    shapeObj = new fabric.Triangle({ ...commonOpts, width: 0, height: 0 });
                } else if (currentTool === 'ellipse') {
                    shapeObj = new fabric.Ellipse({ ...commonOpts, rx: 0, ry: 0 });
                }

                if (shapeObj) fabricCanvas.add(shapeObj);
            });

            fabricCanvas.on('mouse:move', function(o) {
                if (!isDrawingShape) return;
                const pointer = fabricCanvas.getPointer(o.e);
                
                if (currentTool === 'line') {
                    shapeObj.set({ x2: pointer.x, y2: pointer.y });
                } else if (currentTool === 'triangle') {
                    shapeObj.set({ 
                        width: Math.abs(origX - pointer.x), 
                        height: Math.abs(origY - pointer.y)
                    });
                    shapeObj.set({ originX: origX > pointer.x ? 'right' : 'left' });
                    shapeObj.set({ originY: origY > pointer.y ? 'bottom' : 'top' });
                } else if (currentTool === 'ellipse') {
                    shapeObj.set({ 
                        rx: Math.abs(origX - pointer.x)/2, 
                        ry: Math.abs(origY - pointer.y)/2
                    });
                    shapeObj.set({ originX: origX > pointer.x ? 'right' : 'left' });
                    shapeObj.set({ originY: origY > pointer.y ? 'bottom' : 'top' });
                }
                fabricCanvas.renderAll();
            });

            fabricCanvas.on('mouse:up', function(o) {
                if (!isDrawingShape) return;
                isDrawingShape = false;
                shapeObj.setCoords();
                fabricCanvas.setActiveObject(shapeObj);
                setTool('select'); 
            });
        }

        function onObjectSelected(e) {
            editDeleteObjBtn.classList.remove('hidden');
            const obj = e.selected[0];
            if (!obj) return;
            if (obj.fill && obj.fill !== 'transparent') {
                editColorInput.value = obj.fill;
                editFillToggle.checked = true;
            } else if (obj.stroke && obj.stroke !== 'transparent' && obj.type !== 'path') {
                editColorInput.value = obj.stroke;
            }
            if (obj.type === 'i-text') editFontSizeInput.value = obj.fontSize;
        }

        function updateActiveObject() {
            if (!fabricCanvas) return;
            const obj = fabricCanvas.getActiveObject();
            if (!obj) return;
            
            if (obj.type === 'path') {
                obj.set('stroke', editColorInput.value);
            } else {
                if (editFillToggle.checked) obj.set('fill', editColorInput.value);
                else obj.set('fill', 'transparent');
                
                if (editOutlineToggle.checked) {
                    obj.set('stroke', editColorInput.value);
                    obj.set('strokeWidth', 2);
                } else {
                    obj.set('stroke', 'transparent');
                    obj.set('strokeWidth', 0);
                }
                if (obj.type === 'i-text') obj.set('fontSize', parseInt(editFontSizeInput.value));
            }
            fabricCanvas.renderAll();
        }

        editColorInput.addEventListener('input', () => {
            if (fabricCanvas && currentTool === 'draw') fabricCanvas.freeDrawingBrush.color = editColorInput.value;
            updateActiveObject();
        });
        editFontSizeInput.addEventListener('input', updateActiveObject);
        editFillToggle.addEventListener('change', updateActiveObject);
        editOutlineToggle.addEventListener('change', updateActiveObject);

        editDeleteObjBtn.addEventListener('click', () => {
            if (!fabricCanvas) return;
            const actives = fabricCanvas.getActiveObjects();
            if (actives.length) { fabricCanvas.discardActiveObject(); actives.forEach(obj => fabricCanvas.remove(obj)); }
            editDeleteObjBtn.classList.add('hidden');
        });

        addImageInput.addEventListener('change', (e) => {
            if (!fabricCanvas) return;
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = function(f) {
                fabric.Image.fromURL(f.target.result, function(img) {
                    img.scaleToWidth(Math.min(300, fabricCanvas.width / 2));
                    img.set({ left: fabricCanvas.width/2 - img.getScaledWidth()/2, top: fabricCanvas.height/2 - img.getScaledHeight()/2 });
                    fabricCanvas.add(img);
                    fabricCanvas.setActiveObject(img);
                    setTool('select');
                });
            };
            reader.readAsDataURL(file);
            addImageInput.value = ''; 
        });

        function getFillColor() { return editFillToggle.checked ? editColorInput.value : 'transparent'; }
        function getStrokeColor() { return editOutlineToggle.checked ? editColorInput.value : 'transparent'; }

        function setTool(toolName) {
            currentTool = toolName;
            toolBtns.forEach(b => b.classList.remove('active'));
            const activeBtn = Array.from(toolBtns).find(b => b.dataset.tool === toolName);
            if(activeBtn) activeBtn.classList.add('active');

            if (!fabricCanvas) return;

            if (toolName === 'draw') {
                fabricCanvas.isDrawingMode = true;
                fabricCanvas.freeDrawingBrush.color = editColorInput.value;
                fabricCanvas.freeDrawingBrush.width = parseInt(editFontSizeInput.value) / 4 || 4;
            } else {
                fabricCanvas.isDrawingMode = false;
            }

            const selectable = (toolName === 'select');
            fabricCanvas.getObjects().forEach(obj => { obj.selectable = selectable; obj.evented = selectable; });
            fabricCanvas.discardActiveObject();
            fabricCanvas.requestRenderAll();
            if(selectable) editDeleteObjBtn.classList.add('hidden');
        }

        toolBtns.forEach(btn => {
            if(btn.dataset.tool) btn.addEventListener('click', () => setTool(btn.dataset.tool));
        });

        function setEditMode(mode) {
            currentEditMode = mode;
            if (mode === 'annotate') {
                tabAnnotate.className = "px-6 py-3 font-bold text-sm border-b-2 border-[#a379c9] text-[#a379c9] transition-colors";
                tabEditText.className = "px-6 py-3 font-bold text-sm border-b-2 border-transparent text-gray-500 hover:text-gray-800 transition-colors flex items-center gap-2";
                editModeBanner.classList.add('hidden');
                pdfTextLayer.classList.add('hidden');
                setTool('select');
            } else {
                tabEditText.className = "px-6 py-3 font-bold text-sm border-b-2 border-[#a379c9] text-[#a379c9] transition-colors flex items-center gap-2";
                tabAnnotate.className = "px-6 py-3 font-bold text-sm border-b-2 border-transparent text-gray-500 hover:text-gray-800 transition-colors";
                editModeBanner.classList.remove('hidden');
                pdfTextLayer.classList.remove('hidden');
                setTool('select');
            }
        }
        tabAnnotate.addEventListener('click', () => setEditMode('annotate'));
        tabEditText.addEventListener('click', () => setEditMode('edit-text'));

        async function saveCurrentPageData() {
            if (!fabricCanvas) return;
            if (!allPageData[currentPageNum]) allPageData[currentPageNum] = { erasedBoxes: [] };
            const bg = fabricCanvas.backgroundImage;
            fabricCanvas.setBackgroundImage(null, () => {});
            allPageData[currentPageNum].fabricJson = JSON.stringify(fabricCanvas.toJSON());
            fabricCanvas.setBackgroundImage(bg, () => {});
        }

        async function renderEditPage(pageNum) {
            if (isRenderingPage) return;
            isRenderingPage = true;
            
            try {
                const page = await editPdfDoc.getPage(pageNum);
                const viewport = page.getViewport({ scale: currentScale });
                
                const wrapper = document.getElementById('fabric-wrapper');
                wrapper.style.width = `${viewport.width}px`;
                wrapper.style.height = `${viewport.height}px`;
                
                const bgCanvas = document.createElement('canvas');
                bgCanvas.width = viewport.width;
                bgCanvas.height = viewport.height;
                const ctx = bgCanvas.getContext('2d');
                await page.render({ canvasContext: ctx, viewport: viewport }).promise;

                fabricCanvas.setWidth(viewport.width);
                fabricCanvas.setHeight(viewport.height);
                fabricCanvas.clear(); 
                
                fabric.Image.fromURL(bgCanvas.toDataURL('image/jpeg', 1.0), function(img) {
                    fabricCanvas.setBackgroundImage(img, fabricCanvas.renderAll.bind(fabricCanvas));
                });

                if (allPageData[pageNum] && allPageData[pageNum].fabricJson) {
                    fabricCanvas.loadFromJSON(allPageData[pageNum].fabricJson, () => {
                        fabricCanvas.renderAll();
                        setTool(currentTool); 
                    });
                }

                pdfTextLayer.innerHTML = '';
                const textContent = await page.getTextContent();
                
                if(!allPageData[pageNum]) allPageData[pageNum] = { erasedBoxes: [] };
                
                textContent.items.forEach(item => {
                    if (!item.str.trim()) return; 

                    const tx = window.pdfjsLib.Util.transform(viewport.transform, item.transform);
                    
                    const pdfFontSize = Math.sqrt((item.transform[0] * item.transform[0]) + (item.transform[1] * item.transform[1]));
                    const pixelFontSize = Math.sqrt((tx[0] * tx[0]) + (tx[1] * tx[1]));
                    
                    const div = document.createElement('div');
                    div.style.left = `${tx[4]}px`;
                    div.style.top = `${tx[5] - pixelFontSize * 0.9}px`; 
                    div.style.width = `${item.width * currentScale}px`;
                    div.style.height = `${pixelFontSize * 1.2}px`;

                    div.onclick = () => {
                        div.remove();
                        
                        const pdfX = item.transform[4];
                        const pdfY = item.transform[5] - pdfFontSize * 0.2; 
                        const pdfW = item.width;
                        const pdfH = pdfFontSize * 1.2;
                        
                        allPageData[currentPageNum].erasedBoxes.push({ x: pdfX, y: pdfY, width: pdfW, height: pdfH });
                        
                        const textObj = new fabric.IText(item.str, {
                            left: tx[4],
                            top: tx[5] - pixelFontSize * 0.9,
                            fontSize: pixelFontSize,
                            fontFamily: 'sans-serif', 
                            fill: editColorInput.value
                        });
                        
                        fabricCanvas.add(textObj);
                        fabricCanvas.setActiveObject(textObj);
                        textObj.enterEditing();
                        textObj.selectAll();
                    };
                    pdfTextLayer.appendChild(div);
                });

                pageIndicator.innerText = `${pageNum} / ${totalEditPages}`;
                btnPrevPage.disabled = pageNum <= 1;
                btnNextPage.disabled = pageNum >= totalEditPages;

            } catch(e) {
                console.error(e);
            } finally {
                isRenderingPage = false;
            }
        }

        btnPrevPage.addEventListener('click', async () => {
            if (currentPageNum <= 1) return;
            await saveCurrentPageData();
            currentPageNum--;
            renderEditPage(currentPageNum);
        });

        btnNextPage.addEventListener('click', async () => {
            if (currentPageNum >= totalEditPages) return;
            await saveCurrentPageData();
            currentPageNum++;
            renderEditPage(currentPageNum);
        });

        editSaveBtn.addEventListener('click', async () => {
            try {
                editSaveBtn.disabled = true;
                editSaveBtn.innerHTML = `<svg class="animate-spin h-4 w-4 mr-2 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Saving...`;
                editActionArea.classList.remove('hidden');
                editDownloadBtn.classList.add('hidden');
                editStatus.innerText = 'Compiling your edits...';

                await saveCurrentPageData();

                const { PDFDocument, rgb } = PDFLib;
                
                const newBuffer = await editPdfFile.arrayBuffer(); 
                const finalDoc = await PDFDocument.load(newBuffer);
                const pdfPages = finalDoc.getPages();

                for (let i = 0; i < pdfPages.length; i++) {
                    const pgNum = i + 1;
                    const pData = allPageData[pgNum];
                    const pdfPage = pdfPages[i];

                    if (!pData) continue; 

                    if (pData.erasedBoxes && pData.erasedBoxes.length > 0) {
                        pData.erasedBoxes.forEach(box => {
                            pdfPage.drawRectangle({
                                x: box.x,
                                y: box.y,
                                width: box.width,
                                height: box.height,
                                color: rgb(1, 1, 1) 
                            });
                        });
                    }

                    if (pData.fabricJson) {
                        const vp = await (await editPdfDoc.getPage(pgNum)).getViewport({scale: currentScale});
                        
                        const dummyCanvas = document.createElement('canvas');
                        dummyCanvas.width = vp.width; dummyCanvas.height = vp.height;
                        const offCanvas = new fabric.StaticCanvas(dummyCanvas, { width: vp.width, height: vp.height });
                        await new Promise(res => offCanvas.loadFromJSON(pData.fabricJson, res));
                        
                        offCanvas.setBackgroundImage(null, offCanvas.renderAll.bind(offCanvas));
                        
                        if(offCanvas.getObjects().length > 0) {
                            const pngDataUrl = offCanvas.toDataURL({ format: 'png', multiplier: 2 });
                            const pngImage = await finalDoc.embedPng(pngDataUrl);
                            
                            pdfPage.drawImage(pngImage, {
                                x: 0,
                                y: 0,
                                width: pdfPage.getWidth(),
                                height: pdfPage.getHeight(),
                            });
                        }
                    }
                }

                editStatus.innerText = 'Finalizing document...';
                const pdfBytes = await finalDoc.save();
                const blob = new Blob([pdfBytes], { type: 'application/pdf' });
                
                editDownloadBtn.href = URL.createObjectURL(blob);
                editDownloadBtn.download = `Edited_${document.getElementById('edit-upload-text').innerText}`;
                
                editStatus.innerHTML = `<span class="text-green-600 font-bold">Successfully saved!</span> Click below to download.`;
                editDownloadBtn.classList.remove('hidden');
                editDownloadBtn.classList.add('flex');

            } catch (err) {
                console.error(err);
                editStatus.innerHTML = `<span class="text-red-500 font-bold">Error compiling PDF.</span>`;
            } finally {
                editSaveBtn.disabled = false;
                editSaveBtn.innerHTML = `<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path></svg> Save PDF`;
            }
        });

        // ==========================================
        // --- PDF TO JPG WORKSPACE LOGIC ---
        // ==========================================
        const p2jDropzone = document.getElementById('p2j-dropzone');
        const p2jFileInput = document.getElementById('p2j-file-input');
        const p2jUploadText = document.getElementById('p2j-upload-text');
        const p2jUploadSubtext = document.getElementById('p2j-upload-subtext');
        const p2jWorkspace = document.getElementById('p2j-workspace');
        
        const doP2jBtn = document.getElementById('do-p2j-btn');
        const p2jDownloadBtn = document.getElementById('p2j-download-btn');
        const p2jStatus = document.getElementById('p2j-status');

        let currentP2jFile = null;

        function resetP2jWorkspace() {
            currentP2jFile = null; 
            p2jFileInput.value = '';
            p2jWorkspace.classList.add('hidden'); 
            p2jDownloadBtn.classList.add('hidden'); 
            p2jStatus.innerText = '';
            p2jUploadText.innerText = 'Click to select a PDF file'; 
            p2jUploadSubtext.innerText = 'or drag and drop it here';
            const defaultRadio = document.querySelector('input[name="p2j_mode"][value="pages"]');
            if(defaultRadio) defaultRadio.checked = true;
        }

        function handleP2jFile(file) {
            if (!file || file.type !== 'application/pdf') return alert('Please upload a valid PDF file.');
            currentP2jFile = file;
            p2jUploadText.innerText = file.name;
            p2jUploadSubtext.innerText = `Ready to convert (${(file.size / (1024 * 1024)).toFixed(2)} MB)`;
            p2jWorkspace.classList.remove('hidden'); 
            p2jDownloadBtn.classList.add('hidden'); 
            p2jStatus.innerText = '';
        }

        p2jFileInput.addEventListener('change', (e) => handleP2jFile(e.target.files[0]));
        p2jDropzone.addEventListener('dragover', (e) => { e.preventDefault(); p2jDropzone.classList.add('bg-blue-50', 'border-blue-500'); });
        p2jDropzone.addEventListener('dragleave', () => p2jDropzone.classList.remove('bg-blue-50', 'border-blue-500'));
        p2jDropzone.addEventListener('drop', (e) => { e.preventDefault(); p2jDropzone.classList.remove('bg-blue-50', 'border-blue-500'); if(e.dataTransfer.files[0]) handleP2jFile(e.dataTransfer.files[0]); });

        doP2jBtn.addEventListener('click', async () => {
            if (!currentP2jFile) return;
            try {
                doP2jBtn.disabled = true;
                doP2jBtn.innerHTML = `<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Processing...`;
                p2jDownloadBtn.classList.add('hidden');
                
                const selectedMode = document.querySelector('input[name="p2j_mode"]:checked').value;
                const pdf = await pdfjsLib.getDocument(new Uint8Array(await currentP2jFile.arrayBuffer())).promise;
                const zip = new JSZip();
                
                if (selectedMode === 'pages') {
                    for (let i = 1; i <= pdf.numPages; i++) {
                        p2jStatus.innerText = `Converting page ${i} of ${pdf.numPages}...`;
                        const page = await pdf.getPage(i);
                        const viewport = page.getViewport({ scale: 2.5 }); 
                        const canvas = document.createElement('canvas');
                        canvas.width = viewport.width; canvas.height = viewport.height;
                        const ctx = canvas.getContext('2d');
                        
                        ctx.fillStyle = "#ffffff";
                        ctx.fillRect(0, 0, canvas.width, canvas.height);
                        
                        await page.render({ canvasContext: ctx, viewport: viewport }).promise;
                        const dataUrl = canvas.toDataURL('image/jpeg', 0.95);
                        zip.file(`Page_${i}.jpg`, dataUrl.split(',')[1], {base64: true});
                    }
                    p2jStatus.innerHTML = `<span class="text-[#b48c18] font-bold">Successfully converted ${pdf.numPages} pages!</span> Zipping files...`;
                } 
                else if (selectedMode === 'extract') {
                    let imgCount = 0;
                    for (let i = 1; i <= pdf.numPages; i++) {
                        p2jStatus.innerText = `Scanning page ${i} of ${pdf.numPages} for images...`;
                        const page = await pdf.getPage(i);
                        const ops = await page.getOperatorList();
                        
                        for (let j = 0; j < ops.fnArray.length; j++) {
                            const args = ops.argsArray[j];
                            if (args && args.length > 0 && typeof args[0] === 'string') {
                                try {
                                    const imgObj = page.objs.get(args[0]);
                                    if (imgObj && (imgObj.bitmap || imgObj.data)) {
                                        const canvas = document.createElement('canvas');
                                        const ctx = canvas.getContext('2d');
                                        
                                        if (imgObj.bitmap) {
                                            canvas.width = imgObj.bitmap.width; canvas.height = imgObj.bitmap.height;
                                            ctx.drawImage(imgObj.bitmap, 0, 0);
                                        } else if (imgObj.data) {
                                            canvas.width = imgObj.width; canvas.height = imgObj.height;
                                            const imgData = ctx.createImageData(imgObj.width, imgObj.height);
                                            
                                            if (imgObj.data.length === imgObj.width * imgObj.height * 4) {
                                                imgData.data.set(imgObj.data);
                                            } else {
                                                let dataIdx = 0;
                                                const channels = imgObj.data.length === (imgObj.width * imgObj.height * 3) ? 3 : 1;
                                                for (let k = 0; k < imgData.data.length; k += 4) {
                                                    imgData.data[k] = imgObj.data[dataIdx++];
                                                    imgData.data[k+1] = channels === 3 ? imgObj.data[dataIdx++] : imgData.data[k];
                                                    imgData.data[k+2] = channels === 3 ? imgObj.data[dataIdx++] : imgData.data[k];
                                                    imgData.data[k+3] = 255;
                                                }
                                            }
                                            ctx.putImageData(imgData, 0, 0);
                                        }
                                        const dataUrl = canvas.toDataURL('image/jpeg', 1.0);
                                        imgCount++;
                                        zip.file(`Extracted_Image_${imgCount}.jpg`, dataUrl.split(',')[1], {base64: true});
                                    }
                                } catch(e) { } 
                            }
                        }
                    }
                    if (imgCount === 0) throw new Error("No embedded images were found in this document.");
                    p2jStatus.innerHTML = `<span class="text-[#b48c18] font-bold">Successfully extracted ${imgCount} images!</span> Zipping files...`;
                }

                const blob = await zip.generateAsync({ type: "blob" });
                p2jDownloadBtn.href = URL.createObjectURL(blob);
                const fileBaseName = currentP2jFile.name.replace(/\.[^/.]+$/, "");
                p2jDownloadBtn.download = selectedMode === 'pages' ? `${fileBaseName}_Pages.zip` : `${fileBaseName}_Images.zip`;
                
                p2jDownloadBtn.classList.remove('hidden'); 
                p2jDownloadBtn.classList.add('flex');
                p2jStatus.innerHTML = `<span class="text-green-600 font-bold">Ready!</span> Click below to download your ZIP file.`;

            } catch (err) { 
                console.error(err); 
                p2jStatus.innerHTML = `<span class="text-red-500 font-bold">Error:</span> ${err.message || 'An error occurred during conversion.'}`; 
            } finally { 
                doP2jBtn.disabled = false; 
                doP2jBtn.innerText = 'Convert to JPG'; 
            }
        });

        // ==========================================
        // --- JPG TO PDF WORKSPACE LOGIC ---
        // ==========================================
        const j2pDropzone = document.getElementById('j2p-dropzone');
        const j2pFileInput = document.getElementById('j2p-file-input');
        const j2pWorkspace = document.getElementById('j2p-workspace');
        const j2pImageList = document.getElementById('j2p-image-list');
        
        const doJ2pBtn = document.getElementById('do-j2p-btn');
        const j2pStatus = document.getElementById('j2p-status');
        const j2pDownloadBtn = document.getElementById('j2p-download-btn');
        const j2pDownloadText = document.getElementById('j2p-download-text');
        
        const j2pOrientBtns = document.querySelectorAll('.j2p-setting-btn[data-type="orientation"]');
        const j2pSizeSelect = document.getElementById('j2p-size-select');
        const j2pMarginSelect = document.getElementById('j2p-margin-select');
        const j2pMergeCheckbox = document.getElementById('j2p-merge-checkbox');

        let j2pFilesMap = new Map();
        let j2pFileIdCounter = 0;
        let j2pSettings = { orientation: 'portrait', size: 'a4', margin: 'small' };

        function updateJ2pPreviews() {
            const items = j2pImageList.querySelectorAll('.j2p-page-preview');
            items.forEach(item => {
                item.className = 'j2p-page-preview rounded border border-gray-200';
                if(j2pSettings.size !== 'fit') item.classList.add(`j2p-orient-${j2pSettings.orientation}`);
                else item.classList.add(`j2p-orient-fit`);
                item.classList.add(`j2p-margin-${j2pSettings.margin}`);
            });
        }

        j2pOrientBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                j2pOrientBtns.forEach(b => {
                    b.classList.remove('bg-blue-50', 'border-blue-500', 'text-blue-700');
                    b.classList.add('border-gray-300');
                });
                e.target.classList.remove('border-gray-300');
                e.target.classList.add('bg-blue-50', 'border-blue-500', 'text-blue-700');
                j2pSettings.orientation = e.target.dataset.val;
                updateJ2pPreviews();
            });
        });
        
        j2pSizeSelect.addEventListener('change', (e) => { j2pSettings.size = e.target.value; updateJ2pPreviews(); });
        j2pMarginSelect.addEventListener('change', (e) => { j2pSettings.margin = e.target.value; updateJ2pPreviews(); });

        function resetJ2pWorkspace() {
            j2pFilesMap.clear();
            j2pImageList.innerHTML = '';
            j2pFileInput.value = '';
            j2pWorkspace.classList.add('hidden');
            j2pDownloadBtn.classList.add('hidden');
            j2pStatus.innerText = '';
        }

        function handleJ2pFiles(files) {
            Array.from(files).forEach(file => {
                if (file.type !== 'image/jpeg' && file.type !== 'image/jpg' && file.type !== 'image/png') return alert(`${file.name} is not a valid Image file.`);
                
                const id = j2pFileIdCounter++;
                j2pFilesMap.set(id, file);
                
                const li = document.createElement('li');
                li.setAttribute('data-id', id);
                li.className = 'relative group cursor-grab';
                
                const url = URL.createObjectURL(file);
                
                li.innerHTML = `
                    <div class="j2p-page-preview rounded border border-gray-200 j2p-orient-${j2pSettings.size !== 'fit' ? j2pSettings.orientation : 'fit'} j2p-margin-${j2pSettings.margin}">
                        <img src="${url}" class="pointer-events-none" />
                    </div>
                    <button class="j2p-remove-btn absolute -top-2 -right-2 bg-white text-red-500 hover:text-white hover:bg-red-500 rounded-full p-1 shadow-md opacity-0 group-hover:opacity-100 transition-all">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                    <p class="text-[10px] text-gray-500 truncate mt-1 text-center font-medium">${file.name}</p>
                `;
                j2pImageList.appendChild(li);
            });
            
            if (j2pFilesMap.size > 0) j2pWorkspace.classList.remove('hidden');
            j2pDownloadBtn.classList.add('hidden');
            j2pStatus.innerText = '';
        }

        j2pFileInput.addEventListener('change', (e) => handleJ2pFiles(e.target.files));
        j2pDropzone.addEventListener('dragover', (e) => { e.preventDefault(); j2pDropzone.classList.add('bg-blue-50', 'border-blue-500'); });
        j2pDropzone.addEventListener('dragleave', () => j2pDropzone.classList.remove('bg-blue-50', 'border-blue-500'));
        j2pDropzone.addEventListener('drop', (e) => { e.preventDefault(); j2pDropzone.classList.remove('bg-blue-50', 'border-blue-500'); handleJ2pFiles(e.dataTransfer.files); });

        j2pImageList.addEventListener('click', (e) => {
            const removeBtn = e.target.closest('.j2p-remove-btn');
            if (removeBtn) {
                const li = removeBtn.closest('li');
                j2pFilesMap.delete(parseInt(li.getAttribute('data-id')));
                li.remove();
                if (j2pFilesMap.size === 0) j2pWorkspace.classList.add('hidden');
            }
        });

        new Sortable(j2pImageList, { animation: 150, ghostClass: 'opacity-50', cursor: 'grabbing' });

        doJ2pBtn.addEventListener('click', async () => {
            if (j2pFilesMap.size === 0) return;
            try {
                doJ2pBtn.disabled = true;
                doJ2pBtn.innerHTML = `<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Generating PDF...`;
                j2pStatus.innerText = 'Processing images...';
                j2pDownloadBtn.classList.add('hidden');

                const { PDFDocument } = PDFLib;
                
                const A4 = [595.28, 841.89];
                const LETTER = [612, 792];
                
                const isMerge = j2pMergeCheckbox.checked;
                let mergedPdf = null;
                const zip = new JSZip();

                if (isMerge) mergedPdf = await PDFDocument.create();

                const listItems = j2pImageList.querySelectorAll('li');
                
                for (let i = 0; i < listItems.length; i++) {
                    const li = listItems[i];
                    const file = j2pFilesMap.get(parseInt(li.getAttribute('data-id')));
                    
                    const pdfDoc = isMerge ? mergedPdf : await PDFDocument.create();
                    const imgBytes = await file.arrayBuffer();
                    
                    let image;
                    try { 
                        if(file.type === 'image/png') image = await pdfDoc.embedPng(imgBytes); 
                        else image = await pdfDoc.embedJpg(imgBytes);
                    } catch(e) { console.error(`Error embedding ${file.name}`, e); continue; }

                    let pageW, pageH;
                    if (j2pSettings.size === 'fit') {
                        pageW = image.width;
                        pageH = image.height;
                    } else {
                        const dims = j2pSettings.size === 'a4' ? A4 : LETTER;
                        if (j2pSettings.orientation === 'landscape') { pageW = dims[1]; pageH = dims[0]; }
                        else { pageW = dims[0]; pageH = dims[1]; }
                    }

                    let marginPts = 0;
                    if (j2pSettings.margin === 'small') marginPts = 0.75 * 72;
                    else if (j2pSettings.margin === 'big') marginPts = 0.5 * 72; 

                    const page = pdfDoc.addPage([pageW, pageH]);
                    
                    const availW = pageW - (marginPts * 2);
                    const availH = pageH - (marginPts * 2);
                    
                    const scale = Math.min(availW / image.width, availH / image.height);
                    const drawW = image.width * scale;
                    const drawH = image.height * scale;
                    
                    const x = (pageW - drawW) / 2;
                    const y = (pageH - drawH) / 2;

                    page.drawImage(image, { x, y, width: drawW, height: drawH });

                    if (!isMerge) {
                        const pdfBytes = await pdfDoc.save();
                        zip.file(`${file.name.replace(/\.[^/.]+$/, "")}.pdf`, pdfBytes);
                    }
                }

                let finalBlob, finalName;
                
                if (isMerge) {
                    const pdfBytes = await mergedPdf.save();
                    finalBlob = new Blob([pdfBytes], { type: 'application/pdf' });
                    finalName = `Merged_Images.pdf`;
                    j2pDownloadText.innerText = "Download PDF";
                } else {
                    j2pStatus.innerText = 'Zipping files...';
                    finalBlob = await zip.generateAsync({ type: "blob" });
                    finalName = `Converted_PDFs.zip`;
                    j2pDownloadText.innerText = "Download ZIP File";
                }

                j2pDownloadBtn.href = URL.createObjectURL(finalBlob);
                j2pDownloadBtn.download = finalName;
                
                j2pDownloadBtn.classList.remove('hidden');
                j2pDownloadBtn.classList.add('flex'); 
                j2pStatus.innerHTML = `<span class="text-green-600 font-bold">Success!</span> Click the button below to download.`;

            } catch (error) {
                console.error("J2P error:", error);
                j2pStatus.innerHTML = `<span class="text-red-500 font-bold">Error:</span> Could not generate PDF.`;
            } finally {
                doJ2pBtn.disabled = false;
                doJ2pBtn.innerText = 'Generate PDF';
            }
        });

        // ==========================================
        // --- SIGN PDF WORKSPACE LOGIC ---
        // ==========================================
        const signDropzone = document.getElementById('sign-dropzone');
        const signFileInput = document.getElementById('sign-file-input');
        const signSetupArea = document.getElementById('sign-setup-area');
        const signWorkspace = document.getElementById('sign-workspace');
        
        const signPrevPage = document.getElementById('sign-prev-page');
        const signNextPage = document.getElementById('sign-next-page');
        const signPageIndicator = document.getElementById('sign-page-indicator');
        const signSaveBtn = document.getElementById('sign-save-btn');
        const signActionArea = document.getElementById('sign-action-area');
        const signDownloadBtn = document.getElementById('sign-download-btn');
        const signStatus = document.getElementById('sign-status');

        const addTextSignBtn = document.getElementById('add-text-sign-btn');
        const signTextInput = document.getElementById('sign-text-input');
        const signFontSelect = document.getElementById('sign-font-select');
        const signColorInput = document.getElementById('sign-color');
        const signImageInput = document.getElementById('sign-image-input');
        const signDeleteBtn = document.getElementById('sign-delete-obj');
        const signAllPagesCb = document.getElementById('sign-all-pages-cb');

        let signPdfDoc = null; 
        let signPdfFile = null; 
        let signFabricCanvas = null;
        let signCurrentPageNum = 1;
        let signTotalPages = 0;
        let signAllPageData = {}; 
        let signIsRenderingPage = false;
        let signCurrentScale = 1.5;

        function resetSignWorkspace() {
            signPdfFile = null; signPdfDoc = null; signAllPageData = {};
            signCurrentPageNum = 1; signTotalPages = 0;
            signFileInput.value = ''; 
            signSetupArea.classList.remove('hidden');
            signWorkspace.classList.add('hidden');
            signActionArea.classList.add('hidden');
            signAllPagesCb.checked = false;
            if (signFabricCanvas) { signFabricCanvas.dispose(); signFabricCanvas = null; }
        }

        async function handleSignFile(file) {
            if (!file || file.type !== 'application/pdf') return alert('Please upload a valid PDF file.');
            try {
                document.getElementById('sign-upload-text').innerText = 'Loading secure viewer...';
                signPdfFile = file; 
                const buffer = await file.arrayBuffer(); 
                signPdfDoc = await pdfjsLib.getDocument(new Uint8Array(buffer)).promise;
                signTotalPages = signPdfDoc.numPages;
                
                signSetupArea.classList.add('hidden');
                signWorkspace.classList.remove('hidden');
                signActionArea.classList.add('hidden');
                
                initSignFabricCanvas();
                await renderSignPage(signCurrentPageNum);
            } catch (err) { alert("Failed to read PDF. It might be corrupted or encrypted."); resetSignWorkspace(); }
        }

        signFileInput.addEventListener('change', (e) => handleSignFile(e.target.files[0]));
        signDropzone.addEventListener('dragover', (e) => { e.preventDefault(); signDropzone.classList.add('bg-blue-50', 'border-blue-500'); });
        signDropzone.addEventListener('dragleave', () => signDropzone.classList.remove('bg-blue-50', 'border-blue-500'));
        signDropzone.addEventListener('drop', (e) => { e.preventDefault(); signDropzone.classList.remove('bg-blue-50', 'border-blue-500'); if(e.dataTransfer.files[0]) handleSignFile(e.dataTransfer.files[0]); });

        function initSignFabricCanvas() {
            signFabricCanvas = new fabric.Canvas('sign-fabric-canvas', {
                selection: true,
                preserveObjectStacking: true
            });
            
            signFabricCanvas.on('selection:created', () => signDeleteBtn.classList.remove('hidden'));
            signFabricCanvas.on('selection:updated', () => signDeleteBtn.classList.remove('hidden'));
            signFabricCanvas.on('selection:cleared', () => signDeleteBtn.classList.add('hidden'));
        }

        addTextSignBtn.addEventListener('click', async () => {
            if (!signFabricCanvas) return;
            const fontName = signFontSelect.value;
            const textVal = signTextInput.value || 'Signature';

            try { await document.fonts.load(`48px "${fontName}"`); } catch(e){}

            const text = new fabric.IText(textVal, {
                left: signFabricCanvas.width / 2 - 50,
                top: signFabricCanvas.height / 2 - 25,
                fontFamily: fontName,
                fontSize: 64,
                fill: signColorInput.value
            });
            signFabricCanvas.add(text);
            signFabricCanvas.setActiveObject(text);
        });

        signImageInput.addEventListener('change', (e) => {
            if (!signFabricCanvas) return;
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = function(f) {
                fabric.Image.fromURL(f.target.result, function(img) {
                    img.scaleToWidth(Math.min(300, signFabricCanvas.width / 2));
                    img.set({
                        left: signFabricCanvas.width / 2 - img.getScaledWidth() / 2,
                        top: signFabricCanvas.height / 2 - img.getScaledHeight() / 2
                    });
                    signFabricCanvas.add(img);
                    signFabricCanvas.setActiveObject(img);
                });
            };
            reader.readAsDataURL(file);
            signImageInput.value = ''; 
        });

        signDeleteBtn.addEventListener('click', () => {
            if (!signFabricCanvas) return;
            const actives = signFabricCanvas.getActiveObjects();
            if (actives.length) { signFabricCanvas.discardActiveObject(); actives.forEach(obj => signFabricCanvas.remove(obj)); }
            signDeleteBtn.classList.add('hidden');
        });

        async function saveSignCurrentPageData() {
            if (!signFabricCanvas) return;
            if (!signAllPageData[signCurrentPageNum]) signAllPageData[signCurrentPageNum] = {};
            const bg = signFabricCanvas.backgroundImage;
            signFabricCanvas.setBackgroundImage(null, () => {});
            signAllPageData[signCurrentPageNum].fabricJson = JSON.stringify(signFabricCanvas.toJSON());
            signFabricCanvas.setBackgroundImage(bg, () => {});
        }

        async function renderSignPage(pageNum) {
            if (signIsRenderingPage) return;
            signIsRenderingPage = true;
            
            try {
                const page = await signPdfDoc.getPage(pageNum);
                const viewport = page.getViewport({ scale: signCurrentScale });
                
                const wrapper = document.getElementById('sign-fabric-wrapper');
                wrapper.style.width = `${viewport.width}px`;
                wrapper.style.height = `${viewport.height}px`;
                
                const bgCanvas = document.createElement('canvas');
                bgCanvas.width = viewport.width;
                bgCanvas.height = viewport.height;
                const ctx = bgCanvas.getContext('2d');
                await page.render({ canvasContext: ctx, viewport: viewport }).promise;

                signFabricCanvas.setWidth(viewport.width);
                signFabricCanvas.setHeight(viewport.height);
                signFabricCanvas.clear(); 
                
                fabric.Image.fromURL(bgCanvas.toDataURL('image/jpeg', 1.0), function(img) {
                    signFabricCanvas.setBackgroundImage(img, signFabricCanvas.renderAll.bind(signFabricCanvas));
                });

                if (signAllPageData[pageNum] && signAllPageData[pageNum].fabricJson) {
                    signFabricCanvas.loadFromJSON(signAllPageData[pageNum].fabricJson, () => {
                        signFabricCanvas.renderAll();
                    });
                }

                signPageIndicator.innerText = `${pageNum} / ${signTotalPages}`;
                signPrevPage.disabled = pageNum <= 1;
                signNextPage.disabled = pageNum >= signTotalPages;

            } catch(e) {
                console.error(e);
            } finally {
                signIsRenderingPage = false;
            }
        }

        signPrevPage.addEventListener('click', async () => {
            if (signCurrentPageNum <= 1) return;
            await saveSignCurrentPageData();
            signCurrentPageNum--;
            renderSignPage(signCurrentPageNum);
        });

        signNextPage.addEventListener('click', async () => {
            if (signCurrentPageNum >= signTotalPages) return;
            await saveSignCurrentPageData();
            signCurrentPageNum++;
            renderSignPage(signCurrentPageNum);
        });

        signSaveBtn.addEventListener('click', async () => {
            try {
                signSaveBtn.disabled = true;
                signSaveBtn.innerHTML = `<svg class="animate-spin h-4 w-4 mr-2 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Saving...`;
                signActionArea.classList.remove('hidden');
                signDownloadBtn.classList.add('hidden');
                signStatus.innerText = 'Applying signatures...';

                await saveSignCurrentPageData();

                const { PDFDocument } = PDFLib;
                const newBuffer = await signPdfFile.arrayBuffer(); 
                const finalDoc = await PDFDocument.load(newBuffer);
                const pdfPages = finalDoc.getPages();
                
                const isSignAllPages = signAllPagesCb.checked;
                let masterPngImage = null;

                if (isSignAllPages) {
                    const vp = await (await signPdfDoc.getPage(1)).getViewport({scale: signCurrentScale});
                    const dummyCanvas = document.createElement('canvas');
                    dummyCanvas.width = vp.width; dummyCanvas.height = vp.height;
                    const offCanvas = new fabric.StaticCanvas(dummyCanvas, { width: vp.width, height: vp.height });

                    for (let p in signAllPageData) {
                        if (signAllPageData[p].fabricJson) {
                            const parsed = JSON.parse(signAllPageData[p].fabricJson);
                            if (parsed.objects && parsed.objects.length > 0) {
                                await new Promise(res => {
                                    fabric.util.enlivenObjects(parsed.objects, function(objs) {
                                        objs.forEach(o => offCanvas.add(o));
                                        res();
                                    });
                                });
                            }
                        }
                    }
                    offCanvas.renderAll();
                    if (offCanvas.getObjects().length > 0) {
                        const pngDataUrl = offCanvas.toDataURL({ format: 'png', multiplier: 2 });
                        masterPngImage = await finalDoc.embedPng(pngDataUrl);
                    }
                }

                for (let i = 0; i < pdfPages.length; i++) {
                    const pgNum = i + 1;
                    const pdfPage = pdfPages[i];

                    if (isSignAllPages) {
                        if (masterPngImage) {
                            pdfPage.drawImage(masterPngImage, {
                                x: 0, y: 0,
                                width: pdfPage.getWidth(), height: pdfPage.getHeight()
                            });
                        }
                    } else {
                        const pData = signAllPageData[pgNum];
                        if (pData && pData.fabricJson) {
                            const vp = await (await signPdfDoc.getPage(pgNum)).getViewport({scale: signCurrentScale});
                            const dummyCanvas = document.createElement('canvas');
                            dummyCanvas.width = vp.width; dummyCanvas.height = vp.height;
                            const offCanvas = new fabric.StaticCanvas(dummyCanvas, { width: vp.width, height: vp.height });
                            
                            await new Promise(res => offCanvas.loadFromJSON(pData.fabricJson, res));
                            offCanvas.setBackgroundImage(null, offCanvas.renderAll.bind(offCanvas));
                            
                            if (offCanvas.getObjects().length > 0) {
                                const pngDataUrl = offCanvas.toDataURL({ format: 'png', multiplier: 2 });
                                const pngImage = await finalDoc.embedPng(pngDataUrl);
                                pdfPage.drawImage(pngImage, {
                                    x: 0, y: 0,
                                    width: pdfPage.getWidth(), height: pdfPage.getHeight(),
                                });
                            }
                        }
                    }
                }

                signStatus.innerText = 'Finalizing document...';
                const pdfBytes = await finalDoc.save();
                const blob = new Blob([pdfBytes], { type: 'application/pdf' });
                
                signDownloadBtn.href = URL.createObjectURL(blob);
                signDownloadBtn.download = `Signed_${document.getElementById('sign-upload-text').innerText}`;
                
                signStatus.innerHTML = `<span class="text-green-600 font-bold">Successfully signed!</span> Click below to download.`;
                signDownloadBtn.classList.remove('hidden');
                signDownloadBtn.classList.add('flex');

            } catch (err) {
                console.error(err);
                signStatus.innerHTML = `<span class="text-red-500 font-bold">Error signing PDF.</span>`;
            } finally {
                signSaveBtn.disabled = false;
                signSaveBtn.innerHTML = `<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path></svg> Save PDF`;
            }
        });

        // ==========================================
        // --- WATERMARK PDF WORKSPACE LOGIC ---
        // ==========================================
        const wmDropzone = document.getElementById('wm-dropzone');
        const wmFileInput = document.getElementById('wm-file-input');
        const wmSetupArea = document.getElementById('wm-setup-area');
        const wmWorkspace = document.getElementById('wm-workspace');

        const tabWmText = document.getElementById('tab-wm-text');
        const tabWmImage = document.getElementById('tab-wm-image');
        const wmTextTools = document.getElementById('wm-text-tools');
        const wmImageTools = document.getElementById('wm-image-tools');

        const wmTextInput = document.getElementById('wm-text-input');
        const wmFontSize = document.getElementById('wm-font-size');
        const wmColor = document.getElementById('wm-color');
        const wmImageUpload = document.getElementById('wm-image-upload');
        const wmOpacity = document.getElementById('wm-opacity');
        const wmOpacityVal = document.getElementById('wm-opacity-val');
        const wmRotation = document.getElementById('wm-rotation');
        const wmRotationVal = document.getElementById('wm-rotation-val');
        const wmPagesInput = document.getElementById('wm-pages-input');

        const wmSaveBtn = document.getElementById('wm-save-btn');
        const wmActionArea = document.getElementById('wm-action-area');
        const wmDownloadBtn = document.getElementById('wm-download-btn');
        const wmStatus = document.getElementById('wm-status');

        let wmPdfDoc = null;
        let wmPdfFile = null;
        let wmFabricCanvas = null;
        let wmTotalPages = 0;
        let wmCurrentScale = 1.0;
        let wmWatermarkObj = null;

        function resetWmWorkspace() {
            wmPdfFile = null; wmPdfDoc = null; wmTotalPages = 0; wmWatermarkObj = null;
            wmFileInput.value = '';
            wmSetupArea.classList.remove('hidden');
            wmWorkspace.classList.add('hidden');
            wmActionArea.classList.add('hidden');
            if (wmFabricCanvas) { wmFabricCanvas.dispose(); wmFabricCanvas = null; }
            setWmTab('text');
        }

        async function handleWmFile(file) {
            if (!file || file.type !== 'application/pdf') return alert('Please upload a valid PDF file.');
            try {
                document.getElementById('wm-upload-text').innerText = 'Loading preview...';
                wmPdfFile = file;
                const buffer = await file.arrayBuffer();
                wmPdfDoc = await pdfjsLib.getDocument(new Uint8Array(buffer)).promise;
                wmTotalPages = wmPdfDoc.numPages;

                wmSetupArea.classList.add('hidden');
                wmWorkspace.classList.remove('hidden');
                wmActionArea.classList.add('hidden');

                initWmFabricCanvas();
                await renderWmPreviewPage();
            } catch (err) { alert("Failed to load PDF preview."); resetWmWorkspace(); }
        }

        wmFileInput.addEventListener('change', (e) => handleWmFile(e.target.files[0]));
        wmDropzone.addEventListener('dragover', (e) => { e.preventDefault(); wmDropzone.classList.add('bg-blue-50', 'border-blue-500'); });
        wmDropzone.addEventListener('dragleave', () => wmDropzone.classList.remove('bg-blue-50', 'border-blue-500'));
        wmDropzone.addEventListener('drop', (e) => { e.preventDefault(); wmDropzone.classList.remove('bg-blue-50', 'border-blue-500'); if (e.dataTransfer.files[0]) handleWmFile(e.dataTransfer.files[0]); });

        function setWmTab(mode) {
            if (mode === 'text') {
                tabWmText.className = "px-6 py-3 font-bold text-sm border-b-2 border-blue-500 text-blue-500 transition-colors";
                tabWmImage.className = "px-6 py-3 font-bold text-sm border-b-2 border-transparent transition-colors" ; tabWmImage.style.color = "var(--text-secondary)";
                wmTextTools.classList.replace('hidden', 'flex');
                wmImageTools.classList.replace('flex', 'hidden');
                createTextWatermark();
            } else {
                tabWmImage.className = "px-6 py-3 font-bold text-sm border-b-2 border-blue-500 text-blue-500 transition-colors";
                tabWmText.className = "px-6 py-3 font-bold text-sm border-b-2 border-transparent transition-colors"; tabWmText.style.color = "var(--text-secondary)";
                wmImageTools.classList.replace('hidden', 'flex');
                wmTextTools.classList.replace('flex', 'hidden');
                // Remove text watermark, keep existing image if any, or wait for upload
                if (wmFabricCanvas && wmWatermarkObj && wmWatermarkObj.type === 'i-text') {
                    wmFabricCanvas.remove(wmWatermarkObj);
                    wmWatermarkObj = null;
                }
            }
        }
        tabWmText.addEventListener('click', () => setWmTab('text'));
        tabWmImage.addEventListener('click', () => setWmTab('image'));

        function initWmFabricCanvas() {
            wmFabricCanvas = new fabric.Canvas('wm-fabric-canvas', {
                selection: false, // only interacting with one object
                preserveObjectStacking: true
            });
            
            // Sync controls when object is moved/scaled/rotated via mouse
            wmFabricCanvas.on('object:modified', syncWmControlsToObj);
            wmFabricCanvas.on('object:rotating', syncWmControlsToObj);
            wmFabricCanvas.on('object:scaling', syncWmControlsToObj);
        }

        async function renderWmPreviewPage() {
            try {
                // Show preview of Page 1
                const page = await wmPdfDoc.getPage(1);
                const viewport = page.getViewport({ scale: wmCurrentScale });
                
                const wrapper = document.getElementById('wm-fabric-wrapper');
                wrapper.style.width = `${viewport.width}px`;
                wrapper.style.height = `${viewport.height}px`;
                
                const bgCanvas = document.createElement('canvas');
                bgCanvas.width = viewport.width;
                bgCanvas.height = viewport.height;
                const ctx = bgCanvas.getContext('2d');
                await page.render({ canvasContext: ctx, viewport: viewport }).promise;

                wmFabricCanvas.setWidth(viewport.width);
                wmFabricCanvas.setHeight(viewport.height);
                wmFabricCanvas.clear();
                
                fabric.Image.fromURL(bgCanvas.toDataURL('image/jpeg', 1.0), function(img) {
                    wmFabricCanvas.setBackgroundImage(img, wmFabricCanvas.renderAll.bind(wmFabricCanvas));
                    if (!wmWatermarkObj) createTextWatermark();
                });
            } catch(e) { console.error(e); }
        }

        function createTextWatermark() {
            if (!wmFabricCanvas) return;
            if (wmWatermarkObj) wmFabricCanvas.remove(wmWatermarkObj);
            
            wmWatermarkObj = new fabric.IText(wmTextInput.value || 'Confidential', {
                left: wmFabricCanvas.width / 2,
                top: wmFabricCanvas.height / 2,
                originX: 'center',
                originY: 'center',
                fontFamily: 'sans-serif',
                fontSize: parseInt(wmFontSize.value),
                fill: wmColor.value,
                opacity: parseInt(wmOpacity.value) / 100,
                angle: parseInt(wmRotation.value),
                fontWeight: 'bold'
            });
            wmFabricCanvas.add(wmWatermarkObj);
            wmFabricCanvas.setActiveObject(wmWatermarkObj);
        }

        function syncWmControlsToObj() {
            if (!wmWatermarkObj) return;
            // Angle
            let angle = Math.round(wmWatermarkObj.angle % 360);
            if (angle > 180) angle -= 360;
            wmRotation.value = angle;
            wmRotationVal.innerText = `${angle}°`;

            // If it's text, approximate font size scaling if user resized via dragging
            if (wmWatermarkObj.type === 'i-text') {
                const effectiveSize = Math.round(wmWatermarkObj.fontSize * wmWatermarkObj.scaleX);
                wmFontSize.value = effectiveSize;
            }
        }

        function updateWmObjFromControls() {
            if (!wmWatermarkObj) return;
            wmWatermarkObj.set({
                opacity: parseInt(wmOpacity.value) / 100,
                angle: parseInt(wmRotation.value)
            });
            if (wmWatermarkObj.type === 'i-text') {
                wmWatermarkObj.set({
                    text: wmTextInput.value || 'Confidential',
                    fill: wmColor.value,
                    fontSize: parseInt(wmFontSize.value),
                    scaleX: 1, scaleY: 1 // reset scale if size is manually overridden
                });
            }
            wmFabricCanvas.renderAll();
        }

        // Event Listeners for Controls
        wmTextInput.addEventListener('input', updateWmObjFromControls);
        wmFontSize.addEventListener('input', updateWmObjFromControls);
        wmColor.addEventListener('input', updateWmObjFromControls);
        
        wmOpacity.addEventListener('input', (e) => {
            wmOpacityVal.innerText = `${e.target.value}%`;
            updateWmObjFromControls();
        });
        
        wmRotation.addEventListener('input', (e) => {
            wmRotationVal.innerText = `${e.target.value}°`;
            updateWmObjFromControls();
        });

        // Image Watermark Upload
        wmImageUpload.addEventListener('change', (e) => {
            if (!wmFabricCanvas) return;
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = function(f) {
                fabric.Image.fromURL(f.target.result, function(img) {
                    if (wmWatermarkObj) wmFabricCanvas.remove(wmWatermarkObj);
                    
                    img.scaleToWidth(Math.min(400, wmFabricCanvas.width / 1.5));
                    img.set({
                        left: wmFabricCanvas.width / 2,
                        top: wmFabricCanvas.height / 2,
                        originX: 'center',
                        originY: 'center',
                        opacity: parseInt(wmOpacity.value) / 100,
                        angle: parseInt(wmRotation.value)
                    });
                    wmWatermarkObj = img;
                    wmFabricCanvas.add(wmWatermarkObj);
                    wmFabricCanvas.setActiveObject(wmWatermarkObj);
                });
            };
            reader.readAsDataURL(file);
            wmImageUpload.value = '';
        });

        // Export Watermarked PDF
        wmSaveBtn.addEventListener('click', async () => {
            if (!wmWatermarkObj || !wmPdfFile) return;

            try {
                wmSaveBtn.disabled = true;
                wmSaveBtn.innerHTML = `<svg class="animate-spin h-4 w-4 mr-2 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Applying...`;
                wmActionArea.classList.remove('hidden');
                wmDownloadBtn.classList.add('hidden');
                wmStatus.innerText = 'Applying watermark to pages...';

                const targetPages = parsePagesString(wmPagesInput.value, wmTotalPages);
                const finalPages = targetPages.length > 0 ? targetPages : Array.from({length: wmTotalPages}, (_, i) => i); // default all

                const { PDFDocument } = PDFLib;
                const newBuffer = await wmPdfFile.arrayBuffer(); 
                const finalDoc = await PDFDocument.load(newBuffer);
                const pdfPages = finalDoc.getPages();

                // Generate High-Res transparent PNG of the watermark overlay to avoid font embedding complexities
                wmFabricCanvas.discardActiveObject();
                wmFabricCanvas.renderAll();

                const dummyCanvas = document.createElement('canvas');
                dummyCanvas.width = wmFabricCanvas.width; 
                dummyCanvas.height = wmFabricCanvas.height;
                const offCanvas = new fabric.StaticCanvas(dummyCanvas, { width: wmFabricCanvas.width, height: wmFabricCanvas.height });
                
                await new Promise(res => {
                    const json = JSON.stringify(wmFabricCanvas.toJSON());
                    offCanvas.loadFromJSON(json, res);
                });
                
                offCanvas.setBackgroundImage(null, offCanvas.renderAll.bind(offCanvas));
                const pngDataUrl = offCanvas.toDataURL({ format: 'png', multiplier: 2 });
                const wmImageEmbed = await finalDoc.embedPng(pngDataUrl);

                // Apply to targeted pages
                finalPages.forEach(pIdx => {
                    if(pdfPages[pIdx]) {
                        // Drawing full viewport size image over the page maintains relative aspect and positioning
                        pdfPages[pIdx].drawImage(wmImageEmbed, {
                            x: 0,
                            y: 0,
                            width: pdfPages[pIdx].getWidth(),
                            height: pdfPages[pIdx].getHeight(),
                        });
                    }
                });

                wmStatus.innerText = 'Finalizing document...';
                const pdfBytes = await finalDoc.save();
                const blob = new Blob([pdfBytes], { type: 'application/pdf' });
                
                wmDownloadBtn.href = URL.createObjectURL(blob);
                wmDownloadBtn.download = `Watermarked_${document.getElementById('wm-upload-text').innerText}`;
                
                wmStatus.innerHTML = `<span class="text-green-600 font-bold">Successfully watermarked!</span> Click below to download.`;
                wmDownloadBtn.classList.remove('hidden');
                wmDownloadBtn.classList.add('flex');

            } catch (err) {
                console.error(err);
                wmStatus.innerHTML = `<span class="text-red-500 font-bold">Error applying watermark.</span>`;
            } finally {
                wmSaveBtn.disabled = false;
                wmSaveBtn.innerHTML = `<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path></svg> Add Watermark`;
                wmFabricCanvas.setActiveObject(wmWatermarkObj); // re-select
            }
        });

        // ==========================================
        // --- ROTATE PDF WORKSPACE LOGIC ---
        // ==========================================
        const rotDropzone = document.getElementById('rot-dropzone');
        const rotFileInput = document.getElementById('rot-file-input');
        const rotAddMoreInput = document.getElementById('rot-add-more-input');
        const rotFileList = document.getElementById('rot-file-list');
        const rotSelectAll = document.getElementById('rot-select-all');
        const rotRotateSelectedBtn = document.getElementById('rot-rotate-selected-btn');
        
        const doRotBtn = document.getElementById('do-rot-btn');
        const rotDownloadBtn = document.getElementById('rot-download-btn');
        const rotDownloadText = document.getElementById('rot-download-text');
        const rotStatus = document.getElementById('rot-status');
        const rotWorkspace = document.getElementById('rot-workspace');

        let rotFilesMap = new Map();
        let rotFileIdCounter = 0;

        function resetRotWorkspace() {
            rotFilesMap.clear();
            rotFileList.innerHTML = '';
            rotFileInput.value = '';
            rotAddMoreInput.value = '';
            rotWorkspace.classList.add('hidden');
            rotDownloadBtn.classList.add('hidden');
            rotStatus.innerText = '';
            rotSelectAll.checked = false;
        }

        function renderRotateList() {
            rotFileList.innerHTML = '';
            rotFilesMap.forEach((data, id) => {
                const li = document.createElement('li');
                li.className = 'rot-file-item rounded-lg p-3 relative flex flex-col items-center justify-center group hover:shadow-md transition-shadow';
                
                const rotationStyle = `transform: rotate(${data.angle}deg); transition: transform 0.3s ease;`;
                
                li.innerHTML = `
                    <div class="absolute top-2 left-2 z-10">
                        <input type="checkbox" class="rot-item-cb w-4 h-4 text-[#a379c9] rounded border-gray-300 focus:ring-[#a379c9] cursor-pointer" data-id="${id}" ${data.selected ? 'checked' : ''}>
                    </div>
                    <button class="rot-remove-btn absolute top-2 right-2 text-gray-300 hover:text-red-500 transition-colors p-1" data-id="${id}">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                    
                    <div class="w-16 h-20 bg-gray-50 border border-gray-200 shadow-sm flex items-center justify-center mb-3 mt-4" style="${rotationStyle}">
                        <span class="text-xs font-bold text-gray-300 select-none">PDF</span>
                    </div>
                    
                    <p class="text-[11px] font-medium truncate w-full text-center px-1" style="color: var(--text-secondary)" title="${data.file.name}">${data.file.name}</p>
                    <p class="text-[10px] text-center mt-0.5" style="color: var(--text-muted)">${data.angle}°</p>
                    
                    <div class="mt-3 flex w-full">
                        <button class="rot-single-rotate-btn bg-gray-50 border border-gray-200 text-gray-600 hover:text-[#a379c9] hover:bg-purple-50 w-full py-1.5 rounded text-xs transition-colors flex items-center justify-center font-medium" data-id="${id}">
                            <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg> Rotate
                        </button>
                    </div>
                `;
                rotFileList.appendChild(li);
            });
            
            if(rotFilesMap.size > 0) {
                rotWorkspace.classList.remove('hidden');
                rotDownloadBtn.classList.add('hidden');
                rotStatus.innerText = '';
            } else {
                rotWorkspace.classList.add('hidden');
            }
        }

        function handleRotFiles(files) {
            Array.from(files).forEach(file => {
                if (file.type !== 'application/pdf') return alert(`${file.name} is not a valid PDF file.`);
                const id = rotFileIdCounter++;
                rotFilesMap.set(id, { file: file, angle: 0, selected: false });
            });
            renderRotateList();
        }

        rotFileInput.addEventListener('change', (e) => handleRotFiles(e.target.files));
        rotAddMoreInput.addEventListener('change', (e) => handleRotFiles(e.target.files));
        
        rotDropzone.addEventListener('dragover', (e) => { e.preventDefault(); rotDropzone.classList.add('bg-blue-50', 'border-blue-500'); });
        rotDropzone.addEventListener('dragleave', () => rotDropzone.classList.remove('bg-blue-50', 'border-blue-500'));
        rotDropzone.addEventListener('drop', (e) => { e.preventDefault(); rotDropzone.classList.remove('bg-blue-50', 'border-blue-500'); handleRotFiles(e.dataTransfer.files); });

        // Interactions within the list
        rotFileList.addEventListener('change', (e) => {
            if(e.target.classList.contains('rot-item-cb')) {
                const id = parseInt(e.target.dataset.id);
                const data = rotFilesMap.get(id);
                if(data) data.selected = e.target.checked;
            }
        });

        rotSelectAll.addEventListener('change', (e) => {
            const checked = e.target.checked;
            rotFilesMap.forEach(data => data.selected = checked);
            renderRotateList();
        });

        rotRotateSelectedBtn.addEventListener('click', () => {
            rotFilesMap.forEach(data => {
                if(data.selected) data.angle = (data.angle + 90) % 360;
            });
            renderRotateList();
        });

        rotFileList.addEventListener('click', (e) => {
            const rotBtn = e.target.closest('.rot-single-rotate-btn');
            if(rotBtn) {
                const id = parseInt(rotBtn.dataset.id);
                const data = rotFilesMap.get(id);
                if(data) {
                    data.angle = (data.angle + 90) % 360;
                    renderRotateList();
                }
            }
            const rmBtn = e.target.closest('.rot-remove-btn');
            if(rmBtn) {
                const id = parseInt(rmBtn.dataset.id);
                rotFilesMap.delete(id);
                renderRotateList();
            }
        });

        doRotBtn.addEventListener('click', async () => {
            if (rotFilesMap.size === 0) return;
            try {
                doRotBtn.disabled = true;
                doRotBtn.innerHTML = `<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Applying Rotation...`;
                rotStatus.innerText = 'Processing your files...';
                rotDownloadBtn.classList.add('hidden');

                const { PDFDocument, degrees } = PDFLib;
                const zip = new JSZip();

                for (let [id, data] of rotFilesMap.entries()) {
                    const buffer = await data.file.arrayBuffer();
                    const pdfDoc = await PDFDocument.load(buffer);
                    const pages = pdfDoc.getPages();
                    
                    if (data.angle !== 0) {
                        pages.forEach(page => {
                            const currentAngle = page.getRotation().angle;
                            page.setRotation(degrees((currentAngle + data.angle) % 360));
                        });
                    }
                    
                    const pdfBytes = await pdfDoc.save();
                    
                    if (rotFilesMap.size === 1) {
                        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
                        rotDownloadBtn.href = URL.createObjectURL(blob);
                        rotDownloadBtn.download = `Rotated_${data.file.name}`;
                        rotDownloadText.innerText = "Download Rotated PDF";
                    } else {
                        zip.file(`Rotated_${data.file.name}`, pdfBytes);
                    }
                }

                if (rotFilesMap.size > 1) {
                    rotStatus.innerText = 'Zipping files...';
                    const zipBlob = await zip.generateAsync({ type: "blob" });
                    rotDownloadBtn.href = URL.createObjectURL(zipBlob);
                    rotDownloadBtn.download = `Rotated_PDFs.zip`;
                    rotDownloadText.innerText = "Download ZIP File";
                }

                rotDownloadBtn.classList.remove('hidden');
                rotDownloadBtn.classList.add('flex');
                rotStatus.innerHTML = `<span class="text-green-600 font-bold">Success!</span> Click below to download.`;

            } catch (err) {
                console.error("Rotation error:", err);
                rotStatus.innerHTML = `<span class="text-red-500 font-bold">Error:</span> Could not rotate files.`;
            } finally {
                doRotBtn.disabled = false;
                doRotBtn.innerText = 'Apply Rotation';
            }
        });

        // ==========================================
        // --- UNLOCK PDF WORKSPACE LOGIC ---
        // ==========================================
        const unlockDropzone = document.getElementById('unlock-dropzone');
        const unlockFileInput = document.getElementById('unlock-file-input');
        const unlockActionArea = document.getElementById('unlock-action-area');
        const doUnlockBtn = document.getElementById('do-unlock-btn');
        const unlockDownloadBtn = document.getElementById('unlock-download-btn');
        const unlockStatus = document.getElementById('unlock-status');

        let currentUnlockFile = null;

        function resetUnlockWorkspace() {
            currentUnlockFile = null;
            unlockFileInput.value = '';
            unlockActionArea.classList.add('hidden');
            unlockDownloadBtn.classList.add('hidden');
            unlockStatus.innerText = '';
            document.getElementById('unlock-upload-text').innerText = 'Click to select a PDF file';
        }

        function handleUnlockFile(file) {
            if (!file || file.type !== 'application/pdf') return showCustomAlert('Invalid File', 'Please upload a valid PDF file.');
            currentUnlockFile = file;
            document.getElementById('unlock-upload-text').innerText = file.name;
            unlockActionArea.classList.remove('hidden');
            unlockDownloadBtn.classList.add('hidden');
            unlockStatus.innerText = '';
        }

        unlockFileInput.addEventListener('change', (e) => handleUnlockFile(e.target.files[0]));
        unlockDropzone.addEventListener('dragover', (e) => { e.preventDefault(); unlockDropzone.classList.add('bg-blue-50', 'border-blue-500'); });
        unlockDropzone.addEventListener('dragleave', () => unlockDropzone.classList.remove('bg-blue-50', 'border-blue-500'));
        unlockDropzone.addEventListener('drop', (e) => { e.preventDefault(); unlockDropzone.classList.remove('bg-blue-50', 'border-blue-500'); if(e.dataTransfer.files[0]) handleUnlockFile(e.dataTransfer.files[0]); });

        function resetUnlockButton() {
            doUnlockBtn.disabled = false;
            doUnlockBtn.innerText = 'Unlock PDF';
        }

        doUnlockBtn.addEventListener('click', async () => {
            if (!currentUnlockFile) return;
            try {
                doUnlockBtn.disabled = true;
                doUnlockBtn.innerHTML = `<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Processing...`;
                unlockDownloadBtn.classList.add('hidden');
                unlockStatus.innerText = 'Checking PDF security...';

                const buffer = await currentUnlockFile.arrayBuffer();
                const { PDFDocument } = PDFLib;

                let pdfDoc;
                let needsPassword = false;

                try {
                    pdfDoc = await PDFDocument.load(buffer);
                    if (!pdfDoc.isEncrypted) {
                        showCustomAlert("Not Protected", "This PDF is not protected by a password.");
                        resetUnlockButton();
                        unlockStatus.innerText = '';
                        return;
                    }
                } catch (err) {
                    if (err.message.toLowerCase().includes('encrypted') || err.message.toLowerCase().includes('password')) {
                        needsPassword = true;
                    } else {
                        throw err; 
                    }
                }

                if (needsPassword || (pdfDoc && pdfDoc.isEncrypted)) {
                    showPasswordPrompt(async (pwd) => {
                        try {
                            unlockStatus.innerText = 'Decrypting document...';
                            const unlockedDoc = await PDFDocument.load(buffer, { password: pwd });
                            
                            const pdfBytes = await unlockedDoc.save();
                            const blob = new Blob([pdfBytes], { type: 'application/pdf' });
                            
                            unlockDownloadBtn.href = URL.createObjectURL(blob);
                            unlockDownloadBtn.download = `Unlocked_${currentUnlockFile.name}`;
                            
                            unlockDownloadBtn.classList.remove('hidden');
                            unlockDownloadBtn.classList.add('flex');
                            unlockStatus.innerHTML = `<span class="text-green-600 font-bold">Successfully unlocked!</span> Password removed permanently. Click below to download.`;
                        } catch (pwErr) {
                            showCustomAlert("Error", "Incorrect password or unable to unlock this specific encryption type.");
                            unlockStatus.innerText = '';
                        } finally {
                            resetUnlockButton();
                        }
                    });
                }
            } catch (e) {
                console.error(e);
                unlockStatus.innerHTML = `<span class="text-red-500 font-bold">Error:</span> Could not read PDF file.`;
                resetUnlockButton();
            }
        });

// ==========================================
        // --- DARK / LIGHT MODE TOGGLE ---
        // ==========================================
        const themeToggleBtn = document.getElementById('theme-toggle');
        const themeIconMoon = document.getElementById('theme-icon-moon');
        const themeIconSun = document.getElementById('theme-icon-sun');
        const themeLabel = document.getElementById('theme-label');

        function applyTheme(dark) {
            if (dark) {
                document.documentElement.classList.add('dark');
                themeIconMoon.classList.add('hidden');
                themeIconSun.classList.remove('hidden');
                if(themeLabel) themeLabel.textContent = 'Light';
                localStorage.setItem('pdftools-theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                themeIconMoon.classList.remove('hidden');
                themeIconSun.classList.add('hidden');
                if(themeLabel) themeLabel.textContent = 'Dark';
                localStorage.setItem('pdftools-theme', 'light');
            }
        }

        // Load saved preference
        const savedTheme = localStorage.getItem('pdftools-theme');
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        applyTheme(savedTheme === 'dark' || (!savedTheme && prefersDark));

        themeToggleBtn.addEventListener('click', () => {
            applyTheme(!document.documentElement.classList.contains('dark'));
        });