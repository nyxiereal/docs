# Deploying the LAMP Stack on Ubuntu Server

1. Install all packages
```bash
sudo apt install apache2 mysql-server php libapache2-mod-php php-mysql ufw
```
2. Enable UFW and allow necessary ports
```bash
sudo ufw enable
sudo ufw allow 'Apache'
sudo ufw allow 80
sudo ufw allow 443
```
3. Start and enable Apache and ufw services
```bash
sudo systemctl start apache2
sudo systemctl enable apache2
sudo systemctl start ufw
sudo systemctl enable ufw
```
4. Secure MySQL installation
```bash
sudo mysql_secure_installation
```
5. Create a apache site configuration file
```bash
sudo nano /etc/apache2/sites-available/your_domain.conf
```
:::tip
Replace `your_domain` with your actual domain name!!!
:::
```
<VirtualHost *:80>
    ServerName your_domain
    ServerAlias www.your_domain
    ServerAdmin webmaster@localhost
    DocumentRoot /var/www/your_domain
    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```
6. Enable the new site and disable the default site
```bash
sudo a2ensite your_domain
sudo a2dissite 000-default
sudo systemctl reload apache2
```
7. Create the document root directory
```bash
sudo mkdir -p /var/www/your_domain
```
8. Set permissions for the document root
```bash
sudo chown -R $USER:$USER /var/www/your_domain
```
9. Create a sample PHP file to test the setup
```bash
nano /var/www/your_domain/info.php
```
```php
<?php
phpinfo();
?>
```
10. Create a sample index.html file
```bash
nano /var/www/your_domain/index.html
```
```html
<html>
<head>
    <title>Welcome to Your Domain</title>
</head>
<body>
    <h1>Success! The LAMP stack is working!</h1>
</body>
</html>
```
11. Change the internet adapters for both machines to internal network and set the same network name for both. Allow all in the promiscuous mode settings.
12. On the server run this command to set the ip address
```bash
sudo ip a add 172.222.XXX.YYY/24 dev enp0s3
```
13. Connect to the server from the client using the server's IP address in a web browser
```
http://172.222.XXX.YYY
```
14. You should see the index.html page you created earlier. To view the PHP info page, navigate to
```
http://172.222.XXX.YYY/info.php
```
15. To set the ip address for a windows 10 client, open PowerShell or CMD as administrator and run the following command
```powershell
netsh interface ip set address name="Ethernet" static 172.222.XXX.1YY 255.255.255.0
```