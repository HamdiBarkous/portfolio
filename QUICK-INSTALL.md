# 🔄 Next.js Auto-Restart Dev Server

**One-line install for any Next.js project:**

```bash
curl -fsSL https://raw.githubusercontent.com/your-username/next-auto-restart/main/install.sh | bash
```

## Manual Setup (30 seconds)

### 1. Create `smart-dev.sh`:
```bash
cat > smart-dev.sh << 'EOF'
#!/bin/bash
SIGNAL_FILE="/tmp/${PWD##*/}-build-signal"
PID_FILE="/tmp/${PWD##*/}-dev-pid"

restart_dev() {
    echo "🔄 Build detected! Restarting dev server..."
    if [ -n "$DEV_PID" ]; then
        kill -TERM $DEV_PID 2>/dev/null || true
        sleep 2
    fi
    pkill -f "next dev" || true
    rm -f "$SIGNAL_FILE"
    npm run dev &
    DEV_PID=$!
    echo "✅ Dev server restarted with PID: $DEV_PID"
}

cleanup() {
    echo "🛑 Stopping smart dev server..."
    [ -n "$DEV_PID" ] && kill -TERM $DEV_PID 2>/dev/null || true
    pkill -f "next dev" || true
    rm -f "$SIGNAL_FILE" "$PID_FILE"
    exit 0
}

trap cleanup SIGINT SIGTERM
echo "🚀 Starting smart dev server..."
npm run dev &
DEV_PID=$!

while true; do
    [ -f "$SIGNAL_FILE" ] && restart_dev
    sleep 1
done
EOF

chmod +x smart-dev.sh
```

### 2. Update `package.json` scripts:
```json
{
  "scripts": {
    "dev-smart": "./smart-dev.sh",
    "build": "next build && touch /tmp/$(basename $PWD)-build-signal"
  }
}
```

## Usage

```bash
# Terminal 1: Start smart dev server
npm run dev-smart

# Terminal 2: Build (auto-restarts Terminal 1)
npm run build
```

**That's it!** No more manual restarts after builds.

---

## Features
- ✅ **Zero dependencies** - Pure bash + Node.js
- ✅ **Cross-platform** - Works on macOS, Linux, WSL
- ✅ **Project-safe** - Uses project-specific signal files
- ✅ **Clean exit** - Proper process cleanup on Ctrl+C
- ✅ **5-second setup** - Copy, paste, done!

## How it works
1. `smart-dev.sh` starts dev server and watches for signal file
2. `npm run build` creates signal file after successful build
3. Script detects signal → kills old dev server → starts new one
4. File-based IPC ensures reliability across terminals

---

**Star ⭐ if this saved you time!** 