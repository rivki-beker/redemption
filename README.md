# Waiting For Redemption

This project is a timer application developed using **Node.js** and **Electron** that displays the number of years, days, hours, minutes, and seconds since the destruction of the Second Temple. The application also includes a link to [Tehilim.co](https://tehilim.co/) for additional related content.

## Features

- **Real-Time Countup**: Displays the elapsed time since the destruction of the Second Temple in a small, always-on-top window.
- **Customizable Styles**: The application uses custom CSS for styling, with responsive design considerations for different screen sizes.
- **Simple & Lightweight**: The application runs in a small window, positioned at the bottom-left of the screen, making it unobtrusive.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rivki-beker/redemption
   cd redemption
   ```

2. **Install the dependencies:**
   ```bash
   npm install
   ```

3. **Run the application:**
   ```bash
   npm start
   ```

### Packaging for Windows

To package the app as a standalone Windows executable, run:

```bash
npx electron-packager . timer --platform=win32 --arch=x64 --out=dist
```

### Running the App

After packaging, navigate to the `dist` directory and run the `timer.exe` file.

## Usage

- The application opens a small window at the bottom-left of your screen showing the.
- The window is always on top, so it will remain visible even when other applications are in use.
- Clicking on the displayed timer will open a link to [Tehilim.co](https://tehilim.co/).

## Files

- **index.html**: Contains the HTML structure of the application.
- **main.js**: The main Electron process, responsible for creating the application window.
- **styles.css**: CSS file for styling the application.
- **script.js**: Handles any dynamic behavior or interaction for the timer.

## Dependencies

- **Electron**: The framework used to build the desktop application.
- **Node.js**: Runtime environment for the server-side code.

## Development

To make changes or contribute to this project, follow these steps:

1. **Fork the repository** and clone your fork.
2. **Make your changes** on a new branch.
3. **Test your changes** to ensure everything works as expected.
4. **Submit a pull request** for review.

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/rivki-beker/redemption/issues) to see what you can work on.

## Acknowledgements

- Thanks to [Tehilim.co](https://tehilim.co/) for the inspiration and additional resources.
