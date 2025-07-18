(function() {
    class MicrospaceApi {
        async getApps() {
            // Implement API call to get apps
            // For demonstration purposes, return mock data
            return {
                "apps": [
                    {
                        "id": "550e8400-e29b-41d4-a716-446655440000",
                        "name": "App 1",
                        "type": "microspace",
                        "background": {
                            "type": "color",
                            "value": "#f0f8ff"
                        },
                        "appContainers": [
                            {
                                "name": "Container 1.1",
                                "containedApp": {
                                    "id": "67e55044-10b1-426f-9247-bb680e5fe0c8",
                                    "name": "Contained App 3",
                                    "type": "utility"
                                }
                            },
                            {
                                "name": "Container 1.2",
                                "containedApp": {
                                    "id": "8c805a93-0725-4f1e-8b14-8e875c96b456",
                                    "name": "Contained App 4",
                                    "type": "service"
                                }
                            },
                            {
                                "name": "Nested Microspace Container",
                                "containedApp": {
                                    "id": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
                                    "name": "Dashboard App",
                                    "type": "microspace"
                                }
                            }
                        ]
                    },
                    {
                        "id": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
                        "name": "Dashboard App",
                        "type": "microspace",
                        "background": {
                            "type": "image",
                            "value": "https://images.unsplash.com/photo-1557683316-973673baf926?w=600"
                        },
                        "appContainers": [
                            {
                                "name": "Analytics Container",
                                "containedApp": {
                                    "id": "7c9e6679-7425-40de-944b-e07fc1f90ae7",
                                    "name": "Analytics Module",
                                    "type": "analytics"
                                }
                            },
                            {
                                "name": "Reports Container",
                                "containedApp": {
                                    "id": "b5d5d21c-1a7c-4d2e-a9c4-c3c6b1d63044",
                                    "name": "Report Generator",
                                    "type": "reporting"
                                }
                            },
                            {
                                "name": "Nested Microspace Container",
                                "containedApp": {
                                    "id": "a7c86c9c-f3b9-4dd3-8e1c-9e3d7f6a0b2b",
                                    "name": "Communication Hub",
                                    "type": "microspace"
                                }
                            }
                        ]
                    },
                    {
                        "id": "a7c86c9c-f3b9-4dd3-8e1c-9e3d7f6a0b2b",
                        "name": "Communication Hub",
                        "type": "microspace",
                        "background": {
                            "type": "video",
                            "value": "https://www.w3schools.com/html/mov_bbb.mp4"
                        },
                        "appContainers": [
                            {
                                "name": "Messages Container",
                                "containedApp": {
                                    "id": "d4b8c1a5-e2f6-4d8c-9b4a-7e8f1c9d2b3a",
                                    "name": "Message Center",
                                    "type": "communication"
                                }
                            },
                            {
                                "name": "Video Container",
                                "containedApp": {
                                    "id": "e5c9d8b7-a6f4-4e3d-b2c1-9a8f7e6d5b4c",
                                    "name": "Video Conference",
                                    "type": "streaming"
                                }
                            },
                            {
                                "name": "Nested Microspace Container",
                                "containedApp": {
                                    "id": "f1e2d3c4-b5a6-4789-8901-2345cdef6789",
                                    "name": "Project Manager",
                                    "type": "microspace"
                                }
                            }
                        ]
                    },
                    {
                        "id": "f1e2d3c4-b5a6-4789-8901-2345cdef6789",
                        "name": "Project Manager",
                        "type": "microspace",
                        "background": {
                            "type": "color",
                            "value": "#e6ffe6"
                        },
                        "appContainers": [
                            {
                                "name": "Tasks Container",
                                "containedApp": {
                                    "id": "0a1b2c3d-4e5f-6789-8901-23456789abcd",
                                    "name": "Task Tracker",
                                    "type": "productivity"
                                }
                            },
                            {
                                "name": "Calendar Container",
                                "containedApp": {
                                    "id": "9876fedc-ba98-7654-3210-fedcba987654",
                                    "name": "Team Calendar",
                                    "type": "scheduling"
                                }
                            },
                            {
                                "name": "Nested Microspace Container",
                                "containedApp": {
                                    "id": "550e8400-e29b-41d4-a716-446655440000",
                                    "name": "App 1",
                                    "type": "microspace"
                                }
                            }
                        ]
                    }
                ]
            };
        }

        async getAppById(id) {
            // Implement API call to get app by id
            // For demonstration purposes, return mock data
            return {
                "id": "550e8400-e29b-41d4-a716-446655440000",
                "name": "App 1",
                "type": "microspace",
                "background": {
                    "type": "color",
                    "value": "#f0f8ff"
                },
                "appContainers": [
                    {
                        "name": "Container 1.1",
                        "containedApp": {
                            "id": "67e55044-10b1-426f-9247-bb680e5fe0c8",
                            "name": "Contained App 3",
                            "type": "utility"
                        }
                    },
                    {
                        "name": "Container 1.2",
                        "containedApp": {
                            "id": "8c805a93-0725-4f1e-8b14-8e875c96b456",
                            "name": "Contained App 4",
                            "type": "service"
                        }
                    },
                    {
                        "name": "Nested Microspace Container",
                        "containedApp": {
                            "id": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
                            "name": "Dashboard App",
                            "type": "microspace"
                        }
                    }
                ]
            };
        }

        async updateApp(appId, updateData) {
            try {
                const response = await fetch(`/api/apps/${appId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(updateData)
                });
                if (!response.ok) throw new Error('Failed to update app');
                return await response.json();
            } catch (error) {
                console.error('Error updating app:', error);
                throw error;
            }
        }
    }

    class Microspace {
        constructor() {
            this.containerId = 'microspace-' + Math.random().toString(36).substr(2, 9);
            this.zoomLevel = 1;
            this.orientation = window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';
            this.activeZoom = null;
            this.taskbarGroups = new Map(); // Store taskbar groups
            this.api = new MicrospaceApi(); // Initialize API service
            this.init();
            this.bindEvents();
            this.activeEditModal = null;
        }

        async init() {
            this.createContainer();
            this.addStyles();  // Add styles first
            
            // Create taskbar
            const taskbar = document.createElement('div');
            taskbar.id = 'microspace-taskbar';
            document.body.appendChild(taskbar);
            
            try {
                const data = await this.api.getApps();
                console.log('Received data from API:', data); // Add logging
                await this.render(data);
            } catch (error) {
                console.error('Failed to initialize Microspace:', error);
                // Show error message to user
                const container = document.getElementById(this.containerId);
                if (container) {
                    container.innerHTML = '<div class="error-message">Failed to load workspace. Please try again later.</div>';
                }
            }
            
        }

        async findAppById(id) {
            try {
                return await this.api.getAppById(id);
            } catch (error) {
                console.error('Error finding app by id:', error);
                return null;
            }
        }

        createContainer() {
            const container = document.createElement('div');
            container.id = this.containerId;
            container.className = 'containers-0';
            document.body.appendChild(container);
        }

        async createAppElement(app, level = 0) {
            if (level >= 4 || !app) return null;

            // If this is a reference to a microspace, get the full microspace data
            if (app.type === 'microspace') {
                const fullAppData = await this.findAppById(app.id);
                if (fullAppData) {
                    app = fullAppData;
                }
            }

            // Create container
            const containerDiv = document.createElement('div');
            containerDiv.className = `container-${level}`;
            containerDiv.setAttribute('data-app-id', app.id);
            
            // Add container header with edit button
            const containerHeader = document.createElement('div');
            containerHeader.className = 'container-header';
            
            const titleSpan = document.createElement('span');
            titleSpan.textContent = app.name;
            containerHeader.appendChild(titleSpan);
            
            const editButton = document.createElement('button');
            editButton.className = 'edit-button';
            editButton.innerHTML = '<i class="fas fa-edit"></i>';
            editButton.onclick = (e) => {
                e.stopPropagation();
                this.showEditModal(app);
            };
            containerHeader.appendChild(editButton);
            
            containerDiv.appendChild(containerHeader);

            // Create contained app
            const containedAppDiv = document.createElement('div');
            containedAppDiv.className = `contained-app-${level} app`;
            containedAppDiv.id = app.id;
            containedAppDiv.dataset.type = app.type;
            containedAppDiv.dataset.appId = app.id;
            containedAppDiv.dataset.level = level;

            // Add background
            const backgroundDiv = document.createElement('div');
            backgroundDiv.className = 'app-background';
            if (app.background) {
                if (app.background.type === 'color') {
                    backgroundDiv.classList.add('color');
                    backgroundDiv.style.backgroundColor = app.background.value;
                } else if (app.background.type === 'image') {
                    const img = document.createElement('img');
                    img.src = app.background.value;
                    backgroundDiv.appendChild(img);
                } else if (app.background.type === 'video') {
                    const video = document.createElement('video');
                    video.src = app.background.value;
                    video.autoplay = true;
                    video.loop = true;
                    video.muted = true;
                    backgroundDiv.appendChild(video);
                }
            }
            containedAppDiv.appendChild(backgroundDiv);

            // Add app header
            const appHeader = document.createElement('div');
            appHeader.className = 'app-header';
            appHeader.textContent = app.name;
            containedAppDiv.appendChild(appHeader);

            // Add peek area for microspaces
            if (app.type === 'microspace') {
                const peekDiv = document.createElement('div');
                peekDiv.className = 'peek-area';
                containedAppDiv.appendChild(peekDiv);

                // Add containers for child apps
                const containersDiv = document.createElement('div');
                containersDiv.className = `containers-${level + 1}`;
                
                if (app.appContainers && Array.isArray(app.appContainers)) {
                    for (const container of app.appContainers) {
                        if (container && container.containedApp) {
                            const childAppElement = await this.createAppElement(container.containedApp, level + 1);
                            if (childAppElement) {
                                containersDiv.appendChild(childAppElement);
                            }
                        }
                    }
                }
                
                containedAppDiv.appendChild(containersDiv);
            }

            containerDiv.appendChild(containedAppDiv);
            return containerDiv;
        }

        async render(data) {
            const container = document.getElementById(this.containerId);
            if (!container) return;

            console.log('Rendering data:', data); // Add logging

            // Clear existing content
            container.innerHTML = '';

            // Create top-level app elements
            if (data && data.apps) {
                for (const app of data.apps) {
                    console.log('Creating app element:', app); // Add logging
                    const appElement = await this.createAppElement(app, 0);
                    if (appElement) {
                        container.appendChild(appElement);
                    }
                }
            } else {
                console.error('Invalid data structure:', data);
            }
        }

        bindEvents() {
            window.addEventListener('resize', () => {
                this.orientation = window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';
                this.updateLayout();
            });

            // Handle hover events for any app
            document.body.addEventListener('mouseover', (e) => {
                const hoveredApp = e.target.closest('.app');
                if (hoveredApp && parseInt(hoveredApp.dataset.level) > 0) {
                    // Skip if we're hovering over a zoomed app
                    if (hoveredApp.dataset.zoomed === 'true') {
                        return;
                    }

                    // Find the nearest parent microspace that is either zoomed or level 0
                    let currentElement = hoveredApp;
                    while (currentElement) {
                        const parentMicrospace = currentElement.closest('.app[data-type="microspace"][data-zoomed="true"], .app[data-type="microspace"][data-level="0"]');
                        if (parentMicrospace) {
                            // Skip if the hovered app is the same as the parent microspace
                            if (hoveredApp === parentMicrospace) {
                                return;
                            }
                            const peekArea = parentMicrospace.querySelector('.peek-area');
                            if (peekArea) {
                                let contentToShow;
                                const appType = hoveredApp.dataset.type;
                                const appId = hoveredApp.dataset.appId;

                                if (appType === 'microspace') {
                                    // For microspaces, show their containers
                                    contentToShow = hoveredApp.cloneNode(true);
                                    contentToShow.style.transform = 'none';
                                    contentToShow.style.position = 'relative';
                                    contentToShow.style.width = '100%';
                                    contentToShow.style.height = '100%';
                                    contentToShow.style.margin = '0';
                                    
                                    // Hide peek area in the preview
                                    const previewPeekArea = contentToShow.querySelector('.peek-area');
                                    if (previewPeekArea) {
                                        previewPeekArea.style.display = 'none';
                                    }
                                    
                                    // Ensure background is visible in peek
                                    const background = contentToShow.querySelector('.app-background');
                                    if (background) {
                                        background.style.opacity = '0.3';
                                    }
                                } else {
                                    // For other apps, find their data and create a preview
                                    const appData = this.findAppById(appId);
                                    if (appData) {
                                        contentToShow = document.createElement('div');
                                        contentToShow.className = 'app-preview';
                                        
                                        // Create a preview based on app type
                                        const preview = document.createElement('div');
                                        preview.className = 'preview-content';
                                        
                                        switch(appType) {
                                            case 'utility':
                                                preview.innerHTML = `
                                                    <div class="utility-preview">
                                                        <h3>${appData.name}</h3>
                                                        <div class="utility-tools">
                                                            <span class="tool">🔧 Settings</span>
                                                            <span class="tool">📊 Statistics</span>
                                                            <span class="tool">⚡ Quick Actions</span>
                                                        </div>
                                                    </div>
                                                `;
                                                break;
                                            case 'reporting':
                                                preview.innerHTML = `
                                                    <div class="reporting-preview">
                                                        <h3>${appData.name}</h3>
                                                        <div class="report-tools">
                                                            <span class="tool">📄 Generate Report</span>
                                                            <span class="tool">📊 View Templates</span>
                                                            <span class="tool">📈 Analytics</span>
                                                        </div>
                                                        <div class="metrics">
                                                            <div>Reports: 15</div>
                                                            <div>Templates: 8</div>
                                                            <div>Last: 2h ago</div>
                                                        </div>
                                                    </div>
                                                `;
                                                break;
                                            case 'service':
                                                preview.innerHTML = `
                                                    <div class="service-preview">
                                                        <h3>${appData.name}</h3>
                                                        <div class="service-status">
                                                            <span class="status">✅ Service Running</span>
                                                            <div class="metrics">
                                                                <div>CPU: 12%</div>
                                                                <div>Memory: 256MB</div>
                                                                <div>Uptime: 24h</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                `;
                                                break;
                                            case 'analytics':
                                                preview.innerHTML = `
                                                    <div class="analytics-preview">
                                                        <h3>${appData.name}</h3>
                                                        <div class="chart-preview">
                                                            📈 Live Data Preview
                                                            <div class="metrics">
                                                                <div>Users: 1.2K</div>
                                                                <div>Sessions: 3.5K</div>
                                                                <div>Conversion: 2.8%</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                `;
                                                break;
                                            case 'communication':
                                                preview.innerHTML = `
                                                    <div class="communication-preview">
                                                        <h3>${appData.name}</h3>
                                                        <div class="comm-status">
                                                            <span class="status">🟢 Online</span>
                                                            <div class="metrics">
                                                                <div>Messages: 42</div>
                                                                <div>Channels: 8</div>
                                                                <div>Active: 15</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                `;
                                                break;
                                            case 'streaming':
                                                preview.innerHTML = `
                                                    <div class="streaming-preview">
                                                        <h3>${appData.name}</h3>
                                                        <div class="stream-status">
                                                            <span class="status">🎥 Ready to Stream</span>
                                                            <div class="metrics">
                                                                <div>Quality: HD</div>
                                                                <div>Latency: 120ms</div>
                                                                <div>Viewers: 5</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                `;
                                                break;
                                            default:
                                                preview.innerHTML = `
                                                    <div class="default-preview">
                                                        <h3>${appData.name}</h3>
                                                        <div class="app-info">
                                                            <div>Type: ${appType}</div>
                                                            <div>Status: Active</div>
                                                        </div>
                                                    </div>
                                                `;
                                        }
                                        
                                        contentToShow.appendChild(preview);
                                    }
                                }

                                if (contentToShow) {
                                    // Clone the content and show it in the peek area
                                    const clonedContent = contentToShow.cloneNode(true);
                                    peekArea.innerHTML = '';
                                    peekArea.appendChild(clonedContent);
                                }
                            }
                            break;
                        }
                        currentElement = currentElement.parentElement;
                    }
                }
            });

            document.body.addEventListener('mouseout', (e) => {
                const hoveredApp = e.target.closest('.app');
                if (hoveredApp && parseInt(hoveredApp.dataset.level) > 0) {
                    let currentElement = hoveredApp;
                    while (currentElement) {
                        const parentMicrospace = currentElement.closest('.app[data-type="microspace"][data-zoomed="true"], .app[data-type="microspace"][data-level="0"]');
                        if (parentMicrospace) {
                            const peekArea = parentMicrospace.querySelector('.peek-area');
                            if (peekArea) {
                                peekArea.innerHTML = '';
                            }
                            break;
                        }
                        currentElement = currentElement.parentElement;
                    }
                }
            });

            // Use event delegation on document body to handle clicks in any microspace
            document.body.addEventListener('click', (e) => {
                const appElement = e.target.closest('.app');
                if (appElement && !e.target.closest('.close-button')) {
                    const type = appElement.getAttribute('data-type');
                    if (type === 'microspace') {
                        this.zoomToApp(appElement);
                        e.stopPropagation();
                    }
                }
            });

            // Add drag functionality for zoomed apps
            document.addEventListener('mousedown', (e) => {
                const titleBar = e.target.closest('.title-bar');
                const closeButton = e.target.closest('.close-button');
                
                if (titleBar && !closeButton && titleBar.closest('.app[data-zoomed="true"]')) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const appElement = titleBar.closest('.app');
                    const startX = e.clientX;
                    const startY = e.clientY;
                    const rect = appElement.getBoundingClientRect();
                    const startLeft = rect.left;
                    const startTop = rect.top;
                    let isDragging = false;

                    titleBar.classList.add('dragging');
                    appElement.style.transition = 'none';

                    const onMouseMove = (moveEvent) => {
                        moveEvent.preventDefault();
                        moveEvent.stopPropagation();

                        if (!isDragging) {
                            isDragging = true;
                        }

                        const deltaX = moveEvent.clientX - startX;
                        const deltaY = moveEvent.clientY - startY;
                        
                        // Calculate boundaries
                        const viewportWidth = window.innerWidth;
                        const viewportHeight = window.innerHeight;
                        
                        let newLeft = startLeft + deltaX;
                        let newTop = startTop + deltaY;
                        
                        // Prevent dragging outside viewport boundaries
                        newLeft = Math.max(0, Math.min(newLeft, viewportWidth - rect.width));
                        newTop = Math.max(0, Math.min(newTop, viewportHeight - rect.height));
                        
                        appElement.style.left = `${newLeft}px`;
                        appElement.style.top = `${newTop}px`;
                        appElement.style.transform = 'none';
                    };

                    const onMouseUp = (upEvent) => {
                        upEvent.preventDefault();
                        upEvent.stopPropagation();
                        
                        document.removeEventListener('mousemove', onMouseMove, { capture: true });
                        document.removeEventListener('mouseup', onMouseUp, { capture: true });
                        
                        titleBar.classList.remove('dragging');
                        appElement.style.transition = 'all 0.3s ease';
                        
                        if (isDragging) {
                            // Prevent the click event from firing
                            const preventClick = (clickEvent) => {
                                clickEvent.stopPropagation();
                                clickEvent.preventDefault();
                                document.removeEventListener('click', preventClick, true);
                            };
                            document.addEventListener('click', preventClick, true);
                        }
                    };

                    document.addEventListener('mousemove', onMouseMove, { capture: true });
                    document.addEventListener('mouseup', onMouseUp, { capture: true });
                }
            }, { capture: true });
        }

        zoomToApp(appElement, forceClose = false) {
            const currentZoom = appElement.dataset.zoomed === 'true';
            const closeButton = appElement.querySelector('.close-button');
            const appId = appElement.dataset.appId;
            const parentZoomedApp = appElement.closest('.app[data-zoomed="true"]');
            const parentId = parentZoomedApp?.dataset.appId;
            
            if (forceClose || currentZoom) {
                // Remove from taskbar
                this.removeFromTaskbar(appId);
                
                // Get placeholder
                const placeholder = document.querySelector('.app-placeholder[data-app-id="' + appId + '"]');
                if (!placeholder) return;
                
                const rect = placeholder.getBoundingClientRect();
                
                // Animate back to original position
                appElement.style.transition = 'all 0.3s ease';
                appElement.style.transform = 'none';
                appElement.style.top = rect.top + 'px';
                appElement.style.left = rect.left + 'px';
                appElement.style.width = rect.width + 'px';
                appElement.style.height = rect.height + 'px';
                
                setTimeout(() => {
                    // Move back to original position
                    placeholder.parentNode.insertBefore(appElement, placeholder);
                    appElement.dataset.zoomed = 'false';
                    appElement.style = '';
                    if (closeButton) closeButton.style.display = 'none';
                    
                    // Restore nested-peek class if it's a nested microspace
                    const peekArea = appElement.querySelector('.peek-area');
                    if (peekArea && parseInt(appElement.dataset.level) > 0) {
                        peekArea.classList.add('nested-peek');
                    }
                    
                    placeholder.remove();
                    this.activeZoom = null;
                    if (!document.querySelector('.app[data-zoomed="true"]')) {
                        document.body.style.overflow = '';
                    }
                }, 300);
                
                return;
            }

            // Create placeholder
            const placeholder = document.createElement('div');
            placeholder.className = 'app-placeholder';
            placeholder.dataset.appId = appId;
            const rect = appElement.getBoundingClientRect();

            // Match original dimensions and position
            placeholder.style.width = rect.width + 'px';
            placeholder.style.height = rect.height + 'px';
            placeholder.style.margin = window.getComputedStyle(appElement).margin;

            // Insert placeholder
            appElement.parentNode.insertBefore(placeholder, appElement);

            // Calculate the target container and position
            const targetContainer = parentZoomedApp || document.body;
            const targetRect = targetContainer.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

            // Move app to target container
            targetContainer.appendChild(appElement);

            // Start from current position
            appElement.style.position = 'fixed';
            appElement.style.top = (rect.top - targetRect.top + scrollTop) + 'px';
            appElement.style.left = (rect.left - targetRect.left + scrollLeft) + 'px';
            appElement.style.width = rect.width + 'px';
            appElement.style.height = rect.height + 'px';
            appElement.style.margin = '0';
            appElement.style.zIndex = '1000';
            appElement.style.transition = 'all 0.3s ease';
            appElement.dataset.zoomed = 'true';
            document.body.style.overflow = 'hidden';

            // Reorganize the content
            const header = appElement.querySelector('.app-header');
            const headerText = header ? header.textContent : appElement.querySelector('.title-text').textContent;
            const containers = appElement.querySelector('.containers');

            // Create title bar and content wrapper if they don't exist
            if (!appElement.querySelector('.title-bar')) {
                // Create title bar
                const titleBar = document.createElement('div');
                titleBar.className = 'title-bar';

                // Create title text
                const titleTextElement = document.createElement('div');
                titleTextElement.className = 'title-text';
                titleTextElement.textContent = headerText;
                titleBar.appendChild(titleTextElement);

                // Move close button to title bar
                const closeButton = header ? header.querySelector('.close-button') : null;
                if (closeButton) {
                    titleBar.appendChild(closeButton);
                }

                // Create content wrapper
                const content = document.createElement('div');
                content.className = 'app-content';
                
                // Save the background element
                const background = appElement.querySelector('.app-background');
                
                // Move existing content to the new wrapper
                const contentElements = [];
                Array.from(appElement.children).forEach(child => {
                    if (child !== header && !child.classList.contains('app-background')) {
                        contentElements.push(child);
                    }
                });

                // Clear the app element
                appElement.innerHTML = '';

                // Restore background first
                if (background) {
                    appElement.appendChild(background);
                }

                // Add title bar
                appElement.appendChild(titleBar);

                // Add content wrapper and move content into it
                appElement.appendChild(content);
                
                // Restore all content elements to the content wrapper
                contentElements.forEach(element => {
                    content.appendChild(element);
                });
            }

            // Force reflow
            appElement.offsetHeight;

            // Animate to center of parent container
            requestAnimationFrame(() => {
                appElement.style.transition = 'all 0.3s ease';
                appElement.style.position = 'fixed';
                appElement.style.top = '50%';
                appElement.style.left = '50%';
                appElement.style.transform = 'translate(-50%, -50%)';
                
                // Remove nested-peek class when zoomed
                const peekArea = appElement.querySelector('.peek-area');
                if (peekArea) {
                    peekArea.classList.remove('nested-peek');
                }
                
                // Calculate dimensions based on parent container
                const maxWidth = Math.min(800, targetRect.width * 0.9);
                const maxHeight = Math.min(600, targetRect.height * 0.9);
                appElement.style.width = maxWidth + 'px';
                appElement.style.height = maxHeight + 'px';
                appElement.style.maxWidth = targetRect.width * 0.9 + 'px';
                appElement.style.maxHeight = targetRect.height * 0.9 + 'px';
                const closeButton = appElement.querySelector('.title-bar .close-button');
                closeButton.style.display = 'block';
            });

            // Add to taskbar
            this.addToTaskbar(appElement, parentId);
            this.activeZoom = appElement;
        }

        addToTaskbar(appElement, parentId = null) {
            const appId = appElement.dataset.appId;
            const taskbar = document.getElementById('microspace-taskbar');
            
            // Create or get group
            let group;
            if (parentId) {
                if (!this.taskbarGroups.has(parentId)) {
                    group = document.createElement('div');
                    group.className = 'taskbar-group';
                    this.taskbarGroups.set(parentId, group);
                    taskbar.appendChild(group);
                } else {
                    group = this.taskbarGroups.get(parentId);
                }
            }

            // Create taskbar button
            const button = document.createElement('div');
            button.className = 'taskbar-button';
            button.dataset.appId = appId;
            
            // Copy background from app
            const background = appElement.querySelector('.app-background');
            if (background) {
                const clone = background.cloneNode(true);
                clone.style.position = 'absolute';
                button.appendChild(clone);
            }

            // Add app name
            const name = document.createElement('span');
            const titleText = appElement.querySelector('.title-text') || appElement.querySelector('.app-header');
            name.textContent = titleText ? titleText.textContent : 'Untitled';
            button.appendChild(name);

            // Add click handler
            button.addEventListener('click', () => {
                const targetApp = document.querySelector(`.app[data-app-id="${appId}"]`);
                if (targetApp) {
                    this.zoomToApp(targetApp);
                }
            });

            // Add to appropriate container
            if (group) {
                group.appendChild(button);
            } else {
                taskbar.appendChild(button);
            }
        }

        removeFromTaskbar(appId) {
            const button = document.querySelector(`.taskbar-button[data-app-id="${appId}"]`);
            if (button) {
                const group = button.closest('.taskbar-group');
                button.remove();
                
                // Remove empty group
                if (group && !group.children.length) {
                    this.taskbarGroups.delete(group.dataset.parentId);
                    group.remove();
                }
            }
        }

        updateLayout() {
            const container = document.getElementById(this.containerId);
            container.dataset.orientation = this.orientation;
        }

        addStyles() {
            const styles = document.createElement('style');
            styles.textContent = `
                #${this.containerId} {
                    font-family: Arial, sans-serif;
                    padding: 20px;
                    padding-bottom: 80px;
                }

                .app {
                    position: relative;
                    width: 250px;
                    height: 400px;
                    border-radius: 8px;
                    overflow: hidden;
                    margin: 10px;
                }

                .app-background {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 0;
                }

                .app-background.color {
                    background-size: cover;
                }

                .app-background img,
                .app-background video {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .app-header,
                .peek-area,
                .containers {
                    position: relative;
                    z-index: 1;
                }

                .apps-container {
                    height: 100%;
                }

                .apps-container:after {
                    content: "";
                    display: table;
                    clear: both;
                }

                .app[data-level="0"],
                .app[data-zoomed="true"] {
                    float: left;
                    background: #ffffff;
                    border: 2px solid #2c3e50;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                }
                
                .app[data-level="0"] > .app-header,
                .app[data-zoomed="false"] .app-header {
                    background: #2c3e50;
                    color: white;
                    padding: 15px;
                    border-bottom: 2px solid #34495e;
                }

                /* Modern peek-area styles */
                .peek-area {
                    height: 200px;
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(5px);
                    border-top: 1px solid rgba(255, 255, 255, 0.2);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
                    margin: 0 15px;
                    border-radius: 8px;
                    position: relative;
                    overflow: hidden;
                    padding: 15px;
                    z-index: 1;
                }

                .containers-0 {
                    width: 100%;
                    height: 100%;
                    position: relative;
                    overflow: hidden;
                    padding: 20px;
                }

                .container-0 {
                    float: left;
                    width: 320px;
                    height: 480px;
                    margin: 5px;
                    box-sizing: border-box;
                    border-radius: 4px;
                    position: relative;
                }

                .container-header {
                    height: 20px;
                    padding: 2px 5px;
                    background: #f0f0f0;
                    font-size: 12px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .contained-app-0 {
                    position: relative;
                    width: 100%;
                    height: calc(100% - 20px);
                    background: white;
                    border-radius: 4px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                }

                .app-background {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 0;
                    background-size: cover;
                    background-position: center;
                }

                .app-header {
                    position: relative;
                    height: 30px;
                    padding: 5px 10px;
                    background: rgba(255, 255, 255, 0.9);
                    border-bottom: 1px solid #eee;
                    z-index: 1;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .close-button {
                    background: none;
                    border: none;
                    font-size: 20px;
                    cursor: pointer;
                    padding: 0 5px;
                }

                .containers-1 {
                    position: relative;
                    flex: 1;
                    overflow: auto;
                    z-index: 1;
                    padding: 10px;
                }

                .container-1 {
                    float: left;
                    width: 80px;
                    height: 80px;
                    margin: 5px;
                    box-sizing: border-box;
                    border-radius: 4px;
                }

                .container-2 {
                    float: left;
                    width: 80px;
                    height: 80px;
                    margin: 5px;
                    box-sizing: border-box;
                    border-radius: 4px;
                }

                .container-3 {
                    float: left;
                    width: 80px;
                    height: 80px;
                    margin: 5px;
                    box-sizing: border-box;
                    border-radius: 4px;
                }

                .containers:after {
                    content: "";
                    display: table;
                    clear: both;
                }

                .app[data-level="1"],
                .app[data-zoomed="true"] .app {
                    background: #f1f2f6;
                    border: 2px solid #5758BB;
                    box-shadow: 0 3px 8px rgba(87,88,187,0.1);
                    width: 80px;
                    height: 80px;
                    min-height: unset;
                }
                .app[data-level="1"] > .app-header,
                .app[data-zoomed="true"] .app > .app-header {
                    background: #5758BB;
                    color: white;
                    padding: 8px;
                    border-bottom: 2px solid #6c5ce7;
                    font-size: 10px;
                }
                .app[data-level="1"] > .containers,
                .app[data-zoomed="true"] .app > .containers {
                    display: none;
                }

                .app[data-level="2"],
                .app[data-zoomed="true"] .app .app {
                    background: #fafafa;
                    border: 2px solid #00b894;
                    box-shadow: 0 2px 6px rgba(0,184,148,0.1);
                    width: 15px;
                    height: 15px;
                    min-height: unset;
                }
                .app[data-level="2"] > .app-header,
                .app[data-zoomed="true"] .app .app > .app-header {
                    background: #00b894;
                    color: white;
                    padding: 2px;
                    border-bottom: 2px solid #00cec9;
                    font-size: 6px;
                }
                .app[data-level="2"] > .containers,
                .app[data-zoomed="true"] .app .app > .containers {
                    display: none;
                }

                .app[data-level="3"],
                .app[data-zoomed="true"] .app .app .app {
                    display: none;
                }

                .nested-peek {
                    background: rgba(255, 255, 255, 0.9);
                    border-radius: 8px;
                    margin: 10px;
                    box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
                }

                /* Taskbar styles */
                #microspace-taskbar {
                    position: fixed;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 60px;
                    background: rgba(44, 62, 80, 0.95);
                    backdrop-filter: blur(10px);
                    display: flex;
                    align-items: center;
                    padding: 0 20px;
                    gap: 10px;
                    z-index: 10000;
                    box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
                }

                .taskbar-button {
                    position: relative;
                    width: 50px;
                    height: 50px;
                    border-radius: 6px;
                    overflow: hidden;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    border: 2px solid rgba(255,255,255,0.1);
                }

                .taskbar-button:hover {
                    transform: translateY(-2px);
                    border-color: rgba(255,255,255,0.3);
                }

                .taskbar-button .app-background {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 0;
                }

                .taskbar-button span {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background: rgba(0,0,0,0.7);
                    color: white;
                    font-size: 8px;
                    padding: 2px;
                    text-align: center;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .taskbar-group {
                    display: flex;
                    gap: 5px;
                    padding: 5px;
                    background: rgba(255,255,255,0.1);
                    border-radius: 8px;
                }

                .app[data-zoomed="true"] {
                    position: fixed !important;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    z-index: 1000;
                    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
                    transition: all 0.3s ease;
                }

                .app[data-zoomed="true"] .app-content {
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    background: rgba(255, 255, 255, 0.15);
                    backdrop-filter: blur(5px);
                }

                /* Landscape layout for zoomed apps */
                @media (min-aspect-ratio: 1/1) {
                    .app[data-zoomed="true"] .app-content {
                        flex-direction: row;
                    }

                    .app[data-zoomed="true"] .peek-area {
                        width: 50%;
                        height: 100%;
                        margin: 0;
                        border-right: 1px solid rgba(255, 255, 255, 0.2);
                        border-top: none;
                        border-bottom: none;
                    }

                    .app[data-zoomed="true"] .containers-1,
                    .app[data-zoomed="true"] .containers-2,
                    .app[data-zoomed="true"] .containers-3 {
                        width: 50%;
                        height: 100%;
                        overflow-y: auto;
                        padding: 15px;
                    }
                }

                /* Portrait layout for zoomed apps */
                @media (max-aspect-ratio: 1/1) {
                    .app[data-zoomed="true"] .peek-area {
                        height: 200px;
                    }

                    .app[data-zoomed="true"] .containers-1,
                    .app[data-zoomed="true"] .containers-2,
                    .app[data-zoomed="true"] .containers-3 {
                        flex: 1;
                        overflow-y: auto;
                        padding: 15px;
                    }
                }

                .title-bar {
                    position: relative;
                    background: #2c3e50;
                    color: white;
                    padding: 12px 16px;
                    cursor: grab;
                    user-select: none;
                    z-index: 10;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    border-bottom: 1px solid rgba(255,255,255,0.1);
                }

                .title-bar.dragging {
                    cursor: grabbing;
                }

                .title-text {
                    font-weight: 500;
                    flex-grow: 1;
                }

                .close-button {
                    background: none;
                    border: none;
                    color: white;
                    font-size: 20px;
                    cursor: pointer;
                    padding: 0 8px;
                    opacity: 0.8;
                    transition: opacity 0.2s;
                }

                .close-button:hover {
                    opacity: 1;
                }

                .app-content {
                    position: relative;
                    height: calc(100% - 45px);
                    overflow: auto;
                }

                .app-preview {
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: white;
                    text-shadow: 0 1px 2px rgba(0,0,0,0.2);
                }

                .preview-content {
                    background: rgba(0, 0, 0, 0.2);
                    padding: 20px;
                    border-radius: 8px;
                    width: 100%;
                    height: 100%;
                }

                .preview-content h3 {
                    margin: 0 0 15px 0;
                    font-size: 1.2em;
                }

                .utility-tools, .service-status, .chart-preview, .app-info {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                .tool, .status {
                    background: rgba(255, 255, 255, 0.1);
                    padding: 8px 12px;
                    border-radius: 4px;
                    display: inline-block;
                }

                .metrics {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 10px;
                    margin-top: 10px;
                    text-align: center;
                }

                .metrics div {
                    background: rgba(255, 255, 255, 0.05);
                    padding: 5px;
                    border-radius: 4px;
                }

                .preview-container {
                    padding: 15px;
                    color: #2c3e50;
                }

                .preview-container h3 {
                    margin: 0 0 10px 0;
                    font-size: 16px;
                    color: #2c3e50;
                }

                .preview-container .metrics {
                    display: flex;
                    justify-content: space-around;
                    margin-top: 10px;
                    font-size: 12px;
                    color: #7f8c8d;
                }

                .preview-container .tool {
                    display: inline-block;
                    padding: 4px 8px;
                    margin: 2px;
                    background: rgba(44, 62, 80, 0.1);
                    border-radius: 4px;
                    font-size: 12px;
                }

                .preview-container .status {
                    display: inline-block;
                    padding: 4px 8px;
                    background: rgba(46, 204, 113, 0.1);
                    border-radius: 4px;
                    font-size: 12px;
                    color: #27ae60;
                }

                .reporting-preview .report-tools,
                .utility-preview .utility-tools,
                .service-preview .service-status,
                .analytics-preview .chart-preview,
                .communication-preview .comm-status,
                .streaming-preview .stream-status {
                    background: rgba(255, 255, 255, 0.5);
                    padding: 8px;
                    border-radius: 6px;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
                }

                .preview-container .metrics div {
                    background: rgba(255, 255, 255, 0.5);
                    padding: 4px 8px;
                    border-radius: 4px;
                    box-shadow: 0 1px 2px rgba(0,0,0,0.05);
                }

                .edit-button {
                    background: none;
                    border: none;
                    color: #fff;
                    cursor: pointer;
                    padding: 5px;
                    margin-left: 10px;
                    opacity: 0.7;
                    transition: opacity 0.2s;
                    float: right;
                }
                
                .edit-button:hover {
                    opacity: 1;
                }
                
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.5);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                }
                
                .edit-modal {
                    background: #fff;
                    border-radius: 8px;
                    padding: 20px;
                    width: 500px;
                    max-width: 90%;
                    color: #333;
                }
                
                .modal-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 20px;
                }
                
                .modal-header h3 {
                    margin: 0;
                    color: #333;
                }
                
                .close-modal {
                    background: none;
                    border: none;
                    font-size: 24px;
                    cursor: pointer;
                    color: #666;
                }
                
                .form-group {
                    margin-bottom: 15px;
                }
                
                .form-group label {
                    display: block;
                    margin-bottom: 5px;
                    color: #333;
                }
                
                .form-group input,
                .form-group textarea {
                    width: 100%;
                    padding: 8px;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    background: #fff;
                    color: #333;
                }
                
                .form-group textarea {
                    height: 100px;
                    resize: vertical;
                }
                
                .modal-footer {
                    display: flex;
                    justify-content: flex-end;
                    gap: 10px;
                    margin-top: 20px;
                }
                
                .modal-footer button {
                    padding: 8px 16px;
                    border-radius: 4px;
                    cursor: pointer;
                }
                
                .save-button {
                    background: #007bff;
                    color: #fff;
                    border: none;
                }
                
                .cancel-button {
                    background: #6c757d;
                    color: #fff;
                    border: none;
                }
            `;
            document.head.appendChild(styles);
        }

        showEditModal(app) {
            // Create modal overlay
            const overlay = document.createElement('div');
            overlay.className = 'modal-overlay';
            
            // Create modal content
            const modal = document.createElement('div');
            modal.className = 'edit-modal';
            
            modal.innerHTML = `
                <div class="modal-header">
                    <h3>Edit App</h3>
                    <button class="close-modal">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label for="app-name">Name:</label>
                        <input type="text" id="app-name" value="${app.name}">
                    </div>
                    <div class="form-group">
                        <label for="app-description">Description:</label>
                        <textarea id="app-description">${app.description || ''}</textarea>
                    </div>
                    <div class="form-group">
                        <label for="app-type">Type:</label>
                        <input type="text" id="app-type" value="${app.type}">
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="save-button">Save</button>
                    <button class="cancel-button">Cancel</button>
                </div>
            `;
            
            overlay.appendChild(modal);
            document.body.appendChild(overlay);
            
            // Event handlers
            const closeBtn = modal.querySelector('.close-modal');
            const saveBtn = modal.querySelector('.save-button');
            const cancelBtn = modal.querySelector('.cancel-button');
            
            closeBtn.onclick = () => this.closeEditModal(overlay);
            cancelBtn.onclick = () => this.closeEditModal(overlay);
            saveBtn.onclick = () => this.saveAppChanges(app, overlay);
            
            this.activeEditModal = overlay;
        }

        closeEditModal(overlay) {
            if (overlay) {
                document.body.removeChild(overlay);
                this.activeEditModal = null;
            }
        }

        async saveAppChanges(app, overlay) {
            const nameInput = overlay.querySelector('#app-name');
            const descriptionInput = overlay.querySelector('#app-description');
            const typeInput = overlay.querySelector('#app-type');
            
            const updateData = {
                ...app,
                name: nameInput.value,
                description: descriptionInput.value,
                type: typeInput.value
            };
            
            try {
                await this.api.updateApp(app.id, updateData);
                // Update the UI
                const containerDiv = document.querySelector(`[data-app-id="${app.id}"]`);
                if (containerDiv) {
                    const titleSpan = containerDiv.querySelector('.container-header span');
                    titleSpan.textContent = updateData.name;
                }
                this.closeEditModal(overlay);
            } catch (error) {
                alert('Failed to save changes. Please try again.');
            }
        }
    }

    window.Microspace = Microspace;
})();