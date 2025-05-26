FROM php:8.1-apache

# Zapne mod_rewrite, který Nette potřebuje
RUN a2enmod rewrite

# Přenastaví DocumentRoot na /var/www/html/www
RUN sed -i 's|DocumentRoot /var/www/html|DocumentRoot /var/www/html/www|' /etc/apache2/sites-available/000-default.conf \
 && echo "<Directory /var/www/html/www>\n\
    AllowOverride All\n\
    Require all granted\n\
</Directory>" >> /etc/apache2/apache2.conf

# Pracovní adresář (není nutný, ale hodí se)
WORKDIR /var/www/html

# Instalace základních PHP rozšíření (rozšiř podle potřeby)
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libzip-dev \
    zip \
 && docker-php-ext-install zip

# Hotovo. Apache spustí root ve složce www/

# Instalace Composeru
RUN curl -sS https://getcomposer.org/installer -o composer-setup.php \
 && php composer-setup.php --install-dir=/usr/local/bin --filename=composer \
 && rm composer-setup.php