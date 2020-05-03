# Certbot installation

## aws os

```bash
sudo yum -y install yum-utils
sudo yum install https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm

sudo yum-config-manager --enable rhui-REGION-rhel-server-extras rhui-REGION-rhel-server-optional

sudo yum install certbot python2-certbot-apache
sudo certbot --apache
echo "0 0,12 * * * root python -c 'import random; import time; time.sleep(random.random() * 3600)' && certbot renew" | sudo tee -a /etc/crontab > /dev/null
```

### or if not use:

```bash
https://certbot.eff.org/lets-encrypt/centos6-apache
wget https://dl.eff.org/certbot-auto
sudo mv certbot-auto /usr/local/bin/certbot-auto
sudo chown root /usr/local/bin/certbot-auto
sudo chmod 0755 /usr/local/bin/certbot-auto
sudo /usr/local/bin/certbot-auto --apache # add --debug option if asked for
echo "0 0,12 * * * root python -c 'import random; import time; time.sleep(random.random() * 3600)' && /usr/local/bin/certbot-auto renew" | sudo tee -a /etc/crontab > /dev/null
```

## ubuntu os

reference https://certbot.eff.org/lets-encrypt/ubuntuother-nginx

```bash
wget https://dl.eff.org/certbot-auto
sudo mv certbot-auto /usr/local/bin/certbot-auto
sudo chown root /usr/local/bin/certbot-auto
sudo chmod 0755 /usr/local/bin/certbot-auto

sudo /usr/local/bin/certbot-auto --nginx
echo "0 0,12 * * * root python -c 'import random; import time; time.sleep(random.random() * 3600)' && /usr/local/bin/certbot-auto renew" | sudo tee -a /etc/crontab > /dev/null
```

## bucket hosted site

refernces:

<https://vittegleo.com/post/letsencrypt-lambda-ssl/>
<https://github.com/kiddouk/letslambda>
<https://github.com/mtaweela/certbot-lambda>
