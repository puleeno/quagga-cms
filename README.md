Quagga CMS
=====

Quagga CMS is a free and open-source content management system (CMS) that is built on the PHP framework Slim. Quagga CMS is easy to use and flexible, making it a great choice for creating a wide variety of websites and digital content, such as blogs, wikis, and e-commerce websites.

# Features

## Quagga CMS includes a variety of features, such as:

A user-friendly interface that makes it easy to create and manage content without having to know how to code.
A variety of built-in templates, themes, and plugins that make it easy to customize your website.
Support for multiple languages.
A variety of features to help improve the SEO of your website.
Support for user roles and permissions.
A variety of security features.
Benefits of using Quagga CMS

## There are many benefits to using Quagga CMS, including:

Ease of use: Quagga CMS is easy to use, even for users who have no prior experience with web development.
Flexibility: Quagga CMS is flexible and can be used to create a wide variety of websites and digital content.
Features: Quagga CMS includes a variety of features that make it easy to create, manage, and publish digital content.
Security: Quagga CMS can help to improve the security of your website by providing features such as user roles and permissions, and security patches and updates.
Support: Quagga CMS has a large community of users and developers who can provide support and help with troubleshooting.
Getting started with Quagga CMS

## To get started with Quagga CMS, you can follow these steps:

Download the Quagga CMS installation package from the Quagga CMS website.
Install the Quagga CMS installation package on your web server.
Create a database for Quagga CMS.
Configure Quagga CMS.
Start using Quagga CMS to create and manage your website or digital content.
Support

If you need help with Quagga CMS, you can visit the Quagga CMS website or join the Quagga CMS community forum.

## Webserver Configs

### NGINX

```
server {
    listen       80;
    server_name  domain_name.com;
    set          $based  /var/www;
    root         $based/public;
    index        index.php;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ ^/(extensions|themes)/(.+)/assets/(.+)\.(eot|svg|ttf|woff|woff2|png|jpg|gif|css|js)$ {
      root $based;
    }
}

```

# License

Quagga CMS is licensed under the MIT license.

# Contributors

Quagga CMS is developed and maintained by a community of volunteers.

# Credits

Quagga CMS uses a variety of open-source software libraries and components.

