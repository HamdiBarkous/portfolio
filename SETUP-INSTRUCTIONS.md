# Next.js Auto-Restart Development Server

## Setup

### 1. Install Script
Copy `smart-dev-template.sh` to your project root:

```bash
cp smart-dev-template.sh smart-dev.sh
chmod +x smart-dev.sh
```

### 2. Configure package.json
Update your build script and add the dev-smart command:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build && touch /tmp/$(basename $PWD)-build-signal",
    "dev-smart": "./smart-dev.sh"
  }
}
```

### 3. Usage
```bash
npm run dev-smart    # Terminal 1
npm run build        # Terminal 2 - triggers restart
```

## Alternative: Manual Installation

Create the script directly:

```bash
cat > smart-dev.sh << 'EOF'
#!/bin/bash

SIGNAL_FILE="/tmp/${PWD##*/}-build-signal"
PID_FILE="/tmp/${PWD##*/}-dev-pid"

restart_dev() {
    echo "Build detected. Restarting dev server..."
    [ -n "$DEV_PID" ] && kill -TERM $DEV_PID 2>/dev/null || true
    pkill -f "next dev" || true
    rm -f "$SIGNAL_FILE"
    npm run dev &
    DEV_PID=$!
    echo "Dev server restarted (PID: $DEV_PID)"
}

cleanup() {
    echo "Stopping dev server..."
    [ -n "$DEV_PID" ] && kill -TERM $DEV_PID 2>/dev/null || true
    pkill -f "next dev" || true
    rm -f "$SIGNAL_FILE" "$PID_FILE"
    exit 0
}

trap cleanup SIGINT SIGTERM
echo "Starting development server..."
npm run dev &
DEV_PID=$!

while true; do
    [ -f "$SIGNAL_FILE" ] && restart_dev
    sleep 1
done
EOF

chmod +x smart-dev.sh
```

Update package.json scripts:

```json
{
  "scripts": {
    "build": "next build && touch /tmp/$(basename $PWD)-build-signal",
    "dev-smart": "./smart-dev.sh"
  }
}
```

## Implementation

The system uses file-based inter-process communication:

1. Build script creates `/tmp/projectname-build-signal`
2. Development script polls for signal file
3. On detection: terminates current server, starts fresh instance
4. Signal file removed, monitoring continues

## Troubleshooting

**Script permissions:**
```bash
chmod +x smart-dev.sh
```

**Port conflicts:**
Existing Next.js processes are automatically terminated before restart.

**Signal detection:**
Ensure project directory name contains no special characters. Signal file uses `$(basename $PWD)`.

**Multiple projects:**
Each project uses isolated signal files based on directory name. 