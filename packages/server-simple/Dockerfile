FROM php:7.4-apache

# Copy the contents of the current directory to the container
COPY . /var/www/html

# Set the correct permissions
RUN chown -R www-data:www-data /var/www/html

# Update the Apache configuration to allow access to the public directory
RUN echo "<Directory /var/www/html>\n\
    Options Indexes FollowSymLinks\n\
    AllowOverride None\n\
    Require all granted\n\
</Directory>" > /etc/apache2/conf-available/public.conf \
    && a2enconf public