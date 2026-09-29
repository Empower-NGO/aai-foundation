# Deploy the Aai Foundation site on the EmpNGO VPS

Production for this site is the existing EmpowerNGO server. The site runs as its own container, `aai-web`, on the Docker network `empngo_empngo-network`. The existing Nginx container, `empngo-nginx`, receives public traffic and forwards `aaifoundation.org` and `www.aaifoundation.org` to that container.

The GitHub Pages address `https://empower-ngo.github.io/aai-foundation/` is only a preview. Do not point the public domain at GitHub Pages.

## What you need

- SSH access to the EmpNGO VPS.
- A GoDaddy login that can edit DNS for `aaifoundation.org`.
- Docker and Docker Compose already running on the VPS, with the network `empngo_empngo-network` and the container `empngo-nginx`.
- The public IPv4 address of that VPS.

This repository already contains:

- `Dockerfile` — builds a production Next.js server.
- `docker-compose.yml` — starts `aai-web` and attaches it to `empngo_empngo-network`.

The image listens on port `3000` inside the Docker network. It does not publish that port on the host. Visitors reach it only through Nginx.

Do not set `GITHUB_PAGES=true` on the VPS. That flag builds a static preview under the path `/aai-foundation`. The VPS build must be a normal production server at the domain root.

## How a request travels

```text
Browser
  → DNS (aaifoundation.org / www.aaifoundation.org → VPS IP)
  → empngo-nginx (ports 80 and 443 on the host)
  → http://aai-web:3000 (this site, on empngo_empngo-network)
```

## 1. Point the GoDaddy domain at the VPS

The domain stays registered at GoDaddy. Only the DNS records change, so visitors arrive at the EmpNGO VPS. GoDaddy’s own guide for the A record is [Add an A record](https://www.godaddy.com/help/add-an-a-record-19238). The `www` name uses a CNAME, described in [Add a CNAME record](https://www.godaddy.com/help/add-a-cname-record-19236).

### Open the DNS page

1. Sign in at [GoDaddy](https://www.godaddy.com/) and open **Domain Portfolio** ([dcc.godaddy.com/control/portfolio](https://dcc.godaddy.com/control/portfolio)).
2. Select **aaifoundation.org**. That opens Domain Settings.
3. Select **DNS**, or **DNS Management**. You should see the zone records: A, CNAME, MX, TXT, and others.
4. At the top of that page, confirm the nameservers are GoDaddy’s (they look like `nsXX.domaincontrol.com`). If the nameservers belong to another company, these GoDaddy records are not the ones the internet uses. Either change the records at that other company, or switch nameservers back to GoDaddy before continuing.

### Turn off domain forwarding

GoDaddy **Forwarding** is separate from DNS and will override these records.

1. On the same Domain Settings page, open **Forwarding**.
2. If **Domain** or **Subdomain** forwarding is listed for `aaifoundation.org` or `www`, delete it.
3. Save.

### Set the apex record

In **DNS**, find the A record whose **Name** is `@`. A new GoDaddy domain often points `@` at a GoDaddy parking address.

1. Select **Edit** on that `@` A record.
2. Set **Value** to the VPS IPv4 address. Replace the parking address. Do not use **Add another value** to keep the old address as well.
3. Leave **TTL** at 1 hour, or set it to 600 seconds while you are testing.
4. Select **Save**. GoDaddy may ask you to confirm with a verification code.

If there is no `@` A record:

1. Select **Add New Record**.
2. **Type:** A
3. **Name:** `@`
4. **Value:** the VPS IPv4 address
5. **TTL:** 1 hour
6. Select **Save**.

Do not enter `empower-ngo.github.io`. Do not enter the GitHub Pages addresses `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, or `185.199.111.153`.

### Set www

`www` should follow the apex domain. GoDaddy cannot keep an A record and a CNAME on the same name.

1. In the DNS list, look at every row whose **Name** is `www`.
2. If one is already a CNAME with **Value** `@`, leave it.
3. If `www` is an A record, a CNAME to a GoDaddy parking host, or a CNAME to `empower-ngo.github.io`, edit or delete those rows.
4. Add or edit one CNAME:

| Field | Value |
| --- | --- |
| Type | CNAME |
| Name | `www` |
| Value | `@` |
| TTL | 1 hour |

5. Select **Save**.

Finished records:

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | the VPS IPv4 address |
| CNAME | `www` | `@` |

Leave MX and TXT records alone. Those are for email and verification. Changing them does not point the website at the VPS, and deleting them can break mail.

### Wait until DNS matches the server

GoDaddy says a change can apply within an hour and can take up to 48 hours. Check from your own computer:

```bash
nslookup aaifoundation.org
nslookup www.aaifoundation.org
```

Both answers should be the VPS IPv4 address. `www` may show the apex name first and then that same address. Continue with the server steps only after both names resolve there.

## 2. Confirm the EmpNGO Docker network

SSH to the VPS.

```bash
docker network ls
docker ps --format "table {{.Names}}\t{{.Image}}\t{{.Status}}\t{{.Ports}}"
```

You need:

- a network named `empngo_empngo-network`
- a running container named `empngo-nginx`

On this server, `docker network ls` shows `empngo_empngo-network`. Compose created that name from the EmpNGO project name `empngo` plus the network name `empngo-network`. `docker-compose.yml` in this repo joins that network with `name: empngo_empngo-network`.

If `docker ps` does not list `empngo-nginx`, use the Nginx container name that is actually running. The later `docker exec` commands in this document use `empngo-nginx`.

Find where Nginx reads its site files:

```bash
docker inspect empngo-nginx --format "{{range .Mounts}}{{.Source}} -> {{.Destination}}{{println}}{{end}}"
```

Note the host directory that is mounted onto the container’s Nginx config directory (often something like `/etc/nginx/conf.d` or a project `nginx/conf.d` folder). The new site file goes in that host directory.

## 3. Put the code on the VPS

Pick a directory that is not inside another app’s folder. Example:

```bash
sudo mkdir -p /opt/aai-foundation
sudo chown "$USER":"$USER" /opt/aai-foundation
cd /opt/aai-foundation
git clone https://github.com/Empower-NGO/aai-foundation.git .
```

Later updates use the same directory:

```bash
cd /opt/aai-foundation
git pull
```

## 4. Build and start the site container

From `/opt/aai-foundation`:

```bash
docker compose build
docker compose up -d
docker compose ps
docker logs aai-web --tail 50
```

`docker compose ps` should show `aai-web` as running.

Check that Nginx can reach it on the shared network:

```bash
docker exec empngo-nginx wget -qO- http://aai-web:3000/ | head
```

You should see HTML that includes `The Origin of Love`. If `wget` is not in the Nginx image, use:

```bash
docker exec empngo-nginx sh -c "wget -qO- http://aai-web:3000/ | head"
```

If the command fails with connection refused, the app is not listening on the Docker network. The image sets `HOSTNAME=0.0.0.0` and `PORT=3000` for that reason. Rebuild after pulling a commit that contains those settings.

## 5. Add the Nginx site

Create a file in the host directory that is mounted into `empngo-nginx`. Name it `aaifoundation.conf`.

Start with HTTP only, so the certificate request can succeed:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name aaifoundation.org www.aaifoundation.org;

    location / {
        proxy_pass http://aai-web:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

`aai-web` is the container name on `empngo_empngo-network`. Do not use `127.0.0.1` here. Inside the Nginx container, `127.0.0.1` is Nginx itself, not this site.

Test and reload:

```bash
docker exec empngo-nginx nginx -t
docker exec empngo-nginx nginx -s reload
```

Open `http://aaifoundation.org` and `http://www.aaifoundation.org`. Both should show the site.

## 6. Turn on HTTPS

Use the same certificate method the other EmpNGO sites already use. If that method is Certbot on the host, with webroot or the Nginx plugin, repeat it for these two names.

A typical Certbot command, when Certbot is installed on the host and can complete the HTTP challenge through `empngo-nginx`, is:

```bash
sudo certbot certonly --webroot -w /var/www/certbot \
  -d aaifoundation.org -d www.aaifoundation.org
```

Replace `/var/www/certbot` with the webroot this server already uses. If you do not yet have a challenge location, add this inside the port 80 server before running Certbot:

```nginx
location /.well-known/acme-challenge/ {
    root /var/www/certbot;
}
```

That `root` path must be a directory mounted into `empngo-nginx`.

After the certificate exists, replace the site file with HTTP redirect plus HTTPS. Adjust the certificate directory if Certbot wrote it somewhere else:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name aaifoundation.org www.aaifoundation.org;

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 301 https://www.aaifoundation.org$request_uri;
    }
}

server {
    listen 443 ssl;
    listen [::]:443 ssl;
    http2 on;
    server_name aaifoundation.org;

    ssl_certificate /etc/letsencrypt/live/aaifoundation.org/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/aaifoundation.org/privkey.pem;

    return 301 https://www.aaifoundation.org$request_uri;
}

server {
    listen 443 ssl;
    listen [::]:443 ssl;
    http2 on;
    server_name www.aaifoundation.org;

    ssl_certificate /etc/letsencrypt/live/aaifoundation.org/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/aaifoundation.org/privkey.pem;

    location / {
        proxy_pass http://aai-web:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

Reload Nginx again:

```bash
docker exec empngo-nginx nginx -t
docker exec empngo-nginx nginx -s reload
```

`https://aaifoundation.org` should redirect to `https://www.aaifoundation.org`.

Renewal must already be scheduled for the other sites (a systemd timer or cron running `certbot renew`). This certificate is included in that renewal. After renewal, reload Nginx. If the other sites reload Nginx from a deploy hook, this site is covered by the same hook.

## 7. Check the live site

On the VPS:

```bash
curl -I https://www.aaifoundation.org
curl -I https://aaifoundation.org
```

In a browser, check:

- Home, Our Story, Projects, Our Impact, Get Involved, Donate, Transparency, and Contact.
- A photograph loads.
- The donation page shows the bank details and the QR image.
- A phone number on the contact page opens WhatsApp.
- The mobile menu opens, covers the screen, and closes.

## 8. Publish a later change

On your computer, commit and push to `main`. On the VPS:

```bash
cd /opt/aai-foundation
git pull
docker compose build
docker compose up -d
docker logs aai-web --tail 30
```

Nginx does not need a reload unless the domain or proxy settings changed.

## 9. Roll back

```bash
cd /opt/aai-foundation
git log --oneline -5
git checkout <previous-commit>
docker compose build
docker compose up -d
```

To return to the latest commit later:

```bash
git checkout main
git pull
docker compose build
docker compose up -d
```

## Troubleshooting

| What you see | What to check |
| --- | --- |
| `network empngo_empngo-network not found` | `docker network ls`. The EmpNGO stack must be up before `docker compose up`. On this server the name is `empngo_empngo-network`. |
| Nginx 502 Bad Gateway | `docker ps` shows `aai-web` running. `docker logs aai-web`. From `empngo-nginx`, `wget http://aai-web:3000/`. |
| The site loads, but CSS and pictures 404 under `/aai-foundation` | The image was built with `GITHUB_PAGES=true`. Rebuild without that variable. |
| The domain still shows a GoDaddy parking page | In GoDaddy DNS, the `@` A record must be only the VPS address. **Forwarding** for the domain and for `www` must be off. `nslookup` must return the VPS address before you test in a browser. |
| Certificate challenge fails | Port 80 on the VPS reaches `empngo-nginx`, DNS already points here, and the ACME webroot is mounted into Nginx. |
| `nginx -t` fails | The certificate files exist at the paths in the site file, or stay on the HTTP-only config until Certbot finishes. |
| Another EmpNGO site stops working | The new file must be its own `server_name`. Do not edit an existing site’s `server` block to add this domain. |

## Leave GitHub Pages alone

The GitHub Actions workflow can keep publishing the preview at `https://empower-ngo.github.io/aai-foundation/`. Do not set a custom domain on that Pages site while DNS for `aaifoundation.org` points at the VPS. Two hosts must not both claim the same domain.
