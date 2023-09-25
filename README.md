## Reactjs 18, HTML5, CSS3, NPM, SCSS, node > 16
## Component:
1. CountdownTimer: CountdownTimer shows the current countdown time, current laps time and buttons like start, stop etc.
2. Button: Common component for buttons. It will take props’ name, customClass, clickhandler
3. InputTimePicker: User can enter a number for hours, minutes and seconds
4. Laps: It will display the laps’ details like laps time, countdown time
5. commonService: Common function like padStart, getTimeAsString etc
6. useCountdownTimer: It is a custom hook for business logic like start, stop, laps time etc.

## Deployment:
1. [Sandbox Link](https://codesandbox.io/p/github/saini2244/countdown-timer/main?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clmynjkh700093b6jkcsshzzl%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clmynjkh600033b6j09p6am4v%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clmynjkh700063b6jx2402wsf%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clmynjkh700083b6jer5eit4d%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clmynjkh600033b6j09p6am4v%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clmynjkh600023b6jm2pvhxum%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522id%2522%253A%2522clmynjkh600033b6j09p6am4v%2522%252C%2522activeTabId%2522%253A%2522clmynjkh600023b6jm2pvhxum%2522%257D%252C%2522clmynjkh700083b6jer5eit4d%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clmynjkh700073b6jmyn50798%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522port%2522%253A3000%252C%2522path%2522%253A%2522%252F%2522%257D%255D%252C%2522id%2522%253A%2522clmynjkh700083b6jer5eit4d%2522%252C%2522activeTabId%2522%253A%2522clmynjkh700073b6jmyn50798%2522%257D%252C%2522clmynjkh700063b6jx2402wsf%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clmynjkh700043b6jef7asvj0%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522start%2522%257D%252C%257B%2522id%2522%253A%2522clmynjkh700053b6jc1zoea2x%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TERMINAL%2522%252C%2522shellId%2522%253A%2522clmxoxm9j001ae6fy25rob0ja%2522%257D%255D%252C%2522id%2522%253A%2522clmynjkh700063b6jx2402wsf%2522%252C%2522activeTabId%2522%253A%2522clmynjkh700053b6jc1zoea2x%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D&workspaceId=e6b8db2d-ab8e-4b51-b6fa-c5f8a2b9975d)
### Steps to deploy on sandbox
1. Open https://codesandbox.io/s/react-new
2. Select the new repository
3. Import repository (https://github.com/saini2244/countdown-timer.git)
4. It will work after few seconds

## Debugging and Monitoring:
1. google analytics to track the button click, pages and timer etc.

## How to setup in local:
1. git clone https://github.com/saini2244/countdown-timer.git
2. git branch main
3. npm install
4. npm start
5. Open localhost:3000 in browser
6. npm run test (to run the unit test cases)

