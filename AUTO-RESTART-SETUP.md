# Auto-Restart Dev Server Setup

This setup allows you to automatically restart your Next.js dev server when you run `npm run build` in a different terminal. Perfect for testing builds without manual restarts!

## 🎯 What This Does

- **Terminal 1**: Runs a smart dev server that watches for build signals
- **Terminal 2**: Run `npm run build` and Terminal 1 automatically restarts
- **Result**: No more manual Ctrl+C → `npm run dev` after builds!

## 📋 Prerequisites

- Node.js and npm installed
- A Next.js project
- Unix-like system (Linux, macOS, WSL)

## 🚀 Setup Instructions

### Step 1: Create the Smart Dev Server Script

Create a file called `smart-dev.sh` in your project root:

```bash
#!/bin/bash

# Create a signal file to communicate between terminals
SIGNAL_FILE="/tmp/portfolio-build-signal"
PID_FILE="/tmp/portfolio-dev-pid"

# Store this process PID
echo $$ > "$PID_FILE"

# Function to restart dev server
restart_dev() {
    echo "🔄 Build detected! Restarting dev server..."
    
    # Kill the current Next.js dev process more aggressively
    if [ -n "$DEV_PID" ]; then
        echo "Stopping dev server (PID: $DEV_PID)..."
        kill -TERM $DEV_PID 2>/dev/null || true
        sleep 2
        kill -KILL $DEV_PID 2>/dev/null || true
    fi
    
    # Also kill any lingering Next.js processes on port 3000
    pkill -f "next dev" || true
    sleep 1
    
    # Remove the signal file
    rm -f "$SIGNAL_FILE"
    
    echo "Starting fresh dev server..."
    # Start new dev server in background and capture PID
    npm run dev &
    DEV_PID=$!
    echo "✅ Dev server restarted with PID: $DEV_PID"
}

# Cleanup function
cleanup() {
    echo "🛑 Stopping smart dev server..."
    if [ -n "$DEV_PID" ]; then
        kill -TERM $DEV_PID 2>/dev/null || true
        sleep 1
        kill -KILL $DEV_PID 2>/dev/null || true
    fi
    pkill -f "next dev" || true
    rm -f "$SIGNAL_FILE" "$PID_FILE"
    exit 0
}

# Handle Ctrl+C
trap cleanup SIGINT SIGTERM

echo "🚀 Starting smart dev server..."
echo "💡 Run 'npm run build' in another terminal to auto-restart this server"

# Kill any existing Next.js processes first
pkill -f "next dev" || true
sleep 1

# Start initial dev server
npm run dev &
DEV_PID=$!
echo "📡 Dev server started with PID: $DEV_PID"

# Watch for build signal in background
while true; do
    if [ -f "$SIGNAL_FILE" ]; then
        restart_dev
    fi
    sleep 1
done
```

### Step 2: Make the Script Executable

```bash
chmod +x smart-dev.sh
```

### Step 3: Update package.json

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "dev-smart": "./smart-dev.sh",
    "build": "next build && touch /tmp/portfolio-build-signal",
    "start": "next start",
    "lint": "next lint"
  }
}
```

**Key changes:**
- Added `"dev-smart": "./smart-dev.sh"` - the smart dev server
- Modified `"build"` to include `&& touch /tmp/portfolio-build-signal` - sends signal after build

## 🎮 How to Use

### Option 1: Two Terminal Setup (Recommended)

**Terminal 1 (Dev Server):**
```bash
npm run dev-smart
```

**Terminal 2 (Build Terminal):**
```bash
npm run build
```

Every time you run `npm run build` in Terminal 2, Terminal 1 will automatically restart!

### Option 2: Alternative Scripts (Fallback)

If the smart setup doesn't work, you can use these simpler alternatives:

**Simple restart script (`build-and-restart.sh`):**
```bash
#!/bin/bash
echo "🔄 Stopping any running dev servers..."
pkill -f "npm run dev" || true
pkill -f "next dev" || true

echo "🏗️  Building the project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful! Starting dev server..."
    npm run dev
else
    echo "❌ Build failed! Not starting dev server."
    exit 1
fi
```

Then run: `./build-and-restart.sh`

## 🔧 How It Works

### The Magic Behind the Scenes

1. **Signal File**: The build command creates a file at `/tmp/portfolio-build-signal`
2. **Watcher Loop**: The smart dev server checks for this file every second
3. **Process Management**: When found, it kills the old dev server and starts a new one
4. **Cleanup**: Removes the signal file and manages process IDs properly

### File Communication Flow

```
Terminal 2: npm run build
     ↓
Creates: /tmp/portfolio-build-signal
     ↓
Terminal 1: Detects signal file
     ↓
Kills current dev server
     ↓
Starts new dev server
     ↓
Removes signal file
```

## 🐛 Troubleshooting

### Port Issues
If you see "Port 3000 is in use, using available port 3001 instead":

1. Stop the smart dev server (Ctrl+C)
2. Clean up processes: `pkill -f "next dev"`
3. Remove signal files: `rm -f /tmp/portfolio-build-signal /tmp/portfolio-dev-pid`
4. Restart: `npm run dev-smart`

### Permission Issues
If you get "Permission denied":
```bash
chmod +x smart-dev.sh
```

### Script Not Found
Make sure you're in the project root directory where `smart-dev.sh` exists.

## 🎨 Customization

### Change the Signal File Location
Edit the `SIGNAL_FILE` variable in `smart-dev.sh`:
```bash
SIGNAL_FILE="/tmp/your-project-build-signal"
```

And update `package.json` build script accordingly:
```json
"build": "next build && touch /tmp/your-project-build-signal"
```

### Add Build Success Notifications
Add to the build script in `package.json`:
```json
"build": "next build && echo '✅ Build complete!' && touch /tmp/portfolio-build-signal"
```

## 🚀 Advanced Usage

### Watch Mode (Experimental)
For automatic rebuilds on file changes, use `watch-and-restart.sh`:

```bash
#!/bin/bash
echo "👀 Watching for changes... Press Ctrl+C to stop"

build_and_restart() {
    echo "🔄 Change detected! Rebuilding..."
    pkill -f "npm run dev" || true
    
    if npm run build; then
        echo "✅ Build successful! Restarting dev server..."
        npm run dev &
    else
        echo "❌ Build failed! Fix errors and save again."
    fi
}

# Requires: sudo apt install inotify-tools
while inotifywait -r -e modify,create,delete src/; do
    build_and_restart
done
```

## 📝 Notes

- Works on Linux, macOS, and WSL
- Uses temporary files for inter-process communication
- Gracefully handles process cleanup
- Maintains the same port (3000) across restarts
- Safe to interrupt with Ctrl+C

## 🤝 Contributing

Feel free to improve this setup! Common enhancements:
- Windows PowerShell version
- Better error handling
- Notification system integration
- IDE integration

---

**Happy coding! 🎉** 