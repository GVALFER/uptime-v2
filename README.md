# Uptime API

Simple API to monitor hosts with periodic checks and alerts.

## Requirements

- Node.js 20+
- npm
- Linux server

## OS setup

### AlmaLinux (root)

```bash
dnf update -y
dnf install -y git curl firewalld

curl -fsSL https://rpm.nodesource.com/setup_20.x | bash -
dnf install -y nodejs
npm install -g pm2

systemctl enable --now firewalld
firewall-cmd --add-port=3105/tcp --permanent
firewall-cmd --reload
```

### Ubuntu (root)

```bash
apt update -y
apt install -y git curl ufw

curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs
npm install -g pm2

ufw allow OpenSSH
ufw allow 3105/tcp
ufw --force enable
```

Clone and prepare:

```bash
mkdir -p /opt/uptime-v2
cd /opt/uptime-v2
git clone <REPO_URL> .
```

Create `.env`:

```bash
cat > .env << 'EOF'
UPTIME_API_KEY=your_key
UPTIME_HOST=0.0.0.0
UPTIME_PORT=3105
UPTIME_DATABASE_URL=file:./prisma/dev.db
TELEGRAM_TOKEN=
TELEGRAM_CHAT_ID=
EOF
```

Build and start:

```bash
npm ci
npm run build
npm run migrate:deploy
npm run pm2:start
pm2 save
pm2 startup systemd -u root --hp /root
# run the command printed by pm2 startup
```

Verify:

```bash
pm2 status
ss -ltnp | grep 3105
curl -i http://127.0.0.1:3105/
```

Test from your machine:

```bash
curl -i -H "X-API-KEY:your_key" http://<SERVER_IP>:3105/
```

Update deployment:

```bash
cd /opt/uptime-v2
git pull
npm ci
npm run build
npm run migrate:deploy
npm run pm2:reload
```

## Notes

- `UPTIME_API_KEY` is required. Requests without `X-API-KEY` return `401`.
- If local curl works but external access times out, allow inbound `TCP 3105` in IONOS firewall policy.
