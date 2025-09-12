# Deploying the nClean server

:::warning
Deploying the nClean server on Windows is not supported, I highly recommend using a Linux-based server for production deployments AND using Docker.
:::

## Bare metal Linux installation
:::tip Python requirements
nClean requires Python 3.10 or higher, please install it using the package manager for your distro.
:::
1. Clone the nClean repository from GitHub
```bash
git clone https://github.com/nyxiereal/nClean.git
cd nClean
```
2. Install uv
:::warning uv installation method
I recommend installing uv from your package manager instead of running the script below
:::
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```
3. Install the dependencies
:::tip
Please adjust the activate file to the shell you're currently using!
:::
```bash
uv venv WebUI
cd WebUI
source bin/activate
uv pip install -r requirements.txt
```
4. Start the gunicorn server
:::warning
Gunicorn isn't available on Windows, please use WSL or a Linux-based server.
:::
```bash
uv run gunicorn -w 4 -b 0.0.0.0:5002 main:app
```

## Deploying in Docker
1. Clone the nClean repository from GitHub
```bash
git clone https://github.com/nyxiereal/nClean.git
cd nClean
```
2. Build the Docker image
```bash
docker buildx build -t nclean .
```
3. Run the Docker container
```bash
docker run -d -p 5002:5002 nclean --name nclean
```
4. Log into the admin panel for nClean using the admin/admin user credentials, then restart the server and log in again.